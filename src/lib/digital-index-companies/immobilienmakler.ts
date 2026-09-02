import { build, type CompactRow } from "./_helpers";

// Immobilienvermittlung und Projektentwicklung. Reine Hausverwaltungen in
// `hausverwaltung.ts`.

const rows: CompactRow[] = [
  ["VON POLL IMMOBILIEN Saarbrücken", "Saarbrücken", 96, "Immobilienvermittlung"],
  ["Engel & Völkers Saarbrücken", "Saarbrücken", 95, "Immobilienvermittlung"],
  ["Sparkasse Immobilien GmbH Saarbrücken", "Saarbrücken", 94, "Immobilien"],
  ["Saarland Immobiliengesellschaft mbH", "Saarland", 93, "Immobilien"],
  ["G.I.B. Gesellschaft für Immobilienbewirtschaftung mbH", "Saarland", 93, "Immobilienverwaltung"],
  ["immoXXL Immobilien GmbH", "Saarland", 92, "Immobilienvermittlung"],
  ["Schäfer Immobilien GmbH", "Saarland", 91, "Immobilien"],
  ["Immobilienservice Saarland GmbH", "Saarland", 91, "Verwaltung und Immobilien"],
  ["W.I.R. Immobilien GmbH", "Saarland", 90, "Immobilien"],
  ["Peter Gross Immobilien GmbH", "Saarland", 90, "Projektentwicklung"],
  ["OBG Immobilien GmbH", "Saarland", 89, "Projektentwicklung"],
  ["Häuser Immobilien GmbH", "Saarland", 88, "Immobilien"],
  ["Hoffmann Immobilien GmbH", "Saarland", 88, "Immobilien"],
  ["Müller Immobilien GmbH", "Saarland", 87, "Immobilien"],
  ["Immobilien Becker GmbH", "Saarland", 87, "Immobilien"],
  ["Klein Immobilien GmbH", "Saarland", 86, "Immobilien"],
  ["Immobilien Kontor Saarbrücken GmbH", "Saarbrücken", 84, "Immobilien"],
  ["Immobilienagentur Saarland", "Saarland", 84, "Vermittlung"],
  ["Wagner Immobilien GmbH", "Saarland", 83, "Immobilien"],
  ["Kessler Immobilien", "Saarland", 82, "Immobilien"],
  ["Schmitt Immobilien Saarland", "Saarland", 82, "Immobilien"],
  ["Immobilienbüro Saarbrücken GmbH", "Saarbrücken", 81, "Vermittlung"],
  ["B&S Immobilien GmbH", "Saarland", 80, "Immobilien"],
  ["Immobilienzentrum Saar GmbH", "Saarland", 80, "Immobilien"],
  ["Saar-Pfalz Immobilien GmbH", "Saarland", 78, "Immobilien"],
  ["Immobiliengesellschaft Saar mbH", "Saarland", 78, "Immobilien"],
  ["Immobilienbüro Völklingen", "Völklingen", 72, "Vermittlung"],
  ["Immobilienbüro Saarlouis", "Saarlouis", 72, "Vermittlung"],
  ["Immobilienbüro Homburg", "Homburg", 71, "Vermittlung"],
];

export const COMPANIES_IMMOBILIENMAKLER = build(rows, "immobilienmakler-saarland");
