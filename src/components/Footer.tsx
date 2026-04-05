'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background-dark opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img 
                src="/69A2D4F6-C40F-447B-B10C-5C8633E4CD0D.png" 
                alt="Fylu Webdesign Saarland – Logo" 
                className="h-16 w-auto mb-4"
                width={192}
                height={64}
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

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:fynnschulzonline@gmail.com" className="hover:text-cyan-400 transition-colors">
                  fynnschulzonline@gmail.com
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
