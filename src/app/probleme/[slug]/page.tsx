import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { problems, getProblemBySlug } from "@/lib/problems";

const SITE = "https://www.fylumarketing.de";

export function generateStaticParams() {
  return problems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProblemBySlug(slug);
  if (!p) return {};
  const url = `${SITE}/probleme/${p.slug}`;
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url,
      siteName: "Fylu Marketing",
      locale: "de_DE",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: p.metaTitle,
      description: p.metaDescription,
    },
  };
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProblemBySlug(slug);
  if (!p) notFound();

  const url = `${SITE}/probleme/${p.slug}`;
  const related = problems.filter((x) => x.slug !== p.slug).slice(0, 3);

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
              { "@type": "ListItem", position: 2, name: "Probleme", item: `${SITE}/probleme` },
              { "@type": "ListItem", position: 3, name: p.h1, item: url },
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
            headline: p.h1,
            alternativeHeadline: p.metaTitle,
            description: p.metaDescription,
            abstract: p.keyFinding,
            datePublished: p.publishedAt,
            dateModified: p.updatedAt,
            mainEntityOfPage: url,
            inLanguage: "de-DE",
            author: { "@id": `${SITE}/#fynn-schulz` },
            publisher: { "@id": `${SITE}/#organization` },
            about: [{ "@type": "Thing", name: p.h1 }],
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "[data-speakable]"],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "de-DE",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "[data-speakable]"],
            },
            mainEntity: p.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-[var(--background-warm)]">
        {/* Breadcrumb */}
        <div className="bg-stone-50 border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-6 py-3 pt-20">
            <nav className="text-sm text-stone-500">
              <Link href="/" className="hover:text-[var(--cyan-deep)] transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/probleme" className="hover:text-[var(--cyan-deep)] transition-colors">
                Probleme
              </Link>
              <span className="mx-2">/</span>
              <span className="text-stone-900 font-medium">{p.h1}</span>
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
                Problem &amp; Lösung
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.02] mb-8">
              {p.h1}
            </h1>
            <p data-speakable className="text-lg md:text-xl text-stone-700 leading-relaxed">{p.intro}</p>

            {/* Key Finding Card */}
            <div className="mt-10 relative overflow-hidden rounded-3xl bg-white p-6 md:p-8 border border-stone-200/70 shadow-[0_8px_40px_rgba(12,14,16,0.04)]">
              <div
                aria-hidden
                className="glass-bloom-cyan absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-40 pointer-events-none"
              />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.32em] text-[var(--cyan-deep)] font-semibold mb-3">
                  Kurzantwort
                </div>
                <p data-speakable className="text-lg text-stone-800 leading-relaxed font-medium">{p.keyFinding}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl leading-none">
                §a
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Ursachen
              </h2>
            </div>
            <ol className="space-y-8">
              {p.causes.map((c, i) => (
                <li key={c.title} className="flex gap-5">
                  <span className="font-display italic text-[var(--cyan-deep)] text-2xl leading-none tabular-nums flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">{c.title}</h3>
                    <p className="text-stone-700 leading-relaxed">{c.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Diagnostics */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl leading-none">
                §b
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Was Sie selbst prüfen können
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {p.diagnostics.map((d) => (
                <div key={d.title} className="relative glass rounded-3xl p-6 overflow-hidden">
                  <span className="glass-edge" aria-hidden />
                  <div className="relative">
                    <h3 className="text-base font-semibold text-[var(--ink)] mb-2">{d.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl leading-none">
                §c
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Lösungsansätze
              </h2>
            </div>
            <div className="space-y-6">
              {p.solutions.map((s) => (
                <div key={s.title}>
                  <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">{s.title}</h3>
                  <p className="text-stone-700 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wie Fylu bei diesem Problem hilft — nur wenn serviceLinks kuratiert */}
        {p.serviceLinks && p.serviceLinks.length > 0 && (
          <section className="py-16 md:py-20 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10 flex items-baseline gap-3">
                <span className="font-display italic text-[var(--cyan-deep)] text-2xl leading-none">
                  §d
                </span>
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                  Wie Fylu bei diesem Problem hilft
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {p.serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group relative glass rounded-3xl p-6 overflow-hidden hover:border-cyan-200 transition-colors"
                  >
                    <span className="glass-edge" aria-hidden />
                    <div className="relative">
                      <div className="mb-2 flex items-baseline justify-between gap-2">
                        <h3 className="text-base md:text-lg font-semibold text-[var(--ink)]">
                          {s.label}
                        </h3>
                        <span className="text-[var(--cyan-deep)] transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed">{s.reason}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tool CTA */}
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
                  Nächster Schritt
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] mb-4">
                  {p.tool.label}
                </h2>
                <p className="text-stone-300 leading-relaxed mb-6 max-w-xl">{p.tool.reason}</p>
                <Link
                  href={p.tool.href}
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3.5 rounded-full text-[14px] font-semibold transition-colors"
                >
                  {p.tool.label}
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 flex items-baseline gap-3">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl leading-none">
                §
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                Häufige Fragen
              </h2>
            </div>
            <div className="space-y-4">
              {p.faqs.map((f) => (
                <div
                  key={f.q}
                  className="bg-stone-50 p-6 rounded-2xl border border-stone-200/60"
                >
                  <h3 className="text-base font-semibold text-[var(--ink)] mb-2">{f.q}</h3>
                  <p className="text-stone-700 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 md:py-20 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-[var(--ink)] tracking-[-0.02em]">
                  Weitere Probleme, die häufig zusammenhängen
                </h2>
              </div>
              <div className="grid gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/probleme/${r.slug}`}
                    className="group relative glass rounded-2xl p-5 overflow-hidden hover:border-cyan-200 transition-colors"
                  >
                    <span className="glass-edge" aria-hidden />
                    <div className="relative flex items-center justify-between gap-4">
                      <span className="text-sm md:text-base font-semibold text-[var(--ink)]">
                        {r.h1}
                      </span>
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
