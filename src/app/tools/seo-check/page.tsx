import type { Metadata } from "next";
import SeoCheckForm from "./SeoCheckForm";

const SITE = "https://www.fylumarketing.de";
const URL = `${SITE}/tools/seo-check`;

export const metadata: Metadata = {
  title: "SEO-Check mit Handlungsempfehlungen",
  description:
    "Kostenloser SEO-Check mit konkreten Handlungsempfehlungen pro Finding: Meta, Struktur, Inhalt, Structured Data, lokale Signale. Priorisiert nach Impact. Keine Registrierung.",
  alternates: { canonical: URL },
  openGraph: {
    title: "SEO-Check mit Handlungsempfehlungen — priorisiert nach Impact",
    description:
      "Jedes Finding kommt mit einer konkreten Handlungsempfehlung. Direkt sichtbar, ohne Registrierung.",
    url: URL,
    siteName: "Fylu Studio",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO-Check | Fylu Studio",
    description: "SEO-Check mit konkreten Handlungsempfehlungen pro Finding.",
  },
};

export default function SeoCheckPage() {
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
              { "@type": "ListItem", position: 3, name: "SEO-Check", item: URL },
            ],
          }),
        }}
      />
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 md:mb-20 text-center">
            <div className="mb-6 flex items-baseline justify-center gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                §03
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                SEO-Check
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02]">
              Nicht nur was fehlt,{" "}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                sondern wie es behoben wird
              </span>
              .
            </h1>
            <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Jedes Finding kommt mit einer konkreten Handlungsempfehlung. Priorisiert nach Impact.
              Keine Registrierung, nichts wird gespeichert.
            </p>
          </div>

          <SeoCheckForm />

          <div className="mt-16 border-t border-stone-200/70 pt-8 text-sm text-stone-500 leading-relaxed">
            <p>
              <span className="font-medium text-stone-700">Unterschied zur Website-Analyse:</span>
              {" "}Der SEO-Check konzentriert sich auf Meta, Struktur, Inhalt, Structured Data und
              lokale Signale — mit einer expliziten Handlungsempfehlung zu jedem Finding. Für einen
              breiteren technischen Blick nutzen Sie{" "}
              <a href="/tools/website-check" className="text-[var(--cyan-deep)] hover:underline">
                die Website-Analyse
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
