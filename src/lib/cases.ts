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
  publishedAt: string; // ISO
  updatedAt: string; // ISO
  hero: {
    lead: string; // Kurzantwort für Above-the-fold
  };
  situation: string; // Ausgangslage
  problem: string; // konkretes Problem, das gelöst werden sollte
  strategy: string; // Fylu-Ansatz
  implementation: CaseSection[]; // 3-5 Umsetzungs-Schritte
  outcome: CaseSection[]; // messbare Ergebnisse (nur real!)
  learnings: string[]; // Erkenntnisse für den Leser
  screenshots?: CaseScreenshot[];
  relatedIndustry?: string; // Slug einer topics.ts-Branche (für Cross-Linking)
};

// Hier reale Cases eintragen. Beispiel-Struktur siehe README oder als
// Blueprint den Typ oben. Leer lassen ist ausdrücklich ok — die Übersicht
// zeigt dann eine sinnvolle redaktionelle Nachricht statt einer leeren
// Grid-Ansicht.
export const cases: CaseStudy[] = [];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getCasesByIndustry(industrySlug: string): CaseStudy[] {
  return cases.filter((c) => c.relatedIndustry === industrySlug);
}
