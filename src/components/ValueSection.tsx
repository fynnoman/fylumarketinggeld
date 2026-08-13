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
      {/* Atmosphere — coloured blobs that refract through the glass tiles */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35]"
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
          aria-hidden
          className="glass-bloom-cyan absolute top-[8%] right-[4%] w-[48vw] h-[48vw] max-w-[620px] max-h-[620px] rounded-full"
        />
        <div
          aria-hidden
          className="glass-bloom-warm absolute bottom-[10%] left-[6%] w-[36vw] h-[36vw] max-w-[420px] max-h-[420px] rounded-full opacity-70"
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
            Persönlich geführt.{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Direkt umgesetzt.
            </span>
          </h2>
          <p className="mt-7 text-lg text-stone-600 max-w-2xl leading-relaxed">
            Eine Person konzipiert, gestaltet und macht Ihre Website sichtbar. Kurze Wege, klare Verantwortung.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(220px,auto)]">
          {/* Tile 1 — Hero tile (large, ink glass) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="relative md:col-span-4 md:row-span-2 rounded-3xl glass-ink text-white p-8 md:p-10 overflow-hidden group"
          >
            <span className="glass-edge glass-edge-dark" aria-hidden />
            {/* Cyan bloom behind the glass, feels like light refracting */}
            <div
              aria-hidden
              className="glass-bloom-cyan absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full opacity-90"
            />
            <div className="glass-caustic" aria-hidden />
            <div className="noise-overlay opacity-40 mix-blend-overlay" />

            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full glass-chip-ink mb-6">
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
                  Zwölf Klienten pro Jahr. Direkter Draht — kein Ticket, kein Umweg.
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
            className="relative md:col-span-2 rounded-3xl glass p-7 overflow-hidden group"
          >
            <span className="glass-edge" aria-hidden />
            <div aria-hidden className="glass-bloom-cyan absolute -bottom-20 -right-16 w-64 h-64 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 group-hover:border-cyan-200 transition-colors mb-5">
                <svg className="w-5 h-5 text-stone-700 group-hover:text-cyan-700 transition-colors" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v20M5 9h10c1.5 0 3 1 3 3s-1.5 3-3 3H7c-1.5 0-3 1-3 3s1.5 3 3 3h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">
                Kuratierte Konditionen
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mt-2">
                Persönlich kalkuliert. Der Umfang folgt der Substanz, nicht dem Formular.
              </p>
            </div>
          </motion.div>

          {/* Tile 3 — Direkter Draht */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="relative md:col-span-2 rounded-3xl glass p-7 overflow-hidden group"
          >
            <span className="glass-edge" aria-hidden />
            <div aria-hidden className="glass-bloom-warm absolute -top-20 -left-16 w-64 h-64 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 group-hover:border-cyan-200 transition-colors mb-5">
                <svg className="w-5 h-5 text-stone-700 group-hover:text-cyan-700 transition-colors" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">
                Direkter Draht
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mt-2">
                Sie sprechen mit dem Studio-Lead. Strategie, Design, Umsetzung — eine Handschrift.
              </p>
            </div>
          </motion.div>

          {/* Tile 4 — Measurable Results, wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="relative md:col-span-4 rounded-3xl glass p-7 md:p-9 overflow-hidden group"
          >
            <span className="glass-edge" aria-hidden />
            <div aria-hidden className="glass-bloom-cyan absolute -bottom-24 right-[10%] w-72 h-72 rounded-full opacity-60" />
            <div className="relative grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/70 backdrop-blur-md border border-cyan-100 mb-5">
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
                  Anfragen, Anrufe, sortierte Kaufentscheidungen. 90 Tage Iteration nach Live-Gang.
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
                    className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500 to-cyan-300 shadow-[0_0_18px_-4px_rgba(6,182,212,0.6)]"
                    style={{ minHeight: '8px' }}
                  />
                ))}
                <div className="absolute -top-1 right-0 px-2 py-0.5 rounded-md glass-chip-ink text-white text-[10px] font-semibold">
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
