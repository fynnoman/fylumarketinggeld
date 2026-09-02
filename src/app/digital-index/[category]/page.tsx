import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CATEGORIES,
  getCategory,
  getCompanyScore,
  scoreBand,
  sortByScoreDesc,
} from "@/lib/digital-index";
import { getCompaniesByCategory } from "@/lib/digital-index-data";

const SITE = "https://www.fylumarketing.de";

// ISR: Kategorie-Seiten alle 24 Stunden neu generieren, damit neue Firmen
// zeitnah erscheinen ohne redeployment.
export const revalidate = 86_400;

type PageProps = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  // Nur Kategorien mit Firmen ausliefern; leere Kategorien bekommen
  // dynamisch bei Bedarf 404 (siehe Body). Verhindert Thin-Content im Index.
  return CATEGORIES.filter(
    (c) => getCompaniesByCategory(c.slug).length > 0,
  ).map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Kategorie nicht gefunden" };
  const companies = getCompaniesByCategory(cat.slug);
  const empty = companies.length === 0;
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    alternates: { canonical: `${SITE}/digital-index/${cat.slug}` },
    robots: empty ? { index: false, follow: true } : undefined,
    openGraph: {
      title: cat.metaTitle,
      description: cat.metaDescription,
      url: `${SITE}/digital-index/${cat.slug}`,
      siteName: "Fylu Marketing",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: cat.metaTitle,
      description: cat.metaDescription,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const companies = sortByScoreDesc(getCompaniesByCategory(cat.slug));
  const isEmpty = companies.length === 0;
  const updated = new Date(cat.updatedAt);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      {
        "@type": "ListItem",
        position: 2,
        name: "Digital Index",
        item: `${SITE}/digital-index`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cat.h1,
        item: `${SITE}/digital-index/${cat.slug}`,
      },
    ],
  };

  const itemListLd = isEmpty
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: cat.h1,
        numberOfItems: companies.length,
        itemListElement: companies.map((co, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE}/digital-index/${cat.slug}/${co.slug}`,
          name: co.name,
        })),
      };

  const faqLd =
    cat.faqs && cat.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: cat.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  // CollectionPage bindet die Kategorie-Landing als eigene Entität ein und
  // referenziert die zentrale Fylu-Organization plus die WebSite via @id.
  // Erhöht Entity-Klarheit für Google und AI-Suchsysteme deutlich.
  const collectionPageLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/digital-index/${cat.slug}#page`,
    url: `${SITE}/digital-index/${cat.slug}`,
    name: cat.h1,
    description: cat.metaDescription,
    inLanguage: "de-DE",
    dateModified: cat.updatedAt,
    isPartOf: { "@id": `${SITE}/#website` },
    about: [
      { "@type": "Thing", name: cat.industry },
      { "@type": "Place", name: cat.region },
    ],
    author: { "@id": `${SITE}/#organization` },
    publisher: { "@id": `${SITE}/#organization` },
    ...(itemListLd ? { mainEntity: itemListLd } : {}),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {itemListLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
        />
      ) : null}
      {faqLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      ) : null}

      <main className="bg-[color:var(--background-warm)] text-[color:var(--ink)]">
        <div className="relative mx-auto max-w-5xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-stone-500"
          >
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-[color:var(--ink)]">
                  Home
                </Link>
              </li>
              <li className="text-stone-300">/</li>
              <li>
                <Link
                  href="/digital-index"
                  className="hover:text-[color:var(--ink)]"
                >
                  Digital Index
                </Link>
              </li>
              <li className="text-stone-300">/</li>
              <li className="text-[color:var(--ink)]">{cat.industry}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-700">
              Fylu Digital Index · {cat.region}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-[color:var(--ink)] sm:text-6xl">
              {cat.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)]">
              {cat.intro}
            </p>
            <p className="mt-3 text-xs text-stone-500">
              Aktualisiert am{" "}
              {updated.toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              . Redaktionell geführt durch das Fylu Marketing Saarlouis.
            </p>
          </header>

          {/* Long Intro */}
          {cat.longIntro ? (
            <section className="mt-10 max-w-3xl">
              <p className="text-[color:var(--ink-soft)]">{cat.longIntro}</p>
            </section>
          ) : null}

          {/* Ranking */}
          <section className="mt-14">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                  Ranking
                </p>
                <h2 className="mt-1 font-display text-2xl text-[color:var(--ink)] sm:text-3xl">
                  Die {companies.length}{" "}
                  {companies.length === 1 ? "gelistete Firma" : "gelisteten Firmen"}
                </h2>
              </div>
              <p className="hidden text-xs text-stone-500 sm:block">
                Sortiert nach Fylu Digital Score
              </p>
            </div>

            {isEmpty ? (
              <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-sm">
                <p className="font-display text-xl text-[color:var(--ink)]">
                  In Vorbereitung.
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm text-[color:var(--ink-soft)]">
                  Für diese Kategorie wird derzeit die Erhebung durchgeführt.
                  Die Firmen erscheinen, sobald die Bewertung abgeschlossen
                  ist.
                </p>
                <Link
                  href="/digital-index"
                  className="mt-6 inline-flex items-center rounded-full border border-stone-300 px-5 py-2 text-xs text-[color:var(--ink)] transition-colors hover:bg-stone-100"
                >
                  Zurück zum Digital Index
                </Link>
              </div>
            ) : (
              <ol className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                {companies.map((co, i) => {
                  const score = getCompanyScore(co);
                  const band = scoreBand(score);
                  const toneText =
                    band.tone === "high"
                      ? "text-green-700"
                      : band.tone === "mid"
                        ? "text-amber-700"
                        : "text-red-700";
                  const toneBg =
                    band.tone === "high"
                      ? "bg-green-50 border-green-200"
                      : band.tone === "mid"
                        ? "bg-amber-50 border-amber-200"
                        : "bg-red-50 border-red-200";
                  return (
                    <li key={co.slug}>
                      <Link
                        href={`/digital-index/${cat.slug}/${co.slug}`}
                        className="flex items-center gap-4 border-b border-stone-100 px-4 py-4 transition-colors last:border-b-0 hover:bg-stone-50 sm:gap-6 sm:px-6"
                      >
                        <span className="w-8 shrink-0 text-right font-display text-xl text-stone-400 tabular-nums sm:text-2xl">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="w-16 shrink-0 text-center">
                          <span
                            className={`inline-flex h-14 w-14 items-center justify-center rounded-full border font-display text-lg tabular-nums ${toneBg} ${toneText}`}
                          >
                            {score}
                          </span>
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-display text-lg text-[color:var(--ink)] sm:text-xl">
                            {co.name}
                          </span>
                          <span className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-stone-600">
                            <span>{co.city}</span>
                            <span className="text-stone-300">·</span>
                            <span className={toneText}>{band.label}</span>
                          </span>
                        </span>
                        <span className="hidden shrink-0 text-xs text-stone-500 sm:inline">
                          Profil ansehen
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            )}
          </section>

          {/* Methodology */}
          <section className="mt-16 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-700">
              Methodik
            </p>
            <h2 className="mt-3 font-display text-2xl text-[color:var(--ink)] sm:text-3xl">
              So entsteht der Digital Score.
            </h2>
            <p className="mt-4 max-w-2xl text-[color:var(--ink-soft)]">
              Jede Firma wird auf zwölf Kriterien geprüft: Mobile UX,
              PageSpeed, Core Web Vitals, technische SEO, Local SEO,
              Google-Business-Signale, Structured Data, Accessibility,
              Conversion UX, AI/GEO Readiness, Contentqualität und
              Trust-Signale. Jeder Wert liegt zwischen 0 und 100. Der
              Gesamt-Score ergibt sich als gewichteter Durchschnitt. Zusätzlich
              wird jede Firmen-Website wöchentlich automatisch auf technische
              Signale hin verifiziert.
            </p>
            <Link
              href="/digital-index/methodik"
              className="mt-6 inline-flex items-center rounded-full border border-stone-300 px-5 py-2 text-xs text-[color:var(--ink)] transition-colors hover:bg-stone-100"
            >
              Vollständige Methodik ansehen
            </Link>
          </section>

          {/* FAQ */}
          {cat.faqs && cat.faqs.length > 0 ? (
            <section className="mt-16">
              <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
                FAQ
              </p>
              <h2 className="mt-1 font-display text-2xl text-[color:var(--ink)] sm:text-3xl">
                Häufig gestellte Fragen.
              </h2>
              <ul className="mt-6 space-y-3">
                {cat.faqs.map((f, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
                  >
                    <p className="font-display text-lg text-[color:var(--ink)]">
                      {f.q}
                    </p>
                    <p className="mt-2 text-[color:var(--ink-soft)]">{f.a}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Andere Kategorien */}
          <section className="mt-16">
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone-500">
              Weitere Branchen im Digital Index
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {CATEGORIES.filter(
                (c) =>
                  c.slug !== cat.slug &&
                  getCompaniesByCategory(c.slug).length > 0,
              ).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/digital-index/${c.slug}`}
                    className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs text-stone-700 transition-colors hover:border-stone-300 hover:text-[color:var(--ink)]"
                  >
                    {c.industry} {c.region}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="mt-20 overflow-hidden rounded-3xl border border-stone-200 bg-white p-10 shadow-sm sm:p-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-700">
              Vorgespräch
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-[color:var(--ink)] sm:text-5xl">
              Ihr {cat.industry}-Betrieb im Fylu Digital Index.
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--ink-soft)]">
              15 Minuten Vorgespräch mit dem Studio-Lead, persönlich und
              unverbindlich. Wir klären Ihren Score, die wichtigsten Hebel
              und ob Fylu für Ihr Vorhaben passt.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/buchen"
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
              >
                Kostenloses Vorgespräch buchen
              </Link>
              <Link
                href="/tools/website-check"
                className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-[color:var(--ink)] transition-colors hover:bg-stone-100"
              >
                Digitalanalyse anfordern
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
