'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type Tier = {
  name: string;
  ordinal: string;
  price: string;
  currency: string;
  positioning: string;
  audience: string;
  scope: string[];
  cta: string;
  tone: 'silver' | 'neutral' | 'cyan';
};

const tiers: Tier[] = [
  {
    name: 'Signature',
    ordinal: 'I',
    price: '3.490',
    currency: '€',
    positioning: 'Der stille Auftritt.',
    audience:
      'Für Unternehmen, die still nach vorne treten wollen — mit einer digitalen Präsenz, die Ruhe und Souveränität ausstrahlt.',
    scope: [
      'Bis zu fünf editorial gestaltete Seiten',
      'Design-Vokabular in Ihrer Handschrift',
      'Mobile-first, editoriale Typografie',
      'Technische SEO-Basis · Schema.org',
      'Kontakt- und Anfrageführung',
      '60 Tage Betreuung nach Live-Gang',
    ],
    cta: 'Signature anfragen',
    tone: 'silver',
  },
  {
    name: 'Atelier',
    ordinal: 'II',
    price: '6.490',
    currency: '€',
    positioning: 'Handschrift statt Vorlage.',
    audience:
      'Für Häuser, die in ihrer Region führen wollen und einen digitalen Auftritt mit strategischer Tiefe verlangen.',
    scope: [
      'Bis zu zehn Seiten mit Verkaufs­architektur',
      'Individuelles Design-System',
      'Lokales SEO-Framework · Google Business',
      'Content- und Textführung',
      'Analytik & Conversion-Setup',
      '90 Tage Betreuung mit Iteration',
    ],
    cta: 'Atelier anfragen',
    tone: 'neutral',
  },
  {
    name: 'Maison',
    ordinal: 'III',
    price: '9.190',
    currency: '€',
    positioning: 'Kein Auftritt. Ein Werk.',
    audience:
      'Für Marken, die kompromisslos die erste Wahl in ihrem Markt werden wollen — im Saarland und darüber hinaus.',
    scope: [
      'Umfassende, maßgefertigte Website',
      'Individuelle Interaktionen und Motion',
      'Redaktions- und Content-System',
      'SEO-Foundation für nationale Skalierung',
      'Performance-Architektur',
      'Sechs Monate Studio-Begleitung',
    ],
    cta: 'Maison anfragen',
    tone: 'cyan',
  },
];

type AddOn = {
  label: string;
  subtitle: string;
  price: string;
  cadence: 'einmalig' | 'monatlich';
  detail: string;
  href: string;
};

const addOns: AddOn[] = [
  {
    label: 'Google Business',
    subtitle: 'Lokale Sichtbarkeit',
    price: '290',
    cadence: 'einmalig',
    detail:
      'Vollständige Einrichtung Ihres Google-Unternehmensprofils. Kategorien, Keywords, Bildsprache — sauber und komplett.',
    href: '/seo-saarland',
  },
  {
    label: 'SEO Foundation',
    subtitle: 'Sichtbarkeit aufbauen',
    price: '890',
    cadence: 'einmalig',
    detail:
      'Keyword-Analyse, technisches Audit, OnPage-Optimierung, Schema-Struktur. Das Fundament für organische Reichweite.',
    href: '/seo-saarland',
  },
  {
    label: 'SEO Betreuung',
    subtitle: 'Sichtbarkeit halten',
    price: '490',
    cadence: 'monatlich',
    detail:
      'Fortlaufende Optimierung, monatliches Reporting, Content-Feinschliff — damit die Sichtbarkeit nicht wieder abbricht.',
    href: '/seo-saarland',
  },
  {
    label: 'Google Ads Setup',
    subtitle: 'Bezahlte Reichweite',
    price: '690',
    cadence: 'einmalig',
    detail:
      'Konto- und Kampagnenaufbau, Keyword-Recherche, Conversion-Tracking. Bereit zum Start binnen weniger Tage.',
    href: '/google-ads-saarland',
  },
  {
    label: 'Google Ads Betreuung',
    subtitle: 'Laufende Steuerung',
    price: '390',
    cadence: 'monatlich',
    detail:
      'Wöchentliche Optimierung, A/B-Tests, klares Monatsreporting. Werbebudget zusätzlich, unabhängig gesteuert.',
    href: '/google-ads-saarland',
  },
  {
    label: 'Website Refresh',
    subtitle: 'Bestehendes veredeln',
    price: '890',
    cadence: 'einmalig',
    detail:
      'Design- und Text-Refresh Ihrer bestehenden Website — für Häuser, die noch keinen kompletten Neubau brauchen.',
    href: '/webdesign-saarland',
  },
];

const extendedServices = [
  { label: 'Software · Interne Systeme', href: '/software-saarland' },
  { label: 'App-Entwicklung · iOS & Android', href: '/app-entwickeln-lassen' },
];

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      id="pakete"
      className="relative py-32 md:py-44 px-5 md:px-8 bg-[var(--background-warm)] overflow-hidden isolate"
      aria-labelledby="pakete-heading"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(12,14,16,0.06) 1px, transparent 1.4px)',
            backgroundSize: '34px 34px',
            maskImage:
              'radial-gradient(ellipse 75% 65% at 50% 45%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 65% at 50% 45%, black 30%, transparent 80%)',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[55vw] h-[45vw]"
          style={{
            background:
              'radial-gradient(50% 55% at 75% 25%, rgba(6,182,212,0.10), transparent 70%)',
          }}
        />
        <div className="noise-overlay opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <div className="hairline-rule w-32 mx-auto mb-8" />
          <div className="flex items-baseline justify-center gap-3 mb-7">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §V
            </span>
            <span className="editorial-eyebrow !before:hidden">
              <span>Die Pakete</span>
            </span>
          </div>
          <h2
            id="pakete-heading"
            className="text-[2.4rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]"
          >
            Drei Zugänge zu einer{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Fylu-Website.
            </span>
          </h2>
          <p className="mt-7 text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Jedes Projekt beginnt mit einem Vorgespräch. Der genannte Preis ist ein
            Ausgangspunkt, kein Preisschild — er hält den Ton, den Umfang und den
            Anspruch fest.
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease }}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col premium-lift border overflow-hidden ${
                tier.tone === 'cyan'
                  ? 'bg-[var(--ink)] text-white border-transparent shadow-[0_40px_100px_-30px_rgba(14,116,144,0.55)]'
                  : tier.tone === 'silver'
                  ? 'bg-white text-[var(--ink)] border-stone-200/70'
                  : 'bg-[var(--cream)] text-[var(--ink)] border-stone-200/60'
              }`}
            >
              {/* Corner glow for cyan tier */}
              {tier.tone === 'cyan' && (
                <>
                  <motion.div
                    animate={{ opacity: [0.55, 0.9, 0.55] }}
                    transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
                    className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(6,182,212,0.4), transparent 65%)',
                    }}
                  />
                  <div className="noise-overlay opacity-40 mix-blend-overlay" />
                </>
              )}

              {/* Header row */}
              <div className="relative flex items-start justify-between mb-8">
                <div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.32em] font-medium mb-2 ${
                      tier.tone === 'cyan' ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    Kapitel {tier.ordinal}
                  </div>
                  <h3
                    className={`font-display italic font-normal text-4xl md:text-5xl leading-none ${
                      tier.tone === 'cyan' ? 'text-cyan-200' : 'text-[var(--ink)]'
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>
                <div
                  className={`wax-seal ${
                    tier.tone === 'silver'
                      ? 'metal-silver'
                      : tier.tone === 'neutral'
                      ? ''
                      : ''
                  }`}
                  style={
                    tier.tone === 'silver'
                      ? {
                          background:
                            'linear-gradient(135deg, #f2f3f4 0%, #d5d7d9 40%, #b8babd 100%)',
                          color: 'rgba(12,14,16,0.7)',
                          boxShadow:
                            '0 8px 22px -8px rgba(12,14,16,0.25), inset 0 1px 0 rgba(255,255,255,0.5)',
                        }
                      : tier.tone === 'neutral'
                      ? {
                          background:
                            'linear-gradient(135deg, #f5efe1 0%, #e8dcc4 45%, #cbb890 100%)',
                          color: 'rgba(12,14,16,0.7)',
                          boxShadow:
                            '0 8px 22px -8px rgba(139,110,55,0.35), inset 0 1px 0 rgba(255,255,255,0.4)',
                        }
                      : undefined
                  }
                >
                  {tier.ordinal}
                </div>
              </div>

              {/* Positioning line */}
              <p
                className={`font-display italic text-xl md:text-[1.4rem] leading-snug mb-3 ${
                  tier.tone === 'cyan' ? 'text-white' : 'text-[var(--ink)]'
                }`}
              >
                {tier.positioning}
              </p>
              <p
                className={`text-[0.95rem] leading-relaxed mb-8 ${
                  tier.tone === 'cyan' ? 'text-stone-300' : 'text-stone-600'
                }`}
              >
                {tier.audience}
              </p>

              {/* Price */}
              <div className="relative mb-8 pb-6 border-b border-dashed border-current/15">
                <div className="flex items-baseline gap-2.5">
                  <span
                    className={`pricing-from ${
                      tier.tone === 'cyan' ? 'text-stone-300' : ''
                    }`}
                  >
                    ab
                  </span>
                  <span
                    className={`pricing-numeral text-5xl md:text-6xl ${
                      tier.tone === 'cyan' ? 'text-white' : 'text-[var(--ink)]'
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`font-display italic text-2xl md:text-3xl ${
                      tier.tone === 'cyan'
                        ? 'text-cyan-300'
                        : 'text-[var(--cyan-deep)]'
                    }`}
                  >
                    {tier.currency}
                  </span>
                </div>
                <p
                  className={`mt-3 text-[11px] uppercase tracking-[0.2em] ${
                    tier.tone === 'cyan' ? 'text-stone-400' : 'text-stone-500'
                  }`}
                >
                  Ausgangspunkt · zzgl. USt.
                </p>
              </div>

              {/* Scope */}
              <ul className="space-y-3.5 mb-10">
                {tier.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full ${
                        tier.tone === 'cyan'
                          ? 'bg-cyan-300'
                          : 'bg-[var(--cyan-deep)]'
                      }`}
                    />
                    <span
                      className={`text-[0.95rem] leading-relaxed ${
                        tier.tone === 'cyan' ? 'text-stone-200' : 'text-stone-700'
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto">
                <Link
                  href="/buchen"
                  className={`group inline-flex w-full items-center justify-between gap-2 px-5 py-4 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                    tier.tone === 'cyan'
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-white shadow-[0_20px_50px_-15px_rgba(6,182,212,0.6)]'
                      : 'bg-[var(--ink)] hover:bg-black text-white shadow-[0_14px_40px_-14px_rgba(12,14,16,0.5)]'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M2 8h11M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Scarcity strip — "12 clients per year" */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-16 md:mt-20 relative rounded-3xl bg-[var(--ink)] text-white p-8 md:p-12 overflow-hidden"
        >
          <motion.div
            animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.05, 1] }}
            transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
            className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(6,182,212,0.35), transparent 65%)',
            }}
          />
          <div className="noise-overlay opacity-40 mix-blend-overlay" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div className="lg:flex-1">
              <div className="editorial-eyebrow-inverse mb-6">
                <span>Kapazität</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-[2.4rem] font-semibold leading-[1.1] tracking-[-0.02em] max-w-2xl">
                Wir nehmen{' '}
                <span className="font-display italic font-normal text-cyan-300">
                  zwölf Klienten
                </span>{' '}
                pro Jahr an. Aktuell drei Plätze für 2026.
              </h3>
              <p className="mt-5 text-stone-300 text-base md:text-lg leading-relaxed max-w-xl">
                Weniger Projekte pro Jahr heißt tiefere Verantwortung pro Projekt.
                Wer früh anfragt, arbeitet mit uns, wenn der Kalender noch atmet.
              </p>

              {/* Slots indicator */}
              <div className="mt-8 flex items-center gap-3">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                      idx < 9 ? 'bg-white/12' : 'bg-cyan-400'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-stone-400">
                <span>9 vergeben</span>
                <span>3 verfügbar · 2026</span>
              </div>
            </div>

            <Link
              href="/buchen"
              className="group inline-flex items-center gap-2 whitespace-nowrap bg-white text-[var(--ink)] hover:bg-cyan-50 px-7 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-[1px] shadow-[0_14px_40px_-14px_rgba(255,255,255,0.4)]"
            >
              <span>Platz für 2026 prüfen</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 8h11M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Add-on packages — concrete visible prices, anchoring against the flagships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.75, ease }}
          className="mt-16 md:mt-24"
        >
          <div className="signature-divider mb-10">
            <span>Einzelleistungen · zubuchbar</span>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h3 className="text-[1.8rem] leading-[1.1] sm:text-4xl md:text-[2.6rem] font-semibold text-[var(--ink)] tracking-[-0.03em]">
              Ergänzungen mit{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                festen Ausgangspreisen.
              </span>
            </h3>
            <p className="mt-5 text-base md:text-[1.05rem] text-stone-600 leading-relaxed">
              Kleinere, klar umrissene Pakete — buchbar zur Website oder für sich
              allein. Preise sichtbar, damit der Rahmen von Anfang an steht.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {addOns.map((add, i) => (
              <motion.article
                key={add.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.85 + i * 0.06, ease }}
                className="group relative rounded-2xl bg-white border border-stone-200/70 p-6 md:p-7 flex flex-col premium-lift"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-stone-500">
                    {add.subtitle}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-stone-400">
                    {add.cadence === 'einmalig' ? 'einmalig' : 'pro Monat'}
                  </span>
                </div>

                <h4 className="font-display italic text-[1.7rem] md:text-[1.85rem] leading-none text-[var(--ink)] mb-5">
                  {add.label}
                </h4>

                <div className="flex items-baseline gap-1.5 mb-5 pb-5 border-b border-dashed border-stone-200">
                  <span className="pricing-from">ab</span>
                  <span className="pricing-numeral text-4xl md:text-[2.75rem] text-[var(--ink)]">
                    {add.price}
                  </span>
                  <span className="font-display italic text-xl text-[var(--cyan-deep)]">
                    €
                  </span>
                  {add.cadence === 'monatlich' && (
                    <span className="ml-1 text-[11px] uppercase tracking-[0.18em] text-stone-500">
                      / Monat
                    </span>
                  )}
                </div>

                <p className="text-[0.92rem] leading-relaxed text-stone-600 flex-1">
                  {add.detail}
                </p>

                <Link
                  href={add.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--cyan-deep)] hover:text-cyan-900 transition-colors"
                >
                  <span>Details ansehen</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Extended services — no fixed price, just pointer */}
          <div className="mt-14 pt-10 border-t border-stone-200/70">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
                  Ausgedehnter Rahmen
                </span>
                <h4 className="mt-2 font-display italic text-2xl md:text-[1.7rem] text-[var(--ink)] leading-tight">
                  Für Vorhaben jenseits der Website
                </h4>
                <p className="mt-2 text-[0.95rem] text-stone-600 max-w-lg leading-relaxed">
                  Software und App-Entwicklung sind eigene Disziplinen. Rahmen und
                  Preise besprechen wir persönlich nach einer Discovery-Phase.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {extendedServices.map((svc) => (
                  <Link
                    key={svc.label}
                    href={svc.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-stone-200 hover:border-cyan-200 text-[13px] font-medium text-[var(--ink)] transition-all duration-300 hover:-translate-y-[1px]"
                  >
                    <span>{svc.label}</span>
                    <span className="text-[var(--cyan-deep)]">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-[11px] uppercase tracking-[0.22em] text-stone-500">
            Alle Preise zzgl. USt. · Ausgangspunkte, keine Preisschilder · Werbebudget separat
          </p>
        </motion.div>
      </div>
    </section>
  );
}
