'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type CaseStudy = {
  client: string;
  logo: string;
  industry: string;
  location: string;
  metric: string;
  metricUnit?: string;
  metricLabel: string;
  story: string;
  services: string[];
};

const cases: CaseStudy[] = [
  {
    client: 'Salif Gebäudeservice',
    logo: '/logos/salif-gebaeudeservice.webp',
    industry: 'Gebäudereinigung',
    location: 'Saarland',
    metric: '+6',
    metricLabel: 'Klienten im ersten Monat',
    story:
      'Ein Monat nach Launch: sechs neue Klienten. Ohne einen einzigen Kaltakquise-Anruf.',
    services: ['Website', 'Google Maps', 'Google Ads'],
  },
  {
    client: 'Demir SpeedConnect',
    logo: '/logos/demir-speedconnect.webp',
    industry: 'B2B-Dienstleister',
    location: 'Saarland',
    metric: '+25',
    metricUnit: '%',
    metricLabel: 'sortiertere Anfragen',
    story:
      'Klare Verkaufsarchitektur — 25 % mehr Anfragen bei gleichem Budget. Und sichtbar bessere Qualität.',
    services: ['Website', 'Conversion-Architektur', 'SEO-Foundation'],
  },
  {
    client: 'Taskey',
    logo: '/logos/taskey.webp',
    industry: 'SaaS-Haus',
    location: 'Software für Gebäudereiniger',
    metric: 'Bootstrap',
    metricLabel: 'ohne Startkapital · voll skaliert',
    story:
      'Eine der härtesten Vertriebsdisziplinen — Gebäudereiniger von neuer Software überzeugen. Seit Ads-Setup und Premium-Auftritt auf Augenhöhe mit Etablierten.',
    services: ['Website', 'Google Ads', 'Marken-Architektur'],
  },
  {
    client: 'MG Gebäudeservice',
    logo: '/logos/mg-gebaeudeservice.webp',
    industry: 'Gebäudereinigung',
    location: 'Köln & Düsseldorf',
    metric: 'Top 3',
    metricLabel: 'Anbieter Köln & Düsseldorf · 12 Monate',
    story:
      'Vom regionalen Mitbewerber zur ersten Wahl. Premium-Auftritt, lokales SEO, geführte Kampagne — in zwölf Monaten in die Spitzengruppe.',
    services: ['Website', 'Lokales SEO', 'Google Ads'],
  },
];

const ROTATION_MS = 7000;

export default function CaseStudyShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isHovered) return;
    setProgress(0);
    const tickInterval = 50;
    const totalTicks = ROTATION_MS / tickInterval;
    let ticks = 0;

    const tick = window.setInterval(() => {
      ticks += 1;
      setProgress((ticks / totalTicks) * 100);
      if (ticks >= totalTicks) {
        window.clearInterval(tick);
        setIndex((i) => (i + 1) % cases.length);
      }
    }, tickInterval);

    return () => window.clearInterval(tick);
  }, [index, isHovered]);

  const current = cases[index];

  return (
    <section
      ref={ref}
      id="klienten"
      className="relative py-24 md:py-32 bg-white overflow-hidden scroll-mt-24 isolate"
      aria-labelledby="case-showcase-heading"
    >
      {/* Atmosphere — behind glass */}
      <div className="absolute inset-0 grid-background opacity-25 pointer-events-none" />
      <div
        aria-hidden
        className="glass-bloom-cyan absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden
        className="glass-bloom-warm absolute top-[8%] right-[4%] w-[24vw] h-[24vw] max-w-[300px] max-h-[300px] rounded-full opacity-70 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
        >
          <div className="mb-6 flex items-baseline justify-center gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §02
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Klienten
            </span>
          </div>
          <h2
            id="case-showcase-heading"
            className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]"
          >
            Häuser, die{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              messbar wachsen
            </span>
            .
          </h2>
          <p className="mt-7 text-lg text-stone-600 leading-relaxed">
            Vier Klienten. Vier Kontexte. Ein Ergebnis: sichtbar mehr Anfragen.
          </p>
        </motion.div>

        {/* Showcase — ink glass slab */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-3xl glass-ink overflow-hidden">
            <span className="glass-edge glass-edge-dark" aria-hidden />
            {/* Caustic + blooms behind the slab surface */}
            <div className="glass-caustic" aria-hidden />
            <div
              aria-hidden
              className="glass-bloom-cyan absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full opacity-90"
            />
            <div
              aria-hidden
              className="glass-bloom-cyan absolute -bottom-32 -right-24 w-[320px] h-[320px] rounded-full opacity-70"
            />

            {/* Top corner labels */}
            <div className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                </span>
                <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.28em]">
                  {String(index + 1).padStart(2, '0')} · {String(cases.length).padStart(2, '0')}
                </span>
              </div>
              <div className="text-stone-500 text-[11px] font-mono uppercase tracking-[0.22em] hidden md:block">
                fylu · klienten
              </div>
            </div>

            {/* Main content grid */}
            <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-8 px-6 md:px-10 py-10 md:py-14 min-h-[460px] md:min-h-[420px]">
              <AnimatePresence mode="wait">
                {/* LEFT — Client card as glass-strong */}
                <motion.div
                  key={`left-${index}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-5 flex flex-col"
                >
                  <div className="relative glass-strong rounded-2xl p-6 md:p-8 flex flex-col items-start h-full">
                    <span className="glass-edge" aria-hidden />
                    <div className="relative w-full h-24 md:h-28 mb-6 flex items-center justify-start">
                      <div className="relative w-full h-full">
                        <Image
                          src={current.logo}
                          alt={`${current.client} Logo`}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-contain object-left"
                        />
                      </div>
                    </div>

                    <div className="relative mb-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-700 mb-1.5">
                        Klient
                      </p>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900 leading-tight">
                        {current.client}
                      </h3>
                      <p className="text-stone-500 text-sm mt-1">
                        {current.industry} · {current.location}
                      </p>
                    </div>

                    <div className="relative mt-auto pt-4 border-t border-stone-200/70 w-full">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-400 mb-3">
                        Ausgeführte Arbeit
                      </p>
                      <div className="relative">
                        <div aria-hidden className="invisible grid">
                          {cases.map((c) => (
                            <div
                              key={c.client}
                              className="row-start-1 col-start-1 flex flex-wrap gap-2"
                            >
                              {c.services.map((s) => (
                                <span
                                  key={s}
                                  className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          ))}
                        </div>
                        <div className="absolute inset-0 flex flex-wrap gap-2">
                          {current.services.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1.5 glass-chip text-cyan-700 rounded-full text-xs font-semibold"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {/* RIGHT — Result */}
                <motion.div
                  key={`right-${index}`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-7 flex flex-col justify-center text-white"
                >
                  <div className="mb-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-400 mb-3">
                      Wirkung
                    </p>
                    <div className="flex items-baseline gap-2">
                      <motion.div
                        key={`metric-${index}`}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display italic font-normal text-7xl md:text-8xl lg:text-[8.5rem] text-white leading-none tracking-[-0.03em] drop-shadow-[0_10px_40px_rgba(6,182,212,0.35)]"
                      >
                        {current.metric}
                      </motion.div>
                      {current.metricUnit && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                          className="font-display italic font-normal text-4xl md:text-5xl lg:text-6xl text-cyan-300 leading-none tracking-tight"
                        >
                          {current.metricUnit}
                        </motion.div>
                      )}
                    </div>
                    <div className="mt-3 relative">
                      <div aria-hidden className="invisible grid">
                        {cases.map((c) => (
                          <p
                            key={c.client}
                            className="row-start-1 col-start-1 text-base md:text-lg font-medium"
                          >
                            {c.metricLabel}
                          </p>
                        ))}
                      </div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="absolute inset-0 text-stone-300 text-base md:text-lg font-medium"
                      >
                        {current.metricLabel}
                      </motion.p>
                    </div>
                  </div>

                  <div className="mt-6 max-w-2xl relative">
                    <div aria-hidden className="invisible grid">
                      {cases.map((c) => (
                        <p
                          key={c.client}
                          className="row-start-1 col-start-1 text-base md:text-lg leading-relaxed"
                        >
                          {c.story}
                        </p>
                      ))}
                    </div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="absolute inset-0 text-stone-200 text-base md:text-lg leading-relaxed"
                    >
                      {current.story}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: progress bar + controls */}
            <div className="relative z-10 border-t border-white/10 px-6 md:px-10 py-5 md:py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="flex gap-2">
                  {cases.map((c, i) => (
                    <button
                      key={c.client}
                      onClick={() => setIndex(i)}
                      aria-label={`Case Study ${i + 1}: ${c.client}`}
                      className={`relative h-2 rounded-full transition-all duration-500 ${
                        i === index ? 'w-12 bg-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.7)]' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    >
                      {i === index && (
                        <span
                          className="absolute inset-y-0 left-0 bg-white/40 rounded-full transition-[width] duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  ))}
                </div>

                <div className="flex-1 flex items-center justify-between gap-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`name-${index}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-sm font-semibold"
                    >
                      {current.client}
                    </motion.span>
                  </AnimatePresence>

                  <div className="hidden md:flex items-center gap-3 text-xs text-stone-400 font-mono">
                    <button
                      onClick={() =>
                        setIndex((i) => (i - 1 + cases.length) % cases.length)
                      }
                      aria-label="Vorherige Case Study"
                      className="w-8 h-8 rounded-full glass-chip-ink hover:text-cyan-300 transition-colors flex items-center justify-center"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setIndex((i) => (i + 1) % cases.length)}
                      aria-label="Nächste Case Study"
                      className="w-8 h-8 rounded-full glass-chip-ink hover:text-cyan-300 transition-colors flex items-center justify-center"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-stone-500 text-sm mt-6 tracking-[0.02em]"
          >
            Weitere <span className="font-display italic text-stone-700">Häuser seit 2024</span> auf Anfrage.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
