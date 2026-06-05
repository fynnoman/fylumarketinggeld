'use client';

import { motion } from 'framer-motion';

type CommonProps = {
  className?: string;
  color?: string;
  delay?: number;
  inView?: boolean;
};

// Wobbly hand-drawn underline — three slightly different strokes
export function HandUnderline({
  className = '',
  color = 'currentColor',
  delay = 0,
  inView = true,
}: CommonProps) {
  return (
    <svg
      viewBox="0 0 220 18"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M4 11 C 35 6, 80 14, 120 9 S 195 7, 216 12"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.path
        d="M8 14 C 50 11, 95 16, 140 12 S 200 13, 212 15"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 0.6 } : {}}
        transition={{ duration: 1.1, delay: delay + 0.18, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

// Hand-drawn circle around a word
export function HandCircle({
  className = '',
  color = 'currentColor',
  delay = 0,
  inView = true,
}: CommonProps) {
  return (
    <svg
      viewBox="0 0 220 90"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M30 18 C 60 8, 150 6, 195 22 C 222 35, 215 70, 170 78 C 110 88, 25 80, 12 60 C 2 42, 8 25, 30 18 Z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

// Curvy hand-drawn arrow — pointing right + slight down
export function HandArrow({
  className = '',
  color = 'currentColor',
  delay = 0,
  inView = true,
  direction = 'right' as 'right' | 'left' | 'down',
}: CommonProps & { direction?: 'right' | 'left' | 'down' }) {
  const paths: Record<typeof direction, { line: string; head: string }> = {
    right: {
      line: 'M6 22 C 30 12, 60 30, 95 22 S 145 8, 175 24',
      head: 'M165 16 L178 24 L172 36',
    },
    left: {
      line: 'M174 22 C 150 12, 120 30, 85 22 S 35 8, 5 24',
      head: 'M15 16 L2 24 L8 36',
    },
    down: {
      line: 'M22 6 C 12 30, 30 60, 22 95 S 8 145, 24 175',
      head: 'M16 165 L24 178 L36 172',
    },
  };
  const { line, head } = paths[direction];
  return (
    <svg
      viewBox={direction === 'down' ? '0 0 50 200' : '0 0 200 50'}
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      fill="none"
      aria-hidden
    >
      <motion.path
        d={line}
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, delay, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.path
        d={head}
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.9, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

// Wobbly hand-drawn strikethrough
export function HandStrike({
  className = '',
  color = 'currentColor',
  delay = 0,
  inView = true,
}: CommonProps) {
  return (
    <svg
      viewBox="0 0 220 12"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M4 7 C 50 4, 110 9, 160 6 S 210 8, 216 5"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

// Tiny sketched asterisk / footnote marker
export function HandAsterisk({
  className = '',
  color = 'currentColor',
}: CommonProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`pointer-events-none ${className}`}
      fill="none"
      aria-hidden
    >
      <path d="M12 4 L12 20 M5 8 L19 16 M19 8 L5 16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
