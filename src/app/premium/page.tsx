import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Premium-Pakete | Webdesign & SEO auf Marktführer-Niveau | Fylu Saarland',
  description:
    'Drei klar definierte Premium-Pakete für Saarländer Unternehmen, die in ihrer Branche Marktführer werden wollen. Individuelles Design, SEO-Strategie, Conversion-Optimierung und 90-Tage-Ergebnisgarantie.',
  alternates: { canonical: '/premium' },
  openGraph: {
    title: 'Premium-Pakete | Fylu Webdesign Saarland',
    description:
      'Premium-Webdesign-Pakete für Saarländer Mittelständler. Boutique, Wachstum, Marktführer — mit 90-Tage-Ergebnisgarantie.',
    url: 'https://www.fylumarketing.de/premium',
    type: 'website',
    locale: 'de_DE',
  },
};

type Tier = {
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  description: string;
  highlight?: boolean;
  features: string[];
  ideal: string;
  cta: string;
  ctaHref: string;
};

const tiers: Tier[] = [
  {
    name: 'Boutique',
    price: 'ab 4.500 €',
    priceNote: 'einmalig, netto',
    tagline: 'Premium-Einstieg',
    description:
      'Für ambitionierte Selbstständige und kleine Unternehmen, die ihre Branche im Saarland anführen wollen — mit einer Website, die nicht aus dem Baukasten kommt.',
    features: [
      'Individuelles Premium-Design (Desktop + Mobile)',
      '5 bis 7 sorgfältig konzipierte Seiten',
      'Vollständige technische SEO-Foundation',
      'Schema.org JSON-LD für lokale Sichtbarkeit',
      'Conversion-optimierte Struktur & CTAs',
      'Google-Unternehmensprofil-Setup',
      '90-Tage-Ergebnisgarantie',
      '30 Tage Nach-Launch-Support inklusive',
    ],
    ideal:
      'Ideal für: Solo-Unternehmer, kleine Handwerksbetriebe, Praxen und Kanzleien, die online endlich ernst genommen werden wollen.',
    cta: 'Boutique-Paket anfragen',
    ctaHref: '/angebote?paket=boutique',
  },
  {
    name: 'Wachstum',
    price: 'ab 8.500 €',
    priceNote: 'einmalig, netto',
    tagline: 'Beliebteste Wahl',
    description:
      'Für etablierte Saarländer Mittelständler, die nicht nur eine schöne Website wollen, sondern eine messbare Anfragenmaschine — mit lokaler Sichtbarkeit, die Konkurrenz nicht ignorieren kann.',
    highlight: true,
    features: [
      'Alles aus Boutique, plus:',
      '10 bis 15 Seiten inklusive Branchen-Landingpages',
      'Lokale SEO-Schärfung für 3 Standorte im Saarland',
      'Erweiterte Conversion-Architektur',
      'Google-Unternehmensprofil voll optimiert + Review-Strategie',
      'Lokale Backlink-Strategie (IHK, HWK, Branchenverzeichnisse)',
      '90 Tage gratis Iteration & Performance-Monitoring',
      'Monatlicher Performance-Report',
      '90 Tage Nach-Launch-Support inklusive',
    ],
    ideal:
      'Ideal für: Mittelständische Handwerksbetriebe, Steuer- und Anwaltskanzleien, Restaurants, Hotels und Praxisverbünde, die in ihrer Region erste Wahl sein wollen.',
    cta: 'Wachstums-Paket anfragen',
    ctaHref: '/angebote?paket=wachstum',
  },
  {
    name: 'Marktführer',
    price: 'ab 18.000 €',
    priceNote: 'individuelle Investition',
    tagline: 'Für die, die nicht zweite Wahl sein wollen',
    description:
      'Für Unternehmen, die nicht nur sichtbar sein wollen, sondern in ihrer Branche und Region die offensichtliche erste Wahl. Komplettes Sichtbarkeits-System inklusive bezahlter Reichweite, Editorial-Content und direktem Draht zur Geschäftsführung.',
    features: [
      'Alles aus Wachstum, plus:',
      'Unbegrenzte Seitenanzahl & Inhaltstiefe',
      'Programmatische Landingpages (Branche × Standort)',
      'Komplette Brand-Architektur & Editorial-Content-Plan',
      'Google Ads Setup + initiales 90-Tage-Management',
      'Pressearbeit & lokale PR-Vermittlung',
      '6 Monate gratis Iteration & Strategieanpassung',
      'Wöchentlicher Performance-Call mit Fynn persönlich',
      'Direkter Draht zur Geschäftsführung — Antwort < 4 Std. garantiert',
    ],
    ideal:
      'Ideal für: B2B-Mittelstand, Industriezulieferer, Privatkliniken, Premium-Praxen, regional führende Marken mit Wachstumsambition.',
    cta: 'Marktführer-Gespräch buchen',
    ctaHref: '/angebote?paket=marktfuehrer',
  },
];

const SITE = 'https://www.fylumarketing.de';

export default function PremiumPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Premium-Pakete', item: `${SITE}/premium` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Webdesign, SEO und Google Ads',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Fylu – Webdesign & SEO',
      url: SITE,
      telephone: '+4915168488999',
      email: 'kontakt@fylumarketing.de',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Saarlouis',
        addressRegion: 'Saarland',
        addressCountry: 'DE',
      },
    },
    areaServed: [
      { '@type': 'State', name: 'Saarland' },
      { '@type': 'Country', name: 'Deutschland' },
    ],
    offers: tiers.map((t) => ({
      '@type': 'Offer',
      name: `${t.name} – ${t.tagline}`,
      description: t.description,
      price: t.price.replace(/[^0-9]/g, ''),
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: t.price.replace(/[^0-9]/g, ''),
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
      },
      itemOffered: {
        '@type': 'Service',
        name: `Premium Webdesign – ${t.name}`,
        description: t.description,
      },
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-cyan-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-bold text-cyan-500 uppercase tracking-wider">
                Premium-Pakete
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mt-4 mb-6 text-stone-900 leading-tight">
                Für Unternehmer, die <span className="text-cyan-600">erste Wahl</span> sein wollen.
              </h1>
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
                Drei klar definierte Premium-Pakete für Saarländer Unternehmen, die ihre Branche
                anführen statt mitlaufen wollen. Jedes Paket mit 90-Tage-Ergebnisgarantie,
                individuellem Design und vollständiger SEO-Foundation.
              </p>
              <p className="mt-6 text-sm text-stone-500">
                Sie suchen das Einstiegspaket?{' '}
                <Link
                  href="/#packages"
                  className="text-cyan-600 hover:text-cyan-700 font-semibold underline underline-offset-4"
                >
                  Zum Basismodell ab 990 € →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                    tier.highlight
                      ? 'bg-gradient-to-br from-stone-900 to-stone-800 text-white shadow-2xl lg:scale-105 lg:-my-4'
                      : 'bg-white border border-stone-200'
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                      {tier.tagline}
                    </div>
                  )}

                  <div className="mb-6">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        tier.highlight ? 'text-cyan-400' : 'text-cyan-600'
                      }`}
                    >
                      {!tier.highlight && tier.tagline}
                      {tier.highlight && ' '}
                    </p>
                    <h2
                      className={`text-3xl md:text-4xl font-bold mt-2 ${
                        tier.highlight ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      {tier.name}
                    </h2>
                  </div>

                  <div className="mb-6">
                    <div
                      className={`text-4xl md:text-5xl font-extrabold ${
                        tier.highlight ? 'text-white' : 'text-stone-900'
                      }`}
                    >
                      {tier.price}
                    </div>
                    <p
                      className={`text-sm mt-1 ${
                        tier.highlight ? 'text-stone-300' : 'text-stone-500'
                      }`}
                    >
                      {tier.priceNote}
                    </p>
                  </div>

                  <p
                    className={`text-base leading-relaxed mb-6 ${
                      tier.highlight ? 'text-stone-200' : 'text-stone-700'
                    }`}
                  >
                    {tier.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 text-sm ${
                          tier.highlight ? 'text-stone-100' : 'text-stone-700'
                        }`}
                      >
                        <svg
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            tier.highlight ? 'text-cyan-400' : 'text-cyan-500'
                          }`}
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
                        <span className={i === 0 && feature.startsWith('Alles aus') ? 'font-semibold' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`text-xs leading-relaxed mb-6 italic ${
                      tier.highlight ? 'text-stone-400' : 'text-stone-500'
                    }`}
                  >
                    {tier.ideal}
                  </div>

                  <Link
                    href={tier.ctaHref}
                    className={`block w-full text-center px-6 py-4 rounded-full font-bold transition-all duration-200 active:scale-[0.98] ${
                      tier.highlight
                        ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-lg hover:shadow-[0_12px_40px_rgba(6,182,212,0.4)]'
                        : 'bg-stone-900 hover:bg-stone-800 text-white shadow-md hover:shadow-lg'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-center text-stone-500 text-sm mt-10">
              Alle Preise zzgl. 19 % USt. Zahlung in zwei Raten — 50 % zu Projektstart, 50 % nach
              Abnahme. Auf Wunsch monatliche Ratenzahlung über bis zu 12 Monate möglich.
            </p>
          </div>
        </section>

        {/* Why Premium */}
        <section className="py-20 md:py-24 bg-stone-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-bold text-cyan-500 uppercase tracking-wider">
                  Warum Premium
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-stone-900 leading-tight">
                  Warum Sie keine 9,90-€-Baukasten-Lösung wollen
                </h2>
                <p className="text-lg text-stone-700">
                  Drei Wahrheiten, die jeder Unternehmer kennen sollte, bevor er in eine Website
                  investiert.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    1. Eine Website ist keine Visitenkarte — sie ist Ihr wichtigster Vertriebskanal.
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    Wer Ihre Website in den ersten 5 Sekunden nicht ernst nimmt, ruft auch nicht
                    an. Eine Premium-Website ersetzt im ersten Jahr typischerweise die
                    Akquise-Leistung von 1 bis 3 Außendienstmitarbeitern. Bei dieser Rechnung sind
                    8.500 € keine Ausgabe, sondern eine Investition mit klarer Amortisation.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    2. Lokale Sichtbarkeit ist die billigste Skalierung Ihres Lebens.
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    Wenn jeder Saarländer Kunde, der Ihre Branche googelt, Sie als erstes findet —
                    haben Sie einen Vorsprung, den keine Konkurrenz aufholt. Genau das bauen wir
                    auf. Systematisch, datenbasiert, mit Geduld in 90 Tagen.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-100">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    3. Wir nehmen nur 3 Projekte pro Monat — damit jedes Projekt funktioniert.
                  </h3>
                  <p className="text-stone-700 leading-relaxed">
                    Premium ist kein Etikett, sondern ein Versprechen, das man nur halten kann,
                    wenn man Volumen aktiv begrenzt. Wir tun das. Sie bekommen unsere volle
                    Aufmerksamkeit, persönliche Betreuung und ein Ergebnis, das messbar funktioniert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Welches Paket passt zu Ihnen?
              </h2>
              <p className="text-lg text-stone-700 mb-8">
                15 Minuten am Telefon — und Sie wissen, welches Paket zu Ihrem Unternehmen passt
                und was sich realistisch in 90 Tagen erreichen lässt. Kostenlos, unverbindlich,
                ohne Verkaufsdruck.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/angebote"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-base md:text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
                >
                  Strategiegespräch buchen
                </Link>
                <a
                  href="tel:+4915168488999"
                  className="inline-block bg-white hover:bg-stone-50 text-stone-900 px-8 py-4 rounded-full text-base md:text-lg font-semibold border-2 border-stone-200 transition-all duration-200"
                >
                  Direkt anrufen
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
