import type { Metadata } from 'next';
import RelaunchClient from './RelaunchClient';

const SITE = 'https://www.fylumarketing.de';
const URL = `${SITE}/relaunch`;

export const metadata: Metadata = {
  title: 'Digitaler Relaunch für etablierte Unternehmen · Fylu Marketing',
  description:
    'Ihre Firma ist besser als Ihre Website. Wir modernisieren den digitalen Auftritt etablierter Unternehmen im Saarland. Von Marke und Website bis SEO und GEO.',
  alternates: { canonical: URL },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  openGraph: {
    title: 'Ihre Firma ist besser als Ihre Website.',
    description:
      'Digitaler Relaunch für etablierte Unternehmen im Saarland. Marke, Website und Sichtbarkeit auf einem Niveau.',
    url: URL,
    siteName: 'Fylu Marketing',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/herob.png', width: 1200, height: 630, alt: 'Fylu Marketing · Digitaler Relaunch' }],
  },
};

export default function RelaunchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${URL}#relaunch`,
            name: 'Digitaler Relaunch für etablierte Unternehmen',
            description:
              'Zusammenhängender Relaunch aus Positionierung, Marke, Website und Sichtbarkeit. Für etablierte Unternehmen im Saarland.',
            serviceType: 'Digitaler Relaunch',
            provider: { '@id': `${SITE}/#organization` },
            areaServed: [
              { '@type': 'State', name: 'Saarland' },
              { '@type': 'Country', name: 'Deutschland' },
            ],
            url: URL,
          }),
        }}
      />
      <RelaunchClient />
    </>
  );
}
