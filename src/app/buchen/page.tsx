import type { Metadata } from 'next';
import AngeboteForm from '@/components/AngeboteForm';

export const metadata: Metadata = {
	title: 'Anfrage senden | Fylu',
	description:
		'Sagen Sie uns kurz, was Sie vorhaben. Innerhalb von 24 Stunden bekommen Sie eine persönliche Rückmeldung von Fylu.',
	robots: { index: true, follow: true },
};

export default function BuchenPage() {
	return (
		<div className="min-h-screen bg-white">
			<header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-16 sm:py-20 px-5 sm:px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
						Anfrage senden
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-cyan-50 max-w-2xl mx-auto">
						Erzählen Sie kurz, was Sie vorhaben — Sie bekommen innerhalb von 24 Stunden eine persönliche Antwort.
					</p>
					<div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
						<a
							href="tel:+4915168488999"
							className="inline-flex items-center justify-center gap-2 bg-white text-cyan-700 font-bold px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all min-h-[48px]"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
							</svg>
							<span>+49 151 684 88999</span>
						</a>
						<a
							href="mailto:kontakt@fylumarketing.de"
							className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-full border border-white/30 transition-all min-h-[48px]"
						>
							Direkt schreiben
						</a>
					</div>
				</div>
			</header>

			<AngeboteForm />
		</div>
	);
}
