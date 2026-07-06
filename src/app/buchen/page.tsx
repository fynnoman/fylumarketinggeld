import type { Metadata } from 'next';
import AngeboteForm from '@/components/AngeboteForm';

export const metadata: Metadata = {
	title: 'Vorgespräch buchen · Fylu Studio Saarlouis',
	description:
		'Fünfzehn Minuten Vorgespräch mit dem Fylu Studio-Lead. Persönliche Rückmeldung binnen 24 Stunden — vom Studio, nicht aus einer Hotline.',
	robots: { index: true, follow: true },
};

export default function BuchenPage() {
	return (
		<div className="min-h-screen bg-[var(--background-warm)]">
			<header className="relative bg-[var(--ink)] text-white py-24 sm:py-28 px-5 sm:px-6 overflow-hidden isolate">
				<div className="absolute inset-0 -z-10">
					<div
						className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw]"
						style={{
							background:
								'radial-gradient(50% 50% at 50% 0%, rgba(6,182,212,0.25), transparent 70%)',
						}}
					/>
					<div className="noise-overlay opacity-40 mix-blend-overlay" />
				</div>
				<div className="max-w-4xl mx-auto text-center relative z-10">
					<div className="hairline-rule w-24 mx-auto mb-8" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }} />
					<div className="editorial-eyebrow-inverse justify-center mb-7">
						<span>Vorgespräch · 15 Minuten</span>
					</div>
					<h1 className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] font-semibold tracking-[-0.035em] leading-[1.02]">
						Ein Gespräch —{' '}
						<span className="font-display italic font-normal text-cyan-300">
							keine Verkaufspräsentation.
						</span>
					</h1>
					<p className="mt-8 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
						Erzählen Sie kurz, was Sie vorhaben. Wir hören zu, bevor wir
						antworten. Persönliche Rückmeldung binnen 24 Stunden — vom
						Studio-Lead, nicht aus einer Hotline.
					</p>
					<div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
						<a
							href="tel:+4915168488999"
							className="inline-flex items-center justify-center gap-2 bg-white text-[var(--ink)] font-semibold px-7 py-4 rounded-full shadow-lg hover:bg-cyan-50 transition-all min-h-[52px]"
						>
							<svg className="w-4 h-4 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
							</svg>
							<span>+49 151 684 88999</span>
						</a>
						<a
							href="mailto:kontakt@fylumarketing.de"
							className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-4 rounded-full border border-white/15 backdrop-blur-sm transition-all min-h-[52px]"
						>
							<span>Direkt schreiben</span>
							<span className="text-cyan-300">↗</span>
						</a>
					</div>
				</div>
			</header>

			<AngeboteForm />
		</div>
	);
}
