// Kompakter Konstruktor für Company-Einträge.
// Die 4 messbaren Sub-Scores (technical_seo, structured_data, content_quality,
// mobile_ux) werden zur Laufzeit vom Auto-Audit befüllt. Deine manuellen
// Gesamt-Scores kommen als `totalOverride` und bleiben Ranking-Basis.

import type { Company, SubScores } from "../digital-index";

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/&/g, " und ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

export type CompactRow = [
  name: string,
  city: string,
  totalOverride: number,
  opportunityNote?: string,
  website?: string,
  slugSuffix?: string,
];

export function build(
  rows: CompactRow[],
  categorySlug: string,
  updatedAt = "2026-09-02",
): Company[] {
  const seen = new Map<string, number>();
  const out: Company[] = [];

  for (const [name, city, totalOverride, opp, website, slugSuffix] of rows) {
    let slug = slugify(name);
    if (slugSuffix) slug = `${slug}-${slugSuffix}`;
    const prev = seen.get(slug) ?? 0;
    if (prev > 0) slug = `${slug}-${prev + 1}`;
    seen.set(slugify(name) + (slugSuffix ? `-${slugSuffix}` : ""), prev + 1);

    const subScores: SubScores = {};
    const entry: Company = {
      slug,
      name,
      city,
      categorySlug,
      totalOverride,
      subScores,
      updatedAt,
    };
    if (opp) entry.internalOpportunityNote = opp;
    if (website) entry.website = website;
    out.push(entry);
  }

  return out;
}
