import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PinnedManifesto from '@/components/PinnedManifesto';
import LeistungenSection from '@/components/LeistungenSection';
import HorizontalCases from '@/components/HorizontalCases';
import CalendlySection from '@/components/CalendlySection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';
import { regions } from '@/lib/regions';
import { topics, isIndexableTopic } from '@/lib/topics';
import { homeFaqs } from '@/lib/home-faqs';

export default function Home() {
  const indexableTopics = topics.filter(isIndexableTopic);
  // Nur Top-5-Städte auf der Home verlinken — die 24 Extended-Städte sind noindex,
  // eine prominente Verlinkung würde widersprüchliche Signale an Google senden.
  const topRegions = regions.filter((r) => r.tier === "top");
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': 'https://www.fylumarketing.de/#faqpage',
            inLanguage: 'de-DE',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['#faq-heading', '[id^="faq-panel-"]'],
            },
            mainEntity: homeFaqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://www.fylumarketing.de/#webpage',
            url: 'https://www.fylumarketing.de/',
            name: 'Fylu Marketing · Editorial Webdesign, SEO und Software aus dem Saarland',
            description:
              'Fylu Marketing, Saarlouis: editorial gestaltete Websites, SEO- und Google-Ads-Erweiterungen, Softwareentwicklung. Konzentriert auf etablierte, hochwertige Unternehmen — bewusst begrenzt auf zwölf Klienten pro Jahr.',
            inLanguage: 'de-DE',
            isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
            about: { '@id': 'https://www.fylumarketing.de/#organization' },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: 'https://www.fylumarketing.de/herob.png',
              width: 1200,
              height: 630,
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', '[data-speakable]', '#faq-heading', '[id^="faq-panel-"]'],
            },
            significantLink: [
              'https://www.fylumarketing.de/webdesign-saarland',
              'https://www.fylumarketing.de/seo-saarland',
              'https://www.fylumarketing.de/google-ads-saarland',
              'https://www.fylumarketing.de/software-saarland',
              'https://www.fylumarketing.de/methodik',
              'https://www.fylumarketing.de/team',
              'https://www.fylumarketing.de/buchen',
            ],
          }),
        }}
      />
      <Navbar />
      <HeroSection />
      <PinnedManifesto />
      <LeistungenSection />
      <CalendlySection />
      <HorizontalCases />
      <FAQSection />
      <FinalCTASection />

      {/* SEO-Hub: Lokale Landing Pages und Branchen */}
      <section className="relative py-20 md:py-24 px-6 bg-[var(--background-warm)] border-t border-stone-200/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="hairline-rule w-32 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] tracking-[-0.02em] leading-tight">
              Webdesign &amp; SEO{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                im gesamten Saarland
              </span>
              .
            </h2>
            <p className="mt-4 text-sm md:text-base text-stone-600 max-w-xl mx-auto">
              Persönlich aus Saarlouis. Vor Ort in Saarbrücken, Merzig,
              Dillingen und im übrigen Deutschland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.32em] text-stone-500 font-semibold mb-4">
                Nach Stadt
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {topRegions.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/webdesign/${r.slug}`}
                    className="text-sm text-stone-600 hover:text-cyan-700 transition-colors py-1"
                  >
                    <span className="font-display italic text-stone-400 mr-1.5">→</span>
                    <span>Webdesign {r.city}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/webdesign-saarland" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-medium text-[var(--ink)] hover:border-cyan-200 transition-colors">
                  Webdesign Saarland
                </Link>
                <Link href="/seo-saarland" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-medium text-[var(--ink)] hover:border-cyan-200 transition-colors">
                  SEO Saarland
                </Link>
                <Link href="/google-ads-saarland" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-medium text-[var(--ink)] hover:border-cyan-200 transition-colors">
                  Google Ads Saarland
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.32em] text-stone-500 font-semibold mb-4">
                Nach Branche
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {indexableTopics.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/leistungen/${t.slug}`}
                    className="text-sm text-stone-600 hover:text-cyan-700 transition-colors py-1"
                  >
                    <span className="font-display italic text-stone-400 mr-1.5">→</span>
                    <span>{t.h1.replace(" im Saarland", "").replace("Website für ", "").replace("Webdesign für ", "")}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/website-erstellen-lassen" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-medium text-[var(--ink)] hover:border-cyan-200 transition-colors">
                  Website erstellen lassen
                </Link>
                <Link href="/probleme" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-medium text-[var(--ink)] hover:border-cyan-200 transition-colors">
                  Website-Probleme lösen
                </Link>
                <Link href="/ratgeber" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-medium text-[var(--ink)] hover:border-cyan-200 transition-colors">
                  Ratgeber
                </Link>
                <Link href="/buchen" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-medium text-[var(--ink)] hover:border-cyan-200 transition-colors">
                  Vorgespräch buchen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
