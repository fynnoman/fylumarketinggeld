'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const smoothEase = [0.22, 1, 0.36, 1] as const;

const GLOWS = [
  // Tallest column glass-top (top-right)
  { top: '23%', right: '13%', size: 160, minOp: 0.35, maxOp: 0.75, maxScale: 1.25, duration: 3.8, delay: 0 },
  // Mid-tall column glass-top (center-right)
  { top: '42%', right: '33%', size: 130, minOp: 0.25, maxOp: 0.6, maxScale: 1.2, duration: 4.5, delay: 0.7 },
  // Short pillar glass-top (front)
  { top: '58%', right: '22%', size: 110, minOp: 0.2, maxOp: 0.55, maxScale: 1.18, duration: 5.2, delay: 1.4 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Animated podium background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{ y: [0, -10, 0], scale: [1, 1.025, 1] }}
          transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
        >
          <Image
            src="/1ec6b235-4a5e-4715-9724-3327085a5ae8.webp"
            alt=""
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-right select-none"
            draggable={false}
          />
        </motion.div>

        {/* Pulsing cyan glows on each glass-top */}
        {GLOWS.map((g, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:block"
            style={{ top: g.top, right: g.right, width: g.size, height: g.size }}
            animate={{
              opacity: [g.minOp, g.maxOp, g.minOp],
              scale: [1, g.maxScale, 1],
            }}
            transition={{
              duration: g.duration,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: g.delay,
            }}
          >
            <div className="w-full h-full bg-cyan-400 rounded-full blur-3xl" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 pt-32 md:pt-40 pb-24 md:pb-16 md:pr-[60vw] flex items-center">

        <div className="max-w-2xl lg:max-w-2xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight tracking-tight"
          >
            Webdesign aus dem Saarland,{' '}
            <span className="text-cyan-600">das wirklich verkauft</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: smoothEase }}
            className="text-base md:text-lg text-gray-700 mb-8 max-w-lg"
          >
            Professionelle Websites, SEO-Optimierung und Google Ads für Unternehmen im Saarland und ganz Deutschland — mehr Sichtbarkeit, mehr Anfragen, mehr Umsatz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: smoothEase }}
            className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-start"
          >
            <Link
              href="/angebote"
              className="w-full sm:w-auto block text-center bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-4 rounded-full text-base font-bold shadow-md transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
            >
              Kostenlosen Entwurf sichern
            </Link>

            <Link
              href="#packages"
              className="w-full sm:w-auto block text-center bg-white hover:bg-stone-50 text-gray-900 px-5 py-4 rounded-full text-base font-semibold border-2 border-gray-200 transition-all duration-200 active:scale-[0.98]"
            >
              Meine Angebote
            </Link>
          </motion.div>
        </div>
      </div>

      {/* SEO-relevanter, visuell integrierter Text */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center px-4">
        <p className="text-xs text-gray-500 max-w-2xl mx-auto">
          Webdesign Saarland — Webdesigner aus Saarlouis für Saarbrücken, Merzig, Dillingen und ganz Deutschland
        </p>
      </div>
    </section>
  );
}
