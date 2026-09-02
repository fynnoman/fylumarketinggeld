import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndexExperience from "@/components/digital-index/IndexExperience";
import { COMPANIES } from "@/lib/digital-index-data";

const SITE = "https://www.fylumarketing.de";

export const metadata: Metadata = {
  title: "Fylu Digital Index: Ranking der digital sichtbarsten Unternehmen",
  description:
    "Der Fylu Digital Index bewertet Unternehmen im Saarland nach digitaler Sichtbarkeit. Transparente Methodik, zwölf Kriterien, jährliche Aktualisierung.",
  alternates: { canonical: `${SITE}/digital-index` },
  openGraph: {
    title: "Fylu Digital Index",
    description:
      "Ranking der digital sichtbarsten Unternehmen. Zwölf Kriterien, transparente Methodik.",
    url: `${SITE}/digital-index`,
    siteName: "Fylu Marketing",
    locale: "de_DE",
    type: "website",
  },
};

export default function DigitalIndexPage() {
  return (
    <>
      <Navbar />
      <IndexExperience companies={COMPANIES} />
      <Footer />
    </>
  );
}
