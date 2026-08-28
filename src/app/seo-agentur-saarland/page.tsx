import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/seo-agentur-saarland`;

export default function SeoAgenturSaarlandPage() {
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
              { "@type": "ListItem", position: 2, name: "SEO-Agentur Saarland", item: URL },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SEO-Agentur Saarland",
            description:
              "SEO-Foundation, Content-Aufbau, Local SEO und laufende Betreuung — aus Saarlouis für etablierte Unternehmen im Saarland und deutschlandweit.",
            provider: { "@id": `${SITE}/#organization` },
            areaServed: [
              { "@type": "State", name: "Saarland" },
              { "@type": "Country", name: "Deutschland" },
            ],
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              url: `${SITE}/buchen`,
            },
          }),
        }}
      />

      <main className="min-h-screen bg-[var(--background-warm)]">
        {/* Breadcrumb */}
        <div className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-6 py-3 pt-20">
            <nav className="text-sm text-stone-500">
              <Link href="/" className="hover:text-[var(--cyan-deep)] transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-stone-900 font-medium">SEO-Agentur Saarland</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-xl leading-none">
                §
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                SEO-Agentur Saarland
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02] mb-8">
              SEO aus dem Saarland, ehrlich kalkuliert{" "}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                und nachvollziehbar aufgebaut
              </span>
              .
            </h1>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8">
              Wir arbeiten für etablierte Unternehmen, für die Sichtbarkeit ein klarer
              Business-Case ist — nicht Marketing-Kosmetik. Foundation, Content-Aufbau,
              Local SEO und laufende Betreuung aus Saarlouis, transparent kalkuliert.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/seo-check"
                className="inline-flex items-center justify-center gap-2 btn-glass-ink px-6 py-3.5 rounded-full text-[14px] font-semibold relative overflow-hidden"
              >
                <span className="btn-glass-shine" aria-hidden />
                <span className="relative">SEO-Check starten</span>
                <span className="relative text-cyan-300">→</span>
              </Link>
              <Link
                href="/buchen"
                className="inline-flex items-center justify-center gap-2 btn-glass px-6 py-3.5 rounded-full text-[14px] font-semibold text-stone-900 relative overflow-hidden"
              >
                <span className="btn-glass-shine" aria-hidden />
                <span className="relative">Vorgespräch buchen</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Die drei SEO-Ebenen */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <div className="mb-4 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-xl leading-none">
                  §a
                </span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Wie wir SEO strukturieren
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Drei Ebenen, klar getrennt kalkuliert
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative glass rounded-3xl p-6 overflow-hidden">
                <span className="glass-edge" aria-hidden />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-semibold mb-3">
                    §01 · Foundation
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--ink)] mb-3">
                    Einmalige technische Basis
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Technischer Audit, saubere Sitemap und Robots-Konfiguration, Structured
                    Data (Organization, LocalBusiness, FAQPage), Meta-Optimierung aller
                    Kern-URLs, Canonicals, mobile-Basis, Core Web Vitals in den grünen
                    Bereich, Google-Unternehmensprofil vollständig aufgesetzt.
                  </p>
                </div>
              </div>
              <div className="relative glass rounded-3xl p-6 overflow-hidden">
                <span className="glass-edge" aria-hidden />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-semibold mb-3">
                    §02 · Betreuung
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--ink)] mb-3">
                    Laufendes Monitoring und Anpassung
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Monatliche Search-Console-Auswertung, Position-Monitoring der Kern-Keywords,
                    kleine Content-Anpassungen, technisches Monitoring, Ranking-Report.
                    Kontinuierliche Verbesserung statt Set-and-Forget.
                  </p>
                </div>
              </div>
              <div className="relative glass rounded-3xl p-6 overflow-hidden">
                <span className="glass-edge" aria-hidden />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-semibold mb-3">
                    §03 · Content-Aufbau
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--ink)] mb-3">
                    Aktiver Angriff neuer Rankings
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Neue Landingpages, Ratgeber-Cluster, thematische Hub-and-Spoke-Strukturen
                    für Positionsgewinn in umkämpften Suchen. Wirkungslatenz drei bis sechs
                    Monate, dafür planbar und dauerhaft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Für welche Häuser wir arbeiten */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                §b
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Für welche Häuser wir SEO machen
              </h2>
            </div>
            <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
              <p>
                Wir arbeiten für etablierte Unternehmen, bei denen ein einzelner Kunde
                relevanten Wert hat: Kanzleien, Steuerberater, Arzt- und Zahnarztpraxen,
                Immobilienmakler, hochwertige Handwerksbetriebe, Photovoltaik-Anbieter,
                Gebäudereinigungsunternehmen, Industrie-Mittelstand und B2B-Dienstleister.
              </p>
              <p>
                Für Consumer-Kleinkram, Gastro oder reine Reichweiten-Themen sind wir nicht
                die richtige Adresse — dort funktionieren andere Modelle besser.
              </p>
            </div>
          </div>
        </section>

        {/* SEO-Check Prominent */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-white p-8 md:p-10 border border-stone-200/70 shadow-[0_8px_40px_rgba(12,14,16,0.04)]">
              <div
                aria-hidden
                className="glass-bloom-cyan absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-40 pointer-events-none"
              />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-semibold mb-3">
                  Vor dem Gespräch
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em] mb-4">
                  Kostenlose SEO-Potenzialanalyse Ihrer Website
                </h2>
                <p className="text-stone-700 leading-relaxed mb-6">
                  Unser SEO-Check prüft in unter 15 Sekunden Meta, Struktur, Inhalt, Structured
                  Data und lokale Signale Ihrer Domain — mit konkreter Handlungsempfehlung pro
                  Finding. Keine Registrierung, nichts wird gespeichert.
                </p>
                <Link
                  href="/tools/seo-check"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3.5 rounded-full text-[14px] font-semibold transition-colors"
                >
                  SEO-Check starten
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Konditionen und Ehrlichkeit */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                §c
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Was Sie realistisch erwarten können
              </h2>
            </div>
            <div className="space-y-6 text-stone-700 leading-relaxed text-lg">
              <p>
                Technische Fixes wirken in wenigen Wochen. Content-Investitionen brauchen
                drei bis sechs Monate bis zur Ranking-Sichtbarkeit. Backlink-Aufbau wirkt
                über sechs bis zwölf Monate. SEO ist ein Marathon, kein Sprint — und
                jeder, der Ihnen etwas anderes verspricht, verkauft Ihnen eine Illusion.
              </p>
              <p>
                Konkrete Konditionen für Foundation, Betreuung und Content-Aufbau
                besprechen wir im Vorgespräch. Kein Standard-Paket, das nur bei uns
                funktioniert — Umfang und Reihenfolge orientieren sich an Ihrem
                tatsächlichen Bedarf.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/ratgeber/seo-kosten"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--cyan-deep)] hover:underline underline-offset-4"
              >
                Ausführlicher Ratgeber: Was kostet SEO wirklich?
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--ink)] tracking-[-0.02em] mb-4">
              Bereit für ein ehrliches Vorgespräch?
            </h2>
            <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
              15 Minuten telefonisch oder per Video. Wir hören zu, prüfen ob es passt, und
              melden binnen weniger Tage mit einem konkreten Angebot zurück.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/buchen"
                className="inline-flex items-center gap-2 bg-[var(--ink)] hover:bg-stone-800 text-white px-8 py-4 rounded-full text-[15px] font-semibold transition-colors"
              >
                Vorgespräch buchen
                <span className="text-cyan-300">→</span>
              </Link>
              <Link
                href="/tools/seo-check"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-[var(--cyan-deep)] border border-stone-200 bg-white hover:border-cyan-300 transition-colors"
              >
                Erst SEO-Check anschauen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
