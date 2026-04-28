'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Über mich', href: '#about' },
    { label: 'Pakete', href: '#packages' },
    { label: 'Support', href: 'mailto:kontakt@fylumarketing.de' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || menuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <img
                src="/69A2D4F6-C40F-447B-B10C-5C8633E4CD0D.png"
                alt="Fylu Webdesign Saarland – Logo"
                className="h-10 w-auto"
                width={120}
                height={40}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-lg font-semibold text-stone-900 hover:bg-stone-100 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/angebote"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-lg transition-all duration-200 text-sm"
              >
                Kostenlosen Entwurf sichern
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menü öffnen"
              className="md:hidden p-2 text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu — opacity + transform only, no height animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-white border-t border-stone-100 shadow-lg"
            >
              <div className="px-5 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 px-4 rounded-lg font-semibold text-stone-900 hover:bg-stone-100 transition-colors text-base"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  href="/angebote"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 w-full block text-center bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-3.5 rounded-xl font-bold shadow-lg text-base"
                >
                  Kostenlosen Entwurf sichern
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
