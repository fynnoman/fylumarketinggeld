'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { testimonials, sourceLabel } from '@/lib/testimonials';

const ease = [0.22, 1, 0.36, 1] as const;

// Rendert nur, wenn tatsächlich reale, schriftlich freigegebene Testimonials
// vorliegen. Solange `testimonials` leer ist, gibt der Component null zurück.
// Dann greift auch keine AggregateRating-Ausgabe im Schema.
export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  if (testimonials.length === 0) return null;

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-5 md:px-8 bg-[var(--background-warm)] overflow-hidden isolate border-t border-stone-200/60"
      aria-labelledby="testimonials-heading"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="glass-bloom-cyan absolute top-[10%] right-[6%] w-[36vw] h-[36vw] max-w-[440px] max-h-[440px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="mb-5 flex items-baseline gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §04
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Klienten-Stimmen
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]"
          >
            Was Klienten{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              tatsächlich sagen.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={`${t.author}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease }}
              className="relative rounded-3xl bg-white p-7 md:p-8 border border-stone-200/70 shadow-[0_8px_40px_rgba(12,14,16,0.04)] flex flex-col"
            >
              <span
                aria-hidden
                className="font-display italic text-[var(--cyan-deep)] text-6xl leading-none mb-4 select-none"
              >
                &ldquo;
              </span>

              <blockquote className="text-stone-800 text-[15px] md:text-base leading-relaxed mb-6">
                {t.quote}
              </blockquote>

              {typeof t.rating === 'number' && (
                <div className="mb-4 flex items-center gap-1" aria-label={`Bewertung: ${t.rating} von 5`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={
                        n <= (t.rating ?? 0)
                          ? 'text-[var(--cyan-deep)]'
                          : 'text-stone-300'
                      }
                      aria-hidden
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}

              <figcaption className="mt-auto pt-5 border-t border-dashed border-stone-200">
                <div className="text-[14px] font-semibold text-[var(--ink)]">
                  {t.author}
                </div>
                {(t.role || t.company) && (
                  <div className="mt-0.5 text-[12px] text-stone-600 leading-snug">
                    {t.role && <span>{t.role}</span>}
                    {t.role && t.company && <span className="text-stone-400"> · </span>}
                    {t.company && <span>{t.company}</span>}
                  </div>
                )}
                <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  <span className="inline-block h-1 w-1 rounded-full bg-[var(--cyan-deep)]" aria-hidden />
                  {t.sourceUrl ? (
                    <a
                      href={t.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--ink)] underline underline-offset-2 transition-colors"
                    >
                      {sourceLabel(t.source)}
                    </a>
                  ) : (
                    <span>{sourceLabel(t.source)}</span>
                  )}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
