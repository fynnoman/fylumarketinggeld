import type { Metadata } from "next";
import WebsiteCheckForm from "./WebsiteCheckForm";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/tools/website-check`;

export const metadata: Metadata = {
  title: "Website-Analyse",
  description:
    "Kostenlose technische und redaktionelle Website-Analyse: Meta, Struktur, Inhalte, Bilder, Structured Data, mobile Basis, lokale Signale. Direkt sichtbar, ohne Registrierung.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Website-Analyse — direkt sichtbar, ohne Registrierung",
    description:
      "In unter 15 Sekunden: Score, kritische Probleme, Verbesserungspotenzial und gute Signale Ihrer Website.",
    url: URL,
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website-Analyse | Fylu Studio",
    description: "Kostenlose Analyse Ihrer Website — direkt sichtbar, keine Registrierung.",
  },
};

export default function WebsiteCheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE}/tools` },
              { "@type": "ListItem", position: 3, name: "Website-Analyse", item: URL },
            ],
          }),
        }}
      />
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 md:mb-20 text-center">
            <div className="mb-6 flex items-baseline justify-center gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                §02
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Website-Analyse
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02]">
              Ihre Website,{" "}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                ehrlich analysiert
              </span>
              .
            </h1>
            <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Ein Klick, alle relevanten Signale sichtbar: Meta, Struktur, Inhalte, Bilder,
              Structured Data, mobile Basis, lokale Signale. Keine Registrierung. Ihre Ergebnisse
              werden nicht gespeichert.
            </p>
          </div>

          <WebsiteCheckForm />

          <div className="mt-16 border-t border-stone-200/70 pt-8 text-sm text-stone-500 leading-relaxed">
            <p>
              <span className="font-medium text-stone-700">Zur Analyse:</span> Wir laden die
              eingegebene Seite einmal serverseitig, prüfen sie im Detail und zeigen die Ergebnisse
              direkt an. Weder Ihre URL noch das Ergebnis wird gespeichert. Wenn Sie einen
              PDF-Report per E-Mail möchten, geben Sie freiwillig Ihre E-Mail-Adresse an — nur diese
              wird an unser Postfach übermittelt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
