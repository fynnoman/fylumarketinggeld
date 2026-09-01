import type { Metadata } from 'next';
import BuchenClient from './BuchenClient';

const SITE = 'https://www.fylumarketing.de';
const URL = `${SITE}/buchen`;

export const metadata: Metadata = {
	title: 'Kostenloses Erstgespräch buchen · Fylu Studio Saarlouis',
	description:
		'Kostenloses Erstgespräch mit dem Fylu Studio-Lead. 15 – 30 Minuten. Persönlich, unverbindlich — direkt Termin buchen oder per WhatsApp schreiben.',
	robots: { index: true, follow: true },
};

export default function BuchenPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BreadcrumbList',
						itemListElement: [
							{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
							{ '@type': 'ListItem', position: 2, name: 'Vorgespräch buchen', item: URL },
						],
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ContactPage',
						'@id': `${URL}#contactpage`,
						url: URL,
						name: 'Kostenloses Erstgespräch buchen',
						description:
							'Kostenloses 15- bis 30-minütiges Erstgespräch direkt mit dem Fylu Studio-Lead. Persönlich, unverbindlich, ohne Verkaufsdruck. Terminbuchung online oder per WhatsApp.',
						inLanguage: 'de-DE',
						isPartOf: { '@id': `${SITE}/#website` },
						about: { '@id': `${SITE}/#organization` },
						speakable: {
							'@type': 'SpeakableSpecification',
							cssSelector: ['h1', '[data-speakable]'],
						},
						mainEntity: {
							'@type': 'Organization',
							'@id': `${SITE}/#organization`,
							contactPoint: [
								{
									'@type': 'ContactPoint',
									contactType: 'sales',
									telephone: '+4915168488999',
									email: 'kontakt@fylumarketing.de',
									areaServed: ['DE', 'AT', 'CH'],
									availableLanguage: ['de', 'en'],
									contactOption: 'TollFree',
								},
							],
						},
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Service',
						'@id': `${URL}#erstgespraech`,
						name: 'Kostenloses Erstgespräch (Fylu Studio)',
						description:
							'Fünfzehn- bis dreißigminütiges Vorgespräch mit Studio-Lead Fynn Schulz. Wir hören zu, ordnen das Vorhaben ein, skizzieren Rahmen und nächste Schritte. Unverbindlich, kostenfrei.',
						serviceType: 'Erstberatung / Discovery Call',
						provider: { '@id': `${SITE}/#organization` },
						areaServed: [
							{ '@type': 'State', name: 'Saarland' },
							{ '@type': 'Country', name: 'Deutschland' },
						],
						offers: {
							'@type': 'Offer',
							price: '0',
							priceCurrency: 'EUR',
							availability: 'https://schema.org/InStock',
							url: URL,
						},
					}),
				}}
			/>
			<BuchenClient />
		</>
	);
}
