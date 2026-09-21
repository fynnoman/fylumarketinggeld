import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was macht eine Branding-Agentur genau?',
    a: 'Eine Branding-Agentur baut die Marke, bevor sie sichtbar wird. Positionierung, Kernbotschaft, Naming, Logo, Farben, Typografie, Bildsprache und Anwendungsrichtlinien. Fylu Marketing führt diese Arbeit als Boutique aus, mit einem festen Ansprechpartner und einem klaren Prozess von Foundation bis Launch.',
  },
  {
    q: 'Wie unterscheidet sich Branding von Webdesign?',
    a: 'Webdesign gestaltet einen Kanal, Branding gestaltet die Marke, die durch alle Kanäle geht. Die Website ist Anwendung, das Corporate Design die Grundlage. Bei Fylu Marketing gehören beide Ebenen zusammen, lassen sich aber auch getrennt buchen.',
  },
  {
    q: 'Was kostet Branding bei einer Agentur im Saarland?',
    a: 'Rahmen und Umfang legen wir individuell im Vorgespräch fest. Ein Corporate Design mit Logo, Farben und Typografie hat eine andere Größenordnung als eine vollständige Markenentwicklung mit Positionierung, Naming und Anwendungssystem. Wir sagen, was ein Projekt tragen muss, und was nicht.',
  },
  {
    q: 'Wie lange dauert ein Branding-Projekt?',
    a: 'Ein fokussiertes Corporate Design ist in drei bis sechs Wochen umsetzbar. Eine vollständige Markenentwicklung inklusive Positionierung, Naming und Anwendungssystem braucht in der Regel zwei bis vier Monate, abhängig von Abstimmungsrunden und Umfang.',
  },
  {
    q: 'Muss ich Naming und Logo neu machen, wenn ich schon eine Marke habe?',
    a: 'Nicht zwingend. Viele Projekte starten mit einem Marken-Refresh: Positionierung schärfen, Bildsprache und Typografie ordnen, ohne Namen oder Logo zu verändern. Ein Neuaufbau lohnt sich, wenn Name, Zielgruppe oder Geschäftsmodell nicht mehr zusammenpassen.',
  },
  {
    q: 'Wie hängt Branding mit SEO und AI Search zusammen?',
    a: 'Eine klare Marke ist die Voraussetzung dafür, dass Suchmaschinen und AI-Suchsysteme Ihr Unternehmen als eigenständige Entität verstehen. Naming, Positionierung, konsistente Angaben über alle Kanäle und strukturierte Daten wirken gemeinsam. Deshalb arbeitet Fylu Marketing Branding, SEO und GEO als zusammenhängendes System.',
  },
];

const modules = [
  {
    ordinal: 'I',
    label: 'Positionierung',
    cadence: 'Foundation',
    body: 'Zielgruppe, Wettbewerbsumfeld, USP und Kernbotschaft. Ein Satz, der die Marke erklärt, und ein Rahmen, an dem alle weiteren Entscheidungen gemessen werden.',
  },
  {
    ordinal: 'II',
    label: 'Identität',
    cadence: 'Gestaltung',
    body: 'Naming falls nötig, Logo, Farben, Typografie und Bildsprache. Ein Corporate Design, das visuell zusammenhält und über Jahre trägt.',
  },
  {
    ordinal: 'III',
    label: 'Anwendung',
    cadence: 'Ausrollen',
    body: 'Brand Guidelines, Website, Print, Geschäftsausstattung, Social und Beschilderung. Die Marke bekommt eine konsistente Anwendung auf allen Kanälen.',
  },
];

const brandProcess = [
  {
    num: '01',
    title: 'Foundation',
    text: 'Geschäftsmodell, Zielgruppe, USP und Markenpersönlichkeit. Ein Briefing, das alle weiteren Entscheidungen trägt.',
  },
  {
    num: '02',
    title: 'Positionierung',
    text: 'Kernbotschaft, Claim und bei Bedarf Naming, Domain und Handles. Ein Satz, der die Marke erklärt.',
  },
  {
    num: '03',
    title: 'Identität',
    text: 'Logo, Farben, Typografie und Bildsprache. Ein Brand Kit, das alle Medien zusammenhält.',
  },
  {
    num: '04',
    title: 'Touchpoints',
    text: 'Visitenkarten, Print, Beschilderung, Verpackung, Arbeitskleidung. Alles, was Kunden anfassen.',
  },
  {
    num: '05',
    title: 'Digitale Präsenz',
    text: 'Website, E-Mail, Tracking und Rechtstexte. Die Marke bekommt ihre digitale Heimat.',
  },
  {
    num: '06',
    title: 'Sichtbarkeit',
    text: 'Google Business, Local SEO, Verzeichnisse und GEO. Die Marke wird auffindbar.',
  },
  {
    num: '07',
    title: 'Launch',
    text: 'Fotos, erste Beiträge, Bewertungen, Netzwerk und Eröffnungsaktion. Kein stiller Website-Launch.',
  },
  {
    num: '08',
    title: 'Wachstum',
    text: 'SEO, GEO, Ads, Landingpages und Automatisierung. Aus der Marke wird ein Geschäft.',
  },
];

export default function BrandingAgenturSaarlandPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Branding-Agentur Saarland', item: 'https://www.fylumarketing.de/branding-agentur-saarland' },
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
            name: 'Fylu Marketing · Branding-Agentur Saarland',
            description:
              'Branding-Agentur aus Saarlouis: Positionierung, Naming, Logo, Corporate Design und Markenanwendung aus einer Hand.',
            url: 'https://www.fylumarketing.de/branding-agentur-saarland',
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
            '@id': 'https://www.fylumarketing.de/branding-agentur-saarland#service',
            name: 'Branding & Corporate Design Saarland',
            description:
              'Positionierung, Naming, Logo, Corporate Design, Bildsprache und Markenanwendung aus Saarlouis. Für Unternehmen jeder Phase.',
            serviceType: 'Branding & Corporate Design',
            url: 'https://www.fylumarketing.de/branding-agentur-saarland',
            provider: { '@id': 'https://www.fylumarketing.de/#organization' },
            areaServed: [
              { '@type': 'State', name: 'Saarland' },
              { '@type': 'Country', name: 'Deutschland' },
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
            '@id': 'https://www.fylumarketing.de/branding-agentur-saarland#webpage',
            url: 'https://www.fylumarketing.de/branding-agentur-saarland',
            name: 'Branding-Agentur Saarland · Fylu Marketing',
            description:
              'Branding, Corporate Design und Markenaufbau aus Saarlouis. Positionierung, Naming, Logo, Anwendung.',
            inLanguage: 'de-DE',
            isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
            mainEntity: { '@id': 'https://www.fylumarketing.de/branding-agentur-saarland#service' },
            about: { '@type': 'Thing', name: 'Branding und Corporate Design' },
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
            <Link href="/webdesign-saarland" className="hover:text-cyan-700 transition-colors">Leistungen</Link>
            <span className="mx-2 text-stone-400">·</span>
            <span className="text-stone-900 font-medium">Branding-Agentur Saarland</span>
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
              <span>Branding · Corporate Design</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              Branding aus dem Saarland. Für Marken,{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                die wachsen.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p data-speakable className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-2xl">
              Positionierung, Naming, Logo, Corporate Design und Markenanwendung
              aus einer Hand. Fylu Marketing baut Marken, die professionell
              auftreten und über Jahre tragen. Aus Saarlouis, für Unternehmen
              im Saarland und deutschlandweit.
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
                href="#branding-module"
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
              Eine Marke ist kein Logo. Sie ist{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                eine Entscheidung.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <div className="prose prose-lg prose-stone max-w-none mt-10">
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                Wer eine Marke aufbaut, entscheidet zuerst, wofür sie steht.
                Ohne diese Klarheit werden Logo, Website und Kommunikation
                beliebig, austauschbar und teuer im Unterhalt. Mit Klarheit
                fällt jede spätere Entscheidung, von der Bildsprache bis zur
                Preisliste, deutlich einfacher.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                Fylu Marketing arbeitet in einer festen Reihenfolge:
                Positionierung vor Identität, Identität vor Anwendung. Kein
                Logo, das später ein Konzept sucht. Kein Corporate Design,
                das an der ersten realen Anwendung zerbricht.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Module */}
      <section id="branding-module" className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
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
                  Markenarbeit.
                </span>
              </h2>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Einzeln buchbar oder als vollständiger Markenaufbau von Foundation bis Anwendung.
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

      {/* Markenaufbau in 8 Schritten */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="mb-14 md:mb-16 max-w-3xl">
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§02b</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Vom Namen zur Marke
                </span>
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Markenaufbau.{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  In acht Schritten.
                </span>
              </h2>
              <p className="mt-7 text-lg text-stone-600 max-w-2xl leading-relaxed">
                Auch wer nur mit einer Geschäftsidee kommt, verlässt uns mit einer
                fertigen Marke. Wir bauen Unternehmen vom ersten Namen bis zur
                skalierbaren Marke in einer klaren Reihenfolge.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {brandProcess.map((step, i) => (
              <FadeInSection key={step.num} delay={0.05 + i * 0.05}>
                <div className="relative rounded-2xl bg-[var(--background-warm)] border border-stone-200/70 p-6 overflow-hidden group h-full">
                  <div className="relative">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-display italic text-[var(--cyan-deep)] text-3xl leading-none">
                        {step.num}
                      </span>
                      <span className="h-px flex-1 bg-stone-200/80 translate-y-[-6px]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--ink)] tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-stone-600 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.5}>
            <p className="mt-10 md:mt-12 max-w-3xl text-sm text-stone-500 leading-relaxed">
              Nicht jede Marke braucht alle acht Schritte. Wir definieren im Briefing,
              was relevant ist, und arbeiten die passenden Etappen ab. So fühlt sich
              die Gründung ab Tag eins nach einer fertigen Firma an.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)] border-t border-stone-200/60">
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
                Marke, die trägt?
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
                href="/webdesign-saarland"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Zur Webdesign-Übersicht</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
