'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StickyButton() {
  return (
    <>
      {/* Desktop: top right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="hidden md:block fixed top-6 right-6 z-50"
      >
        <Link href="/angebote">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-bold shadow-2xl transition-all overflow-hidden group"
          >
            <span className="relative z-10">Projekt starten</span>
            <motion.div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20" initial={false} />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-cyan-400 rounded-xl"
            />
          </motion.button>
        </Link>
      </motion.div>

      {/* Mobile: bottom full-width bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-stone-100 shadow-2xl"
      >
        <Link href="/angebote">
          <button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 rounded-xl font-bold text-base shadow-lg">
            Kostenlosen Entwurf sichern
          </button>
        </Link>
      </motion.div>
    </>
  );
}
