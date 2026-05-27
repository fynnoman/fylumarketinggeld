'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WA_NUMBER = '4915168488999';
const WA_MESSAGE = encodeURIComponent(
  'Hallo Fylu, ich interessiere mich für Webdesign / SEO / Google Ads im Saarland und hätte ein paar Fragen.'
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = window.setTimeout(() => setShowHint(true), 1500);
    const t2 = window.setTimeout(() => setShowHint(false), 9000);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Hint bubble (desktop only) */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block fixed bottom-24 left-6 z-40 max-w-[260px] bg-white rounded-2xl shadow-2xl border border-stone-100 px-4 py-3"
          >
            <button
              onClick={() => setShowHint(false)}
              aria-label="Hinweis schließen"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center shadow-md hover:bg-stone-700 transition-colors"
            >
              ×
            </button>
            <p className="text-stone-900 text-sm font-semibold leading-snug">
              Fragen? Schreiben Sie uns direkt.
            </p>
            <p className="text-stone-500 text-xs mt-1">Antwort meist in unter 30 Minuten.</p>
            {/* Pointer */}
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r border-b border-stone-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Per WhatsApp direkt schreiben"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group fixed bottom-24 left-4 md:bottom-6 md:left-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full pl-3 pr-3 md:pl-4 md:pr-5 py-3 shadow-2xl hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-all duration-200 active:scale-[0.97]"
      >
        {/* Pulse ring – langsamer Rhythmus */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 pointer-events-none"
          style={{ animation: 'wa-pulse 4s cubic-bezier(0, 0, 0.2, 1) infinite' }}
        />

        {/* WhatsApp Icon */}
        <span className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 md:w-8 md:h-8"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
        </span>

        <span className="relative hidden md:inline font-bold text-sm whitespace-nowrap">
          Direkt schreiben
        </span>
      </motion.a>
    </>
  );
}
