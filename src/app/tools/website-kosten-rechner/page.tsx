import type { Metadata } from "next";
import CostCalculatorForm from "./CostCalculatorForm";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/tools/website-kosten-rechner`;

export const metadata: Metadata = {
  title: "Website-Kosten-Rechner",
  description:
    "Was kostet eine neue Website? Beantworten Sie elf Fragen und erhalten Sie sofort eine transparente Investitions-Spanne mit Projektklasse und Zeitplan. Unverbindliche Orientierung, keine Registrierung.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Website-Kosten-Rechner — transparente Orientierung in zwei Minuten",
    description:
      "Ihr Umfang, Ihr Budget-Rahmen: elf Fragen, klare Antwort. Ohne Formular, ohne Registrierung.",
    url: URL,
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website-Kosten-Rechner | Fylu Studio",
    description:
      "Klare Investitions-Spanne für Ihre neue Website — unverbindliche Orientierung in zwei Minuten.",
  },
};

export default function CostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE}/tools` },
              { "@type": "ListItem", position: 3, name: "Website-Kosten-Rechner", item: URL },
            ],
          }),
        }}
      />
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 md:mb-20 text-center">
            <div className="mb-6 flex items-baseline justify-center gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                §01
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Kosten-Rechner
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02]">
              Was Ihre neue Website{" "}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                realistisch kostet
              </span>
              .
            </h1>
            <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Elf Fragen. Am Ende sehen Sie Projektklasse, Zeitplan und eine transparente
              Investitions-Spanne — unverbindliche Orientierung, kein Angebot.
            </p>
          </div>

          <CostCalculatorForm />

          <div className="mt-16 border-t border-stone-200/70 pt-8 text-sm text-stone-500 leading-relaxed">
            <p>
              <span className="font-medium text-stone-700">Zu diesem Rechner:</span> Die Werte
              basieren auf tatsächlichen Fylu-Projekten aus den letzten Jahren. Sie ersetzen kein
              Angebot. Der finale Preis hängt vom konkreten Umfang, der gewünschten Sorgfalt und
              individuellen Anforderungen ab.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
