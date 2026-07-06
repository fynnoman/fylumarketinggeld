'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    q: 'Was kostet eine Fylu-Website?',
    a: 'Der Ausgangspreis für das Signature-Paket liegt bei 3.490 €. Das Atelier-Paket startet bei 6.490 €, das Maison-Paket bei 9.190 €. Diese Preise sind Ausgangspunkte — der endgültige Rahmen entsteht im Vorgespräch, in dem wir Substanz und Anspruch Ihres Vorhabens verstehen. Alle Preise verstehen sich zzgl. USt.',
  },
  {
    q: 'Warum nur zwölf Klienten pro Jahr?',
    a: 'Weniger Projekte pro Jahr bedeuten tiefere Verantwortung pro Projekt. Ein Fylu-Auftritt entsteht in Handschrift, nicht am Fließband. Der bewusst kleine Kalender ist keine Marketing-Aussage, sondern eine Werkstatt-Entscheidung — sie schützt Qualität, Aufmerksamkeit und Erreichbarkeit.',
  },
  {
    q: 'Was unterscheidet Fylu von anderen Studios im Saarland?',
    a: 'Fylu ist bewusst als Boutique-Studio positioniert. Sie sprechen direkt mit dem Studio-Lead — nicht mit einer Account-Manager-Kette. Jede Website ist editorial gestaltet, nicht aus einem Template zusammengesetzt. Und der Kalender ist bewusst klein gehalten, damit jedes Projekt die Tiefe bekommt, die es verdient.',
  },
  {
    q: 'Bekomme ich auch SEO, Ads oder Software?',
    a: 'Ja — als Erweiterungen der Website. Kleinere Pakete haben feste Ausgangspreise (Google Business ab 290 €, SEO Foundation ab 890 €, Google Ads Setup ab 690 €, SEO- oder Ads-Betreuung ab 490 bzw. 390 € pro Monat). Software- und App-Vorhaben besprechen wir persönlich, weil sie sich nicht sinnvoll pauschalieren lassen.',
  },
  {
    q: 'Wie lange dauert ein Projekt?',
    a: 'Das Signature-Paket geht in etwa zwei bis vier Wochen live. Atelier und Maison planen wir mit vier bis sechs Wochen — von Briefing bis Launch mit klaren Meilensteinen. Nach Live-Gang folgen neunzig Tage Studio-Begleitung, in denen wir die Wirkung feilen, bis sie dem Anspruch entspricht.',
  },
  {
    q: 'Was passiert nach dem Launch?',
    a: 'Neunzig Tage Studio-Begleitung sind bei Signature, Atelier und Maison Teil des Pakets. Danach entscheiden Sie: Übernahme der Pflege im eigenen Haus, monatliche Studio-Betreuung als zubuchbare Leistung oder eine iterative Erweiterung. Wir binden niemanden in Jahresverträge.',
  },
  {
    q: 'Für welche Häuser arbeitet Fylu?',
    a: 'Für Unternehmen im Saarland, die einen digitalen Auftritt mit Substanz suchen — vom Handwerksbetrieb über Kanzleien und regional führende Gastronomen bis zu Häusern mit nationaler Ambition. Und für internationale Klienten, die eine deutsche Handschrift für ihren Markt suchen.',
  },
  {
    q: 'Wann kann ein Vorgespräch stattfinden?',
    a: 'Vorgespräche dauern etwa fünfzehn Minuten und finden nach Absprache statt — persönlich am Telefon oder per Video. Wir hören zu, bevor wir antworten. Wenn wir zueinander passen, folgt ein konkretes Angebot binnen weniger Tage.',
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
                §IX
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Häufige Fragen
              </span>
            </div>
            <h2
              id="faq-heading"
              className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.2rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]"
            >
              Ehrlich{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                beantwortet.
              </span>
            </h2>
            <p className="text-stone-600 text-base md:text-lg mt-6 leading-relaxed">
              Die Fragen, die uns Klienten regelmäßig stellen.
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
            {' '}— wir antworten binnen weniger Stunden persönlich.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
