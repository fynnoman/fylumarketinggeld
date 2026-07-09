'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ease = [0.22, 1, 0.36, 1] as const;

const usps = [
  'Website in 14 Tagen live',
  'SEO ab Tag 1 mitgedacht',
  'Fest betreut aus Saarlouis, kein Abo',
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--background-warm)] isolate">
      {/* Static background layers — no per-frame animation to avoid jank */}
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
        <div className="absolute inset-0 bloom-cyan opacity-90" />
        <div className="noise-overlay" />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, var(--background) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-32 md:pt-36 pb-24 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — Text */}
        <div className="lg:col-span-7 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-700">
              Studio Saarlouis
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="mt-7 text-[2.6rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[0.98] font-semibold text-[var(--ink)] tracking-[-0.035em]"
          >
            Webdesign &amp; SEO{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              im Saarland
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease }}
            className="mt-6 text-base md:text-lg leading-relaxed text-stone-600 max-w-xl"
          >
            Websites, die gefunden werden und neue Kunden bringen. Persönlich
            gebaut aus Saarlouis, in zwei Wochen live.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease }}
            className="mt-6 flex flex-col gap-2 text-[15px] text-stone-700"
          >
            {usps.map((u) => (
              <li key={u} className="flex items-start gap-2.5">
                <svg
                  className="w-4 h-4 mt-1 shrink-0 text-cyan-600"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 10.5l4 4 8-9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{u}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <Link
              href="/buchen"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-colors duration-200 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] min-h-[52px]"
            >
              <span>Kostenloses Erstgespräch</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-colors duration-200 shadow-sm min-h-[52px]"
            >
              <svg className="w-4 h-4 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z"
                />
              </svg>
              <span>Anrufen</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-stone-500 tracking-[0.02em]"
          >
            <span className="flex items-center gap-1.5">
              <span className="text-[var(--cyan-deep)]" aria-hidden>
                ★★★★★
              </span>
              <span className="font-medium text-stone-700">4,9 / 5</span>
            </span>
            <span className="w-px h-3 bg-stone-300 hidden sm:block" />
            <span className="uppercase tracking-[0.22em]">
              Saarbrücken · Saarlouis · Merzig · Dillingen
            </span>
          </motion.div>
        </div>

        {/* RIGHT — Portrait */}
        <div className="lg:col-span-5 relative flex items-center justify-center h-[440px] sm:h-[520px] lg:h-[600px]">
          {/* Single static aura */}
          <div
            className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.22), transparent 65%)',
              filter: 'blur(48px)',
            }}
          />

          {/* Portrait polaroid */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            style={{ transform: 'rotate(-2deg)', willChange: 'transform' }}
            className="relative w-[74%] max-w-[340px] bg-white p-3 pb-12 rounded-md shadow-[0_30px_80px_-30px_rgba(12,14,16,0.4),0_8px_24px_-12px_rgba(12,14,16,0.15)] border border-stone-200/60"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-100">
              <Image
                src="/64bb3620-f0df-4887-a72b-6f4e69750fd8.webp"
                alt="Fynn Schulz, Inhaber Fylu Studio Saarlouis"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 74vw, 340px"
              />
            </div>
            <div className="absolute bottom-3 left-0 right-0 px-5 flex items-baseline justify-between">
              <span className="font-display italic text-[1.25rem] text-[var(--ink)] leading-none">
                Fynn Schulz
              </span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-stone-400">
                Studio-Lead
              </span>
            </div>
          </motion.div>

          {/* Single floating chip — Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease }}
            className="absolute bottom-10 left-2 sm:left-4 flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[var(--ink)] text-white shadow-lg z-20"
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
    </section>
  );
}
