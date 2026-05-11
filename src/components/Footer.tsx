'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background-dark opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Image
                src="/logo-fylu.webp"
                alt="Fylu Webdesign Saarland – Logo"
                width={192}
                height={64}
                className="h-16 w-auto mb-4"
              />
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              Webdesign Agentur aus Saarlouis im Saarland. Professionelle Websites, SEO-Optimierung und Google Ads für Unternehmen in Saarbrücken, Merzig, Dillingen und ganz Deutschland.
            </p>
            <Link href="/angebote">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors"
              >
                Kostenloses Angebot
              </motion.span>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/webdesign-saarland" className="hover:text-cyan-400 transition-colors">Webdesign Saarland</Link></li>
              <li><Link href="/seo-saarland" className="hover:text-cyan-400 transition-colors">SEO Saarland</Link></li>
              <li><Link href="/google-ads-saarland" className="hover:text-cyan-400 transition-colors">Google Ads Saarland</Link></li>
              <li><Link href="/website-erstellen-lassen" className="hover:text-cyan-400 transition-colors">Website erstellen lassen</Link></li>
              <li><Link href="/webdesign-handwerk" className="hover:text-cyan-400 transition-colors">Webdesign Handwerk</Link></li>
              <li><Link href="/angebote" className="hover:text-cyan-400 transition-colors">Alle Angebote</Link></li>
            </ul>
          </div>

          {/* Standorte */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Standorte im Saarland</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/webdesign/saarbruecken" className="hover:text-cyan-400 transition-colors">Webdesign Saarbrücken</Link></li>
              <li><Link href="/webdesign/saarlouis" className="hover:text-cyan-400 transition-colors">Webdesign Saarlouis</Link></li>
              <li><Link href="/webdesign/voelklingen" className="hover:text-cyan-400 transition-colors">Webdesign Völklingen</Link></li>
              <li><Link href="/webdesign/neunkirchen" className="hover:text-cyan-400 transition-colors">Webdesign Neunkirchen</Link></li>
              <li><Link href="/webdesign/homburg" className="hover:text-cyan-400 transition-colors">Webdesign Homburg</Link></li>
              <li><Link href="/webdesign/merzig" className="hover:text-cyan-400 transition-colors">Webdesign Merzig</Link></li>
              <li><Link href="/webdesign/st-ingbert" className="hover:text-cyan-400 transition-colors">Webdesign St. Ingbert</Link></li>
              <li><Link href="/webdesign/dillingen" className="hover:text-cyan-400 transition-colors">Webdesign Dillingen</Link></li>
            </ul>
          </div>

          {/* Branchen */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Branchen</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/leistungen/handwerker" className="hover:text-cyan-400 transition-colors">Webdesign für Handwerker</Link></li>
              <li><Link href="/leistungen/restaurant" className="hover:text-cyan-400 transition-colors">Webdesign für Restaurants</Link></li>
              <li><Link href="/leistungen/steuerberater" className="hover:text-cyan-400 transition-colors">Webdesign für Steuerberater</Link></li>
              <li><Link href="/leistungen/festpreis" className="hover:text-cyan-400 transition-colors">Website zum Festpreis</Link></li>
              <li><Link href="/leistungen/in-14-tagen" className="hover:text-cyan-400 transition-colors">Website in 14 Tagen</Link></li>
              <li><Link href="/leistungen/guenstig" className="hover:text-cyan-400 transition-colors">Webdesigner günstig</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:kontakt@fylumarketing.de" className="hover:text-cyan-400 transition-colors">
                  kontakt@fylumarketing.de
                </a>
              </li>
              <li>
                <a href="tel:+4915168488999" className="hover:text-cyan-400 transition-colors">
                  +49 151 684 88999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Fylu. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-cyan-400 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-cyan-400 transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-cyan-400 transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
