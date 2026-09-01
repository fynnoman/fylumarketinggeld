import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Der Fylu-Prozess · Fünf Kapitel · Editorial Webdesign Saarland',
  description:
    'Fünf Kapitel von der Vorstellung bis zur Wirkung: Vorgespräch, Positionierung, Werkbank, Sichtbarkeit, Iteration. Der Fylu-Prozess für editoriale Websites — geführt aus Saarlouis.',
  alternates: { canonical: '/methodik' },
  openGraph: {
    title: 'Der Fylu-Prozess · Fünf Kapitel',
    description:
      'Fünf Kapitel — Vorgespräch, Positionierung, Werkbank, Sichtbarkeit, Iteration. Editorial Webdesign aus Saarlouis.',
    url: 'https://www.fylumarketing.de/methodik',
    type: 'article',
    locale: 'de_DE',
  },
};

const steps = [
  {
    number: '01',
    title: 'Analyse',
    subtitle: 'Saarland-Marktscan & Sichtbarkeits-Audit',
    body: [
      'Bevor ein Pixel gestaltet wird, machen wir Ihre Ausgangslage transparent. Wir scannen die Top-Wettbewerber in Ihrer Branche im Saarland — wer rankt für welche Suchbegriffe in Saarbrücken, Saarlouis, Homburg oder Völklingen, welche Anzeigen schaltet die Konkurrenz, welche Content-Strategie verfolgt sie.',
      'Parallel prüfen wir Ihre aktuelle Sichtbarkeit bei Google, Bing und in Google Maps, Ihre Klick- und Anfragen-Performance, Ihre technische Foundation und die Conversion-Schwachstellen Ihrer bestehenden Website.',
      'Sie erhalten am Ende einen klaren, schonungslosen Befund — als PDF, mit konkreten Zahlen, Vergleichsdaten und einer Priorisierung der Hebel.',
    ],
    deliverables: [
      'Wettbewerbsanalyse Top-5 lokal',
      'Sichtbarkeits-Report Google + Bing + Maps',
      'Technischer Site-Audit (sofern Website vorhanden)',
      'Schwachstellen-Liste mit Wirkungsbewertung',
    ],
  },
  {
    number: '02',
    title: 'Strategie',
    subtitle: 'Positionierung & Conversion-Architektur',
    body: [
      'Auf Basis der Analyse entwickeln wir Ihre konkrete Positionierung gegenüber Ihrer Saarland-Konkurrenz — wo schlagen Sie alle anderen mühelos, wo müssen Sie nachschärfen, welche Zielgruppe ist tatsächlich profitabel.',
      'Wir definieren die exakten Conversion-Pfade Ihrer neuen Website: Welche Besucher kommen über welche Suchbegriffe rein, welche Frage haben sie, in welcher Reihenfolge müssen Beweise, Argumente und CTAs auf der Seite folgen, damit sie nicht abspringen.',
      'Das Ergebnis ist ein vollständiges Strategie-Dokument — kein Mood-Board, sondern ein Bauplan mit messbaren Annahmen.',
    ],
    deliverables: [
      'Positionierungs-Statement',
      'Zielgruppen-Definition mit Suchverhalten',
      'Conversion-Wireframe pro Seitentyp',
      'Keyword-Strategie lokal + Branche',
    ],
  },
  {
    number: '03',
    title: 'Realisation',
    subtitle: 'Design & Development mit Verkaufsfokus',
    body: [
      'Wir setzen Ihre Website um — individuell designt, in Premium-Optik, technisch sauber, mit moderner Technologie (Next.js, React, optimierte Bilder, höchste Google-Core-Web-Vitals-Werte) und vollständiger SEO-Foundation: Schema.org-Strukturen, sauberes HTML, robuste Sitemap, Open Graph, schnelle Ladezeiten.',
      'Jedes visuelle und textliche Element folgt einem klaren Zweck: Anfragen produzieren. Wir arbeiten in festen Sprints mit klaren Feedback-Runden — kein Verzettelung, keine endlosen Korrekturschleifen.',
      'Sie erhalten regelmäßig sichtbaren Fortschritt in einer Preview-Umgebung — keine 6-Wochen-Black-Box.',
    ],
    deliverables: [
      'Individuelles Design (Desktop + Mobile)',
      'Entwicklung mit moderner Tech-Foundation',
      'Vollständige SEO-Foundation eingebaut',
      'Schema.org JSON-LD für alle Seitentypen',
    ],
  },
  {
    number: '04',
    title: 'Sichtbarkeit',
    subtitle: 'Lokale SEO-Schärfung & Google Business',
    body: [
      'Eine technisch perfekte Website ist die Voraussetzung — aber sie reicht nicht. Damit Saarländer Kunden Sie überhaupt finden, optimieren wir Ihre Sichtbarkeit für die Suchbegriffe, die in Saarbrücken, Saarlouis, Neunkirchen, Dillingen und Völklingen tatsächlich eingegeben werden.',
      'Dazu gehören lokal optimierte Landingpages je Standort und Branche, strukturierte Daten für lokale Geschäfte, ein professionell aufgesetztes Google-Unternehmensprofil mit Bildern, Beiträgen, Bewertungsmanagement, sowie lokale Backlink-Strategie über IHK, HWK, Branchenverzeichnisse und Netzwerke.',
      'Ziel: Wenn jemand im Saarland eine Lösung in Ihrer Branche sucht, taucht Ihr Name auf — bevor die Konkurrenz auch nur Atem holt.',
    ],
    deliverables: [
      'Lokale Landingpages je relevantem Ort',
      'Google-Unternehmensprofil aufgesetzt + optimiert',
      'Lokale Backlink-Strategie (IHK, HWK, Netzwerke)',
      'Branchen-spezifische Snippets & Reviews',
    ],
  },
  {
    number: '05',
    title: 'Skalierung',
    subtitle: '90-Tage-Monitoring & Iteration',
    body: [
      'Mit dem Live-Gang ist die Arbeit nicht vorbei — sie beginnt erst richtig. In den ersten 90 Tagen messen wir genau, was wirklich Anfragen bringt: welche Seiten konvertieren, welche Suchbegriffe Traffic ziehen, wo Besucher abspringen.',
      'Auf Basis dieser realen Daten iterieren wir kostenlos: Wir optimieren Texte, schärfen CTAs, bauen Sektionen um, ergänzen fehlende Seiten — bis die Zahlen stimmen. Sollten in 90 Tagen keine messbar höheren Anfragen reinkommen, optimieren wir so lange weiter, ohne dass es Sie etwas kostet.',
      'Sie zahlen nicht für Theorie — Sie zahlen für ein Ergebnis.',
    ],
    deliverables: [
      '90 Tage gratis Monitoring & Iteration',
      'Wöchentlicher Performance-Report',
      'Datenbasierte Conversion-Optimierung',
      'Ergebnis-Garantie: solange nachoptimieren, bis Anfragen steigen',
    ],
  },
];

const SITE = 'https://www.fylumarketing.de';

export default function MethodikPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Methodik', item: `${SITE}/methodik` },
    ],
  };

  const url = `${SITE}/methodik`;

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${url}#howto`,
    name: 'Das Fylu Sichtbarkeits-System – 5 Schritte zur Marktführerschaft im Saarland',
    description:
      'Bewährtes 5-Schritte-System für Webdesign, lokales SEO und Google Ads im Saarland. Vom Marktscan zur skalierbaren Anfragenmaschine in 90 Tagen.',
    totalTime: 'P90D',
    inLanguage: 'de-DE',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `${s.number}: ${s.title}`,
      text: s.body.join(' '),
      itemListElement: s.deliverables.map((d) => ({
        '@type': 'HowToDirection',
        text: d,
      })),
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: 'Der Fylu-Prozess: Fünf Kapitel von Analyse bis Wirkung',
    description:
      'Methodik des Fylu Studios: Analyse, Strategie, Realisation, Sichtbarkeit, Skalierung. Ein editorial geführter 5-Schritte-Prozess für Webdesign, SEO und Google Ads im Saarland.',
    mainEntityOfPage: url,
    inLanguage: 'de-DE',
    author: { '@id': `${SITE}/#fynn-schulz` },
    publisher: { '@id': `${SITE}/#organization` },
    about: [
      { '@type': 'Thing', name: 'Editorial Webdesign' },
      { '@type': 'Thing', name: 'Local SEO' },
      { '@type': 'Thing', name: 'Google Ads' },
      { '@type': 'Thing', name: 'Conversion-Analyse' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]'],
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: 'Der Fylu-Prozess · Fünf Kapitel',
    description:
      'Fünf Kapitel von Analyse bis Wirkung: der Fylu-Prozess für editoriale Websites, lokales SEO und Google Ads. Aus Saarlouis.',
    inLanguage: 'de-DE',
    isPartOf: { '@id': `${SITE}/#website` },
    mainEntity: { '@id': `${url}#howto` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]'],
    },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-cyan-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-bold text-cyan-500 uppercase tracking-wider">
                Unsere Methodik
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mt-4 mb-6 text-stone-900 leading-tight">
                Das Fylu{' '}
                <span className="text-cyan-600">Sichtbarkeits-System</span>
              </h1>
              <p data-speakable className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
                Unser bewährtes 5-Schritte-System für Saarländer Unternehmen — vom ersten
                Marktscan bis zur skalierbaren Anfragenmaschine. Keine Bauchentscheidungen, keine
                Standard-Templates, keine Versprechen ohne Beweis.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                  href="/buchen"
                  className="block text-center bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-7 py-4 rounded-full text-base font-bold shadow-md transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
                >
                  Strategiegespräch buchen
                </Link>
                <Link
                  href="#schritt-01"
                  className="block text-center bg-white hover:bg-stone-50 text-stone-900 px-7 py-4 rounded-full text-base font-semibold border-2 border-stone-200 transition-all duration-200"
                >
                  Schritte ansehen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
              {steps.map((step, idx) => (
                <div
                  key={step.number}
                  id={`schritt-${step.number}`}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start scroll-mt-32"
                >
                  <div className="lg:col-span-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-extrabold text-2xl shadow-lg mb-5">
                      {step.number}
                    </div>
                    <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-2">
                      {step.subtitle}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                      {step.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-8 space-y-5">
                    {step.body.map((para, i) => (
                      <p
                        key={i}
                        className={`text-stone-700 leading-relaxed ${
                          i === 0 ? 'text-lg md:text-xl' : 'text-base md:text-lg'
                        }`}
                      >
                        {para}
                      </p>
                    ))}

                    <div className="bg-stone-50 rounded-2xl border border-stone-100 p-6 mt-6">
                      <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                        Was Sie konkret bekommen
                      </p>
                      <ul className="space-y-2">
                        {step.deliverables.map((d, i) => (
                          <li key={i} className="flex items-start gap-3 text-stone-800">
                            <svg
                              className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-24 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Bereit, das Mittelmaß zu verlassen?
              </h2>
              <p className="text-lg text-stone-700 mb-8">
                Im 15-Minuten-Strategiegespräch klären wir, ob das Fylu Sichtbarkeits-System zu
                Ihrem Unternehmen passt. Kostenlos, unverbindlich, ohne Verkaufsdruck.
              </p>
              <Link
                href="/buchen"
                className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
              >
                Strategiegespräch buchen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
