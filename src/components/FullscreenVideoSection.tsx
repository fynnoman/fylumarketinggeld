'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FreeDesignSection from './FreeDesignSection';
import LazyVideo from './LazyVideo';

const ease = [0.22, 1, 0.36, 1] as const;

export default function FullscreenVideoSection() {
  return (
    <>
      <FreeDesignSection />

      <section className="w-full min-h-[80vh] relative flex items-center justify-center bg-white overflow-hidden isolate">
        <LazyVideo
          src="/section-decoration.mp4"
          srcWebm="/section-decoration.webm"
          opacity="opacity-100"
        />

        {/* Soft cyan overlay for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 50%, rgba(6,182,212,0.08), transparent 75%)',
          }}
        />

        <div className="relative z-10 px-6 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="mb-8 flex items-baseline justify-center gap-3"
          >
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §
            </span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
              Manifest
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-3xl md:text-5xl lg:text-[3.6rem] leading-[1.05] font-semibold text-[var(--ink)] tracking-[-0.035em]"
          >
            Design mit{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Absicht.
            </span>
            <br />
            Ergebnisse mit{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Wirkung.
            </span>
          </motion.h2>
        </div>
      </section>
    </>
  );
}
