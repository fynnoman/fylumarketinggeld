'use client';

import React from 'react';
import FreeDesignSection from './FreeDesignSection';

export default function FullscreenVideoSection() {
  return (
    <>
      {/* reuse existing FreeDesignSection above the full-bleed video */}
      <FreeDesignSection />

      <section className="w-full min-h-screen relative flex items-center justify-center bg-white overflow-hidden">
        {/* background video */}
        <div className="absolute inset-0 z-0 bg-white" aria-hidden="true">
          <video
            src="/Frau_schaut_träumerisch_aus_Fenster.mov"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 px-6 text-center">
          <p className="text-cyan-600 text-sm md:text-base lg:text-lg font-semibold max-w-2xl mx-auto">
            Design mit Absicht. Ergebnisse mit Wirkung.
          </p>
        </div>
      </section>
    </>
  );
}
