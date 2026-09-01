'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { WHATSAPP_URL } from '@/lib/contact';

const ease = [0.22, 1, 0.36, 1] as const;

const headlineLine1 = ['Warum', 'Ihre', 'Website'];
const headlineLine2 = ['nicht', 'verkauft.'];
const headlineLine3 = ['Wir', 'ändern', 'das.'];

function WordReveal({
  words,
  delay,
  italic = false,
  accent = false,
  size,
}: {
  words: string[];
  delay: number;
  italic?: boolean;
  accent?: boolean;
  size: string;
}) {
  return (
    <div className="flex flex-wrap gap-x-[0.28em] gap-y-1 overflow-hidden">
      {words.map((w, i) => (
        <span key={i} className={`inline-block overflow-hidden py-[0.05em] ${size}`}>
          <motion.span
            initial={{ y: '105%', filter: 'blur(14px)' }}
            animate={{ y: '0%', filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: delay + i * 0.08, ease }}
            className={`inline-block ${
              italic ? 'font-display italic font-normal' : ''
            } ${accent ? 'text-[color:var(--accent)]' : ''}`}
            style={accent ? ({ ['--accent' as string]: '#7dd3fc' } as React.CSSProperties) : undefined}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Fylu — Cover"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--ink)] text-[#f7f4ee] isolate"
    >
      {/* Photo layer */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="/herob.png"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[68%_center] md:object-[72%_center] lg:object-[76%_center] motion-safe:animate-[heroReveal_1.6s_cubic-bezier(0.22,1,0.36,1)_both]"
        />

        {/* Left-to-right ink veil for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(6,7,9,0.94) 0%, rgba(6,7,9,0.78) 22%, rgba(6,7,9,0.42) 46%, rgba(6,7,9,0.06) 68%, rgba(6,7,9,0) 100%)',
          }}
        />
        {/* Top and bottom vignettes */}
        <div
          className="absolute inset-x-0 top-0 h-40"
          style={{
            background:
              'linear-gradient(180deg, rgba(6,7,9,0.65) 0%, rgba(6,7,9,0) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-56"
          style={{
            background:
              'linear-gradient(0deg, var(--ink) 0%, rgba(6,7,9,0.4) 55%, rgba(6,7,9,0) 100%)',
          }}
        />
        {/* Film grain */}
        <div className="aurora-grain" style={{ opacity: 0.32 }} />
      </div>

      {/* Editorial hairline frame */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="pointer-events-none absolute inset-4 md:inset-8 border border-white/[0.09]"
      />

      {/* Top row — masthead + issue meta */}
      <div className="absolute inset-x-8 top-8 md:inset-x-14 md:top-14 z-10 flex items-start justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="flex items-center gap-3 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-white/[0.06] border border-white/[0.14]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300/70 opacity-70 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
          </span>
          <span className="text-[10px] font-medium tracking-[0.34em] uppercase text-stone-200/90">
            Fylu · Studio Saarlouis
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="hidden sm:flex items-center gap-4 text-[10px] font-medium tracking-[0.34em] uppercase text-stone-300/70"
        >
          <span>Cover</span>
          <span className="h-px w-8 bg-stone-500/60" />
          <span className="font-mono tracking-[0.24em]">2026</span>
        </motion.div>
      </div>

      {/* Corner ticks */}
      <CornerTicks />

      {/* Headline block — bottom-left, editorial */}
      <div className="absolute inset-x-8 md:left-14 md:right-auto md:max-w-[62vw] xl:max-w-[70rem] bottom-24 md:bottom-16 lg:bottom-20 z-10">
        <h1 className="font-semibold tracking-[-0.045em] leading-[0.9] text-white">
          <WordReveal
            words={headlineLine1}
            delay={0.35}
            size="text-[10.5vw] sm:text-[8.2vw] md:text-[6.6vw] lg:text-[5.6vw] xl:text-[5rem]"
          />
          <WordReveal
            words={headlineLine2}
            delay={0.6}
            italic
            accent
            size="text-[12vw] sm:text-[9.4vw] md:text-[7.6vw] lg:text-[6.4vw] xl:text-[5.75rem]"
          />
          <WordReveal
            words={headlineLine3}
            delay={0.85}
            size="text-[10.5vw] sm:text-[8.2vw] md:text-[6.6vw] lg:text-[5.6vw] xl:text-[5rem]"
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35, ease }}
          className="mt-9 md:mt-11 max-w-xl"
        >
          <p data-speakable className="text-sm md:text-base text-stone-200/90 leading-relaxed">
            Wir analysieren, warum Ihre Website Besucher verliert — und zeigen
            Ihnen im Entwurf, wie daraus Kunden werden.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.55, ease }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
        >
          <a
            href="#analyse"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 sm:px-7 py-3.5 text-[13px] md:text-sm font-semibold tracking-[0.06em] text-[var(--ink)] transition-all duration-300 hover:bg-stone-100 hover:-translate-y-[1px] shadow-[0_20px_50px_-16px_rgba(0,0,0,0.55)] min-h-[52px]"
          >
            <span>Kostenloses Erstgespräch</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 8h11M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Per WhatsApp schreiben"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-5 sm:px-6 py-3.5 text-[13px] md:text-sm font-semibold tracking-[0.02em] text-white transition-all duration-300 hover:-translate-y-[1px] shadow-[0_20px_50px_-16px_rgba(37,211,102,0.55)] min-h-[52px]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden
            >
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            href="#klienten"
            className="group hidden sm:inline-flex items-center justify-start gap-2 text-[12px] md:text-[13px] font-medium tracking-[0.24em] uppercase text-stone-300/85 hover:text-white transition-colors sm:ml-2"
          >
            <span className="border-b border-stone-400/40 pb-1 group-hover:border-white/70 transition-colors">
              Referenzen
            </span>
            <span className="text-cyan-300/90 transition-transform group-hover:translate-x-0.5">
              ↓
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.85 }}
          className="hidden sm:flex mt-10 md:mt-14 items-center gap-4 text-[10px] font-medium tracking-[0.34em] uppercase text-stone-400/80"
        >
          <span>Analyse</span>
          <span className="h-px w-6 bg-stone-500/60" />
          <span>Strategie</span>
          <span className="h-px w-6 bg-stone-500/60" />
          <span>Umsetzung</span>
        </motion.div>
      </div>

      {/* Bottom-right — photo caption */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.7 }}
        className="hidden md:flex absolute right-14 bottom-16 z-10 flex-col items-end gap-1.5 text-right"
      >
        <span className="text-[10px] font-medium tracking-[0.34em] uppercase text-stone-300/70">
          Studio-Lead
        </span>
        <span className="text-[11px] font-display italic text-stone-200/90">
          Fynn Schulz · Saarlouis
        </span>
        <span className="mt-2 h-px w-14 bg-stone-400/40 self-end" />
        <span className="mt-1 text-[9px] font-mono tracking-[0.24em] text-stone-400/60">
          Photo · N°01 / 2026
        </span>
      </motion.div>

      {/* Scroll cue */}
      {!reduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.5em] uppercase text-stone-400/70">
            Scroll
          </span>
          <div className="relative w-px h-10 overflow-hidden">
            <span className="absolute inset-0 bg-white/10" />
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-cyan-300 to-transparent"
            />
          </div>
        </motion.div>
      )}

      {/* Keyframes for image reveal */}
      <style jsx global>{`
        @keyframes heroReveal {
          0% {
            opacity: 0;
            transform: scale(1.06);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}

function CornerTicks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[5]">
      {[
        'top-4 left-4 md:top-8 md:left-8',
        'top-4 right-4 md:top-8 md:right-8 rotate-90',
        'bottom-4 left-4 md:bottom-8 md:left-8 -rotate-90',
        'bottom-4 right-4 md:bottom-8 md:right-8 rotate-180',
      ].map((pos, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 + i * 0.05, ease }}
          className={`absolute w-4 h-4 md:w-5 md:h-5 text-white/40 ${pos}`}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M0 6V0h6"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="square"
          />
        </motion.svg>
      ))}
    </div>
  );
}
