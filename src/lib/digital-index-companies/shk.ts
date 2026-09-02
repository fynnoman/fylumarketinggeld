import { build, type CompactRow } from "./_helpers";

const rows: CompactRow[] = [
  ["K. Frantz GmbH", "Saarland", 81, "Über 150 Jahre Betrieb, großes Leistungsspektrum"],
  ["P. Martin & Söhne GmbH", "Saarland", 80, "Über 30 Mitarbeiter, starke regionale Positionierung"],
  ["Wolfer Heizung & Sanitär GmbH", "Saarland", 80, "Rund 50 Mitarbeiter, starkes Wachstum"],
  ["Kurt Ludwig GmbH", "Saarland", 79, "Etablierter Meisterbetrieb und Notdienst"],
  ["A. Brunk Heizung & Sanitär GmbH", "Saarland", 79, "Breites Angebot und regionale Nachfrage"],
  ["Patrik König Heizung & Sanitär GmbH", "Saarland", 78, "Gute lokale Bewertungen"],
  ["Samson Heizung-Sanitär-Solar", "Saarland", 78, "Sehr gute Bewertungen, Conversion-Potenzial"],
  ["HEIZUNGSBAU & Bäder Jänchen", "Saarland", 77, "Notdienst und hoher lokaler Suchintent"],
];

export const COMPANIES_SHK = build(rows, "shk-saarland");
