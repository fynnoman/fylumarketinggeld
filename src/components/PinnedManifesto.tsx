'use client';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';

type Slide = {
  eyebrow: string;
  line1: string;
  line2: string;
};

const slides: Slide[] = [
  {
    eyebrow: '01 · Analyse',
    line1: 'Wir analysieren,',
    line2: 'was verkauft.',
  },
  {
    eyebrow: '02 · Beweis',
    line1: 'Der Entwurf',
    line2: 'ist der Beweis.',
  },
  {
    eyebrow: '03 · Wirkung',
    line1: 'Aus Besuchern',
    line2: 'werden Kunden.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function PinnedManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const idx = Math.min(
      slides.length - 1,
      Math.max(0, Math.floor(p * slides.length))
    );
    setActive((prev) => (prev === idx ? prev : idx));
  });

  // Background parallax progress (very subtle, non-critical)
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  return (
    <section
      ref={containerRef}
      aria-label="Manifest"
      className="relative bg-[var(--background-warm)]"
      style={{ height: `${slides.length * 100}vh` }}
    >
      {/* Sticky viewport — one slide at a time */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center isolate">
        {/* Ambient blooms with subtle parallax */}
        <motion.div
          aria-hidden
          style={{ y: reduceMotion ? undefined : bgY }}
          className="absolute inset-0 -z-10"
        >
          <div className="glass-bloom-cyan absolute top-[10%] left-[6%] w-[42vw] h-[42vw] max-w-[560px] max-h-[560px] rounded-full opacity-80" />
          <div className="glass-bloom-warm absolute bottom-[8%] right-[6%] w-[36vw] h-[36vw] max-w-[440px] max-h-[440px] rounded-full opacity-70" />
          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(12,14,16,0.09) 1px, transparent 1.4px)',
              backgroundSize: '34px 34px',
              maskImage:
                'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
            }}
          />
        </motion.div>

        {/* Left progress rail */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-10 hidden sm:flex flex-col gap-5">
          {slides.map((s, i) => {
            const isActive = i === active;
            const isPast = i < active;
            return (
              <div key={i} className="flex items-center gap-4">
                <span
                  className={`text-[10px] font-mono tracking-[0.24em] transition-colors duration-500 ${
                    isActive
                      ? 'text-[var(--ink)]'
                      : isPast
                      ? 'text-stone-500'
                      : 'text-stone-400'
                  }`}
                >
                  0{i + 1}
                </span>
                <div className="relative h-px w-16 overflow-hidden bg-stone-300/60">
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: isActive || isPast ? 1 : 0,
                    }}
                    style={{ transformOrigin: 'left' }}
                    transition={{ duration: 0.7, ease }}
                    className="absolute inset-0 bg-[var(--cyan-deep)]"
                  />
                </div>
                <span
                  className={`text-[10px] uppercase tracking-[0.28em] font-medium transition-colors duration-500 ${
                    isActive ? 'text-[var(--ink)]' : 'text-stone-400'
                  }`}
                >
                  {s.eyebrow.split(' · ')[1]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Active slide */}
        <div className="relative w-full max-w-6xl px-6 md:px-14 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
              transition={{
                duration: reduceMotion ? 0.001 : 0.75,
                ease,
              }}
              className="flex flex-col items-center"
            >
              <span className="text-[10px] md:text-[11px] font-medium tracking-[0.4em] uppercase text-stone-500 mb-8 md:mb-10">
                {slides[active].eyebrow}
              </span>
              <h2 className="font-semibold tracking-[-0.045em] leading-[0.9] text-[14vw] sm:text-[12vw] md:text-[10.5vw] lg:text-[9.5vw] text-[var(--ink)]">
                <span className="block">{slides[active].line1}</span>
                <span className="block font-display italic font-normal text-[var(--cyan-deep)]">
                  {slides[active].line2}
                </span>
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 font-medium">
            Scroll
          </span>
          <div className="h-px w-8 bg-stone-400/70" />
          <span className="text-[10px] font-mono tracking-[0.24em] text-stone-500">
            {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        {/* Bottom progress bar */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-stone-200/50 z-10">
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
            className="absolute inset-0 bg-[var(--cyan-deep)]"
          />
        </div>
      </div>
    </section>
  );
}
