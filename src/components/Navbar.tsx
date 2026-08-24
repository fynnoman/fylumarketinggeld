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
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Klienten', href: '/#klienten' },
    { label: 'Prozess', href: '/methodik' },
    { label: 'Studio', href: '/team' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{ position: 'fixed' }}
        className={`fixed top-3 left-3 right-3 md:top-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[min(95%,1180px)] z-50 rounded-full glass ${
          isScrolled || menuOpen ? 'glass-strong' : ''
        }`}
      >
        <span className="glass-edge" aria-hidden />
        <div className="relative px-4 sm:px-5 py-2.5">
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
              <span className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-stone-400 font-medium border-l border-stone-200/70 pl-2.5">
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
                className="md:hidden relative overflow-hidden inline-flex items-center justify-center w-10 h-10 rounded-full btn-glass-cyan"
              >
                <span className="btn-glass-shine" aria-hidden />
                <svg className="relative w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
                </svg>
              </a>
              <a
                href="tel:+4915168488999"
                className="hidden md:inline-flex items-center gap-1.5 btn-glass text-stone-900 px-4 py-2 rounded-full text-[13px] font-semibold"
              >
                <span className="btn-glass-shine" aria-hidden />
                <svg className="relative w-3.5 h-3.5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
                </svg>
                <span className="relative">Anrufen</span>
              </a>
              <Link
                href="/buchen"
                className="hidden md:inline-flex group items-center gap-1.5 btn-glass-ink px-4 py-2 rounded-full text-[13px] font-semibold"
              >
                <span className="btn-glass-shine" aria-hidden />
                <span className="relative">Platz 2026 prüfen</span>
                <span className="relative text-cyan-300 transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-panel"
                className="md:hidden p-2 -mr-1 text-stone-900 rounded-full hover:bg-white/40 transition-colors"
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
      </motion.nav>

      {/* Mobile Dropdown Panel — separate from pill nav so it doesn't warp the rounded-full shape */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop — dims page + closes menu on tap */}
            <motion.button
              type="button"
              aria-hidden
              tabIndex={-1}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ position: 'fixed' }}
              className="md:hidden fixed inset-0 z-40 bg-stone-900/25 backdrop-blur-[2px]"
            />
            <motion.div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigationsmenü"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'fixed', transformOrigin: 'top center' }}
              className="md:hidden fixed top-[76px] left-3 right-3 z-50 rounded-3xl glass-strong overflow-hidden"
            >
              <span className="glass-edge" aria-hidden />
              <div className="relative p-3 flex flex-col gap-0.5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: 0.05 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center justify-between px-4 py-3.5 rounded-2xl font-medium text-stone-800 hover:bg-white/60 active:bg-white/80 transition-colors text-[15px]"
                  >
                    <span>{link.label}</span>
                    <span className="text-stone-300 text-sm transition-transform group-hover:translate-x-0.5">↗</span>
                  </motion.a>
                ))}

                <div className="my-2 h-px bg-stone-200/70" aria-hidden />

                <motion.a
                  href="tel:+4915168488999"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 0.05 + navLinks.length * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden inline-flex items-center justify-center gap-2 btn-glass py-3.5 rounded-2xl font-semibold text-[15px] text-stone-900 min-h-[52px]"
                >
                  <span className="btn-glass-shine" aria-hidden />
                  <svg className="relative w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
                  </svg>
                  <span className="relative">+49 151 684 88999</span>
                </motion.a>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 0.09 + navLinks.length * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-1.5"
                >
                  <Link
                    href="/buchen"
                    onClick={() => setMenuOpen(false)}
                    className="group w-full relative overflow-hidden inline-flex items-center justify-center gap-2 btn-glass-ink py-3.5 rounded-2xl font-semibold text-[15px] min-h-[52px]"
                  >
                    <span className="btn-glass-shine" aria-hidden />
                    <span className="relative">Platz 2026 prüfen</span>
                    <span className="relative text-cyan-300 transition-transform group-hover:translate-x-0.5">→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to push hero down (nav is now floating) */}
      <div aria-hidden className="h-0" />
    </>
  );
}
