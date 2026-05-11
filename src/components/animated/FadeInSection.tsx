'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

const smoothEase = [0.22, 1, 0.36, 1] as const;

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export default function FadeInSection({
  children,
  delay = 0,
  className = '',
  y = 20,
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
