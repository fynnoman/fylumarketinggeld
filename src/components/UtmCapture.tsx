'use client';

import { useEffect } from 'react';
import { captureUtmToSession } from '@/lib/track';

// Läuft einmal beim ersten Mount und speichert eventuelle UTM-Parameter
// in sessionStorage. Wird vom Kontaktformular gelesen und an die Anfrage
// gehängt, damit Quelle und Kampagne nachvollziehbar bleiben.
export default function UtmCapture() {
  useEffect(() => {
    captureUtmToSession();
  }, []);
  return null;
}
