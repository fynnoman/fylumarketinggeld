'use client';

import { useEffect, useState } from 'react';

export type ConsentCategory = 'necessary' | 'marketing' | 'external';

export type Consent = {
  necessary: true;
  marketing: boolean;
  external: boolean;
  timestamp: number;
  version: 1;
};

const STORAGE_KEY = 'fylu_consent_v1';
export const CONSENT_CHANGE_EVENT = 'fylu:consent-change';
export const CONSENT_OPEN_EVENT = 'fylu:consent-open';

function readFromStorage(): Consent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.version !== 1) return null;
    return {
      necessary: true,
      marketing: !!parsed.marketing,
      external: !!parsed.external,
      timestamp: typeof parsed.timestamp === 'number' ? parsed.timestamp : Date.now(),
      version: 1,
    };
  } catch {
    return null;
  }
}

export function getConsent(): Consent | null {
  return readFromStorage();
}

export function setConsent(next: { marketing: boolean; external: boolean }) {
  if (typeof window === 'undefined') return;
  const consent: Consent = {
    necessary: true,
    marketing: !!next.marketing,
    external: !!next.external,
    timestamp: Date.now(),
    version: 1,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: consent }));
}

export function acceptAll() {
  setConsent({ marketing: true, external: true });
}

export function rejectAll() {
  setConsent({ marketing: false, external: false });
}

export function openConsentSettings() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

export function useConsent(): { consent: Consent | null; hydrated: boolean } {
  const [consent, setConsentState] = useState<Consent | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsentState(readFromStorage());
    setHydrated(true);
    const handler = () => setConsentState(readFromStorage());
    window.addEventListener(CONSENT_CHANGE_EVENT, handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  return { consent, hydrated };
}

export function useConsentCategory(category: ConsentCategory): boolean {
  const { consent } = useConsent();
  if (category === 'necessary') return true;
  if (!consent) return false;
  return consent[category];
}
