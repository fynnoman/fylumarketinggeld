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
              'radial-gradient(50% 50% at 50% 0%, rgba(6,182,212,0.28), transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="glass-bloom-cyan absolute -bottom-40 left-[10%] w-[52vw] h-[52vw] max-w-[700px] max-h-[700px] rounded-full opacity-80"
        />
        <div
          aria-hidden
          className="glass-bloom-warm absolute top-[20%] right-[6%] w-[24vw] h-[24vw] max-w-[300px] max-h-[300px] rounded-full opacity-40"
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

      {/* Massive outline ghost text behind the slab */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[10%] pointer-events-none select-none flex justify-center"
      >
        <div className="text-outline-white font-display italic font-normal text-[26vw] leading-[0.8] opacity-25 whitespace-nowrap">
          Gespräch
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-24 md:py-32 text-center">
        {/* Central glass slab holding the CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="relative rounded-[2rem] glass-ink px-6 sm:px-12 md:px-16 py-14 md:py-20 overflow-hidden"
        >
          <span className="glass-edge glass-edge-dark" aria-hidden />
          <div className="glass-caustic" aria-hidden />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.05 }}
            className="relative inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-chip-ink mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-stone-300">
              Website-Analyse · kostenlos
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
            className="relative font-semibold tracking-[-0.045em] leading-[0.94] text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[6rem] max-w-4xl mx-auto"
          >
            Eine Analyse.{' '}
            <span className="font-display italic font-normal text-cyan-300">
              Kein Verkaufsgespräch.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.2 }}
            className="relative mt-7 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed"
          >
            Wir zeigen Ihnen konkret, warum Ihre Website Besucher verliert. Und wie wir das ändern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.3 }}
            className="relative mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto"
          >
            <a
              href={`tel:${PHONE_TEL}`}
              className="group relative inline-flex items-center justify-center gap-2.5 btn-glass-cyan px-7 py-4 rounded-full text-base font-bold min-h-[52px]"
            >
              <span className="btn-glass-shine" aria-hidden />
              <svg className="relative w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
              </svg>
              <span className="relative">{PHONE_HUMAN}</span>
            </a>
            <Link
              href="/buchen"
              className="group relative inline-flex items-center justify-center gap-2 glass-chip-ink text-white px-7 py-4 rounded-full text-base font-semibold min-h-[52px] hover:-translate-y-[1px] transition-transform duration-300"
            >
              <span className="relative">Platz für 2026 prüfen</span>
              <span className="relative text-cyan-300 transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] sm:text-sm text-stone-400 tracking-[0.02em]"
          >
            <span>Rückmeldung binnen 24 Stunden</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-stone-600" />
            <span>Saarland · ganz Deutschland</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-stone-600" />
            <span>Klienten seit 2024 · 4,9 / 5</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
