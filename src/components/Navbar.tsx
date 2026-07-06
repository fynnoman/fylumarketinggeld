'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { label: 'Pakete', href: '/#pakete' },
    { label: 'Klienten', href: '/#about' },
    { label: 'Prozess', href: '/methodik' },
    { label: 'Studio', href: '/team' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-3 left-3 right-3 md:top-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[min(95%,1180px)] z-50 transition-all duration-500 rounded-2xl border ${
          isScrolled || menuOpen
            ? 'bg-white/85 backdrop-blur-xl border-stone-200/70 shadow-[0_10px_40px_-15px_rgba(12,14,16,0.18)]'
            : 'bg-white/40 backdrop-blur-md border-white/40 shadow-[0_2px_20px_-10px_rgba(12,14,16,0.08)]'
        }`}
      >
        <div className="px-4 sm:px-5 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo + wordmark */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-2.5 -my-1"
            >
              <Image
                src="/logo-fylu.webp"
                alt="Fylu Webdesign Saarland – Logo"
                width={120}
                height={40}
                priority
                className="h-9 w-auto"
              />
              <span className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-stone-400 font-medium border-l border-stone-200 pl-2.5">
                <span className="font-display italic normal-case text-[13px] tracking-normal text-stone-500 group-hover:text-cyan-700 transition-colors">
                  Studio
                </span>
                <span className="text-stone-300">·</span>
                <span>Saarland</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative px-3.5 py-2 text-[13.5px] font-medium text-stone-700 hover:text-stone-900 transition-colors"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-x-3 bottom-1 h-px bg-cyan-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+4915168488999"
                aria-label="Jetzt anrufen"
                className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white shadow-[0_4px_14px_-4px_rgba(6,182,212,0.6)] active:scale-[0.96] transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
                </svg>
              </a>
              <a
                href="tel:+4915168488999"
                className="hidden md:inline-flex items-center gap-1.5 bg-white border border-stone-200 hover:border-stone-300 text-stone-900 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm hover:-translate-y-[1px] transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
                </svg>
                <span>Anrufen</span>
              </a>
              <Link
                href="/buchen"
                className="hidden md:inline-flex group items-center gap-1.5 bg-[var(--ink)] hover:bg-black text-white px-4 py-2 rounded-full text-[13px] font-semibold shadow-[0_4px_14px_-4px_rgba(12,14,16,0.4)] hover:shadow-[0_8px_22px_-6px_rgba(12,14,16,0.5)] hover:-translate-y-[1px] transition-all duration-300"
              >
                <span>Platz 2026 prüfen</span>
                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Menü öffnen"
                aria-expanded={menuOpen}
                className="md:hidden p-2 -mr-1 text-stone-900 rounded-lg hover:bg-stone-100/70 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-t border-stone-100/80 overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-0.5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="py-3 px-3 rounded-xl font-medium text-stone-800 hover:bg-stone-100/70 transition-colors text-[15px] flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-stone-300 text-sm">↗</span>
                  </motion.a>
                ))}
                <a
                  href="tel:+4915168488999"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-cyan-500 text-white py-3.5 rounded-xl font-semibold text-[15px] shadow-lg min-h-[52px]"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
                  </svg>
                  <span>+49 151 684 88999</span>
                </a>
                <Link
                  href="/buchen"
                  onClick={() => setMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--ink)] text-white py-3.5 rounded-xl font-semibold text-[15px] shadow-lg min-h-[52px]"
                >
                  <span>Platz 2026 prüfen</span>
                  <span className="text-cyan-400">→</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to push hero down (nav is now floating) */}
      <div aria-hidden className="h-0" />
    </>
  );
}
