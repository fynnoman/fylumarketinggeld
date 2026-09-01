import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { guides } from "@/lib/guides";

const SITE = "https://www.fylumarketing.de";

export const metadata: Metadata = {
  title: "Website-Ratgeber",
  description:
    "Ratgeber-Artikel rund um Website-Kosten, Relaunch, Erstellung und Investitionsentscheidungen — transparent aus dem Fylu Studio.",
  alternates: { canonical: `${SITE}/ratgeber` },
};

export default function GuidesIndex() {
  const url = `${SITE}/ratgeber`;
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${url}#collection`,
            url,
            name: "Website-Ratgeber",
            description:
              "Ratgeber-Artikel rund um Website-Kosten, Relaunch, Erstellung und Investitionsentscheidungen aus dem Fylu Studio.",
            inLanguage: "de-DE",
            isPartOf: { "@id": `${SITE}/#website` },
            about: { "@type": "Thing", name: "Website-Kosten, Relaunch, SEO und Investitionsentscheidungen" },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: guides.length,
              itemListOrder: "https://schema.org/ItemListUnordered",
              itemListElement: guides.map((g, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE}/ratgeber/${g.slug}`,
                name: g.h1,
                description: g.shortAnswer,
              })),
            },
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
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Ratgeber", item: url },
            ],
          }),
        }}
      />
      <main className="min-h-screen bg-[var(--background-warm)]">
        <section className="relative py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-14 text-center">
              <div className="mb-6 flex items-baseline justify-center gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                  §
                </span>
                <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                  Ratgeber
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02]">
                Transparente Antworten,{" "}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  bevor Sie entscheiden
                </span>
                .
              </h1>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Ratgeber-Artikel zu Website-Kosten, Relaunch, Erstellung und den
                Entscheidungen davor. Keine SEO-Textbausteine — echte Antworten aus der
                Studio-Praxis.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/ratgeber/${g.slug}`}
                  className="group relative glass rounded-3xl p-6 md:p-7 overflow-hidden hover:border-cyan-200 transition-colors"
                >
                  <span className="glass-edge" aria-hidden />
                  <div className="relative">
                    <h2 className="text-xl md:text-[1.4rem] font-semibold text-[var(--ink)] tracking-[-0.02em] leading-tight mb-3">
                      {g.h1}
                    </h2>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">{g.shortAnswer}</p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--cyan-deep)]">
                      Zum Ratgeber
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
