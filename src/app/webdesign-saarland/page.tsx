import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was kostet ein Fylu-Auftritt im Saarland?',
    a: 'Jedes Projekt wird individuell auf Umfang und Zielsetzung zugeschnitten. Der endgültige Rahmen entsteht im Vorgespräch — transparent, ohne versteckte Kosten.',
  },
  {
    q: 'Wie lange dauert ein Projekt?',
    a: 'Signature-Auftritte gehen in etwa zwei bis vier Wochen live. Atelier und Maison planen wir mit vier bis sechs Wochen. Nach Live-Gang folgen bis zu sechs Monate Studio-Begleitung.',
  },
  {
    q: 'Ist eine Fylu-Website mobil optimiert?',
    a: 'Selbstverständlich. Jeder Auftritt wird mobile-first entworfen — auf die Rhythmisierung des Smartphones abgestimmt, dann für Tablet und Desktop erweitert. Auch aus SEO-Gründen unverhandelbar.',
  },
  {
    q: 'Werde ich bei Google gefunden?',
    a: 'Jede Fylu-Website enthält eine technische SEO-Foundation. Für tiefere Sichtbarkeit gibt es die Add-Ons SEO Foundation, SEO Betreuung sowie Google Ads Setup — Konditionen individuell im Vorgespräch.',
  },
  {
    q: 'Was passiert nach dem Launch?',
    a: 'Nach dem Launch fängt die eigentliche Arbeit an. Wir begleiten euch langfristig — Iteration, SEO, GEO, SEA, Reporting, Feinschliff, neue Landingpages. Keine monatliche Grundgebühr, ihr bucht Betreuung im Umfang, den euer Wachstum verlangt. Ihr entscheidet, wie lange wir zusammenarbeiten.',
  },
  {
    q: 'Kann ich Inhalte selbst pflegen?',
    a: 'Auf Wunsch. Wir richten redaktionelle Content-Systeme ein, in denen Sie Texte, Bilder und Kapitel selbst pflegen — ohne die editoriale Handschrift der Seite zu verlieren.',
  },
];

const chapters = [
  {
    ordinal: 'I',
    title: 'Vorgespräch',
    body: 'Fünfzehn Minuten, in denen wir zuhören: Substanz Ihres Hauses, aktuelle Präsenz, Anspruch des Vorhabens.',
  },
  {
    ordinal: 'II',
    title: 'Positionierung',
    body: 'Rahmen, Verkaufsarchitektur, Content-Map. Kein Template — eine eigene Handschrift.',
  },
  {
    ordinal: 'III',
    title: 'Werkbank',
    body: 'Design und Umsetzung. Editoriale Typografie, technische SEO-Foundation, spürbare Rhythmisierung.',
  },
  {
    ordinal: 'IV',
    title: 'Sichtbarkeit',
    body: 'Lokale Schärfung, Google-Profil und strukturierte Daten — Sichtbarkeit für Begriffe, die Klienten tatsächlich eingeben.',
  },
  {
    ordinal: 'V',
    title: 'Iteration',
    body: 'Neunzig Tage Studio-Begleitung nach Live-Gang. Zeit für Substanz, nicht für Theorie.',
  },
];

const packages = [
  {
    ordinal: 'I',
    name: 'Signature',
    positioning: 'Der stille Auftritt.',
    body: 'Bis zu fünf editorial gestaltete Seiten, technische SEO-Basis, 60 Tage Betreuung. Für Häuser, die still nach vorne treten wollen.',
  },
  {
    ordinal: 'II',
    name: 'Atelier',
    positioning: 'Handschrift statt Vorlage.',
    body: 'Bis zu zehn Seiten mit individueller Verkaufsarchitektur, lokales SEO-Framework, Google Business, 90 Tage Iteration.',
    highlight: true,
  },
  {
    ordinal: 'III',
    name: 'Maison',
    positioning: 'Kein Auftritt. Ein Werk.',
    body: 'Umfassende, maßgefertigte Website mit Redaktionssystem, SEO-Foundation für Skalierung und sechs Monaten Studio-Begleitung.',
  },
];

export default function WebdesignSaarlandPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fylumarketing.de' },
              { '@type': 'ListItem', position: 2, name: 'Webdesign Saarland', item: 'https://www.fylumarketing.de/webdesign-saarland' },
            ],
          }),
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Fylu Studio · Editorial Webdesign Saarland',
            description: 'Boutique-Webdesign-Studio aus Saarlouis. Editorial gestaltete Websites. Zwölf Klienten pro Jahr.',
            url: 'https://www.fylumarketing.de/webdesign-saarland',
            telephone: '+4915168488999',
            email: 'kontakt@fylumarketing.de',
            address: { '@type': 'PostalAddress', addressLocality: 'Saarlouis', addressRegion: 'Saarland', addressCountry: 'DE' },
            geo: { '@type': 'GeoCoordinates', latitude: 49.3133, longitude: 6.7525 },
            areaServed: [{ '@type': 'State', name: 'Saarland' }, { '@type': 'Country', name: 'Deutschland' }],
          }),
        }}
      />

      {/* FAQ Schema */}
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

      {/* Breadcrumb Nav */}
      <div className="bg-[var(--background-warm)] border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-6 py-3 pt-20">
          <nav className="text-[11px] uppercase tracking-[0.22em] text-stone-500">
            <Link href="/" className="hover:text-cyan-700 transition-colors">Home</Link>
            <span className="mx-2 text-stone-400">·</span>
            <span className="text-stone-900 font-medium">Webdesign Saarland</span>
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
          <div className="absolute top-0 right-0 w-[60vw] h-[50vw] bloom-cyan" />
          <div className="noise-overlay opacity-30" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInSection>
            <div className="mb-8 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-stone-700">
                Studio Saarlouis · 12 Klienten / Jahr · 3 Plätze 2026
              </span>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.08}>
            <h1 className="text-[2.8rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.6rem] lg:leading-[0.98] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              Webdesign Saarland — mit einer{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Handschrift, die bleibt.
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={0.16}>
            <p className="mt-8 text-lg md:text-[1.15rem] text-stone-600 leading-relaxed max-w-2xl">
              Fylu ist ein Boutique-Webdesign-Studio aus Saarlouis. Wir begleiten
              zwölf Häuser pro Jahr — im Saarland, bundesweit und international.
              Editorial gestaltete Auftritte mit Substanz. Kein Template, kein Fließband.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/buchen"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
              >
                <span>Platz für 2026 prüfen</span>
                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="#pakete-saarland"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Pakete ansehen</span>
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
              Warum ein{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Boutique-Studio
              </span>{' '}
              statt einer Agentur?
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08} className="prose prose-lg prose-stone max-w-none mt-10 leading-relaxed">
            <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
              Ein Auftritt ist keine Nebensache. Er ist die stille Antwort auf eine
              laute Frage: <em>Kann man diesem Haus vertrauen?</em> Über 75 % der
              Nutzer beurteilen die Glaubwürdigkeit eines Unternehmens anhand
              seines Auftritts. Ein Auftritt aus einem Template ist eine Antwort im
              Chor. Ein Auftritt mit Handschrift ist eine eigene Stimme.
            </p>
            <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
              Fylu arbeitet mit einer bewusst kleinen Zahl an Klienten. Zwölf pro
              Jahr. Direkter Draht zum Studio-Lead. Editoriale Gestaltung statt
              Baukasten. Für Häuser vom saarländischen Handwerksbetrieb bis zum
              internationalen SaaS-Haus — verbindend ist der Anspruch, digitale
              Präsenz mit Substanz zu bauen, nicht mit Lautstärke.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Prozess */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§02</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Der Prozess
              </span>
            </div>
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Fünf Kapitel — von der{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Vorstellung bis zur Wirkung.
              </span>
            </h2>
          </FadeInSection>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {chapters.map((c, i) => (
              <FadeInSection key={c.ordinal} delay={0.08 + i * 0.05}>
                <div className="bg-white rounded-3xl p-8 border border-stone-200/70 premium-lift h-full">
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
                      Kapitel {c.ordinal}
                    </span>
                    <span className="font-display italic text-3xl text-[var(--cyan-deep)] leading-none">
                      {c.ordinal}
                    </span>
                  </div>
                  <h3 className="font-display italic text-2xl md:text-[1.65rem] text-[var(--ink)] leading-tight mb-3">
                    {c.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-[0.95rem]">
                    {c.body}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/methodik"
              className="group inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-900 font-semibold transition-colors"
            >
              <span className="relative">
                Zum ganzen Prozess
                <span className="absolute inset-x-0 bottom-0 h-px bg-cyan-700/40" />
              </span>
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pakete */}
      <section id="pakete-saarland" className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§03</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Die Pakete
                </span>
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Drei Zugänge zu einer{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Fylu-Website.
                </span>
              </h2>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Drei Zugänge, ein Anspruch. Der endgültige Rahmen entsteht
                individuell im Vorgespräch.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <FadeInSection key={pkg.name} delay={0.1 + i * 0.08}>
                <div
                  className={`p-8 rounded-3xl border premium-lift h-full flex flex-col ${
                    pkg.highlight
                      ? 'bg-[var(--ink)] text-white border-transparent shadow-[0_30px_80px_-30px_rgba(14,116,144,0.5)]'
                      : 'bg-white border-stone-200/70'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`text-[10px] uppercase tracking-[0.28em] mb-2 ${pkg.highlight ? 'text-stone-300' : 'text-stone-500'}`}>
                        Kapitel {pkg.ordinal}
                      </div>
                      <h3 className={`font-display italic text-3xl md:text-[2.4rem] leading-none ${pkg.highlight ? 'text-cyan-200' : 'text-[var(--ink)]'}`}>
                        {pkg.name}
                      </h3>
                    </div>
                  </div>
                  <p className={`font-display italic text-lg mb-3 ${pkg.highlight ? 'text-white' : 'text-[var(--ink)]'}`}>
                    {pkg.positioning}
                  </p>
                  <p className={`text-[0.95rem] leading-relaxed mb-6 ${pkg.highlight ? 'text-stone-300' : 'text-stone-600'}`}>
                    {pkg.body}
                  </p>
                  <div className={`mt-auto pt-6 border-t border-dashed ${pkg.highlight ? 'border-white/20' : 'border-stone-200'}`}>
                    <Link
                      href="/buchen"
                      className={`inline-flex w-full items-center justify-center gap-2 px-4 py-3 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                        pkg.highlight
                          ? 'bg-cyan-500 hover:bg-cyan-400 text-white'
                          : 'bg-[var(--ink)] hover:bg-black text-white'
                      }`}
                    >
                      <span>{pkg.name} anfragen</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
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
              Bereit für einen{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Auftritt, der bleibt?
              </span>
            </h2>
            <p className="mt-6 text-stone-600 text-lg leading-relaxed">
              Vorgespräch, 15 Minuten. Wir hören zu, bevor wir antworten.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/buchen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)]"
              >
                <span>Vorgespräch buchen</span>
                <span className="text-cyan-400">→</span>
              </Link>
              <a
                href="tel:+4915168488999"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>+49 151 684 88999</span>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">
              <Link href="/seo-saarland" className="hover:text-cyan-700 transition-colors">SEO</Link>
              <span className="text-stone-300">·</span>
              <Link href="/google-ads-saarland" className="hover:text-cyan-700 transition-colors">Google Ads</Link>
              <span className="text-stone-300">·</span>
              <Link href="/software-saarland" className="hover:text-cyan-700 transition-colors">Software</Link>
              <span className="text-stone-300">·</span>
              <Link href="/app-entwickeln-lassen" className="hover:text-cyan-700 transition-colors">App-Entwicklung</Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
