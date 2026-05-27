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
    metricLabel: 'Neukunden in 30 Tagen',
    story:
      'Nach Launch der neuen Website, Google-Maps-Optimierung und gezielten Google Ads gewann Salif in nur einem Monat sechs Neukunden — ohne ein einziges Kaltakquise-Telefonat.',
    services: ['Webdesign', 'Google Maps', 'Google Ads'],
  },
  {
    client: 'Demir SpeedConnect',
    logo: '/logos/demir-speedconnect.webp',
    industry: 'B2B-Dienstleister',
    location: 'Saarland',
    metric: '+25',
    metricUnit: '%',
    metricLabel: 'mehr qualifizierte Anfragen',
    story:
      'Seit dem Relaunch der Website mit Conversion-Architektur kommen bei Demir SpeedConnect 25 % mehr Anfragen rein — bei gleichbleibendem Marketing-Aufwand. Die Anfragen sind zudem qualitativ besser vorgefiltert.',
    services: ['Webdesign', 'Conversion-Optimierung', 'SEO-Foundation'],
  },
  {
    client: 'Taskey',
    logo: '/logos/taskey.webp',
    industry: 'SaaS-Startup',
    location: 'Software für Gebäudereiniger',
    metric: '0',
    metricUnit: ' €',
    metricLabel: 'Startkapital — voll skaliert',
    story:
      'Als Software-Startup ohne klassisches Startkapital steht Taskey vor der härtesten Vertriebsherausforderung: Gebäudereiniger zur Nutzung einer neuen Software überzeugen. Seit Google-Ads-Setup und Premium-Website skaliert Taskey messbar professioneller — und tritt gegen etablierte Wettbewerber auf Augenhöhe auf.',
    services: ['Webdesign', 'Google Ads', 'Brand-Architektur'],
  },
  {
    client: 'MG Gebäudeservice',
    logo: '/logos/mg-gebaeudeservice.webp',
    industry: 'Gebäudereinigung',
    location: 'Köln & Düsseldorf',
    metric: 'Top 3',
    metricLabel: 'Anbieter Köln & Düsseldorf in 12 Monaten',
    story:
      'Vom regionalen Mitbewerber zur ersten Wahl: Mit Premium-Website, lokalem SEO und gezielten Google-Ads-Kampagnen hat sich MG Gebäudeservice in nur einem Jahr zu einem der größten Gebäudereiniger in ganz Köln und Düsseldorf entwickelt.',
    services: ['Webdesign', 'Lokales SEO', 'Google Ads'],
  },
];

const ROTATION_MS = 7000;

export default function CaseStudyShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-rotate with progress bar
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
      className="relative py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="case-showcase-heading"
    >
      {/* Decorative grid + glow */}
      <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-cyan-100 rounded-full blur-3xl opacity-30 pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-bold text-cyan-500 uppercase tracking-wider">
            Erfolgsgeschichten
          </span>
          <h2
            id="case-showcase-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-5 text-stone-900 leading-tight"
          >
            Marken, die durch uns{' '}
            <span className="text-cyan-600">messbar gewachsen</span> sind.
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Vier reale Geschichten. Vier Branchen. Ein Muster: Sichtbarkeit wird zur
            Anfragenmaschine.
          </p>
        </motion.div>

        {/* Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-stone-800 p-1 shadow-2xl">
            <div className="relative rounded-[calc(1.5rem-4px)] bg-stone-950 overflow-hidden">
              {/* Subtle animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.25), transparent 50%), radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.15), transparent 50%)',
                }}
                animate={{ opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
              />

              {/* Top corner labels */}
              <div className="relative z-10 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  </span>
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">
                    Case Study {String(index + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="text-stone-500 text-xs font-mono hidden md:block">
                  fylu / clients
                </div>
              </div>

              {/* Main content grid */}
              <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-8 px-6 md:px-10 py-10 md:py-14 min-h-[460px] md:min-h-[420px]">
                <AnimatePresence mode="wait">
                  {/* LEFT — Client */}
                  <motion.div
                    key={`left-${index}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-5 flex flex-col"
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col items-start h-full">
                      <div className="w-full h-24 md:h-28 mb-6 flex items-center justify-start">
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

                      <div className="mb-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-1">
                          Kunde
                        </p>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-stone-900 leading-tight">
                          {current.client}
                        </h3>
                        <p className="text-stone-500 text-sm mt-1">
                          {current.industry} · {current.location}
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-stone-100 w-full">
                        <p className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                          Eingesetzte Leistungen
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {current.services.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-xs font-semibold border border-cyan-100"
                            >
                              {s}
                            </span>
                          ))}
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
                      <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
                        Ergebnis
                      </p>
                      <div className="flex items-baseline gap-2">
                        <motion.div
                          key={`metric-${index}`}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tight"
                        >
                          {current.metric}
                        </motion.div>
                        {current.metricUnit && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-cyan-400 leading-none tracking-tight"
                          >
                            {current.metricUnit}
                          </motion.div>
                        )}
                      </div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="text-stone-300 text-base md:text-lg font-medium mt-3"
                      >
                        {current.metricLabel}
                      </motion.p>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-stone-200 text-base md:text-lg leading-relaxed mt-6 max-w-2xl"
                    >
                      {current.story}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom: progress bar + controls */}
              <div className="relative z-10 border-t border-white/5 px-6 md:px-10 py-5 md:py-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                  {/* Dots */}
                  <div className="flex gap-2">
                    {cases.map((c, i) => (
                      <button
                        key={c.client}
                        onClick={() => setIndex(i)}
                        aria-label={`Case Study ${i + 1}: ${c.client}`}
                        className={`relative h-2 rounded-full transition-all duration-500 ${
                          i === index ? 'w-12 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
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

                  {/* Client name + counter */}
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
                        className="w-8 h-8 rounded-full border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors flex items-center justify-center"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setIndex((i) => (i + 1) % cases.length)}
                        aria-label="Nächste Case Study"
                        className="w-8 h-8 rounded-full border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors flex items-center justify-center"
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
          </div>

          {/* Bottom hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-stone-500 text-sm mt-6"
          >
            Plus über <span className="font-semibold text-stone-700">40 weitere Projekte</span> für
            Saarländer und deutsche Unternehmer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
