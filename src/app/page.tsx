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
      <Footer />
    </main>
  );
}

