'use client';

import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type Metric = {
  prefix?: string;
  value: number;
  suffix?: string;
  static?: string; // e.g. "Top" — non-animated word before the value
  label: string;
  sublabel: string;
  align: 'left' | 'right' | 'center';
};

const metrics: Metric[] = [
  {
    prefix: '+',
    value: 184,
    suffix: '%',
    label: 'Anfragen · Demir SpeedConnect',
    sublabel: 'Seit Relaunch mit klarer Verkaufsarchitektur',
    align: 'left',
  },
  {
    prefix: '+',
    value: 6,
    label: 'Klienten · Salif Gebäudeservice',
    sublabel: 'Im ersten Monat nach Launch',
    align: 'right',
  },
  {
    static: 'Top',
    value: 3,
    label: 'Anbieter · MG Gebäudeservice',
    sublabel: 'Köln & Düsseldorf, in 12 Monaten',
    align: 'left',
  },
  {
    value: 12,
    label: 'Klienten · pro Jahr',
    sublabel: 'Bewusst kleiner Kalender',
    align: 'right',
  },
];

export default function BigMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px -15% 0px' });

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 bg-[var(--background-warm)] overflow-hidden isolate"
      aria-label="Wirkung in Zahlen"
    >
      {/* Ambient blooms */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="glass-bloom-cyan absolute top-[15%] left-[8%] w-[36vw] h-[36vw] max-w-[520px] max-h-[520px] rounded-full opacity-70" />
        <div className="glass-bloom-warm absolute bottom-[10%] right-[6%] w-[30vw] h-[30vw] max-w-[420px] max-h-[420px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Section header — small, editorial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mb-16 md:mb-24 flex items-baseline gap-4"
        >
          <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
            §II
          </span>
          <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
            Wirkung
          </span>
          <span className="hidden md:block flex-1 h-px bg-stone-300/60 ml-4" />
          <span className="hidden md:block text-[11px] uppercase tracking-[0.32em] text-stone-400 font-medium">
            2024 — 2026
          </span>
        </motion.div>

        {/* Metrics stack */}
        <div className="space-y-24 md:space-y-32">
          {metrics.map((m, i) => (
            <MetricRow key={i} metric={m} index={i} inView={inView} />
          ))}
        </div>
      </div>

      {/* Big background outline label */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-[-4vw] pointer-events-none select-none"
      >
        <div className="text-outline font-display italic font-normal text-[28vw] leading-[0.85] text-center opacity-[0.4]">
          Wirkung
        </div>
      </div>
    </section>
  );
}

function MetricRow({
  metric,
  index,
  inView,
}: {
  metric: Metric;
  index: number;
  inView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, metric.value, {
      duration: 1.6,
      delay: 0.15 + index * 0.15,
      ease: 'easeOut',
    });
    return () => controls.stop();
  }, [inView, metric.value, index, count]);

  const isRight = metric.align === 'right';
  const isCenter = metric.align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease }}
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end ${
        isRight ? 'md:text-right' : isCenter ? 'md:text-center' : ''
      }`}
    >
      {/* Big numeral */}
      <div
        className={`md:col-span-8 ${
          isRight ? 'md:col-start-5' : isCenter ? 'md:col-start-3' : ''
        }`}
      >
        <div
          className={`flex items-baseline gap-1 md:gap-2 ${
            isRight ? 'justify-end' : isCenter ? 'justify-center' : ''
          }`}
        >
          {metric.static && (
            <span className="numeral-display text-[15vw] md:text-[13vw] lg:text-[11vw] text-[var(--ink)]">
              {metric.static}{' '}
            </span>
          )}
          {metric.prefix && (
            <span className="numeral-display text-[15vw] md:text-[13vw] lg:text-[11vw] text-[var(--cyan-deep)]">
              {metric.prefix}
            </span>
          )}
          <motion.span className="numeral-display text-[24vw] md:text-[20vw] lg:text-[17vw] text-[var(--ink)] tabular-nums">
            {rounded}
          </motion.span>
          {metric.suffix && (
            <span className="numeral-display text-[15vw] md:text-[13vw] lg:text-[11vw] text-[var(--cyan-deep)]">
              {metric.suffix}
            </span>
          )}
        </div>
      </div>

      {/* Label column */}
      <div
        className={`md:col-span-4 md:pb-8 ${
          isRight ? 'md:col-start-1 md:row-start-1 md:text-left' : ''
        }`}
      >
        <div
          className={`flex flex-col gap-2 ${
            isRight ? 'md:items-start' : isCenter ? 'md:items-center' : ''
          }`}
        >
          <div className={`flex items-center gap-3 ${isRight ? 'md:flex-row' : ''}`}>
            <span className="text-[10px] tracking-[0.32em] uppercase text-stone-500 font-medium">
              0{index + 1}
            </span>
            <span className="rule-tick text-stone-500" />
          </div>
          <p className="text-lg md:text-xl text-[var(--ink)] font-medium tracking-tight max-w-xs">
            {metric.label}
          </p>
          <p className="text-sm text-stone-500 max-w-xs">{metric.sublabel}</p>
        </div>
      </div>
    </motion.div>
  );
}
