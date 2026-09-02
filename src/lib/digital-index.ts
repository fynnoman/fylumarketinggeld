// Fylu Digital Index – Datenmodell, Score-Logik und Kategorien.
//
// Alle Daten leben statisch in `digital-index-data.ts`. Es gibt keine
// Datenbank, keinen externen API-Call und kein Storage. Sub-Scores werden
// pro Firma manuell gepflegt, der Gesamt-Score wird deterministisch aus
// den Sub-Scores und den unten definierten Gewichten berechnet.

export type ScoreCriterionKey =
  | "mobile_ux"
  | "pagespeed"
  | "core_web_vitals"
  | "technical_seo"
  | "local_seo"
  | "gbp_signals"
  | "structured_data"
  | "accessibility"
  | "conversion_ux"
  | "geo_readiness"
  | "content_quality"
  | "trust_signals";

export type ScoreCriterion = {
  key: ScoreCriterionKey;
  label: string;
  short: string;
  weight: number; // Prozentpunkte am Gesamt-Score, Summe aller Kriterien = 100
  description: string;
};

// Reihenfolge = Reihenfolge in Detailseite und Methodik.
export const SCORE_CRITERIA: ScoreCriterion[] = [
  {
    key: "mobile_ux",
    label: "Mobile UX",
    short: "Mobil",
    weight: 10,
    description:
      "Bedienbarkeit auf dem Smartphone: Tap-Targets, Lesefluss, Navigation, Formulare.",
  },
  {
    key: "pagespeed",
    label: "PageSpeed",
    short: "Speed",
    weight: 10,
    description:
      "Ladeverhalten der Seite gemessen an realer Wahrnehmung, nicht nur an Lab-Werten.",
  },
  {
    key: "core_web_vitals",
    label: "Core Web Vitals",
    short: "CWV",
    weight: 10,
    description:
      "LCP, INP und CLS als Google-Kernmetriken für Nutzererlebnis und Ranking.",
  },
  {
    key: "technical_seo",
    label: "Technische SEO",
    short: "Tech SEO",
    weight: 10,
    description:
      "Crawlbarkeit, Indexierbarkeit, saubere URLs, Canonical, XML-Sitemap, robots.txt.",
  },
  {
    key: "local_seo",
    label: "Local SEO",
    short: "Local",
    weight: 10,
    description:
      "Lokale Relevanz: NAP-Konsistenz, lokale Landingpages, Verzeichnisse, regionale Signale.",
  },
  {
    key: "gbp_signals",
    label: "Google Business Signale",
    short: "GBP",
    weight: 10,
    description:
      "Vollständigkeit und Pflege des Unternehmensprofils, Fotos, Beiträge, Rezensionsvolumen.",
  },
  {
    key: "structured_data",
    label: "Structured Data",
    short: "Schema",
    weight: 5,
    description:
      "JSON-LD für LocalBusiness, Organization, Service, FAQ, Review. Grundlage für Rich Results.",
  },
  {
    key: "accessibility",
    label: "Accessibility",
    short: "A11y",
    weight: 5,
    description:
      "Kontraste, Fokus-States, ARIA, Tastaturbedienbarkeit, semantisches HTML.",
  },
  {
    key: "conversion_ux",
    label: "Conversion UX",
    short: "CRO",
    weight: 10,
    description:
      "Klarer Nutzerpfad, sichtbare CTAs, Trust-Elemente an Entscheidungspunkten, Formularlänge.",
  },
  {
    key: "geo_readiness",
    label: "AI / GEO Readiness",
    short: "GEO",
    weight: 5,
    description:
      "Zitierbarkeit für AI-Suchsysteme: Entity-Klarheit, Passagen, Quellenangaben, Aktualität.",
  },
  {
    key: "content_quality",
    label: "Contentqualität",
    short: "Content",
    weight: 10,
    description:
      "Substanz, Aktualität, Struktur, Beantwortung tatsächlicher Nutzerfragen der Zielgruppe.",
  },
  {
    key: "trust_signals",
    label: "Trust-Signale",
    short: "Trust",
    weight: 5,
    description:
      "Rezensionen, Zertifikate, Referenzen, transparentes Impressum, sichtbare Verantwortliche.",
  },
];

export type SubScores = Partial<Record<ScoreCriterionKey, number>>;

export type Company = {
  slug: string;
  name: string;
  city: string;
  categorySlug: string;
  website?: string;
  gbpUrl?: string;
  shortDescription?: string;
  subScores: SubScores;
  totalOverride?: number; // manuelle Fylu-Bewertung 0-100, hat Vorrang vor Sub-Score-Berechnung
  internalOpportunityNote?: string; // Nur intern (Outreach), wird nicht öffentlich gerendert
  analysisNotes?: string[]; // konkrete Findings, werden auf der Detailseite gelistet
  updatedAt: string; // ISO
};

export type CategoryFAQ = {
  q: string;
  a: string;
};

export type Category = {
  slug: string;
  label: string; // Anzeigelabel in Navigation und Cards
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  longIntro?: string; // ausführlicher Copy für SEO-Landing
  faqs?: CategoryFAQ[]; // wird in FAQPage-JSON-LD und sichtbarer FAQ-Sektion verwendet
  region: string; // z.B. "Saarland"
  regionSlug?: string; // z.B. "saarland", für interne Verlinkung
  industry: string; // z.B. "Gebäudereinigung"
  industryPlural?: string; // "Gebäudereinigungen"
  updatedAt: string; // ISO
};

// Kategorien-Daten leben in `digital-index-categories.ts`, damit die
// Datei hier auf Typen und Logik fokussiert bleibt.
export { CATEGORIES } from "./digital-index-categories";
import { CATEGORIES as CATEGORIES_INTERNAL } from "./digital-index-categories";

// Deterministische Score-Berechnung.
// Fehlt ein Kriterium in den Sub-Scores, zählt es als 0. So bleibt die
// Berechnung fair und nachvollziehbar, auch wenn Daten noch unvollständig sind.
export function computeScore(sub: SubScores): number {
  let total = 0;
  for (const c of SCORE_CRITERIA) {
    const raw = sub[c.key];
    const v = typeof raw === "number" && raw >= 0 && raw <= 100 ? raw : 0;
    total += (v * c.weight) / 100;
  }
  return Math.round(total);
}

// Einheitlicher Score-Ermittler. Manuelle Fylu-Bewertung (`totalOverride`)
// hat Vorrang vor der aggregierten Sub-Score-Berechnung, damit redaktionell
// gepflegte Rankings nicht durch unvollständige Sub-Score-Daten verwässert
// werden. Sind weder totalOverride noch echte Sub-Scores gesetzt, fällt der
// Wert auf 0. Ein separates `hasSubScores(co)` sagt der UI ob die
// 12-Kriterien-Ansicht überhaupt sinnvoll gerendert werden kann.
export function getCompanyScore(co: Company): number {
  if (typeof co.totalOverride === "number") {
    return Math.max(0, Math.min(100, Math.round(co.totalOverride)));
  }
  return computeScore(co.subScores);
}

export function hasSubScores(co: Company): boolean {
  for (const c of SCORE_CRITERIA) {
    const v = co.subScores[c.key];
    if (typeof v === "number" && v > 0) return true;
  }
  return false;
}

export function scoreBand(score: number): {
  label: string;
  tone: "high" | "mid" | "low";
} {
  if (score >= 80) return { label: "Sehr gut", tone: "high" };
  if (score >= 60) return { label: "Solide", tone: "mid" };
  return { label: "Mit Potenzial", tone: "low" };
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES_INTERNAL.find((c) => c.slug === slug);
}

// Konsistente Sortierung: Score absteigend, bei Gleichstand Name aufsteigend.
// Nutzt totalOverride wenn vorhanden.
export function sortByScoreDesc<
  T extends { subScores: SubScores; name: string; totalOverride?: number },
>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const sa =
      typeof a.totalOverride === "number"
        ? Math.round(a.totalOverride)
        : computeScore(a.subScores);
    const sb =
      typeof b.totalOverride === "number"
        ? Math.round(b.totalOverride)
        : computeScore(b.subScores);
    if (sb !== sa) return sb - sa;
    return a.name.localeCompare(b.name, "de");
  });
}
