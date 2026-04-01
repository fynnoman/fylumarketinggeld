'use client';

import { motion } from 'framer-motion';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const packages = [
  {
    name: 'Basismodell',
    subtitle: 'Sichtbar werden',
    price: 990,
    description: 'Perfekt für kleine lokale Betriebe, die endlich online gefunden werden wollen. Mit Hingabe fertige ich Ihre neue Website an – professionell, schnell und ohne Schnickschnack.',
    features: [
      'Website (bis 3 Seiten)',
      'Rechtstexte integriert',
      'Mobiloptimiert',
      'Kontaktformular',
      'SEO-Basis (OnPage & Technik)',
      '1 Korrekturschleife',
      'Veröffentlichung',
      'Google Business Basis-Optimierung',
    ],
    ideal: [
      'Sie einen professionellen Online-Auftritt benötigen',
      'Sie lokal gefunden werden möchten',
      'Sie ein begrenztes Budget haben',
    ]
  },
  {
    name: 'Fortgeschritten',
    subtitle: 'Neukunden-Maschine',
    price: 1490,
    description: 'Ihre Website wird zur echten Kundenquelle. Verkaufspsychologisch durchdacht, strategisch aufgebaut – damit Besucher zu zahlenden Kunden werden.',
    features: [
      'Alles aus Basismodell',
      'Website bis 6 Seiten',
      'Verkaufsoptimierte Struktur',
      '2 Korrekturschleifen',
      'Performance-Optimierung',
      'Erweiterte Google Business Optimierung',
      '2 Monate Hosting inklusive',
    ],
    ideal: [
      'Sie aktiv Neukunden gewinnen möchten',
      'Sie verkaufspsychologisch optimierte Inhalte wollen',
      'Sie eine Website mit maximalem ROI suchen',
    ]
  },
  {
    name: 'Professionell',
    subtitle: 'Marktführer-Auftritt',
    price: 2490,
    description: 'Für Unternehmen, die nicht mitspielen, sondern dominieren wollen. Strategische Positionierung, Premium-Design und technische Perfektion.',
    features: [
      'Alles aus Fortgeschritten',
      '3 Korrekturschleifen',
      'Priorisierte Umsetzung',
      'Intensives Performance-Tuning',
      'Erweiterte Google Business Optimierung',
      'Conversion- & UX-Feinschliff',
      '4 Monate Hosting inklusive',
    ],
    ideal: [
      'Sie die Konkurrenz übertreffen wollen',
      'Sie maximale Performance erwarten',
      'Sie eine Premium-Marke aufbauen möchten',
    ]
  },
  {
    name: 'Individuelle Lösung',
    subtitle: 'Maßgeschneidert',
    price: 0,
    description: 'Komplett individuelle Lösung nach Ihren Wünschen. Lassen Sie uns gemeinsam Ihr perfektes Projekt gestalten.',
    features: [
      'Persönliche Beratung & Konzeption',
      'Maßgeschneidertes Design',
      'Flexible Seitenanzahl',
      'Spezielle Funktionen nach Wunsch',
      'E-Commerce Integration möglich',
      'Custom Animationen & Interaktionen',
      'Individuelle Support-Vereinbarung',
      'Unbegrenzte Korrekturschleifen',
    ],
    ideal: [
      'Sie spezielle Anforderungen haben',
      'Standard-Pakete nicht ausreichen',
      'Sie volle Flexibilität wünschen',
    ]
  },
];

function BuchenPageInner() {
  const searchParams = useSearchParams();
  const paketIndex = parseInt(searchParams.get('paket') || '0');
  const [step, setStep] = useState(1);
  
  const selectedPackage = packages[paketIndex] || packages[0];
  const mwst = selectedPackage.price * 0.19;
  const totalPrice = selectedPackage.price + mwst;
  const anzahlung = totalPrice * 0.5;
  const restbetrag = totalPrice * 0.5;

  const [formData, setFormData] = useState({
    firmName: '',
    contactName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zipCode: '',
    country: 'Deutschland',
    preferences: '',
    agbAccepted: false,
    datenschutzAccepted: false,
    widerrufsrechtAccepted: false,
    signatureName: '',
    signatureDate: new Date().toLocaleDateString('de-DE'),
    serviceOption: '', // 'premium' oder 'basic'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const canProceedStep2 = formData.firmName && formData.email;
  const canProceedStep3 = formData.agbAccepted && formData.datenschutzAccepted && formData.widerrufsrechtAccepted;
  const canProceedStep4 = formData.signatureName;
  const canProceedStep5 = formData.serviceOption; // Service muss gewählt sein

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  const handleStripeCheckout = async () => {
    if (!canProceedStep5) return;
    setIsCheckingOut(true);
    setCheckoutError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paketIndex,
          customerEmail: formData.email,
          customerName: formData.contactName || formData.firmName,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setCheckoutError(data.error || 'Fehler beim Erstellen des Checkouts.');
        setIsCheckingOut(false);
      }
    } catch {
      setCheckoutError('Verbindungsfehler. Bitte versuchen Sie es erneut.');
      setIsCheckingOut(false);
    }
  };

  // SCHRITT 1: Paket im Detail (ohne Preise)
  if (step === 1) {
    return (
      <div className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/#packages" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Zurück zur Paketauswahl
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">{selectedPackage.name}</h1>
            <p className="text-cyan-100 mt-2">Schritt 1 von 5 - Paketdetails</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-stone-50 rounded-2xl p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-2">{selectedPackage.name}</h2>
            <p className="text-xl text-cyan-600 font-semibold mb-4">{selectedPackage.subtitle}</p>
            <p className="text-stone-700 mb-8 text-lg leading-relaxed">{selectedPackage.description}</p>
            
            <h3 className="text-xl font-bold text-stone-900 mb-4">Das ist alles enthalten:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {selectedPackage.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-stone-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
              <h3 className="font-bold text-stone-900 mb-3 text-lg">🎯 Perfekt für Sie, wenn...</h3>
              <ul className="space-y-2 text-stone-700">
                {selectedPackage.ideal.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.button
            onClick={() => setStep(2)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Weiter zu Ihren Daten →
          </motion.button>
        </div>
      </div>
    );
  }

  // SCHRITT 2: Daten angeben + Präferenzen
  if (step === 2) {
    return (
      <div className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setStep(1)} className="text-white/80 hover:text-white mb-4 inline-block">
              ← Zurück
            </button>
            <h1 className="text-4xl md:text-5xl font-bold">Ihre Daten & Wünsche</h1>
            <p className="text-cyan-100 mt-2">Schritt 2 von 5</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <form className="space-y-8">
            {/* Rechnungsdaten */}
            <div className="bg-stone-50 rounded-2xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Rechnungsdaten</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Firmenname / Name *
                  </label>
                  <input
                    type="text"
                    name="firmName"
                    value={formData.firmName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                    placeholder="Ihre Firma oder Name"
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
                    placeholder="Ansprechpartner"
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
                    Telefon
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

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Straße & Hausnummer
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                  placeholder="Musterstraße 123"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    PLZ
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                    placeholder="12345"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Stadt
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                    placeholder="Musterstadt"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Land
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900"
                  />
                </div>
              </div>
            </div>

            {/* Präferenzen */}
            <div className="bg-stone-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Ihre Wünsche & Präferenzen</h2>
              <p className="text-stone-600 mb-6">
                Teilen Sie mir Ihre Design-Wünsche, Farbpräferenzen, Vorbilder oder andere wichtige Informationen mit.
              </p>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Präferenzen, Farben, Vorbilder, zusätzliche Informationen
                </label>
                <textarea
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                  rows={8}
                  className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900 resize-none"
                  placeholder="Beispiel:&#10;&#10;Farben: Blau und Weiß&#10;Stil: Modern, minimalistisch&#10;Vorbilder: www.beispiel-website.de&#10;Besonderheiten: Logo bereits vorhanden&#10;Zielgruppe: Junge Familien&#10;&#10;Je mehr Infos, desto besser!"
                />
              </div>
            </div>

            <motion.button
              type="button"
              onClick={() => canProceedStep2 && setStep(3)}
              disabled={!canProceedStep2}
              whileHover={{ scale: canProceedStep2 ? 1.02 : 1 }}
              whileTap={{ scale: canProceedStep2 ? 0.98 : 1 }}
              className={`w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all ${
                canProceedStep2
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-xl cursor-pointer'
                  : 'bg-stone-300 text-stone-500 cursor-not-allowed'
              }`}
            >
              Weiter zu Ablauf & Rechtlichem →
            </motion.button>
          </form>
        </div>
      </div>
    );
  }

  // SCHRITT 3: Ablauf der Rechnung + Rechtliches
  if (step === 3) {
    return (
      <div className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setStep(2)} className="text-white/80 hover:text-white mb-4 inline-block">
              ← Zurück
            </button>
            <h1 className="text-4xl md:text-5xl font-bold">Ablauf & Rechtliches</h1>
            <p className="text-cyan-100 mt-2">Schritt 3 von 5</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-8">
            {/* Preisübersicht */}
            <div className="bg-stone-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Preisübersicht</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between text-lg">
                  <span className="text-stone-700">Paket: {selectedPackage.name}</span>
                  <span className="font-semibold text-stone-900">{selectedPackage.price.toLocaleString('de-DE')}€</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-stone-700">MwSt. (19%):</span>
                  <span className="font-semibold text-stone-900">{mwst.toLocaleString('de-DE', {minimumFractionDigits: 2})}€</span>
                </div>
                <div className="flex justify-between text-2xl font-bold border-t border-stone-300 pt-4 mt-4">
                  <span className="text-stone-900">Gesamtpreis:</span>
                  <span className="text-cyan-600">{totalPrice.toLocaleString('de-DE', {minimumFractionDigits: 2})}€</span>
                </div>
              </div>
            </div>

            {/* Kaufvorgang */}
            <div className="bg-cyan-50 rounded-2xl p-8 border-2 border-cyan-200">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">So läuft Ihre Buchung ab</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Anzahlung</h3>
                    <p className="text-stone-700">
                      Sie zahlen zunächst <strong className="text-cyan-600">{anzahlung.toLocaleString('de-DE', {minimumFractionDigits: 2})}€</strong> (50% + MwSt.).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Umsetzung</h3>
                    <p className="text-stone-700">
                      Ich erstelle Ihre Website nach Ihren Wünschen und Präferenzen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Präsentation & Feedback</h3>
                    <p className="text-stone-700">
                      Ich stelle Ihnen das Ergebnis vor. Sie haben <strong>5 Tage Zeit</strong> für Änderungswünsche.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-1">Restzahlung & Veröffentlichung</h3>
                    <p className="text-stone-700">
                      Nach Freigabe zahlen Sie <strong className="text-cyan-600">{restbetrag.toLocaleString('de-DE', {minimumFractionDigits: 2})}€</strong> und Ihre Website geht live!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rechtliches */}
            <div className="bg-stone-50 rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Rechtliches</h2>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agbAccepted"
                  checked={formData.agbAccepted}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-2 border-stone-300 text-cyan-500 focus:ring-2 focus:ring-cyan-500 mt-0.5"
                />
                <span className="text-stone-700 group-hover:text-stone-900 transition-colors">
                  Ich akzeptiere die <Link href="/agb" target="_blank" className="text-cyan-600 hover:text-cyan-700 font-semibold underline">Allgemeinen Geschäftsbedingungen (AGB)</Link> *
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="datenschutzAccepted"
                  checked={formData.datenschutzAccepted}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-2 border-stone-300 text-cyan-500 focus:ring-2 focus:ring-cyan-500 mt-0.5"
                />
                <span className="text-stone-700 group-hover:text-stone-900 transition-colors">
                  Ich akzeptiere die <Link href="/datenschutz" target="_blank" className="text-cyan-600 hover:text-cyan-700 font-semibold underline">Datenschutzerklärung</Link> *
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="widerrufsrechtAccepted"
                  checked={formData.widerrufsrechtAccepted}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-2 border-stone-300 text-cyan-500 focus:ring-2 focus:ring-cyan-500 mt-0.5"
                />
                <span className="text-stone-700 group-hover:text-stone-900 transition-colors">
                  Ich verzichte auf mein <strong>Widerrufsrecht nach Beginn der Arbeiten</strong> und stimme zu, dass die Dienstleistung sofort nach Vertragsschluss beginnt *
                </span>
              </label>
            </div>

            <motion.button
              type="button"
              onClick={() => canProceedStep3 && setStep(4)}
              disabled={!canProceedStep3}
              whileHover={{ scale: canProceedStep3 ? 1.02 : 1 }}
              whileTap={{ scale: canProceedStep3 ? 0.98 : 1 }}
              className={`w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all ${
                canProceedStep3
                  ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-xl cursor-pointer'
                  : 'bg-stone-300 text-stone-500 cursor-not-allowed'
              }`}
            >
              Weiter zum Vertrag →
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // SCHRITT 4: Vertrag
  if (step === 4) {
    return (
      <div className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setStep(3)} className="text-white/80 hover:text-white mb-4 inline-block">
              ← Zurück
            </button>
            <h1 className="text-4xl md:text-5xl font-bold">Vertragsunterzeichnung</h1>
            <p className="text-cyan-100 mt-2">Schritt 4 von 5</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-stone-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Dienstleistungsvertrag</h2>
            
            <div className="bg-white rounded-lg p-6 mb-6 max-h-96 overflow-y-auto border-2 border-stone-200">
              <h3 className="font-bold text-lg mb-4">Vertrag zwischen Fylu und {formData.firmName || '[Kunde]'}</h3>
              
              <div className="space-y-4 text-stone-700 text-sm">
                <p><strong>§1 Vertragsgegenstand</strong></p>
                <p>Der Auftragnehmer (Fylu) verpflichtet sich zur Erstellung einer Website gemäß Paket "{selectedPackage.name}" mit folgenden Leistungen:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  {selectedPackage.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <p><strong>§2 Vergütung</strong></p>
                <p>Die Vergütung beträgt {totalPrice.toLocaleString('de-DE', {minimumFractionDigits: 2})}€ (brutto) und setzt sich wie folgt zusammen:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>Nettopreis: {selectedPackage.price.toLocaleString('de-DE')}€</li>
                  <li>MwSt. (19%): {mwst.toLocaleString('de-DE', {minimumFractionDigits: 2})}€</li>
                </ul>

                <p><strong>§3 Zahlungsmodalitäten</strong></p>
                <p>Die Zahlung erfolgt in zwei Raten:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>Anzahlung (50%): {anzahlung.toLocaleString('de-DE', {minimumFractionDigits: 2})}€ – fällig bei Vertragsschluss</li>
                  <li>Restzahlung (50%): {restbetrag.toLocaleString('de-DE', {minimumFractionDigits: 2})}€ – fällig nach Abnahme</li>
                </ul>

                <p><strong>§4 Projektablauf</strong></p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>Nach Eingang der Anzahlung beginnt die Umsetzung</li>
                  <li>Der Auftraggeber erhält eine Präsentation des fertigen Projekts</li>
                  <li>Der Auftraggeber hat 5 Werktage Zeit für Änderungswünsche</li>
                  <li>Nach Freigabe erfolgt die Restzahlung und Veröffentlichung</li>
                </ul>

                <p><strong>§5 Widerrufsrecht</strong></p>
                <p>Der Auftraggeber verzichtet ausdrücklich auf sein Widerrufsrecht, sobald mit der Ausführung der Dienstleistung begonnen wurde.</p>

                <p><strong>§6 Gewährleistung</strong></p>
                <p>Der Auftragnehmer garantiert eine professionelle Ausführung nach aktuellem Standard. Technische Fehler werden kostenlos behoben.</p>

                <p className="mt-6 text-xs text-stone-500">
                  Weitere Details regeln die vollständigen AGB unter: /agb
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Digitale Unterschrift (Vor- und Nachname) *
                </label>
                <input
                  type="text"
                  name="signatureName"
                  value={formData.signatureName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-cyan-500 focus:outline-none transition-colors text-stone-900 font-serif text-2xl italic"
                  placeholder="Max Mustermann"
                />
                <p className="text-xs text-stone-500 mt-2">Durch Eingabe Ihres Namens bestätigen Sie die Richtigkeit der Angaben und akzeptieren den Vertrag.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Datum
                </label>
                <input
                  type="text"
                  name="signatureDate"
                  value={formData.signatureDate}
                  readOnly
                  className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 bg-stone-100 text-stone-900"
                />
              </div>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={() => canProceedStep4 && setStep(5)}
            disabled={!canProceedStep4}
            whileHover={{ scale: canProceedStep4 ? 1.02 : 1 }}
            whileTap={{ scale: canProceedStep4 ? 0.98 : 1 }}
            className={`w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all ${
              canProceedStep4
                ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-xl cursor-pointer'
                : 'bg-stone-300 text-stone-500 cursor-not-allowed'
            }`}
          >
            Vertrag bestätigen →
          </motion.button>
        </div>
      </div>
    );
  }

  // SCHRITT 5: Bestellen
  if (step === 5) {
    return (
      <div className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={() => setStep(4)} className="text-white/80 hover:text-white mb-4 inline-block">
              ← Zurück
            </button>
            <h1 className="text-4xl md:text-5xl font-bold">Service-Paket wählen</h1>
            <p className="text-cyan-100 mt-2">Schritt 5 von 5 – Wählen Sie Ihr Service-Modell</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Service-Auswahl */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Welchen Service möchten Sie nach der Erstellung?</h2>
            <p className="text-stone-600 mb-6">
              Wählen Sie, wie Sie nach der Website-Erstellung weitermachen möchten:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Premium Service */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setFormData({...formData, serviceOption: 'premium'})}
                className={`relative bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 cursor-pointer border-4 transition-all ${
                  formData.serviceOption === 'premium' 
                    ? 'border-cyan-500 shadow-2xl' 
                    : 'border-transparent hover:border-cyan-200 shadow-lg'
                }`}
              >
                {formData.serviceOption === 'premium' && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                
                <div className="mb-4">
                  <span className="inline-block bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
                    EMPFOHLEN
                  </span>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">Premium Service</h3>
                  <p className="text-3xl font-bold text-cyan-600 mb-1">132€ / Jahr</p>
                  <p className="text-sm text-stone-500">zzgl. MwSt.</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Website-Wartung & Updates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Neue Ideen & saisonale Specials (z.B. Oster-/Weihnachts-Aktionen)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Domain-Kosten (wird abgerechnet)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700 font-semibold">Änderungen: nur 35€/Stunde</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Priorisierter Support</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-cyan-200">
                  <p className="text-xs text-stone-600">
                    <strong>Ideal für:</strong> Unternehmen, die langfristig wachsen und ihre Website kontinuierlich optimieren möchten.
                  </p>
                </div>
              </motion.div>

              {/* Basic Service */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setFormData({...formData, serviceOption: 'basic'})}
                className={`relative bg-stone-50 rounded-2xl p-8 cursor-pointer border-4 transition-all ${
                  formData.serviceOption === 'basic' 
                    ? 'border-stone-400 shadow-2xl' 
                    : 'border-transparent hover:border-stone-200 shadow-lg'
                }`}
              >
                {formData.serviceOption === 'basic' && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-stone-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">Basis Service</h3>
                  <p className="text-3xl font-bold text-stone-700 mb-1">0€ / Jahr</p>
                  <p className="text-sm text-stone-500">Keine laufenden Kosten</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Domain-Kosten (wird abgerechnet)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Änderungen: 60€/Stunde</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-stone-400 line-through">Wartung & Updates</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-stone-400 line-through">Saisonale Specials & neue Ideen</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-stone-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-stone-400 line-through">Priorisierter Support</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-2 border-stone-200">
                  <p className="text-xs text-stone-600">
                    <strong>Ideal für:</strong> Unternehmen, die ihre Website selbst verwalten möchten und nur bei Bedarf Unterstützung brauchen.
                  </p>
                </div>
              </motion.div>
            </div>

            {!formData.serviceOption && (
              <p className="text-center text-stone-500 text-sm mb-6">
                ⬆️ Bitte wählen Sie ein Service-Modell aus
              </p>
            )}
          </div>

          {/* Zusammenfassung */}
          <div className="bg-cyan-50 rounded-2xl p-8 mb-8 border-2 border-cyan-200">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Ihre Bestellung im Überblick</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-stone-700">Paket:</span>
                <span className="font-semibold text-stone-900">{selectedPackage.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-700">Kunde:</span>
                <span className="font-semibold text-stone-900">{formData.firmName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-700">E-Mail:</span>
                <span className="font-semibold text-stone-900">{formData.email}</span>
              </div>
              {formData.serviceOption && (
                <div className="flex justify-between">
                  <span className="text-stone-700">Service-Modell:</span>
                  <span className="font-semibold text-stone-900">
                    {formData.serviceOption === 'premium' ? 'Premium Service (132€/Jahr)' : 'Basis Service (0€/Jahr)'}
                  </span>
                </div>
              )}
              {formData.preferences && (
                <div className="border-t border-cyan-300 pt-3 mt-3">
                  <p className="text-stone-700 text-sm mb-2">Ihre Präferenzen:</p>
                  <p className="text-stone-600 text-sm italic">{formData.preferences.substring(0, 150)}{formData.preferences.length > 150 ? '...' : ''}</p>
                </div>
              )}
              <div className="border-t border-cyan-300 pt-3 mt-3 flex justify-between text-lg">
                <span className="text-stone-700">Einmalige Kosten:</span>
                <span className="font-bold text-cyan-600 text-2xl">{totalPrice.toLocaleString('de-DE', {minimumFractionDigits: 2})}€</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-600">Anzahlung (jetzt fällig):</span>
                <span className="font-semibold text-stone-900">{anzahlung.toLocaleString('de-DE', {minimumFractionDigits: 2})}€</span>
              </div>
              {formData.serviceOption === 'premium' && (
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-stone-600">Jährlicher Service:</span>
                  <span className="font-semibold text-cyan-600">+ 132€/Jahr (zzgl. MwSt.)</span>
                </div>
              )}
            </div>
          </div>

          {/* Wichtiger Hinweis */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-8 border-2 border-amber-300">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">📸 Wichtig: Materialien bereitstellen</h3>
                <p className="text-stone-700 mb-4">
                  Nach Ihrer Buchung benötige ich von Ihnen Logos, Bilder, Texte und andere Materialien für Ihre Website.
                </p>
                <div className="bg-white rounded-lg p-4 border-2 border-amber-200">
                  <p className="text-stone-800 mb-3 font-semibold">Bitte senden Sie mir diese innerhalb von <span className="text-amber-600">10 Werktagen</span> zu:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-stone-700">
                        <strong>Per E-Mail:</strong> <a href="mailto:fynn@taskeyapp.com" className="text-cyan-600 hover:text-cyan-700 underline">fynn@taskeyapp.com</a>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span className="text-stone-700">
                        <strong>Per WhatsApp:</strong> <a href="https://wa.me/4915168488999" target="_blank" className="text-green-600 hover:text-green-700 underline">+49 151 684 88999</a>
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 mt-3">
                    Logos, Bilder (hochauflösend), Texte, Farbwünsche, und alle anderen relevanten Materialien
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Finaler Buchungsbutton */}
          <motion.button
            type="button"
            disabled={!canProceedStep5 || isCheckingOut}
            onClick={handleStripeCheckout}
            whileHover={{ scale: canProceedStep5 && !isCheckingOut ? 1.02 : 1 }}
            whileTap={{ scale: canProceedStep5 && !isCheckingOut ? 0.98 : 1 }}
            className={`w-full py-5 rounded-lg font-bold text-xl shadow-xl transition-all ${
              canProceedStep5 && !isCheckingOut
                ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-2xl cursor-pointer'
                : 'bg-stone-300 text-stone-500 cursor-not-allowed'
            }`}
          >
            {isCheckingOut ? 'Weiterleitung zu Stripe...' : '🔒 Jetzt kostenpflichtig buchen'}
          </motion.button>

          {checkoutError && (
            <p className="text-center text-sm text-red-500 mt-3">{checkoutError}</p>
          )}

          <p className="text-center text-sm text-stone-500 mt-4">
            Nach Klick werden Sie zur sicheren Zahlungsabwicklung von Stripe weitergeleitet
          </p>
        </div>
      </div>
    );
  }

  return null;
}

export default function BuchenPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-stone-400">Laden…</div>}>
      <BuchenPageInner />
    </Suspense>
  );
}
