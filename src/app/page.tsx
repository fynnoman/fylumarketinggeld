import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutMeSection from '@/components/AboutMeSection';
import ValueSection from '@/components/ValueSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import CaseStudySection from '@/components/CaseStudySection';
import FinalCTASection from '@/components/FinalCTASection';
import FullscreenVideoSection from '@/components/FullscreenVideoSection';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutMeSection />
      <ValueSection />
      <ProblemSolutionSection />
      <CaseStudySection />
      <FinalCTASection />
      <FullscreenVideoSection />
      <PortfolioSection />
      <Footer />
    </main>
  );
}

