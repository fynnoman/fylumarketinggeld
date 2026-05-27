'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutMeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background blob */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-[3rem] blur-2xl opacity-20"></div>
              
              {/* Image container with modern shape */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/64bb3620-f0df-4887-a72b-6f4e69750fd8.webp"
                  alt="Fynn Schulz – Webdesigner und SEO-Experte aus dem Saarland"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - About Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6">
              <span className="text-sm font-bold text-cyan-500 uppercase tracking-wider">
                Über mich
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-stone-900 leading-tight">
              Hallo, ich bin Fynn
            </h2>

            <div className="space-y-4 text-lg text-stone-700 leading-relaxed">
              <p>
                Ich bin Fynn und <span className="text-cyan-500 font-semibold">meine Vision ist es, Unternehmen jeder Größe zu befähigen, ihr volles Potenzial zu erreichen.</span> Ich glaube, dass jede Marke eine einzigartige Geschichte zu erzählen hat, und es ist meine Mission, 
                ihnen dabei zu helfen, sie überzeugend zu erzählen.
              </p>
              
              <p>
                In der heutigen digitalen Landschaft ist es wichtiger denn je, sich abzuheben. 
                Deshalb bin ich bestrebt, <span className="text-cyan-500 font-semibold">nicht nur Websites</span> zu liefern, <span className="text-cyan-500 font-semibold">sondern komplette Markenerlebnisse, die beim Publikum Anklang finden und bedeutungsvolle Ergebnisse erzielen</span>.
              </p>
              
              <p>
                <span className="text-cyan-500 font-semibold">Gemeinsam können wir etwas Außergewöhnliches schaffen</span>, das nicht nur Ihre Geschäftsziele erfüllt,
                sondern Ihre kühnsten Erwartungen übertrifft.
              </p>
            </div>

            {/* Expandable longer story */}
            <div className="mt-8">
              <button
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-stone-800 uppercase tracking-wider transition-colors"
              >
                {expanded ? 'Weniger anzeigen' : 'Mehr über mich erfahren'}
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="text-xs md:text-sm text-stone-400 leading-relaxed space-y-3 mt-5 pr-2">
                      <p>
                        Die längere Geschichte: Angefangen habe ich vor über fünf Jahren — zunächst
                        rein aus Neugier, neben Schule und Studium, als reines Hobby. Websites
                        bauen, Code lernen, Performance optimieren, Marketing verstehen. Über die
                        Jahre haben sich daraus erste Kundenprojekte ergeben, dann größere
                        Aufträge, dann der Punkt, an dem es kein Hobby mehr war.
                      </p>
                      <p>
                        Anfang 2025 habe ich entschieden, daraus etwas Festes zu machen, und Fylu
                        als Marketing- und Webdesign-Studio aus dem Saarland offiziell gegründet.
                        Seitdem arbeite ich mit Unternehmen aus Handwerk, Gastronomie, Software
                        und Gebäudereinigung daran, ihre digitale Außenwirkung auf das Niveau zu
                        bringen, das sie eigentlich verdient hätten.
                      </p>
                      <p>
                        Mein Ansatz ist bewusst nicht klassisch-agenturmäßig: keine endlosen
                        Account-Manager-Schleifen, keine Standard-Templates, keine
                        12-Monats-Knebelverträge. Stattdessen direkte Kommunikation, klare
                        Deliverables und ein Anspruch, der näher an einer Boutique-Beratung als
                        an einer typischen Saarland-Agentur liegt.
                      </p>
                      <p>
                        Heute betreuen wir Kunden vom Saarländer Mittelständler bis zum
                        US-amerikanischen SaaS-Startup — und auf genau diesem Spagat zwischen
                        handwerklicher Substanz und Skalierbarkeit baut Fylu auf.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
