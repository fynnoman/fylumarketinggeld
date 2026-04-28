'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function AngebotePage() {
  const [formData, setFormData] = useState({
    firmName: '',
    contactName: '',
    email: '',
    phone: '',
    branche: '',
    groesse: '',
    projectType: '',
    budget: '',
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

      if (!res.ok) throw new Error('Fehler beim Senden');
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an kontakt@fylumarketing.de');
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
            Ihre Anfrage wurde erfolgreich übermittelt. Ich melde mich innerhalb von 24 Stunden bei Ihnen mit einem kostenlosen Entwurf.
          </p>
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kostenlosen Entwurf sichern
            </h1>
            <p className="text-xl md:text-2xl text-cyan-50">
              Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden einen maßgeschneiderten Website-Entwurf – völlig unverbindlich.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Form Section */}
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
                  Projektart
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                >
                  <option value="">Bitte wählen</option>
                  <option value="neue-website">Neue Website</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="landingpage">Landing Page</option>
                  <option value="onlineshop">Online-Shop</option>
                  <option value="seo">SEO-Optimierung</option>
                  <option value="wartung">Wartung & Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                >
                  <option value="">Bitte wählen</option>
                  <option value="unter-1000">Unter 1.000€</option>
                  <option value="1000-2500">1.000€ - 2.500€</option>
                  <option value="2500-5000">2.500€ - 5.000€</option>
                  <option value="ueber-5000">Über 5.000€</option>
                  <option value="flexibel">Flexibel</option>
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
              {isSubmitting ? 'Wird gesendet...' : 'Kostenlosen Entwurf anfordern'}
            </motion.button>
            
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
            <h3 className="font-semibold text-stone-900 mb-2">100% Kostenlos</h3>
            <p className="text-stone-600 text-sm">Keine versteckten Kosten</p>
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
    </div>
  );
}
