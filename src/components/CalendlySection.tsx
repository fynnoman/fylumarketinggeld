'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { WHATSAPP_URL } from '@/lib/contact';
import { trackEvent, readUtmFromSession } from '@/lib/track';

const ease = [0.22, 1, 0.36, 1] as const;

const PHONE_TEL = '+4915168488999';

const benefits = [
  {
    title: 'Persönliches Gespräch',
    body: 'Wir hören zu, bevor wir antworten: was Sie vorhaben, wo Sie stehen, was Ihre Website heute leistet.',
  },
  {
    title: 'Konkrete Einschätzung',
    body: 'Sie bekommen eine ehrliche Einordnung Ihres Vorhabens, ob Marke, Website, Sichtbarkeit oder alles zusammen, und einen Ausblick auf den nächsten Schritt.',
  },
  {
    title: 'Kein Verkaufsgespräch',
    body: 'Passt es zusammen, sprechen wir über den nächsten Schritt. Passt es nicht, war das Gespräch trotzdem wertvoll.',
  },
];

type ContactTab = 'termin' | 'anfrage';
type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function CalendlySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [tab, setTab] = useState<ContactTab>('termin');
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formStarted, setFormStarted] = useState(false);
  const successRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (state === 'success' && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      trackEvent('form_success', { location: 'home_calendly_section' });
    }
  }, [state]);

  function switchTab(next: ContactTab) {
    setTab(next);
    trackEvent('tab_switch', { location: 'home_calendly_section', tab: next });
  }

  function onFieldFocus() {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent('form_start', { location: 'home_calendly_section' });
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === 'sending') return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const firmName = String(fd.get('firmName') || '').trim();
    const contactName = String(fd.get('contactName') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const nachricht = String(fd.get('nachricht') || '').trim();
    const consent = fd.get('consent') === 'on';

    if (!contactName || !nachricht) {
      setState('error');
      setErrorMessage('Bitte Name und Nachricht ausfüllen.');
      return;
    }
    if (!email && !phone) {
      setState('error');
      setErrorMessage('Bitte hinterlegen Sie eine E-Mail oder eine Telefonnummer.');
      return;
    }
    if (!consent) {
      setState('error');
      setErrorMessage('Bitte bestätigen Sie die Datenschutzerklärung.');
      return;
    }

    setState('sending');
    trackEvent('form_submit', { location: 'home_calendly_section' });
    setErrorMessage('');

    const utm = readUtmFromSession();
    const utmLine = utm
      ? `\n\nQuelle: ${Object.entries(utm)
          .map(([k, v]) => `${k}=${v}`)
          .join(' · ')}`
      : '';

    const message = ['Anfrage von Homepage (Erstgespraech-Section)', '', nachricht, utmLine]
      .filter(Boolean)
      .join('\n');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firmName,
          contactName,
          email: email || undefined,
          phone,
          projectType: 'Erstgespraech Anfrage (Homepage)',
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setState('error');
        setErrorMessage(
          (data && typeof data.error === 'string' && data.error) ||
            'Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de.',
        );
        return;
      }

      setState('success');
      form.reset();
    } catch {
      setState('error');
      setErrorMessage(
        'Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de.',
      );
    }
  }

  return (
    <section
      ref={ref}
      id="analyse"
      aria-labelledby="analyse-heading"
      className="relative bg-[var(--background-warm)] overflow-hidden scroll-mt-24 isolate border-t border-stone-200/60"
    >
      {/* Ambient blooms */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="glass-bloom-cyan absolute top-[8%] right-[6%] w-[36vw] h-[36vw] max-w-[520px] max-h-[520px] rounded-full opacity-70" />
        <div className="glass-bloom-warm absolute bottom-[6%] left-[4%] w-[30vw] h-[30vw] max-w-[420px] max-h-[420px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-32 pb-16 md:pb-32">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-baseline gap-3">
            <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
              §01
            </span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
              Erstgespräch buchen
            </span>
          </div>
          <h2
            id="analyse-heading"
            className="text-[2.4rem] sm:text-5xl md:text-7xl lg:text-[6rem] leading-[1.0] sm:leading-[0.98] font-semibold text-[var(--ink)] tracking-[-0.04em]"
          >
            Kostenloses{' '}
            <span className="font-display italic font-normal text-[var(--cyan-deep)]">
              Erstgespräch
            </span>
            .
          </h2>
          <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-stone-600 leading-relaxed">
            15 bis 30 Minuten. Kostenlos und unverbindlich. Wir hören zu, geben
            eine ehrliche Einschätzung, direkt im Gespräch, nicht in einem
            PDF drei Tage später.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="#kontakt-widget"
              onClick={() =>
                trackEvent('cta_click', {
                  location: 'home_calendly_section',
                  label: 'termin_waehlen',
                  destination: 'kontakt_widget',
                })
              }
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--ink)] text-white px-6 py-3.5 text-sm font-semibold tracking-[0.02em] transition-all duration-300 hover:-translate-y-[1px] shadow-[0_20px_50px_-16px_rgba(12,14,16,0.35)] min-h-[52px]"
            >
              <span>Termin wählen</span>
              <span className="text-cyan-300 transition-transform group-hover:translate-x-0.5">↓</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Per WhatsApp schreiben"
              onClick={() =>
                trackEvent('cta_click', {
                  location: 'home_calendly_section',
                  label: 'whatsapp',
                  destination: 'whatsapp',
                })
              }
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] px-6 py-3.5 text-sm font-semibold tracking-[0.02em] text-white transition-all duration-300 hover:-translate-y-[1px] shadow-[0_20px_50px_-16px_rgba(37,211,102,0.4)] min-h-[52px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() =>
                trackEvent('cta_click', {
                  location: 'home_calendly_section',
                  label: 'anrufen',
                  destination: 'tel',
                })
              }
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white border border-stone-200 hover:border-stone-400 px-6 py-3.5 text-sm font-semibold tracking-[0.02em] text-[var(--ink)] transition-colors min-h-[52px]"
            >
              <svg
                className="w-4 h-4 text-cyan-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z"
                />
              </svg>
              <span>Anrufen</span>
            </a>
          </div>
        </motion.div>

        {/* Benefits row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-10 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-10"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.08, ease }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                  0{i + 1}
                </span>
                <span className="rule-tick text-stone-400" />
              </div>
              <h3 className="text-[15px] font-semibold text-[var(--ink)] tracking-tight">
                {b.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {b.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Regler zwischen Termin und Anfrage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.28, ease }}
          className="mt-14 md:mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-1 rounded-full bg-white border border-stone-200/80 p-1.5">
            <button
              type="button"
              onClick={() => switchTab('termin')}
              aria-pressed={tab === 'termin'}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                tab === 'termin'
                  ? 'bg-[var(--ink)] text-white shadow-[0_10px_28px_-14px_rgba(12,14,16,0.55)]'
                  : 'text-stone-600 hover:text-[var(--ink)]'
              }`}
            >
              Termin buchen
            </button>
            <button
              type="button"
              onClick={() => switchTab('anfrage')}
              aria-pressed={tab === 'anfrage'}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                tab === 'anfrage'
                  ? 'bg-[var(--ink)] text-white shadow-[0_10px_28px_-14px_rgba(12,14,16,0.55)]'
                  : 'text-stone-600 hover:text-[var(--ink)]'
              }`}
            >
              Anfrage schreiben
            </button>
          </div>
        </motion.div>

        {/* Widget: Calendly oder Formular */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="mt-8 md:mt-10"
        >
          <div id="kontakt-widget" className="scroll-mt-24">
            {tab === 'termin' ? (
              <div
                id="calendly-embed"
                className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-[0_30px_80px_-24px_rgba(12,14,16,0.18)]"
              >
                <div className="flex items-center justify-between px-4 sm:px-5 md:px-7 py-3 md:py-4 border-b border-stone-200/70 bg-white">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.28em] sm:tracking-[0.32em] uppercase text-stone-500">
                      Verfügbar · Erstgespräch
                    </span>
                  </div>
                  <span className="hidden md:inline text-[10px] font-mono tracking-[0.22em] text-stone-400">
                    calendly · fylumarketing
                  </span>
                </div>
                <CalendlyEmbed />
              </div>
            ) : (
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-[0_30px_80px_-24px_rgba(12,14,16,0.18)]">
                <div className="flex items-center justify-between px-4 sm:px-5 md:px-7 py-3 md:py-4 border-b border-stone-200/70 bg-white">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-1.5 h-1.5 rounded-full bg-cyan-500" aria-hidden />
                    <span className="text-[10px] font-medium tracking-[0.28em] sm:tracking-[0.32em] uppercase text-stone-500">
                      Anfrage schreiben
                    </span>
                  </div>
                  <span className="hidden md:inline text-[10px] font-mono tracking-[0.22em] text-stone-400">
                    formular · fylumarketing
                  </span>
                </div>

                {state === 'success' ? (
                  <div ref={successRef} className="p-10 md:p-14 text-center">
                    <div className="hairline-rule w-16 mx-auto mb-6" />
                    <div className="font-display italic text-2xl md:text-3xl text-[var(--cyan-deep)] mb-3">
                      Danke.
                    </div>
                    <p className="text-stone-700 leading-relaxed max-w-md mx-auto">
                      Ihre Anfrage ist angekommen. Sie hören persönlich von uns,
                      meist innerhalb von 24 Stunden.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="p-6 md:p-8 grid gap-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <HomeField
                        label="Unternehmen (optional)"
                        name="firmName"
                        autoComplete="organization"
                        onFocus={onFieldFocus}
                      />
                      <HomeField
                        label="Name"
                        name="contactName"
                        required
                        autoComplete="name"
                        onFocus={onFieldFocus}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <HomeField
                        label="E-Mail"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onFocus={onFieldFocus}
                      />
                      <HomeField
                        label="Telefon"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        onFocus={onFieldFocus}
                      />
                    </div>
                    <label className="block">
                      <span className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-3">
                        Ihre Nachricht <span className="text-[var(--cyan-deep)]">*</span>
                      </span>
                      <textarea
                        name="nachricht"
                        rows={5}
                        required
                        onFocus={onFieldFocus}
                        placeholder="Kurz Ihr Vorhaben, Ihre Ausgangslage oder Ihre Frage."
                        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-colors resize-y"
                      />
                    </label>

                    <label className="flex items-start gap-3 text-[13px] text-stone-600 leading-relaxed">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-1 h-4 w-4 rounded border-stone-300 text-[var(--ink)] focus:ring-cyan-600"
                      />
                      <span>
                        Ich habe die{' '}
                        <Link
                          href="/datenschutz"
                          className="underline decoration-stone-400 underline-offset-2 hover:text-stone-900"
                        >
                          Datenschutzerklärung
                        </Link>{' '}
                        zur Kenntnis genommen.
                      </span>
                    </label>

                    {state === 'error' && errorMessage ? (
                      <div className="rounded-xl bg-red-50 border border-red-200 text-red-800 text-[13px] px-4 py-3">
                        {errorMessage}
                      </div>
                    ) : null}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={state === 'sending'}
                        className="group w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] hover:bg-black text-white px-8 py-4 text-[15px] font-semibold transition-all shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <span>
                          {state === 'sending' ? 'Wird gesendet…' : 'Anfrage senden'}
                        </span>
                        {state === 'sending' ? null : (
                          <span className="text-cyan-400 transition-transform group-hover:translate-x-0.5">→</span>
                        )}
                      </button>
                      <p className="mt-3 text-[12px] text-stone-500">
                        Kostenlos und unverbindlich. Wir melden uns persönlich.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-stone-500 tracking-[0.02em]">
            Kein passender Termin dabei?{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cyan-deep)] hover:text-[var(--ink)] font-semibold underline underline-offset-4 transition-colors"
            >
              Direkt per WhatsApp schreiben
            </a>
          </p>
        </motion.div>
      </div>

      {/* Big background outline label */}
      <div
        aria-hidden
        className="absolute -bottom-[4vw] left-[-4vw] pointer-events-none select-none"
      >
        <div className="text-outline font-display italic font-normal text-[22vw] leading-[0.85] opacity-30">
          Gespräch
        </div>
      </div>
    </section>
  );
}

function HomeField({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  autoComplete,
  onFocus,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  onFocus?: () => void;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-3">
        {label}
        {required ? <span className="text-[var(--cyan-deep)]"> *</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onFocus={onFocus}
        className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-colors"
      />
    </label>
  );
}
