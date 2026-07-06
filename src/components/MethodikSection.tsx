'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: '01',
    duration: 'Tag 1 – 3',
    title: 'Vorgespräch',
    subtitle: 'Verstehen, wofür Sie stehen',
    body:
      'Wir hören zu, bevor wir zeichnen. Wir prüfen den Markt, die aktuelle Präsenz und die Substanz Ihres Hauses — und teilen einen ehrlichen Befund, ohne Schönfärberei.',
    deliverable: 'Marktbild · Präsenz-Befund · Briefing',
  },
  {
    number: '02',
    duration: 'Tag 4 – 7',
    title: 'Positionierung',
    subtitle: 'Rahmen und Verkaufsarchitektur',
    body:
      'Wir entwerfen die Positionierung Ihres Hauses im lokalen Markt, definieren die Zielgruppe und skizzieren die Führung der neuen Präsenz. Kein Template, keine Vorlage.',
    deliverable: 'Positionierung · Wireframes · Content-Map',
  },
  {
    number: '03',
    duration: 'Tag 8 – 21',
    title: 'Werkbank',
    subtitle: 'Design und Umsetzung mit Handschrift',
    body:
      'Wir bauen Ihre Website mit editorial gestaltetem Design, technischer SEO-Foundation, sauberem Code, strukturierten Daten und einer Rhythmisierung, die spürbar ist.',
    deliverable: 'Live-Website · Schema · Performance-Setup',
  },
  {
    number: '04',
    duration: 'Tag 22 – 28',
    title: 'Sichtbarkeit',
    subtitle: 'Lokale Schärfung und Google-Präsenz',
    body:
      'Wir schärfen Ihre Sichtbarkeit für die Begriffe, die Klienten im Saarland tatsächlich eingeben — über lokales SEO, strukturierte Daten und ein Google-Profil, das dem Auftritt entspricht.',
    deliverable: 'Lokales SEO · Google-Profil · Snippets',
  },
  {
    number: '05',
    duration: 'Tag 29 – 90',
    title: 'Iteration',
    subtitle: 'Neunzig Tage Studio-Begleitung',
    body:
      'In den ersten neunzig Tagen nach Live-Gang messen wir die Wirkung und feilen weiter, bis die Zahlen dem Anspruch entsprechen. Zeit für Substanz, nicht für Theorie.',
    deliverable: 'Reporting · A/B-Iteration · Feinschliff',
  },
];

export default function MethodikSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={ref}
      id="methodik"
      className="relative py-28 md:py-40 bg-white overflow-hidden isolate"
      aria-labelledby="methodik-heading"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse 70% 80% at 50% 40%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 80% at 50% 40%, black 30%, transparent 80%)',
          }}
        />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw]"
          style={{
            background:
              'radial-gradient(40% 40% at 50% 30%, rgba(6,182,212,0.10), transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <div className="mb-6 flex items-baseline justify-center gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §VI
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Der Fylu-Prozess
            </span>
          </div>
          <h2
            id="methodik-heading"
            className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]"
          >
            Fünf Kapitel — von der{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Vorstellung bis zur Wirkung.
            </span>
          </h2>
          <p className="mt-7 text-lg text-stone-600 leading-relaxed">
            Beweisbare Wirkung. Sichtbare Meilensteine. In etwa neunzig Tagen.
          </p>
        </motion.div>

        {/* Journey */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical track */}
          <div
            className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-px bg-stone-200"
            aria-hidden
          />
          {/* Animated progress fill */}
          <motion.div
            className="absolute left-[26px] md:left-1/2 top-0 w-px bg-gradient-to-b from-cyan-500 via-cyan-400 to-cyan-200 origin-top"
            style={{ height: lineHeight }}
            aria-hidden
          />

          <div className="space-y-14 md:space-y-20">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease }}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-start"
                >
                  {/* Milestone dot — pulsing */}
                  <div className="absolute left-[14px] md:left-1/2 top-2 md:-translate-x-1/2 z-10">
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-40" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-white" />
                    </span>
                  </div>

                  {/* Left side content */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft ? 'md:text-right md:pr-10' : 'md:col-start-2 md:pl-10'
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] font-semibold text-stone-500 mb-3 ${
                        isLeft ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      <span>{step.duration}</span>
                    </div>
                    <div className="flex items-baseline gap-4 mb-3" style={{ flexDirection: isLeft ? 'row-reverse' : 'row' }}>
                      <span className="font-display italic font-normal text-[3.5rem] md:text-[4.5rem] leading-none text-[var(--cyan-deep)]">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-tight leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p
                      className={`text-sm font-medium text-cyan-700 mb-3 max-w-md ${
                        isLeft ? 'md:ml-auto' : ''
                      }`}
                    >
                      {step.subtitle}
                    </p>
                    <p
                      className={`text-stone-600 leading-relaxed max-w-md text-[0.95rem] ${
                        isLeft ? 'md:ml-auto' : ''
                      }`}
                    >
                      {step.body}
                    </p>
                    <div
                      className={`mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-50 border border-stone-200/70 text-[11px] text-stone-600 ${
                        isLeft ? 'md:float-right md:clear-both' : ''
                      }`}
                    >
                      <span className="font-semibold text-stone-700">Deliverables:</span>
                      <span>{step.deliverable}</span>
                    </div>
                  </div>

                  {/* Spacer on opposite side */}
                  <div className={isLeft ? '' : 'md:col-start-1 md:row-start-1'} />
                </motion.div>
              );
            })}

            {/* Finish flag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="relative pl-14 md:pl-0 md:text-center"
            >
              <div className="absolute left-[14px] md:left-1/2 top-2 md:-translate-x-1/2 z-10">
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[var(--ink)] ring-4 ring-white">
                  <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="md:inline-block md:mt-12 px-5 py-3 rounded-2xl bg-[var(--ink)] text-white text-sm font-semibold tracking-[0.02em]">
                Live · Sichtbar · Bleibend
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mt-20"
        >
          <Link
            href="/methodik"
            className="group inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-900 font-semibold transition-colors"
          >
            <span className="relative">
              Zum ganzen Prozess
              <span className="absolute inset-x-0 bottom-0 h-px bg-cyan-700/40" />
            </span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
