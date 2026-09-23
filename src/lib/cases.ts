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
    slug: "mg-gebaeudeservice",
    metaTitle:
      "MG Gebäudeservice · Marken- und Website-Aufbau im Facility-Markt | Fylu Marketing",
    metaDescription:
      "Wie MG Gebäudeservice mit einem digital-nativen Auftritt neben etablierten Anbietern in Köln und Düsseldorf nicht mehr klein wirkt. Referenz von Fylu Marketing.",
    h1: "MG Gebäudeservice: digital-nativer Auftritt in einem konservativen Markt.",
    eyebrow: "Gebäudeservice · Köln und Düsseldorf",
    clientName: "MG Gebäudeservice",
    clientIndustry: "Gebäudeservice und Reinigung",
    clientCity: "Köln und Düsseldorf",
    clientUrl: "https://mg-gebaeudeservice.de",
    publishedAt: "2026-09-21",
    updatedAt: "2026-09-21",
    services: ["Markenaufbau", "Website", "Digitale Infrastruktur", "SEO"],
    hero: {
      lead:
        "Für die Skalierung auf über 260 Fachkräfte brauchte MG einen Auftritt, der Zertifizierungen sichtbar trägt und neben etablierten Anbietern nicht klein wirkt.",
    },
    situation:
      "MG Gebäudeservice betreut mit einem wachsenden Team gewerbliche Kunden in Köln und Düsseldorf. Die vorhandene Präsenz spiegelte das operative Niveau nicht wider und wirkte im direkten Vergleich zu größeren Wettbewerbern unterinvestiert.",
    problem:
      "Im konservativen Facility-Markt zählen Zertifizierungen (ISO 9001, ISO 14001, RAL GZ 902) und institutionelles Auftreten. Wenn Ausschreibungen und Direktkontakte über die Website landen, entscheidet der erste Eindruck in Sekunden. Ein technisch veralteter Auftritt kostet nicht nur Anfragen, sondern auch die Wahrnehmung als seriöser Anbieter.",
    strategy:
      "Fylu Marketing hat MG als eigenständige Marke behandelt, nicht als weitere Reinigungsfirma. Die Marken-Architektur wurde so ausgelegt, dass Zertifizierungen und Referenzen tragende Elemente werden, nicht Fußnoten. Website und digitale Werkzeuge wurden auf demselben Fundament gebaut, damit interne Prozesse und externer Auftritt sichtbar zusammengehören.",
    implementation: [
      {
        title: "Marken-Architektur",
        text: "Klare Hierarchie zwischen Leistungsbereichen, Zertifizierungen und Referenzen. Institutioneller Ton in Sprache und Bildwelt, damit Ausschreibungen und Bestandskunden dieselbe Marke lesen.",
      },
      {
        title: "Website",
        text: "Neu aufgebauter Auftritt mit modernem Stack (Next.js, React, TypeScript). Zertifizierungen, Leistungsbereiche und Referenzen sind zentrale Bausteine der Struktur. Mobile-first, mit sauberer Technik-Foundation für die Zukunft.",
      },
      {
        title: "Digitale Werkzeuge",
        text: "Verzahnung mit internen Prozessen, damit die Website nicht isoliert steht, sondern Teil des operativen Betriebs wird.",
      },
      {
        title: "Lokale Sichtbarkeit",
        text: "Aufbau lokaler Signale für Köln und Düsseldorf, strukturierte Daten, konsistente Angaben über die relevanten Kanäle.",
      },
    ],
    outcome: [
      {
        title: "Wahrnehmung",
        text: "MG wird im direkten Vergleich zu deutlich größeren Anbietern innerhalb der beiden Kernstädte inzwischen prominenter wahrgenommen. Der Auftritt trägt die operative Realität eines Betriebs mit über 260 Fachkräften.",
      },
      {
        title: "Anfragequalität",
        text: "Anfragen kommen mit klarerem Rahmen, weil die Website Leistungsbereiche und Zertifizierungen vorab beantwortet. Weniger Vorlauf im Vertrieb, sauberere Erstkontakte.",
      },
    ],
    learnings: [
      "In konservativen Märkten trägt ein moderner Auftritt am meisten, wenn er institutionell wirkt, nicht auffällig.",
      "Zertifizierungen als tragende Bausteine der Struktur zu platzieren ändert die Wahrnehmung stärker als jede zusätzliche Landingpage.",
      "Wenn Website und Werkzeuge aus einem Fundament kommen, wird die Marke im Alltag konsistent, ohne dass es zusätzliche Prozesse braucht.",
    ],
    screenshots: [
      {
        src: "/mg-geb%C3%A4ude.png",
        alt: "MG Gebäudeservice Startseite · Fylu Marketing Referenz",
      },
    ],
    relatedIndustry: "gebaeudereinigung",
    serviceLinks: [
      {
        label: "Branding-Agentur Saarland",
        href: "/branding-agentur-saarland",
        reason: "Positionierung, Identität und Anwendung bei einem Ansprechpartner.",
      },
      {
        label: "SEO Saarland",
        href: "/seo-saarland",
        reason: "Technische Foundation, Content und laufende Betreuung.",
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
