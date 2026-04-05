'use client';

import Link from 'next/link';

export default function StickyButton() {
  return (
    <>
      {/* Desktop: top right */}
      <div className="hidden md:block fixed top-6 right-6 z-50">
        <Link
          href="/angebote"
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-bold shadow-2xl transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.4)] active:scale-[0.98] inline-block"
        >
          Projekt starten
        </Link>
      </div>

      {/* Mobile: bottom full-width bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-stone-100 shadow-2xl">
        <Link
          href="/angebote"
          className="block w-full text-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 rounded-xl font-bold text-base shadow-lg"
        >
          Kostenlosen Entwurf sichern
        </Link>
      </div>
    </>
  );
}
