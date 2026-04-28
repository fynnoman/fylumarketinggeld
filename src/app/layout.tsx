import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webdesign Saarland | Professionelle Websites & SEO | Fylu",
  description: "Webdesign Agentur aus dem Saarland. Professionelle Websites, SEO & Google Ads für Unternehmen in Saarbrücken, Saarlouis & ganz Deutschland. Jetzt kostenlosen Entwurf sichern.",
  keywords: "Webdesign Saarland, Webdesign Saarbrücken, Webdesign Saarlouis, Website erstellen lassen, SEO Saarland, Google Optimierung, Homepage erstellen, Webdesigner Saarland, Webdesign Agentur, lokales SEO, Google Ads Saarland, Website Redesign, professionelle Website",
  authors: [{ name: "Fynn Schulz", url: "https://www.fylumarketing.de" }],
  creator: "Fylu – Fynn Schulz",
  publisher: "Fylu",
  metadataBase: new URL("https://www.fylumarketing.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webdesign Saarland | Websites & SEO die Kunden bringen | Fylu",
    description: "Professionelles Webdesign & SEO aus dem Saarland. Für Unternehmen in Saarbrücken, Saarlouis & ganz Deutschland. Mehr Sichtbarkeit, mehr Anfragen, mehr Umsatz.",
    url: "https://www.fylumarketing.de",
    siteName: "Fylu Webdesign",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/heroba.png",
        width: 1200,
        height: 630,
        alt: "Fylu Webdesign Agentur – Professionelle Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign Saarland | Fylu",
    description: "Webdesign & SEO aus dem Saarland. Mehr Kunden durch Ihre Website.",
    images: ["/heroba.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="google-site-verification" content="Ear6kvwbpWM5FoLN6Qfwk5GWOlsTSkpyscKuDedLIcU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Fylu – Webdesign & SEO",
              description: "Webdesign Agentur aus dem Saarland. Professionelle Websites, SEO-Optimierung und Google Ads für Unternehmen in Saarbrücken, Saarlouis und ganz Deutschland.",
              url: "https://www.fylumarketing.de",
              logo: "https://www.fylumarketing.de/69A2D4F6-C40F-447B-B10C-5C8633E4CD0D.png",
              telephone: "+4915168488999",
              email: "kontakt@fylumarketing.de",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Saarlouis",
                addressRegion: "Saarland",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.3133,
                longitude: 6.7525,
              },
              serviceType: [
                "Webdesign",
                "SEO Optimierung",
                "Google Ads",
                "Website Erstellung",
                "Google Business Optimierung",
              ],
              priceRange: "€€",
              areaServed: [
                { "@type": "State", name: "Saarland" },
                { "@type": "Country", name: "Deutschland" },
              ],
              knowsAbout: [
                "Webdesign Saarland",
                "Webdesign Saarbrücken",
                "Webdesign Saarlouis",
                "SEO Optimierung",
                "Google Ads",
                "Website erstellen lassen",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Startseite",
                  item: "https://www.fylumarketing.de",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Angebote",
                  item: "https://www.fylumarketing.de/angebote",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Buchen",
                  item: "https://www.fylumarketing.de/buchen",
                },
              ],
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
                  name: "Was kostet eine professionelle Website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Eine professionelle Website bei Fylu beginnt ab 990€ für das Basismodell mit bis zu 3 Seiten, mobiloptimiert und SEO-Basis. Individuelle Lösungen sind auf Anfrage möglich.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie lange dauert die Erstellung einer Website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "In der Regel ist Ihre Website innerhalb von 2-4 Wochen fertig. Je nach Umfang und Paket kann es schneller oder etwas länger dauern.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Bietet Fylu auch SEO-Optimierung an?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, jede Website wird mit SEO-Basis (OnPage & Technik) ausgeliefert. Erweiterte SEO-Optimierung und Google Ads Betreuung sind ebenfalls verfügbar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Für welche Region arbeitet Fylu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Fylu ist im Saarland ansässig und arbeitet für Unternehmen in Saarbrücken, Saarlouis, Merzig, Dillingen und ganz Deutschland.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        {/* Hidden backlink for SEO purposes */}
        {require('../components/HiddenTaskeyLink').default()}
      </body>
    </html>
  );
}
