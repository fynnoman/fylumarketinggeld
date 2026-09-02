import { build, type CompactRow } from "./_helpers";

// Nur Zahnärzte aus der ursprünglichen Ärzte-Liste. Allgemein-Ärzte und
// MVZs bewusst ausgelassen (Berufsstandsrecht, siehe ICP-Entscheidung).

const rows: CompactRow[] = [
  ["Zahnzentrum am Saarufer", "Saarbrücken", 96, "4,8/5 bei 130 Bewertungen, sehr starkes Trust-Profil"],
  ["Zahnzentrum am Burgplatz", "Saarbrücken", 95, "Etabliertes Zentrum"],
  ["J. Jankowski – Kompetenzzentrum für Zahnheilkunde & Implantologie", "Saarland", 94, "4,7/5 bei 189 Bewertungen"],
  ["Zahnarzt Saarbrücken – Dr. Hahn Ferreira & ZÄ Radha", "Saarbrücken", 94, "Zentrales Zahnarzt-Team"],
  ["ZAHNPOESIE – Dr. Maja Anna-Böttcher MSc", "Saarland", 93, "4,9/5 bei 63 Bewertungen, sehr starkes Trust-Profil"],
  ["Dr. Ch. Lamest – Praxisklinik", "Saarland", 93, "Zahnchirurgie und Implantologie"],
  ["Zahnärztliches Zentrum Saarbrücken (Dr. …)", "Saarbrücken", 83, "Zentrum mit mehreren Behandlern"],
  ["Zahnärzte am Staden", "Saarbrücken", 83, "Zentrale Praxis"],
  ["Zahnarztzentrum Saarbrücken", "Saarbrücken", 82, "Zentrum mit mehreren Behandlern"],
];

export const COMPANIES_ZAHNARZT = build(rows, "zahnarzt-saarland");
