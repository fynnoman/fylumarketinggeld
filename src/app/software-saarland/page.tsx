import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

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
    a: 'Internes Tool / MVP: 8.000–25.000€. ERP/CRM mit mehreren Modulen: 25.000–80.000€. Komplexe SaaS-Plattform: ab 50.000€. Jedes Projekt bekommt einen Festpreis nach Discovery-Phase — keine Stundensätze, keine Überraschungen. Wir starten oft mit einem kleinen Modul und skalieren von dort.',
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
    a: 'Sitz: Saarlouis. Hauptmarkt: Saarland (Saarbrücken, Saarlouis, Neunkirchen, Homburg, Merzig, Völklingen, St. Ingbert, Dillingen). Wir arbeiten aber regelmäßig deutschland- und EU-weit, und betreuen aktuell einen Kunden in den USA. Remote-Setup ist von Tag 1 sauber aufgesetzt.',
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
    title: 'Konzept & Festpreis',
    text: 'Wir definieren Scope, Architektur und Meilensteine. Sie bekommen einen verbindlichen Festpreis — keine Stundensätze, keine bösen Überraschungen.',
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
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">§</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Software · Saarland · Saarlouis
              </span>
            </div>
            <h1 className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.6rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em] max-w-4xl">
              Software aus dem Saarland, die{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                Probleme löst.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <p className="mt-7 text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
              Wir entwickeln maßgeschneiderte Software für Unternehmen im Saarland — Web-Apps, ERP- und CRM-Systeme, interne Tools, API-Integrationen, Automatisierungen und AI-gestützte Lösungen. Startup-nah, mit modernem Tech-Stack, mit Festpreis. Aus{' '}
              <Link href="/webdesign-saarland" className="text-cyan-700 font-medium hover:underline underline-offset-4">Webdesign</Link> ist über die Jahre eine vollständige Software-Werkstatt geworden — vom Saarländer Mittelständler bis zum US-Tech-Startup.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/angebote"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_10px_30px_-12px_rgba(12,14,16,0.55)] hover:shadow-[0_20px_45px_-12px_rgba(12,14,16,0.65)] hover:-translate-y-[1px]"
              >
                <span>Kostenloses Discovery-Gespräch</span>
                <span className="text-cyan-300 transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/programmierer-saarland"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-[15px] font-semibold text-stone-900 bg-white border border-stone-300/80 hover:bg-stone-50 transition-all duration-300"
              >
                Programmierer im Saarland
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
              Klassische IT-Dienstleister im Saarland kommen oft aus der Microsoft-Ecke der 2000er — SAP, Sharepoint, Access-Datenbanken. Funktioniert, aber wirkt veraltet und ist teuer im Betrieb. Auf der anderen Seite gibt es Großstadt-Agenturen aus Berlin oder München mit modernem Stack, aber Tagessätzen ab 1.500€ und 6-Monats-Wartezeit für ein Discovery-Gespräch.
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
              Fünf Phasen, kein{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">Bullshit.</span>
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
            Software-Problem?{' '}
            <span className="font-display italic font-normal text-cyan-300">Reden wir.</span>
          </h2>
          <p className="mt-6 text-stone-400 max-w-xl mx-auto text-base md:text-lg">
            30 Minuten Discovery. Kostenlos. Sie schildern das Problem, wir sagen Ihnen ehrlich, ob und wie wir helfen können.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/angebote"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-3.5 rounded-full text-[15px] font-semibold shadow-[0_20px_50px_-15px_rgba(6,182,212,0.6)] transition-all duration-300 hover:-translate-y-[1px]"
            >
              Discovery-Gespräch sichern <span>→</span>
            </Link>
            <a
              href="mailto:kontakt@fylumarketing.de"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 rounded-full text-[15px] font-medium border border-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Direkt schreiben <span className="text-cyan-300">↗</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
