'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Analyse',
    subtitle: 'Saarland-Marktscan & Sichtbarkeits-Audit',
    body:
      'Wir prüfen Ihre Top-Wettbewerber im Saarland, Ihre aktuelle Sichtbarkeit bei Google, Bing und Maps sowie die digitale Reife Ihrer Branche. Sie erhalten einen schonungslosen Befund — keine Schönfärberei.',
  },
  {
    number: '02',
    title: 'Strategie',
    subtitle: 'Positionierung & Conversion-Architektur',
    body:
      'Wir entwickeln Ihre maßgeschneiderte Positionierung gegenüber lokaler Konkurrenz, definieren die richtige Zielgruppe und entwerfen die Conversion-Pfade Ihrer neuen Website. Kein Template, kein Bauchgefühl.',
  },
  {
    number: '03',
    title: 'Realisation',
    subtitle: 'Design & Development mit Verkaufsfokus',
    body:
      'Wir bauen Ihre Website mit Premium-Design, technischer SEO-Foundation, optimaler Performance, Schema.org-Strukturen und sauberem Code. Jedes Element folgt einem klaren Zweck: Anfragen produzieren.',
  },
  {
    number: '04',
    title: 'Sichtbarkeit',
    subtitle: 'Lokale Schärfung & Google Business',
    body:
      'Wir optimieren Ihre Sichtbarkeit für die Suchbegriffe, die Saarländer Kunden wirklich eingeben — über lokales SEO, Branchen-Snippets, strukturierte Daten und ein professionell aufgesetztes Google-Unternehmensprofil.',
  },
  {
    number: '05',
    title: 'Skalierung',
    subtitle: '90-Tage-Monitoring & Iteration',
    body:
      'In den ersten 90 Tagen nach Live-Gang messen wir, was wirklich Anfragen bringt — und optimieren kostenlos weiter, bis die Zahlen stimmen. Sie zahlen nicht für Theorie, sondern für Ergebnisse.',
  },
];

export default function MethodikSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="methodik"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      aria-labelledby="methodik-heading"
    >
      {/* Decorative grid background */}
      <div className="absolute inset-0 grid-background opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <span className="text-sm font-bold text-cyan-500 uppercase tracking-wider">
            Unser System
          </span>
          <h2
            id="methodik-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-stone-900 leading-tight"
          >
            Das Fylu{' '}
            <span className="text-cyan-600">Sichtbarkeits-System</span>
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            Fünf klar definierte Schritte, mit denen wir Saarländer Unternehmen in 90 Tagen aus dem
            digitalen Mittelmaß holen — beweisbar, messbar, ohne Bauchgefühl.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="relative h-full bg-white rounded-2xl border border-stone-100 p-6 hover:border-cyan-200 hover:shadow-lg transition-all duration-300">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-extrabold text-lg shadow-lg mb-5">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-1">{step.title}</h3>
                  <p className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            href="/methodik"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold underline underline-offset-4 transition-colors"
          >
            Vollständige Methodik ansehen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
