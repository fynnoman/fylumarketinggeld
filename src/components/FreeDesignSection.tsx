'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import LazyVideo from './LazyVideo';

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function FreeDesignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden bg-white">
      <LazyVideo src="/glyph_waves_remix.mp4" opacity="opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: smoothEase }}
          className="text-center"
        >
          <p className="text-cyan-600 text-lg mb-3 font-medium">
            Noch nicht überzeugt?
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-6">
            Kostenlosen Entwurf sichern
          </h2>
          
          <p className="text-stone-600 text-lg mb-8 max-w-2xl mx-auto">
            Lassen Sie sich von einem unverbindlichen Design-Entwurf überraschen – 
            komplett kostenlos und ohne Verpflichtung.
          </p>

          <Link href="/angebote">
            <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all duration-200 hover:shadow-[0_16px_48px_rgba(6,182,212,0.3)] active:scale-[0.98]">
              Jetzt Entwurf anfordern →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
