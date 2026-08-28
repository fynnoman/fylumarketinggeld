import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://www.fylumarketing.de";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Kostenlose Fylu-Tools für Ihre Website: Kosten-Rechner mit klarer Investitions-Spanne, Website-Analyse und SEO-Check. Keine Registrierung nötig.",
  alternates: { canonical: `${SITE}/tools` },
  openGraph: {
    title: "Fylu Tools — Kosten, Analyse, SEO",
    description:
      "Kostenlose Tools des Fylu Studios: Kosten-Rechner, Website-Analyse und SEO-Check. Transparente Ergebnisse.",
    url: `${SITE}/tools`,
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
  },
};

type ToolCard = {
  href: string;
  status: "live" | "in-arbeit";
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

const tools: ToolCard[] = [
  {
    href: "/tools/website-kosten-rechner",
    status: "live",
    eyebrow: "§01 · Kosten",
    title: "Website-Kosten-Rechner",
    description:
      "Projektklasse, Umfang und Investitions-Spanne für Ihr Vorhaben — in unter zwei Minuten. Unverbindliche Orientierung, keine Registrierung.",
    bullets: [
      "Elf Kern-Parameter (Branche, Umfang, CMS, SEO, Shop, Sprachen …)",
      "Klare Zuordnung zu Signature · Atelier · Maison",
      "Transparente Investitions-Spanne mit Zeitplan-Schätzung",
    ],
  },
  {
    href: "/tools/website-check",
    status: "live",
    eyebrow: "§02 · Analyse",
    title: "Website-Analyse",
    description:
      "Direkte serverseitige Prüfung Ihrer Website: Meta, Struktur, Inhalt, Bilder, Structured Data, mobile Basis und lokale Signale. Ergebnis in unter 15 Sekunden.",
    bullets: [
      "Score + priorisierte Findings sofort sichtbar",
      "Meta, H1, Canonical, Alt-Texte, Structured Data, mobile Basis",
      "Optional: PDF-Report per E-Mail",
    ],
  },
  {
    href: "/tools/seo-check",
    status: "live",
    eyebrow: "§03 · SEO",
    title: "SEO-Check",
    description:
      "Fokussierter SEO-Check Ihrer Domain: Meta, Struktur, Inhalt, Structured Data, lokale Signale — mit einer konkreten Handlungsempfehlung zu jedem Finding.",
    bullets: [
      "Priorisierte Findings statt Score-Kosmetik",
      "Konkrete Handlungsempfehlung pro Finding",
      "Optional als PDF-Report",
    ],
  },
];

export default function ToolsIndexPage() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 md:mb-20 text-center">
          <div className="mb-6 flex items-baseline justify-center gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Fylu Tools
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02]">
            Klare Antworten, bevor wir{" "}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              miteinander sprechen
            </span>
            .
          </h1>
          <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Drei Werkzeuge, die aus dem Studio-Alltag entstanden sind. Sie liefern Ergebnisse
            direkt — ohne Registrierung. Wenn Sie danach mehr wollen, sagen Sie Bescheid.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool) => {
            const isLive = tool.status === "live";
            const Wrapper = isLive ? Link : "div";
            const props = isLive ? { href: tool.href } : {};
            return (
              <Wrapper
                key={tool.href}
                {...(props as { href: string })}
                className={`group relative glass rounded-3xl overflow-hidden p-8 flex flex-col ${
                  isLive
                    ? "hover:border-cyan-200 transition-colors cursor-pointer"
                    : "opacity-70 cursor-default"
                }`}
              >
                <span className="glass-edge" aria-hidden />
                <div className="relative flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                      {tool.eyebrow}
                    </span>
                    {!isLive && (
                      <span className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-medium">
                        in Vorbereitung
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-[1.6rem] font-semibold text-[var(--ink)] tracking-[-0.02em] leading-tight mb-3">
                    {tool.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-6">{tool.description}</p>
                  <ul className="space-y-2 text-sm text-stone-600 mb-8">
                    {tool.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="font-display italic text-[var(--cyan-deep)] mt-0.5">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-stone-200/60">
                    {isLive ? (
                      <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--cyan-deep)]">
                        Tool öffnen
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </span>
                    ) : (
                      <span className="text-[13px] font-medium text-stone-400">
                        Bald verfügbar
                      </span>
                    )}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
