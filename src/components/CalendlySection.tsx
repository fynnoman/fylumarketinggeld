'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { WHATSAPP_URL } from '@/lib/contact';

const ease = [0.22, 1, 0.36, 1] as const;

const benefits = [
  {
    title: 'Persönliches Gespräch',
    body: 'Wir hören zu, bevor wir antworten — was Sie vorhaben, wo Sie stehen, was Ihre Website heute leistet.',
  },
  {
    title: 'Konkrete Einschätzung',
    body: 'Sie bekommen eine ehrliche Bewertung Ihrer aktuellen Website und einen Ausblick, wie daraus mehr Kunden werden.',
  },
  {
    title: 'Kein Verkaufsgespräch',
    body: 'Passt es zusammen, sprechen wir über den nächsten Schritt. Passt es nicht, war das Gespräch trotzdem wertvoll.',
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

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-32 pb-16 md:pb-32">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §02
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Erstgespräch buchen
            </span>
          </div>
          <h2
            id="analyse-heading"
            className="text-[2.4rem] sm:text-5xl md:text-7xl lg:text-[6rem] leading-[1.0] sm:leading-[0.98] font-semibold text-[var(--ink)] tracking-[-0.04em]"
          >
            Kostenloses{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Erstgespräch
            </span>
            .
          </h2>
          <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-stone-600 leading-relaxed">
            15 – 30 Minuten. Kostenlos und unverbindlich. Wir hören zu, geben
            eine ehrliche Einschätzung — direkt im Gespräch, nicht in einem
            PDF drei Tage später.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#calendly-embed"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--ink)] text-white px-6 py-3.5 text-sm font-semibold tracking-[0.02em] transition-all duration-300 hover:-translate-y-[1px] shadow-[0_20px_50px_-16px_rgba(12,14,16,0.35)] min-h-[52px]"
            >
              <span>Termin wählen</span>
              <span className="text-cyan-300 transition-transform group-hover:translate-x-0.5">↓</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Per WhatsApp schreiben"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-6 py-3.5 text-sm font-semibold tracking-[0.02em] text-white transition-all duration-300 hover:-translate-y-[1px] shadow-[0_20px_50px_-16px_rgba(37,211,102,0.4)] min-h-[52px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Benefits row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-10 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-10"
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
          className="mt-12 md:mt-20"
        >
          <div id="calendly-embed" className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-[0_30px_80px_-24px_rgba(12,14,16,0.18)] scroll-mt-24">
            {/* Chrome */}
            <div className="flex items-center justify-between px-4 sm:px-5 md:px-7 py-3 md:py-4 border-b border-stone-200/70 bg-white">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-[10px] font-medium tracking-[0.28em] sm:tracking-[0.32em] uppercase text-stone-500">
                  Verfügbar · Erstgespräch
                </span>
              </div>
              <span className="hidden md:inline text-[10px] font-mono tracking-[0.22em] text-stone-400">
                calendly · fylumarketing
              </span>
            </div>

            <CalendlyEmbed />
          </div>

          <p className="mt-6 text-center text-xs text-stone-500 tracking-[0.02em]">
            Kein passender Termin dabei?{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cyan-deep)] hover:text-[var(--ink)] font-semibold underline underline-offset-4 transition-colors"
            >
              Direkt per WhatsApp schreiben
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
          Gespräch
        </div>
      </div>

    </section>
  );
}
