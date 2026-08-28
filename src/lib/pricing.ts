export type ProjectClass = "signature" | "atelier" | "maison";

export type CalculatorInput = {
  branche: string;
  seiten: "3-5" | "6-10" | "11-20" | "20+";
  designLevel: "standard" | "premium" | "signature";
  cms: "none" | "basic" | "headless";
  blog: boolean;
  seo: "none" | "basic" | "advanced";
  mehrsprachig: "no" | "two" | "three_plus";
  formulare: "simple" | "multistep" | "logic";
  integrationen: "none" | "few" | "many";
  shop: "none" | "small" | "medium" | "large";
  customFunctions: "none" | "some" | "many";
};

export type CalculatorResult = {
  projectClass: ProjectClass;
  projectClassLabel: string;
  scopeDescription: string;
  investment: {
    from: number;
    to: number;
    currency: "EUR";
  };
  drivers: string[];
  timelineWeeks: { from: number; to: number };
};

// Basiswerte pro Feld — kalibriert auf Fylu-Preisrahmen (2026-09):
// realistische Spanne 800–3.500 € netto, Kernkunden ~1.200–2.500 €.
// Alle Anpassungen zentral, damit UI und API konsistent bleiben.
const SEITEN_BASE: Record<CalculatorInput["seiten"], number> = {
  "3-5": 900,
  "6-10": 1150,
  "11-20": 1500,
  "20+": 1900,
};

const DESIGN_MULT: Record<CalculatorInput["designLevel"], number> = {
  standard: 1.0,
  premium: 1.15,
  signature: 1.3,
};

const CMS_ADD: Record<CalculatorInput["cms"], number> = {
  none: 0,
  basic: 80,
  headless: 200,
};

const SEO_ADD: Record<CalculatorInput["seo"], number> = {
  none: 0,
  basic: 120,
  advanced: 300,
};

const MEHRSPRACHIG_ADD: Record<CalculatorInput["mehrsprachig"], number> = {
  no: 0,
  two: 150,
  three_plus: 300,
};

const FORMULARE_ADD: Record<CalculatorInput["formulare"], number> = {
  simple: 0,
  multistep: 80,
  logic: 180,
};

const INTEGRATIONEN_ADD: Record<CalculatorInput["integrationen"], number> = {
  none: 0,
  few: 100,
  many: 250,
};

const SHOP_ADD: Record<CalculatorInput["shop"], number> = {
  none: 0,
  small: 250,
  medium: 500,
  large: 800,
};

const CUSTOM_ADD: Record<CalculatorInput["customFunctions"], number> = {
  none: 0,
  some: 180,
  many: 500,
};

export function calculate(input: CalculatorInput): CalculatorResult {
  const base = SEITEN_BASE[input.seiten];
  const design = DESIGN_MULT[input.designLevel];

  const additions =
    CMS_ADD[input.cms] +
    (input.blog ? 700 : 0) +
    SEO_ADD[input.seo] +
    MEHRSPRACHIG_ADD[input.mehrsprachig] +
    FORMULARE_ADD[input.formulare] +
    INTEGRATIONEN_ADD[input.integrationen] +
    SHOP_ADD[input.shop] +
    CUSTOM_ADD[input.customFunctions];

  const point = base * design + additions;

  // Spanne ± 18 % — Rundung auf 100 €.
  const from = roundTo(point * 0.82, 100);
  const to = roundTo(point * 1.18, 100);

  const projectClass = classifyProject(point, input);
  const projectClassLabel = classLabel(projectClass);
  const scopeDescription = describeScope(input, projectClass);
  const drivers = collectDrivers(input);
  const timelineWeeks = estimateTimeline(input, projectClass);

  return {
    projectClass,
    projectClassLabel,
    scopeDescription,
    investment: { from, to, currency: "EUR" },
    drivers,
    timelineWeeks,
  };
}

function classifyProject(point: number, input: CalculatorInput): ProjectClass {
  if (input.shop === "large" || input.customFunctions === "many" || point > 2800) {
    return "maison";
  }
  if (point > 1600 || input.designLevel === "signature" || input.shop === "medium") {
    return "atelier";
  }
  return "signature";
}

function classLabel(c: ProjectClass): string {
  switch (c) {
    case "signature":
      return "Signature";
    case "atelier":
      return "Atelier";
    case "maison":
      return "Maison";
  }
}

function describeScope(input: CalculatorInput, c: ProjectClass): string {
  const seitenText: Record<CalculatorInput["seiten"], string> = {
    "3-5": "kompakter Auftritt mit drei bis fünf Seiten",
    "6-10": "vollständige Website mit sechs bis zehn Seiten",
    "11-20": "größerer Auftritt mit elf bis zwanzig Seiten",
    "20+": "umfangreicher Auftritt mit mehr als zwanzig Seiten",
  };
  const scale: Record<ProjectClass, string> = {
    signature: "Editorial-Studio-Standard mit Fokus auf klare Verkaufsarchitektur.",
    atelier: "Erweiterter Umfang mit tieferer Content-Architektur und individueller Bildwelt.",
    maison: "Individuelle Konzeption mit komplexen Funktionen, Sonderentwicklungen und intensiver Betreuung.",
  };
  return `${capitalize(seitenText[input.seiten])}. ${scale[c]}`;
}

function collectDrivers(input: CalculatorInput): string[] {
  const drivers: string[] = [];
  if (input.designLevel === "signature") drivers.push("Signature-Design mit individueller Bildwelt");
  if (input.designLevel === "premium") drivers.push("Premium-Design mit erweiterten Layout-Studien");
  if (input.cms === "headless") drivers.push("Headless-CMS für flexible Inhalte");
  if (input.cms === "basic") drivers.push("Redaktionelles CMS");
  if (input.blog) drivers.push("Blog-Modul mit SEO-Struktur");
  if (input.seo === "advanced") drivers.push("Erweiterte SEO-Foundation");
  if (input.seo === "basic") drivers.push("SEO-Basis inklusive");
  if (input.mehrsprachig === "two") drivers.push("Zweite Sprache");
  if (input.mehrsprachig === "three_plus") drivers.push("Mehrsprachig ab drei Sprachen");
  if (input.formulare === "multistep") drivers.push("Mehrstufige Formulare");
  if (input.formulare === "logic") drivers.push("Formulare mit Logik/Vorqualifikation");
  if (input.integrationen === "few") drivers.push("Externe Integrationen (bis drei)");
  if (input.integrationen === "many") drivers.push("Zahlreiche Integrationen und Schnittstellen");
  if (input.shop === "small") drivers.push("Kleiner Shop-Bereich");
  if (input.shop === "medium") drivers.push("Vollständiger E-Commerce");
  if (input.shop === "large") drivers.push("Umfangreicher Shop mit Sonderfunktionen");
  if (input.customFunctions === "some") drivers.push("Individuelle Funktionen");
  if (input.customFunctions === "many") drivers.push("Umfangreiche Sonderentwicklungen");
  return drivers;
}

function estimateTimeline(input: CalculatorInput, c: ProjectClass): { from: number; to: number } {
  if (c === "maison") return { from: 6, to: 10 };
  if (c === "atelier") return { from: 4, to: 6 };
  if (input.seiten === "3-5") return { from: 2, to: 3 };
  return { from: 3, to: 5 };
}

function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatEur(n: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}
