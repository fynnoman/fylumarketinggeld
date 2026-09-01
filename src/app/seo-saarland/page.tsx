import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was kostet SEO im Saarland bei Fylu?',
    a: 'Google Business Optimierung, SEO Foundation und SEO Betreuung sind einzeln buchbar. Konditionen kalibrieren wir individuell im Vorgespräch — Wettbewerbsdichte und Zielgruppe fließen in den Rahmen ein.',
  },
  {
    q: 'Wie lange dauert es, bis Ergebnisse sichtbar sind?',
    a: 'Erste Bewegungen in den Rankings sehen wir in der Regel nach vier bis acht Wochen. Signifikante Verschiebungen — etwa auf die erste Google-Seite — brauchen drei bis sechs Monate. SEO ist Aufbauarbeit, keine Kampagne.',
  },
  {
    q: 'Ist SEO Teil des Website-Pakets?',
    a: 'Jede Fylu-Website enthält eine technische SEO-Foundation ab Werk — sauberer Code, Schema-Struktur, Ladezeit, mobile-first. Die inhaltliche SEO-Arbeit — Keyword-Strategie, Content, Google Business, laufende Iteration — buchen Sie als Erweiterung dazu.',
  },
  {
    q: 'Was ist Local SEO?',
    a: 'Local SEO schärft Ihre Präsenz für lokale Suchbegriffe wie „Kanzlei Saarbrücken" oder „Handwerker Saarlouis". Kernstück ist das Google-Unternehmensprofil, ergänzt durch strukturierte Daten, konsistente NAP-Angaben und lokale Signale in Ihrer Website.',
  },
  {
    q: 'Was ist der Unterschied zwischen SEO und Google Ads?',
    a: 'SEO ist Aufbauarbeit über Monate. Google Ads ist sofort sichtbare Reichweite. Wir empfehlen häufig eine Kombination — Ads für sofortigen Fluss, SEO für die stille Sichtbarkeit, die bleibt.',
  },
  {
    q: 'Wie messen wir Erfolg?',
    a: 'Google Search Console und Analytics sind ab Tag eins verbunden. Sie sehen, für welche Begriffe Sie ranken, wie sich Ihre Position verändert und wieviele Anfragen entstehen. Reporting kommt monatlich, in ruhiger Sprache — nicht als Datenwust.',
  },
];

const modules = [
  {
    ordinal: 'I',
    label: 'Foundation',
    cadence: 'einmalig',
    body: 'Keyword-Analyse, technisches Audit, OnPage-Optimierung, Schema-Struktur. Das Fundament für organische Reichweite.',
  },
  {
    ordinal: 'II',
    label: 'Google Business',
    cadence: 'einmalig',
    body: 'Vollständige Einrichtung des Google-Unternehmensprofils. Kategorien, Keywords, Bildsprache — sauber und komplett.',
  },
  {
    ordinal: 'III',
    label: 'Betreuung',
    cadence: 'monatlich',
    body: 'Fortlaufende Optimierung, Content-Feinschliff, Reporting — damit Sichtbarkeit nicht wieder abbricht.',
  },
];

export default function SeoSaarlandPage() {
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
              { '@type': 'ListItem', position: 2, name: 'SEO Saarland', item: 'https://www.fylumarketing.de/seo-saarland' },
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
            name: 'Fylu Studio · SEO Saarland',
            description: 'SEO als Erweiterung Ihrer Fylu-Website. Foundation, Google Business und Betreuung — geführt aus Saarlouis.',
            url: 'https://www.fylumarketing.de/seo-saarland',
            telephone: '+4915168488999',
            email: 'kontakt@fylumarketing.de',
            address: { '@type': 'PostalAddress', addressLocality: 'Saarlouis', addressRegion: 'Saarland', addressCountry: 'DE' },
            parentOrganization: { '@id': 'https://www.fylumarketing.de/#organization' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://www.fylumarketing.de/seo-saarland#service',
            name: 'SEO Saarland',
            description:
              'SEO-Foundation, laufende Betreuung, aktiver Content-Aufbau und Local SEO aus Saarlouis. Auch für AI-Suchsysteme (Google AI Overviews, ChatGPT Search, Perplexity) optimiert.',
            serviceType: 'Suchmaschinenoptimierung',
            url: 'https://www.fylumarketing.de/seo-saarland',
            provider: { '@id': 'https://www.fylumarketing.de/#organization' },
            areaServed: [
              { '@type': 'State', name: 'Saarland' },
              { '@type': 'Country', name: 'Deutschland' },
            ],
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              url: 'https://www.fylumarketing.de/buchen',
              priceSpecification: {
                '@type': 'PriceSpecification',
                priceCurrency: 'EUR',
                description:
                  'Foundation, laufende Betreuung und Content-Aufbau werden je Ebene transparent kalkuliert. Keine monatliche Grundgebühr.',
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.fylumarketing.de/seo-saarland#webpage',
            url: 'https://www.fylumarketing.de/seo-saarland',
            name: 'SEO Saarland · Fylu Studio',
            description:
              'SEO aus Saarlouis als Erweiterung Ihrer Website. Foundation, Betreuung und Content-Aufbau, auch für AI-Suchsysteme.',
            inLanguage: 'de-DE',
            isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
            mainEntity: { '@id': 'https://www.fylumarketing.de/seo-saarland#service' },
            about: { '@type': 'Thing', name: 'Suchmaschinenoptimierung (SEO)' },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '[data-speakable]'],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage', inLanguage: 'de-DE', speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
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
            <span className="text-stone-900 font-medium">SEO Saarland</span>
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
                'radial-gradient(ellipse 80% 60% at 40% 40%, black 30%, transparent 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 60% at 40% 40%, black 30%, transparent 80%)',
            }}
          />
          <div className="absolute bottom-0 left-0 w-[55vw] h-[45vw] bloom-cyan" />
          <div className="noise-overlay opacity-30" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <div className="editorial-eyebrow mb-6">
              <span>Erweiterung · Sichtbarkeit</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              SEO Saarland. Als{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Erweiterung Ihrer Fylu-Website.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p data-speakable className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-2xl">
              Sichtbarkeit für Suchbegriffe, die Ihre Klienten tatsächlich
              eingeben. Kuratiert aus Saarlouis — als Erweiterung des
              Fylu-Auftritts oder als eigenständiges Modul für ein Haus, das seine
              Präsenz stufenweise schärfen möchte.
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
                href="#seo-module"
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
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§01</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Positionierung
              </span>
            </div>
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Sichtbarkeit ist keine{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Kampagne. Sie ist Aufbauarbeit.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <div className="prose prose-lg prose-stone max-w-none mt-10">
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                Klienten suchen bei Google — nach „Kanzlei Saarbrücken", „Meisterbetrieb
                Saarlouis", „Restaurant Merzig". Wer auf Seite eins steht, wird gerufen.
                Wer nicht, existiert für die Suche praktisch nicht.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                SEO bei Fylu ist keine schnelle Kampagne, sondern Aufbauarbeit im
                Hintergrund. Technische Foundation, sauberes Google-Profil, geführte
                Inhalte. Wir arbeiten nicht in Batches, sondern kuratiert — pro Haus,
                pro Kontext.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Module */}
      <section id="seo-module" className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§02</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Die Module
                </span>
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Drei Ebenen an{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  SEO-Arbeit.
                </span>
              </h2>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Einzeln buchbar oder als abgestimmte Erweiterung Ihres Fylu-Auftritts.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-5">
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
            Konditionen individuell im Vorgespräch
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§03</span>
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
              Bereit für eine{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                sichtbare Präsenz?
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
