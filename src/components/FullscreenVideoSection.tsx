'use client';

import React from 'react';
import FreeDesignSection from './FreeDesignSection';
import LazyVideo from './LazyVideo';

export default function FullscreenVideoSection() {
  return (
    <>
      <FreeDesignSection />

      <section className="w-full min-h-screen relative flex items-center justify-center bg-white overflow-hidden">
        <LazyVideo
          src="/section-decoration.mp4"
          srcWebm="/section-decoration.webm"
          opacity="opacity-100"
        />

        <div className="relative z-10 px-6 text-center">
          <p className="text-cyan-600 text-sm md:text-base lg:text-lg font-semibold max-w-2xl mx-auto">
            Design mit Absicht. Ergebnisse mit Wirkung.
          </p>
        </div>
      </section>
    </>
  );
}
