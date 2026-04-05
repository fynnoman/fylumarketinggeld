'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LazyVideo from './LazyVideo';

const problems = [
  'Ihre aktuelle Website sieht veraltet aus und schreckt potenzielle Kunden ab',
  'Mobile Besucher springen sofort ab – keine Optimierung für Smartphones',
  'Kein klarer Call-to-Action – Besucher wissen nicht, was sie tun sollen',
];

export default function ProblemSolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-white">
      <LazyVideo src="/glyph_waves_remix.mp4" opacity="opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-bold mb-20 text-left max-w-2xl text-gray-900"
        >
          Das Problem kenne ich
        </motion.h2>

        <div className="max-w-3xl">
          {/* Problems - Minimalist Cards */}
          <div className="space-y-8 mb-16">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Minimal border effect */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="pl-6">
                  <p className="text-lg md:text-xl text-gray-900 group-hover:text-black transition-colors leading-relaxed">
                    {problem}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solution Text - Simple with Marker Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
              Ihre Website muss{' '}
              <span className="relative inline-block">
                <span className="relative z-10">liefern</span>
                {/* Marker effect - cyan highlight */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-5 bg-cyan-400 opacity-60 -rotate-1"
                  style={{ transformOrigin: 'left' }}
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-0.5 left-0 right-0 h-4 bg-cyan-500 opacity-40 rotate-1"
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              {' '}– nicht nur existieren
            </h3>
            <div className="text-xl text-gray-900 mb-10 leading-relaxed">
              Ich verwandle Ihre Online-Präsenz in eine{' '}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-black">professionelle Verkaufsmaschine</span>
                {/* Marker effect on important phrase */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-0.5 left-0 right-0 h-3 bg-cyan-400 opacity-40 -rotate-1"
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              {' '}– mit voller Hingabe, statt Massenproduktion.
            </div>
            <Link
              href="/angebote"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)] active:scale-[0.98] inline-flex items-center gap-3 group/btn"
            >
              <span>Jetzt Transformation starten</span>
              <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
