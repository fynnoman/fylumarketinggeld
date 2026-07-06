'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HandCircle, HandArrow } from './marks/HandMarks';

const ease = [0.22, 1, 0.36, 1] as const;

const caseStudies = [
  {
    metric: '250',
    unit: '%',
    metricLabel: 'Kaufabschlüsse',
    title: 'Ein Handelshaus. Dreimal so viel Kaufabschluss.',
    description:
      'Nach dem Neubau der Website mit klarer Führung entscheiden sich zweieinhalbmal so viele Besucher zum Kauf.',
    industry: 'E-Commerce',
    note: 'Fünf Wochen bis Live.',
  },
  {
    metric: '400',
    unit: '%',
    metricLabel: 'Nachfrage',
    title: 'Ein Ortsansässiger. Jetzt an der Spitze.',
    description:
      'Platz eins bei Google und vierfache Nachfrage nach Anrufen und Anfragen von neuen Klienten.',
    industry: 'Lokal · Saarland',
    note: 'Vom lokalen Anbieter zur ersten Wahl.',
  },
  {
    metric: '180',
    unit: '%',
    metricLabel: 'Zuwendung',
    title: 'Ein Serviceanbieter. Jetzt vielgefragt.',
    description:
      'Besucher bleiben länger und wenden sich häufiger — knapp verdoppeltes Interesse.',
    industry: 'Serviceanbieter',
    note: 'Vom Verlassen zur Zuwendung.',
  },
];

export default function CaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 bg-white overflow-hidden isolate"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.06) 1px, transparent 1.4px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Header — different intro: lowercase tag + huge type */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-3"
        >
          <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl">
            §III
          </span>
          <span className="ml-3 text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
            Zahlen
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[5rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.04em] max-w-4xl"
        >
          Zahlen, die für sich{' '}
          <span className="relative inline-block">
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              sprechen
            </span>
            <HandCircle
              className="absolute -inset-x-4 -inset-y-3 w-[calc(100%+2rem)] h-[calc(100%+1.5rem)] text-[var(--cyan-deep)] opacity-60"
              delay={0.6}
              inView={isInView}
            />
          </span>
          .
        </motion.h2>
      </div>

      {/* Cases — full-bleed editorial blocks */}
      <div className="relative z-10 mt-20 md:mt-28 space-y-24 md:space-y-40">
        {caseStudies.map((study, i) => {
          const isOdd = i % 2 === 1;
          return (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease }}
              className="relative max-w-7xl mx-auto"
            >
              <div
                className={`grid lg:grid-cols-12 gap-8 items-start ${
                  isOdd ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* Number side — bleeds off the edge */}
                <div
                  className={`lg:col-span-7 relative ${
                    isOdd ? 'lg:[direction:ltr]' : ''
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      isOdd ? 'lg:-mr-[10vw]' : 'lg:-ml-[10vw]'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15, ease }}
                      className="flex items-start leading-none select-none"
                    >
                      <span
                        className={`font-display italic font-normal text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] tracking-[-0.06em] leading-[0.78] ${
                          i === 0
                            ? 'text-[var(--ink)]'
                            : i === 1
                            ? 'text-[var(--amber)]'
                            : 'text-[var(--cyan-deep)]'
                        }`}
                      >
                        +{study.metric}
                      </span>
                      <span
                        className={`font-display italic font-normal text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] mt-4 ${
                          i === 0
                            ? 'text-[var(--cyan-deep)]'
                            : i === 1
                            ? 'text-[var(--ink)]'
                            : 'text-[var(--ink)]'
                        }`}
                      >
                        {study.unit}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Text side */}
                <div
                  className={`lg:col-span-5 px-5 md:px-8 pt-2 ${
                    isOdd ? 'lg:[direction:ltr]' : ''
                  }`}
                >
                  <div className="flex items-baseline gap-2 mb-5">
                    <span className="font-display italic text-stone-400 text-xl leading-none">
                      0{i + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-500">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-sm uppercase tracking-[0.14em] font-semibold text-[var(--ink)] mb-5">
                    {study.metricLabel}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] leading-tight tracking-tight mb-4">
                    {study.title}
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed max-w-md">
                    {study.description}
                  </p>

                  {/* Handwritten note */}
                  <div className="mt-7 flex items-baseline gap-3 max-w-md">
                    <HandArrow
                      className={`w-12 h-8 text-[var(--amber)] ${
                        isOdd ? 'rotate-180' : ''
                      }`}
                      direction={isOdd ? 'left' : 'right'}
                      delay={0.8}
                      inView={isInView}
                    />
                    <p className="font-hand text-xl text-[var(--amber)] leading-tight">
                      {study.note}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
