'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import type { Reference } from '@/lib/references';
import { getFeaturedReferences } from '@/lib/references';

const ease = [0.22, 1, 0.36, 1] as const;

const cases = getFeaturedReferences();

export default function HorizontalCases() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="klienten"
      className="relative bg-[var(--background-warm)] overflow-hidden scroll-mt-24 isolate"
      aria-label="Referenzen"
    >
      {/* Header, editorial */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-32 pb-10 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                §03
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Referenzen
              </span>
            </div>
            <h2 className="text-[2.6rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[6rem] font-semibold text-[var(--ink)] tracking-[-0.04em]">
              Unternehmen,{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                die für sich sprechen
              </span>
              .
            </h2>
            <p className="mt-6 md:mt-8 max-w-lg text-base md:text-lg text-stone-600 leading-relaxed">
              Eine Auswahl aktueller Projekte. Jedes Mal ein anderer Markt,
              jedes Mal ein Auftritt, der trägt, was das Unternehmen tatsächlich ist.
            </p>
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-stone-400 font-medium">
            <span className="rule-tick text-stone-400" />
            <span>Aktuelle Referenzen · seit 2024</span>
          </div>
        </motion.div>
      </div>

      {/* Cases, vertical alternating full-width blocks */}
      <div className="relative z-10 space-y-16 md:space-y-24 pb-12 md:pb-16">
        {cases.map((c, i) => (
          <CaseBlock key={c.slug} data={c} index={i} />
        ))}
      </div>

      {/* Link zur Referenzen-Unterseite */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-40">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-stone-200/80 pt-8 md:pt-10">
          <p className="max-w-md text-sm md:text-base text-stone-600 leading-relaxed">
            Eine vollständige Übersicht aller bisherigen Projekte findest du auf der
            Referenzen-Seite.
          </p>
          <Link
            href="/referenzen"
            className="group inline-flex items-center gap-2 self-start md:self-auto btn-glass-ink px-5 py-3 rounded-full text-[13px] font-semibold"
          >
            <span className="btn-glass-shine" aria-hidden />
            <span className="relative">Alle Referenzen ansehen</span>
            <span className="relative text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Big background outline label */}
      <div
        aria-hidden
        className="absolute top-[4%] right-[-4vw] pointer-events-none select-none rotate-[8deg] origin-top-right"
      >
        <div className="text-outline font-display italic font-normal text-[16vw] leading-none opacity-30">
          Referenzen
        </div>
      </div>
    </section>
  );
}

export function CaseBlock({ data, index }: { data: Reference; index: number }) {
  const isOdd = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.9, ease }}
      className="relative max-w-[1400px] mx-auto px-5 md:px-8"
    >
      <div
        className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
          isOdd ? 'lg:[direction:rtl]' : ''
        }`}
      >
        {/* Image side */}
        <div
          className={`lg:col-span-6 relative ${
            isOdd ? 'lg:[direction:ltr]' : ''
          }`}
        >
          <CaseCard data={data} index={index} />
        </div>

        {/* Text side */}
        <div
          className={`lg:col-span-6 ${
            isOdd ? 'lg:[direction:ltr]' : ''
          }`}
        >
          <div className="flex items-baseline gap-3 mb-5">
            <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
              0{index + 1}
            </span>
            <span className="rule-tick text-stone-400" />
            <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-stone-500">
              {data.industry}
            </span>
          </div>

          <h3 className="text-2xl md:text-[1.75rem] lg:text-3xl font-semibold text-[var(--ink)] leading-[1.15] tracking-[-0.02em] mb-5">
            {data.title}
          </h3>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-5 text-sm">
            <span className="text-[var(--ink)] font-semibold">{data.client}</span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-600">
              <span className="font-display italic text-stone-500 mr-1.5">mit</span>
              {data.owner}
            </span>
          </div>

          <p className="text-stone-600 text-[15px] md:text-base leading-relaxed mb-7">
            {data.story}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {data.services.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full bg-white border border-stone-200 text-[11px] font-medium tracking-[0.02em] text-stone-700"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-5 border-t border-stone-200/80">
            <span className="text-[10px] uppercase tracking-[0.32em] text-stone-400 font-medium">
              Standort
            </span>
            <span className="text-sm text-stone-700">{data.location}</span>
          </div>

          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan-deep)] hover:text-[var(--ink)] transition-colors"
          >
            <span>{data.urlLabel}</span>
            <span className="transition-transform group-hover:translate-x-1">↗</span>
          </a>

          {data.facebookUrl && (
            <a
              href={data.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan-deep)] hover:text-[var(--ink)] transition-colors"
              aria-label={`${data.client} | Facebook-Post öffnen`}
            >
              <span>Facebook-Post ansehen</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          )}

          {data.photographer && (
            <a
              href={data.photographer.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-[var(--cyan-deep)] transition-colors"
              aria-label={`Fotograf ${data.photographer.handle} auf Instagram öffnen`}
            >
              <span className="font-display italic text-stone-500">Fotos von</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                viewBox="0 0 24 24"
                aria-hidden
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span>{data.photographer.handle}</span>
            </a>
          )}

          {data.testimonial && <TestimonialDisclosure data={data.testimonial} />}
        </div>
      </div>
    </motion.article>
  );
}

function TestimonialDisclosure({
  data,
}: {
  data: NonNullable<Reference['testimonial']>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-7 border-t border-stone-200/80 pt-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex items-center justify-between gap-4 w-full text-left"
      >
        <span className="flex items-baseline gap-3">
          <span className="text-[10px] uppercase tracking-[0.32em] text-stone-400 font-medium">
            Stimme vom Klienten
          </span>
        </span>
        <span
          className={`inline-flex items-center justify-center w-7 h-7 rounded-full border border-stone-300 text-stone-600 transition-all duration-300 ${
            open ? 'rotate-45 border-[var(--cyan-deep)] text-[var(--cyan-deep)]' : ''
          }`}
          aria-hidden
        >
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.75}>
            <path d="M6 1v10M1 6h10" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="testimonial-body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <figure className="mt-4">
              <blockquote className="font-display italic text-[1.05rem] md:text-[1.15rem] leading-[1.55] text-[var(--ink)]">
                „{data.quote}“
              </blockquote>
              <figcaption className="mt-3 text-sm text-stone-600">
                <span className="font-semibold text-[var(--ink)]">{data.author}</span>
                <span className="text-stone-400 mx-2">·</span>
                <span>{data.role}</span>
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CaseCard({ data, index }: { data: Reference; index: number }) {
  const [active, setActive] = useState(0);
  const hasMultiple = data.images.length > 1;
  const current = data.images[active] ?? data.images[0];
  const isPhoto = current.mode === 'photo';

  const altText = current.alt ?? (isPhoto
    ? `${data.client}, ${data.industry}, ${data.location} · Fylu Marketing Referenz`
    : `Website ${data.client}, ${data.industry}, ${data.location} · Fylu Marketing Referenz`);

  const cardClassName =
    'group relative block rounded-2xl md:rounded-[1.75rem] overflow-hidden bg-[var(--ink)] shadow-[0_30px_80px_-20px_rgba(12,14,16,0.35)] ring-1 ring-black/5';

  const motionProps = {
    initial: { scale: 0.96 },
    whileInView: { scale: 1 },
    viewport: { once: true, margin: '-100px' as const },
    transition: { duration: 1, delay: 0.1, ease },
  };

  const go = (dir: -1 | 1) => {
    setActive((prev) => {
      const next = prev + dir;
      if (next < 0) return data.images.length - 1;
      if (next >= data.images.length) return 0;
      return next;
    });
  };

  return (
    <motion.div {...motionProps} className={cardClassName}>
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${data.client} · Website öffnen`}
        className="block"
      >
        <div
          className={`relative overflow-hidden ${
            isPhoto ? 'aspect-[4/5] bg-[var(--ink)]' : 'aspect-[16/10] bg-white'
          } lg:max-h-[72vh]`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={altText}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className={`transition-transform duration-[900ms] ease-out group-hover:scale-[1.03] ${
                  isPhoto ? 'object-cover object-center' : 'object-cover object-top'
                }`}
                priority={index < 2 && active === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Hover veil */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          {/* Hover pill */}
          <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur text-[var(--ink)] text-xs font-semibold tracking-[0.02em] shadow-lg">
              Website öffnen
              <span className="text-[var(--cyan-deep)]">↗</span>
            </span>
          </div>
        </div>
      </a>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              go(-1);
            }}
            aria-label="Vorheriges Bild"
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur text-[var(--ink)] shadow-md transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              go(1);
            }}
            aria-label="Nächstes Bild"
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur text-[var(--ink)] shadow-md transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur shadow-sm">
            {data.images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(i);
                }}
                aria-label={`Bild ${i + 1} von ${data.images.length}`}
                aria-current={active === i}
                className={`h-1.5 rounded-full transition-all ${
                  active === i ? 'w-5 bg-[var(--ink)]' : 'w-1.5 bg-stone-400'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}
