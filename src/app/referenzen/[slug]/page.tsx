import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cases, getCaseBySlug } from "@/lib/cases";

const SITE = "https://www.fylumarketing.de";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  const url = `${SITE}/referenzen/${c.slug}`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      siteName: "Fylu Marketing",
      locale: "de_DE",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  const url = `${SITE}/referenzen/${c.slug}`;
  const related = cases.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Referenzen", item: `${SITE}/referenzen` },
              { "@type": "ListItem", position: 3, name: c.h1, item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.h1,
            alternativeHeadline: c.metaTitle,
            description: c.metaDescription,
            abstract: c.hero.lead,
            datePublished: c.publishedAt,
            dateModified: c.updatedAt,
            mainEntityOfPage: url,
            inLanguage: "de-DE",
            author: { "@id": `${SITE}/#fynn-schulz` },
            publisher: { "@id": `${SITE}/#organization` },
            about: [{ "@type": "Thing", name: c.clientIndustry }],
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "[data-speakable]"],
            },
          }),
        }}
      />

      <main className="min-h-screen bg-[var(--background-warm)]">
        <div className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-6 py-3 pt-20">
            <nav className="text-sm text-stone-500">
              <Link href="/" className="hover:text-[var(--cyan-deep)] transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/referenzen" className="hover:text-[var(--cyan-deep)] transition-colors">
                Referenzen
              </Link>
              <span className="mx-2">/</span>
              <span className="text-stone-900 font-medium">{c.eyebrow}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-20 md:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-xl leading-none">
                §
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                {c.eyebrow}
              </span>
              {c.clientAnonymized && (
                <span className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-medium border-l border-stone-200 pl-3">
                  Anonymisiert
                </span>
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02] mb-8">
              {c.h1}
            </h1>
            <div className="relative overflow-hidden rounded-3xl bg-white p-6 md:p-8 border border-stone-200/70 shadow-[0_8px_40px_rgba(12,14,16,0.04)]">
              <div
                aria-hidden
                className="glass-bloom-cyan absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-40 pointer-events-none"
              />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-semibold mb-3">
                  Zusammenfassung
                </div>
                <p data-speakable className="text-lg text-stone-800 leading-relaxed font-medium">{c.hero.lead}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Situation */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                §a
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Ausgangslage
              </h2>
            </div>
            <p className="text-stone-700 leading-relaxed text-lg">{c.situation}</p>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                §b
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Konkretes Problem
              </h2>
            </div>
            <p className="text-stone-700 leading-relaxed text-lg">{c.problem}</p>
          </div>
        </section>

        {/* Strategy */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                §c
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Strategie
              </h2>
            </div>
            <p className="text-stone-700 leading-relaxed text-lg">{c.strategy}</p>
          </div>
        </section>

        {/* Implementation */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                §d
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Umsetzung
              </h2>
            </div>
            <ol className="space-y-8">
              {c.implementation.map((step, i) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-display italic text-[var(--cyan-deep)] text-2xl leading-none tabular-nums flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">{step.title}</h3>
                    <p className="text-stone-700 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Screenshots */}
        {c.screenshots && c.screenshots.length > 0 && (
          <section className="py-16 md:py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10 flex items-baseline gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                  §
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                  Sichtbar geworden
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {c.screenshots.map((s) => (
                  <figure key={s.src} className="rounded-2xl overflow-hidden border border-stone-200/60 bg-white">
                    <div className="relative aspect-[4/3] bg-stone-100">
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 768px) 400px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    {s.caption && (
                      <figcaption className="px-4 py-3 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                        {s.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Outcome */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                §e
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Ergebnis
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {c.outcome.map((o) => (
                <div
                  key={o.title}
                  className="relative overflow-hidden rounded-3xl bg-white p-6 border border-stone-200/70 shadow-[0_8px_40px_rgba(12,14,16,0.04)]"
                >
                  <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-semibold mb-2">
                    {o.title}
                  </div>
                  <p className="text-stone-800 leading-relaxed">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learnings */}
        {c.learnings.length > 0 && (
          <section className="py-16 md:py-20 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 flex items-baseline gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-lg leading-none">
                  §f
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                  Lernpunkte
                </h2>
              </div>
              <ul className="space-y-3">
                {c.learnings.map((l) => (
                  <li key={l} className="flex gap-3 text-stone-700 leading-relaxed">
                    <span className="font-display italic text-[var(--cyan-deep)] mt-0.5">→</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] p-8 md:p-10 text-white">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(50% 60% at 80% 0%, rgba(6,182,212,0.22), transparent 70%)",
                }}
              />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.32em] text-cyan-300 font-semibold mb-3">
                  Klingt vertraut?
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-4">
                  Prüfen Sie, wo Ihre Website heute steht.
                </h2>
                <p className="text-stone-300 leading-relaxed mb-6 max-w-xl">
                  Kostenlose Website-Analyse in unter 15 Sekunden. Ergebnis direkt sichtbar,
                  ohne Registrierung.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/tools/website-check"
                    className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3.5 rounded-full text-[14px] font-semibold transition-colors"
                  >
                    Website-Analyse starten
                    <span>→</span>
                  </Link>
                  <Link
                    href="/buchen"
                    className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 text-white px-6 py-3.5 rounded-full text-[14px] font-semibold border border-white/15 transition-colors"
                  >
                    Vorgespräch buchen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 md:py-20 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                  Weitere Referenzen
                </h2>
              </div>
              <div className="grid gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/referenzen/${r.slug}`}
                    className="group relative glass rounded-2xl p-5 overflow-hidden hover:border-cyan-200 transition-colors"
                  >
                    <span className="glass-edge" aria-hidden />
                    <div className="relative flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.32em] text-stone-500 font-semibold mb-1">
                          {r.eyebrow}
                        </div>
                        <div className="text-sm md:text-base font-semibold text-[var(--ink)]">
                          {r.h1}
                        </div>
                      </div>
                      <span className="text-[var(--cyan-deep)] transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="border-t border-stone-200/70" />
      </main>
      <Footer />
    </>
  );
}
