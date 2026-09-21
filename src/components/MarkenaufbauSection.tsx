'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type Step = {
  num: string;
  title: string;
  text: string;
};

const steps: Step[] = [
  {
    num: '01',
    title: 'Foundation',
    text: 'Geschäftsmodell, Zielgruppe, USP und Markenpersönlichkeit. Ein Briefing, das alle weiteren Entscheidungen trägt.',
  },
  {
    num: '02',
    title: 'Positionierung',
    text: 'Kernbotschaft, Claim und bei Bedarf Naming, Domain und Handles. Ein Satz, der die Marke erklärt.',
  },
  {
    num: '03',
    title: 'Identität',
    text: 'Logo, Farben, Typografie und Bildsprache. Ein Brand Kit, das alle Medien zusammenhält.',
  },
  {
    num: '04',
    title: 'Touchpoints',
    text: 'Visitenkarten, Print, Beschilderung, Verpackung, Arbeitskleidung. Alles, was Kunden anfassen.',
  },
  {
    num: '05',
    title: 'Digitale Präsenz',
    text: 'Website, E-Mail, Tracking und Rechtstexte. Die Marke bekommt ihre digitale Heimat.',
  },
  {
    num: '06',
    title: 'Sichtbarkeit',
    text: 'Google Business, Local SEO, Verzeichnisse und GEO. Die Marke wird auffindbar.',
  },
  {
    num: '07',
    title: 'Launch',
    text: 'Fotos, erste Beiträge, Bewertungen, Netzwerk und Eröffnungsaktion. Kein stiller Website-Launch.',
  },
  {
    num: '08',
    title: 'Wachstum',
    text: 'SEO, GEO, Ads, Landingpages und Automatisierung. Aus der Marke wird ein Geschäft.',
  },
];

export default function MarkenaufbauSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="markenaufbau"
      ref={ref}
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)] overflow-hidden isolate"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 78%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 78%)',
          }}
        />
        <div
          aria-hidden
          className="glass-bloom-warm absolute top-[12%] -right-[6%] w-[42vw] h-[42vw] max-w-[520px] max-h-[520px] rounded-full opacity-60"
        />
        <div
          aria-hidden
          className="glass-bloom-cyan absolute bottom-[8%] -left-[8%] w-[38vw] h-[38vw] max-w-[460px] max-h-[460px] rounded-full opacity-55"
        />
        <div className="noise-overlay opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Eyebrow + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="mb-5 flex items-baseline gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §02b
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Vom Namen zur Marke
            </span>
          </div>
          <h2 className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
            Markenaufbau.{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              In acht Schritten.
            </span>
          </h2>
          <p className="mt-7 text-lg text-stone-600 max-w-2xl leading-relaxed">
            Auch wer nur mit einer Geschäftsidee kommt, verlässt uns mit einer fertigen Marke. Wir bauen Unternehmen vom ersten Namen bis zur skalierbaren Marke in einer klaren Reihenfolge.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease }}
              className="relative rounded-2xl glass p-6 overflow-hidden group"
            >
              <span className="glass-edge" aria-hidden />
              <div className="relative">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display italic text-[var(--cyan-deep)] text-3xl leading-none">
                    {step.num}
                  </span>
                  <span className="h-px flex-1 bg-stone-200/80 translate-y-[-6px]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--ink)] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-stone-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-10 md:mt-14 max-w-3xl"
        >
          <p className="text-sm text-stone-500 leading-relaxed">
            Nicht jede Marke braucht alle acht Schritte. Wir definieren im Briefing, was relevant ist, und arbeiten die passenden Etappen ab. So fühlt sich eure Gründung ab Tag 1 nach einer fertigen Firma an.
          </p>
          <div className="mt-6">
            <Link
              href="/branding-agentur-saarland"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--ink)] hover:text-[var(--cyan-deep)] transition-colors"
            >
              <span className="border-b border-stone-300 group-hover:border-[var(--cyan-deep)] pb-0.5 transition-colors">
                Zur Branding-Agentur Saarland
              </span>
              <span className="text-[var(--cyan-deep)] transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
