import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';
import { WHATSAPP_URL } from '@/lib/contact';

const faqs = [
  {
    q: 'Was bedeutet "Softwareentwicklung Saarland" konkret bei Fylu?',
    a: 'Wir entwickeln maßgeschneiderte Softwarelösungen für Unternehmen im Saarland und deutschlandweit: Web-Anwendungen, interne Tools, ERP- und CRM-Systeme, SaaS-Plattformen, Schnittstellen und Automatisierungen. Im Gegensatz zu klassischen IT-Dienstleistern arbeiten wir Startup-nah, mit modernem Tech-Stack (Next.js, React, TypeScript, Node.js, PostgreSQL) und kurzen Wegen.',
  },
  {
    q: 'Welche Tech-Stacks setzt ihr ein?',
    a: 'Frontend: React, Next.js, TypeScript, Tailwind. Backend: Node.js, Express, Python (FastAPI), tRPC. Datenbanken: PostgreSQL, Supabase, Redis. Infrastruktur: Vercel, AWS, Docker. Wir wählen pragmatisch — kein Hype, sondern erprobte Technologien, die auch in 5 Jahren noch wartbar sind.',
  },
  {
    q: 'Was kostet die Entwicklung einer Custom Software?',
    a: 'Wir kalkulieren jedes Projekt nach einer Discovery-Phase mit transparenten Konditionen — keine Stundensätze, keine Überraschungen. Wir starten oft mit einem kleinen Modul und skalieren von dort. Konkrete Einschätzung im 15-Minuten-Gespräch.',
  },
  {
    q: 'Habt ihr Referenzen im Software-Bereich?',
    a: 'Ja. Taskey ist eine SaaS-Plattform, die wir für die Gebäudereinigungsbranche entwickelt und live betreuen. Syncrony ist ein AI-natives ERP-System, das wir für einen US-amerikanischen Kunden bauen. Plus diverse interne Tools für Saarländer Mittelständler. Auf Anfrage stellen wir konkrete Projekte vor.',
  },
  {
    q: 'Wie unterscheidet ihr euch von klassischen IT-Dienstleistern aus dem Saarland?',
    a: 'Drei Punkte. Erstens: Wir kommen aus Webdesign + Marketing — Software ist bei uns immer auch User-Experience, nicht nur Backend-Logik. Zweitens: Kein 40-Mann-Apparat, kein Account-Manager-Theater — Sie sprechen direkt mit dem Entwickler. Drittens: Wir denken in Produkten und Conversions, nicht in Tickets und Tagessätzen.',
  },
  {
    q: 'Macht ihr auch Wartung & laufende Weiterentwicklung?',
    a: 'Ja. Jede Lösung bekommt einen Service-Level (Wartung, Bugfixes, Updates). Auf Wunsch übernehmen wir auch laufende Feature-Entwicklung als monatlich gebuchtes Entwickler-Retainer-Modell. Transparente Sprint-Planung, monatliches Reporting.',
  },
  {
    q: 'Arbeitet ihr nur im Saarland oder auch deutschlandweit?',
    a: 'Sitz: Saarlouis. Hauptmarkt: Saarland (Saarbrücken, Saarlouis, Neunkirchen, Dillingen, Merzig, Völklingen, St. Ingbert, Dillingen). Wir arbeiten aber regelmäßig deutschland- und EU-weit, und betreuen aktuell einen Kunden in den USA. Remote-Setup ist von Tag 1 sauber aufgesetzt.',
  },
  {
    q: 'Wie schnell könnt ihr starten?',
    a: 'Pro Monat nehmen wir maximal drei neue Software-Projekte an. Nach einem 30-Minuten-Discovery-Call (kostenlos) starten wir typischerweise innerhalb von 7–14 Tagen mit der Konzeptphase.',
  },
];

const services = [
  {
    title: 'Web-Apps & SaaS-Plattformen',
    body: 'Vollständige Webanwendungen mit Login, Datenbank, API, Bezahlung und Admin-Bereich. Skalierbar von 10 bis 100.000 Nutzern.',
    tech: 'Next.js · React · Node.js · PostgreSQL · Stripe',
  },
  {
    title: 'Custom Software & interne Tools',
    body: 'Maßgeschneiderte Tools, die Excel-Tabellen, manuelle Prozesse und Insellösungen ersetzen. Genau auf Ihre Abläufe zugeschnitten.',
    tech: 'TypeScript · Python · Supabase · APIs',
  },
  {
    title: 'ERP- & CRM-Systeme',
    body: 'Unternehmens-Software für Vertrieb, Buchhaltung, Projektmanagement und Kundenverwaltung. Modular aufgebaut, schrittweise einführbar.',
    tech: 'Node.js · PostgreSQL · Auth · Reports',
  },
  {
    title: 'API-Integration & Schnittstellen',
    body: 'Wir verbinden Ihre Systeme: DATEV, lexoffice, Stripe, Klaviyo, HubSpot, Notion — automatisch, in Echtzeit, ohne Copy-Paste.',
    tech: 'REST · GraphQL · Webhooks · Zapier · Make',
  },
  {
    title: 'Automatisierung & Workflows',
    body: 'Manuelle Prozesse automatisieren: Lead-Verteilung, Rechnungsstellung, E-Mail-Sequenzen, Reporting. Mehr Output ohne mehr Personal.',
    tech: 'Node.js · n8n · Zapier · OpenAI API',
  },
  {
    title: 'AI- & ChatGPT-Integration',
    body: 'Integration von Large Language Models in Ihre Software: Chatbots, automatische Klassifizierung, Content-Generierung, intelligente Suche.',
    tech: 'OpenAI · Anthropic · Vector DB · Embeddings',
  },
];

const process = [
  {
    title: 'Discovery & Audit',
    text: 'Kostenloses 30-Minuten-Gespräch. Wir verstehen Ihr Problem, Ihre Prozesse und Ihre Ziele — bevor irgendwas gebaut wird.',
  },
  {
    title: 'Konzept & verbindliche Konditionen',
    text: 'Wir definieren Scope, Architektur und Meilensteine. Sie bekommen ein verbindliches Angebot — keine Stundensätze, keine bösen Überraschungen.',
  },
  {
    title: 'Iterative Entwicklung',
    text: 'In 1–2-Wochen-Sprints. Sie sehen Fortschritt regelmäßig, nicht erst nach 6 Monaten. Feedback fließt direkt ein.',
  },
  {
    title: 'Launch & Übergabe',
    text: 'Sauber deployt auf Ihrer oder unserer Infrastruktur. Vollständige Dokumentation, Code gehört Ihnen.',
  },
  {
    title: 'Betrieb & Weiterentwicklung',
    text: 'Wartung, Updates, neue Features. Auf Wunsch als monatliches Retainer-Modell mit garantierter Reaktionszeit.',
  },
];

export default function SoftwareSaarlandPage() {
  return (
    <main>
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
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Software Saarland',
                item: 'https://www.fylumarketing.de/software-saarland',
              },
            ],
          }),
        }}
      />

      {/* Service Schema — Software Development */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Softwareentwicklung',
            name: 'Softwareentwicklung Saarland',
            description:
              'Maßgeschneiderte Softwareentwicklung aus Saarlouis: Web-Apps, ERP/CRM, Custom Software, API-Integration, Automatisierung und AI-Integration für Unternehmen im Saarland und deutschlandweit.',
            url: 'https://www.fylumarketing.de/software-saarland',
            provider: {
              '@type': 'Organization',
              '@id': 'https://www.fylumarketing.de/#organization',
              name: 'Fylu',
              url: 'https://www.fylumarketing.de',
            },
            areaServed: [
              { '@type': 'State', name: 'Saarland' },
              { '@type': 'City', name: 'Saarbrücken' },
              { '@type': 'City', name: 'Saarlouis' },
              { '@type': 'City', name: 'Neunkirchen' },
              { '@type': 'City', name: 'Homburg' },
              { '@type': 'City', name: 'Merzig' },
              { '@type': 'City', name: 'Völklingen' },
              { '@type': 'Country', name: 'Deutschland' },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Software-Leistungen',
              itemListElement: services.map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s.title, description: s.body },
              })),
            },
          }),
        }}
      />

      {/* FAQ Schema */}
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

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.fylumarketing.de/software-saarland#webpage',
            url: 'https://www.fylumarketing.de/software-saarland',
            name: 'Software Saarland · Fylu Studio',
            description:
              'Softwareentwicklung aus dem Saarland: Custom Software, Web-Apps, SaaS, ERP/CRM, API- und AI-Integration. Modernes Fundament (Next.js, React, TypeScript, Node.js, Python, PostgreSQL).',
            inLanguage: 'de-DE',
            isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
            about: { '@type': 'Thing', name: 'Softwareentwicklung' },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '[data-speakable]'],
            },
          }),
        }}
      />

      {/* Breadcrumb Nav */}
      <div className="bg-[var(--background-warm)] border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 pt-20">
          <nav className="text-sm text-stone-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cyan-700 transition-colors">Home</Link>
            <span className="mx-2 text-stone-300">/</span>
            <span className="text-stone-900 font-medium">Software Saarland</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-32 px-5 md:px-8 bg-white overflow-hidden isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 right-0 w-[55vw] h-[55vw]"
            style={{
              background:
                'radial-gradient(50% 50% at 70% 30%, rgba(6,182,212,0.14), transparent 70%)',
            }}
          />
          <div className="noise-overlay opacity-30" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeInSection>
            <div className="editorial-eyebrow mb-6">
              <span>Erweiterung · Software</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.6rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em] max-w-4xl">
              Software Saarland — als{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Erweiterung des Studios.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p data-speakable className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-3xl">
              Maßgeschneiderte Software als eigenständige Disziplin oder als
              Erweiterung Ihres Fylu-Auftritts. Web-Apps, ERP- und CRM-Systeme,
              interne Tools, API-Integrationen, Automatisierungen und AI-gestützte
              Vorhaben — kuratiert aus Saarlouis, mit einer Handschrift, die auch
              in fünf Jahren noch wartbar ist. Zurück zum{' '}
              <Link href="/webdesign-saarland" className="text-cyan-700 font-medium hover:underline underline-offset-4">Fylu Webdesign Studio</Link>.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/buchen"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
              >
                <span>Discovery-Vorgespräch</span>
                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/programmierer-saarland"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
              >
                <span>Programmierer im Saarland</span>
                <span className="text-stone-400">↗</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Was wir bauen */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§1</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Was wir bauen
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-[3.6rem] font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] max-w-3xl">
              Sechs Disziplinen, ein{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">Team.</span>
            </h2>
          </FadeInSection>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeInSection key={s.title} delay={i * 0.06}>
                <article className="h-full bg-white rounded-3xl border border-stone-200/70 p-7 hover:border-cyan-200 transition-all hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(12,14,16,0.18)]">
                  <span className="font-display italic font-normal text-3xl text-[var(--cyan-deep)] leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--ink)] tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">{s.body}</p>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-stone-400 font-medium">
                    {s.tech}
                  </p>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Saarland */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§2</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Warum aus dem Saarland
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-8">
              Lokal verwurzelt, technisch{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                auf Augenhöhe mit Berlin und München.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08} className="prose prose-lg prose-stone max-w-none">
            <p>
              Klassische IT-Dienstleister im Saarland kommen oft aus der Microsoft-Ecke der 2000er — SAP, Sharepoint, Access-Datenbanken. Funktioniert, aber wirkt veraltet und ist teuer im Betrieb. Auf der anderen Seite gibt es Großstadt-Agenturen aus Berlin oder München mit modernem Stack, aber hohen Tagessätzen und langen Wartezeiten für ein Discovery-Gespräch.
            </p>
            <p>
              Fylu sitzt dazwischen: <strong>moderner Tech-Stack</strong> (React, TypeScript, Postgres, Cloud-Native), <strong>regionale Erreichbarkeit</strong> (Saarlouis als Zentrum für Saarbrücken, Merzig, Dillingen, Neunkirchen, Homburg), <strong>faire Konditionen</strong>. Aktuell betreuen wir Software-Kunden vom Saarländer Handwerksbetrieb mit Excel-Problem bis zum SaaS-Startup mit 50.000 Nutzern.
            </p>
            <p>
              Das Resultat: Sie bekommen Berlin-Niveau, ohne Berlin zu bezahlen, mit jemand, der im Zweifel innerhalb von 90 Minuten persönlich bei Ihnen vor Ort sein kann.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Prozess */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§3</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                So arbeiten wir
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-12">
              Fünf Phasen, ein{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">klarer Weg.</span>
            </h2>
          </FadeInSection>
          <div className="space-y-8">
            {process.map((step, i) => (
              <FadeInSection key={step.title} delay={i * 0.06}>
                <div className="relative pl-16 md:pl-20">
                  <span className="absolute left-0 top-0 font-display italic font-normal text-[3.5rem] md:text-[4.5rem] leading-none text-[var(--cyan-deep)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--ink)] tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed max-w-2xl">{step.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§4</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Häufige Fragen
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-12">
              Was Sie sich{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">wirklich</span>{' '}
              fragen.
            </h2>
          </FadeInSection>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FadeInSection key={f.q} delay={i * 0.04}>
                <details className="group bg-[var(--background-warm)] rounded-2xl border border-stone-200/70 px-6 py-5 hover:border-cyan-200 transition-colors">
                  <summary className="cursor-pointer flex items-baseline justify-between gap-4 list-none">
                    <span className="flex items-baseline gap-3">
                      <span className="font-display italic text-cyan-700 text-sm leading-none">
                        0{i + 1}
                      </span>
                      <span className="font-medium text-[var(--ink)] text-base md:text-[17px] tracking-tight">
                        {f.q}
                      </span>
                    </span>
                    <span className="text-cyan-700 text-xl leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-stone-600 leading-relaxed text-[15px]">{f.a}</p>
                </details>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--ink)] text-white relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw]"
            style={{ background: 'radial-gradient(50% 50% at 50% 0%, rgba(6,182,212,0.25), transparent 70%)' }}
          />
          <div className="noise-overlay opacity-40 mix-blend-overlay" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-[3.6rem] font-semibold tracking-[-0.035em] leading-[1.05]">
            Ein Software-Vorhaben?{' '}
            <span className="font-display italic font-normal text-cyan-300">Wir hören zu.</span>
          </h2>
          <p className="mt-6 text-stone-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Dreißig Minuten Discovery. Sie schildern das Vorhaben, wir sagen
            ehrlich, ob und wie wir es begleiten würden.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/buchen"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cyan-50 text-[var(--ink)] px-7 py-4 rounded-full text-[15px] font-semibold transition-all duration-300 hover:-translate-y-[1px]"
            >
              <span>Discovery-Vorgespräch</span>
              <span className="text-[var(--cyan-deep)]">→</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Per WhatsApp schreiben"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-4 rounded-full text-[15px] font-semibold transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
