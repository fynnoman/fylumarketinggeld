import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
  {
    q: 'Was kostet es, eine App entwickeln zu lassen?',
    a: 'Die Konditionen hängen stark vom Funktionsumfang ab — einfache PWA, mittelgroße Apps mit mehreren Modulen oder komplexe SaaS-/Marketplace-Apps. Wir arbeiten mit transparenten Konditionen — keine Stundensätze, keine Überraschungen. Konkrete Einschätzung nach einem 15-Minuten-Gespräch.',
  },
  {
    q: 'iOS, Android oder Web-App — was passt für mein Projekt?',
    a: 'Faustregel: Web-App / PWA, wenn die App ein Tool ist und vor allem auf dem Schreibtisch genutzt wird (z.B. CRM, ERP, internes Dashboard). Native App (React Native für iOS + Android gleichzeitig), wenn Push-Notifications, Kamera, GPS, Offline-Modus oder App-Store-Präsenz wichtig sind. Wir empfehlen ehrlich basierend auf Ihrem Use-Case — auch wenn Sie die billigere Variante brauchen.',
  },
  {
    q: 'Wie lange dauert die App-Entwicklung?',
    a: 'MVP / einfache Web-App: 6–10 Wochen. Mittelgroße App: 3–5 Monate. Komplexe Plattform: 6–12 Monate. Alle Projekte werden in 2-Wochen-Sprints umgesetzt, mit funktionsfähigen Zwischenständen — Sie sehen Fortschritt regelmäßig, nicht erst am Ende.',
  },
  {
    q: 'Bekomme ich eine App-Store-Veröffentlichung mit?',
    a: 'Ja. Für native Apps übernehmen wir den kompletten Apple App Store und Google Play Store Submission-Prozess — inklusive Screenshots, App-Beschreibung, Privacy-Policy-Setup und Beantwortung von Reviewer-Rückfragen. Erste Submission ist im Paket enthalten.',
  },
  {
    q: 'Was passiert nach dem Launch?',
    a: 'Sie bekommen 30 Tage kostenlosen Bug-Fix-Support nach Live-Gang. Danach: optional Wartungspaket (Updates, Security-Patches, Store-Compliance) oder feature-basierte Weiterentwicklung. Beides transparent monatlich kündbar.',
  },
  {
    q: 'Gehört mir der App-Code?',
    a: 'Ja, immer. Vollständiger Quellcode-Export nach Abnahme, alle Konten (Apple Developer, Google Play, Datenbank) bleiben in Ihrem Namen. Keine Vendor-Locks.',
  },
  {
    q: 'Habt ihr App-Referenzen?',
    a: 'Ja. Taskey ist eine SaaS-Web-App, die wir für die Gebäudereinigungsbranche entwickelt haben — produktiv im Einsatz, mehrere hundert Nutzer. Weitere Web-Apps und PWAs für Saarländer und deutsche Mittelständler. Konkrete Cases auf Anfrage.',
  },
];

const types = [
  {
    name: 'Web-App / SaaS',
    price: 'Auf Anfrage',
    body: 'Vollständige Webanwendung mit Login, Datenbank, Bezahlung, Admin-Bereich. Läuft im Browser, keine Installation nötig.',
    perfect: 'Tools für Mitarbeiter, B2B-SaaS, Kundenportale',
  },
  {
    name: 'PWA (Progressive Web App)',
    price: 'Auf Anfrage',
    body: 'Web-App mit nativem Look auf dem Smartphone: Home-Icon, Offline-Funktion, Push-Notifications. Kein App-Store nötig.',
    perfect: 'Field-Service, mobile Tools, schnell launchen',
  },
  {
    name: 'iOS + Android (React Native)',
    price: 'Auf Anfrage',
    body: 'Native App für beide Plattformen aus einer Codebasis. App-Store-Präsenz, alle Geräte-Features (Kamera, GPS, Push).',
    perfect: 'Consumer-Apps, App-Store-Listing wichtig',
  },
  {
    name: 'Hybrid / Custom Stack',
    price: 'auf Anfrage',
    body: 'Spezielle Anforderungen? AR/VR? Hardware-Anbindung? Wir beraten ehrlich und bauen mit dem passenden Tech-Stack.',
    perfect: 'Spezialprojekte, Hardware-Integration',
  },
];

export default function AppEntwickelnLassenPage() {
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
                name: 'App entwickeln lassen',
                item: 'https://www.fylumarketing.de/app-entwickeln-lassen',
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
            serviceType: 'App-Entwicklung',
            name: 'App entwickeln lassen Saarland',
            description:
              'App-Entwicklung aus dem Saarland: Web-Apps, PWAs, iOS- und Android-Apps mit React Native. Projekte mit transparenten Konditionen.',
            url: 'https://www.fylumarketing.de/app-entwickeln-lassen',
            provider: {
              '@type': 'Organization',
              '@id': 'https://www.fylumarketing.de/#organization',
            },
            areaServed: [
              { '@type': 'State', name: 'Saarland' },
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
            <span className="text-stone-900 font-medium">App entwickeln lassen</span>
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
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeInSection>
            <div className="editorial-eyebrow mb-6">
              <span>Erweiterung · App-Entwicklung</span>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.08}>
            <h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.6rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em] max-w-4xl">
              App entwickeln lassen —{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                als Erweiterung des Studios.
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.16}>
            <p className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-3xl">
              Web-Apps, PWAs, iOS und Android — entwickelt aus Saarlouis. Mit
              einem Stack, der auch in fünf Jahren noch wartbar ist (React Native,
              Next.js, TypeScript, Cloud-Native). App-Store-fertig, mit Studio-Begleitung.
              Kuratierter Rahmen pro Vorhaben. Mehr Tiefe zur{' '}
              <Link href="/software-saarland" className="text-cyan-700 font-medium hover:underline underline-offset-4">Software-Entwicklung</Link>.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.24}>
            <Link
              href="/buchen"
              className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
            >
              <span>Discovery-Vorgespräch</span>
              <span className="text-cyan-400">→</span>
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* App-Typen */}
      <section className="py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§1</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                App-Typen
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-12 max-w-3xl">
              Welche App-Art passt zu{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">Ihrem Vorhaben?</span>
            </h2>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-5">
            {types.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.06}>
                <article className="h-full bg-white rounded-3xl border border-stone-200/70 p-7 hover:border-cyan-200 transition-all">
                  <div className="flex items-baseline justify-between gap-3 mb-4">
                    <span className="font-display italic font-normal text-3xl text-[var(--cyan-deep)] leading-none">
                      0{i + 1}
                    </span>
                    <span className="font-display italic font-normal text-xl text-[var(--ink)]">
                      {t.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">{t.name}</h3>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">{t.body}</p>
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-stone-400 font-semibold">
                      Perfekt für
                    </span>
                    <p className="mt-1 text-sm text-stone-700">{t.perfect}</p>
                  </div>
                </article>
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
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl">§2</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Häufige Fragen
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--ink)] tracking-[-0.035em] leading-[1.05] mb-12">
              Was Sie sich{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">vorher</span>{' '}
              fragen sollten.
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

      <Footer />
    </main>
  );
}
