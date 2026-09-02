import { build, type CompactRow } from "./_helpers";

const rows: CompactRow[] = [
  ["Elektro Hoppstädter GmbH", "Saarland", 91, "Hohe lokale Relevanz, starke Optimierungsmöglichkeiten"],
  ["Elektro Lonsdorfer GmbH", "Saarland", 90, "Etablierter Betrieb, digitale Positionierung ausbaufähig"],
  ["Elektro Schopp GmbH", "Saarland", 89, "Lokaler Markt und hoher Suchintent"],
  ["Elektro Nikolaus Kessler GmbH", "Saarland", 88, "Etablierter Name, digitale Präsenz ausbaufähig"],
  ["Elektro Rehn GmbH", "Saarland", 88, "Gute Zielgruppe für Local SEO und Conversion"],
  ["Elektro Brösch GmbH", "Saarland", 87, "Etablierter lokaler Betrieb"],
  ["Elektro Kempf GmbH", "Saarland", 87, "Hohe lokale Suchrelevanz"],
  ["Elektro Hartz GmbH", "Saarland", 86, "Professioneller Betrieb, Website-Potenzial"],
  ["Welschhans Haustechnik GmbH", "Saarland", 86, "Mehrere Leistungsbereiche, starkes SEO-Potenzial"],
  ["Elektro Hoppstädter GmbH (Standort 2)", "Saarland", 85, "Zweite Adresse, hohe lokale Sichtbarkeit", undefined, "standort-2"],
  ["Elektro Jürgen Hertling GmbH", "Saarland", 85, "Etablierter Betrieb, gute Conversion-Chance"],
  ["Elektro Thome GmbH", "Saarland", 84, "Optimierungspotenzial"],
  ["NB-Elektrosysteme GmbH", "Saarland", 84, "B2B und regionales SEO-Potenzial"],
  ["Jost Elektrotechnik UG", "Saarland", 84, "Moderner Leistungsbereich, ausbaufähige Präsenz"],
  ["Elektro Welschhans", "Saarland", 83, "Etablierter lokaler Anbieter"],
  ["Elektro Schackmann GmbH", "Saarland", 83, "Gute Reputation, Website als Hebel"],
  ["Elektrotechnik M. Diederich", "Saarland", 82, "Sehr gute Bewertungen, digital noch interessant"],
  ["BCB Elektro GmbH", "Saarland", 82, "Lokales Geschäft mit SEO-Potenzial"],
  ["Boss Energiesysteme GmbH", "Saarland", 82, "Photovoltaik und Energie mit hohem Suchwert"],
  ["Elektro UFA", "Saarland", 81, "Starke Bewertungen, großes Conversion-Potenzial"],
];

export const COMPANIES_ELEKTRIKER = build(rows, "elektriker-saarland");
