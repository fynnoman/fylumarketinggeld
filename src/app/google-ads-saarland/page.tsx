import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was kostet Google Ads bei Fylu?',
    a: 'Setup (Konto- und Kampagnenaufbau, Keyword-Recherche, Conversion-Tracking) und Betreuung (wöchentliche Optimierung, A/B-Tests, klares Monatsreporting) sind einzeln buchbar. Werbebudget zusätzlich, unabhängig gesteuert. Konditionen individuell im Vorgespräch.',
  },
  {
    q: 'Wie viel Werbebudget brauche ich?',
    a: 'Das hängt von Region, Wettbewerb und Zielkanälen ab. Den konkreten Rahmen besprechen wir im Vorgespräch, damit von Anfang an klare Erwartungen stehen.',
  },
  {
    q: 'Wann sehe ich Ergebnisse?',
    a: 'Anzeigen laufen binnen 24 Stunden. Die erste Feinoptimierung dauert etwa zwei bis vier Wochen — in dieser Phase sammeln wir Daten und schärfen die Kampagne. Nach einem Monat stehen belastbare Zahlen und ein sortiertes Set-up.',
  },
  {
    q: 'Ist Google Ads Teil des Website-Pakets?',
    a: 'Nein. Google Ads wird bewusst als Erweiterung angeboten — jedes Haus entscheidet, ob und wann bezahlte Reichweite Sinn ergibt. Häufig ergibt eine Kombination aus Website, Ads und SEO die stimmigste Wirkung.',
  },
  {
    q: 'Was ist der Unterschied zu SEO?',
    a: 'SEO ist Aufbauarbeit über Monate mit dauerhafter organischer Wirkung. Google Ads ist sofort sichtbare Reichweite, bezahlt und flexibel steuerbar. Beide Disziplinen ergänzen sich — Ads für den sofortigen Fluss, SEO für die stille Sichtbarkeit, die bleibt.',
  },
  {
    q: 'Was passiert, wenn ich Ads pausiere?',
    a: 'Sobald Kampagnen pausiert werden, verschwinden die Anzeigen. Deshalb empfehlen wir häufig parallel eine SEO-Erweiterung — ein Sicherheitsnetz, falls das Ads-Budget später zurückgefahren werden soll.',
  },
];

const modules = [
  {
    ordinal: 'I',
    label: 'Setup',
    cadence: 'einmalig',
    body: 'Konto- und Kampagnenaufbau, Keyword-Recherche, Struktur, Conversion-Tracking. Bereit zum Start binnen weniger Tage.',
  },
  {
    ordinal: 'II',
    label: 'Betreuung',
    cadence: 'monatlich',
    body: 'Wöchentliche Optimierung, A/B-Tests, klares Monatsreporting. Werbebudget zusätzlich, unabhängig gesteuert.',
  },
];

export default function GoogleAdsSaarlandPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fylumarketing.de' },
              { '@type': 'ListItem', position: 2, name: 'Google Ads Saarland', item: 'https://www.fylumarketing.de/google-ads-saarland' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Fylu Studio · Google Ads Saarland',
            description: 'Google Ads als Erweiterung Ihrer Fylu-Website. Setup und laufende Betreuung — geführt aus Saarlouis.',
            url: 'https://www.fylumarketing.de/google-ads-saarland',
            telephone: '+4915168488999',
            email: 'kontakt@fylumarketing.de',
            address: { '@type': 'PostalAddress', addressLocality: 'Saarlouis', addressRegion: 'Saarland', addressCountry: 'DE' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-[var(--background-warm)] border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-6 py-3 pt-20">
          <nav className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
            <Link href="/" className="hover:text-cyan-700 transition-colors">Home</Link>
            <span className="mx-2 text-stone-400">·</span>
            <Link href="/webdesign-saarland" className="hover:text-cyan-700 transition-colors">Studio</Link>
            <span className="mx-2 text-stone-400">·</span>
            <span className="text-stone-900 font-medium">Google Ads Saarland</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 md:py-36 px-5 md:px-8 bg-[var(--background-warm)] overflow-hidden isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)',
              backgroundSize: '28px 28px',
              maskImage:
                'radial-gradient(ellipse 80% 60% at 60% 40%, black 30%, transparent 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 60% at 60% 40%, black 30%, transparent 80%)',
            }}
          />
          <div className="absolute top-0 right-0 w-[55vw] h-[45vw] bloom-cyan" />
          <div className="noise-overlay opacity-30" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <div className="editorial-eyebrow mb-6">
              <span>Erweiterung · Bezahlte Reichweite</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              Google Ads Saarland. Als{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Erweiterung Ihrer Fylu-Website.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-2xl">
              Sofortige Reichweite für Menschen, die bereits nach Ihrer Leistung
              suchen. Kuratiert aus Saarlouis — als bezahlte Ergänzung zur
              Fylu-Website, klar geführt und messbar gerahmt.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/buchen"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
              >
                <span>Vorgespräch buchen</span>
                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="#ads-module"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Module ansehen</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Positionierung */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§I</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Positionierung
              </span>
            </div>
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Reichweite für{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Menschen, die suchen.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <div className="prose prose-lg prose-stone max-w-none mt-10">
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                Wer bei Google „Kanzlei Saarbrücken" oder „Handwerker Saarlouis"
                eingibt, hat bereits eine Absicht. Google Ads führt Ihre Präsenz
                genau dort hin, wo diese Absicht landet — oberhalb der organischen
                Ergebnisse, sichtbar ab Tag eins.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                Anders als bei Social Ads unterbricht Google Ads keine Aufmerksamkeit,
                sondern trifft eine bestehende. Deshalb ist der Kanal für lokale
                Häuser häufig der effizienteste — und deshalb bauen wir ihn kuratiert,
                nicht auf Autopilot.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Module */}
      <section id="ads-module" className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§II</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Die Module
                </span>
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Zwei Ebenen an{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Ads-Arbeit.
                </span>
              </h2>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Einzeln buchbar oder als Setup-plus-Betreuung. Werbebudget kommt
                gesondert oben drauf.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-5">
            {modules.map((m, i) => (
              <FadeInSection key={m.ordinal} delay={0.1 + i * 0.08}>
                <div className="bg-white rounded-3xl p-8 border border-stone-200/70 premium-lift h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 mb-2">
                        Modul {m.ordinal}
                      </div>
                      <h3 className="font-display italic text-3xl md:text-[2.1rem] text-[var(--ink)] leading-none">
                        {m.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-stone-700 text-[0.95rem] leading-relaxed mb-8">
                    {m.body}
                  </p>
                  <div className="mt-auto pt-6 border-t border-dashed border-stone-200">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                      {m.cadence}
                    </span>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <p className="mt-10 text-center text-[11px] uppercase tracking-[0.22em] text-stone-500">
            Werbebudget zusätzlich · Konditionen individuell im Vorgespräch
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§III</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Fragen
              </span>
            </div>
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em] mb-12">
              Ehrlich{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                beantwortet.
              </span>
            </h2>
          </FadeInSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="bg-[var(--background-warm)] rounded-2xl border border-stone-200/70 p-6 md:p-7">
                  <h3 className="text-[15px] md:text-base font-semibold text-[var(--ink)] mb-3 flex items-baseline gap-3">
                    <span className="font-display italic text-cyan-700 text-sm leading-none">0{i + 1}</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-stone-700 leading-relaxed text-[0.95rem] pl-6">
                    {faq.a}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <div className="hairline-rule w-24 mx-auto mb-8" />
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Bereit für{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                bezahlte Reichweite?
              </span>
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed">
              Fünfzehn Minuten. Wir hören zu, bevor wir antworten.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/buchen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)]"
              >
                <span>Vorgespräch buchen</span>
                <span className="text-cyan-400">→</span>
              </Link>
              <Link
                href="/webdesign-saarland"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Zurück zu den Website-Paketen</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
