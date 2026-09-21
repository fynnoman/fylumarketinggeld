import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was ist Generative Engine Optimization (GEO)?',
    a: 'GEO ist die Optimierung einer Website für generative Suchsysteme wie ChatGPT Search, Perplexity, Google AI Overviews und Microsoft Copilot. Statt eine Position in einer Ergebnisliste zu erobern, geht es um die Wahrscheinlichkeit, dass ein AI-System Ihr Unternehmen in einer generierten Antwort als Quelle nennt oder als Empfehlung ausgibt.',
  },
  {
    q: 'Wie unterscheidet sich GEO von SEO?',
    a: 'SEO optimiert für Ranglisten in klassischen Suchergebnissen. GEO optimiert für Zitierbarkeit und Empfehlung in generierten Antworten. Beide Disziplinen ergänzen sich: eine solide SEO-Foundation bleibt die Grundlage, GEO baut spezifische Signale darauf auf. Bei Fylu Marketing sind SEO und GEO ein zusammenhängendes System, keine getrennten Silos.',
  },
  {
    q: 'Für welche AI-Systeme wird optimiert?',
    a: 'Wir optimieren für die vier großen Systeme: Google AI Overviews (Search Generative Experience), ChatGPT Search, Perplexity und Microsoft Copilot. Zusätzlich stellen wir sicher, dass alle relevanten AI-Crawler wie GPTBot, Claude-Web, OAI-SearchBot, PerplexityBot und andere Zugriff auf die Website haben.',
  },
  {
    q: 'Wie misst man GEO-Sichtbarkeit?',
    a: 'GEO ist schwerer zu messen als SEO, weil generative Antworten personalisiert und dynamisch sind. Wir arbeiten mit definierten Prompt-Sets, prüfen regelmäßig, ob und wie Ihr Unternehmen in Antworten auftaucht, und dokumentieren Erwähnungen, Quellenverweise und Kontext.',
  },
  {
    q: 'Ist GEO nur für große Unternehmen interessant?',
    a: 'Nein. Für lokale und mittelständische Unternehmen ist GEO häufig wirkungsvoller als für große Marken, weil die Wettbewerbsdichte niedriger ist und AI-Systeme oft aktiv nach konkreten regionalen und branchenspezifischen Antworten suchen. Wer heute die Grundlagen legt, ist morgen die Standardantwort.',
  },
  {
    q: 'Was kostet GEO bei einer Agentur?',
    a: 'Rahmen und Umfang legen wir individuell im Vorgespräch fest. GEO ist meist ein Aufsatz auf bestehende SEO- und Content-Arbeit und wird deshalb häufig in Kombination geplant. Keine monatliche Grundgebühr für den bloßen Zugang.',
  },
];

const modules = [
  {
    ordinal: 'I',
    label: 'Verständlichkeit',
    cadence: 'Grundlage',
    body: 'Klare Entitäten, präzise Definitionen und strukturierte Antworten. AI-Systeme müssen ohne Umwege verstehen können, wer Sie sind, was Sie anbieten und wofür Sie stehen.',
  },
  {
    ordinal: 'II',
    label: 'Auffindbarkeit',
    cadence: 'Technisch',
    body: 'AI-Crawler-Zugang über robots.txt, llms.txt, strukturierte Daten, Speakable-Markup und passagenorientierte Inhalte. Damit Ihre Antworten als Antworten geliefert werden können.',
  },
  {
    ordinal: 'III',
    label: 'Zitierfähigkeit',
    cadence: 'Signalstärke',
    body: 'Autorenschaft, Aktualität, konsistente Angaben über alle Kanäle, glaubwürdige Verweise und Referenzen. Damit AI-Systeme einer Antwort genug Vertrauen entgegenbringen, um sie zu übernehmen.',
  },
];

const principles = [
  {
    ordinal: '01',
    title: 'Antwort zuerst',
    body: 'Jede zentrale Seite beantwortet die Primärfrage in den ersten Absätzen in wenigen klaren Sätzen. AI-Systeme extrahieren diese Passagen häufig direkt.',
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
    body: 'Beim Nennen von Personen, Firmen oder Konzepten wird auf die kanonische Referenz verlinkt. AI-Systeme lösen Entitäten so eindeutig auf.',
  },
];

export default function GeoPage() {
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
              { '@type': 'ListItem', position: 2, name: 'GEO Agentur', item: 'https://www.fylumarketing.de/geo' },
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
            '@id': 'https://www.fylumarketing.de/geo#service',
            name: 'Generative Engine Optimization',
            description:
              'Optimierung für generative Suchsysteme wie ChatGPT Search, Perplexity, Google AI Overviews und Copilot. Verständlichkeit, Auffindbarkeit und Zitierfähigkeit.',
            serviceType: 'Generative Engine Optimization',
            url: 'https://www.fylumarketing.de/geo',
            provider: { '@id': 'https://www.fylumarketing.de/#organization' },
            areaServed: [
              { '@type': 'Country', name: 'Deutschland' },
              { '@type': 'Country', name: 'Österreich' },
              { '@type': 'Country', name: 'Schweiz' },
            ],
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              url: 'https://www.fylumarketing.de/buchen',
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
            '@id': 'https://www.fylumarketing.de/geo#webpage',
            url: 'https://www.fylumarketing.de/geo',
            name: 'GEO Agentur · Fylu Marketing',
            description:
              'Generative Engine Optimization: Sichtbarkeit in ChatGPT, Perplexity, Google AI Overviews und Copilot.',
            inLanguage: 'de-DE',
            isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
            mainEntity: { '@id': 'https://www.fylumarketing.de/geo#service' },
            about: [
              { '@type': 'Thing', name: 'Generative Engine Optimization' },
              { '@type': 'Thing', name: 'AI Search Optimization' },
              { '@type': 'Thing', name: 'Google AI Overviews' },
              { '@type': 'Thing', name: 'ChatGPT Search' },
              { '@type': 'Thing', name: 'Perplexity' },
            ],
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
            <Link href="/seo-saarland" className="hover:text-cyan-700 transition-colors">Sichtbarkeit</Link>
            <span className="mx-2 text-stone-400">·</span>
            <span className="text-stone-900 font-medium">GEO</span>
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
              <span>GEO · AI Search</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              Generative Engine Optimization.{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Sichtbar in AI-Antworten.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p data-speakable className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-2xl">
              Sichtbarkeit in ChatGPT Search, Perplexity, Google AI Overviews
              und Copilot. Fylu Marketing arbeitet GEO als eigenständige
              Disziplin, ergänzend zu SEO, mit einem festen Ansprechpartner
              und einem klaren Prozess von Foundation bis Zitierfähigkeit.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/buchen"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
              >
                <span>Projekt anfragen</span>
                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="#geo-module"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Methodik ansehen</span>
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
              Suche verändert sich.{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Antworten kommen fertig.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <div className="prose prose-lg prose-stone max-w-none mt-10">
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                Der klassische Blick auf zehn blaue Links verändert sich. Immer
                mehr Nutzer stellen ihre Frage direkt an ChatGPT, Perplexity
                oder Google AI Overviews und bekommen eine fertig formulierte
                Antwort. Wer dort nicht vorkommt, ist für diese Suche nicht
                existent, unabhängig davon, wie gut die eigene Website
                klassisch rankt.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                Generative Engine Optimization arbeitet an drei Ebenen:
                Verständlichkeit für die AI-Systeme, technische
                Auffindbarkeit der Inhalte und Signale, die eine Zitierung
                wahrscheinlich machen. Fylu Marketing führt diese Ebenen als
                zusammenhängendes System.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Prinzipien */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)] border-t border-stone-200/60">
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
                  AI-Systeme folgen.
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
      <section id="geo-module" className="py-24 md:py-32 px-5 md:px-8 bg-white border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§03</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Die Ebenen
                </span>
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Drei Ebenen an{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  GEO-Arbeit.
                </span>
              </h2>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Einzeln buchbar oder als vollständige Aufbauarbeit für AI-Sichtbarkeit.
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
                        Ebene {m.ordinal}
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

      {/* Messung */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)] border-t border-stone-200/60">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§04</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Messung
              </span>
            </div>
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Wie wir GEO-Erfolg{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                tatsächlich messen.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <div className="prose prose-lg prose-stone max-w-none mt-10">
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                GEO-Sichtbarkeit lässt sich nicht wie klassische SEO-Rankings in einer
                einzelnen Rangposition ablesen. AI-Antworten sind personalisiert,
                dynamisch und variieren je nach Anfrage. Wir arbeiten deshalb mit einem
                definierten Promptset aus 20 bis 50 Fragen, die Ihre Zielkunden in
                AI-Tools tatsächlich stellen.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                Für jede Anfrage prüfen wir monatlich pro System (Google AI Overviews,
                ChatGPT Search, Perplexity, Copilot), ob und wie Ihre Marke genannt wird,
                ob Ihre Domain als Quelle zitiert wird, in welchem Kontext, und wie sich
                das Wettbewerbsumfeld entwickelt.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                Das Reporting kommt in klarer Sprache: Mention Rate, Citation Rate,
                Share of Voice gegen definierte Wettbewerber. Keine Vanity-Metriken,
                keine unbelegten Ranking-Versprechen.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white border-t border-stone-200/60">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§05</span>
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
              Bereit für Sichtbarkeit,{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                die auch AI versteht?
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
                <span>Projekt anfragen</span>
                <span className="text-cyan-400">→</span>
              </Link>
              <Link
                href="/geo-saarland"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>GEO im Saarland</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
