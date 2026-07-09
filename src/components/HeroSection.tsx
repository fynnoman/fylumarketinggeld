'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

const usps = [
  'Website in 14 Tagen live',
  'SEO ab Tag 1 mitgedacht, damit Google Sie findet',
  'Fixpreis, kein Abo, persönlich betreut aus Saarlouis',
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center overflow-hidden bg-[var(--background-warm)] isolate">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse 100% 80% at 50% 30%, black 30%, transparent 85%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 100% 80% at 50% 30%, black 30%, transparent 85%)',
          }}
        />
        <motion.div
          className="absolute inset-0 bloom-cyan"
          animate={reduceMotion ? undefined : { opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        />
        <div className="noise-overlay" />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, var(--background) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full px-5 sm:px-8 pt-32 md:pt-36 pb-20 md:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-70 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
          </span>
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-700">
            Studio Saarlouis · Seit 2024
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mt-7 text-[2.4rem] leading-[1.05] sm:text-5xl md:text-[3.6rem] md:leading-[1.02] font-semibold text-[var(--ink)] tracking-[-0.03em]"
        >
          Webdesign &amp; SEO{' '}
          <span className="font-display italic font-normal text-[var(--cyan-deep)]">
            im Saarland
          </span>{' '}
          und darüber hinaus.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          className="mt-6 text-base md:text-lg leading-relaxed text-stone-600 max-w-2xl mx-auto"
        >
          Sie möchten online sichtbar sein und neue Kunden gewinnen? Wir bauen
          Ihre Website und sorgen dafür, dass Google Sie findet. Aus Saarlouis,
          persönlich betreut, mit klarer Preisstruktur.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease }}
          className="mt-8 flex flex-col items-center gap-2.5 text-[15px] text-stone-700"
        >
          {usps.map((u) => (
            <li key={u} className="inline-flex items-center gap-2.5">
              <svg
                className="w-4 h-4 shrink-0 text-cyan-600"
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
        >
          <Link
            href="/buchen"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:shadow-[0_22px_50px_-14px_rgba(12,14,16,0.65)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.99] min-h-[52px]"
          >
            <span>Kostenloses Erstgespräch</span>
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
          transition={{ duration: 0.6, delay: 0.55, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-stone-500 tracking-[0.02em]"
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
    </section>
  );
}
