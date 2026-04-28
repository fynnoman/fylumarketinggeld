"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function WebdesignerDillingenPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <main>
      <Navbar />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.fylumarketing.de" },
              { "@type": "ListItem", position: 2, name: "Webdesigner Dillingen", item: "https://www.fylumarketing.de/webdesigner-dillingen" },
            ],
          }),
        }}
      />
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Fylu – Webdesigner Dillingen",
            description: "Webdesigner für Dillingen. Individuelle Websites, SEO und Google Ads für lokale Unternehmen.",
            url: "https://www.fylumarketing.de/webdesigner-dillingen",
            telephone: "+4915168488999",
            email: "kontakt@fylumarketing.de",
            address: { "@type": "PostalAddress", addressLocality: "Dillingen", addressRegion: "Saarland", addressCountry: "DE" },
            geo: { "@type": "GeoCoordinates", latitude: 49.3553, longitude: 6.7297 },
            priceRange: "€€",
            areaServed: [ { "@type": "City", name: "Dillingen" }, { "@type": "State", name: "Saarland" }, { "@type": "Country", name: "Deutschland" } ],
          }),
        }}
      />
      <section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-6"
          >
            Webdesigner Dillingen – Ihre Website, Ihr Vorteil
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: smoothEase }}
            className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8 max-w-3xl"
          >
            Sie suchen einen Webdesigner in Dillingen? Ich biete Ihnen persönliche Betreuung direkt für Dillingen und Umgebung. Ihre Website wird individuell gestaltet, für Google optimiert und bringt Ihnen echte Anfragen. Keine Massenware, sondern maßgeschneiderte Lösungen für Handwerk, Dienstleistung, Gastronomie und mehr. Jetzt kostenlosen Entwurf sichern!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: smoothEase }}
          >
            <Link
              href="/angebote"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)] active:scale-[0.98] inline-block"
            >
              Kostenlosen Entwurf sichern
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
