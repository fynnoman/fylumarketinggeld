import type { Metadata } from "next";
import { Fraunces, Geist, Caveat } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import HiddenTaskeyLink from "@/components/HiddenTaskeyLink";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const GTAG_ID = "AW-18076906192";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Webdesign & SEO im Saarland | Fylu Studio Saarlouis",
  description: "Webdesign, SEO und Google Ads aus Saarlouis. Wir bauen Ihre Website und sorgen dafür, dass Google Sie findet. Fixpreis, persönlich betreut, in 14 Tagen live.",
  authors: [{ name: "Fynn Schulz", url: "https://www.fylumarketing.de" }],
  creator: "Fylu Studio Saarlouis",
  publisher: "Fylu",
  metadataBase: new URL("https://www.fylumarketing.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webdesign & SEO im Saarland | Fylu Studio Saarlouis",
    description: "Webdesign, SEO und Google Ads aus Saarlouis. Website in 14 Tagen live, mit klarer Preisstruktur und persönlicher Betreuung.",
    url: "https://www.fylumarketing.de",
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Fylu Studio, Webdesign und SEO aus Saarlouis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign & SEO im Saarland | Fylu Studio Saarlouis",
    description: "Webdesign, SEO und Google Ads aus Saarlouis. Website in 14 Tagen live, Fixpreis, persönlich betreut.",
    images: ["/hero-background.webp"],
  },
  keywords: [
    "Webdesign Saarland",
    "Webdesigner Saarlouis",
    "SEO Saarland",
    "Google Ads Saarland",
    "Website erstellen lassen Saarland",
    "Webdesign Saarbrücken",
    "Webdesign Merzig",
    "Webdesign Dillingen",
    "Webdesign Handwerk",
    "Fylu Studio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "Ear6kvwbpWM5FoLN6Qfwk5GWOlsTSkpyscKuDedLIcU",
  },
  category: "Editorial Webdesign Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ProfessionalService", "LocalBusiness", "WebDesignCompany"],
              "@id": "https://www.fylumarketing.de/#organization",
              name: "Fylu Studio – Editorial Webdesign Saarland",
              alternateName: "Fylu Marketing",
              legalName: "Fylu – Fynn Schulz",
              description:
                "Fylu ist ein Boutique-Webdesign-Studio aus Saarlouis. Editorial gestaltete Websites, kuratierte SEO- und Google-Ads-Erweiterungen sowie Software- und App-Entwicklung. Bewusst begrenzt auf zwölf Klienten pro Jahr — geführt aus dem Saarland für Häuser in Saarbrücken, Saarlouis, Neunkirchen, Homburg, Merzig, Völklingen, St. Ingbert, Dillingen und im gesamten Saarland sowie deutschlandweit.",
              url: "https://www.fylumarketing.de",
              logo: {
                "@type": "ImageObject",
                url: "https://www.fylumarketing.de/logo-fylu.webp",
                width: 512,
                height: 512,
              },
              image: "https://www.fylumarketing.de/hero-background.webp",
              telephone: "+4915168488999",
              email: "kontakt@fylumarketing.de",
              foundingDate: "2024",
              founder: {
                "@type": "Person",
                "@id": "https://www.fylumarketing.de/#fynn-schulz",
                name: "Fynn Schulz",
                jobTitle: "Studio-Lead & Editorial Webdesigner",
                worksFor: { "@id": "https://www.fylumarketing.de/#organization" },
                knowsAbout: [
                  "Editorial Webdesign",
                  "Suchmaschinenoptimierung",
                  "Google Ads",
                  "Conversion-Architektur",
                  "Local SEO",
                ],
                url: "https://www.fylumarketing.de",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Saarlouis",
                addressLocality: "Saarlouis",
                postalCode: "66740",
                addressRegion: "Saarland",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.3133,
                longitude: 6.7525,
              },
              hasMap: "https://www.google.com/maps/place/Saarlouis",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              serviceType: [
                "Webdesign",
                "Suchmaschinenoptimierung (SEO)",
                "Google Ads",
                "Website Erstellung",
                "Google Business Optimierung",
                "Local SEO",
                "Conversion-Optimierung",
                "Webhosting",
                "Softwareentwicklung",
                "Software-Entwicklung",
                "Webentwicklung",
                "Programmierung",
                "Custom Software",
                "ERP-Entwicklung",
                "CRM-Entwicklung",
                "SaaS-Entwicklung",
                "API-Integration",
                "Automatisierung",
                "App-Entwicklung",
                "Web-App-Entwicklung",
                "AI-Integration",
                "IT-Dienstleistung",
              ],
              currenciesAccepted: "EUR",
              paymentAccepted: ["Überweisung", "PayPal", "Kreditkarte"],
              areaServed: [
                { "@type": "State", name: "Saarland" },
                { "@type": "City", name: "Saarbrücken" },
                { "@type": "City", name: "Saarlouis" },
                { "@type": "City", name: "Neunkirchen" },
                { "@type": "City", name: "Homburg" },
                { "@type": "City", name: "Völklingen" },
                { "@type": "City", name: "Merzig" },
                { "@type": "City", name: "St. Ingbert" },
                { "@type": "City", name: "Dillingen" },
                { "@type": "City", name: "St. Wendel" },
                { "@type": "City", name: "Lebach" },
                { "@type": "City", name: "Püttlingen" },
                { "@type": "City", name: "Blieskastel" },
                { "@type": "Country", name: "Deutschland" },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 49.3133,
                  longitude: 6.7525,
                },
                geoRadius: "60000",
              },
              knowsAbout: [
                "Webdesign Saarland",
                "Webdesign Saarbrücken",
                "Webdesign Saarlouis",
                "SEO Optimierung",
                "Local SEO",
                "Google Ads",
                "Google Business Profile",
                "Website erstellen lassen",
                "Conversion-Optimierung",
                "Core Web Vitals",
                "Mobile First Design",
                "Softwareentwicklung Saarland",
                "Software Saarland",
                "Programmierer Saarland",
                "Webentwickler Saarland",
                "Software-Entwickler Saarland",
                "Full-Stack Entwicklung",
                "React Entwicklung",
                "Next.js Entwicklung",
                "TypeScript",
                "Node.js Entwicklung",
                "Python Entwicklung",
                "PostgreSQL",
                "ERP Saarland",
                "CRM Saarland",
                "SaaS-Entwicklung",
                "Web-App entwickeln",
                "App entwickeln lassen",
                "API-Integration",
                "Automatisierung",
                "AI-Integration",
                "OpenAI API",
                "Anthropic API",
                "Custom Software Saarland",
                "IT-Dienstleister Saarland",
              ],
              sameAs: [
                "https://www.instagram.com/fylumarketing/",
                "https://www.linkedin.com/in/fynn-schulz/",
                "https://g.page/fylumarketing",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Fylu Studio · Pakete und Einzelleistungen",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Signature — Editorial Website",
                    description:
                      "Bis zu fünf editorial gestaltete Seiten, mobile-first Typografie, technische SEO-Basis, 60 Tage Studio-Begleitung. Der stille Auftritt.",
                    price: "3490",
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "3490",
                      priceCurrency: "EUR",
                      valueAddedTaxIncluded: false,
                    },
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/buchen",
                    itemOffered: {
                      "@type": "Service",
                      name: "Signature Website",
                      serviceType: "Editorial Webdesign",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Atelier — Verkaufsarchitektur",
                    description:
                      "Bis zu zehn Seiten mit individueller Verkaufsarchitektur, lokales SEO-Framework, Google-Business-Präsenz, 90 Tage Studio-Begleitung. Handschrift statt Vorlage.",
                    price: "6490",
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "6490",
                      priceCurrency: "EUR",
                      valueAddedTaxIncluded: false,
                    },
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/buchen",
                    itemOffered: {
                      "@type": "Service",
                      name: "Atelier Website",
                      serviceType: "Editorial Webdesign",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Maison — Werk",
                    description:
                      "Umfassende maßgefertigte Website mit individuellen Interaktionen, Redaktions- und Content-System, SEO-Foundation für Skalierung, sechs Monate Studio-Begleitung. Kein Auftritt — ein Werk.",
                    price: "9190",
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      price: "9190",
                      priceCurrency: "EUR",
                      valueAddedTaxIncluded: false,
                    },
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/buchen",
                    itemOffered: {
                      "@type": "Service",
                      name: "Maison Website",
                      serviceType: "Editorial Webdesign",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Google Business Optimierung",
                    description:
                      "Vollständige Einrichtung des Google-Unternehmensprofils. Kategorien, Keywords, Bildsprache — sauber und komplett.",
                    price: "290",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/seo-saarland",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Business Profil Setup",
                      serviceType: "Local SEO",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "SEO Foundation",
                    description:
                      "Keyword-Analyse, technisches SEO-Audit, OnPage-Optimierung, Schema-Struktur. Das Fundament für organische Reichweite.",
                    price: "890",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/seo-saarland",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO Foundation",
                      serviceType: "SEO",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "SEO Betreuung",
                    description:
                      "Fortlaufende Optimierung, monatliches Reporting, Content-Feinschliff — damit Sichtbarkeit nicht wieder abbricht.",
                    price: "490",
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "490",
                      priceCurrency: "EUR",
                      referenceQuantity: {
                        "@type": "QuantitativeValue",
                        value: "1",
                        unitCode: "MON",
                      },
                    },
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/seo-saarland",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO Betreuung",
                      serviceType: "SEO",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Google Ads Setup",
                    description:
                      "Konto- und Kampagnenaufbau, Keyword-Recherche, Conversion-Tracking. Bereit zum Start binnen weniger Tage.",
                    price: "690",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/google-ads-saarland",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Ads Setup",
                      serviceType: "SEA",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Google Ads Betreuung",
                    description:
                      "Wöchentliche Optimierung, A/B-Tests, klares Monatsreporting. Werbebudget zusätzlich, unabhängig gesteuert.",
                    price: "390",
                    priceCurrency: "EUR",
                    priceSpecification: {
                      "@type": "UnitPriceSpecification",
                      price: "390",
                      priceCurrency: "EUR",
                      referenceQuantity: {
                        "@type": "QuantitativeValue",
                        value: "1",
                        unitCode: "MON",
                      },
                    },
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/google-ads-saarland",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Ads Betreuung",
                      serviceType: "SEA",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Website Refresh",
                    description:
                      "Design- und Text-Refresh Ihrer bestehenden Website — für Häuser, die noch keinen kompletten Neubau brauchen.",
                    price: "890",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/webdesign-saarland",
                    itemOffered: {
                      "@type": "Service",
                      name: "Website Refresh",
                      serviceType: "Editorial Webdesign",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "Software & Web-App",
                    description:
                      "Maßgeschneiderte Web-Apps, interne Systeme, ERP- und CRM-Vorhaben. Rahmen und Preis nach persönlicher Discovery-Phase.",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/software-saarland",
                    itemOffered: {
                      "@type": "Service",
                      name: "Softwareentwicklung",
                      serviceType: "Software Development",
                    },
                  },
                  {
                    "@type": "Offer",
                    name: "App-Entwicklung",
                    description:
                      "Web-Apps, PWAs und native iOS/Android-Apps mit React Native. Preis nach persönlicher Discovery-Phase.",
                    availability: "https://schema.org/InStock",
                    url: "https://www.fylumarketing.de/app-entwickeln-lassen",
                    itemOffered: {
                      "@type": "Service",
                      name: "App-Entwicklung",
                      serviceType: "Mobile Application Development",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                worstRating: "1",
                reviewCount: "20",
              },
              slogan: "Editorial Webdesign aus dem Saarland — mit einer Handschrift, die bleibt.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.fylumarketing.de/#website",
              url: "https://www.fylumarketing.de",
              name: "Fylu Studio · Editorial Webdesign Saarland",
              description:
                "Editorial gestaltete Websites, kuratierte SEO- und Ads-Erweiterungen aus einem Boutique-Studio in Saarlouis. Zwölf Klienten pro Jahr.",
              publisher: { "@id": "https://www.fylumarketing.de/#organization" },
              inLanguage: "de-DE",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.fylumarketing.de/?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Fylu Studio · Editorial Webdesign Saarland",
              url: "https://www.fylumarketing.de",
              inLanguage: "de-DE",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.fylumarketing.de/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fylu Studio",
              alternateName: "Fylu Marketing",
              url: "https://www.fylumarketing.de",
              logo: "https://www.fylumarketing.de/logo-fylu.webp",
              founder: {
                "@type": "Person",
                name: "Fynn Schulz",
                jobTitle: "Studio-Lead",
                worksFor: { "@type": "Organization", name: "Fylu Studio" },
              },
              foundingLocation: { "@type": "Place", name: "Saarlouis, Saarland, Deutschland" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+4915168488999",
                contactType: "customer service",
                email: "kontakt@fylumarketing.de",
                areaServed: ["DE"],
                availableLanguage: ["de", "en"],
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Was kostet eine Fylu-Website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Der Ausgangspreis für das Signature-Paket liegt bei 3.490 €. Atelier beginnt bei 6.490 €, Maison bei 9.190 €. Diese Preise sind Ausgangspunkte — der endgültige Rahmen entsteht im Vorgespräch. Alle Preise verstehen sich zzgl. USt.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Warum nimmt Fylu nur zwölf Klienten pro Jahr an?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Weniger Projekte pro Jahr bedeuten tiefere Verantwortung pro Projekt. Ein Fylu-Auftritt entsteht in Handschrift, nicht am Fließband. Der bewusst kleine Kalender schützt Qualität, Aufmerksamkeit und Erreichbarkeit.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was unterscheidet Fylu von anderen Studios im Saarland?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fylu ist bewusst als Boutique-Studio positioniert. Direkte Führung durch den Studio-Lead, editorial gestaltete Websites statt Template-Baukasten und ein bewusst kleiner Kalender — für Häuser, denen ihr Auftritt eine Substanz verdient, die man beim Öffnen der Seite spürt.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Gibt es auch kleinere Pakete für SEO oder Google Ads?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja. Google Business Optimierung ab 290 €, SEO Foundation ab 890 €, SEO Betreuung ab 490 € pro Monat, Google Ads Setup ab 690 €, Google Ads Betreuung ab 390 € pro Monat, Website Refresh ab 890 €. Diese Pakete sind als Erweiterungen der Website gedacht oder einzeln buchbar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie lange dauert ein Projekt bei Fylu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Signature-Projekte gehen in etwa zwei bis vier Wochen live. Atelier und Maison sind in vier bis sechs Wochen live. Nach Live-Gang folgen neunzig Tage Studio-Begleitung mit Iteration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Für welche Städte im Saarland arbeitet Fylu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fylu ist in Saarlouis ansässig und begleitet Häuser in Saarbrücken, Saarlouis, Neunkirchen, Homburg, Völklingen, Merzig, St. Ingbert, Dillingen, St. Wendel, Lebach, Püttlingen, Blieskastel und im gesamten Saarland. Remote-Projekte deutschlandweit sowie international ebenfalls möglich.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Was passiert nach dem Launch?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Neunzig Tage Studio-Begleitung sind bei Signature, Atelier und Maison Teil des Pakets. Danach entscheiden Sie: Übernahme der Pflege, monatliche Studio-Betreuung oder iterative Erweiterung. Wir binden niemanden in Jahresverträge.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${geist.variable} ${caveat.variable} antialiased`}>
        {children}
        <Analytics />
        <HiddenTaskeyLink />
        <WhatsAppButton />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
