import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { problems } from "@/lib/problems";

const SITE = "https://www.fylumarketing.de";

export const metadata: Metadata = {
  title: "Website-Probleme lösen",
  description:
    "Übersicht der häufigsten Website-Probleme mit ehrlichen Diagnosen und konkreten Lösungsansätzen — direkt aus dem Fylu Marketing.",
  alternates: { canonical: `${SITE}/probleme` },
};

export default function ProblemsIndex() {
  const url = `${SITE}/probleme`;
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
            name: "Website-Probleme lösen",
            description:
              "Übersicht der häufigsten Website-Probleme mit ehrlichen Diagnosen und konkreten Lösungsansätzen aus dem Fylu Marketing.",
            inLanguage: "de-DE",
            isPartOf: { "@id": `${SITE}/#website` },
            about: { "@type": "Thing", name: "Website-Probleme und Lösungen" },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: problems.length,
              itemListOrder: "https://schema.org/ItemListUnordered",
              itemListElement: problems.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: `${SITE}/probleme/${p.slug}`,
                name: p.h1,
                description: p.keyFinding,
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
              { "@type": "ListItem", position: 2, name: "Probleme", item: url },
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
                  Probleme &amp; Lösungen
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02]">
                Konkrete Website-Probleme,{" "}
                <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                  ehrlich diagnostiziert
                </span>
                .
              </h1>
              <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Jeder Artikel benennt Ursachen, zeigt Diagnose-Schritte und listet konkrete
                Lösungsansätze. Keine Score-Kosmetik, sondern nachvollziehbare Substanz.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {problems.map((p) => (
                <Link
                  key={p.slug}
                  href={`/probleme/${p.slug}`}
                  className="group relative glass rounded-3xl p-6 md:p-7 overflow-hidden hover:border-cyan-200 transition-colors"
                >
                  <span className="glass-edge" aria-hidden />
                  <div className="relative">
                    <h2 className="text-xl md:text-[1.4rem] font-semibold text-[var(--ink)] tracking-[-0.02em] leading-tight mb-3">
                      {p.h1}
                    </h2>
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">{p.keyFinding}</p>
                    <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--cyan-deep)]">
                      Zur Diagnose
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
