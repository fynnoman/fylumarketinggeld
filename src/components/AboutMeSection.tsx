'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutMeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                  src="/64BB3620-F0DF-4887-A72B-6F4E69750FD8.png"
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
