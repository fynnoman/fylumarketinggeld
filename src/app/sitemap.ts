import type { MetadataRoute } from "next";
import { regions } from "@/lib/regions";
import { topics } from "@/lib/topics";

// Priorität für die wichtigsten Saarland-Städte (Hauptverdienst-Keywords)
const HIGH_PRIORITY_CITIES = new Set(["saarbruecken", "saarlouis", "neunkirchen", "homburg"]);
// Wichtigste Branchen (höchste lokale Suchvolumina)
const HIGH_PRIORITY_TOPICS = new Set([
  "handwerker",
  "restaurant",
  "anwalt",
  "arzt",
  "zahnarzt",
  "immobilienmakler",
  "onlineshop",
  "elektriker",
  "shk",
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
    { url: `${baseUrl}/google-ads-saarland`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/website-erstellen-lassen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/webdesign-handwerk`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/angebote`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/premium`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/methodik`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/buchen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const regionEntries: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${baseUrl}/webdesign/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_CITIES.has(r.slug) ? 0.9 : 0.75,
  }));

  const softwareCityEntries: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${baseUrl}/software/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_CITIES.has(r.slug) ? 0.85 : 0.7,
  }));

  const topicEntries: MetadataRoute.Sitemap = topics.map((t) => ({
    url: `${baseUrl}/leistungen/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: HIGH_PRIORITY_TOPICS.has(t.slug) ? 0.85 : 0.7,
  }));

  return [...staticEntries, ...regionEntries, ...softwareCityEntries, ...topicEntries];
}
