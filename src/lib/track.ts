// Lightweight tracking helper.
// Ruft window.gtag auf, wenn geladen (siehe GtagLoader, hängt an Marketing-Consent).
// Ohne Consent oder ohne geladenen gtag passiert schlicht nichts.
// Zusätzlich schickt der Helper ein Custom-Event auf window, damit
// serverseitige Analytics oder andere Listener später andocken können,
// ohne dass die CTAs weiter geändert werden müssen.

type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, props);
    } else if (Array.isArray(window.dataLayer)) {
      // Fallback: in dataLayer schreiben, falls gtag noch nicht geladen ist.
      window.dataLayer.push({ event: name, ...props });
    }
  } catch {
    // Never throw from tracking.
  }

  try {
    window.dispatchEvent(new CustomEvent("fylu:track", { detail: { name, props } }));
  } catch {
    // ignore
  }
}

// Erfasst UTM-Parameter aus der aktuellen URL und schreibt sie in sessionStorage.
// Kann später aus dem Buchen-Formular gelesen werden.
export function captureUtmToSession() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
  ];
  const captured: Record<string, string> = {};
  for (const k of keys) {
    const v = params.get(k);
    if (v) captured[k] = v;
  }
  if (Object.keys(captured).length === 0) return;
  try {
    // Erst-Berührung nicht überschreiben, damit die ursprüngliche Quelle erhalten bleibt.
    const existing = window.sessionStorage.getItem("fylu:utm");
    if (existing) return;
    window.sessionStorage.setItem(
      "fylu:utm",
      JSON.stringify({ ...captured, capturedAt: new Date().toISOString(), landingPath: window.location.pathname })
    );
  } catch {
    // ignore
  }
}

export function readUtmFromSession(): Record<string, string> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem("fylu:utm");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
