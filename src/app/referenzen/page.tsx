import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CaseBlock } from '@/components/HorizontalCases';
import { references } from '@/lib/references';

const SITE = 'https://www.fylumarketing.de';
const URL = `${SITE}/referenzen`;

export const metadata: Metadata = {
  title: 'Referenzen · Fylu Marketing',
  description:
    'Alle Projekte von Fylu Marketing auf einen Blick. Websites, Markenaufbau, SEO und technische Infrastruktur für Unternehmen und Vereine im Saarland.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Referenzen · Fylu Marketing',
    description:
      'Websites, Markenaufbau, SEO und technische Infrastruktur für Unternehmen und Vereine im Saarland.',
    url: URL,
    siteName: 'Fylu Marketing',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/herob.png', width: 1200, height: 630, alt: 'Fylu Marketing · Referenzen' }],
  },
};

export default function ReferenzenPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[var(--background-warm)]">
        <section className="relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 md:pt-44 pb-10 md:pb-24">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-baseline gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                  §
                </span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Alle Referenzen
                </span>
              </div>
              <h1 className="text-[2.6rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold text-[var(--ink)] tracking-[-0.04em]">
                Projekte,{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  die bleiben
                </span>
                .
              </h1>
              <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-stone-600 leading-relaxed">
                Eine vollständige Übersicht aller Projekte, die Fylu Marketing bisher
                umgesetzt hat. Jedes Projekt steht für ein eigenes Vorhaben, eine eigene
                Marke und eine eigene technische Grundlage.
              </p>

              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-stone-400 font-medium">
                <span className="rule-tick text-stone-400" />
                <span>{references.length} Projekte · seit 2024</span>
              </div>
            </div>
          </div>

          {/* Big background outline label */}
          <div
            aria-hidden
            className="absolute top-[6%] right-[-4vw] pointer-events-none select-none rotate-[8deg] origin-top-right"
          >
            <div className="text-outline font-display italic font-normal text-[16vw] leading-none opacity-30">
              Referenzen
            </div>
          </div>
        </section>

        <div className="relative z-10 space-y-20 md:space-y-40 pb-20 md:pb-40">
          {references.map((c, i) => (
            <CaseBlock key={c.slug} data={c} index={i} />
          ))}
        </div>

        <section className="relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-stone-200/80 pt-10">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em] leading-tight">
                  Ein Projekt im Kopf?
                </h2>
                <p className="mt-3 text-stone-600 text-[15px] md:text-base leading-relaxed">
                  Ein kurzes Gespräch reicht, um zu klären, ob ein gemeinsames Projekt
                  Sinn ergibt und wie der nächste Schritt aussieht.
                </p>
              </div>
              <Link
                href="/buchen"
                className="group inline-flex items-center gap-2 self-start md:self-auto btn-glass-ink px-5 py-3 rounded-full text-[13px] font-semibold"
              >
                <span className="btn-glass-shine" aria-hidden />
                <span className="relative">Projekt anfragen</span>
                <span className="relative text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
