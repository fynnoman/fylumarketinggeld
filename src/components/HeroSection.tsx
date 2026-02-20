'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  // plain background video (no JS effects)
  const { scrollY } = useScroll();
  // move text to the right as user scrolls (0 -> 600px scroll maps to 0 -> 120px shift)
  const x = useTransform(scrollY, [0, 600], [0, 120]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    let timeoutId: number | undefined;

    const onEnded = () => {
      // video ended: leave last frame visible, then restart after 5s
      timeoutId = window.setTimeout(() => {
        if (!videoRef.current) return;
        try {
          videoRef.current.currentTime = 0;
          const p = videoRef.current.play();
          if (p && typeof p.then === 'function') p.catch(() => {});
        } catch (e) {
          // ignore
        }
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
      {/* full-bleed background video — no effects, no layers on top of video (content sits above) */}
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
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full px-6 py-12 lg:pr-[65vw] flex items-center"
        style={{ x }}
      >
        <div className="max-w-2xl lg:max-w-xl text-left">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight tracking-tight"
            >
              Websites, die nicht nur beeindrucken,
              <br />
              <span className="text-cyan-600">sondern verkaufen</span>
            </motion.h1>
          </div>

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
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link href="/angebote">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md w-full sm:w-auto"
              >
                Kostenlosen Entwurf sichern
              </motion.button>
            </Link>

            <Link href="#packages">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 px-5 py-3 rounded-full text-sm font-semibold border-2 border-gray-200 w-full sm:w-auto"
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
