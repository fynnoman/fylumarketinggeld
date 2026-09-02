import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getCategory,
  getCompanyScore,
  hasSubScores,
  scoreBand,
} from "@/lib/digital-index";
import { COMPANIES, getCompany } from "@/lib/digital-index-data";
import { analyze, type AnalyzerError, type AnalyzerResult } from "@/lib/analyzer";
import ScoreGauge from "@/components/digital-index/ScoreGauge";
import ScoreBreakdown from "@/components/digital-index/ScoreBreakdown";
import BadgeEmbed from "@/components/digital-index/BadgeEmbed";
import AuditFindings from "@/components/digital-index/AuditFindings";

const SITE = "https://www.fylumarketing.de";

// ISR: Firmen-Detailseite alle 7 Tage neu generieren, damit der
// automatisierte Audit sich aktualisiert ohne redeployment.
export const revalidate = 604_800;

type PageProps = { params: Promise<{ category: string; slug: string }> };

export async function generateStaticParams() {
  return COMPANIES.map((c) => ({
    category: c.categorySlug,
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const co = getCompany(category, slug);
  const cat = getCategory(category);
  if (!co || !cat) return { title: "Nicht gefunden" };
  const score = getCompanyScore(co);
  const title = `${co.name}: Fylu Digital Score ${score}/100`;
  const description = `Digitalanalyse von ${co.name} in ${co.city}. Fylu Digital Score ${score} von 100 in der Kategorie ${cat.industry} ${cat.region}. Automatisierter Website-Audit alle sieben Tage.`;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE}/digital-index/${cat.slug}/${co.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE}/digital-index/${cat.slug}/${co.slug}`,
      siteName: "Fylu Marketing",
      locale: "de_DE",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// Best-effort audit; scheitert der Fetch, geben wir null zurück und die UI
// zeigt einen freundlichen Fallback.
async function runAudit(url: string | undefined): Promise<
  AnalyzerResult | AnalyzerError | null
> {
  if (!url) return null;
  try {
    return await analyze(url);
  } catch {
    return null;
  }
}

export default async function CompanyPage({ params }: PageProps) {
  const { category, slug } = await params;
  const co = getCompany(category, slug);
  const cat = getCategory(category);
  if (!co || !cat) notFound();

  const score = getCompanyScore(co);
  const band = scoreBand(score);
  const showBreakdown = hasSubScores(co);
  const audit = await runAudit(co.website);

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
      {
        "@type": "ListItem",
        position: 4,
        name: co.name,
        item: `${SITE}/digital-index/${cat.slug}/${co.slug}`,
      },
    ],
  };

  const localBusinessLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: co.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: co.city,
      addressRegion: cat.region,
      addressCountry: "DE",
    },
    ...(co.website ? { url: co.website } : {}),
    ...(co.gbpUrl ? { sameAs: [co.gbpUrl] } : {}),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (score / 20).toFixed(2),
      bestRating: "5",
      worstRating: "0",
      ratingCount: 1,
      reviewCount: 1,
      author: { "@type": "Organization", name: "Fylu Digital Index" },
    },
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Fylu Digital Score",
      value: score,
      maxValue: 100,
      minValue: 0,
      url: `${SITE}/digital-index/methodik`,
    },
  };

  // ProfilePage bindet die Firmen-Detailseite als eigene Entität an das
  // Fylu-Website-Netz an und macht den LocalBusiness zur mainEntity.
  const profilePageLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE}/digital-index/${cat.slug}/${co.slug}#page`,
    url: `${SITE}/digital-index/${cat.slug}/${co.slug}`,
    name: `${co.name} · Fylu Digital Score ${score}/100`,
    inLanguage: "de-DE",
    dateModified: co.updatedAt,
    isPartOf: { "@id": `${SITE}/#website` },
    about: [
      { "@type": "Thing", name: cat.industry },
      { "@type": "Place", name: co.city },
    ],
    author: { "@id": `${SITE}/#organization` },
    publisher: { "@id": `${SITE}/#organization` },
    mainEntity: localBusinessLd,
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />

      <main className="bg-[color:var(--background-warm)] text-[color:var(--ink)]">
        <div className="mx-auto max-w-5xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-stone-500">
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
              <li>
                <Link
                  href={`/digital-index/${cat.slug}`}
                  className="hover:text-[color:var(--ink)]"
                >
                  {cat.industry} {cat.region}
                </Link>
              </li>
              <li className="text-stone-300">/</li>
              <li className="text-[color:var(--ink)]">{co.name}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-8 grid grid-cols-1 items-start gap-8 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-700">
                {cat.region} · {cat.industry}
              </p>
              <h1 className="mt-3 font-display text-4xl leading-tight text-[color:var(--ink)] sm:text-6xl">
                {co.name}
              </h1>
              <p className="mt-2 text-[color:var(--ink-soft)]">{co.city}</p>
              {co.website ? (
                <p className="mt-3 text-sm">
                  <a
                    href={co.website}
                    target="_blank"
                    rel="noopener nofollow"
                    className="text-cyan-700 underline underline-offset-4 hover:text-cyan-900"
                  >
                    Zur Website
                  </a>
                </p>
              ) : null}
            </div>
            <div className="flex flex-col items-start sm:items-end">
              <ScoreGauge score={score} size="lg" />
              <p className="mt-2 text-sm text-stone-500">
                Kategorie: {band.label}
              </p>
            </div>
          </header>

          <p className="mt-8 max-w-2xl text-lg text-[color:var(--ink-soft)]">
            {co.shortDescription}
          </p>

          {/* Audit */}
          <section className="mt-12">
            <AuditFindings audit={audit} />
          </section>

          {/* Analyse-Notizen */}
          {co.analysisNotes && co.analysisNotes.length > 0 ? (
            <section className="mt-12">
              <h2 className="font-display text-2xl text-[color:var(--ink)]">
                Redaktionelle Beobachtungen
              </h2>
              <ul className="mt-4 space-y-2 rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                {co.analysisNotes.map((n, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-[color:var(--ink-soft)]"
                  >
                    <span className="mt-1.5 h-1 w-4 shrink-0 rounded-full bg-cyan-500/70" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Score Breakdown (nur wenn 12-Kriterien-Sub-Scores vorliegen) */}
          {showBreakdown ? (
            <section className="mt-12">
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-2xl text-[color:var(--ink)]">
                  Score-Aufschlüsselung
                </h2>
                <Link
                  href="/digital-index/methodik"
                  className="text-sm text-stone-500 underline underline-offset-4 hover:text-[color:var(--ink)]"
                >
                  Methodik
                </Link>
              </div>
              <div className="mt-4">
                <ScoreBreakdown subScores={co.subScores} />
              </div>
            </section>
          ) : null}

          {/* Badge Embed */}
          <section className="mt-12">
            <BadgeEmbed
              companySlug={co.slug}
              categorySlug={cat.slug}
              companyName={co.name}
              categoryLabel={cat.label}
              score={score}
            />
          </section>

          {/* CTA */}
          <aside className="mt-12 rounded-xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-white p-6 sm:p-8">
            <p className="font-display text-xl text-[color:var(--ink)]">
              Score verbessern.
            </p>
            <p className="mt-2 max-w-2xl text-[color:var(--ink-soft)]">
              15 Minuten Vorgespräch mit dem Studio-Lead, konkret zu Ihrem
              Score und den passenden Hebeln. Persönlich, unverbindlich,
              kostenfrei.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/buchen"
                className="inline-flex items-center rounded-full bg-[color:var(--ink)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
              >
                Termin buchen
              </Link>
              <Link
                href="/tools/website-check"
                className="inline-flex items-center rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-[color:var(--ink)] transition-colors hover:bg-stone-100"
              >
                Kostenlose Fylu-Digitalanalyse
              </Link>
            </div>
          </aside>

          <p className="mt-8 text-xs text-stone-500">
            Stand des redaktionellen Scores:{" "}
            {new Date(co.updatedAt).toLocaleDateString("de-DE")}. Automatischer
            Audit wird alle sieben Tage aktualisiert.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
