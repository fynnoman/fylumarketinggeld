'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function AngeboteForm() {
  const [formData, setFormData] = useState({
    firmName: '',
    contactName: '',
    email: '',
    phone: '',
    branche: '',
    brancheDetail: '',
    groesse: '',
    projectType: '',
    preferences: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({} as { error?: string }));
        const msg =
          body?.error ??
          'Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de oder rufen Sie an unter +49 151 684 88999.';
        throw new Error(msg);
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      const msg =
        err instanceof Error
          ? err.message
          : 'Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de oder rufen Sie an unter +49 151 684 88999.';
      alert(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Vielen Dank!
          </h1>
          <p className="text-xl text-stone-600 mb-8">
            Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
          </p>
          <a
            href="tel:+4915168488999"
            className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full text-sm font-semibold mb-4 shadow-lg hover:bg-black transition-all min-h-[48px]"
          >
            Oder gleich anrufen: +49 151 684 88999
          </a>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Zurück zur Startseite
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-8"
      >
        {/* Firmen-/Personen-Informationen */}
        <div className="bg-stone-50 rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Ihre Informationen</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Firmenname / Eigenname *
              </label>
              <input
                type="text"
                name="firmName"
                value={formData.firmName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                placeholder="Ihre Firma oder Ihr Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Ansprechpartner
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                placeholder="Ihr Name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                E-Mail-Adresse *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                placeholder="ihre@email.de"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Telefonnummer
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                placeholder="+49 ..."
              />
            </div>
          </div>
        </div>

        {/* Projekt-Informationen */}
        <div className="bg-stone-50 rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">Ihr Projekt</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Branche *
              </label>
              <select
                name="branche"
                value={formData.branche}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
              >
                <option value="">Bitte wählen</option>
                <option value="handwerk">Handwerk</option>
                <option value="einzelhandel">Einzelhandel</option>
                <option value="dienstleistung">Dienstleistung</option>
                <option value="gastronomie">Gastronomie</option>
                <option value="gesundheit">Gesundheit & Wellness</option>
                <option value="it">IT & Technologie</option>
                <option value="beratung">Beratung</option>
                <option value="immobilien">Immobilien</option>
                <option value="bildung">Bildung</option>
                <option value="sonstige">Sonstige</option>
              </select>
              <input
                type="text"
                name="brancheDetail"
                value={formData.brancheDetail}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                placeholder="Genaue Branche (z. B. Dachdeckerei, IT-Consulting, Café)"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Unternehmensgröße
              </label>
              <select
                name="groesse"
                value={formData.groesse}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
              >
                <option value="">Bitte wählen</option>
                <option value="solo">Selbstständig / Solo</option>
                <option value="klein">1-10 Mitarbeiter</option>
                <option value="mittel">11-50 Mitarbeiter</option>
                <option value="gross">50+ Mitarbeiter</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Gewünschte Website-Art
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
              >
                <option value="">Bitte wählen</option>
                <option value="unternehmenswebsite">Klassische Unternehmenswebsite</option>
                <option value="landingpage">Landing Page (Einzelseite)</option>
                <option value="onlineshop">Online-Shop</option>
                <option value="portfolio">Portfolio / persönliche Seite</option>
                <option value="webapp">Komplexere Web-App</option>
                <option value="unklar">Noch unklar — Fylu soll vorschlagen</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Design-Präferenzen / Vorbilder
            </label>
            <input
              type="text"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
              placeholder="z.B. minimalistisch, modern, verspielt, oder Website-Beispiele"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">
              Zusätzliche Informationen
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900 resize-none"
              placeholder="Erzählen Sie mir mehr über Ihr Projekt, spezielle Anforderungen, Wünsche..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center gap-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`w-full md:w-auto px-12 py-4 rounded-lg font-bold text-lg shadow-xl transition-all ${
              isSubmitting
                ? 'bg-stone-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:shadow-2xl text-white'
            }`}
          >
            {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
          </motion.button>

          <a
            href="tel:+4915168488999"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-black transition-all shadow-lg min-h-[48px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
            </svg>
            Lieber direkt anrufen
          </a>

          <p className="text-sm text-stone-500 text-center max-w-md">
            Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zu. Keine Sorge – Ihre Daten werden vertraulich behandelt.
          </p>
        </div>
      </motion.form>

      {/* Trust Elements */}
      <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-stone-900 mb-2">24h Antwortzeit</h3>
          <p className="text-stone-600 text-sm">Schnelle Rückmeldung garantiert</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-stone-900 mb-2">Persönliche Antwort</h3>
          <p className="text-stone-600 text-sm">Direkt vom Studio-Lead</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-semibold text-stone-900 mb-2">Vertraulich</h3>
          <p className="text-stone-600 text-sm">Ihre Daten sind sicher</p>
        </motion.div>
      </div>
    </div>
  );
}
