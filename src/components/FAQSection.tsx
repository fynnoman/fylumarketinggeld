'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    q: 'Was kostet eine professionelle Website wirklich?',
    a: 'Jedes Projekt wird individuell kalkuliert — abhängig von Umfang, Funktionsbedarf, Branche und Zielsetzung. Die konkrete Größenordnung besprechen wir kostenlos und unverbindlich in einem 15-Minuten-Strategiegespräch. Anrufen oder Anfrage senden.',
  },
  {
    q: 'Wie lange dauert es, bis meine Website live ist?',
    a: 'Standardprojekte gehen in 2 bis 4 Wochen live. Premium-Projekte mit individuellem Strategie- und SEO-Konzept planen wir mit 4 bis 8 Wochen — von Briefing bis Launch, mit klaren Meilensteinen, festen Feedback-Runden und ohne Verzögerungs-Spielräume.',
  },
  {
    q: 'Arbeiten Sie auch mit Unternehmen außerhalb des Saarlands?',
    a: 'Unser Hauptmarkt ist das Saarland: Saarbrücken, Saarlouis, Neunkirchen, Homburg, Völklingen, Merzig, St. Wendel, Dillingen und alle umliegenden Orte. Wir arbeiten aber auch deutschland- und EU-weit, wenn die Branchen-Passung stimmt. Aktuell betreuen wir Kunden in Deutschland und in den USA.',
  },
  {
    q: 'Bekomme ich auch SEO und Google Ads aus einer Hand?',
    a: 'Jede Website wird mit SEO-Foundation ausgeliefert — also technisches SEO, OnPage-Optimierung, Schema.org-Strukturen, Sitemap, Performance und mobile Optimierung. Erweiterte SEO-Betreuung (Content-Strategie, lokale Sichtbarkeit, Linkaufbau) und Google-Ads-Kampagnen buchen Sie als Erweiterung dazu. Wir beraten transparent, was für Ihre Branche und Region wirklich sinnvoll ist — kein Pflicht-Bundle.',
  },
  {
    q: 'Was passiert nach dem Launch?',
    a: 'Sie stehen nicht alleine da. 30 Tage Nach-Launch-Support sind im Standardpaket enthalten. Danach können Sie unsere monatliche Betreuung buchen (Updates, Performance-Monitoring, kleinere Optimierungen, technische Wartung) oder die Pflege selbst übernehmen. Wir binden Sie nicht in 24-Monats-Knebelverträge.',
  },
  {
    q: 'Wer arbeitet eigentlich an meinem Projekt?',
    a: 'Inhaber und Strategie-Kopf von Fylu ist Fynn Schulz — er ist Ihr direkter Ansprechpartner über das gesamte Projekt hinweg. Für Design, Entwicklung und spezialisierte Disziplinen (Texte, Fotografie, Schnittstellen, technisches SEO) arbeiten wir mit einem festen Netzwerk aus geprüften Spezialisten zusammen. Keine austauschbaren Account Manager, keine Praktikanten, keine Outsourcing-Black-Box.',
  },
  {
    q: 'Wie schnell können wir starten?',
    a: 'Wir nehmen pro Monat maximal drei neue Kundenprojekte an — damit jedes Projekt unsere volle Aufmerksamkeit bekommt. Nach einem kurzen Strategiegespräch starten wir in der Regel innerhalb von 7 bis 14 Tagen mit dem Projekt-Briefing. Bei sehr knappen Deadlines können wir gegen Aufschlag beschleunigen.',
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-40 bg-[var(--background-warm)] overflow-hidden"
      aria-labelledby="faq-heading"
    >
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
                §9
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
                Häufige Fragen
              </span>
            </div>
            <h2
              id="faq-heading"
              className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]"
            >
              Ehrlich{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                beantwortet.
              </span>
            </h2>
            <p className="text-stone-600 text-base md:text-lg mt-5 leading-relaxed">
              Die Fragen, die uns Saarländer Unternehmer am häufigsten stellen.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl border border-stone-200/70 overflow-hidden hover:border-cyan-200 transition-colors"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-stone-50/60 transition-colors group"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-display italic text-cyan-700 text-sm leading-none">0{i + 1}</span>
                    <span className="font-medium text-[var(--ink)] text-base md:text-[17px] tracking-tight">{faq.q}</span>
                  </span>
                  <svg
                    className={`w-5 h-5 text-cyan-500 flex-shrink-0 transition-transform duration-300 ${
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
                      className="overflow-hidden"
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
              className="text-cyan-600 hover:text-cyan-700 font-semibold underline underline-offset-4"
            >
              Schreiben Sie uns
            </a>
            {' '}— wir antworten innerhalb von 4 Stunden.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
