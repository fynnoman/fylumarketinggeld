'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BookingSuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl text-center"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
          Zahlung erfolgreich
        </h1>

        <p className="text-xl text-stone-600 mb-4">
          Vielen Dank für Ihre Buchung.
        </p>

        <p className="text-base text-stone-500 mb-10 max-w-lg mx-auto">
          Ich melde mich innerhalb von <strong>24 Stunden</strong> bei Ihnen per E-Mail, um die nächsten Schritte zu besprechen.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Zurück zur Startseite
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
