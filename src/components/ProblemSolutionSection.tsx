'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
      {/* Full-Width Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/glyph_waves_remix.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-white/0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group relative"
              >
                {/* Minimal border effect */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-500 opacity-50 group-hover:opacity-100 group-hover:w-2 transition-all"></div>
                
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
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
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
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="absolute -bottom-1 left-0 right-0 h-5 bg-cyan-400 opacity-60 -rotate-1"
                  style={{ transformOrigin: 'left' }}
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
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
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -bottom-0.5 left-0 right-0 h-3 bg-cyan-400 opacity-40 -rotate-1"
                  style={{ transformOrigin: 'left' }}
                />
              </span>
              {' '}– mit voller Hingabe, statt Massenproduktion.
            </div>
            <Link href="/angebote">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 60px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-xl text-lg font-bold shadow-lg transition-all inline-flex items-center gap-3 group/btn"
              >
                <span>Jetzt Transformation starten</span>
                <motion.span
                  className="transition-transform group-hover/btn:translate-x-1"
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
