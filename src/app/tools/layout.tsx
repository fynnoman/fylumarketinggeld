import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Tools",
    template: "%s | Fylu Tools",
  },
  description:
    "Kostenlose Analyse- und Kalkulations-Tools des Fylu Studios: Website-Analyse, Kosten-Rechner, SEO-Check. Transparente Ergebnisse, ohne Registrierung.",
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background-warm)]">{children}</main>
      <Footer />
    </>
  );
}
