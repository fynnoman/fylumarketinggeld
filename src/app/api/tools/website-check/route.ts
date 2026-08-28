import { NextRequest, NextResponse } from "next/server";
import { analyze } from "@/lib/analyzer";

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

    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[tools/website-check] Unexpected error:", message);
    return NextResponse.json(
      { error: "server-error", message: "Analyse fehlgeschlagen." },
      { status: 500 },
    );
  }
}
