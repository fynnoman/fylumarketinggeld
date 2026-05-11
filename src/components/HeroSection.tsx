'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 600], [0, 80]);
  const [isMobile, setIsMobile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const imgY = useTransform(scrollY, [0, 600], [0, -50]);
  const imgScale = useTransform(scrollY, [0, 600], [1, 1.04]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Desktop: video loads lazily after 1s to prioritize LCP
  useEffect(() => {
    if (isMobile) return;
    const t = window.setTimeout(() => setShowVideo(true), 1000);
    return () => window.clearTimeout(t);
  }, [isMobile]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: imgY, scale: imgScale }}
        aria-hidden="true"
      >
        {isMobile ? (
          <Image
            src="/hero-poster.webp"
            alt="Webdesign aus dem Saarland – Hintergrund"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : showVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/hero-poster.webp"
            alt="Webdesign aus dem Saarland – Hintergrund"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-white/50 md:bg-white/30" />
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
      </motion.div>

      {/* SEO-relevanter, visuell integrierter Text */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center px-4">
        <p className="text-xs text-gray-500 max-w-2xl mx-auto">
          Webdesign Saarland — Webdesigner aus Saarlouis für Saarbrücken, Merzig, Dillingen und ganz Deutschland
        </p>
      </div>
    </section>
  );
}
