import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NAME = 'Fynn Schulz';
const CITY = 'Saarlouis';

export const metadata: Metadata = {
  title: 'Über mich · Fynn Schulz · Fylu Marketing Saarlouis',
  description:
    'Fylu Marketing wird von Fynn Schulz geführt. Website, SEO, Google Ads und Software aus einer Hand — für Unternehmen jeder Phase, die online sichtbar werden und wachsen wollen.',
  alternates: { canonical: 'https://www.fylumarketing.de/team' },
  openGraph: {
    title: 'Über mich · Fynn Schulz · Fylu Marketing',
    description:
      'Ein Ansprechpartner für Website, SEO, Google Ads und Software. Aus Saarlouis, für Unternehmen deutschlandweit.',
    url: 'https://www.fylumarketing.de/team',
    type: 'profile',
  },
};

export default function TeamPage() {
  return (
    <main className="bg-[var(--background-warm)] text-[var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            '@id': 'https://www.fylumarketing.de/team#aboutpage',
            url: 'https://www.fylumarketing.de/team',
            name: 'Über mich · Fynn Schulz · Fylu Marketing',
            inLanguage: 'de-DE',
            mainEntity: {
              '@type': 'Person',
              name: NAME,
              jobTitle: 'Gründer und Ansprechpartner',
              worksFor: {
                '@type': 'Organization',
                name: 'Fylu Marketing',
                url: 'https://www.fylumarketing.de',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: CITY,
                addressCountry: 'DE',
              },
            },
          }),
        }}
      />

      <Navbar />

      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Über mich
            </span>
          </div>

          <h1 className="text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em]">
            {NAME}.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-stone-700 leading-relaxed">
            Ich bin Gründer von Fylu Marketing und Ihr Ansprechpartner vom
            ersten Gespräch bis zum Live-Gang. Ich helfe Unternehmen jeder
            Phase, online sichtbar zu werden und aus dieser Sichtbarkeit
            planbare Anfragen zu machen.
          </p>

          <p className="mt-6 text-base md:text-lg text-stone-600 leading-relaxed">
            Website, SEO, Google Ads und Software kommen bei mir aus einer
            Hand. Kein Account-Manager, keine ausgelagerte Produktion. Sie
            sprechen direkt mit der Person, die Ihr Projekt konzipiert, baut
            und sichtbar macht.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-semibold mb-2">
                Rolle
              </div>
              <div className="text-[var(--ink)]">Gründer &amp; Ansprechpartner</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-semibold mb-2">
                Standort
              </div>
              <div className="text-[var(--ink)]">{CITY}, Saarland</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-semibold mb-2">
                Arbeitsweise
              </div>
              <div className="text-[var(--ink)]">Remote &amp; vor Ort</div>
            </div>
          </div>

          <div className="mt-14 border-t border-stone-200/80 pt-10">
            <h2 className="text-xl font-semibold tracking-tight mb-4">
              Was ich für Sie tue
            </h2>
            <ul className="space-y-3 text-stone-700">
              <li className="flex gap-3">
                <span className="text-[var(--cyan-deep)] mt-1">·</span>
                <span>Websites, die Besucher zu Anfragen machen — sauber gebaut, mobil zuverlässig, ohne Templates.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--cyan-deep)] mt-1">·</span>
                <span>SEO und Sichtbarkeit auf Google und in AI-Antworten — lokal und überregional.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--cyan-deep)] mt-1">·</span>
                <span>Google Ads mit sauberem Tracking und ehrlichem Reporting.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--cyan-deep)] mt-1">·</span>
                <span>Software und Apps, wenn die Website allein nicht reicht — CRM-Anbindungen, Buchungssysteme, eigene Tools.</span>
              </li>
            </ul>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-3">
            <Link
              href="/buchen"
              className="inline-flex items-center justify-center gap-2 bg-[var(--ink)] text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:-translate-y-[1px] transition-transform min-h-[52px]"
            >
              Erstgespräch buchen
              <span className="text-cyan-300">→</span>
            </Link>
            <a
              href="mailto:kontakt@fylumarketing.de"
              className="inline-flex items-center justify-center gap-2 border border-stone-300 text-[var(--ink)] px-6 py-3.5 rounded-full text-sm font-semibold hover:border-cyan-400 transition-colors min-h-[52px]"
            >
              kontakt@fylumarketing.de
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
