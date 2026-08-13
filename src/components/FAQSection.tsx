'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    q: 'Wie läuft ein Projekt mit Fylu ab?',
    a: 'Am Anfang steht die Analyse: Wir zeigen konkret, warum Ihre aktuelle Website Besucher verliert. Passt es, wird der Entwurf zum Beweis — Ziel, Zielgruppe und Verkaufsarchitektur werden dort sichtbar. Vom Briefing bis zum Live-Gang: ein Ansprechpartner.',
  },
  {
    q: 'Wie lange dauert es, bis meine Website live ist?',
    a: 'Zwei bis vier Wochen. Grössere Vorhaben mit SEO-Aufbau, Ads und mehreren Unterseiten: vier bis sechs. Danach 90 Tage Begleitung.',
  },
  {
    q: 'Was unterscheidet Fylu von anderen Studios im Saarland?',
    a: 'Persönlich geführtes Studio aus Saarlouis. Direkt mit dem Studio-Lead, keine Account-Manager-Kette. Individuell gestaltet, nie aus Templates. Bewusst kleiner Kalender — jedes Projekt bekommt Tiefe.',
  },
  {
    q: 'Bekomme ich auch SEO, Google Ads oder Software?',
    a: 'Ja. Lokales SEO Saarland, Google-Unternehmensprofil, Google Ads und individuelle Software- oder App-Entwicklung. Umfang klären wir im Vorgespräch.',
  },
  {
    q: 'Für welche Häuser arbeitet Fylu?',
    a: 'Etablierte Unternehmen, für die eine Website wirtschaftlich zählt und ein einzelner Kunde einen relevanten Wert hat — hochwertige Handwerksbetriebe, Kanzleien, Praxen, Berater, B2B-Dienstleister. Vom Saarland aus, in ganz Deutschland und international.',
  },
  {
    q: 'Wann kann ein Vorgespräch stattfinden?',
    a: 'Etwa 15 Minuten, telefonisch oder per Video. Wir hören zu, bevor wir antworten. Passt es, folgt binnen weniger Tage ein konkretes Angebot.',
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 bg-[var(--background-warm)] overflow-hidden isolate"
      aria-labelledby="faq-heading"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          aria-hidden
          className="glass-bloom-cyan absolute top-[10%] left-[8%] w-[36vw] h-[36vw] max-w-[440px] max-h-[440px] rounded-full opacity-80"
        />
        <div
          aria-hidden
          className="glass-bloom-warm absolute bottom-[8%] right-[6%] w-[30vw] h-[30vw] max-w-[380px] max-h-[380px] rounded-full opacity-70"
        />
      </div>

      {/* Big background outline label */}
      <div
        aria-hidden
        className="absolute -bottom-[6vw] left-[-4vw] pointer-events-none select-none"
      >
        <div className="text-outline font-display italic font-normal text-[22vw] leading-[0.85] opacity-30">
          Fragen
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-14 md:mb-20"
          >
            <div className="mb-6 flex items-baseline justify-center gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                §09
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Häufige Fragen
              </span>
            </div>
            <h2
              id="faq-heading"
              className="text-[3rem] leading-[0.94] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-semibold text-[var(--ink)] tracking-[-0.045em]"
            >
              Ehrlich{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                beantwortet.
              </span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="relative glass rounded-2xl overflow-hidden"
              >
                <span className="glass-edge" aria-hidden />
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="relative w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-white/25 transition-colors group"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-display italic text-cyan-700 text-sm leading-none">0{i + 1}</span>
                    <span className="font-medium text-[var(--ink)] text-base md:text-[17px] tracking-tight">{faq.q}</span>
                  </span>
                  <svg
                    className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="relative overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-stone-700 leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12 text-stone-600"
          >
            Ihre Frage ist nicht dabei?{' '}
            <a
              href="mailto:kontakt@fylumarketing.de"
              className="text-cyan-700 hover:text-cyan-800 font-semibold underline underline-offset-4"
            >
              Schreiben Sie uns
            </a>
            .
          </motion.div>
        </div>
      </div>
    </section>
  );
}
