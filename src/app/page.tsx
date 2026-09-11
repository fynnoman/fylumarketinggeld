import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LeistungenSection from '@/components/LeistungenSection';
import MarkenaufbauSection from '@/components/MarkenaufbauSection';
import HorizontalCases from '@/components/HorizontalCases';
import CalendlySection from '@/components/CalendlySection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { homeFaqs } from '@/lib/home-faqs';

export default function Home() {
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
            name: 'Fylu Marketing · Webdesign, SEO und Software aus dem Saarland',
            description:
              'Fylu Marketing, Saarlouis: Websites, SEO, Google Ads und Softwareentwicklung. Wir helfen Unternehmen jeder Phase, ihre Online-Präsenz aufzubauen und zu skalieren.',
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
      <CalendlySection />
      <LeistungenSection />
      <MarkenaufbauSection />
      <HorizontalCases />
      <FAQSection />
      <Footer />
    </main>
  );
}
