import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was ist GEO — Generative Engine Optimization?',
    a: 'GEO ist die gezielte Aufbereitung einer Website, damit sie von KI-Suchsystemen wie ChatGPT Search, Perplexity, Google AI Overviews und Microsoft Copilot als Quelle erkannt, zitiert und empfohlen wird. Anders als klassisches SEO zählt hier weniger die Ranking-Position und mehr die Zitierbarkeit einzelner Absätze.',
  },
  {
    q: 'Ersetzt GEO klassisches SEO?',
    a: 'Nein. GEO baut auf einer sauberen SEO-Foundation auf. Ohne indexierbare Seiten, saubere Struktur und lesbare Inhalte findet auch keine KI etwas. GEO ist eine Erweiterung — kein Ersatz.',
  },
  {
    q: 'Für welche KI-Systeme optimiert Fylu?',
    a: 'Google AI Overviews, Google AI Mode, ChatGPT Search, Perplexity, Microsoft Copilot und Claude. Für jedes System gelten leicht unterschiedliche Mechaniken. Google zieht primär eigene Indexdaten. ChatGPT und Copilot arbeiten stark mit Bing-Daten. Perplexity verwendet eigene Crawler und Third-Party-Signale.',
  },
  {
    q: 'Woran erkennt man Zitierbarkeit?',
    a: 'An standalone geschriebenen Absätzen, konkreten Zahlen mit Quelle, definierten Entitäten, aktuellen Datumsangaben und einer Struktur, die einzelne Passagen ohne Kontext verständlich macht. Wir schreiben nicht für Modelle — wir schreiben so, dass Modelle wie Menschen den Sinn ohne zusätzliche Recherche greifen können.',
  },
  {
    q: 'Wie messen wir GEO-Erfolg?',
    a: 'Über ein festes Promptset aus 20 bis 50 Fragen, die Ihre Zielkunden in KI-Tools tatsächlich stellen. Wir prüfen monatlich pro System, wie oft Ihre Marke genannt wird, wie oft Ihre Domain als Quelle zitiert wird und wie das Wettbewerbsumfeld aussieht.',
  },
  {
    q: 'Braucht meine Website eine llms.txt?',
    a: 'Sie hilft — vor allem für Modelle, die dieses Format lesen. Für Googles eigene KI-Features ist llms.txt aktuell nicht relevant. Für Perplexity und einige andere Systeme ist eine gut gepflegte llms.txt ein günstiger Vorteil.',
  },
  {
    q: 'Wie lange dauert es, bis GEO wirkt?',
    a: 'Erste Zitate sind bei gut aufgestellten Seiten in wenigen Wochen sichtbar. Aufbau von Share of Voice gegen etablierte Wettbewerber braucht drei bis sechs Monate — analog zu klassischer SEO, teils schneller wenn die Foundation stimmt.',
  },
];

const modules = [
  {
    ordinal: 'I',
    label: 'Foundation',
    cadence: 'einmalig',
    body: 'Zitierbarkeitsanalyse pro Money-Page, Canonical-Answer-Blöcke, Entity-Verlinkung, llms.txt, Server-Side-Rendering-Check, Frische-Signale. Das Fundament, damit KI-Systeme Ihre Inhalte überhaupt extrahieren können.',
  },
  {
    ordinal: 'II',
    label: 'Content-Aufbau',
    cadence: 'laufend',
    body: 'Listicles, Vergleichstabellen, FAQ in exakter Prompt-Sprache, Methodik-Sektionen. Formate, die KI-Systeme nachweislich bevorzugt zitieren.',
  },
  {
    ordinal: 'III',
    label: 'Messung',
    cadence: 'monatlich',
    body: 'Promptset-Tracking über ChatGPT Search, Perplexity, Google AI Overviews und Copilot. Mention Rate, Share of Voice, Citation Rate, Wettbewerber-Vergleich.',
  },
];

const principles = [
  {
    ordinal: '01',
    title: 'Antwort zuerst',
    body: 'Jede Money-Page beantwortet die Primärfrage in den ersten 200 Wörtern in zwei bis vier Sätzen. KI-Systeme extrahieren diese Passagen häufig wörtlich.',
  },
  {
    ordinal: '02',
    title: 'Standalone-Absätze',
    body: 'Keine Verweise wie „siehe oben". Jeder Absatz muss isoliert lesbar sein, sonst wird er nicht zitiert.',
  },
  {
    ordinal: '03',
    title: 'Belegte Zahlen',
    body: 'Statistiken mit Quelle statt Marketingsprache. Ein belegter Wert schlägt zehn Adjektive.',
  },
  {
    ordinal: '04',
    title: 'Entitäten explizit',
    body: 'Beim Nennen von Personen, Firmen oder Konzepten wird auf die kanonische Referenz verlinkt. KI-Systeme lösen Entitäten so eindeutig auf.',
  },
];

export default function GeoSaarlandPage() {
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
              { '@type': 'ListItem', position: 2, name: 'GEO Saarland', item: 'https://www.fylumarketing.de/geo-saarland' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://www.fylumarketing.de/geo-saarland#service',
            name: 'GEO Saarland — Generative Engine Optimization',
            description:
              'Sichtbarkeit in KI-Suchsystemen: ChatGPT Search, Perplexity, Google AI Overviews, Copilot. Foundation, Content-Aufbau und Messung aus Saarlouis.',
            serviceType: 'Generative Engine Optimization',
            url: 'https://www.fylumarketing.de/geo-saarland',
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
                  'Foundation, Content-Aufbau und Messung werden je Ebene transparent kalkuliert. Keine monatliche Grundgebühr.',
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
            '@id': 'https://www.fylumarketing.de/geo-saarland#webpage',
            url: 'https://www.fylumarketing.de/geo-saarland',
            name: 'GEO Saarland · Fylu Marketing',
            description:
              'Generative Engine Optimization aus Saarlouis. Foundation, Content-Aufbau und Messung für ChatGPT, Perplexity, Google AI Overviews, Copilot.',
            inLanguage: 'de-DE',
            isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
            mainEntity: { '@id': 'https://www.fylumarketing.de/geo-saarland#service' },
            about: { '@type': 'Thing', name: 'Generative Engine Optimization (GEO)' },
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
            '@type': 'FAQPage',
            inLanguage: 'de-DE',
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
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
            <Link href="/seo-saarland" className="hover:text-cyan-700 transition-colors">SEO</Link>
            <span className="mx-2 text-stone-400">·</span>
            <span className="text-stone-900 font-medium">GEO Saarland</span>
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
              <span>Erweiterung · KI-Sichtbarkeit</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              GEO Saarland. Sichtbar in{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                ChatGPT, Perplexity und AI Overviews.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p data-speakable className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-2xl">
              Generative Engine Optimization ist die gezielte Aufbereitung einer Website,
              damit sie von KI-Suchsystemen als Quelle erkannt und zitiert wird. Wir
              richten Content, Struktur und Signale so aus, dass Ihre Marke bei
              relevanten Prompts genannt wird.
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
                href="#geo-module"
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
              Klienten fragen längst KI —{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                bevor sie Google öffnen.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <div className="prose prose-lg prose-stone max-w-none mt-10">
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                „Wer macht gutes Webdesign im Saarland?“ — solche Prompts stellen
                Entscheider heute in ChatGPT, Perplexity oder direkt in Googles
                AI-Antworten. Was das Modell dort antwortet, entscheidet, ob Sie in
                die engere Auswahl kommen. Klassisches SEO reicht nicht mehr aus,
                weil KI-Antworten oft ohne einen einzigen klassischen Suchergebnis-Klick
                stattfinden.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                GEO bei Fylu ist kein zusätzlicher Trick, sondern eine saubere
                Erweiterung der SEO-Foundation. Wir gestalten Inhalte so, dass sie
                für KI-Systeme extrahierbar sind. Wir setzen strukturierte Daten,
                die tatsächlich gelesen werden. Und wir messen, was in den
                relevanten Prompts passiert.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Prinzipien */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§02</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Prinzipien
                </span>
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Vier Regeln, denen{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  KI-Systeme folgen.
                </span>
              </h2>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <FadeInSection key={p.ordinal} delay={0.1 + i * 0.06}>
                <div className="bg-white rounded-3xl p-8 border border-stone-200/70 premium-lift h-full">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="font-display italic text-cyan-700 text-lg leading-none">{p.ordinal}</span>
                    <h3 className="text-[1.1rem] font-semibold text-[var(--ink)]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-stone-700 text-[0.95rem] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Module */}
      <section id="geo-module" className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§03</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Die Module
                </span>
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Drei Ebenen an{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  GEO-Arbeit.
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
                <div className="bg-[var(--background-warm)] rounded-3xl p-8 border border-stone-200/70 premium-lift h-full flex flex-col">
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
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§04</span>
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
                <div className="bg-white rounded-2xl border border-stone-200/70 p-6 md:p-7">
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
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <div className="hairline-rule w-24 mx-auto mb-8" />
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Bereit, in KI-Antworten{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                genannt zu werden?
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
                href="/seo-saarland"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Zur SEO-Übersicht</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
