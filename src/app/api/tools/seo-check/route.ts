import { NextRequest, NextResponse } from "next/server";
import { analyze, SEO_CATEGORIES } from "@/lib/analyzer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as { url?: string } | null;
    const rawUrl = body?.url;
    if (typeof rawUrl !== "string" || rawUrl.length === 0 || rawUrl.length > 2048) {
      return NextResponse.json(
        { error: "invalid-input", message: "Bitte eine URL angeben." },
        { status: 400 },
      );
    }

    const result = await analyze(rawUrl);

    if ("code" in result) {
      const status = result.code === "invalid-url" ? 400 : 422;
      return NextResponse.json({ error: result.code, message: result.message }, { status });
    }

    // SEO-Fokus: nur SEO-relevante Kategorien behalten und Score neu gewichten
    const seoChecks = result.checks.filter((c) => SEO_CATEGORIES.has(c.category));
    const totals = { critical: 0, warning: 0, good: 0 };
    for (const c of seoChecks) totals[c.severity]++;

    // Fokus-Score nur aus SEO-Kategorien
    let seoScore = 100;
    let goods = 0;
    for (const c of seoChecks) {
      if (c.severity === "critical") seoScore -= 14;
      else if (c.severity === "warning") seoScore -= 6;
      else goods++;
    }
    seoScore = Math.min(100, seoScore + Math.min(goods, 12) * 0.5);
    seoScore = Math.max(0, Math.round(seoScore));

    return NextResponse.json({
      url: result.url,
      finalUrl: result.finalUrl,
      fetchedAt: result.fetchedAt,
      seoScore,
      totals,
      meta: result.meta,
      headings: result.headings,
      content: result.content,
      technical: {
        hasSchemaOrg: result.technical.hasSchemaOrg,
        schemaTypes: result.technical.schemaTypes,
        noindex: result.technical.noindex,
      },
      local: result.local,
      checks: seoChecks,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[tools/seo-check] Unexpected error:", message);
    return NextResponse.json(
      { error: "server-error", message: "Analyse fehlgeschlagen." },
      { status: 500 },
    );
  }
}

export type SeoCheckResponse = {
  url: string;
  finalUrl: string;
  fetchedAt: string;
  seoScore: number;
  totals: { critical: number; warning: number; good: number };
  meta: Awaited<ReturnType<typeof analyze>> extends infer R
    ? R extends { meta: infer M }
      ? M
      : never
    : never;
  headings: {
    h1Count: number;
    h2Count: number;
    firstH1: string | null;
  };
  content: {
    wordCount: number;
    ctaCount: number;
  };
  technical: {
    hasSchemaOrg: boolean;
    schemaTypes: string[];
    noindex: boolean;
  };
  local: {
    hasLocalBusiness: boolean;
    mentionsCity: boolean;
  };
  checks: Array<{
    id: string;
    category: string;
    severity: "critical" | "warning" | "good";
    label: string;
    detail: string;
    recommendation?: string;
  }>;
};
