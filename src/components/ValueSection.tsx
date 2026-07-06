'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ValueSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-28 md:py-36 px-5 md:px-8 bg-[var(--background-warm)] overflow-hidden isolate"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[60vw] h-[50vw] opacity-90"
          style={{
            background:
              'radial-gradient(50% 50% at 70% 30%, rgba(6,182,212,0.16), transparent 70%)',
          }}
        />
        <div className="noise-overlay opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Eyebrow + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <div className="mb-5 flex items-baseline gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §IV
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Was uns trennt
            </span>
          </div>
          <h2 className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
            Kein Studio unter vielen.{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Ein Haus mit Handschrift.
            </span>
          </h2>
          <p className="mt-7 text-lg text-stone-600 max-w-2xl leading-relaxed">
            Wir arbeiten mit einer bewusst kleinen Zahl an Klienten — tiefe
            Verantwortung pro Projekt, direkte Führung, keine Ticket-Systeme, kein
            Account-Management-Theater.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(220px,auto)]">
          {/* Tile 1 — Hero tile (large, dark) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="relative md:col-span-4 md:row-span-2 rounded-3xl bg-[var(--ink)] text-white p-8 md:p-10 overflow-hidden group"
          >
            {/* Cyan glow */}
            <motion.div
              animate={{
                opacity: [0.6, 0.9, 0.6],
                scale: [1, 1.06, 1],
              }}
              transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
              className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(6,182,212,0.45), transparent 60%)',
              }}
            />
            {/* Grain */}
            <div className="noise-overlay opacity-40 mix-blend-overlay" />

            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/8 border border-white/12 mb-6">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-stone-300">
                    Ein Haus. Eine Handschrift.
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-[2.7rem] font-semibold leading-[1.08] tracking-[-0.025em] max-w-lg">
                  Volle Hingabe.{' '}
                  <span className="font-display italic font-normal text-cyan-300">
                    Keine Massenware.
                  </span>
                </h3>
                <p className="mt-5 text-stone-300 text-base leading-relaxed max-w-md">
                  Zwölf Klienten pro Jahr. Persönliche Führung durch den
                  Studio-Lead über die gesamte Strecke. Direkter Draht — ohne
                  Umweg über Account-Manager oder Ticket-Warteschlangen.
                </p>
              </div>

              {/* Stat row */}
              <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="font-display text-[2.4rem] leading-none italic font-normal text-white">
                    12
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mt-1.5">
                    Klienten · Jahr
                  </div>
                </div>
                <div>
                  <div className="font-display text-[2.4rem] leading-none italic font-normal text-cyan-300">
                    100<span className="text-stone-400 text-2xl">%</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mt-1.5">
                    Direkter Draht
                  </div>
                </div>
                <div>
                  <div className="font-display text-[2.4rem] leading-none italic font-normal text-white">
                    0
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mt-1.5">
                    Account-Manager
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tile 2 — Faire Preise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative md:col-span-2 rounded-3xl bg-white border border-stone-200/80 p-7 overflow-hidden group hover:border-cyan-200 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-cyan-50/0 group-hover:from-cyan-50/60 group-hover:to-transparent transition-all duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-stone-100 group-hover:bg-cyan-50 transition-colors mb-5">
                <svg className="w-5 h-5 text-stone-700 group-hover:text-cyan-700 transition-colors" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M5 9h10c1.5 0 3 1 3 3s-1.5 3-3 3H7c-1.5 0-3 1-3 3s1.5 3 3 3h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">
                Kuratierte Konditionen
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mt-2">
                Jedes Projekt wird persönlich kalkuliert. Der Ausgangspreis steht — der Umfang folgt der Substanz, nicht dem Formular.
              </p>
            </div>
          </motion.div>

          {/* Tile 3 — Direkter Draht */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="relative md:col-span-2 rounded-3xl bg-white border border-stone-200/80 p-7 overflow-hidden group hover:border-cyan-200 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-cyan-50/0 group-hover:from-cyan-50/60 group-hover:to-transparent transition-all duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-stone-100 group-hover:bg-cyan-50 transition-colors mb-5">
                <svg className="w-5 h-5 text-stone-700 group-hover:text-cyan-700 transition-colors" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">
                Direkter Draht
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mt-2">
                Sie sprechen mit dem Studio-Lead — Strategie, Design und Umsetzung
                in einer Handschrift. Keine Telefonkette, keine Übersetzungsverluste.
              </p>
            </div>
          </motion.div>

          {/* Tile 4 — Measurable Results, wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="relative md:col-span-4 rounded-3xl border border-stone-200/80 p-7 md:p-9 overflow-hidden group bg-gradient-to-br from-white to-stone-50"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-cyan-50 mb-5">
                  <svg className="w-5 h-5 text-cyan-700" viewBox="0 0 24 24" fill="none">
                    <path d="M3 17l6-6 4 4 8-8M14 7h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[var(--ink)] tracking-tight leading-tight">
                  Wirkung, die man{' '}
                  <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                    messen kann.
                  </span>
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mt-3 max-w-md">
                  Jede Website wird auf konkrete Kennzahlen ausgerichtet — Anfragen,
                  Anrufe, sortierte Kaufentscheidungen. Mit neunzig Tagen Iteration
                  nach Live-Gang.
                </p>
              </div>
              {/* Mini chart */}
              <div className="relative h-28 flex items-end gap-1.5">
                {[28, 35, 30, 48, 42, 60, 58, 75, 70, 88, 82, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    animate={isInView ? { height: `${h}%`, opacity: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + i * 0.05,
                      ease,
                    }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500 to-cyan-300"
                    style={{ minHeight: '8px' }}
                  />
                ))}
                <div className="absolute -top-1 right-0 px-2 py-0.5 rounded-md bg-[var(--ink)] text-white text-[10px] font-semibold">
                  +184% Anfragen
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
