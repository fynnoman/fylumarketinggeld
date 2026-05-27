'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function GarantieSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      aria-labelledby="garantie-heading"
    >
      {/* Soft cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="text-sm font-bold text-cyan-500 uppercase tracking-wider">
              Unser Versprechen
            </span>
            <h2
              id="garantie-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-stone-900 leading-tight"
            >
              Wenn die Website nicht{' '}
              <span className="text-cyan-600">mehr Anfragen</span> bringt, arbeiten wir kostenlos
              nach.
            </h2>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              Wir bauen keine Visitenkarten-Websites. Wir bauen Kundengewinnungssysteme. Und wir
              stehen so hinter unserer Arbeit, dass wir Ihnen ein klares Versprechen geben:{' '}
              <span className="font-semibold text-stone-900">
                Sollten Sie 90 Tage nach Live-Gang keine messbar höheren Anfragen über Ihre Website
                bekommen, optimieren wir kostenlos nach — bis die Zahlen stimmen.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-3 gap-5 md:gap-6 mt-12"
          >
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <div className="text-4xl font-extrabold text-cyan-600 mb-2">90 Tage</div>
              <p className="text-stone-700 text-sm leading-relaxed">
                Garantierter Beobachtungs- und Optimierungszeitraum nach dem Live-Gang Ihrer
                Website.
              </p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <div className="text-4xl font-extrabold text-cyan-600 mb-2">0 €</div>
              <p className="text-stone-700 text-sm leading-relaxed">
                Zusätzliche Kosten bei der Nachoptimierung, wenn die Anfragen unter unserer Zielmarke
                bleiben.
              </p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <div className="text-4xl font-extrabold text-cyan-600 mb-2">100 %</div>
              <p className="text-stone-700 text-sm leading-relaxed">
                Verantwortung für Ihr Ergebnis — kein Abwälzen, keine Ausreden, kein
                Standard-Template.
              </p>
            </div>
          </motion.div>

          {/* Scarcity / Kapazität */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 md:p-10 text-white"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
                </span>
                <span className="text-cyan-400 font-semibold uppercase tracking-wider text-xs">
                  Aktuelle Kapazität
                </span>
              </div>
              <div className="flex-1">
                <p className="text-lg md:text-xl font-semibold leading-snug">
                  Wir nehmen pro Monat maximal{' '}
                  <span className="text-cyan-400">3 neue Kundenprojekte</span> an — damit jedes
                  Projekt unsere volle Aufmerksamkeit bekommt.
                </p>
                <p className="text-stone-300 text-sm mt-2">
                  Aktuell sind noch wenige Slots frei. Wer früh anfragt, sichert sich Priorität.
                </p>
              </div>
              <Link
                href="/angebote"
                className="w-full md:w-auto whitespace-nowrap text-center bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-4 rounded-full font-bold shadow-lg transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.4)] active:scale-[0.98]"
              >
                Slot sichern
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
