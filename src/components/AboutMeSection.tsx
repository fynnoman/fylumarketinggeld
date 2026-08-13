'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { HandUnderline, HandArrow } from './marks/HandMarks';

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutMeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-40 bg-white overflow-hidden isolate">
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 right-0 w-[55vw] h-[55vw]"
          style={{
            background:
              'radial-gradient(50% 50% at 70% 30%, rgba(6,182,212,0.10), transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.06) 1px, transparent 1.4px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 70% 70% at 30% 60%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 70% at 30% 60%, black 30%, transparent 80%)',
          }}
        />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* LEFT — Portrait composition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Soft halo */}
              <div className="absolute -inset-8 bg-gradient-to-br from-cyan-200/40 via-cyan-100/20 to-transparent blur-3xl" />

              {/* Polaroid-style frame, slight rotation */}
              <motion.div
                initial={{ rotate: -3 }}
                animate={{ rotate: -2.5 }}
                whileHover={{ rotate: -1, y: -4 }}
                transition={{ duration: 0.5, ease }}
                className="relative bg-white p-3 pb-14 rounded-md shadow-[0_30px_80px_-30px_rgba(12,14,16,0.4),0_8px_24px_-12px_rgba(12,14,16,0.15)] border border-stone-200/60"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-100">
                  <Image
                    src="/64bb3620-f0df-4887-a72b-6f4e69750fd8.webp"
                    alt="Fynn Schulz – Inhaber & Strategie bei Fylu"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 90vw, 420px"
                  />
                </div>
                {/* Signature on polaroid bottom */}
                <div className="absolute bottom-3 left-0 right-0 px-5 flex items-baseline justify-between">
                  <span className="font-display italic text-[1.3rem] text-[var(--ink)] leading-none">
                    Fynn Schulz
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-stone-400">
                    Studio-Lead · SLS
                  </span>
                </div>
              </motion.div>

              {/* Floating chip — top-right */}
              <motion.div
                initial={{ opacity: 0, y: -8, rotate: 6 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 6 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease }}
                className="absolute -top-4 -right-2 sm:-right-6 bg-white px-3 py-2 rounded-xl shadow-lg border border-stone-200/80 flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-[11px] font-medium text-stone-700 tracking-[0.06em]">
                  Studio-Lead
                </span>
              </motion.div>

              {/* Floating chip — bottom-left */}
              <motion.div
                initial={{ opacity: 0, y: 8, rotate: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: -5 } : {}}
                transition={{ duration: 0.7, delay: 0.55, ease }}
                className="absolute -bottom-4 -left-2 sm:-left-4 bg-[var(--ink)] text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5"
              >
                <span className="font-display italic text-cyan-300 text-lg leading-none">
                  5+
                </span>
                <span className="text-[11px] font-medium leading-tight">
                  Jahre Webdesign
                  <br />
                  <span className="text-stone-400 text-[10px]">seit 2020</span>
                </span>
              </motion.div>

              {/* Handwritten margin note — pointing at the photo */}
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -6 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: -6 } : {}}
                transition={{ duration: 0.9, delay: 0.9, ease }}
                className="absolute -left-2 sm:-left-20 top-[28%] hidden md:block max-w-[140px]"
              >
                <p className="font-hand text-xl text-[var(--amber)] leading-tight">
                  der Studio-Lead.
                  <br />
                  persönlich, direkt.
                </p>
                <HandArrow
                  className="w-20 h-10 text-[var(--amber)] mt-1 ml-6 -rotate-12"
                  direction="right"
                  delay={1.4}
                  inView={isInView}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Editorial copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="lg:col-span-7"
          >
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                §05
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Studio-Lead
              </span>
            </div>

            <h2 className="text-[2.6rem] leading-[1.04] sm:text-5xl md:text-[3.6rem] lg:text-[4.2rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
              Geführt aus{' '}
              <span className="relative inline-block">
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  Saarlouis.
                </span>
                <HandUnderline
                  className="absolute -bottom-1 left-0 w-full h-2.5 text-[var(--amber)]"
                  delay={0.6}
                  inView={isInView}
                />
              </span>
            </h2>

            {/* Lead paragraph — editorial pull-style */}
            <p className="mt-7 text-xl md:text-[1.35rem] leading-[1.55] text-stone-800 max-w-2xl font-light">
              Wir bauen Auftritte, die nicht{' '}
              <span className="line-through decoration-stone-300 decoration-1 text-stone-400">
                schöner aussehen
              </span>{' '}
              — sondern spürbar sind. Mit der Substanz eines Ateliers, geführt aus
              einem kleinen Studio in Saarlouis.
            </p>

            {/* Body */}
            <div className="mt-6 space-y-4 text-base md:text-[1.05rem] text-stone-600 leading-relaxed max-w-2xl">
              <p>
                Fylu ist ein{' '}
                <span className="font-medium text-stone-800">
                  unabhängiges Studio aus Saarlouis
                </span>{' '}
                — wir begleiten Häuser vom saarländischen Mittelstand bis zum
                internationalen SaaS-Haus. Was verbindet: der Anspruch, digitale
                Auftritte mit Substanz zu bauen, nicht mit Lautstärke.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { value: '50+', label: 'Klienten begleitet' },
                { value: '4,9', label: 'Durchschnitt · fünf' },
                { value: '2', label: 'Kontinente betreut' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease }}
                  className="border-l-2 border-cyan-500/30 pl-4"
                >
                  <div className="font-display italic font-normal text-3xl md:text-[2.4rem] leading-none text-[var(--ink)]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.12em] text-stone-500 mt-2 leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expandable longer story */}
            <div className="mt-10">
              <button
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="group inline-flex items-center gap-2 text-[11px] font-semibold text-stone-500 hover:text-stone-900 uppercase tracking-[0.18em] transition-colors"
              >
                <span className="w-6 h-px bg-stone-300 group-hover:bg-stone-700 transition-colors" />
                {expanded ? 'Weniger anzeigen' : 'Die längere Geschichte'}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="overflow-hidden"
                  >
                    <div className="text-sm md:text-base text-stone-500 leading-relaxed space-y-4 mt-6 pr-2 max-w-2xl border-l border-stone-200 pl-5">
                      <p>
                        Fylu ist aus Handwerk entstanden. Websites bauen, Code
                        beherrschen, Performance verstehen, Marketing lesen können —
                        über mehrere Jahre wurde aus konsequenter Praxis erst ein
                        festes Portfolio, dann 2025 ein Studio unter eigenem Namen.
                      </p>
                      <p>
                        Der Ansatz ist bewusst nicht klassisch-agenturhaft: keine
                        Account-Manager-Schleifen, keine Templates, keine
                        Jahresverträge, die niemand liest. Stattdessen: direkte
                        Führung, klare Kapitel, ein kuratierter Kalender.
                      </p>
                      <p>
                        Heute begleiten wir Klienten vom saarländischen
                        Mittelständler bis zum US-amerikanischen SaaS-Haus. Auf
                        diesem Spagat zwischen handwerklicher Substanz und
                        internationaler Skalierbarkeit baut Fylu auf.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
