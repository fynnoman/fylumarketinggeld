'use client';

import Script from 'next/script';
import { useConsentCategory } from '@/lib/consent';

const GTAG_ID = 'AW-18076906192';

export default function GtagLoader() {
  const allowed = useConsentCategory('marketing');
  if (!allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG_ID}');
        `}
      </Script>
    </>
  );
}
