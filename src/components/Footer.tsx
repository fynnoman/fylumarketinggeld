'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { openConsentSettings } from '@/lib/consent';
import { WHATSAPP_URL } from '@/lib/contact';

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
              Termin buchen
              <span className="text-cyan-300">↗</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Per WhatsApp schreiben"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-4 rounded-full text-[15px] font-semibold transition-all duration-300 min-h-[52px] shadow-[0_20px_50px_-15px_rgba(37,211,102,0.55)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
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
              <li><Link href="/team" className="hover:text-white transition-colors">Team &amp; Studio</Link></li>
              <li><Link href="/methodik" className="hover:text-white transition-colors">Methodik</Link></li>
            </ul>
            <h3 className="text-[10px] font-semibold mt-8 mb-4 text-cyan-300 uppercase tracking-[0.2em]">
              Tools
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link href="/tools" className="hover:text-white transition-colors">Alle Tools</Link></li>
              <li><Link href="/tools/website-check" className="hover:text-white transition-colors">Website-Analyse</Link></li>
              <li><Link href="/tools/seo-check" className="hover:text-white transition-colors">SEO-Check</Link></li>
            </ul>
            <h3 className="text-[10px] font-semibold mt-8 mb-4 text-cyan-300 uppercase tracking-[0.2em]">
              Wissen
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link href="/probleme" className="hover:text-white transition-colors">Probleme &amp; Lösungen</Link></li>
              <li><Link href="/ratgeber" className="hover:text-white transition-colors">Ratgeber</Link></li>
              <li><Link href="/referenzen" className="hover:text-white transition-colors">Referenzen</Link></li>
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
              <li><Link href="/leistungen/anwalt" className="hover:text-white transition-colors">Anwälte</Link></li>
              <li><Link href="/leistungen/steuerberater" className="hover:text-white transition-colors">Steuerberater</Link></li>
              <li><Link href="/leistungen/arzt" className="hover:text-white transition-colors">Ärzte</Link></li>
              <li><Link href="/leistungen/zahnarzt" className="hover:text-white transition-colors">Zahnärzte</Link></li>
              <li><Link href="/leistungen/physiotherapie" className="hover:text-white transition-colors">Physiotherapie</Link></li>
              <li><Link href="/leistungen/immobilienmakler" className="hover:text-white transition-colors">Immobilienmakler</Link></li>
              <li><Link href="/leistungen/elektriker" className="hover:text-white transition-colors">Elektriker</Link></li>
              <li><Link href="/leistungen/dachdecker" className="hover:text-white transition-colors">Dachdecker</Link></li>
              <li><Link href="/leistungen/shk" className="hover:text-white transition-colors">SHK</Link></li>
              <li><Link href="/leistungen/schreiner" className="hover:text-white transition-colors">Schreiner</Link></li>
              <li><Link href="/leistungen/garten-landschaftsbau" className="hover:text-white transition-colors">GaLaBau</Link></li>
              <li><Link href="/leistungen/maler" className="hover:text-white transition-colors">Maler</Link></li>
              <li><Link href="/leistungen/heizungsbauer" className="hover:text-white transition-colors">Heizungsbauer</Link></li>
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
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/impressum" className="hover:text-cyan-300 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-cyan-300 transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-cyan-300 transition-colors">AGB</Link>
            <button
              onClick={openConsentSettings}
              className="hover:text-cyan-300 transition-colors"
              type="button"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
