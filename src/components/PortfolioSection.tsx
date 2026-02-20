'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const portfolioItems = [
  {
    src: '/8BE048EC-7F69-4DD4-AE4D-DED0A9A0415B.png',
    alt: 'Website Projekt 1',
    title: 'Lokales Handwerksunternehmen',
    description: 'Eine moderne, conversion-optimierte Website für ein Handwerksunternehmen. Ziel war maximale Sichtbarkeit auf Google und mehr Anfragen über das Kontaktformular.',
  },
  {
    src: '/B2B192DF-AD56-4E4D-9F09-EE894CE91BB8.png',
    alt: 'Website Projekt 2',
    title: 'Dienstleister im B2B-Bereich',
    description: 'Klare Positionierung, starke Wertaussagen und eine durchdachte Nutzerführung — designed, um Entscheider direkt anzusprechen und Vertrauen aufzubauen.',
  },
  {
    src: '/D650852E-6EFC-477A-B33C-4F179CFB35FA.png',
    alt: 'Website Projekt 3',
    title: 'Personal Branding',
    description: 'Lokaler Dönerimbiss mit großem Hunger nach Sichtbarkeit. Klare Speisekarte, Öffnungszeiten und ein Design, das Appetit macht — direkt aus der Nachbarschaft ins Google-Ranking.',
  },
  {
    src: '/EE60E06D-A52C-4532-93C0-85429C27E880.png',
    alt: 'Website Projekt 4',
    title: 'Gastronomie & Lifestyle',
    description: 'Visuell starke Präsenz für die Gastronomiebranche — mit Fokus auf Atmosphäre, Online-Reservierung und lokaler SEO-Optimierung.',
  },
  {
    src: '/504F6B03-A916-4EF1-ADA7-0E8843E99BE6.png',
    alt: 'Website Projekt 5',
    title: 'Meine erste eigene Website',
    description: 'Der Anfang von allem. Meine erste selbst gebaute Website — noch rau, aber mit viel Leidenschaft gebaut. Sie hat mir gezeigt, was möglich ist, wenn man anfängt.',
  },
];

export default function PortfolioSection() {
  const [current, setCurrent] = useState(1);

  const safeIndex = Math.min(Math.max(current, 0), portfolioItems.length - 1);
  const item = portfolioItems[safeIndex];

  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : portfolioItems.length - 1));
  const next = () => setCurrent((c) => (c < portfolioItems.length - 1 ? c + 1 : 0));

  return (
    <section className="w-full relative flex flex-col items-center justify-center py-20 overflow-hidden" style={{ minHeight: '90vh' }}>
      {/* Background video */}
      <div className="absolute inset-0 z-0 bg-[#e5e7eb]" aria-hidden="true">
        <video
          src="/glyph_waves_remix.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Title */}
      <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold text-cyan-500 tracking-tight mb-10">
        Portfolio
      </h2>

      {/* Navigation + Card */}
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center">
        {/* Arrows row */}
        <div className="w-full flex items-center justify-between mb-4 px-2">
          <button
            onClick={prev}
            aria-label="Vorheriges Projekt"
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">
            {safeIndex + 1} / {portfolioItems.length}
          </span>

          <button
            onClick={next}
            aria-label="Nächstes Projekt"
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Animated Card */}
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-white" style={{ height: '55vh' }}>
          <AnimatePresence mode="wait">
            {item && (
              <motion.div
                key={safeIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-top"
                  priority
                  quality={95}
                />
                {/* dot indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {portfolioItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all ${i === safeIndex ? 'bg-cyan-500 w-4' : 'bg-white/60 w-2'}`}
                      aria-label={`Projekt ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Animated description */}
        <AnimatePresence mode="wait">
          {item && (
            <motion.div
              key={`desc-${safeIndex}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
              className="mt-6 text-center max-w-2xl"
            >
              <p className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-1">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
