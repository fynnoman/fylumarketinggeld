'use client';

import Image from 'next/image';
import Link from 'next/link';
import { openConsentSettings } from '@/lib/consent';

export default function Footer() {
  return (
    <footer className="relative bg-[var(--ink)] text-white overflow-hidden isolate">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw]"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 0%, rgba(6,182,212,0.18), transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
          }}
        />
        <div className="noise-overlay opacity-50 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="py-16 md:py-20 grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-fylu.webp"
                alt="Fylu Marketing – Logo"
                width={132}
                height={44}
                className="h-11 w-auto"
              />
              <span className="text-sm text-stone-400 leading-none border-l border-white/15 pl-3">
                Marketing
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-6">
              Fylu Marketing aus Saarlouis. Websites, SEO, Google Ads und
              Software für Unternehmen jeder Phase — vom ersten Auftritt bis
              zur Skalierung.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:kontakt@fylumarketing.de"
                className="block text-stone-300 hover:text-cyan-300 transition-colors"
              >
                kontakt@fylumarketing.de
              </a>
              <a
                href="tel:+4915168488999"
                className="block text-stone-300 hover:text-cyan-300 transition-colors"
              >
                +49 151 684 88999
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[10px] font-semibold mb-5 text-cyan-300 uppercase tracking-[0.2em]">
              Unterseiten
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-stone-400">
              <li><Link href="/team" className="hover:text-white transition-colors">Über mich</Link></li>
              <li><Link href="/methodik" className="hover:text-white transition-colors">Prozess</Link></li>
              <li><Link href="/referenzen" className="hover:text-white transition-colors">Referenzen</Link></li>
              <li><Link href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</Link></li>
              <li><Link href="/probleme" className="hover:text-white transition-colors">Probleme</Link></li>
              <li><Link href="/tools" className="hover:text-white transition-colors">Tools</Link></li>
              <li><Link href="/buchen" className="hover:text-white transition-colors">Erstgespräch</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[10px] font-semibold mb-5 text-cyan-300 uppercase tracking-[0.2em]">
              Rechtliches
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
              <li>
                <button
                  onClick={openConsentSettings}
                  className="hover:text-white transition-colors"
                  type="button"
                >
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 py-7 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Fylu Marketing. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-stone-500">Saarlouis · Saarland</p>
        </div>
      </div>
    </footer>
  );
}
