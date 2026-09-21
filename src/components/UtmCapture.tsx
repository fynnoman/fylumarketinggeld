'use client';

import { useEffect } from 'react';
import { captureUtmToSession } from '@/lib/track';

// Läuft einmal beim ersten Mount und speichert eventuelle UTM-Parameter
// in sessionStorage. Wird von BuchenClient gelesen und ans Kontaktformular
// bzw. Calendly-Payload gehängt.
export default function UtmCapture() {
  useEffect(() => {
    captureUtmToSession();
  }, []);
  return null;
}
