'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import LazyVideo from './LazyVideo';
import { HandStrike, HandUnderline, HandArrow } from './marks/HandMarks';

const ease = [0.22, 1, 0.36, 1] as const;

const problems = [
  {
    short: 'Veraltet',
    long: 'Die alte Präsenz atmet den Ton von gestern und passt nicht mehr zu dem, was Ihr Haus heute ist.',
  },
  {
    short: 'Mobil zerbricht',
    long: 'Mobile Besucher wenden sich ab, bevor die Seite überhaupt gelesen wurde — keine Führung, kein Rhythmus.',
  },
  {
    short: 'Ohne Sog',
    long: 'Keine klare Handlungsführung. Besucher wissen nicht, wohin die Seite sie führen möchte.',
  },
];

export default function ProblemSolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-44 px-5 md:px-8 overflow-hidden bg-[var(--ink)] text-white isolate"
    >
      <LazyVideo src="/glyph_waves_remix.mp4" opacity="opacity-10" />

      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -top-20 right-0 w-[60vw] h-[60vw]"
          style={{
            background:
              'radial-gradient(40% 50% at 70% 20%, rgba(194,65,12,0.20), transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-20 left-0 w-[60vw] h-[60vw]"
          style={{
            background:
              'radial-gradient(40% 50% at 30% 80%, rgba(6,182,212,0.20), transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)',
          }}
        />
        <div className="noise-overlay opacity-60 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Editorial chapter intro — no pill, just type */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-3"
        >
          <span className="font-display italic text-[var(--amber-soft)] text-2xl md:text-3xl">
            §I
          </span>
          <span className="ml-3 text-[11px] uppercase tracking-[0.32em] text-stone-400 font-medium">
            Diagnose
          </span>
        </motion.div>

        {/* Massive headline — brutalist scale */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-[3rem] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-semibold text-white tracking-[-0.045em] -mx-1"
        >
          Das Muster
          <br />
          <span className="font-display italic font-normal text-stone-500">
            kennen&nbsp;wir.
          </span>
        </motion.h2>

        <div className="mt-20 md:mt-28 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT — Problems, struck through by hand */}
          <div className="lg:col-span-5">
            <div className="mb-10 flex items-baseline gap-3">
              <span className="font-display italic text-stone-500 text-xl">a.</span>
              <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-semibold">
                Was Sie wahrscheinlich kennen
              </p>
            </div>
            <ul className="space-y-10">
              {problems.map((p, i) => (
                <motion.li
                  key={p.short}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease }}
                  className="group relative"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-display italic font-normal text-[3rem] leading-none text-stone-700 select-none w-14 shrink-0">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="relative inline-block">
                        <span className="font-semibold text-white text-xl md:text-2xl">
                          {p.short}
                        </span>
                        <HandStrike
                          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-[110%] h-3 text-[var(--amber-soft)]"
                          delay={0.6 + i * 0.15}
                          inView={isInView}
                        />
                      </div>
                      <p className="text-stone-400 text-sm md:text-base leading-relaxed mt-3 max-w-md">
                        {p.long}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Handwritten margin note */}
            <motion.div
              initial={{ opacity: 0, rotate: -2 }}
              animate={isInView ? { opacity: 1, rotate: -2.5 } : {}}
              transition={{ duration: 0.8, delay: 1.3, ease }}
              className="mt-12 ml-16 max-w-xs"
            >
              <p className="font-hand text-2xl text-[var(--amber-soft)] leading-tight">
                und ehrlich — kaum ein Haus mag es aussprechen.
              </p>
              <HandArrow
                className="w-24 h-12 text-[var(--amber-soft)] mt-1 ml-8"
                direction="right"
                delay={1.7}
                inView={isInView}
              />
            </motion.div>
          </div>

          {/* RIGHT — Solution card on cream paper */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="lg:col-span-7 relative"
          >
            <div className="relative bg-[var(--cream)] text-[var(--ink)] rounded-3xl p-8 md:p-12 overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)]">
              {/* Paper texture */}
              <div className="absolute inset-0 paper-line opacity-60 pointer-events-none" />
              <div className="noise-overlay opacity-50 mix-blend-multiply" />

              <div className="relative">
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="font-display italic text-[var(--amber)] text-2xl">§Ib</span>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-stone-500 font-semibold">
                    Therapie
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-[2.8rem] font-semibold text-[var(--ink)] leading-[1.05] tracking-[-0.03em]">
                  Ihre Website soll{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 font-display italic font-normal text-[var(--amber)]">
                      bleiben
                    </span>
                    <HandUnderline
                      className="absolute -bottom-2 left-0 w-full h-3 text-[var(--amber)]"
                      delay={1.0}
                      inView={isInView}
                    />
                  </span>{' '}
                  — nicht bloß existieren.
                </h3>

                <p className="mt-7 text-stone-700 text-base md:text-lg leading-relaxed max-w-xl">
                  Wir verwandeln Ihren digitalen Auftritt in ein{' '}
                  <span className="font-semibold text-[var(--ink)]">
                    Werkzeug, das für Sie steht
                  </span>
                  {' '}— in Klarheit, Substanz und Wirkung.
                </p>

                {/* Outcome tags */}
                <div className="relative mt-10 grid sm:grid-cols-3 gap-3">
                  {[
                    { k: 'Sortierte', v: 'Anfragen' },
                    { k: 'Klare', v: 'Führung' },
                    { k: 'Bleibende', v: 'Präsenz' },
                  ].map((it, i) => (
                    <motion.div
                      key={it.v}
                      initial={{ opacity: 0, y: 8 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.08, ease }}
                      className="px-4 py-3 rounded-2xl bg-white border border-stone-200/70"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-stone-500 mb-0.5">
                        {it.k}
                      </div>
                      <div className="font-display italic text-xl text-[var(--ink)] leading-none">
                        {it.v}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href="/buchen"
                  className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--ink)] hover:bg-black text-white text-[15px] font-semibold shadow-[0_10px_30px_-12px_rgba(12,14,16,0.55)] hover:shadow-[0_20px_45px_-12px_rgba(12,14,16,0.65)] hover:-translate-y-[1px] transition-all duration-300 group"
                >
                  <span>Platz für 2026 prüfen</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                {/* Handwritten signature-like note */}
                <div className="mt-10 pt-6 border-t border-stone-200/70 flex items-baseline gap-3">
                  <span className="font-hand text-xl text-[var(--amber)] leading-none">
                    — gehalten.
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-stone-400">
                    Fylu · Studio Saarlouis
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
