'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

const guarantees = [
  {
    value: '90',
    unit: 'Tage',
    label: 'Begleitung',
    body: 'Studio-Begleitung nach Live-Gang, damit die Zahlen dem Anspruch folgen.',
  },
  {
    value: '0',
    unit: 'Aufschlag',
    label: 'Iteration',
    body: 'Wenn die Wirkung dem Anspruch noch nicht folgt, feilen wir weiter — ohne Aufschlag.',
  },
  {
    value: '100',
    unit: '%',
    label: 'Verantwortung',
    body: 'Kein Abwälzen, keine Ausreden. Wir feilen, bis das Werk der Handschrift entspricht.',
  },
];

export default function GarantieSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 bg-[var(--background-warm)] overflow-hidden isolate"
      aria-labelledby="garantie-heading"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.06) 1px, transparent 1.4px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 70% 70% at 50% 40%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 70% at 50% 40%, black 30%, transparent 80%)',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgba(6,182,212,0.10), transparent 70%)',
          }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        />
        <div className="noise-overlay opacity-30" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-md border border-[var(--cyan-deep)]/30 -rotate-2">
              <span className="font-display italic text-[var(--cyan-deep)] text-xl leading-none">
                §07
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-semibold">
                Versprechen
              </span>
            </div>

            <h2
              id="garantie-heading"
              className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em] max-w-4xl mx-auto"
            >
              Wir stehen{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                persönlich
              </span>{' '}
              für unsere Arbeit ein.
            </h2>
            <p className="mt-7 text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              Wir bauen keine Präsenz — wir bauen Auftritte, die tragen. Und wenn
              die Wirkung dem Anspruch einmal nicht folgt, feilen wir weiter, bis
              das Werk der Handschrift entspricht.
            </p>
          </motion.div>

          {/* Guarantee tiles */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="grid sm:grid-cols-3 gap-4 md:gap-5 mt-14 md:mt-16"
          >
            {guarantees.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.25 + i * 0.1, ease }}
                whileHover={{ y: -6 }}
                className="relative bg-white rounded-3xl p-7 md:p-8 border border-stone-200/70 overflow-hidden group transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(12,14,16,0.25)]"
              >
                {/* Cyan corner glow on hover */}
                <div
                  className="absolute -top-16 -right-16 w-[200px] h-[200px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(6,182,212,0.25), transparent 65%)',
                  }}
                />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-stone-500 mb-4">
                    {g.label}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display italic font-normal text-[5rem] md:text-[5.5rem] leading-[0.85] text-[var(--ink)] tracking-[-0.03em]">
                      {g.value}
                    </span>
                    <span className="font-display italic font-normal text-2xl md:text-3xl text-[var(--cyan-deep)] leading-none">
                      {g.unit}
                    </span>
                  </div>
                  <p className="mt-6 text-stone-600 leading-relaxed text-sm">
                    {g.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scarcity panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="relative mt-12 md:mt-16 bg-[var(--ink)] rounded-3xl p-8 md:p-12 text-white overflow-hidden"
          >
            {/* Cyan corner glow */}
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.06, 1],
              }}
              transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
              className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(6,182,212,0.4), transparent 60%)',
              }}
            />
            <div className="noise-overlay opacity-40 mix-blend-overlay" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="lg:flex-1">
                <div className="editorial-eyebrow-inverse mb-5">
                  <span>Persönlich</span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-[2.2rem] font-semibold leading-[1.15] tracking-[-0.015em]">
                  Kein Kundenservice-Portal. Kein Ticket.{' '}
                  <span className="font-display italic font-normal text-cyan-300">
                    Ein direkter Draht.
                  </span>
                </h3>
                <p className="text-stone-400 text-sm md:text-base mt-4 max-w-xl leading-relaxed">
                  Ein Vorgespräch, um zu prüfen, ob wir zueinander passen. Ohne
                  Verkaufsdruck, ohne Standard-Slides — wir hören zu, bevor wir
                  antworten.
                </p>
              </div>

              <Link
                href="/buchen"
                className="group inline-flex items-center gap-2 whitespace-nowrap text-center bg-white hover:bg-cyan-50 text-[var(--ink)] px-7 py-4 rounded-full font-semibold shadow-[0_14px_40px_-14px_rgba(255,255,255,0.4)] transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0"
              >
                <span>Vorgespräch buchen</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
