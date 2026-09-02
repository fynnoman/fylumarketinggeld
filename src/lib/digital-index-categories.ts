// Fylu Digital Index – Kategorien-Datenquelle.
//
// Jede Kategorie kombiniert Branche + Region. Der Slug matcht das
// primäre SEO-Ziel: "beste [branche] saarland". H1 und Meta werden
// aus derselben Suchintention gebaut.

import type { Category, CategoryFAQ } from "./digital-index";

function defaultFaqs(
  industry: string,
  industryPlural: string,
  region: string,
): CategoryFAQ[] {
  return [
    {
      q: `Wie werden die ${industryPlural} in diesem Ranking bewertet?`,
      a: `Der Fylu Digital Index bewertet jede Firma auf zwölf Kriterien: Mobile UX, PageSpeed, Core Web Vitals, technische SEO, Local SEO, Google-Business-Signale, Structured Data, Accessibility, Conversion UX, AI/GEO Readiness, Contentqualität und Trust-Signale. Jedes Kriterium wird auf einer Skala von 0 bis 100 eingestuft. Der Gesamt-Score ergibt sich als gewichteter Durchschnitt und liegt selbst zwischen 0 und 100.`,
    },
    {
      q: `Wer erstellt den Fylu Digital Score?`,
      a: `Die Bewertung wird vom Fylu Marketing in Saarlouis manuell vergeben. Grundlage ist eine strukturierte Analyse öffentlich zugänglicher Signale: Website, Google-Unternehmensprofil, öffentliche Verzeichnisse. Der Score wird zusätzlich durch automatisierte Fylu-Audits der jeweiligen Firmen-Website verifiziert.`,
    },
    {
      q: `Wie oft wird das Ranking aktualisiert?`,
      a: `Die Bewertung wird mindestens einmal jährlich neu geprüft. Zusätzlich werden die automatisierten Audit-Signale jeder Firmen-Website alle sieben Tage automatisch nachgeladen, sodass technische Änderungen an Websites zeitnah sichtbar werden.`,
    },
    {
      q: `Wie kommt eine ${industry.toLowerCase()} in den Fylu Digital Index?`,
      a: `Der Fylu Digital Index wird redaktionell geführt. Aufnahme erfolgt nach Sichtbarkeitskriterien (bestehende Website, Google-Unternehmensprofil, öffentliche Auffindbarkeit) und nicht auf Anfrage. Unternehmen können jederzeit anfragen, in einer späteren Runde geprüft zu werden.`,
    },
    {
      q: `Was bedeutet der Score von 0 bis 100?`,
      a: `0 bis 59 bedeutet deutliches digitales Potenzial mit klaren Baustellen, 60 bis 79 bedeutet solide digitale Grundlage mit gezielten Hebeln, 80 bis 100 bedeutet sehr hohes digitales Niveau in ${region}.`,
    },
    {
      q: `Bezahlen Unternehmen für die Aufnahme oder Position?`,
      a: `Nein. Aufnahme und Position im Fylu Digital Index sind nicht käuflich. Der Score ist deterministisch aus den zwölf Kriterien berechnet und wird nicht kommerziell beeinflusst.`,
    },
    {
      q: `Können Unternehmen ihren Score verbessern?`,
      a: `Ja. Fylu erstellt auf Wunsch eine kostenfreie Digitalanalyse mit konkreten Handlungsschritten. Wenn die Änderungen umgesetzt sind, wird der Score neu berechnet und aktualisiert.`,
    },
  ];
}

type Spec = {
  slug: string;
  industry: string;
  industryPlural: string;
  h1Prefix?: string; // default "Beste"
  intro?: string;
  longIntro?: string;
  faqs?: CategoryFAQ[];
};

function make(spec: Spec): Category {
  const industryPlural = spec.industryPlural;
  const industry = spec.industry;
  const region = "Saarland";
  const h1Prefix = spec.h1Prefix ?? "Beste";
  const h1 = `${h1Prefix} ${industryPlural} im ${region}`;
  const label = `${industry} ${region}`;
  const metaTitle = `${h1Prefix} ${industryPlural} ${region} 2026: Digital Index | Fylu`;
  const metaDescription = `Ranking der digital sichtbarsten ${industryPlural} im ${region}. Fylu Digital Score aus zwölf Kriterien pro Anbieter. Transparente Methodik, jährlich aktualisiert.`;
  const intro =
    spec.intro ??
    `Ranking der ${industryPlural} im ${region} nach digitaler Sichtbarkeit. Bewertet werden Website, Google-Präsenz, technische Grundlagen und Conversion-Qualität. Jede Firma erhält einen Fylu Digital Score von 0 bis 100.`;
  const longIntro =
    spec.longIntro ??
    `Der Fylu Digital Index zeigt, welche ${industryPlural} im ${region} online tatsächlich professionell auftreten. Die Bewertung folgt zwölf gleichbleibenden Kriterien, wird manuell vergeben und wöchentlich durch automatisierte Audits der jeweiligen Firmen-Website verifiziert. So entsteht ein deterministischer, vergleichbarer Wert von 0 bis 100. Die Grundlage sind ausschließlich öffentlich zugängliche Signale: Website-Struktur, Google-Unternehmensprofil, Auffindbarkeit in öffentlichen Verzeichnissen. Interne Zahlen der Unternehmen werden nicht ausgewertet. Aufnahme und Position sind nicht käuflich.`;
  const faqs = spec.faqs ?? defaultFaqs(industry, industryPlural, region);

  return {
    slug: spec.slug,
    label,
    h1,
    metaTitle,
    metaDescription,
    intro,
    longIntro,
    faqs,
    region,
    regionSlug: "saarland",
    industry,
    industryPlural,
    updatedAt: "2026-09-02",
  };
}

export const CATEGORIES: Category[] = [
  make({
    slug: "handwerker-saarland",
    industry: "Handwerksbetrieb",
    industryPlural: "Handwerksbetriebe",
    intro: `Ranking hochwertiger Handwerksbetriebe im Saarland nach digitaler Sichtbarkeit — Schreiner, Maler, Fliesenleger, Holzbau, Trockenbau. Bewertet werden Website, Google-Präsenz, technische Grundlagen und Conversion-Qualität. Jede Firma erhält einen Fylu Digital Score von 0 bis 100.`,
  }),
  make({
    slug: "gebaeudereinigung-saarland",
    industry: "Gebäudereinigung",
    industryPlural: "Gebäudereinigungen",
  }),
  make({
    slug: "steuerberater-saarland",
    industry: "Steuerberatung",
    industryPlural: "Steuerberater",
  }),
  make({
    slug: "immobilienmakler-saarland",
    industry: "Immobilienmakler",
    industryPlural: "Immobilienmakler",
  }),
  make({
    slug: "zahnarzt-saarland",
    industry: "Zahnarztpraxis",
    industryPlural: "Zahnärzte",
  }),
  make({
    slug: "kanzlei-saarland",
    industry: "Kanzlei",
    industryPlural: "Kanzleien",
  }),
  make({
    slug: "photovoltaik-saarland",
    industry: "Photovoltaik",
    industryPlural: "Photovoltaik-Anbieter",
  }),
  make({
    slug: "elektriker-saarland",
    industry: "Elektrotechnik",
    industryPlural: "Elektriker",
  }),
  make({
    slug: "shk-saarland",
    industry: "SHK",
    industryPlural: "SHK-Betriebe",
  }),
  make({
    slug: "dachdecker-saarland",
    industry: "Dachdecker",
    industryPlural: "Dachdecker",
  }),
  make({
    slug: "bauunternehmen-saarland",
    industry: "Bauunternehmen",
    industryPlural: "Bauunternehmen",
  }),
  make({
    slug: "industrie-saarland",
    industry: "Industrieunternehmen",
    industryPlural: "Industrieunternehmen",
    h1Prefix: "Führende",
    intro: `Ranking industrieller Zulieferer und technischer Unternehmen im Saarland nach digitaler Sichtbarkeit. Bewertet werden Website, B2B-Kommunikation, Recruiting-Präsenz, technische Grundlagen und Conversion-Qualität.`,
  }),
  make({
    slug: "logistik-saarland",
    industry: "Logistikdienstleister",
    industryPlural: "Logistikdienstleister",
  }),
  make({
    slug: "beratung-saarland",
    industry: "Unternehmensberatung",
    industryPlural: "Unternehmensberatungen",
  }),
  make({
    slug: "hausverwaltung-saarland",
    industry: "Hausverwaltung",
    industryPlural: "Hausverwaltungen",
  }),
];
