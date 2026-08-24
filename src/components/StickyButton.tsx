'use client';

import Link from 'next/link';

const PHONE = '+4915168488999';

export default function StickyButton() {
  return (
    <>
      {/* Desktop: top right — Anruf + Anfrage */}
      <div className="hidden md:flex fixed top-6 right-6 z-50 items-center gap-2">
        <a
          href={`tel:${PHONE}`}
          className="bg-white text-stone-900 px-5 py-3 rounded-xl font-bold shadow-2xl hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-200 active:scale-[0.98] inline-flex items-center gap-2 border border-stone-200"
          aria-label="Jetzt anrufen"
        >
          <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
          </svg>
          <span>Anrufen</span>
        </a>
        <Link
          href="/buchen"
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-bold shadow-2xl transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.4)] active:scale-[0.98] inline-block"
        >
          Projekt starten
        </Link>
      </div>

      {/* Mobile: bottom bar — Anruf gleichwertig daneben */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-md border-t border-stone-100 shadow-2xl">
        <div className="flex items-stretch gap-2">
          <a
            href={`tel:${PHONE}`}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-900 text-white py-4 rounded-xl font-bold text-base shadow-lg min-h-[52px]"
            aria-label="Jetzt anrufen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
            </svg>
            Anrufen
          </a>
          <Link
            href="/buchen"
            className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 rounded-xl font-bold text-base shadow-lg min-h-[52px]"
          >
            Termin buchen
          </Link>
        </div>
      </div>
    </>
  );
}
