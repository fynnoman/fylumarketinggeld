import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was macht eine Marketingagentur im Saarland?',
    a: 'Eine Marketingagentur bündelt die Disziplinen, die Ihre Marke sichtbar und wirksam machen: Positionierung, Corporate Design, Website, Suchmaschinenoptimierung, Google Ads und die Anwendung über alle Kanäle. Fylu Marketing arbeitet diese Bausteine als abgestimmtes System, mit einem festen Ansprechpartner und einem klaren Prozess.',
  },
  {
    q: 'Was ist der Unterschied zwischen Marketingagentur, Werbeagentur und Digitalagentur?',
    a: 'Werbeagenturen kommen historisch aus Kampagne und Print, Digitalagenturen aus Web und Performance, Marketingagenturen decken die gesamte Kette ab. In der Praxis überlappen sich diese Bezeichnungen. Fylu Marketing arbeitet als Marketingagentur mit digitalem Kern und ist gleichzeitig für klassische Werbemaßnahmen wie Geschäftsausstattung oder Print ansprechbar.',
  },
  {
    q: 'Für welche Unternehmen ist Fylu Marketing die richtige Wahl?',
    a: 'Für Unternehmen jeder Phase, die ihre Marke und ihre digitale Sichtbarkeit als zusammenhängendes Thema behandeln wollen. Vom ersten Auftritt bis zur Skalierung, im Saarland und deutschlandweit. Typische Anfragen kommen aus dem Mittelstand, aus Praxen und Kanzleien, aus dem Handwerk und aus dem B2B-Dienstleistungssektor.',
  },
  {
    q: 'Wie läuft die Zusammenarbeit ab?',
    a: 'Am Anfang steht ein Vorgespräch von fünfzehn bis dreißig Minuten, kostenfrei und unverbindlich. Danach erstellen wir einen Rahmen mit klarem Umfang und klaren Konditionen. Sie haben einen festen Ansprechpartner, keine Weiterleitung durch eine Hotline.',
  },
  {
    q: 'Was kostet eine Marketingagentur im Saarland?',
    a: 'Der Rahmen hängt vom Umfang ab: eine einzelne Landingpage hat eine andere Größenordnung als eine vollständige Markenentwicklung mit Website und laufender Sichtbarkeitsarbeit. Wir sagen im Vorgespräch, was ein Projekt tragen muss, und was nicht. Keine monatliche Grundgebühr für den bloßen Zugang.',
  },
  {
    q: 'Arbeitet Fylu Marketing nur im Saarland?',
    a: 'Der Standort ist Saarlouis, die Zusammenarbeit funktioniert ortsunabhängig. Wir betreuen Unternehmen im Saarland persönlich vor Ort und Unternehmen aus dem gesamten deutschsprachigen Raum digital. Regionaler Fokus schließt überregionale Zusammenarbeit nicht aus.',
  },
];

const modules = [
  {
    ordinal: 'I',
    label: 'Marke',
    cadence: 'Grundlage',
    body: 'Positionierung, Naming, Logo, Corporate Design und Brand Guidelines. Die Basis, auf der alle weiteren Kanäle aufsetzen.',
    links: [
      { label: 'Branding-Agentur Saarland', href: '/branding-agentur-saarland' },
    ],
  },
  {
    ordinal: 'II',
    label: 'Website',
    cadence: 'Kern',
    body: 'Individuelle Website mit technischer SEO-Foundation, klarem Conversion-Aufbau und modernem Stack. Als eigenständiges Projekt oder eingebettet in die Marke.',
    links: [
      { label: 'Webdesign Saarland', href: '/webdesign-saarland' },
      { label: 'Website erstellen lassen', href: '/website-erstellen-lassen' },
    ],
  },
  {
    ordinal: 'III',
    label: 'Sichtbarkeit',
    cadence: 'Wachstum',
    body: 'SEO, Local SEO, GEO und Google Ads. Damit Ihre Marke bei Google, in Google Maps und in AI-Suchsystemen gefunden wird.',
    links: [
      { label: 'SEO Saarland', href: '/seo-saarland' },
      { label: 'Local SEO Saarland', href: '/local-seo-saarland' },
      { label: 'GEO', href: '/geo' },
      { label: 'Google Ads Saarland', href: '/google-ads-saarland' },
    ],
  },
];

export default function MarketingagenturSaarlandPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Marketingagentur Saarland', item: 'https://www.fylumarketing.de/marketingagentur-saarland' },
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
            name: 'Fylu Marketing · Marketingagentur Saarland',
            description:
              'Marketingagentur aus Saarlouis. Marke, Website, SEO, GEO und Google Ads aus einer Hand. Für Unternehmen jeder Phase.',
            url: 'https://www.fylumarketing.de/marketingagentur-saarland',
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
            '@id': 'https://www.fylumarketing.de/marketingagentur-saarland#service',
            name: 'Marketingagentur Saarland',
            description:
              'Full-Service-Marketing aus Saarlouis. Marke, Website, SEO, GEO und Google Ads aus einer Hand, mit einem festen Ansprechpartner.',
            serviceType: 'Marketing & Werbung',
            url: 'https://www.fylumarketing.de/marketingagentur-saarland',
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
            '@id': 'https://www.fylumarketing.de/marketingagentur-saarland#webpage',
            url: 'https://www.fylumarketing.de/marketingagentur-saarland',
            name: 'Marketingagentur Saarland · Fylu Marketing',
            description:
              'Marketingagentur aus Saarlouis. Marke, Website, SEO, GEO und Google Ads aus einer Hand.',
            inLanguage: 'de-DE',
            isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
            mainEntity: { '@id': 'https://www.fylumarketing.de/marketingagentur-saarland#service' },
            about: { '@type': 'Thing', name: 'Marketing und Werbung' },
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
            <span className="text-stone-900 font-medium">Marketingagentur Saarland</span>
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
              <span>Marketingagentur · Saarland</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              Marketingagentur Saarland.{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Marke, Website und Sichtbarkeit als ein System.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p data-speakable className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-2xl">
              Positionierung, Branding, Website, SEO, GEO und Google Ads bei
              einem Ansprechpartner. Fylu Marketing arbeitet als Boutique für
              ausgewählte Unternehmen, mit einem klaren Prozess von Foundation
              bis Wachstum.
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
                href="#marketing-module"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Leistungen ansehen</span>
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
              Marketing funktioniert im Zusammenhang.{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Nicht in Silos.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <div className="prose prose-lg prose-stone max-w-none mt-10">
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                Eine Marke, eine Website, eine SEO-Betreuung und eine
                Ads-Agentur, alle voneinander getrennt, das ist der teure
                Regelfall. Jede Disziplin arbeitet an ihrem eigenen Bild,
                Übergaben kosten Zeit, und niemand trägt für das Gesamtbild
                Verantwortung.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                Fylu Marketing führt diese Disziplinen als Boutique in einer
                Hand. Sie sprechen mit einem Ansprechpartner, Entscheidungen
                fallen schneller, die einzelnen Kanäle greifen ineinander, und
                Ihr Auftritt bleibt konsistent von der Positionierung bis zum
                Google-Anzeigenlink.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Fokus */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)] border-t border-stone-200/60">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§01b</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Fokus
              </span>
            </div>
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Boutique, nicht{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Vollsortimenter.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <div className="prose prose-lg prose-stone max-w-none mt-10">
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                „Wir machen alles" ist ein Satz, den Sie bei uns nicht hören werden.
                Fylu Marketing arbeitet mit einer bewusst überschaubaren Zahl an
                Kunden gleichzeitig und in einem klar umrissenen Leistungsfeld:
                Marke, Website, Sichtbarkeit und die Infrastruktur, die diese drei
                zusammenhält.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                Was in dieses Feld nicht hineingehört, sagen wir ehrlich. Klassische
                Mediaplanung im großen Stil, TV-Kampagnen oder komplexes Influencer-
                Marketing sind nicht unser Kern. Wenn ein Vorhaben besser bei einem
                spezialisierten Partner aufgehoben ist, weisen wir darauf hin.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Module */}
      <section id="marketing-module" className="py-24 md:py-32 px-5 md:px-8 bg-white border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-14">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§02</span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Die Ebenen
                </span>
              </div>
              <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
                Drei Ebenen an{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Marketing-Arbeit.
                </span>
              </h2>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Einzeln buchbar oder als abgestimmtes Ganzes von der Marke bis zum aktiven Wachstum.
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
                        Ebene {m.ordinal}
                      </div>
                      <h3 className="font-display italic text-3xl md:text-[2.1rem] text-[var(--ink)] leading-none">
                        {m.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-stone-700 text-[0.95rem] leading-relaxed mb-6">
                    {m.body}
                  </p>
                  {m.links && m.links.length > 0 && (
                    <ul className="space-y-1.5 mb-6">
                      {m.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--ink)] hover:text-[var(--cyan-deep)] transition-colors"
                          >
                            <span className="border-b border-stone-300 group-hover:border-[var(--cyan-deep)] pb-0.5 transition-colors">
                              {l.label}
                            </span>
                            <span className="text-[var(--cyan-deep)] transition-transform group-hover:translate-x-0.5">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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

      {/* System-Beispiel: MG Gebäudeservice */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)] border-t border-stone-200/60">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§03</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Ein System, ein Beispiel
              </span>
            </div>
            <h2 className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-[3.2rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              MG Gebäudeservice.{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Marke, Website und Sichtbarkeit zusammengeführt.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <div className="prose prose-lg prose-stone max-w-none mt-10">
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7]">
                Für die Skalierung auf über 260 Fachkräfte brauchte MG Gebäudeservice
                einen Auftritt, der Zertifizierungen (ISO 9001, ISO 14001, RAL GZ 902)
                sichtbar trägt und neben etablierten Anbietern in Köln und Düsseldorf
                nicht klein wirkt. Statt drei Agenturen für Marke, Website und Sichtbarkeit
                zu koordinieren, ist alles bei Fylu Marketing gelaufen.
              </p>
              <p className="text-stone-700 text-[1.05rem] md:text-[1.1rem] leading-[1.7] mt-6">
                Marken-Architektur, Website, digitale Werkzeuge und lokale Signale
                greifen dadurch von Anfang an ineinander. Genau das ist gemeint, wenn wir
                von einem zusammenhängenden System sprechen: nicht mehr Kanäle, sondern
                ein Auftritt, der operativ trägt.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href="/referenzen/mg-gebaeudeservice"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--ink)] hover:text-[var(--cyan-deep)] transition-colors"
              >
                <span className="border-b border-stone-300 group-hover:border-[var(--cyan-deep)] pb-0.5 transition-colors">
                  Zur vollständigen Case Study
                </span>
                <span className="text-[var(--cyan-deep)] transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/digital-index"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-stone-600 hover:text-[var(--cyan-deep)] transition-colors"
              >
                <span className="border-b border-stone-300 group-hover:border-[var(--cyan-deep)] pb-0.5 transition-colors">
                  Fylu Digital Index: unser Bewertungssystem
                </span>
                <span className="text-[var(--cyan-deep)] transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white border-t border-stone-200/60">
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
              Bereit für einen{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Auftritt, der zusammenhält?
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
                href="/branding-agentur-saarland"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Zur Branding-Agentur</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
