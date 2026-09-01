import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cases } from "@/lib/cases";

const SITE = "https://www.fylumarketing.de";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Ausgewählte Fylu-Referenzen: konkrete Ausgangslagen, umgesetzte Lösungen und messbare Ergebnisse. Nur reale Projekte.",
  alternates: { canonical: `${SITE}/referenzen` },
};

export default function ReferencesIndex() {
  const hasCases = cases.length > 0;
  const url = `${SITE}/referenzen`;

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Referenzen", item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${url}#collection`,
            url,
            name: "Fylu Referenzen",
            description:
              "Ausgewählte Fylu-Projekte: Ausgangslage, Weg, messbares Ergebnis. Nur reale Kunden, nur reale Zahlen. Konkrete Referenzen werden im Erstgespräch besprochen.",
            inLanguage: "de-DE",
            isPartOf: { "@id": `${SITE}/#website` },
            about: { "@type": "Thing", name: "Kundenprojekte und Fallstudien des Fylu Studios" },
            ...(hasCases && {
              mainEntity: {
                "@type": "ItemList",
                numberOfItems: cases.length,
                itemListOrder: "https://schema.org/ItemListUnordered",
                itemListElement: cases.map((c, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  url: `${SITE}/referenzen/${c.slug}`,
                  name: c.h1,
                  description: c.hero.lead,
                })),
              },
            }),
          }),
        }}
      />
      <main className="min-h-screen bg-[var(--background-warm)]">
        <section className="relative py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14 text-center">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                  §
                </span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Referenzen
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02]">
                Ausgangslage, Weg,{" "}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  messbares Ergebnis
                </span>
                .
              </h1>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Ausgewählte Fylu-Projekte, ehrlich dokumentiert. Nur reale Zahlen, nur echte
                Kunden — anonymisiert nur, wo Vertraulichkeit es verlangt.
              </p>
            </div>

            {hasCases ? (
              <div className="grid gap-6 md:grid-cols-2">
                {cases.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/referenzen/${c.slug}`}
                    className="group relative glass rounded-3xl p-6 md:p-8 overflow-hidden hover:border-cyan-200 transition-colors"
                  >
                    <span className="glass-edge" aria-hidden />
                    <div className="relative">
                      <div className="text-[10px] uppercase tracking-[0.32em] text-stone-500 font-semibold mb-3">
                        {c.eyebrow}
                      </div>
                      <h2 className="text-xl md:text-2xl font-semibold text-[var(--ink)] tracking-[-0.02em] leading-tight mb-3">
                        {c.h1}
                      </h2>
                      <p className="text-sm text-stone-600 leading-relaxed mb-4">
                        {c.hero.lead}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--cyan-deep)]">
                        Zum Case
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-12 border border-stone-200/70 text-center">
                <div
                  aria-hidden
                  className="glass-bloom-cyan absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-30 pointer-events-none"
                />
                <div className="relative">
                  <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-semibold mb-3">
                    Redaktionell in Vorbereitung
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em] mb-4 max-w-2xl mx-auto">
                    Ausführliche Case Studies folgen — schrittweise, im Einvernehmen mit den
                    jeweiligen Klienten.
                  </h2>
                  <p className="text-stone-600 leading-relaxed max-w-xl mx-auto mb-8">
                    Viele Projekte laufen unter Vertraulichkeit oder werden noch aktiv betreut.
                    Sobald Zahlen gefestigt und Freigaben da sind, entstehen hier detaillierte
                    Cases mit Ausgangslage, Umsetzung und messbaren Ergebnissen. Bis dahin
                    sprechen wir konkrete Referenzen direkt im Erstgespräch durch.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/buchen"
                      className="inline-flex items-center justify-center gap-2 btn-glass-ink px-6 py-3.5 rounded-full text-[13px] font-semibold relative overflow-hidden"
                    >
                      <span className="btn-glass-shine" aria-hidden />
                      <span className="relative">Referenzen im Vorgespräch</span>
                      <span className="relative text-cyan-300">→</span>
                    </Link>
                    <Link
                      href="/tools/website-check"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[13px] font-semibold text-[var(--cyan-deep)] border border-stone-200 bg-white hover:border-cyan-300 transition-colors"
                    >
                      Website-Analyse starten
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
