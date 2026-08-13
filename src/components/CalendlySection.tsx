'use client';

import { motion, useInView } from 'framer-motion';
import Script from 'next/script';
import { useRef } from 'react';

const CALENDLY_URL =
  'https://calendly.com/fynn-taskeyapp/fylu-marketing-kostenloses-erstgesprach?background_color=faf9f6&text_color=0c0e10&primary_color=0e7490&hide_gdpr_banner=1&hide_event_type_details=0';

const ease = [0.22, 1, 0.36, 1] as const;

const benefits = [
  {
    title: 'Konkrete Diagnose',
    body: 'Wir zeigen im Gespräch, wo Ihre Website Besucher verliert — mit Beispielen aus Ihrem eigenen Auftritt.',
  },
  {
    title: 'Bessere Lösung skizziert',
    body: 'Sie sehen direkt, wie derselbe Besucher zum Kunden werden kann. Keine allgemeinen Empfehlungen.',
  },
  {
    title: 'Kein Verkaufsgespräch',
    body: 'Sie bekommen die Analyse. Passt es zusammen, sprechen wir über den Entwurf. Passt es nicht, war es trotzdem wertvoll.',
  },
];

export default function CalendlySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="analyse"
      aria-labelledby="analyse-heading"
      className="relative bg-[var(--background-warm)] overflow-hidden scroll-mt-24 isolate border-t border-stone-200/60"
    >
      {/* Ambient blooms */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="glass-bloom-cyan absolute top-[8%] right-[6%] w-[36vw] h-[36vw] max-w-[520px] max-h-[520px] rounded-full opacity-70" />
        <div className="glass-bloom-warm absolute bottom-[6%] left-[4%] w-[30vw] h-[30vw] max-w-[420px] max-h-[420px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-24 md:pb-32">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §04
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Analyse buchen
            </span>
          </div>
          <h2
            id="analyse-heading"
            className="text-[2.6rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold text-[var(--ink)] tracking-[-0.04em]"
          >
            Termin{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              direkt sichern
            </span>
            .
          </h2>
          <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-stone-600 leading-relaxed">
            30 Minuten. Kostenlos. Wir schauen gemeinsam auf Ihre aktuelle
            Website und Sie erhalten eine konkrete Einschätzung — nicht später,
            sondern im Gespräch.
          </p>
        </motion.div>

        {/* Benefits row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-14 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-10"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.08, ease }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                  0{i + 1}
                </span>
                <span className="rule-tick text-stone-400" />
              </div>
              <h3 className="text-[15px] font-semibold text-[var(--ink)] tracking-tight">
                {b.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {b.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Calendly inline embed */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="mt-14 md:mt-20"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-[0_30px_80px_-24px_rgba(12,14,16,0.18)]">
            {/* Chrome */}
            <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-stone-200/70 bg-white">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-[10px] font-medium tracking-[0.32em] uppercase text-stone-500">
                  Verfügbar · Website-Analyse
                </span>
              </div>
              <span className="hidden md:inline text-[10px] font-mono tracking-[0.22em] text-stone-400">
                calendly · fylumarketing
              </span>
            </div>

            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{
                minWidth: '320px',
                height: '720px',
                background: 'var(--background-warm)',
              }}
            />
          </div>

          <p className="mt-6 text-center text-xs text-stone-500 tracking-[0.02em]">
            Kein passender Termin dabei?{' '}
            <a
              href="mailto:kontakt@fylumarketing.de"
              className="text-[var(--cyan-deep)] hover:text-[var(--ink)] font-semibold underline underline-offset-4 transition-colors"
            >
              kontakt@fylumarketing.de
            </a>
          </p>
        </motion.div>
      </div>

      {/* Big background outline label */}
      <div
        aria-hidden
        className="absolute -bottom-[4vw] left-[-4vw] pointer-events-none select-none"
      >
        <div className="text-outline font-display italic font-normal text-[22vw] leading-[0.85] opacity-30">
          Termin
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
