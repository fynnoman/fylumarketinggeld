import { build, type CompactRow } from "./_helpers";

// Rechtsanwaltskanzleien und wirtschaftsrechtlich fokussierte Sozietäten.
// Reine Steuerberatung wandert in `steuerberater.ts`.

const rows: CompactRow[] = [
  ["HERBERT Rechtsanwälte", "Saarland", 96, "Wirtschafts- und Unternehmensrecht"],
  ["KHH LEGAL Kropp Haag Hübinger", "Saarland", 95, "16 Rechtsanwälte, eine der größten Kanzleien im Saarland", "https://www.khh-legal.de"],
  ["Schultze & Braun", "Saarland", 92, "Insolvenz, Recht und Steuern"],
  ["Pollkläsener Rechtsanwälte", "Saarland", 91, "Wirtschafts- und Zivilrecht"],
  ["Eisenbeis Rechtsanwälte Partnerschaft mbB", "Saarland", 90, "Wirtschaftsrecht"],
  ["DURY Rechtsanwälte", "Saarland", 89, "IT-, IP-, Urheber- und Wettbewerbsrecht", "https://saaris.de/kompetenzsuche/dury-rechtsanwaltskanzlei-inh-ra-marcus-dury-ll-m/"],
  ["Rechtsanwälte Staab & Kollegen PartG mbB", "Saarland", 88, "Rechtsberatung"],
  ["Dr. Nozar und Partner", "Saarland", 86, "Rechtsberatung"],
  ["JAKOB & LATZ Anwaltskanzlei", "Saarland", 85, "Rechtsberatung"],
  ["Carsten Bogenschütz", "Saarland", 85, "Steuer und Recht"],
  ["Rechtsanwaltskanzlei Trappe & Notar", "Saarland", 83, "Recht und Notariat"],
  ["Rechtsanwaltskanzlei Rudolf Bauer", "Saarland", 83, "Rechtsberatung"],
  ["Kanzlei Bauer & Kollegen", "Saarland", 74, "Recht und Steuern"],
  ["Kanzlei Fischer", "Saarland", 73, "Recht und Steuern"],
  ["Kanzlei Huber", "Saarland", 72, "Rechtsberatung"],
  ["Kanzlei Saarpfalz", "Saarland", 70, "Recht und Steuern"],
];

export const COMPANIES_KANZLEI = build(rows, "kanzlei-saarland");
