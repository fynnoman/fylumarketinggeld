#!/usr/bin/env node
// IndexNow-Ping. Meldet die wichtigsten geänderten URLs nach einem Deploy an
// Bing/Copilot, Yandex, Seznam, Naver, Yep.
//
// Aufruf:
//   node scripts/indexnow-ping.mjs
//   node scripts/indexnow-ping.mjs https://www.fylumarketing.de/geo-saarland
//
// Ohne Argumente werden die aktuellen Kern-Seiten gepingt.
// Google unterstützt IndexNow nicht — hierfür bleibt GSC/Sitemap zuständig.

const HOST = "www.fylumarketing.de";
const KEY = "7f3e9d2c8b6a4f1e0d5c9b8a7e6d5c4b";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const CORE_URLS = [
  "/",
  "/seo-saarland",
  "/seo-agentur-saarland",
  "/webdesign-saarland",
  "/software-saarland",
  "/programmierer-saarland",
  "/google-ads-saarland",
  "/geo-saarland",
  "/local-seo-saarland",
  "/ratgeber",
  "/ratgeber/seo-agenturen-saarland",
  "/methodik",
  "/referenzen",
  "/digital-index",
].map((p) => `https://${HOST}${p}`);

const args = process.argv.slice(2).filter((a) => a.startsWith("http"));
const urlList = args.length > 0 ? args : CORE_URLS;

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

try {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const text = await res.text().catch(() => "");
  console.log(`[indexnow] ${res.status} — ${urlList.length} URLs`);
  if (text) console.log(text.slice(0, 400));
  process.exit(res.status < 300 ? 0 : 1);
} catch (err) {
  console.error("[indexnow] Fehler:", err instanceof Error ? err.message : err);
  process.exit(2);
}
