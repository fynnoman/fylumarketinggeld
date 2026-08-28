import * as cheerio from "cheerio";
import { validateAnalyzerUrl } from "./url-guard";

export type Severity = "critical" | "warning" | "good";

export type CheckCategory =
  | "meta"
  | "heading"
  | "content"
  | "images"
  | "technical"
  | "structured-data"
  | "local"
  | "links";

export type CheckResult = {
  id: string;
  category: CheckCategory;
  severity: Severity;
  label: string;
  detail: string;
  recommendation?: string;
};

// Kategorien, die primär SEO-relevant sind (für den fokussierten SEO-Check-Report).
export const SEO_CATEGORIES: ReadonlySet<CheckCategory> = new Set([
  "meta",
  "heading",
  "content",
  "structured-data",
  "local",
  "links",
]);

export type AnalyzerResult = {
  url: string;
  finalUrl: string;
  fetchedAt: string;
  score: number; // 0-100
  totals: { critical: number; warning: number; good: number };
  meta: {
    title: string | null;
    titleLength: number;
    description: string | null;
    descriptionLength: number;
    canonical: string | null;
    robots: string | null;
    viewport: string | null;
    lang: string | null;
    ogTitle: string | null;
    ogImage: string | null;
    twitterCard: string | null;
    hreflangCount: number;
  };
  headings: {
    h1Count: number;
    h2Count: number;
    firstH1: string | null;
  };
  images: {
    total: number;
    missingAlt: number;
  };
  content: {
    wordCount: number;
    ctaCount: number;
  };
  links: {
    internal: number;
    external: number;
    genericAnchor: number;
  };
  technical: {
    isHttps: boolean;
    responseMs: number;
    htmlBytes: number;
    hasSchemaOrg: boolean;
    schemaTypes: string[];
    hasFavicon: boolean;
    noindex: boolean;
  };
  local: {
    hasLocalBusiness: boolean;
    mentionsCity: boolean;
  };
  checks: CheckResult[];
};

export type AnalyzerError = {
  code:
    | "invalid-url"
    | "fetch-timeout"
    | "fetch-failed"
    | "non-html"
    | "too-large"
    | "http-error";
  message: string;
  status?: number;
};

const FETCH_TIMEOUT_MS = 12_000;
const MAX_HTML_BYTES = 3 * 1024 * 1024; // 3 MB

const CTA_PATTERNS =
  /(kontakt|angebot|termin|beratung|anfrage|buchen|kostenlos|jetzt|call|demo|starten|reservieren|schreiben)/i;

const GERMAN_CITY_HINTS = [
  "saarbrücken",
  "saarlouis",
  "saarland",
  "berlin",
  "hamburg",
  "köln",
  "münchen",
  "frankfurt",
  "stuttgart",
  "düsseldorf",
  "leipzig",
  "hannover",
  "bremen",
  "dresden",
  "nürnberg",
  "essen",
  "dortmund",
];

export async function analyze(rawUrl: string): Promise<AnalyzerResult | AnalyzerError> {
  const validation = validateAnalyzerUrl(rawUrl);
  if (!validation.ok) {
    return { code: "invalid-url", message: validation.reason };
  }

  const url = validation.url;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  const startedAt = performance.now();

  let response: Response;
  try {
    response = await fetch(url.toString(), {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; FyluAnalyzer/1.0; +https://www.fylumarketing.de/tools/website-check)",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-language": "de-DE,de;q=0.9,en;q=0.5",
      },
    });
  } catch (err) {
    clearTimeout(timer);
    const aborted = err instanceof DOMException && err.name === "AbortError";
    return {
      code: aborted ? "fetch-timeout" : "fetch-failed",
      message: aborted
        ? "Die Website hat nicht innerhalb von 12 Sekunden geantwortet."
        : "Die Website konnte nicht geladen werden.",
    };
  }
  clearTimeout(timer);

  const responseMs = Math.round(performance.now() - startedAt);

  if (!response.ok) {
    return {
      code: "http-error",
      status: response.status,
      message: `Server hat mit HTTP ${response.status} geantwortet.`,
    };
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("text/html")) {
    return {
      code: "non-html",
      message: "Die URL liefert kein HTML zurück.",
    };
  }

  // Größenlimit
  const buffer = await response.arrayBuffer();
  if (buffer.byteLength > MAX_HTML_BYTES) {
    return {
      code: "too-large",
      message: "Die HTML-Antwort ist zu groß für die Analyse.",
    };
  }

  const html = new TextDecoder("utf-8", { fatal: false }).decode(buffer);
  const $ = cheerio.load(html);

  const meta = extractMeta($);
  const headings = extractHeadings($);
  const images = extractImages($);
  const content = extractContent($);
  const links = extractLinks($, url);
  const structured = extractStructuredData($);
  const noindex = /noindex/i.test(meta.robots ?? "");

  const technical = {
    isHttps: url.protocol === "https:",
    responseMs,
    htmlBytes: buffer.byteLength,
    hasSchemaOrg: structured.hasSchema,
    schemaTypes: structured.types,
    hasFavicon: $('link[rel~="icon"]').length > 0,
    noindex,
  };

  const local = {
    hasLocalBusiness: structured.types.some((t) =>
      /local|professional|business|dentist|attorney|physician|hospital|dental/i.test(t),
    ),
    mentionsCity: GERMAN_CITY_HINTS.some((c) =>
      html.toLowerCase().includes(c),
    ),
  };

  const checks = runChecks({
    meta,
    headings,
    images,
    content,
    links,
    technical,
    local,
    finalUrl: response.url,
  });

  const totals = { critical: 0, warning: 0, good: 0 };
  for (const c of checks) totals[c.severity]++;

  const score = computeScore(checks);

  return {
    url: url.toString(),
    finalUrl: response.url,
    fetchedAt: new Date().toISOString(),
    score,
    totals,
    meta,
    headings,
    images,
    content,
    links,
    technical,
    local,
    checks,
  };
}

function extractMeta($: cheerio.CheerioAPI) {
  const title = ($("head > title").first().text() || "").trim() || null;
  const description = ($('meta[name="description"]').attr("content") ?? "").trim() || null;
  const canonical = ($('link[rel="canonical"]').attr("href") ?? "").trim() || null;
  const robots = ($('meta[name="robots"]').attr("content") ?? "").trim() || null;
  const viewport = ($('meta[name="viewport"]').attr("content") ?? "").trim() || null;
  const lang = ($("html").attr("lang") ?? "").trim() || null;
  const ogTitle = ($('meta[property="og:title"]').attr("content") ?? "").trim() || null;
  const ogImage = ($('meta[property="og:image"]').attr("content") ?? "").trim() || null;
  const twitterCard = ($('meta[name="twitter:card"]').attr("content") ?? "").trim() || null;
  const hreflangCount = $('link[rel="alternate"][hreflang]').length;
  return {
    title,
    titleLength: title?.length ?? 0,
    description,
    descriptionLength: description?.length ?? 0,
    canonical,
    robots,
    viewport,
    lang,
    ogTitle,
    ogImage,
    twitterCard,
    hreflangCount,
  };
}

function extractHeadings($: cheerio.CheerioAPI) {
  const h1s = $("h1");
  const firstH1 = h1s.first().text().trim() || null;
  return {
    h1Count: h1s.length,
    h2Count: $("h2").length,
    firstH1,
  };
}

function extractImages($: cheerio.CheerioAPI) {
  const imgs = $("img");
  let missing = 0;
  imgs.each((_, el) => {
    const alt = ($(el).attr("alt") ?? "").trim();
    if (!alt) missing++;
  });
  return { total: imgs.length, missingAlt: missing };
}

function extractContent($: cheerio.CheerioAPI) {
  const bodyClone = $("body").clone();
  bodyClone.find("script, style, noscript, template").remove();
  const text = bodyClone.text().replace(/\s+/g, " ").trim();
  const words = text ? text.split(/\s+/).length : 0;
  const anchors = $("a").toArray();
  let ctaCount = 0;
  for (const a of anchors) {
    const t = $(a).text().trim();
    if (t && t.length <= 60 && CTA_PATTERNS.test(t)) ctaCount++;
  }
  return { wordCount: words, ctaCount };
}

const GENERIC_ANCHOR_TEXT = new Set([
  "hier",
  "klicken",
  "hier klicken",
  "mehr",
  "mehr erfahren",
  "mehr lesen",
  "weiter",
  "weiter lesen",
  "mehr dazu",
  "read more",
  "click here",
  "more",
  "learn more",
]);

function extractLinks($: cheerio.CheerioAPI, pageUrl: URL) {
  let internal = 0;
  let external = 0;
  let genericAnchor = 0;
  const host = pageUrl.hostname.toLowerCase();

  $("a[href]").each((_, el) => {
    const href = ($(el).attr("href") ?? "").trim();
    if (!href || href.startsWith("#")) return;
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;

    let target: URL | null = null;
    try {
      target = new URL(href, pageUrl);
    } catch {
      return;
    }

    const isInternal = target.hostname.toLowerCase() === host;
    if (isInternal) internal++;
    else external++;

    // Anchor-Text-Qualität nur für interne Links prüfen (dort ist es steuerbar).
    if (isInternal) {
      const anchor = ($(el).text() || "").trim().toLowerCase();
      if (anchor && GENERIC_ANCHOR_TEXT.has(anchor)) genericAnchor++;
    }
  });

  return { internal, external, genericAnchor };
}

function extractStructuredData($: cheerio.CheerioAPI): { hasSchema: boolean; types: string[] } {
  const scripts = $('script[type="application/ld+json"]');
  if (scripts.length === 0) return { hasSchema: false, types: [] };
  const types = new Set<string>();
  scripts.each((_, el) => {
    const raw = $(el).contents().text();
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      collectTypes(parsed, types);
    } catch {
      /* ignore malformed */
    }
  });
  return { hasSchema: true, types: Array.from(types) };
}

function collectTypes(node: unknown, out: Set<string>): void {
  if (Array.isArray(node)) {
    for (const item of node) collectTypes(item, out);
    return;
  }
  if (node && typeof node === "object") {
    const obj = node as Record<string, unknown>;
    const t = obj["@type"];
    if (typeof t === "string") out.add(t);
    else if (Array.isArray(t)) for (const s of t) if (typeof s === "string") out.add(s);
    for (const v of Object.values(obj)) collectTypes(v, out);
  }
}

type CheckInput = {
  meta: AnalyzerResult["meta"];
  headings: AnalyzerResult["headings"];
  images: AnalyzerResult["images"];
  content: AnalyzerResult["content"];
  links: AnalyzerResult["links"];
  technical: AnalyzerResult["technical"];
  local: AnalyzerResult["local"];
  finalUrl: string;
};

function runChecks(i: CheckInput): CheckResult[] {
  const c: CheckResult[] = [];

  // TITLE
  if (!i.meta.title) {
    c.push(critical("meta-title-missing", "meta", "Meta-Title fehlt", "Ohne Title kann Google die Seite nicht sinnvoll darstellen.", "Setzen Sie im <head> ein <title>-Element mit 45–60 Zeichen. Das wichtigste Keyword nach vorne, den Marken-/Firmennamen ans Ende."));
  } else if (i.meta.titleLength < 30) {
    c.push(warn("meta-title-short", "meta", "Meta-Title sehr kurz", `Der Title hat ${i.meta.titleLength} Zeichen. Empfohlen sind 45–60.`, "Ergänzen Sie den Title um das primäre Keyword und ggf. den Standort, ohne über 60 Zeichen zu gehen."));
  } else if (i.meta.titleLength > 65) {
    c.push(warn("meta-title-long", "meta", "Meta-Title zu lang", `Mit ${i.meta.titleLength} Zeichen wird der Title in den SERPs abgeschnitten.`, "Kürzen Sie auf 50–60 Zeichen. Wichtigstes Keyword nach vorne, dann Nutzenversprechen, dann Marke."));
  } else {
    c.push(good("meta-title-ok", "meta", "Meta-Title Länge passt", `${i.meta.titleLength} Zeichen — sauber im empfohlenen Bereich.`));
  }

  // DESCRIPTION
  if (!i.meta.description) {
    c.push(warn("meta-description-missing", "meta", "Meta-Description fehlt", "Google generiert dann automatisch ein Snippet — schlechter für die Klickrate.", "Schreiben Sie eine Description mit 120–158 Zeichen, die Nutzen und Handlungsaufforderung enthält."));
  } else if (i.meta.descriptionLength < 90) {
    c.push(warn("meta-description-short", "meta", "Meta-Description sehr kurz", `${i.meta.descriptionLength} Zeichen. Empfohlen: 120–158.`, "Erweitern Sie die Description um konkreten Nutzen und Handlungsimpuls (z. B. „Jetzt Erstgespräch buchen“)."));
  } else if (i.meta.descriptionLength > 170) {
    c.push(warn("meta-description-long", "meta", "Meta-Description zu lang", `${i.meta.descriptionLength} Zeichen — wird gekürzt angezeigt.`, "Kürzen Sie auf max. 158 Zeichen. Die wichtigste Aussage in den ersten 100 Zeichen unterbringen."));
  } else {
    c.push(good("meta-description-ok", "meta", "Meta-Description Länge passt", `${i.meta.descriptionLength} Zeichen.`));
  }

  // CANONICAL
  if (!i.meta.canonical) {
    c.push(warn("canonical-missing", "meta", "Canonical-URL fehlt", "Ohne Canonical entstehen leicht Duplicate-Content-Probleme.", "Fügen Sie ein <link rel=\"canonical\" href=\"…\"> ins <head> ein, das auf die bevorzugte URL dieser Seite zeigt."));
  } else {
    c.push(good("canonical-ok", "meta", "Canonical-URL vorhanden", i.meta.canonical));
  }

  // NOINDEX
  if (i.technical.noindex) {
    c.push(critical("robots-noindex", "meta", "Seite auf noindex", "Diese Seite wird von Google absichtlich nicht indexiert.", "Prüfen Sie, ob das gewollt ist. Falls die Seite ranken soll, entfernen Sie den noindex-Wert aus dem <meta name=\"robots\">-Tag."));
  }

  // VIEWPORT
  if (!i.meta.viewport) {
    c.push(critical("viewport-missing", "technical", "Viewport-Meta fehlt", "Ohne Viewport-Tag ist keine saubere mobile Darstellung möglich.", "Fügen Sie <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> in den <head> ein."));
  } else {
    c.push(good("viewport-ok", "technical", "Viewport-Meta gesetzt", i.meta.viewport));
  }

  // LANG
  if (!i.meta.lang) {
    c.push(warn("lang-missing", "technical", "Sprache nicht deklariert", "Das <html>-Element hat kein lang-Attribut.", "Setzen Sie <html lang=\"de\"> (oder passend zur Zielsprache). Wichtig für Screenreader und Suchmaschinen."));
  } else {
    c.push(good("lang-ok", "technical", "Sprache deklariert", `lang=\"${i.meta.lang}\"`));
  }

  // HTTPS
  if (!i.technical.isHttps) {
    c.push(critical("https-missing", "technical", "Kein HTTPS", "Die Seite läuft auf http — Google rankt http-Seiten schlechter, Browser markieren sie als unsicher.", "Aktivieren Sie ein SSL-Zertifikat (z. B. Let's Encrypt) und leiten Sie alle http-URLs per 301 auf https um."));
  } else {
    c.push(good("https-ok", "technical", "HTTPS aktiv", "Verbindung ist verschlüsselt."));
  }

  // RESPONSE TIME
  if (i.technical.responseMs > 3000) {
    c.push(critical("response-slow", "technical", "Server-Antwort sehr langsam", `${i.technical.responseMs} ms bis zur ersten Antwort.`, "Prüfen Sie Serverauslastung, aktivieren Sie Caching auf Server- und CDN-Ebene, reduzieren Sie Serverside-Rendering-Aufwand."));
  } else if (i.technical.responseMs > 1500) {
    c.push(warn("response-medium", "technical", "Server-Antwort etwas langsam", `${i.technical.responseMs} ms bis zur ersten Antwort.`, "Aktivieren Sie HTTP-Caching und komprimierte Antworten (gzip/brotli). Ein CDN kann die TTFB deutlich senken."));
  } else {
    c.push(good("response-fast", "technical", "Server-Antwort zügig", `${i.technical.responseMs} ms bis zur ersten Antwort.`));
  }

  // HTML SIZE
  const kb = Math.round(i.technical.htmlBytes / 1024);
  if (kb > 400) {
    c.push(warn("html-large", "technical", "HTML sehr groß", `${kb} KB — schwer für langsame Verbindungen.`, "Reduzieren Sie Inline-Scripts, laden Sie große Bibliotheken erst nach dem First Paint und lagern Sie umfangreiche Datenstrukturen in APIs aus."));
  } else {
    c.push(good("html-size-ok", "technical", "HTML-Größe angemessen", `${kb} KB.`));
  }

  // H1
  if (i.headings.h1Count === 0) {
    c.push(critical("h1-missing", "heading", "Keine H1", "Jede Seite braucht genau eine H1 als Hauptüberschrift.", "Setzen Sie am Anfang des Content-Bereichs eine <h1> mit dem primären Suchbegriff und dem Nutzenversprechen."));
  } else if (i.headings.h1Count > 1) {
    c.push(warn("h1-multiple", "heading", "Mehrere H1", `${i.headings.h1Count} H1-Tags gefunden. Empfohlen ist genau eine.`, "Reduzieren Sie auf eine einzige H1. Nachfolgende Überschriften auf H2/H3 herabstufen."));
  } else {
    c.push(good("h1-ok", "heading", "Genau eine H1", i.headings.firstH1 ? `„${truncate(i.headings.firstH1, 80)}“` : "H1 vorhanden."));
  }

  // H2
  if (i.headings.h2Count === 0 && i.content.wordCount > 300) {
    c.push(warn("h2-missing", "heading", "Keine H2-Struktur", "Bei einem größeren Text sollten H2-Zwischenüberschriften den Inhalt gliedern.", "Gliedern Sie den Text in 3–6 Sinnabschnitte, jeweils mit einer H2 überschrieben, die eine Long-Tail-Suchvariante aufgreift."));
  } else if (i.headings.h2Count > 0) {
    c.push(good("h2-ok", "heading", "H2-Struktur vorhanden", `${i.headings.h2Count} Zwischenüberschriften.`));
  }

  // IMAGES
  if (i.images.total === 0) {
    c.push(warn("images-none", "images", "Keine Bilder gefunden", "Nur Text — visuelle Elemente helfen bei Vertrauen und Verweildauer.", "Ergänzen Sie 1–3 visuelle Elemente: Team-Foto, Projekt-Ergebnis oder Service-Illustration."));
  } else if (i.images.missingAlt > 0) {
    const pct = Math.round((i.images.missingAlt / i.images.total) * 100);
    const sev: Severity = pct > 40 ? "critical" : "warning";
    c.push({
      id: "images-alt-missing",
      category: "images",
      severity: sev,
      label: "Alt-Texte fehlen",
      detail: `${i.images.missingAlt} von ${i.images.total} Bildern ohne Alt-Text (${pct}%).`,
      recommendation: "Ergänzen Sie beschreibende Alt-Texte für alle inhaltlichen Bilder. Rein dekorative Bilder bekommen alt=\"\".",
    });
  } else {
    c.push(good("images-alt-ok", "images", "Alle Bilder mit Alt-Text", `${i.images.total} Bilder.`));
  }

  // CONTENT
  if (i.content.wordCount < 200) {
    c.push(critical("content-thin", "content", "Sehr wenig Text", `Nur ${i.content.wordCount} Wörter — Google bewertet die Seite als „thin content“.`, "Bauen Sie den Text auf mindestens 400–600 Wörter aus: Problem, Lösung, Nutzen, Ablauf, Antworten auf typische Fragen."));
  } else if (i.content.wordCount < 400) {
    c.push(warn("content-short", "content", "Wenig Text", `${i.content.wordCount} Wörter. Für Landing- oder Ratgeberseiten meist zu wenig.`, "Ergänzen Sie 2–3 Sinnabschnitte mit konkreten Beispielen, Zahlen oder einem Ablaufschema."));
  } else {
    c.push(good("content-ok", "content", "Ausreichend Text", `${i.content.wordCount} Wörter.`));
  }

  // CTA
  if (i.content.ctaCount === 0) {
    c.push(critical("cta-missing", "content", "Kein Call-to-Action gefunden", "Keine der Links wirkt wie ein handlungsauffordernder CTA.", "Setzen Sie mindestens einen Primär-CTA (z. B. „Kostenloses Erstgespräch buchen“) sichtbar im ersten Bildschirmbereich."));
  } else if (i.content.ctaCount < 2) {
    c.push(warn("cta-few", "content", "Wenige CTAs", `Nur ${i.content.ctaCount} handlungsauffordernder Link auf der Seite.`, "Wiederholen Sie den CTA mindestens einmal weiter unten (nach dem Nutzenteil) und einmal am Seitenende."));
  } else {
    c.push(good("cta-ok", "content", "Mehrere CTAs vorhanden", `${i.content.ctaCount} handlungsauffordernde Links.`));
  }

  // OG / TWITTER
  if (!i.meta.ogTitle || !i.meta.ogImage) {
    c.push(warn("og-partial", "meta", "Open-Graph unvollständig", "OG-Title oder OG-Image fehlt — Social-Media-Vorschauen wirken damit generisch.", "Ergänzen Sie <meta property=\"og:title\">, <meta property=\"og:description\"> und <meta property=\"og:image\"> mit einem 1200×630-Bild."));
  } else {
    c.push(good("og-ok", "meta", "Open-Graph vollständig", "Title + Bild sind gesetzt."));
  }

  // STRUCTURED DATA
  if (!i.technical.hasSchemaOrg) {
    c.push(warn("schema-missing", "structured-data", "Keine Structured Data", "Kein JSON-LD gefunden — Rich Results sind damit ausgeschlossen.", "Fügen Sie mindestens Organization- oder LocalBusiness-Schema als JSON-LD ein. Bei FAQs zusätzlich FAQPage-Schema."));
  } else {
    c.push(good("schema-ok", "structured-data", "Structured Data vorhanden", i.technical.schemaTypes.slice(0, 6).join(", ") || "Typ unbekannt"));
  }

  // LOCAL
  if (i.local.hasLocalBusiness) {
    c.push(good("local-schema-ok", "local", "LocalBusiness-Schema vorhanden", "Google bekommt starke lokale Signale."));
  } else if (i.local.mentionsCity) {
    c.push(warn("local-schema-missing", "local", "Kein LocalBusiness-Schema", "Die Seite erwähnt Städte, hat aber kein Schema. Chance auf lokales Ranking wird verschenkt.", "Ergänzen Sie LocalBusiness-JSON-LD mit Adresse, geo-Koordinaten, Öffnungszeiten und Servicegebieten."));
  }

  // INTERNAL LINKS
  if (i.links.internal < 3) {
    c.push(critical("links-internal-few", "links", "Sehr wenige interne Links", `Nur ${i.links.internal} interne Verlinkungen gefunden. Ohne Linknetz kann Google die Themen-Autorität der Seite kaum erkennen.`, "Verlinken Sie zu drei bis acht thematisch passenden Seiten Ihrer Site — Kern-Leistungen, verwandte Ratgeber, konkrete Case Studies."));
  } else if (i.links.internal < 6) {
    c.push(warn("links-internal-thin", "links", "Wenige interne Links", `${i.links.internal} interne Verlinkungen. Empfehlung: fünf bis zehn pro substanzieller Seite.`, "Ergänzen Sie thematisch passende Verweise auf verwandte Landing-Pages, Ratgeber oder Case Studies."));
  } else {
    c.push(good("links-internal-ok", "links", "Ausreichend interne Verlinkung", `${i.links.internal} interne Links.`));
  }

  // GENERIC ANCHOR TEXT
  if (i.links.genericAnchor > 0) {
    c.push(warn(
      "links-generic-anchor",
      "links",
      "Generischer Anchor-Text",
      `${i.links.genericAnchor} interne Links nutzen wenig aussagekräftige Texte wie \"hier\" oder \"mehr erfahren\".`,
      "Beschreiben Sie im Link-Text konkret, worauf verwiesen wird (z. B. \"Kosten-Rechner öffnen\" statt \"hier klicken\").",
    ));
  }

  return c;
}

function computeScore(checks: CheckResult[]): number {
  // Grundwert 100. Kritische -12, Warnungen -5, Gutes hebt langsam.
  let score = 100;
  let goods = 0;
  for (const c of checks) {
    if (c.severity === "critical") score -= 12;
    else if (c.severity === "warning") score -= 5;
    else goods++;
  }
  // Kleiner Bonus für breite Positivsignale (max +8)
  score = Math.min(100, score + Math.min(goods, 16) * 0.5);
  return Math.max(0, Math.round(score));
}

function critical(id: string, cat: CheckCategory, label: string, detail: string, recommendation?: string): CheckResult {
  return { id, category: cat, severity: "critical", label, detail, recommendation };
}
function warn(id: string, cat: CheckCategory, label: string, detail: string, recommendation?: string): CheckResult {
  return { id, category: cat, severity: "warning", label, detail, recommendation };
}
function good(id: string, cat: CheckCategory, label: string, detail: string): CheckResult {
  return { id, category: cat, severity: "good", label, detail };
}
function truncate(s: string, n: number): string {
  return s.length > n ? `${s.slice(0, n - 1)}…` : s;
}
