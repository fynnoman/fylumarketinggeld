'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { HandUnderline } from './marks/HandMarks';

const ease = [0.22, 1, 0.36, 1] as const;

const portfolioCards = [
  {
    src: '/portfolio-taskey-app.webp',
    alt: 'Taskey App – SaaS-Landingpage von Fylu',
    label: 'Taskey · SaaS',
    metric: '+3,2× Conversion',
    rotate: -7,
    offsetX: -40,
    offsetY: 40,
    scale: 0.94,
    z: 10,
  },
  {
    src: '/portfolio-porto-cervo-saarlouis.webp',
    alt: 'Porto Cervo Saarlouis – Restaurant-Website von Fylu',
    label: 'Porto Cervo · Gastronomie',
    metric: '+184 % Reservierungen',
    rotate: 4,
    offsetX: 20,
    offsetY: -20,
    scale: 1,
    z: 30,
  },
  {
    src: '/portfolio-galabau-eifler.webp',
    alt: 'Galabau Eifler – Landschaftsbau-Website von Fylu',
    label: 'Galabau Eifler · Handwerk',
    metric: '+12 Aufträge in 30 Tagen',
    rotate: 9,
    offsetX: 60,
    offsetY: 20,
    scale: 0.9,
    z: 20,
  },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background-warm)] isolate">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 -z-10">
        {/* Faint dot grid — gives the page structure without shouting */}
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
        {/* Cyan bloom — top-right atmosphere */}
        <motion.div
          className="absolute inset-0 bloom-cyan"
          animate={reduceMotion ? undefined : { opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        />
        {/* Subtle ink wash on the left edge for depth */}
        <div
          className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(12,14,16,0.04) 0%, transparent 100%)',
          }}
        />
        {/* Horizon glow at the bottom */}
        <div className="absolute inset-0 bloom-horizon" />
        {/* Film grain */}
        <div className="noise-overlay" />
        {/* Bottom edge fade to white so the section blends into the next */}
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
          {/* Status pill */}
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
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-stone-700">
              Saarland · Webdesign Studio · Verfügbar 2026
            </span>
          </motion.div>

          {/* Headline — mixed sans + italic serif */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-6 text-[2.6rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.6rem] lg:leading-[0.98] font-semibold text-[var(--ink)] tracking-[-0.035em]"
          >
            Webdesign aus dem Saarland,
            <br className="hidden sm:block" />{' '}
            <span className="relative inline-block">
              <span className="font-display italic font-normal text-[var(--cyan-deep)] [text-shadow:_0_1px_0_rgba(8,145,178,0.05)]">
                das wirklich verkauft.
              </span>
              <HandUnderline
                className="absolute -bottom-2 left-0 right-0 h-3 text-[var(--amber)] w-full"
                delay={1.0}
              />
            </span>
          </motion.h1>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-6 text-base md:text-lg leading-relaxed text-stone-600 max-w-xl"
          >
            Conversion-getriebene Websites, SEO &amp; Google Ads für Unternehmen
            im Saarland und ganz Deutschland — gebaut wie eine Kampagne, nicht
            wie eine Visitenkarte.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <Link
              href="/angebote"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_10px_30px_-12px_rgba(12,14,16,0.55)] hover:shadow-[0_20px_45px_-12px_rgba(12,14,16,0.65)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.99]"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 via-cyan-400/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-cyan-400/10 group-hover:to-cyan-500/20 transition-all duration-500" />
              <span className="relative">Kostenlosen Entwurf sichern</span>
              <svg
                className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
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

            <Link
              href="#packages"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-[15px] font-semibold text-stone-900 bg-white/60 hover:bg-white border border-stone-300/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px]"
            >
              <span>Meine Angebote</span>
              <span className="text-stone-400 group-hover:text-cyan-600 transition-colors">
                ↗
              </span>
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="mt-10 flex items-center gap-5 text-[13px] text-stone-500"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full ring-2 ring-[var(--background-warm)]"
                    style={{
                      background: [
                        'linear-gradient(135deg, #fbbf24, #f59e0b)',
                        'linear-gradient(135deg, #34d399, #059669)',
                        'linear-gradient(135deg, #60a5fa, #2563eb)',
                        'linear-gradient(135deg, #f472b6, #db2777)',
                      ][i],
                    }}
                  />
                ))}
              </div>
              <span className="font-medium text-stone-700 ml-2">50+ Kunden</span>
            </div>
            <span className="w-px h-4 bg-stone-300" />
            <div className="flex items-center gap-1.5">
              <span className="text-amber-500" aria-hidden>
                ★★★★★
              </span>
              <span className="font-medium text-stone-700">4.9 / 5</span>
            </div>
            <span className="hidden sm:block w-px h-4 bg-stone-300" />
            <span className="hidden sm:block">Saarbrücken · Saarlouis · Merzig</span>
          </motion.div>
        </div>

        {/* RIGHT — Floating portfolio cards stack */}
        <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[560px] hidden md:block">
          {/* Backdrop disc behind cards */}
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

          {portfolioCards.map((card, i) => (
            <motion.div
              key={card.src}
              initial={{ opacity: 0, y: 40, rotate: card.rotate * 0.3 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: card.rotate,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35 + i * 0.12,
                ease,
              }}
              style={{ zIndex: card.z }}
              className="absolute inset-0 m-auto"
            >
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -8 - i * 2, 0],
                      }
                }
                transition={{
                  duration: 6 + i * 1.2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
                style={{
                  transform: `translate(${card.offsetX}px, ${card.offsetY}px) scale(${card.scale}) rotate(${card.rotate}deg)`,
                  transformOrigin: 'center',
                }}
                className="absolute inset-0 m-auto w-[78%] max-w-[420px] aspect-[4/3] rounded-2xl bg-white border border-stone-200/80 shadow-[0_30px_80px_-30px_rgba(12,14,16,0.35),0_8px_24px_-8px_rgba(12,14,16,0.15)] overflow-hidden"
              >
                {/* Browser chrome */}
                <div className="h-9 flex items-center gap-1.5 px-3.5 border-b border-stone-100 bg-stone-50/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fc625d]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fdbc40]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#35cd4b]" />
                  <div className="flex-1 mx-3 h-4 rounded-md bg-white border border-stone-200" />
                </div>
                {/* Screenshot */}
                <div className="relative w-full h-[calc(100%-2.25rem)]">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 420px, 78vw"
                    className="object-cover"
                    priority={i === 1}
                  />
                  {/* Subtle top gloss */}
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
                </div>

                {/* Metric badge on the featured card */}
                {i === 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.1, ease }}
                    className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white/85 backdrop-blur-md border border-stone-200/80 shadow-sm"
                  >
                    <span className="text-[11px] font-semibold text-stone-500 tracking-wide uppercase">
                      {card.label}
                    </span>
                    <span className="text-[12px] font-bold text-cyan-700">
                      {card.metric}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}

          {/* Floating spec chip top-right */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease }}
            className="absolute top-6 right-2 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/85 backdrop-blur-md border border-stone-200/80 shadow-sm"
          >
            <span className="font-display italic text-cyan-700 text-lg leading-none">
              97
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                PageSpeed
              </span>
              <span className="text-[10px] text-stone-500">mobile · live</span>
            </div>
          </motion.div>

          {/* Floating spec chip bottom-left */}
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
            <span className="text-[11px] font-medium tracking-wide">
              Conversion-Setup aktiv
            </span>
          </motion.div>
        </div>
      </div>

      {/* SEO marquee strip at bottom — replaces flat paragraph */}
      <div className="absolute bottom-6 left-0 right-0 z-10 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 text-[11px] uppercase tracking-[0.18em] text-stone-400 font-medium">
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
