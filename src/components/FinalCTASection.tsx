'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const smoothEase = [0.22, 1, 0.36, 1] as const;
const PHONE_HUMAN = '+49 151 684 88999';
const PHONE_TEL = '+4915168488999';

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="packages"
      ref={ref}
      className="relative bg-[var(--ink)] text-white overflow-hidden isolate"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw]"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 0%, rgba(6,182,212,0.22), transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-24 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-sm border border-white/10 mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-300">
            15 Minuten · kostenloses Gespräch
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: smoothEase, delay: 0.05 }}
          className="font-semibold tracking-[-0.035em] leading-[1.04] text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] max-w-3xl mx-auto"
        >
          Reden wir kurz —{' '}
          <span className="font-display italic font-normal text-cyan-300">
            persönlich.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: smoothEase, delay: 0.18 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto"
        >
          Anrufen oder Anfrage senden. Sie bekommen innerhalb von 24 Stunden eine konkrete Rückmeldung — direkt von uns, nicht aus einer Hotline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: smoothEase, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto"
        >
          <a
            href={`tel:${PHONE_TEL}`}
            className="group inline-flex items-center justify-center gap-2.5 bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-4 rounded-full text-base font-bold shadow-[0_20px_50px_-15px_rgba(6,182,212,0.6)] transition-all duration-300 hover:-translate-y-[1px] min-h-[52px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
            </svg>
            <span>{PHONE_HUMAN}</span>
          </a>
          <Link
            href="/buchen"
            className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-4 rounded-full text-base font-semibold border border-white/15 backdrop-blur-sm transition-all duration-300 min-h-[52px]"
          >
            <span>Anfrage senden</span>
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] sm:text-sm text-stone-400"
        >
          <span>Antwort in 24 Stunden</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-stone-600" />
          <span>Saarland · ganz Deutschland</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-stone-600" />
          <span>50+ Kunden · 4.9 / 5</span>
        </motion.div>
      </div>
    </section>
  );
}
