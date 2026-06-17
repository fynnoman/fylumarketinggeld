import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App entwickeln lassen Saarland ▷ App-Entwicklung von Profis | Fylu",
  description:
    "App entwickeln lassen aus dem Saarland: Web-Apps, iOS, Android, PWA. transparente Konditionen-Entwicklung mit modernem Stack (React Native, Next.js). Saarlouis · Saarbrücken · deutschlandweit.",
  keywords: [
    "App entwickeln lassen",
    "App entwickeln lassen Saarland",
    "App-Entwicklung Saarland",
    "App entwickeln Saarbrücken",
    "App entwickeln Saarlouis",
    "Web-App entwickeln lassen",
    "iOS App entwickeln Saarland",
    "Android App entwickeln Saarland",
    "PWA entwickeln",
    "Mobile App Saarland",
    "App-Agentur Saarland",
    "App entwickeln Kosten",
    "App entwickeln günstig",
  ],
  alternates: {
    canonical: "/app-entwickeln-lassen",
  },
  openGraph: {
    title: "App entwickeln lassen | App-Entwicklung Saarland | Fylu",
    description:
      "Web-Apps, iOS, Android, PWA — entwickelt im Saarland. transparente Konditionen statt Stundensatz, moderner Stack, persönliche Betreuung.",
    url: "https://www.fylumarketing.de/app-entwickeln-lassen",
    siteName: "Fylu Webdesign & Software",
    locale: "de_DE",
    type: "website",
    images: [
      { url: "/hero-background.webp", width: 1200, height: 630, alt: "App entwickeln lassen – Fylu" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App entwickeln lassen | App-Entwicklung Saarland | Fylu",
    description: "Web-Apps, iOS, Android, PWA — transparente Konditionen aus dem Saarland.",
    images: ["/hero-background.webp"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
