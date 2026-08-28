// Verhindert Server-Side Request Forgery: prüft, dass die eingegebene URL
// öffentlich erreichbar ist und keine internen Adressen anspricht.

export type UrlValidation =
  | { ok: true; url: URL }
  | { ok: false; reason: string };

const BLOCKED_HOSTS = new Set([
  "localhost",
  "0.0.0.0",
  "127.0.0.1",
  "::1",
  "metadata.google.internal",
  "169.254.169.254",
]);

function normalizeInput(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function isPrivateIPv4(host: string): boolean {
  const parts = host.split(".");
  if (parts.length !== 4) return false;
  const nums = parts.map((p) => Number(p));
  if (nums.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return false;
  const [a, b] = nums;
  if (a === 10) return true;
  if (a === 127) return true;
  if (a === 0) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  return false;
}

export function validateAnalyzerUrl(raw: string): UrlValidation {
  const normalized = normalizeInput(raw);
  if (!normalized) return { ok: false, reason: "Bitte eine URL eingeben." };

  let url: URL;
  try {
    url = new URL(normalized);
  } catch {
    return { ok: false, reason: "Diese URL ist ungültig." };
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return { ok: false, reason: "Nur http- und https-URLs sind erlaubt." };
  }

  const host = url.hostname.toLowerCase();
  if (!host) return { ok: false, reason: "Die URL hat keinen Host." };

  if (BLOCKED_HOSTS.has(host)) {
    return { ok: false, reason: "Interne Adressen sind nicht erlaubt." };
  }

  if (isPrivateIPv4(host)) {
    return { ok: false, reason: "Private oder lokale IPs sind nicht erlaubt." };
  }

  // IPv6-Loopback-Muster schnell abfangen
  if (host.startsWith("[::") || host.includes("fc00:") || host.includes("fd00:")) {
    return { ok: false, reason: "Private oder lokale IPs sind nicht erlaubt." };
  }

  // Nur Standardports oder gar keinen Port zulassen
  const port = url.port;
  if (port && !["80", "443"].includes(port)) {
    return { ok: false, reason: "Nur Standard-Web-Ports (80, 443) sind erlaubt." };
  }

  return { ok: true, url };
}
