import type { Metadata } from 'next';
import BuchenClient from './BuchenClient';

export const metadata: Metadata = {
	title: 'Kostenloses Erstgespräch buchen · Fylu Studio Saarlouis',
	description:
		'Kostenloses Erstgespräch mit dem Fylu Studio-Lead. 15 – 30 Minuten. Persönlich, unverbindlich — direkt Termin buchen oder per WhatsApp schreiben.',
	robots: { index: true, follow: true },
};

export default function BuchenPage() {
	return <BuchenClient />;
}
