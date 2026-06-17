import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CaseStudyShowcase from '@/components/CaseStudyShowcase';
import ClientLogoBar from '@/components/ClientLogoBar';
import AboutMeSection from '@/components/AboutMeSection';
import ValueSection from '@/components/ValueSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import MethodikSection from '@/components/MethodikSection';
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
      <CaseStudySection />
      <GarantieSection />
      <FinalCTASection />
      <FullscreenVideoSection />
      <FAQSection />

      {/* SEO-Hub: Lokale Landing Pages und Branchen */}
      <section className="py-20 px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
            Webdesign & SEO im gesamten Saarland
          </h2>
          <p className="text-lg text-stone-600 text-center mb-12 max-w-3xl mx-auto">
            Persönliche Betreuung aus Saarlouis – für Unternehmen in allen Saarland-Städten und deutschlandweit. Wählen Sie Ihre Stadt oder Branche:
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Städte */}
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Webdesign nach Stadt</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {regions.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/webdesign/${r.slug}`}
                    className="text-sm text-stone-600 hover:text-cyan-600 transition-colors py-1"
                  >
                    → Webdesign {r.city}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/webdesign-saarland" className="px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-700 hover:bg-cyan-100 transition-colors">
                  Webdesign Saarland
                </Link>
                <Link href="/seo-saarland" className="px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-700 hover:bg-cyan-100 transition-colors">
                  SEO Saarland
                </Link>
                <Link href="/google-ads-saarland" className="px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-700 hover:bg-cyan-100 transition-colors">
                  Google Ads Saarland
                </Link>
              </div>
            </div>

            {/* Branchen */}
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">Webdesign nach Branche</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {topics.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/leistungen/${t.slug}`}
                    className="text-sm text-stone-600 hover:text-cyan-600 transition-colors py-1"
                  >
                    → {t.h1.replace(" im Saarland", "").replace("Website für ", "").replace("Webdesign für ", "")}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link href="/website-erstellen-lassen" className="px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-700 hover:bg-cyan-100 transition-colors">
                  Website erstellen lassen
                </Link>
                <Link href="/webdesign-handwerk" className="px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-700 hover:bg-cyan-100 transition-colors">
                  Webdesign Handwerk
                </Link>
                <Link href="/buchen" className="px-3 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-medium text-cyan-700 hover:bg-cyan-100 transition-colors">
                  Alle Angebote
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

