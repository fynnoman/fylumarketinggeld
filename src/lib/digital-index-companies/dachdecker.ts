import { build, type CompactRow } from "./_helpers";

const rows: CompactRow[] = [
  ["Mayer + Schweig GmbH", "Saarland", 77, "Starker Traditionsbetrieb, großes Leistungsportfolio"],
  ["Heller Bedachungen GmbH", "Saarland", 76, "Dach und Bau, regionale Suchintention"],
  ["Bonner Bedachungsgesellschaft mbH", "Saarland", 76, "Seit 1975, sehr gutes Conversion-Thema"],
  ["Arnold Dach & Solar", "Saarland", 75, "SEO-starker Bereich, modernere Positionierung"],
  ["MÜLLERDÄCHER", "Saarland", 75, "Extrem viele Bewertungen, großes Geschäft"],
  ["Blank Dach & Solar", "Saarland", 74, "Sehr gute Bewertungen"],
  ["Captain Dach's Saar", "Saarland", 74, "Sehr hohe Bewertungsbasis"],
  ["Güth GmbH & Co. KG", "Saarland", 74, "Breites Angebot und etablierter Betrieb"],
  ["Hans Schmitt Bedachung GmbH", "Saarland", 73, "Etablierter Meisterbetrieb"],
  ["H&W Dach GmbH", "Saarland", 73, "Regionaler Suchmarkt"],
];

export const COMPANIES_DACHDECKER = build(rows, "dachdecker-saarland");
