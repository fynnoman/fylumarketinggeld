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
        <link rel="canonical" href="https://fylumarketing.de" />
        <meta name="google-site-verification" content="Ear6kvwbpWM5FoLN6Qfwk5GWOlsTSkpyscKuDedLIcU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Fylu – Webdesign & SEO",
              description: "Professionelles Webdesign und SEO-Optimierung für kleine und mittlere Unternehmen in Deutschland.",
              url: "https://fylumarketing.de",
              telephone: "+4915168488999",
              email: "fynnschulzonline@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "DE",
              },
              serviceType: ["Webdesign", "SEO Optimierung", "Google Optimierung", "Website Erstellung"],
              priceRange: "€€",
              areaServed: "Deutschland",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
