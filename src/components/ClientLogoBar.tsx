'use client';

import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Client = {
  name: string;
  src: string;
  url: string;
  industry?: string;
  location: string;
};

const clients: Client[] = [
  {
    name: 'Galabau Eifler',
    src: '/logos/galabau-eifler.webp',
    url: 'https://galabaueifler.de',
    industry: 'Garten- und Landschaftsbau',
    location: 'Saarland',
  },
  {
    name: 'Madma',
    src: '/logos/madma.webp',
    url: 'https://madma.de',
    location: 'Saarland',
  },
  {
    name: 'Porto Cervo',
    src: '/logos/porto-cervo.webp',
    url: 'https://portocervosaarlouis.de',
    industry: 'Restaurant & Gastronomie',
    location: 'Saarlouis',
  },
  {
    name: 'Saray',
    src: '/logos/saray.webp',
    url: 'https://saray-saarlouis.de',
    industry: 'Dönerimbiss',
    location: 'Saarlouis',
  },
  {
    name: 'Salif Gebäudeservice',
    src: '/logos/salif-gebaeudeservice.webp',
    url: 'https://salif-gebaeudeservice.de',
    industry: 'Gebäudereinigung',
    location: 'Saarland',
  },
  {
    name: 'Taskey',
    src: '/logos/taskey.webp',
    url: 'https://taskeyapp.com',
    industry: 'SaaS · Software für Gebäudereiniger',
    location: 'Deutschland',
  },
  {
    name: 'Syncrony',
    src: '/logos/syncrony.webp',
    url: 'https://syncrony-systems.com',
    industry: 'AI-native ERP-Software',
    location: 'USA',
  },
  {
    name: 'MG Gebäudeservice',
    src: '/logos/mg-gebaeudeservice.webp',
    url: 'https://www.mg-gebaeudeservice.de',
    industry: 'Gebäudereinigung',
    location: 'Köln & Düsseldorf',
  },
  {
    name: 'Demir SpeedConnect',
    src: '/logos/demir-speedconnect.webp',
    url: 'https://demir-speedconnect.de',
    industry: 'B2B-Dienstleister',
    location: 'Saarland',
  },
];

const ROTATION_MS = 5500;

export default function ClientLogoBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance
  useEffect(() => {
    if (isHovered) return;
    const t = window.setTimeout(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % clients.length);
    }, ROTATION_MS);
    return () => window.clearTimeout(t);
  }, [index, isHovered]);

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };
  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % clients.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + clients.length) % clients.length);
  };

  const current = clients[index];

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-[var(--background-warm)] overflow-hidden"
      aria-labelledby="clients-heading"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
        >
          <div className="mb-6 flex items-baseline justify-center gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §08
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Ausgewählte Klienten
            </span>
          </div>
          <h2
            id="clients-heading"
            className="text-[2.2rem] leading-[1.05] sm:text-4xl md:text-5xl lg:text-[3.7rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]"
          >
            Häuser, die uns ihre{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Präsenz anvertraut haben.
            </span>
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg mt-6 leading-relaxed">
            Vom saarländischen Handwerksbetrieb über regionale Gastronomie bis zum
            US-amerikanischen SaaS-Haus — eine Auswahl der Klienten, die wir
            begleiten durften.
          </p>
        </motion.div>

        {/* Single-card carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Vorheriger Kunde"
            className="absolute left-1 md:-left-4 lg:-left-16 top-[40%] -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 bg-white shadow-lg border border-stone-100 rounded-full flex items-center justify-center hover:bg-stone-50 hover:shadow-xl hover:border-cyan-200 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card area */}
          <div className="relative px-14 md:px-16">
            <div className="relative min-h-[380px] md:min-h-[440px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction === 1 ? 40 : -40, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction === 1 ? -40 : 40, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Website von ${current.name} öffnen`}
                    className="group block w-full h-full bg-white rounded-3xl shadow-md hover:shadow-2xl border border-stone-100 hover:border-cyan-200 p-8 md:p-12 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
                  >
                    {/* Logo */}
                    <div className="relative w-full h-36 md:h-44 mb-6 md:mb-8 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-[360px]">
                        <Image
                          src={current.src}
                          alt={`${current.name} – Kunde von Fylu`}
                          fill
                          priority
                          sizes="(max-width: 768px) 80vw, 360px"
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">
                        {current.name}
                      </h3>
                      <p className="text-stone-500 text-sm md:text-base">
                        {current.industry ? `${current.industry} · ` : ''}
                        {current.location}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 text-center">
                      <span className="inline-flex items-center gap-2 text-cyan-600 group-hover:text-cyan-700 font-semibold text-sm md:text-base">
                        Präsenz ansehen
                        <svg
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Nächster Kunde"
            className="absolute right-1 md:-right-4 lg:-right-16 top-[40%] -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 bg-white shadow-lg border border-stone-100 rounded-full flex items-center justify-center hover:bg-stone-50 hover:shadow-xl hover:border-cyan-200 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {clients.map((c, i) => (
              <button
                key={c.name}
                onClick={() => goTo(i)}
                aria-label={`Zu ${c.name} springen`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-10 bg-cyan-500' : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-xs text-stone-400 font-mono tabular-nums">
            {String(index + 1).padStart(2, '0')} / {String(clients.length).padStart(2, '0')} · {current.name}
          </div>
        </div>

        {/* Bottom hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-stone-500 tracking-[0.02em]">
            Weitere <span className="font-display italic text-stone-700">Klienten seit 2024</span> auf Anfrage — kuratiert nach Passung und Kapazität.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
