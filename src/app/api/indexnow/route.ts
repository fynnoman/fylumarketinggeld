import { NextResponse } from "next/server";

// IndexNow-Ping-Endpoint. Meldet URL-Änderungen an teilnehmende
// Suchmaschinen (Bing/Copilot, Yandex, Seznam, Naver, Yep).
// Nicht relevant für Google.
//
// Aufruf: POST /api/indexnow  { "urls": ["https://www.fylumarketing.de/…"] }
// Bei einer einzelnen URL reicht auch { "url": "…" }.
//
// Key-Datei liegt öffentlich unter /{KEY}.txt und enthält den Key im
// Klartext. Beim Wechsel des Keys muss auch die .txt-Datei aktualisiert
// werden.

const HOST = "www.fylumarketing.de";
const KEY = "7f3e9d2c8b6a4f1e0d5c9b8a7e6d5c4b";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  url?: string;
  urls?: string[];
};

function isValidUrl(u: string): boolean {
  try {
    const parsed = new URL(u);
    return parsed.hostname === HOST || parsed.hostname === HOST.replace(/^www\./, "");
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültiger Request." }, { status: 400 });
  }

  const list = body.urls ?? (body.url ? [body.url] : []);
  const clean = list.filter((u) => typeof u === "string" && isValidUrl(u));
  if (clean.length === 0) {
    return NextResponse.json(
      { ok: false, error: "Keine gültigen URLs für diese Domain übergeben." },
      { status: 400 },
    );
  }

  const submission = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: clean,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(submission),
    });
    const status = res.status;
    const text = await res.text().catch(() => "");
    return NextResponse.json({
      ok: status < 300,
      status,
      submitted: clean.length,
      response: text.slice(0, 500),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unbekannter Fehler.";
    return NextResponse.json({ ok: false, error: message }, { status: 502 });
  }
}
