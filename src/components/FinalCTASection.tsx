'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';

const packages = [
  {
    name: 'Basismodell',
    subtitle: 'Sichtbar werden',
    price: '990€',
    description: 'Perfekt für kleine lokale Betriebe, die endlich online gefunden werden wollen. Mit Hingabe fertige ich Ihre neue Website an – professionell, schnell und ohne Schnickschnack.',
    image: '/Untitled-24-removebg-preview.png',
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
    bonus: 'Zahlung: 50% Anzahlung / 50% nach Abnahme • Zusatzleistungen: 60€ netto/Stunde',
    highlight: false,
    badge: null,
  },
  {
    name: 'Fortgeschritten',
    subtitle: 'Neukunden-Maschine',
    price: '1.490€',
    description: 'Ihre Website wird zur echten Kundenquelle. Verkaufspsychologisch durchdacht, strategisch aufgebaut – damit Besucher zu zahlenden Kunden werden. Mein persönlicher Favorit für maximale Wirkung.',
    image: '/Untitled-25-removebg-preview.png',
    features: [
      'Alles aus Basismodell',
      'Website bis 6 Seiten',
      'Verkaufsoptimierte Struktur',
      '2 Korrekturschleifen',
      'Performance-Optimierung',
      'Erweiterte Google Business Optimierung',
      '2 Monate Hosting inklusive',
    ],
    bonus: 'Empfohlenes Paket für maximale Wirkung',
    highlight: true,
    badge: 'Meistgewählt',
  },
  {
    name: 'Professionell',
    subtitle: 'Marktführer-Auftritt',
    price: '2.490€',
    description: 'Für Unternehmen, die nicht mitspielen, sondern dominieren wollen. Strategische Positionierung, Premium-Design und technische Perfektion – Ihr Wettbewerb wird neidisch sein.',
    image: '/Untitled-26-removebg-preview.png',
    features: [
      'Alles aus Fortgeschritten',
      '3 Korrekturschleifen',
      'Priorisierte Umsetzung',
      'Intensives Performance-Tuning',
      'Erweiterte Google Business Optimierung',
      'Conversion- & UX-Feinschliff',
      '4 Monate Hosting inklusive',
    ],
    bonus: 'Maximale Performance für Marktführer',
    highlight: false,
    badge: null,
  },
  {
    name: 'Individuelle Lösung',
    subtitle: 'Maßgeschneidert',
    price: 'Auf Anfrage',
    description: 'Sie haben spezielle Anforderungen oder wünschen sich eine komplett individuelle Lösung? Lassen Sie uns gemeinsam Ihr perfektes Projekt gestalten.',
    image: '/Untitled-27-removebg-preview.png',
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
    bonus: 'Komplett auf Ihre Bedürfnisse zugeschnitten',
    highlight: false,
    badge: 'Sonderwunsch',
  },
];

const bookButtonStyles = [
  'bg-gradient-to-r from-cyan-500 to-cyan-600 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]',
  'bg-gradient-to-r from-orange-500 to-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.7)]',
  'bg-gradient-to-r from-purple-600 to-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]',
  'bg-gradient-to-r from-green-500 to-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.7)]',
];

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePackage, setActivePackage] = useState(0);

  const currentPackage = packages[activePackage];

  return (
    <section id="packages" ref={ref} className="relative h-screen flex flex-col lg:flex-row items-stretch overflow-hidden">
      {/* Left Side - Dynamic Text based on selected package */}
      <div className="w-full lg:w-1/2 bg-stone-100 p-8 lg:p-12 flex flex-col justify-center relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-stone-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-300 rounded-full blur-3xl opacity-40"></div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-sm font-bold text-stone-600 uppercase tracking-wider">
              Paket
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePackage}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-6">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-stone-900 leading-tight">
                  {currentPackage.name}
                </h2>
                <p className="text-2xl text-cyan-500 font-semibold">
                  {currentPackage.subtitle}
                </p>
              </div>

              <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                {currentPackage.description}
              </p>

              <div className="text-6xl md:text-7xl font-bold text-stone-900 mb-3">
                {currentPackage.price}
              </div>
              
              <p className="text-sm text-stone-500 mb-8">
                zzgl. Mehrwertsteuer 19%
              </p>

              <Link href={`/buchen?paket=${activePackage}`}>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all overflow-hidden w-full lg:w-auto ${bookButtonStyles[activePackage]}`}
                >
                  <span className="relative z-10">Jetzt buchen →</span>
                </motion.button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side - Simple PNG Display */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center items-center overflow-y-auto relative">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        >
          <source src="/glyph_waves_remix.mp4" type="video/mp4" />
        </video>

        {/* Content over video */}
        <div className="relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <h3 className="text-2xl font-bold text-stone-900 mb-2">Wählen Sie Ihr Paket</h3>
          <p className="text-sm text-stone-600">Klicken Sie auf die Pfeile</p>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4 w-full max-w-xl mb-6">
          <button
            onClick={() => setActivePackage((prev) => (prev > 0 ? prev - 1 : packages.length - 1))}
            className="w-10 h-10 rounded-full bg-stone-200 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex-1 text-center">
            <p className="text-sm text-stone-500">
              {activePackage + 1} / {packages.length}
            </p>
          </div>

          <button
            onClick={() => setActivePackage((prev) => (prev < packages.length - 1 ? prev + 1 : 0))}
            className="w-10 h-10 rounded-full bg-stone-200 hover:bg-cyan-500 hover:text-white flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* PNG Image Display */}
        <div className="relative w-full max-w-xl h-[280px] flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePackage}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
              className="w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <img 
                src={currentPackage.image}
                alt={currentPackage.name}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Package Features List */}
        <motion.div 
          className="w-full max-w-xl bg-stone-50 rounded-xl p-4 shadow-lg mb-6"
          key={activePackage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-2">
            {currentPackage.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.02 }}
                className="flex items-start gap-1.5"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-2 h-2" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[11px] text-stone-700 font-medium leading-tight">{feature}</span>
              </motion.div>
            ))}
          </div>
          {currentPackage.bonus && (
            <div className="mt-2.5 pt-2.5 border-t border-stone-200">
              <p className="text-[10px] text-stone-500 italic">{currentPackage.bonus}</p>
            </div>
          )}
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2">
          {packages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePackage(index)}
              className={`h-2 rounded-full transition-all ${
                activePackage === index
                  ? 'bg-cyan-500 w-8'
                  : 'bg-stone-300 hover:bg-stone-400 w-2'
              }`}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
