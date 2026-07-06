import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CaseStudyShowcase from '@/components/CaseStudyShowcase';
import ClientLogoBar from '@/components/ClientLogoBar';
import AboutMeSection from '@/components/AboutMeSection';
import ValueSection from '@/components/ValueSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import MethodikSection from '@/components/MethodikSection';
import PricingSection from '@/components/PricingSection';
import CaseStudySection from '@/components/CaseStudySection';
import GarantieSection from '@/components/GarantieSection';
import FinalCTASection from '@/components/FinalCTASection';
import FullscreenVideoSection from '@/components/FullscreenVideoSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { regions } from '@/lib/regions';
import { topics } from '@/lib/topics';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CaseStudyShowcase />
      <ClientLogoBar />
      <AboutMeSection />
      <ValueSection />
      <ProblemSolutionSection />
      <MethodikSection />
      <PricingSection />
      <CaseStudySection />
      <GarantieSection />
      <FinalCTASection />
      <FullscreenVideoSection />
      <FAQSection />

      {/* SEO-Hub: Lokale Landing Pages und Branchen */}
      <section className="relative py-24 md:py-32 px-6 bg-[var(--background-warm)] border-t border-stone-200/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="hairline-rule w-32 mx-auto mb-8" />
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="font-display italic text-[var(--cyan-deep)] text-2xl md:text-3xl leading-none">
                §XI
              </span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-stone-500 font-medium">
                Reichweite
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.05]">
              Fylu Studio — im{' '}
              <span className="font-display italic font-normal text-[var(--cyan-deep)]">
                gesamten Saarland.
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Persönlich geführt aus Saarlouis — begleitet werden Häuser in allen
              Saarland-Städten und im übrigen Deutschland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Städte */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.32em] text-stone-500 font-semibold mb-5">
                Nach Stadt
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {regions.map((r) => (
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
              <div className="mt-8 flex flex-wrap gap-2">
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

            {/* Branchen */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.32em] text-stone-500 font-semibold mb-5">
                Nach Branche
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {topics.map((t) => (
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
              <div className="mt-8 flex flex-wrap gap-2">
                <Link href="/website-erstellen-lassen" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-medium text-[var(--ink)] hover:border-cyan-200 transition-colors">
                  Website erstellen lassen
                </Link>
                <Link href="/webdesign-handwerk" className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-xs font-medium text-[var(--ink)] hover:border-cyan-200 transition-colors">
                  Webdesign Handwerk
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
