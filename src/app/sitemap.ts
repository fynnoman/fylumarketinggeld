import type { MetadataRoute } from "next";
import { regions } from "@/lib/regions";
import { topics, isIndexableTopic } from "@/lib/topics";
import { problems } from "@/lib/problems";
import { guides } from "@/lib/guides";
import { cases } from "@/lib/cases";
import { CATEGORIES as digitalIndexCategories } from "@/lib/digital-index";
import { COMPANIES as digitalIndexCompanies } from "@/lib/digital-index-data";

// Priorität für die wichtigsten Saarland-Städte (Hauptverdienst-Keywords)
const HIGH_PRIORITY_CITIES = new Set(["saarbruecken", "saarlouis", "neunkirchen", "homburg"]);
// Wichtigste Branchen (höchste lokale Suchvolumina) — nur ICP-konforme
const HIGH_PRIORITY_TOPICS = new Set([
  "anwalt",
  "arzt",
  "zahnarzt",
  "immobilienmakler",
  "steuerberater",
  "elektriker",
  "shk",
  "dachdecker",
  "physiotherapie",
  "photovoltaik",
  "handwerker",
  "gebaeudereinigung",
  "industrie",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fylumarketing.de";
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/webdesign-saarland`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/software-saarland`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/programmierer-saarland`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/app-entwickeln-lassen`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/seo-saarland`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/seo-agentur-saarland`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/google-ads-saarland`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/website-erstellen-lassen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/tools/website-check`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/seo-check`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/probleme`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/ratgeber`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/referenzen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/methodik`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/buchen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  // Nur Top-Tier-Städte in die Sitemap aufnehmen — die anderen sind per
  // `metadata.robots = noindex` aus dem Index ausgeschlossen, ein Sitemap-
  // Eintrag würde widersprüchliche Signale senden ("crawl this!" vs "don't index").
  const topRegions = regions.filter((r) => r.tier === "top");

  const regionEntries: MetadataRoute.Sitemap = topRegions.map((r) => ({
    url: `${baseUrl}/webdesign/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_CITIES.has(r.slug) ? 0.9 : 0.8,
  }));

  const softwareCityEntries: MetadataRoute.Sitemap = topRegions.map((r) => ({
    url: `${baseUrl}/software/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_CITIES.has(r.slug) ? 0.85 : 0.75,
  }));

  // Off-ICP-Topics werden per generateMetadata auf noindex gesetzt;
  // ein Sitemap-Eintrag würde widersprüchliche Signale senden.
  const topicEntries: MetadataRoute.Sitemap = topics.filter(isIndexableTopic).map((t) => ({
    url: `${baseUrl}/leistungen/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_TOPICS.has(t.slug) ? 0.85 : 0.7,
  }));

  const problemEntries: MetadataRoute.Sitemap = problems.map((p) => ({
    url: `${baseUrl}/probleme/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${baseUrl}/ratgeber/${g.slug}`,
    lastModified: new Date(g.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseEntries: MetadataRoute.Sitemap = cases.map((c) => ({
    url: `${baseUrl}/referenzen/${c.slug}`,
    lastModified: new Date(c.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const digitalIndexStaticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/digital-index`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/digital-index/methodik`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.55,
    },
  ];

  // Nur Kategorien mit mindestens einer Firma indexieren; leere Kategorien
  // sind per generateMetadata robots:noindex und würden hier
  // widersprüchliche Signale senden.
  const populatedCategorySlugs = new Set(
    digitalIndexCompanies.map((c) => c.categorySlug),
  );
  const companiesByCategory: Record<string, number> = {};
  for (const c of digitalIndexCompanies) {
    companiesByCategory[c.categorySlug] =
      (companiesByCategory[c.categorySlug] ?? 0) + 1;
  }

  const digitalIndexCategoryEntries: MetadataRoute.Sitemap =
    digitalIndexCategories
      .filter((c) => populatedCategorySlugs.has(c.slug))
      .map((c) => {
        // Kategorien mit tiefer Substanz (>= 20 Firmen) sind eigenständige
        // SEO-Landings mit hoher Ranking-Chance und bekommen entsprechend
        // höhere Priorität. Kleinere Kategorien bleiben Basis-Priorität.
        const size = companiesByCategory[c.slug] ?? 0;
        const priority = size >= 20 ? 0.9 : size >= 10 ? 0.85 : 0.8;
        return {
          url: `${baseUrl}/digital-index/${c.slug}`,
          lastModified: new Date(c.updatedAt),
          changeFrequency: "weekly" as const,
          priority,
        };
      });

  const digitalIndexCompanyEntries: MetadataRoute.Sitemap =
    digitalIndexCompanies.map((c) => {
      // Höhere Score-Bänder priorisieren, weil sie mit stärkerer Relevanz
      // für Nutzer-Anfragen einhergehen und in AI-Antworten eher zitiert
      // werden. Untere Bänder bleiben niedriger.
      const score = typeof c.totalOverride === "number" ? c.totalOverride : 0;
      const priority = score >= 85 ? 0.7 : score >= 70 ? 0.65 : 0.6;
      return {
        url: `${baseUrl}/digital-index/${c.categorySlug}/${c.slug}`,
        lastModified: new Date(c.updatedAt),
        changeFrequency: "monthly" as const,
        priority,
      };
    });

  return [
    ...staticEntries,
    ...regionEntries,
    ...softwareCityEntries,
    ...topicEntries,
    ...problemEntries,
    ...guideEntries,
    ...caseEntries,
    ...digitalIndexStaticEntries,
    ...digitalIndexCategoryEntries,
    ...digitalIndexCompanyEntries,
  ];
}
