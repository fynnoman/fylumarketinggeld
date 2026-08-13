'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

type Slide = {
  eyebrow: string;
  line1: string;
  line2: string;
  line2Italic?: boolean;
};

const slides: Slide[] = [
  {
    eyebrow: 'I · Analyse',
    line1: 'Wir analysieren,',
    line2: 'was verkauft.',
    line2Italic: true,
  },
  {
    eyebrow: 'II · Beweis',
    line1: 'Der Entwurf',
    line2: 'ist der Beweis.',
    line2Italic: true,
  },
  {
    eyebrow: 'III · Wirkung',
    line1: 'Aus Besuchern',
    line2: 'werden Kunden.',
    line2Italic: true,
  },
];

export default function PinnedManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      aria-label="Manifest"
      className="relative bg-[var(--background-warm)]"
      style={{ height: `${slides.length * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center isolate">
        {/* Soft ambient blooms behind the words */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div
            className="glass-bloom-cyan absolute top-[10%] left-[6%] w-[42vw] h-[42vw] max-w-[560px] max-h-[560px] rounded-full opacity-80"
          />
          <div
            className="glass-bloom-warm absolute bottom-[8%] right-[6%] w-[36vw] h-[36vw] max-w-[440px] max-h-[440px] rounded-full opacity-70"
          />
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
        </div>

        {/* Left progress rail */}
        <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 hidden sm:flex flex-col items-center gap-3">
          {slides.map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-[0.24em] text-stone-400">
                0{i + 1}
              </span>
              <ProgressDot progress={scrollYProgress} index={i} count={slides.length} />
            </div>
          ))}
        </div>

        {/* Slides stack */}
        <div className="relative w-full max-w-6xl px-6 md:px-10 text-center">
          {slides.map((s, i) => (
            <Slide
              key={i}
              slide={s}
              index={i}
              count={slides.length}
              progress={scrollYProgress}
              reduceMotion={!!reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Slide({
  slide,
  index,
  count,
  progress,
  reduceMotion,
}: {
  slide: Slide;
  index: number;
  count: number;
  progress: import('framer-motion').MotionValue<number>;
  reduceMotion: boolean;
}) {
  const start = index / count;
  const peak = (index + 0.5) / count;
  const end = (index + 1) / count;

  const inA = Math.max(0, start - 0.05);
  const inB = start + 0.05;
  const inC = end - 0.05;
  const inD = Math.min(1, end + 0.05);

  const opacity = useTransform(
    progress,
    [inA, inB, peak, inC, inD],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(progress, [start, peak, end], [40, 0, -40]);
  const scale = useTransform(
    progress,
    [inA, inB, inC, inD],
    reduceMotion ? [1, 1, 1, 1] : [0.94, 1, 1, 0.94]
  );

  return (
    <motion.div
      style={{
        opacity: reduceMotion ? undefined : opacity,
        y: reduceMotion ? undefined : y,
        scale: reduceMotion ? undefined : scale,
      }}
      className="absolute inset-0 flex flex-col items-center justify-center"
      aria-hidden={index > 0 && reduceMotion}
    >
      <span className="text-[10px] md:text-[11px] font-medium tracking-[0.4em] uppercase text-stone-500 mb-8 md:mb-10">
        {slide.eyebrow}
      </span>
      <h2 className="font-semibold tracking-[-0.045em] leading-[0.9] text-[14vw] sm:text-[12vw] md:text-[10.5vw] lg:text-[9.5vw] text-[var(--ink)]">
        <span className="block">{slide.line1}</span>
        <span
          className={`block ${
            slide.line2Italic
              ? 'font-display italic font-normal text-[var(--cyan-deep)]'
              : ''
          }`}
        >
          {slide.line2}
        </span>
      </h2>
    </motion.div>
  );
}

function ProgressDot({
  progress,
  index,
  count,
}: {
  progress: import('framer-motion').MotionValue<number>;
  index: number;
  count: number;
}) {
  const start = index / count;
  const end = (index + 1) / count;
  const scale = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    [1, 2.4, 2.4, 1]
  );
  const bg = useTransform(
    progress,
    [start - 0.05, start + 0.05, end - 0.05, end + 0.05],
    ['rgba(12,14,16,0.2)', 'rgb(14,116,144)', 'rgb(14,116,144)', 'rgba(12,14,16,0.2)']
  );
  return (
    <motion.span
      style={{ scale, background: bg }}
      className="block h-1.5 w-1.5 rounded-full"
    />
  );
}
