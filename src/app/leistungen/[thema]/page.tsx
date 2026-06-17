import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { topics, getTopicBySlug } from "@/lib/topics";

const SITE = "https://www.fylumarketing.de";

function getRelatedTopics(currentSlug: string) {
  return topics.filter((t) => t.slug !== currentSlug).slice(0, 8);
}

export function generateStaticParams() {
  return topics.map((t) => ({ thema: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ thema: string }>;
}): Promise<Metadata> {
  const { thema } = await params;
  const topic = getTopicBySlug(thema);
  if (!topic) return {};
  const url = `${SITE}/leistungen/${topic.slug}`;
  return {
    title: topic.metaTitle,
    description: topic.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: topic.metaTitle,
      description: topic.metaDescription,
      url,
      siteName: "Fylu Marketing",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: topic.metaTitle,
      description: topic.metaDescription,
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ thema: string }>;
}) {
  const { thema } = await params;
  const topic = getTopicBySlug(thema);
  if (!topic) notFound();

  const url = `${SITE}/leistungen/${topic.slug}`;
  const relatedTopics = getRelatedTopics(topic.slug);

  return (
    <main>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE}/buchen` },
              { "@type": "ListItem", position: 3, name: topic.h1, item: url },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: topic.h1,
            description: topic.metaDescription,
            provider: { "@id": "https://www.fylumarketing.de/#organization" },
            areaServed: [
              { "@type": "State", name: "Saarland" },
              { "@type": "Country", name: "Deutschland" },
            ],
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              url: `${SITE}/buchen`,
              priceSpecification: {
                "@type": "PriceSpecification",
                valueAddedTaxIncluded: false,
              },
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
            mainEntity: topic.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <div className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-3 pt-20">
          <nav className="text-sm text-stone-500">
            <Link href="/" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900 font-medium">{topic.h1}</span>
          </nav>
        </div>
      </div>

      <section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-6">
            {topic.h1}
          </h1>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8 max-w-3xl">
            {topic.intro}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/buchen"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)] active:scale-[0.98]"
            >
              Anfrage senden
            </Link>
            <Link
              href="/buchen"
              className="bg-white border border-cyan-500 text-cyan-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-200 hover:bg-cyan-50 active:scale-[0.98]"
            >
              Projekt starten
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto space-y-12">
          {topic.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">{s.title}</h2>
              <p className="text-stone-700 leading-relaxed text-lg">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">Häufige Fragen</h2>
          <div className="space-y-6">
            {topic.faqs.map((faq, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-cyan-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Bereit zu starten?</h2>
          <p className="text-lg text-stone-600 mb-8">
            Kostenloses, unverbindliches Angebot innerhalb von 24 Stunden – persönlich aus dem Saarland.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/buchen"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all duration-200 hover:shadow-[0_16px_48px_rgba(6,182,212,0.3)] active:scale-[0.98]"
            >
              Anfrage senden
            </Link>
            <Link
              href="/buchen"
              className="bg-white border border-cyan-500 text-cyan-600 px-10 py-5 rounded-xl text-xl font-bold transition-all duration-200 hover:bg-cyan-100 active:scale-[0.98]"
            >
              Projekt starten
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-Linking: weitere Branchen-Leistungen */}
      <section className="py-16 px-6 bg-stone-100 border-t border-stone-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3 text-center">
            Weitere Branchen-Lösungen
          </h2>
          <p className="text-stone-600 text-center mb-8 max-w-2xl mx-auto">
            Webdesign für weitere Branchen im Saarland – mit transparenten Konditionen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {relatedTopics.map((t) => (
              <Link
                key={t.slug}
                href={`/leistungen/${t.slug}`}
                className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-center text-stone-700 hover:border-cyan-500 hover:text-cyan-600 transition-colors text-sm font-medium"
              >
                {t.h1.replace(" im Saarland", "").replace("Website für ", "").replace("Webdesign für ", "")}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/webdesign-saarland" className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">Webdesign Saarland</Link>
            <Link href="/seo-saarland" className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">SEO Saarland</Link>
            <Link href="/google-ads-saarland" className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">Google Ads Saarland</Link>
            <Link href="/website-erstellen-lassen" className="px-4 py-2 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-cyan-500 hover:text-cyan-600 transition-colors">Website erstellen lassen</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
