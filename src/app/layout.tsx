import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webdesign & SEO Agentur | Mehr Anfragen durch Ihre Website",
  description: "Professionelles Webdesign und Google-Optimierung für Unternehmen. Messbare Ergebnisse durch strategisches Online-Marketing. Jetzt kostenlosen Entwurf sichern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
