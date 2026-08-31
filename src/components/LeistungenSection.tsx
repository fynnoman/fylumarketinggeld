'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type Item = {
  title: string;
  text: string;
};

const editorial: Item[] = [
  { title: 'Editorial-Design', text: 'Typografie, Layout und Weißraum, die eure Substanz sichtbar machen — nicht nur Inhalte auf einem Template.' },
  { title: 'Marken-Storytelling', text: 'Ein Auftritt, der eine klare Haltung transportiert und in fünf Sekunden erklärt, wofür ihr steht.' },
  { title: 'Bildsprache & Foto-Direction', text: 'Auf Wunsch beauftragen wir Fotografen und begleiten das Shooting — damit die Bildwelt zu eurem Auftritt passt.' },
];

const wachstum: Item[] = [
  { title: 'SEO', text: 'Technische Basis, Content-Struktur und lokale Sichtbarkeit — geplant über Monate, nicht als einmaliges Häkchen.' },
  { title: 'GEO', text: 'Sichtbarkeit in AI-Antworten (Google AI Overviews, ChatGPT, Perplexity). Passagen-Optimierung, llms.txt, Citation-Signale.' },
  { title: 'SEA', text: 'Google Ads mit sauberem Conversion-Tracking, Budget-Steuerung und ehrlichem Reporting. Keine Vanity-Klicks.' },
  { title: 'Landingpages', text: 'Dedizierte Seiten für Kampagnen, Produkte oder Städte. Auf Conversion gebaut, nicht auf Menge.' },
];

const infra: Item[] = [
  { title: 'API-Anbindungen', text: 'CRM, Buchungssysteme, Warenwirtschaft, Zahlungsanbieter, eigene Datenquellen — sauber integriert, ohne Bastelei.' },
  { title: 'Admin-Zugriff für euch', text: 'Ihr könnt Texte, Öffnungszeiten und Bilder selbst pflegen. Für Änderungen an der Struktur sind wir da.' },
  { title: 'Rechtstexte & DSGVO', text: 'Impressum, Datenschutz, Cookie-Consent, AGB-Struktur — sauber aufgesetzt, damit ihr nicht bei Abmahn-Kanzleien landet.' },
  { title: 'Hosting & Infrastruktur', text: 'Server in Deutschland, monitoring, Backups, SSL, Performance. Läuft im Hintergrund, ohne dass ihr euch kümmern müsst.' },
];

export default function LeistungenSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="leistungen"
      ref={ref}
      className="relative py-28 md:py-36 px-5 md:px-8 bg-[var(--background-warm)] overflow-hidden isolate"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.07) 1px, transparent 1.4px)',
            backgroundSize: '32px 32px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 78%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 78%)',
          }}
        />
        <div
          aria-hidden
          className="glass-bloom-cyan absolute top-[10%] -left-[8%] w-[46vw] h-[46vw] max-w-[580px] max-h-[580px] rounded-full"
        />
        <div
          aria-hidden
          className="glass-bloom-warm absolute bottom-[8%] -right-[6%] w-[38vw] h-[38vw] max-w-[460px] max-h-[460px] rounded-full opacity-70"
        />
        <div className="noise-overlay opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Eyebrow + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <div className="mb-5 flex items-baseline gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §02
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Was wir für Marken machen
            </span>
          </div>
          <h2 className="text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
            Wir bauen keine Websites.{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Wir bauen Marken, die wachsen.
            </span>
          </h2>
          <p className="mt-7 text-lg text-stone-600 max-w-2xl leading-relaxed">
            Von der Gründung bis zur Skalierung. Editorial gestalteter Auftritt, planbares Wachstum über SEO, GEO und SEA, saubere technische Basis. Ein Studio, das mitwächst — statt einer Website, die nach dem Launch verstaubt.
          </p>

          {/* Prominent commitment chips */}
          <div className="mt-9 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-stone-200/80 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)]">
              <span className="font-display italic text-[var(--cyan-deep)] text-xl leading-none">0 €</span>
              <span className="text-[13px] font-medium text-[var(--ink)] tracking-tight">
                monatliche Grundgebühr
              </span>
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--ink)] text-white shadow-[0_2px_20px_-8px_rgba(0,0,0,0.35)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </span>
              <span className="text-[13px] font-medium tracking-tight">
                Langfristige Partnerschaft, so lange ihr wachst
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bento grid — 4 areas */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          {/* Tile A — Editorial-Design (hero, ink glass) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="relative md:col-span-4 md:row-span-2 rounded-3xl glass-ink text-white p-8 md:p-10 overflow-hidden group"
          >
            <span className="glass-edge glass-edge-dark" aria-hidden />
            <div
              aria-hidden
              className="glass-bloom-cyan absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full opacity-90"
            />
            <div className="glass-caustic" aria-hidden />
            <div className="noise-overlay opacity-40 mix-blend-overlay" />

            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full glass-chip-ink mb-6">
                  <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-stone-300">
                    01 · Editorial-Design & Marke
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-[2.7rem] font-semibold leading-[1.08] tracking-[-0.025em] max-w-xl">
                  Ein Auftritt mit{' '}
                  <span className="font-display italic font-normal text-cyan-300">
                    Handschrift
                  </span>{' '}
                  — kein Template mit Logo.
                </h3>
                <p className="mt-5 text-stone-300 text-base leading-relaxed max-w-lg">
                  Wir gestalten Marken, die man wiedererkennt. Typografie, Bildsprache, Storytelling. Auf Wunsch mit beauftragten Fotografen für eigene Bildwelten.
                </p>
              </div>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-white/10">
                {editorial.map((item, i) => (
                  <li key={i}>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-300/80 font-medium mb-2">
                      {item.title}
                    </div>
                    <p className="text-[13px] text-stone-300 leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tile B — Wachstum (SEO/GEO/SEA/Landingpages) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative md:col-span-2 md:row-span-2 rounded-3xl glass p-7 md:p-8 overflow-hidden group"
          >
            <span className="glass-edge" aria-hidden />
            <div aria-hidden className="glass-bloom-cyan absolute -bottom-24 -right-16 w-72 h-72 rounded-full opacity-60" />
            <div className="relative h-full flex flex-col">
              <div>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/70 backdrop-blur-md border border-cyan-100 mb-5">
                  <svg className="w-5 h-5 text-cyan-700" viewBox="0 0 24 24" fill="none">
                    <path d="M3 17l6-6 4 4 8-8M14 7h7v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-2">
                  02 · Wachstum & Sichtbarkeit
                </div>
                <h3 className="text-2xl font-semibold text-[var(--ink)] tracking-tight leading-tight">
                  Von{' '}
                  <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                    Google-Rang 30
                  </span>{' '}
                  zu planbarem Umsatz.
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mt-3">
                  Wir arbeiten SEO, GEO und SEA als System — nicht als getrennte Kanäle. Ihr wachst, wir skalieren mit.
                </p>
              </div>

              <ul className="mt-6 pt-6 border-t border-stone-200/70 space-y-4">
                {wachstum.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--cyan-deep)] flex-shrink-0" />
                    <div>
                      <div className="text-[13px] font-semibold text-[var(--ink)] tracking-tight">
                        {item.title}
                      </div>
                      <p className="text-[12px] text-stone-600 leading-relaxed mt-0.5">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tile C — Technik & Infrastruktur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="relative md:col-span-4 rounded-3xl glass p-7 md:p-9 overflow-hidden group"
          >
            <span className="glass-edge" aria-hidden />
            <div aria-hidden className="glass-bloom-warm absolute -top-24 -left-16 w-72 h-72 rounded-full opacity-60" />
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-2">
                    03 · Technik & Infrastruktur
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-tight leading-tight max-w-lg">
                    Die unsichtbaren Teile, die den{' '}
                    <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                      Unterschied
                    </span>{' '}
                    machen.
                  </h3>
                </div>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/70 backdrop-blur-md border border-stone-200/80 flex-shrink-0">
                  <svg className="w-5 h-5 text-stone-700" viewBox="0 0 24 24" fill="none">
                    <path d="M10 3v18M14 3v18M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {infra.map((item, i) => (
                  <li key={i}>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-display italic text-[var(--cyan-deep)] text-xs">
                        0{i + 1}
                      </span>
                      <div className="text-[14px] font-semibold text-[var(--ink)] tracking-tight">
                        {item.title}
                      </div>
                    </div>
                    <p className="text-[13px] text-stone-600 leading-relaxed">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tile D — Partnerschaft & Konditionen */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="relative md:col-span-2 rounded-3xl glass p-7 overflow-hidden group"
          >
            <span className="glass-edge" aria-hidden />
            <div aria-hidden className="glass-bloom-cyan absolute -bottom-20 -right-16 w-64 h-64 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 group-hover:border-cyan-200 transition-colors mb-5">
                <svg className="w-5 h-5 text-stone-700 group-hover:text-cyan-700 transition-colors" viewBox="0 0 24 24" fill="none">
                  <path d="M12 13a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-2">
                04 · Partnerschaft
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight leading-tight">
                Wir bleiben, so lange ihr{' '}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  wachst
                </span>
                .
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mt-3">
                Keine Wartungsknebel, keine monatliche Grundgebühr. Ihr bucht Betreuung nur dann, wenn ihr sie braucht — im Umfang, den euer Wachstum verlangt. Konditionen persönlich, transparent, ohne Formular.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
