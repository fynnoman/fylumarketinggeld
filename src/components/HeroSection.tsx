'use client';

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

const portfolioCards = [
  {
    src: '/portfolio-taskey-saas.webp',
    alt: 'Taskey App – SaaS-Landingpage von Fylu',
    label: 'Kapitel · Taskey',
    metric: '3,2× Conversion',
  },
  {
    src: '/portfolio-porto-cervo-saarlouis.webp',
    alt: 'Porto Cervo Saarlouis – Restaurant-Website von Fylu',
    label: 'Kapitel · Porto Cervo',
    metric: '184 % Reservierungen',
  },
  {
    src: '/portfolio-galabau-eifler.webp',
    alt: 'Galabau Eifler – Landschaftsbau-Website von Fylu',
    label: 'Kapitel · Galabau Eifler',
    metric: '12 Aufträge · 30 Tage',
  },
];

// Three slots in the composition — back-left, front-center (featured), back-right
const slots = [
  { rotate: -7, x: -40, y: 40, scale: 0.94, z: 10 },
  { rotate: 4, x: 20, y: -20, scale: 1, z: 30 },
  { rotate: 9, x: 60, y: 20, scale: 0.9, z: 20 },
];

const ROTATION_INTERVAL = 10000;

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [featuredIdx, setFeaturedIdx] = useState(1);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setFeaturedIdx((idx) => (idx + 1) % portfolioCards.length);
    }, ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  const getSlot = (cardIdx: number) => {
    const offset = ((cardIdx - featuredIdx + 1) % portfolioCards.length + portfolioCards.length) % portfolioCards.length;
    return slots[offset];
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background-warm)] isolate">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.08) 1px, transparent 1.4px)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse 90% 70% at 30% 40%, black 35%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 70% at 30% 40%, black 35%, transparent 80%)',
          }}
        />
        <motion.div
          className="absolute inset-0 bloom-cyan"
          animate={reduceMotion ? undefined : { opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        />
        <div
          className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(12,14,16,0.04) 0%, transparent 100%)',
          }}
        />
        <div className="absolute inset-0 bloom-horizon" />
        <div className="noise-overlay" />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, var(--background) 100%)',
          }}
        />
      </div>

      {/* Content grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-32 md:pt-36 pb-24 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT — Editorial typography stack */}
        <div className="lg:col-span-7 max-w-2xl">
          {/* Status pill — scarcity forward */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/80 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-700">
              Studio Saarlouis · 12 Klienten / Jahr · 3 Plätze 2026
            </span>
          </motion.div>

          {/* Headline — mixed sans + italic serif, no hand-drawn amber */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-7 text-[2.7rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.7rem] lg:leading-[0.98] font-semibold text-[var(--ink)] tracking-[-0.035em]"
          >
            Websites aus dem Saarland,
            <br className="hidden sm:block" />{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              mit einer Handschrift, die bleibt.
            </span>
          </motion.h1>

          {/* Lead — quiet, substantial */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-7 text-base md:text-lg leading-relaxed text-stone-600 max-w-xl"
          >
            Ein Studio aus Saarlouis, das jährlich zwölf Klienten annimmt — für
            Unternehmen, denen ihr digitaler Auftritt eine Substanz verdient, die
            man beim Öffnen der Seite spürt.
          </motion.p>

          {/* CTAs — primary in ink, secondary phone */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <Link
              href="/buchen"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:shadow-[0_22px_50px_-14px_rgba(12,14,16,0.65)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.99] min-h-[52px]"
            >
              <span>Platz für 2026 prüfen</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 8h11M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <a
              href="tel:+4915168488999"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300 shadow-sm hover:-translate-y-[1px] active:translate-y-0 min-h-[52px]"
            >
              <svg className="w-4 h-4 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
              </svg>
              <span>Vorgespräch buchen</span>
            </a>
          </motion.div>

          {/* Trust line — editorial */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-stone-500 tracking-[0.02em]"
          >
            <span className="uppercase tracking-[0.22em]">Seit 2024</span>
            <span className="w-px h-3 bg-stone-300 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="text-[var(--cyan-deep)]" aria-hidden>
                ★★★★★
              </span>
              <span className="font-medium text-stone-700">4,9 / 5</span>
            </span>
            <span className="w-px h-3 bg-stone-300 hidden sm:block" />
            <span className="uppercase tracking-[0.22em] hidden sm:inline">
              Saarbrücken · Saarlouis · Merzig
            </span>
          </motion.div>
        </div>

        {/* RIGHT — Floating portfolio cards stack */}
        <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[560px] hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full"
            style={{
              background:
                'conic-gradient(from 140deg at 50% 50%, rgba(6,182,212,0.18), rgba(8,145,178,0.05), rgba(6,182,212,0.16), rgba(8,145,178,0.04), rgba(6,182,212,0.18))',
              filter: 'blur(50px)',
            }}
          />

          {portfolioCards.map((card, i) => {
            const slot = getSlot(i);
            const isFeatured = i === featuredIdx;
            return (
              <motion.div
                key={card.src}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: 1,
                  x: slot.x,
                  y: slot.y,
                  rotate: slot.rotate,
                  scale: slot.scale,
                }}
                transition={{
                  opacity: { duration: 0.9, delay: 0.35 + i * 0.12, ease },
                  x: { duration: 1.2, ease },
                  y: { duration: 1.2, ease },
                  rotate: { duration: 1.2, ease },
                  scale: { duration: 1.2, ease },
                }}
                style={{ zIndex: slot.z }}
                className="absolute inset-0 m-auto w-[78%] max-w-[420px] aspect-[4/3] rounded-2xl bg-white border border-stone-200/80 shadow-[0_30px_80px_-30px_rgba(12,14,16,0.35),0_8px_24px_-8px_rgba(12,14,16,0.15)] overflow-hidden"
              >
                <div className="h-9 flex items-center gap-1.5 px-3.5 border-b border-stone-100 bg-stone-50/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fc625d]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fdbc40]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#35cd4b]" />
                  <div className="flex-1 mx-3 h-4 rounded-md bg-white border border-stone-200" />
                </div>
                <div className="relative w-full h-[calc(100%-2.25rem)]">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 420px, 78vw"
                    className="object-cover"
                    priority={i === 1}
                  />
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
                </div>

                <AnimatePresence mode="wait">
                  {isFeatured && (
                    <motion.div
                      key={`metric-${i}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.5, ease }}
                      className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white/85 backdrop-blur-md border border-stone-200/80 shadow-sm"
                    >
                      <span className="text-[11px] font-semibold text-stone-500 tracking-[0.16em] uppercase">
                        {card.label}
                      </span>
                      <span className="font-display italic text-[13px] text-cyan-700">
                        {card.metric}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-40">
            {portfolioCards.map((_, i) => (
              <button
                key={i}
                onClick={() => setFeaturedIdx(i)}
                aria-label={`Karte ${i + 1} anzeigen`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === featuredIdx
                    ? 'w-7 bg-[var(--cyan-deep)]'
                    : 'w-1.5 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

          {/* PageSpeed chip — editorial */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease }}
            className="absolute top-6 right-2 flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/85 backdrop-blur-md border border-stone-200/80 shadow-sm"
          >
            <span className="font-display italic text-cyan-700 text-lg leading-none">
              97
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                PageSpeed
              </span>
              <span className="text-[10px] text-stone-500 tracking-[0.05em]">
                mobile · live
              </span>
            </div>
          </motion.div>

          {/* Signature chip — quiet */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease }}
            className="absolute bottom-2 left-2 flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[var(--ink)] text-white shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase">
              Studio · Live
            </span>
          </motion.div>
        </div>
      </div>

      {/* SEO marquee strip at bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-10 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.22em] text-stone-400 font-medium">
          <span className="hidden sm:block h-px w-12 bg-stone-300" />
          <span>Webdesign Saarland</span>
          <span className="text-stone-300">·</span>
          <span>Saarbrücken</span>
          <span className="text-stone-300">·</span>
          <span>Saarlouis</span>
          <span className="text-stone-300">·</span>
          <span className="hidden sm:inline">Merzig</span>
          <span className="hidden sm:inline text-stone-300">·</span>
          <span className="hidden sm:inline">Dillingen</span>
          <span className="hidden sm:block h-px w-12 bg-stone-300" />
        </div>
      </div>
    </section>
  );
}
