'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 600], [0, 120]);
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    let timeoutId: number | undefined;

    const onEnded = () => {
      timeoutId = window.setTimeout(() => {
        if (!videoRef.current) return;
        try {
          videoRef.current.currentTime = 0;
          const p = videoRef.current.play();
          if (p && typeof p.then === 'function') p.catch(() => {});
        } catch (e) { /* ignore */ }
      }, 5000);
    };

    vid.addEventListener('ended', onEnded);
    return () => {
      vid.removeEventListener('ended', onEnded);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* background video */}
      <div className="absolute inset-0 z-0 bg-white" aria-hidden="true">
        <video
          ref={videoRef}
          src="/Videoerstellung_Dein_Video_ist_fertig_.mov"
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center bg-white"
        />
        {/* mobile overlay so text is always readable */}
        <div className="absolute inset-0 bg-white/60 md:hidden" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full px-5 py-24 md:py-12 md:pr-[65vw] flex items-center"
        style={{ x: isMobile ? 0 : x }}
      >
        <div className="max-w-2xl lg:max-w-xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight tracking-tight"
          >
            Websites, die nicht nur beeindrucken,{' '}
            <span className="text-cyan-600">sondern verkaufen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-700 mb-8 max-w-lg"
          >
            Professionelles Webdesign und Google-Optimierung, die messbare Ergebnisse liefern — mehr Anfragen, mehr Umsatz, mehr Wachstum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-start"
          >
            <Link href="/angebote" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-4 rounded-full text-base font-bold shadow-md"
              >
                Kostenlosen Entwurf sichern
              </motion.button>
            </Link>

            <Link href="#packages" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-gray-900 px-5 py-4 rounded-full text-base font-semibold border-2 border-gray-200"
              >
                Meine Angebote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
