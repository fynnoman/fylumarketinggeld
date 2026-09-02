import { NextResponse } from "next/server";
import {
  getCategory,
  getCompanyScore,
  scoreBand,
} from "@/lib/digital-index";
import { getCompanyBySlug } from "@/lib/digital-index-data";

// Öffentliche SVG-Route: /api/badge/[slug] oder /api/badge/[slug].svg
// Wird von Unternehmen als Badge auf der eigenen Website eingebettet.

const TONE_COLOR = {
  high: "#16a34a",
  mid: "#d97706",
  low: "#dc2626",
} as const;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ slug: string }> },
) {
  const { slug: rawSlug } = await ctx.params;
  const slug = rawSlug.endsWith(".svg") ? rawSlug.slice(0, -4) : rawSlug;

  const company = getCompanyBySlug(slug);
  if (!company) {
    return new NextResponse("Not found", { status: 404 });
  }

  const category = getCategory(company.categorySlug);
  const score = getCompanyScore(company);
  const { tone, label } = scoreBand(score);
  const accent = TONE_COLOR[tone];
  const industryLabel = category?.industry ?? "Digital Index";

  const width = 220;
  const height = 90;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Fylu Digital Index Score ${score} von 100 für ${escapeXml(
    company.name,
  )}">
  <title>Fylu Digital Index: ${escapeXml(company.name)}</title>
  <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="8" ry="8" fill="#ffffff" stroke="#e5e7eb" />
  <text x="16" y="24" font-family="Georgia, 'Times New Roman', serif" font-size="10" fill="#6b7280" letter-spacing="1.5">FYLU DIGITAL INDEX</text>
  <text x="16" y="55" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-weight="500" fill="#111827">${score}</text>
  <text x="52" y="55" font-family="Georgia, 'Times New Roman', serif" font-size="12" fill="#6b7280">/ 100</text>
  <text x="16" y="76" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="11" fill="#374151">${escapeXml(
    industryLabel,
  )} · ${escapeXml(label)}</text>
  <rect x="${width - 8}" y="0" width="8" height="${height}" fill="${accent}" />
</svg>`;

  return new NextResponse(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
