import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was kostet ein Programmierer im Saarland?',
    a: 'Wir arbeiten projektbasiert mit transparenten Konditionen — definiert nach einer kostenlosen Discovery-Phase. Sie wissen vorher, was es kostet: keine offene Rechnung, keine Stunden-Schätzungen. Konditionen je nach Projektumfang — anrufen und persönlich besprechen.',
  },
  {
    q: 'Bist du Freelancer oder eine Agentur?',
    a: 'Hybride Struktur. Kern ist ein festes Team rund um Fynn Schulz (Inhaber, Saarlouis). Für spezialisierte Disziplinen (z.B. Cloud-Infrastruktur, AI-Integration, mobile Native-Apps) ziehen wir geprüfte Spezialisten aus unserem Netzwerk hinzu. Sie haben aber immer einen festen Ansprechpartner.',
  },
  {
    q: 'Welche Programmiersprachen und Frameworks beherrscht ihr?',
    a: 'Primary Stack: TypeScript, React, Next.js, Node.js, Python (FastAPI). Datenbanken: PostgreSQL, SQLite, Supabase, Redis. Cloud: Vercel, AWS, Cloudflare. Mobile: React Native, PWA. AI: OpenAI API, Anthropic API, LangChain, Vector-Datenbanken. Wir wählen Tools, die in 5 Jahren noch wartbar sind — keine Hype-Sprachen.',
  },
  {
    q: 'Macht ihr auch kleine Aufträge oder nur große Projekte?',
    a: 'Beides. Kleine Projekte (Landingpage mit Custom-Logik, API-Integration, Browser-Plugin) und größere Software-Projekte. Stundenweise Unterstützung („nur mal kurz das fixen") machen wir nicht — das funktioniert für beide Seiten nicht. Umfang besprechen wir vorab persönlich.',
  },
  {
    q: 'Arbeitet ihr remote oder vor Ort?',
    a: 'Standardmäßig remote — moderne Tools machen das problemlos und meistens effizienter. Kick-off-Meetings und kritische Workshops finden auf Wunsch vor Ort statt: Saarbrücken, Saarlouis, Neunkirchen, Dillingen, Merzig, Völklingen, St. Ingbert, Dillingen oder im gesamten Saarland. Außerhalb der Region auf Anfrage.',
  },
  {
    q: 'Bekomme ich den Source Code?',
    a: 'Ja, immer. Sie bekommen einen privaten Git-Repository-Zugriff während der Entwicklung und vollständigen Code-Export nach Abnahme. Keine Vendor-Lock-Ins, keine versteckten Klauseln.',
  },
  {
    q: 'Macht ihr auch Wordpress, Shopify oder andere CMS-Lösungen?',
    a: 'Nein — bewusst nicht. Wir bauen Custom Code mit Next.js und Co. Wenn Sie eine Wordpress-Lösung suchen, sind Sie bei klassischen Saarland-Agenturen besser aufgehoben. Wir kommen ins Spiel, wenn Sie schnelle Performance, hohe Sicherheit, individuelle Funktionalität oder Integration mit anderen Systemen brauchen.',
  },
];

const stacks = [
  { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { name: 'Backend', items: ['Node.js', 'Python (FastAPI)', 'tRPC', 'GraphQL', 'REST'] },
  { name: 'Datenbanken', items: ['PostgreSQL', 'Supabase', 'Redis', 'SQLite', 'Vector DBs'] },
  { name: 'Cloud & DevOps', items: ['Vercel', 'AWS', 'Cloudflare', 'Docker', 'GitHub Actions'] },
  { name: 'AI & Integrationen', items: ['OpenAI API', 'Anthropic API', 'LangChain', 'Stripe', 'Webhooks'] },
  { name: 'Mobile', items: ['React Native', 'PWA', 'Expo', 'Capacitor', 'Native APIs'] },
];

export default function ProgrammiererSaarlandPage() {
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
                name: 'Programmierer Saarland',
                item: 'https://www.fylumarketing.de/programmierer-saarland',
              },
            ],
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Programmierung',
            name: 'Programmierer Saarland',
            description:
              'Erfahrener Programmierer aus Saarlouis: Webentwicklung, Software-Entwicklung, Full-Stack-Entwicklung. TypeScript, React, Next.js, Node.js, Python. Transparente Konditionen statt Stundensatz.',
            url: 'https://www.fylumarketing.de/programmierer-saarland',
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
              { '@type': 'Country', name: 'Deutschland' },
            ],
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
            '@id': 'https://www.fylumarketing.de/programmierer-saarland#webpage',
            url: 'https://www.fylumarketing.de/programmierer-saarland',
            name: 'Programmierer Saarland · Fylu Marketing',
            description:
              'Programmierung und Softwareentwicklung aus dem Saarland: Full-Stack (React, Next.js, TypeScript, Node.js, Python), Custom Software, ERP/CRM, SaaS, API- und AI-Integration.',
            inLanguage: 'de-DE',
            isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
            about: { '@type': 'Thing', name: 'Programmierung / Softwareentwicklung' },
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
            <span className="text-stone-900 font-medium">Programmierer Saarland</span>
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
              <span>Erweiterung · Entwicklung</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.6rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em] max-w-4xl">
              Programmierer aus dem Saarland —{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                mit einer Handschrift, die trägt.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p data-speakable className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-3xl">
              Full-Stack-Entwicklung für Unternehmen in Saarbrücken, Saarlouis, Merzig,
              Neunkirchen, Homburg und im übrigen Saarland. Moderner Tech-Stack
              (TypeScript, React, Next.js, Node.js, Python), erfahrene Hand,
              kuratierte Rahmen. Brauchen Sie{' '}
              <Link href="/software-saarland" className="text-cyan-700 font-medium hover:underline underline-offset-4">Software-Entwicklung</Link> oder{' '}
              <Link href="/webdesign-saarland" className="text-cyan-700 font-medium hover:underline underline-offset-4">Editorial Webdesign</Link>? Alles aus einer Hand.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.24}>
            <Link
              href="/buchen"
              className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
            >
              <span>Vorhaben besprechen</span>
              <span className="text-cyan-400">→</span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Was wir programmieren */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§1</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Was wir programmieren
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-8">
              Vom Browser-Plugin bis zur{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                kompletten SaaS-Plattform.
              </span>
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.08} className="prose prose-lg prose-stone max-w-none">
            <p>
              Wir sind Full-Stack-Programmierer mit Schwerpunkt Web. Heißt: Wir können sowohl Ihr Frontend (das, was der User sieht) als auch Ihr Backend (Datenbank, Logik, APIs) als auch Ihre Infrastruktur (Hosting, Deployment, Monitoring) bauen — alles aus einer Hand. Das ist der Unterschied zu spezialisierten Freelancern, bei denen Sie für jede Disziplin jemand anders brauchen.
            </p>
            <p>
              Konkret bedeutet das: Wir bauen Web-Apps für Unternehmen, interne Tools, die manuelle Prozesse automatisieren, REST/GraphQL-APIs, die Ihre bestehenden Systeme verbinden, Browser-Plugins und Chrome-Extensions, Customer-Portale, in denen Ihre Kunden Daten einsehen oder Dokumente herunterladen können, Performance-Optimierung bestehender Websites, AI-Integration (ChatGPT, Claude, Embeddings) und vieles mehr. Wenn Sie ein konkretes Problem haben, das mit Code lösbar ist — sehr wahrscheinlich können wir helfen.
            </p>
            <p>
              Was wir bewusst <em>nicht</em> machen: Wordpress-Customizing, klassische CMS-Plugins, Salesforce-Implementierung, SAP-Anpassung. Dafür gibt es im Saarland spezialisierte Agenturen, die das besser können als wir.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§2</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Tech-Stack
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-12 max-w-3xl">
              Modern, pragmatisch, in fünf Jahren noch{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">wartbar.</span>
            </h2>
          </FadeInSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stacks.map((s, i) => (
              <FadeInSection key={s.name} delay={i * 0.05}>
                <article className="bg-[var(--background-warm)] rounded-3xl border border-stone-200/70 p-7 h-full">
                  <span className="font-display italic font-normal text-3xl text-[var(--cyan-deep)] leading-none">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-[var(--ink)] tracking-tight">
                    {s.name}
                  </h3>
                  <ul className="mt-5 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-stone-700">
                        <span className="h-1 w-1 rounded-full bg-cyan-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§3</span>
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
                <details className="group bg-white rounded-2xl border border-stone-200/70 px-6 py-5 hover:border-cyan-200 transition-colors">
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

      <Footer />
    </main>
  );
}
