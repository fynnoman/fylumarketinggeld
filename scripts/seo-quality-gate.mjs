#!/usr/bin/env node
// SEO Quality Gate — statischer Check aller indexierbaren Content-Pages.
//
// Warum als externes .mjs statt Next.js-Route:
// - Wir wollen den Check auch außerhalb eines laufenden Servers ausführen können
//   (npm run check:seo, in Pre-Deploy-Hooks etc.)
// - Keine zusätzlichen Runtime-Deps, keine Fetches, kein DB-Zugriff
//
// Prüft je Content-Objekt:
// - metaTitle: vorhanden, 25–70 Zeichen
// - metaDescription: vorhanden, 100–170 Zeichen
// - h1: vorhanden
// - Slug: eindeutig innerhalb desselben Typs, Kebab-Case
// - Duplicates: metaTitle und metaDescription dürfen sich global nicht wiederholen
//
// Ergebnis: Nicht-Null-Exit-Code wenn kritische Fehler; Warnungen nur informativ.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const TARGETS = [
  {
    file: "src/lib/topics.ts",
    type: "topic",
    urlPrefix: "/leistungen/",
    // Off-ICP-Topics werden generell noindex gesetzt; die zieht der Gate nicht ran.
    // Wir prüfen alle Objekte, aber der Gate meldet noindex-Objekte nur informativ.
  },
  { file: "src/lib/problems.ts", type: "problem", urlPrefix: "/probleme/" },
  { file: "src/lib/guides.ts", type: "guide", urlPrefix: "/ratgeber/" },
  { file: "src/lib/cases.ts", type: "case", urlPrefix: "/referenzen/" },
];

const OFF_ICP_TOPIC_SLUGS = new Set([
  "handwerker",
  "restaurant",
  "guenstig",
  "in-14-tagen",
  "friseur",
  "hotel",
  "autohaus",
  "onlineshop",
  "coach",
  "fitnessstudio",
]);

const LIMITS = {
  metaTitle: { min: 25, max: 70 },
  metaDescription: { min: 100, max: 170 },
};

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Extrahiert alle `slug: "..."`, `metaTitle: "..."`, `metaDescription: "..."`,
// `h1: "..."` Vorkommen als objektzugeordnete Records aus dem File-Text.
// Nutzt einen minimalen State-Machine-Ansatz auf Objekt-Ebene (Klammer-Balance).
// Fließt mehrzeilige Feld-Definitionen (`key:\n      "value",`) zu einzeiligen
// zusammen, damit der line-basierte Parser sie erkennt.
function normalizeMultilineFields(source) {
  return source.replace(/^(\s+\w+):\s*\n\s+(["'`])/gm, "$1: $2");
}

function parseObjects(rawSource) {
  const source = normalizeMultilineFields(rawSource);
  const objects = [];
  const lines = source.split(/\r?\n/);
  let depth = 0;
  let current = null;
  let bracketOpen = 0;
  let bracketClose = 0;
  // We look for top-level `{` inside an array literal. The heuristic: each
  // top-level object inside the `export const X: T[] = [ ... ]` array starts
  // at depth 1 (after `[`) and reaches depth 2 at `{`. To avoid brittle
  // parser logic, we scan char-by-char within an accumulated string and use
  // JSON5-esque field-line matching.
  //
  // Simpler heuristic (given the file conventions):
  //   Each object begins with a line that matches /^\s+\{\s*$/ and ends with
  //   /^\s+\},?\s*$/. Inside those bounds we look for line patterns.
  let insideObj = false;
  let bracesInside = 0;

  for (const rawLine of lines) {
    const line = rawLine;

    if (!insideObj) {
      if (/^\s+\{\s*$/.test(line)) {
        insideObj = true;
        current = {
          slug: null,
          metaTitle: null,
          metaDescription: null,
          h1: null,
          indexable: null,
          lineStart: 0,
        };
        bracesInside = 1;
      }
      continue;
    }

    // Track brace depth to know when the object closes.
    const opens = (line.match(/\{/g) || []).length;
    const closes = (line.match(/\}/g) || []).length;
    bracesInside += opens - closes;

    // Extract top-level field values on the current object (naive: match string
    // literal after `key: `).
    matchField(current, line, "slug");
    matchField(current, line, "metaTitle");
    matchField(current, line, "metaDescription");
    matchField(current, line, "h1");
    matchIndexable(current, line);

    if (bracesInside <= 0) {
      objects.push(current);
      current = null;
      insideObj = false;
    }
  }

  return objects;
}

function matchField(obj, line, key) {
  if (obj[key] !== null) return;
  const re = new RegExp(`^\\s*${key}:\\s*["'\`](.*?)["'\`],?\\s*$`);
  const m = line.match(re);
  if (m) obj[key] = m[1];
}

function matchIndexable(obj, line) {
  const m = line.match(/^\s*indexable:\s*(true|false)\s*,?\s*$/);
  if (m) obj.indexable = m[1] === "true";
}

function color(name, s) {
  const codes = {
    reset: 0,
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    dim: 2,
    bold: 1,
  };
  if (!process.stdout.isTTY) return s;
  return `[${codes[name] ?? 0}m${s}[0m`;
}

function main() {
  const globalTitles = new Map(); // metaTitle -> [locations]
  const globalDescs = new Map();
  const globalUrls = new Map();

  let errors = 0;
  let warnings = 0;

  console.log(color("bold", "\nFylu SEO Quality Gate"));
  console.log(color("dim", "───────────────────────────────────────────────────\n"));

  for (const target of TARGETS) {
    const fullPath = join(ROOT, target.file);
    let source;
    try {
      source = readFileSync(fullPath, "utf-8");
    } catch (err) {
      console.log(color("yellow", `⚠ ${target.file} nicht lesbar: ${err.message}`));
      warnings++;
      continue;
    }

    const objects = parseObjects(source);
    const indexed = objects.filter((o) => {
      if (o.indexable === false) return false;
      if (target.type === "topic" && o.slug && OFF_ICP_TOPIC_SLUGS.has(o.slug)) return false;
      return true;
    });

    const skipped = objects.length - indexed.length;
    console.log(
      color("blue", `→ ${target.type}`) +
        color("dim", `  (${target.file})  ${indexed.length} indexierbar, ${skipped} noindex`),
    );

    for (const o of indexed) {
      if (!o.slug) {
        console.log(color("red", `  ✗ Objekt ohne slug (parse-Problem?)`));
        errors++;
        continue;
      }

      const loc = `${target.urlPrefix}${o.slug}`;

      // Slug-Kebab-Case
      if (!SLUG_RE.test(o.slug)) {
        console.log(color("red", `  ✗ ${loc}: slug ist kein sauberes Kebab-Case: "${o.slug}"`));
        errors++;
      }

      // Slug-Duplikate innerhalb desselben Typs bereits durch File-Struktur ausgeschlossen;
      // wir prüfen URL-Duplikate global.
      if (globalUrls.has(loc)) {
        console.log(color("red", `  ✗ ${loc}: URL kollidiert mit ${globalUrls.get(loc)}`));
        errors++;
      } else {
        globalUrls.set(loc, target.file);
      }

      // metaTitle
      if (!o.metaTitle) {
        console.log(color("red", `  ✗ ${loc}: metaTitle fehlt`));
        errors++;
      } else {
        const len = o.metaTitle.length;
        if (len < LIMITS.metaTitle.min || len > LIMITS.metaTitle.max) {
          console.log(
            color("yellow", `  ⚠ ${loc}: metaTitle-Länge ${len} (Zielbereich ${LIMITS.metaTitle.min}–${LIMITS.metaTitle.max})`),
          );
          warnings++;
        }
        const prev = globalTitles.get(o.metaTitle);
        if (prev) {
          console.log(color("red", `  ✗ ${loc}: metaTitle identisch zu ${prev}`));
          errors++;
        } else {
          globalTitles.set(o.metaTitle, loc);
        }
      }

      // metaDescription
      if (!o.metaDescription) {
        console.log(color("red", `  ✗ ${loc}: metaDescription fehlt`));
        errors++;
      } else {
        const len = o.metaDescription.length;
        if (len < LIMITS.metaDescription.min || len > LIMITS.metaDescription.max) {
          console.log(
            color("yellow", `  ⚠ ${loc}: metaDescription-Länge ${len} (Zielbereich ${LIMITS.metaDescription.min}–${LIMITS.metaDescription.max})`),
          );
          warnings++;
        }
        const prev = globalDescs.get(o.metaDescription);
        if (prev) {
          console.log(color("red", `  ✗ ${loc}: metaDescription identisch zu ${prev}`));
          errors++;
        } else {
          globalDescs.set(o.metaDescription, loc);
        }
      }

      // h1
      if (!o.h1) {
        console.log(color("red", `  ✗ ${loc}: h1 fehlt`));
        errors++;
      }
    }

    console.log();
  }

  console.log(color("dim", "───────────────────────────────────────────────────"));
  if (errors === 0 && warnings === 0) {
    console.log(color("green", `✓ Alle Prüfungen bestanden.`));
  } else {
    console.log(
      `${errors > 0 ? color("red", `✗ ${errors} Fehler`) : color("green", `0 Fehler`)}, ` +
        `${warnings > 0 ? color("yellow", `⚠ ${warnings} Warnungen`) : color("green", `0 Warnungen`)}`,
    );
  }
  console.log();

  process.exit(errors > 0 ? 1 : 0);
}

main();
