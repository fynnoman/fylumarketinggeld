import { NextResponse } from "next/server";
import { analyze, type AnalyzerError, type AnalyzerResult } from "@/lib/analyzer";

// Öffentlicher Self-Check des Fylu Digital Index. Nutzt den bestehenden
// serverseitigen Analyzer, mapped die Signale auf die 4 messbaren
// Fylu-Sub-Scores und liefert bis zu fünf priorisierte Findings zurück.
// Kein Storage. Keine externen APIs. Nur direkter HTTP-Fetch der Ziel-URL.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function subScoresFromAnalyzer(r: AnalyzerResult) {
  const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)));

  // Technisches SEO (HTTPS, Meta, Canonical, H1, Robots, Favicon)
  let tech = 100;
  if (!r.technical.isHttps) tech -= 25;
  if (!r.meta.canonical) tech -= 10;
  if (!r.meta.title) tech -= 15;
  else if (r.meta.titleLength < 25 || r.meta.titleLength > 70) tech -= 5;
  if (!r.meta.description) tech -= 10;
  else if (r.meta.descriptionLength < 90 || r.meta.descriptionLength > 170) tech -= 5;
  if (r.headings.h1Count === 0) tech -= 15;
  else if (r.headings.h1Count > 1) tech -= 5;
  if (r.technical.noindex) tech -= 40;
  if (!r.technical.hasFavicon) tech -= 3;
  const technical_seo = clamp(tech);

  // Structured Data
  let sd = 0;
  if (r.local.hasLocalBusiness) sd = 100;
  else if (r.technical.hasSchemaOrg) sd = 60;
  if (sd < 100 && r.technical.schemaTypes.length >= 3) sd += 10;
  if (r.meta.hreflangCount > 0) sd += 5;
  const structured_data = clamp(sd);

  // Content-Qualität
  let content = 0;
  if (r.content.wordCount >= 800) content = 90;
  else if (r.content.wordCount >= 400) content = 75;
  else if (r.content.wordCount >= 200) content = 55;
  else if (r.content.wordCount >= 100) content = 35;
  else content = 15;
  if (r.content.ctaCount >= 3) content += 10;
  else if (r.content.ctaCount === 0) content -= 15;
  if (r.local.mentionsCity) content += 5;
  const content_quality = clamp(content);

  // Mobile UX (Viewport + Ladezeit + Bilder-Basis)
  let mobile = 60;
  if (r.meta.viewport) mobile += 20;
  else mobile -= 30;
  if (r.technical.responseMs < 800) mobile += 15;
  else if (r.technical.responseMs > 2500) mobile -= 15;
  if (r.images.total > 0 && r.images.missingAlt / r.images.total < 0.2) mobile += 5;
  const mobile_ux = clamp(mobile);

  return { technical_seo, structured_data, content_quality, mobile_ux };
}

function topFindings(r: AnalyzerResult) {
  return r.checks
    .filter((c) => c.severity === "critical" || c.severity === "warning")
    .sort((a, b) => {
      const order = { critical: 0, warning: 1, good: 2 };
      return order[a.severity] - order[b.severity];
    })
    .slice(0, 5)
    .map((c) => ({
      severity: c.severity,
      label: c.label,
      detail: c.detail,
      recommendation: c.recommendation,
    }));
}

type CheckSuccess = {
  ok: true;
  url: string;
  finalUrl: string;
  score: number;
  subScores: ReturnType<typeof subScoresFromAnalyzer>;
  totals: AnalyzerResult["totals"];
  findings: ReturnType<typeof topFindings>;
  fetchedAt: string;
};

type CheckFail = { ok: false; error: string; code?: AnalyzerError["code"] };

export async function POST(req: Request) {
  let raw = "";
  try {
    const body = await req.json();
    raw = typeof body?.url === "string" ? body.url : "";
  } catch {
    return NextResponse.json<CheckFail>(
      { ok: false, error: "Ungültiger Request." },
      { status: 400 },
    );
  }

  if (!raw.trim()) {
    return NextResponse.json<CheckFail>(
      { ok: false, error: "Bitte eine URL eingeben." },
      { status: 400 },
    );
  }

  const result = await analyze(raw);
  if ("code" in result) {
    return NextResponse.json<CheckFail>(
      { ok: false, error: result.message, code: result.code },
      { status: 200 },
    );
  }

  const payload: CheckSuccess = {
    ok: true,
    url: result.url,
    finalUrl: result.finalUrl,
    score: result.score,
    subScores: subScoresFromAnalyzer(result),
    totals: result.totals,
    findings: topFindings(result),
    fetchedAt: result.fetchedAt,
  };

  return NextResponse.json(payload);
}
