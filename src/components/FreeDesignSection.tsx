'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function FreeDesignSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden bg-white">
      {/* Background video */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          src="/glyph_waves_remix.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 80px rgba(6, 182, 212, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all overflow-hidden group"
            >
              <span className="relative z-10">Jetzt Entwurf anfordern →</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
