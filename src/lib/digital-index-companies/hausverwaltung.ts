import { build, type CompactRow } from "./_helpers";

const rows: CompactRow[] = [
  ["Saarbrücker Immobilienverwaltungs GmbH", "Saarbrücken", 89, "Hausverwaltung"],
  ["Saarland Hausverwaltung GmbH", "Saarland", 86, "Hausverwaltung"],
  ["Hausverwaltung Schmitt GmbH", "Saarland", 85, "Verwaltung"],
  ["Hausverwaltung Saar GmbH", "Saarland", 85, "Verwaltung"],
  ["Saarland Hausverwaltung & Immobilien GmbH", "Saarland", 83, "Verwaltung"],
  ["Saarland Immobilienservice", "Saarland", 81, "Verwaltung"],
  ["Hausverwaltung Weber GmbH", "Saarland", 79, "Verwaltung"],
  ["Hausverwaltung Hoffmann", "Saarland", 79, "Verwaltung"],
  ["Saarland Grundstücksverwaltung GmbH", "Saarland", 77, "Verwaltung"],
  ["Immobilienverwaltung Müller", "Saarland", 77, "Verwaltung"],
  ["Hausverwaltung Becker", "Saarland", 76, "Verwaltung"],
  ["Immobilienverwaltung Scherer", "Saarland", 76, "Verwaltung"],
  ["Immobilienverwaltung Klein", "Saarland", 75, "Verwaltung"],
  ["Hausverwaltung Saarpfalz", "Saarland", 75, "Verwaltung"],
  ["Immobilienservice Neunkirchen", "Neunkirchen", 74, "Verwaltung"],
  ["Immobilienservice Saarlouis", "Saarlouis", 74, "Verwaltung"],
  ["Immobilienservice Homburg", "Homburg", 73, "Verwaltung"],
  ["Hausverwaltung St. Ingbert", "St. Ingbert", 73, "Verwaltung"],
  ["Hausverwaltung Merzig", "Merzig", 70, "Verwaltung"],
  ["Hausverwaltung St. Wendel", "St. Wendel", 69, "Verwaltung"],
];

export const COMPANIES_HAUSVERWALTUNG = build(rows, "hausverwaltung-saarland");
