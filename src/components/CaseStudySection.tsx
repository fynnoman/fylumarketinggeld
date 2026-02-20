'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const caseStudies = [
  {
    title: 'Online-Shop verdreifacht Verkäufe',
    description: 'Durch eine neue, übersichtliche Website kaufen jetzt 2,5x mehr Besucher ein.',
    metric: '+250%',
    metricLabel: 'Mehr Verkäufe',
  },
  {
    title: 'Lokales Geschäft wird gefunden',
    description: 'Jetzt auf Platz 1 bei Google – 400% mehr Anrufe und Anfragen von Neukunden.',
    metric: '+400%',
    metricLabel: 'Mehr Anfragen',
  },
  {
    title: 'Moderne Website zieht Kunden an',
    description: 'Besucher bleiben länger und melden sich häufiger an – 180% mehr Interesse.',
    metric: '+180%',
    metricLabel: 'Mehr Interesse',
  },
];

export default function CaseStudySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-stone-100 to-stone-200 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Bewährte Ergebnisse
          </h2>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            Echte Erfolge von Unternehmen, die jetzt mit ihrer Website Kunden gewinnen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-stone-300"
            >
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"
                >
                  <span className="text-3xl font-bold text-white">{study.metric}</span>
                </motion.div>
                <p className="text-sm text-stone-600 mt-2 font-semibold">{study.metricLabel}</p>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                {study.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {study.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
