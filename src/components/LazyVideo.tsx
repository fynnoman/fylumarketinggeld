'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  srcWebm?: string;
  className?: string;
  opacity?: string;
}

export default function LazyVideo({ src, srcWebm, className = '', opacity = 'opacity-30' }: LazyVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`absolute inset-0 z-0 bg-inherit ${className}`} aria-hidden="true">
      {isVisible && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover ${opacity}`}
        >
          {srcWebm && <source src={srcWebm} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
