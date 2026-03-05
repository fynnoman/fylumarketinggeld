'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 600], [0, 80]);
  const [isMobile, setIsMobile] = useState(false);

  const imgY = useTransform(scrollY, [0, 600], [0, -50]);
  const imgScale = useTransform(scrollY, [0, 600], [1, 1.04]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <motion.div
        className="absolute inset-0 z-0 bg-center bg-cover will-change-transform"
        style={{
          backgroundImage: "url('/C64B3436-B13E-4321-AA01-C0F84E766D06.png')",
          y: imgY,
          scale: imgScale,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-white/40 md:bg-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full px-5 py-24 md:py-12 md:pr-[65vw] flex items-center will-change-transform"
        style={{ x: isMobile ? 0 : x }}
      >
        <div className="max-w-2xl lg:max-w-xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight tracking-tight"
          >
            Websites, die nicht nur beeindrucken,{' '}
            <span className="text-cyan-600">sondern verkaufen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: smoothEase }}
            className="text-base md:text-lg text-gray-700 mb-8 max-w-lg"
          >
            Professionelles Webdesign und Google-Optimierung, die messbare Ergebnisse liefern — mehr Anfragen, mehr Umsatz, mehr Wachstum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: smoothEase }}
            className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-start"
          >
            <Link href="/angebote" className="w-full sm:w-auto">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-4 rounded-full text-base font-bold shadow-md transition-all duration-200 hover:shadow-lg active:scale-[0.98]">
                Kostenlosen Entwurf sichern
              </button>
            </Link>

            <Link href="#packages" className="w-full sm:w-auto">
              <button className="w-full bg-white hover:bg-stone-50 text-gray-900 px-5 py-4 rounded-full text-base font-semibold border-2 border-gray-200 transition-all duration-200 active:scale-[0.98]">
                Meine Angebote
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
