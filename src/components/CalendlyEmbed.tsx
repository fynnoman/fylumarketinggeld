'use client';

import Script from 'next/script';
import { useState } from 'react';
import { openConsentSettings, setConsent, useConsent, useConsentCategory } from '@/lib/consent';
import { CALENDLY_EMBED_URL } from '@/lib/contact';

type Props = {
  height?: string;
};

export default function CalendlyEmbed({ height = 'clamp(680px, 90svh, 820px)' }: Props) {
  const allowed = useConsentCategory('external');
  const { consent } = useConsent();
  const [sessionAllow, setSessionAllow] = useState(false);

  const canLoad = allowed || sessionAllow;

  if (!canLoad) {
    return (
      <div
        className="flex flex-col items-center justify-center text-center px-6 py-14 md:py-20 bg-[var(--background-warm)]"
        style={{ minHeight: '480px' }}
      >
        <div className="max-w-md">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="inline-flex w-1.5 h-1.5 rounded-full bg-cyan-500" aria-hidden />
            <span className="text-[10px] uppercase tracking-[0.28em] text-stone-500 font-medium">
              Externer Dienst
            </span>
          </div>
          <h3 className="text-[20px] md:text-[22px] font-semibold text-stone-900 tracking-tight leading-snug">
            Calendly-Kalender wird nicht geladen.
          </h3>
          <p className="mt-3 text-[13.5px] text-stone-600 leading-relaxed">
            Um den Buchungskalender anzuzeigen, wird ein externer Dienst
            (Calendly LLC, USA) eingebunden. Dabei werden Cookies gesetzt und
            Ihre IP an Calendly übermittelt.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <button
              onClick={() =>
                setConsent({
                  marketing: consent?.marketing ?? false,
                  external: true,
                })
              }
              className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] hover:bg-stone-800 text-white px-5 py-2.5 text-[13px] font-semibold transition-colors"
            >
              Kalender laden &amp; Einwilligung speichern
            </button>
            <button
              onClick={() => setSessionAllow(true)}
              className="inline-flex items-center justify-center rounded-full border border-stone-300 hover:border-stone-500 px-5 py-2.5 text-[13px] font-semibold text-stone-800 transition-colors"
            >
              Nur einmalig laden
            </button>
          </div>
          <button
            onClick={openConsentSettings}
            className="mt-4 text-[12px] text-stone-500 hover:text-stone-900 underline underline-offset-4 transition-colors"
          >
            Datenschutz-Einstellungen öffnen
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_EMBED_URL}
        style={{
          minWidth: '280px',
          height,
          background: 'var(--background-warm)',
        }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
