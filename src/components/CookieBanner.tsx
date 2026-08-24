'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
  acceptAll,
  rejectAll,
  setConsent,
  useConsent,
} from '@/lib/consent';

const ease = [0.22, 1, 0.36, 1] as const;

type Category = {
  key: 'necessary' | 'marketing' | 'external';
  title: string;
  required?: boolean;
  purpose: string;
  provider: string;
  cookies: string;
  legal: string;
};

const CATEGORIES: Category[] = [
  {
    key: 'necessary',
    title: 'Notwendig',
    required: true,
    purpose:
      'Grundlegender Betrieb der Website. Umfasst Session-Handling, Kontaktformulare und die anonyme Reichweitenmessung über Vercel Web Analytics, die ohne Cookies und ohne personenbezogene Daten arbeitet.',
    provider: 'Fylu (Erstanbieter) · Vercel Inc.',
    cookies: 'Keine dauerhaften Cookies. Vercel Analytics: cookielos, aggregierte Werte.',
    legal: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am fehlerfreien Betrieb).',
  },
  {
    key: 'marketing',
    title: 'Marketing',
    purpose:
      'Google Ads Conversion-Tracking. Misst, welche Werbeanzeigen zu Anfragen führen, damit Kampagnen sinnvoll ausgesteuert werden können.',
    provider: 'Google Ireland Limited, Gordon House, Dublin 4, Irland.',
    cookies: '_gcl_au, _gcl_aw, _ga, _gid — Laufzeit bis 24 Monate.',
    legal: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).',
  },
  {
    key: 'external',
    title: 'Externe Dienste',
    purpose:
      'Einbettung des Calendly-Buchungskalenders für das kostenlose Erstgespräch. Ohne Einwilligung erscheint stattdessen ein Platzhalter, den Sie manuell laden können.',
    provider: 'Calendly LLC, 271 17th St NW, Atlanta, GA, USA. Datenübermittlung in die USA auf Basis der EU-Standardvertragsklauseln.',
    cookies: '__cf_bm, _calendly_session, _gcl_au — Laufzeit Session bis 12 Monate.',
    legal: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 49 Abs. 1 lit. a DSGVO für die USA-Übermittlung.',
  },
];

export default function CookieBanner() {
  const { consent, hydrated } = useConsent();
  const [modalOpen, setModalOpen] = useState(false);
  const [draft, setDraft] = useState({ marketing: false, external: false });

  useEffect(() => {
    const openHandler = () => {
      setDraft({
        marketing: consent?.marketing ?? false,
        external: consent?.external ?? false,
      });
      setModalOpen(true);
    };
    const changeHandler = () => setModalOpen(false);
    window.addEventListener(CONSENT_OPEN_EVENT, openHandler);
    window.addEventListener(CONSENT_CHANGE_EVENT, changeHandler);
    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, openHandler);
      window.removeEventListener(CONSENT_CHANGE_EVENT, changeHandler);
    };
  }, [consent]);

  useEffect(() => {
    if (!modalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [modalOpen]);

  if (!hydrated) return null;

  const bannerVisible = consent === null && !modalOpen;

  return (
    <>
      {/* Banner */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.45, ease }}
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-banner-title"
            className="fixed z-[60] bottom-3 left-3 right-3 md:bottom-6 md:right-6 md:left-auto md:max-w-[440px]"
            style={{ position: 'fixed' }}
          >
            <div className="relative rounded-3xl glass overflow-hidden">
              <span className="glass-edge" aria-hidden />
              <div className="relative p-5 md:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex w-1.5 h-1.5 rounded-full bg-cyan-500" aria-hidden />
                  <span className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-medium">
                    Datenschutz
                  </span>
                </div>
                <h2
                  id="cookie-banner-title"
                  className="text-[17px] md:text-[18px] font-semibold text-stone-900 tracking-tight leading-snug"
                >
                  Cookies &amp; externe Dienste
                </h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-stone-600">
                  Notwendige Cookies laufen automatisch. Für Google Ads
                  Conversion-Tracking und das Calendly-Buchungswidget bitten wir
                  um Ihre Einwilligung. Details unter{' '}
                  <Link
                    href="/datenschutz"
                    className="underline underline-offset-2 text-[var(--cyan-deep)] hover:text-stone-900 transition-colors"
                  >
                    Datenschutz
                  </Link>
                  .
                </p>

                <div className="mt-5 flex flex-col gap-2">
                  <button
                    onClick={() => acceptAll()}
                    className="relative overflow-hidden inline-flex items-center justify-center gap-1.5 btn-glass-ink px-4 py-2.5 rounded-full text-[13px] font-semibold"
                  >
                    <span className="btn-glass-shine" aria-hidden />
                    <span className="relative">Alle akzeptieren</span>
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => rejectAll()}
                      className="relative overflow-hidden inline-flex flex-1 items-center justify-center btn-glass px-4 py-2.5 rounded-full text-[13px] font-semibold text-stone-800"
                    >
                      <span className="btn-glass-shine" aria-hidden />
                      <span className="relative">Nur notwendige</span>
                    </button>
                    <button
                      onClick={() => {
                        setDraft({ marketing: false, external: false });
                        setModalOpen(true);
                      }}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-[13px] font-semibold text-stone-700 hover:text-stone-900 hover:bg-white/40 transition-colors"
                    >
                      Einstellungen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-0 md:p-6"
            style={{ position: 'fixed' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              onClick={() => setModalOpen(false)}
              aria-hidden
              tabIndex={-1}
              className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="consent-modal-title"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.35, ease }}
              className="relative w-full md:max-w-[640px] max-h-[92svh] flex flex-col rounded-t-3xl md:rounded-3xl bg-[var(--background-warm)] shadow-[0_40px_100px_-20px_rgba(12,14,16,0.4)] border border-stone-200/70 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 px-6 md:px-8 pt-6 md:pt-7 pb-4 border-b border-stone-200/70">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex w-1.5 h-1.5 rounded-full bg-cyan-500" aria-hidden />
                    <span className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-medium">
                      Datenschutz-Einstellungen
                    </span>
                  </div>
                  <h2
                    id="consent-modal-title"
                    className="text-[22px] md:text-[26px] font-semibold text-stone-900 tracking-[-0.02em] leading-tight"
                  >
                    Welche Dienste möchten Sie zulassen?
                  </h2>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  aria-label="Schließen"
                  className="shrink-0 -mr-2 -mt-1 p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Categories */}
              <div className="flex-1 overflow-y-auto px-6 md:px-8 py-5 space-y-4">
                <p className="text-[13.5px] leading-relaxed text-stone-600">
                  Sie können Ihre Auswahl jederzeit über den Link
                  „Cookie-Einstellungen“ im Footer ändern. Details zu jedem
                  Dienst finden Sie in unserer{' '}
                  <Link
                    href="/datenschutz"
                    onClick={() => setModalOpen(false)}
                    className="underline underline-offset-2 text-[var(--cyan-deep)] hover:text-stone-900 transition-colors"
                  >
                    Datenschutzerklärung
                  </Link>
                  .
                </p>

                {CATEGORIES.map((cat) => {
                  const isActive =
                    cat.required ||
                    (cat.key === 'marketing' && draft.marketing) ||
                    (cat.key === 'external' && draft.external);

                  return (
                    <div
                      key={cat.key}
                      className="rounded-2xl border border-stone-200/80 bg-white/70 p-4 md:p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-[15px] font-semibold text-stone-900">
                              {cat.title}
                            </h3>
                            {cat.required && (
                              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 bg-stone-100 rounded-full px-2 py-0.5">
                                Immer aktiv
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-stone-600">
                            {cat.purpose}
                          </p>
                        </div>
                        <ConsentToggle
                          checked={isActive}
                          disabled={cat.required}
                          onChange={(next) => {
                            if (cat.key === 'marketing') setDraft((d) => ({ ...d, marketing: next }));
                            if (cat.key === 'external') setDraft((d) => ({ ...d, external: next }));
                          }}
                          label={cat.title}
                        />
                      </div>

                      <dl className="mt-4 grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-y-2 gap-x-4 text-[12px]">
                        <dt className="text-stone-500 uppercase tracking-[0.14em] text-[10.5px]">Anbieter</dt>
                        <dd className="text-stone-700 leading-relaxed">{cat.provider}</dd>
                        <dt className="text-stone-500 uppercase tracking-[0.14em] text-[10.5px]">Cookies</dt>
                        <dd className="text-stone-700 leading-relaxed">{cat.cookies}</dd>
                        <dt className="text-stone-500 uppercase tracking-[0.14em] text-[10.5px]">Rechtsgrundlage</dt>
                        <dd className="text-stone-700 leading-relaxed">{cat.legal}</dd>
                      </dl>
                    </div>
                  );
                })}
              </div>

              {/* Footer actions */}
              <div className="border-t border-stone-200/70 px-6 md:px-8 py-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3 sm:justify-end bg-white/60">
                <button
                  onClick={() => rejectAll()}
                  className="relative overflow-hidden inline-flex items-center justify-center btn-glass px-5 py-2.5 rounded-full text-[13px] font-semibold text-stone-800"
                >
                  <span className="btn-glass-shine" aria-hidden />
                  <span className="relative">Alle ablehnen</span>
                </button>
                <button
                  onClick={() => setConsent(draft)}
                  className="inline-flex items-center justify-center border border-stone-300 hover:border-stone-500 px-5 py-2.5 rounded-full text-[13px] font-semibold text-stone-800 transition-colors"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={() => acceptAll()}
                  className="relative overflow-hidden inline-flex items-center justify-center gap-1.5 btn-glass-ink px-5 py-2.5 rounded-full text-[13px] font-semibold"
                >
                  <span className="btn-glass-shine" aria-hidden />
                  <span className="relative">Alle akzeptieren</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ConsentToggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative shrink-0 inline-flex h-7 w-12 rounded-full transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 ${
        checked ? 'bg-[var(--cyan-deep)]' : 'bg-stone-300'
      } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-[0_2px_6px_rgba(12,14,16,0.25)] transition-transform duration-200 ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
