// Case-Study-System: reale Fylu-Referenzen mit vollständiger Struktur.
//
// WICHTIG (Fylu-Plan-Vorgabe): Es werden NUR reale Referenzen gepflegt.
// Keine erfundenen Kundennamen, keine erfundenen Zahlen, keine geglätteten
// Ergebnisse. Wenn Referenzen anonymisiert werden müssen (NDA, laufende
// Verhandlungen), dann klar mit `clientAnonymized: true` markieren und
// Branchenbezeichnung statt Kundennamen verwenden.
//
// Wenn `cases` leer bleibt, zeigt die Übersichtsseite unter /referenzen
// automatisch eine redaktionelle Redaktionslage-Nachricht anstelle einer
// leeren Grid-Ansicht.

export type CaseScreenshot = {
  src: string; // Pfad unter /public
  alt: string;
  caption?: string;
};

export type CaseSection = {
  title: string;
  text: string;
};

export type CaseStudy = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string; // kurzer Kontext für Übersichtsseite ("Steuerberater · Saarbrücken")
  clientName: string; // echter Name oder Branchenbezeichnung wenn anonymisiert
  clientAnonymized?: boolean;
  clientIndustry: string;
  clientCity?: string;
  clientUrl?: string; // externe Kundenwebsite, falls verlinkbar
  publishedAt: string; // ISO
  updatedAt: string; // ISO
  services: string[]; // kuratierte Fylu-Leistungen für diesen Case
  hero: {
    lead: string; // Kurzantwort für Above-the-fold
  };
  situation: string; // Ausgangslage
  problem: string; // konkretes Problem, das gelöst werden sollte
  strategy: string; // Fylu-Ansatz
  implementation: CaseSection[]; // 3-5 Umsetzungs-Schritte
  outcome: CaseSection[]; // Ergebnisse, nur real und qualitativ, sofern keine Zahlen freigegeben
  learnings: string[]; // Erkenntnisse für den Leser
  screenshots?: CaseScreenshot[];
  relatedIndustry?: string; // Slug einer topics.ts-Branche (für Cross-Linking)
  serviceLinks?: { label: string; href: string; reason: string }[]; // passende Folgeleistungen
};

export const cases: CaseStudy[] = [
  {
    slug: "milana-kollmann",
    metaTitle:
      "Milana Kollmann · Markenaufbau von der Gründung bis zur Website | Fylu Marketing",
    metaDescription:
      "Wie Fylu Marketing die Gründung von Milana Kollmann (Zahnärztliche Abrechnung, Saarlouis) von Name und Logo über Website bis zur Fotoproduktion begleitet hat.",
    h1: "Milana Kollmann: von der Gründung bis zur eigenen Marke.",
    eyebrow: "Zahnärztliche Abrechnung · Saarlouis",
    clientName: "Milana Kollmann",
    clientIndustry: "Zahnärztliche Abrechnung",
    clientCity: "Saarlouis",
    clientUrl: "https://milana-six.vercel.app/",
    publishedAt: "2026-10-09",
    updatedAt: "2026-10-09",
    services: [
      "Markenaufbau",
      "Name & Logo",
      "Website",
      "Google Unternehmensprofil",
      "SEO & GEO",
      "Fotoproduktion",
    ],
    hero: {
      lead:
        "Milana wollte sich eigenständig als Expertin für zahnärztliche Abrechnung aufstellen. Fylu Marketing hat die Gründung von Name und Logo über Website und Google Unternehmensprofil bis zur eigenen Fotoproduktion begleitet.",
    },
    situation:
      "Milana Kollmann wollte in Saarlouis eine eigene Firma für zahnärztliche Abrechnung gründen. Zum Startzeitpunkt gab es noch keinen Namen, kein Logo, keine Website und keine sichtbare Außenwirkung. Die fachliche Grundlage war da, die Marke dazu aber noch nicht.",
    problem:
      "Zahnarztpraxen vergeben Abrechnung an externe Dienstleister nach Vertrauen, Präzision und Erreichbarkeit. Ohne klaren Markenauftritt, ohne auffindbare Online-Präsenz und ohne konsistente Außenwirkung hat eine Neugründung in diesem Umfeld sofort einen Startnachteil gegenüber eingeführten Anbietern. Jede Komponente, Name, Logo, Website, Google Unternehmensprofil, Bildwelt, muss von Beginn an zusammengehen.",
    strategy:
      "Fylu Marketing hat die Gründung als Gesamtprojekt behandelt und nicht in Einzelbausteine zerlegt. Name, Logo, Website, Google Unternehmensprofil, SEO und GEO sowie eine eigene Fotoproduktion mit Fotografen wurden auf dasselbe Markenfundament gestellt. Milana wurde durchgängig in jede Entscheidung einbezogen und hat zu jedem Schritt eine kuratierte Auswahl bekommen, nie eine fertige Vorgabe. So entstand eine Marke, die am Ende nicht von außen draufgesetzt wirkt, sondern tatsächlich ihre eigene ist.",
    implementation: [
      {
        title: "Markenbasis",
        text: "Erarbeitung von Name, Logo und visueller Identität. Jede Richtung wurde in mehreren Varianten vorgelegt, damit Milana die Entscheidung tragen kann und die Marke von Anfang an mitträgt.",
      },
      {
        title: "Website",
        text: "Eigenständige Website mit klarer Leistungsstruktur, ruhigem Ton und sauberer technischer Foundation. Die Inhalte adressieren Zahnarztpraxen als Zielgruppe, nicht die breite Masse.",
      },
      {
        title: "Google Unternehmensprofil, SEO und GEO",
        text: "Aufbau des Google Unternehmensprofils, strukturierte Daten, lokale Signale für Saarlouis sowie GEO-Vorbereitung für die neuen KI-gestützten Such- und Antwortsysteme.",
      },
      {
        title: "Fotoproduktion",
        text: "Eigenes Shooting mit Fotografen, abgestimmt auf Marke, Website und Außenauftritt. Bildsprache, Website und Social-Kanäle lesen sich dadurch als eine Einheit.",
      },
      {
        title: "Begleitung und Mitgestaltung",
        text: "Durchgängige Einbindung über alle Entscheidungen hinweg, jeweils mit Auswahlvarianten. Die Gründerin bleibt die inhaltliche Instanz, Fylu Marketing liefert Rahmen, Varianten und Umsetzung.",
      },
    ],
    outcome: [
      {
        title: "Markenauftritt",
        text: "Milana geht als sichtbare, eigenständige Marke an den Markt. Name, Logo, Website, Google Unternehmensprofil und Fotowelt wirken als ein Auftritt, nicht als Sammlung einzelner Bausteine.",
      },
      {
        title: "Identifikation",
        text: "Weil jede Entscheidung gemeinsam getroffen wurde, fühlt sich die Marke für die Gründerin als eigene an. Das trägt in der Kundenkommunikation, im Vertrieb und im weiteren Ausbau.",
      },
    ],
    learnings: [
      "Bei Neugründungen zahlt sich eine integrierte Begleitung mehr aus als die Vergabe einzelner Gewerke an unterschiedliche Anbieter.",
      "Auswahlvarianten statt fertiger Vorgaben erhöhen die Identifikation der Gründerin mit der eigenen Marke erheblich.",
      "Auch spezialisierte B2B-Nischen profitieren von einer durchdachten Außenwirkung, Vertrauen entsteht nicht erst im Gespräch, sondern bereits im ersten digitalen Eindruck.",
    ],
    screenshots: [
      {
        src: "/milana.jpeg",
        alt: "Milana Kollmann mit dem Fylu Marketing Team · Fylu Marketing Referenz",
      },
    ],
    serviceLinks: [
      {
        label: "Branding-Agentur Saarland",
        href: "/branding-agentur-saarland",
        reason: "Positionierung, Name, Logo und visuelle Identität bei einem Ansprechpartner.",
      },
      {
        label: "Local SEO Saarland",
        href: "/local-seo-saarland",
        reason: "Google Unternehmensprofil, lokale Signale und laufende Betreuung.",
      },
    ],
  },
  {
    slug: "pb-fahrzeugpflege",
    metaTitle:
      "PB Fahrzeugpflege · Über 25 Jahre Handwerk, endlich sichtbar | Fylu Marketing",
    metaDescription:
      "Wie PB Fahrzeugpflege einen Auftritt bekommen hat, der zur seit 1997 gelebten Premium-Fahrzeugaufbereitung passt. Referenz von Fylu Marketing.",
    h1: "PB Fahrzeugpflege: über 25 Jahre Handwerk, endlich sichtbar.",
    eyebrow: "Fahrzeugaufbereitung und Keramikversiegelung · Saarlouis",
    clientName: "PB Fahrzeugpflege",
    clientIndustry: "Fahrzeugaufbereitung und Keramikversiegelung",
    clientCity: "Saarlouis, Saarland, Luxemburg",
    clientUrl: "https://pb-fahrzeugpflege.de",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    services: ["Website", "Trust-Signale", "Lokales SEO", "Design"],
    hero: {
      lead:
        "Seit 1997 auf Premium-Fahrzeugaufbereitung spezialisiert, die alte Website hat davon nichts erzählt. Der neue Auftritt macht das Handwerk sichtbar.",
    },
    situation:
      "PB Fahrzeugpflege in Saarlouis arbeitet seit 1997 auf Premium-Fahrzeugaufbereitung und Keramikversiegelung. Sportwagen und Oldtimer aus dem Saarland und Luxemburg zählen zum Bestand. Die vorhandene Präsenz spiegelte weder das Handwerk noch die Kundschaft wider.",
    problem:
      "Bei einem Betrieb, der seit über 25 Jahren im Premium-Segment arbeitet, muss der digitale Auftritt Vertrauen sofort tragen. Die alte Website hat weder die Bewertungslage sichtbar gemacht noch eine ruhige Bildwelt geliefert, die zum Segment passt. Anfragen kamen unter Wert und ohne klaren Rahmen.",
    strategy:
      "Fylu Marketing hat den Auftritt so aufgebaut, dass zwei Dinge im Vordergrund stehen: Trust-Signale aus der tatsächlichen Bewertungslage und eine ruhige, hochwertige Bildsprache. Die Anfrage-Strecke wurde vereinfacht, damit passende Kunden ohne Umwege in Kontakt kommen. Lokales SEO stellt sicher, dass PB für die relevanten Suchanfragen in Saarlouis und Umgebung auftaucht.",
    implementation: [
      {
        title: "Trust-Layer",
        text: "Prominente Darstellung der real vorhandenen Bewertungslage (ProvenExpert, Google), damit die Reputation aus über 25 Jahren Handwerk sofort ablesbar wird.",
      },
      {
        title: "Bildsprache",
        text: "Ruhige, dunkle Bildwelt statt Automotive-Klischee. Der Auftritt liest sich näher an Uhrmacher-Manufaktur als an klassischer Autowäsche.",
      },
      {
        title: "Anfrage-Strecke",
        text: "Klare Kontakt- und Terminlogik, damit hochwertige Anfragen direkt landen und keine Reibungsverluste entstehen.",
      },
      {
        title: "Lokales SEO",
        text: "Technische Foundation, strukturierte Daten und Local-Signale für Saarlouis, Saarland und die grenzüberschreitende Kundschaft aus Luxemburg.",
      },
    ],
    outcome: [
      {
        title: "Positionierung",
        text: "Aus einer Fachwerkstatt wurde eine feste Adresse für Sportwagen und Oldtimer im Grenzraum. Der Auftritt gibt dem Betrieb das Gewicht, das das Handwerk verdient.",
      },
      {
        title: "Anfragen",
        text: "Anfragen kommen mit klarerer Erwartung, weil die Website vorab Vertrauen aufbaut. Weniger Preisdiskussion, mehr passende Kunden.",
      },
    ],
    learnings: [
      "Reputationssignale gehören nach vorne, nicht in eine Fußzeile. Wenn ein Betrieb hunderte Bewertungen hat, muss man das sehen.",
      "Bildsprache trägt in Premium-Segmenten mindestens so viel wie Copy. Ein ruhiger Ton signalisiert Wertigkeit ohne ein einziges Adjektiv.",
      "Lokales SEO in Grenzregionen funktioniert nur, wenn die Website beide Kundenströme (regional und grenzüberschreitend) klar adressiert.",
    ],
    screenshots: [
      {
        src: "/PB.jpg",
        alt: "PB Fahrzeugpflege Startseite · Fylu Marketing Referenz",
      },
    ],
    serviceLinks: [
      {
        label: "Webdesign Saarland",
        href: "/webdesign-saarland",
        reason: "Individuelle Websites mit technischer Foundation und Conversion-Aufbau.",
      },
      {
        label: "Local SEO Saarland",
        href: "/local-seo-saarland",
        reason: "Google-Unternehmensprofil, Reviews und lokale Signale gezielt aufgebaut.",
      },
    ],
  },
  {
    slug: "galabau-eifler",
    metaTitle:
      "Galabau Eifler · Vom Handwerksbetrieb zur wiedererkennbaren Marke | Fylu Marketing",
    metaDescription:
      "Wie Galabau Eifler in Saarbrücken einen Auftritt bekommen hat, der Anspruch und Handwerk sichtbar macht. Referenz von Fylu Marketing.",
    h1: "Galabau Eifler: vom Handwerksbetrieb zur wiedererkennbaren Marke.",
    eyebrow: "Garten- und Landschaftsbau · Saarbrücken",
    clientName: "Galabau Eifler",
    clientIndustry: "Garten- und Landschaftsbau",
    clientCity: "Saarbrücken",
    clientUrl: "https://galabau-eifler.de",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    services: ["Website", "Design", "Projekt-Präsentation"],
    hero: {
      lead:
        "Neuer Auftritt für einen Landschaftsbauer mit Anspruch. Klare Typografie, geordnete Projekt-Galerie und Vorher-Nachher-Strecken. Anfragen kommen sortierter.",
    },
    situation:
      "Galabau Eifler in Saarbrücken arbeitet im Garten- und Landschaftsbau mit klarem Anspruch an Qualität. Der vorhandene Auftritt hat das Handwerk und die Referenz-Projekte nicht in der Form gezeigt, die zum tatsächlichen Niveau passt.",
    problem:
      "Landschaftsbau ist ein Bild-getriebenes Geschäft. Kunden entscheiden nach dem, was sie sehen können. Ohne saubere Projekt-Galerie mit klarer Struktur landen Anfragen ohne Budget-Verständnis und ohne Kontext, was den Vertriebsprozess unnötig aufwändig macht.",
    strategy:
      "Fylu Marketing hat den Auftritt darauf ausgerichtet, dass Referenz-Projekte in einer klaren, ruhigen Form sichtbar werden. Typografie und Layout treten zurück, damit die Arbeit im Vordergrund steht. Vorher-Nachher-Strecken helfen Interessenten, Aufwand und Ergebnis realistisch einzuschätzen, bevor sie anfragen.",
    implementation: [
      {
        title: "Typografie und Layout",
        text: "Zurückhaltendes System, das den Referenz-Bildern Platz gibt. Keine dekorativen Elemente, die vom Handwerk ablenken.",
      },
      {
        title: "Projekt-Galerie",
        text: "Geordnete Struktur mit klaren Kategorien und Vorher-Nachher-Vergleichen, damit Interessenten den Aufwand und die Bandbreite direkt einschätzen können.",
      },
      {
        title: "Anfrage-Strecke",
        text: "Kontaktweg auf das Wesentliche reduziert, damit Anfragen mit sinnvollem Rahmen ankommen statt als reine Preisanfragen.",
      },
    ],
    outcome: [
      {
        title: "Anfragequalität",
        text: "Anfragen kommen sortierter, oft mit klarem Bezug zu konkreten Referenz-Projekten. Das Budget-Verständnis auf Kundenseite ist deutlich realistischer.",
      },
      {
        title: "Positionierung",
        text: "Der Auftritt hebt Galabau Eifler aus dem generischen Landschaftsbau-Umfeld heraus, ohne künstlich zu wirken.",
      },
    ],
    learnings: [
      "In bildgetriebenen Handwerken zählt die Ordnung der Galerie mehr als die Menge der Bilder.",
      "Vorher-Nachher-Strecken sind das effektivste Signal, um unrealistische Preisvorstellungen im Vorfeld zu klären.",
      "Zurückhaltende Typografie signalisiert bei ausführenden Betrieben mehr Wertigkeit als jede Effekt-Fläche.",
    ],
    screenshots: [
      {
        src: "/galabau.png",
        alt: "Galabau Eifler Startseite · Fylu Marketing Referenz",
      },
    ],
    serviceLinks: [
      {
        label: "Webdesign Saarland",
        href: "/webdesign-saarland",
        reason: "Individuelle Websites für Betriebe mit Anspruch an Bild und Handwerk.",
      },
      {
        label: "Branding-Agentur Saarland",
        href: "/branding-agentur-saarland",
        reason: "Wenn aus dem Betrieb eine wiedererkennbare Marke werden soll.",
      },
    ],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getCasesByIndustry(industrySlug: string): CaseStudy[] {
  return cases.filter((c) => c.relatedIndustry === industrySlug);
}
