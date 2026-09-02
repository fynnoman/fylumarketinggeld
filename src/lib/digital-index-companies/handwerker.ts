import { build, type CompactRow } from "./_helpers";

// Handwerker als Rest-Sammler für Schreiner, Maler, Fliesen, Holzbau, Trockenbau,
// Fassade — Gewerke ohne eigene ICP-Kategorie in Runde 1.

const rows: CompactRow[] = [
  ["Michael Schorn GmbH", "Saarland", 72, "Nischenleistung Holzbau, regionales SEO"],
  ["Sieger Holzbau & Bedachungen GmbH", "Saarland", 72, "Mehrere Suchcluster"],
  ["Schreinerei Bauer GmbH", "Saarland", 71, "Starke Bewertungen, gute lokale Nachfrage"],
  ["Schreinerei Blug", "Saarland", 70, "Sehr gute Bewertungen, lokaler Betrieb"],
  ["Schreinerei Michael Melchior", "Saarland", 70, "Kleinerer Betrieb, leichter Entscheiderzugang"],
  ["Forster GmbH", "Saarland", 69, "Seit 1959, starkes Qualitätsprofil (Maler)"],
  ["Nicola Paoli GmbH", "Saarland", 68, "Breites Leistungsangebot (Stuck/Trockenbau)"],
  ["Repro Construction GmbH", "Saarland", 67, "Über 10 Mitarbeiter, umfangreiche Projekte (Trockenbau/Sanierung)"],
  ["Raimund Bastian GmbH", "Saarland", 66, "Etablierter Meisterbetrieb (Bau/Handwerk)"],
  ["Amato Fliesenleger", "Saarland", 65, "Lokales Suchgeschäft"],
  ["Brodinger GmbH", "Saarland", 64, "Etablierter Fachbetrieb (Fliesen)"],
  ["Fliesen Rekem", "Saarland", 63, "Lokaler Nischenmarkt"],
];

export const COMPANIES_HANDWERKER = build(rows, "handwerker-saarland");
