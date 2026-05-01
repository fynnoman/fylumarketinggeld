import type { MetadataRoute } from "next";
import { regions } from "@/lib/regions";
import { topics } from "@/lib/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fylumarketing.de";
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/angebote`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/buchen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/buchen/success`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/webdesign-saarland`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/seo-saarland`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/google-ads-saarland`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/website-erstellen-lassen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/webdesign-handwerk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const regionEntries: MetadataRoute.Sitemap = regions.map((r) => ({
    url: `${baseUrl}/webdesign/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const topicEntries: MetadataRoute.Sitemap = topics.map((t) => ({
    url: `${baseUrl}/leistungen/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...regionEntries, ...topicEntries];
}
