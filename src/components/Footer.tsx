'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="relative bg-[var(--ink)] text-white overflow-hidden isolate">
      {/* Atmosphere */}
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
        {/* Hero band — bold call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="py-20 md:py-28 text-center border-b border-white/8"
        >
          <h2 className="text-[2.2rem] leading-[1.04] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold tracking-[-0.035em] max-w-4xl mx-auto">
            Bereit, Ihre Website zur{' '}
            <span className="font-display italic font-normal text-cyan-300">
              Anfragenmaschine
            </span>{' '}
            zu machen?
          </h2>
          <p className="mt-6 text-stone-400 text-base md:text-lg max-w-xl mx-auto">
            15 Minuten Strategiegespräch. Kostenlos &amp; unverbindlich.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <a
              href="tel:+4915168488999"
              className="group inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-7 py-4 rounded-full text-[15px] font-bold shadow-[0_20px_50px_-15px_rgba(6,182,212,0.6)] transition-all duration-300 hover:-translate-y-[1px] min-h-[52px]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
              </svg>
              <span>+49 151 684 88999</span>
            </a>
            <Link
              href="/buchen"
              className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white px-6 py-4 rounded-full text-[15px] font-semibold border border-white/15 backdrop-blur-sm transition-all duration-300 min-h-[52px]"
            >
              Anfrage senden
              <span className="text-cyan-300">↗</span>
            </Link>
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="py-16 md:py-20 grid md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-fylu.webp"
                alt="Fylu Webdesign Saarland – Logo"
                width={132}
                height={44}
                className="h-11 w-auto"
              />
              <span className="font-display italic text-cyan-300 text-xl leading-none">
                · Studio
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm mb-6">
              Webdesign-Studio aus Saarlouis. Conversion-getriebene Websites,
              SEO und Google Ads für Unternehmen im Saarland — und auf zwei
              Kontinenten.
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

          {/* Marketing */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-semibold mb-5 text-cyan-300 uppercase tracking-[0.2em]">
              Marketing
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link href="/webdesign-saarland" className="hover:text-white transition-colors">Webdesign Saarland</Link></li>
              <li><Link href="/seo-saarland" className="hover:text-white transition-colors">SEO Saarland</Link></li>
              <li><Link href="/google-ads-saarland" className="hover:text-white transition-colors">Google Ads</Link></li>
              <li><Link href="/website-erstellen-lassen" className="hover:text-white transition-colors">Website erstellen lassen</Link></li>
              <li><Link href="/webdesign-handwerk" className="hover:text-white transition-colors">Webdesign Handwerk</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team &amp; Studio</Link></li>
              <li><Link href="/methodik" className="hover:text-white transition-colors">Methodik</Link></li>
            </ul>
          </div>

          {/* Software & Code */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-semibold mb-5 text-cyan-300 uppercase tracking-[0.2em]">
              Software &amp; Code
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link href="/software-saarland" className="hover:text-white transition-colors">Software Saarland</Link></li>
              <li><Link href="/programmierer-saarland" className="hover:text-white transition-colors">Programmierer Saarland</Link></li>
              <li><Link href="/app-entwickeln-lassen" className="hover:text-white transition-colors">App entwickeln lassen</Link></li>
              <li><Link href="/software/saarbruecken" className="hover:text-white transition-colors">Software Saarbrücken</Link></li>
              <li><Link href="/software/saarlouis" className="hover:text-white transition-colors">Software Saarlouis</Link></li>
              <li><Link href="/software/neunkirchen" className="hover:text-white transition-colors">Software Neunkirchen</Link></li>
              <li><Link href="/software/homburg" className="hover:text-white transition-colors">Software Homburg</Link></li>
            </ul>
          </div>

          {/* Standorte */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] font-semibold mb-5 text-cyan-300 uppercase tracking-[0.2em]">
              Standorte
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2.5 text-sm text-stone-400">
              <li><Link href="/webdesign/saarbruecken" className="hover:text-white transition-colors">Saarbrücken</Link></li>
              <li><Link href="/webdesign/saarlouis" className="hover:text-white transition-colors">Saarlouis</Link></li>
              <li><Link href="/webdesign/voelklingen" className="hover:text-white transition-colors">Völklingen</Link></li>
              <li><Link href="/webdesign/neunkirchen" className="hover:text-white transition-colors">Neunkirchen</Link></li>
              <li><Link href="/webdesign/homburg" className="hover:text-white transition-colors">Homburg</Link></li>
              <li><Link href="/webdesign/merzig" className="hover:text-white transition-colors">Merzig</Link></li>
              <li><Link href="/webdesign/st-ingbert" className="hover:text-white transition-colors">St. Ingbert</Link></li>
              <li><Link href="/webdesign/dillingen" className="hover:text-white transition-colors">Dillingen</Link></li>
              <li><Link href="/webdesign/st-wendel" className="hover:text-white transition-colors">St. Wendel</Link></li>
              <li><Link href="/webdesign/lebach" className="hover:text-white transition-colors">Lebach</Link></li>
              <li><Link href="/webdesign/blieskastel" className="hover:text-white transition-colors">Blieskastel</Link></li>
              <li><Link href="/webdesign/bexbach" className="hover:text-white transition-colors">Bexbach</Link></li>
              <li><Link href="/webdesign/puettlingen" className="hover:text-white transition-colors">Püttlingen</Link></li>
              <li><Link href="/webdesign/mettlach" className="hover:text-white transition-colors">Mettlach</Link></li>
              <li><Link href="/webdesign/losheim-am-see" className="hover:text-white transition-colors">Losheim am See</Link></li>
              <li><Link href="/webdesign/tholey" className="hover:text-white transition-colors">Tholey</Link></li>
            </ul>
          </div>

          {/* Branchen */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-[10px] font-semibold mb-5 text-cyan-300 uppercase tracking-[0.2em]">
              Branchen
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2.5 text-sm text-stone-400">
              <li><Link href="/leistungen/handwerker" className="hover:text-white transition-colors">Handwerker</Link></li>
              <li><Link href="/leistungen/maler" className="hover:text-white transition-colors">Maler</Link></li>
              <li><Link href="/leistungen/elektriker" className="hover:text-white transition-colors">Elektriker</Link></li>
              <li><Link href="/leistungen/dachdecker" className="hover:text-white transition-colors">Dachdecker</Link></li>
              <li><Link href="/leistungen/shk" className="hover:text-white transition-colors">SHK</Link></li>
              <li><Link href="/leistungen/schreiner" className="hover:text-white transition-colors">Schreiner</Link></li>
              <li><Link href="/leistungen/garten-landschaftsbau" className="hover:text-white transition-colors">GaLaBau</Link></li>
              <li><Link href="/leistungen/restaurant" className="hover:text-white transition-colors">Restaurants</Link></li>
              <li><Link href="/leistungen/hotel" className="hover:text-white transition-colors">Hotels</Link></li>
              <li><Link href="/leistungen/anwalt" className="hover:text-white transition-colors">Anwälte</Link></li>
              <li><Link href="/leistungen/steuerberater" className="hover:text-white transition-colors">Steuerberater</Link></li>
              <li><Link href="/leistungen/arzt" className="hover:text-white transition-colors">Ärzte</Link></li>
              <li><Link href="/leistungen/zahnarzt" className="hover:text-white transition-colors">Zahnärzte</Link></li>
              <li><Link href="/leistungen/physiotherapie" className="hover:text-white transition-colors">Physiotherapie</Link></li>
              <li><Link href="/leistungen/friseur" className="hover:text-white transition-colors">Friseure</Link></li>
              <li><Link href="/leistungen/immobilienmakler" className="hover:text-white transition-colors">Immobilienmakler</Link></li>
              <li><Link href="/leistungen/coach" className="hover:text-white transition-colors">Coaches</Link></li>
              <li><Link href="/leistungen/fitnessstudio" className="hover:text-white transition-colors">Fitnessstudio</Link></li>
              <li><Link href="/leistungen/onlineshop" className="hover:text-white transition-colors">Online-Shop</Link></li>
              <li><Link href="/leistungen/in-14-tagen" className="hover:text-white transition-colors">In 14 Tagen</Link></li>
            </ul>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="border-t border-white/8 py-12 md:py-14 overflow-hidden">
          <div className="font-display italic font-normal text-[18vw] md:text-[14vw] lg:text-[12vw] leading-[0.85] text-white/[0.04] select-none whitespace-nowrap tracking-tighter">
            fylu · studio
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-7 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Fylu. Alle Rechte vorbehalten ·{' '}
            <span className="font-display italic text-stone-400">made in Saarlouis</span>
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-cyan-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-cyan-300 transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-cyan-300 transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
