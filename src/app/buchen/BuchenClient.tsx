'use client';

import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact';
import { trackEvent } from '@/lib/track';

export default function BuchenClient() {
	return (
		<div className="min-h-screen bg-stone-50">
			{/* Hero */}
			<header className="relative bg-[var(--ink)] text-white py-20 sm:py-24 md:py-28 px-5 sm:px-6 overflow-hidden isolate">
				<div aria-hidden className="absolute inset-0 -z-10">
					<div
						className="absolute inset-x-0 top-0 h-[60%]"
						style={{
							background:
								'radial-gradient(50% 50% at 50% 0%, rgba(6,182,212,0.25), transparent 70%)',
						}}
					/>
					<div className="noise-overlay opacity-40 mix-blend-overlay" />
				</div>
				<div className="max-w-4xl mx-auto text-center relative z-10">
					<div
						className="hairline-rule w-24 mx-auto mb-8"
						style={{
							backgroundImage:
								'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
						}}
					/>
					<div className="editorial-eyebrow-inverse justify-center mb-7">
						<span>Kostenloses Erstgespräch · 15 bis 30 Minuten</span>
					</div>
					<h1 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] font-semibold tracking-[-0.035em] leading-[1.04]">
						Ein Gespräch,{' '}
						<span className="font-display italic font-normal text-cyan-300">
							keine Verkaufspräsentation.
						</span>
					</h1>
					<p className="mt-8 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
						Rufen Sie an oder schreiben Sie uns per WhatsApp. Persönliche
						Rückmeldung binnen 24 Stunden, direkt von Ihrem Ansprechpartner,
						nicht aus einer Hotline.
					</p>
					<div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
						<a
							href={`tel:${PHONE_TEL}`}
							onClick={() =>
								trackEvent('cta_click', {
									location: 'buchen_hero',
									label: 'anrufen',
									destination: 'tel',
								})
							}
							className="group inline-flex items-center justify-center gap-2 bg-white text-[var(--ink)] font-semibold px-7 py-4 rounded-full shadow-lg hover:bg-cyan-50 transition-all min-h-[52px]"
						>
							<svg
								className="w-4 h-4 text-cyan-700"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2.2}
									d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z"
								/>
							</svg>
							<span>Jetzt anrufen</span>
							<span className="hidden sm:inline text-stone-500 font-normal">
								{PHONE_DISPLAY}
							</span>
						</a>
						<a
							href={WHATSAPP_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Per WhatsApp schreiben"
							onClick={() =>
								trackEvent('cta_click', {
									location: 'buchen_hero',
									label: 'whatsapp',
									destination: 'whatsapp',
								})
							}
							className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-7 py-4 rounded-full shadow-lg transition-all min-h-[52px]"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
								<path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
							</svg>
							<span>WhatsApp</span>
						</a>
					</div>
				</div>
			</header>

			{/* Alternative Kontaktwege */}
			<section className="max-w-4xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
				<div className="text-center mb-10 md:mb-14">
					<div className="editorial-eyebrow justify-center mb-6">
						<span>Direkter Draht</span>
					</div>
					<h2 className="text-3xl md:text-4xl font-semibold text-[var(--ink)] tracking-[-0.025em]">
						So erreichen Sie uns.
					</h2>
					<p className="mt-5 text-stone-600 leading-relaxed max-w-xl mx-auto">
						Kein Formular, keine Umwege. Ein Anruf, eine WhatsApp-Nachricht
						oder eine kurze E-Mail genügt.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-4 md:gap-5">
					<a
						href={`tel:${PHONE_TEL}`}
						onClick={() =>
							trackEvent('cta_click', {
								location: 'buchen_channels',
								label: 'anrufen',
								destination: 'tel',
							})
						}
						className="group block rounded-2xl border border-stone-200 bg-white p-6 md:p-7 hover:border-cyan-300 hover:shadow-[0_18px_40px_-20px_rgba(6,182,212,0.3)] transition-all"
					>
						<div className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-medium mb-3">
							Telefon
						</div>
						<div className="text-xl font-semibold text-[var(--ink)]">
							{PHONE_DISPLAY}
						</div>
						<div className="mt-3 text-sm text-stone-500">
							Montag bis Freitag, 9 bis 18 Uhr.
						</div>
					</a>

					<a
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
						onClick={() =>
							trackEvent('cta_click', {
								location: 'buchen_channels',
								label: 'whatsapp',
								destination: 'whatsapp',
							})
						}
						className="group block rounded-2xl border border-stone-200 bg-white p-6 md:p-7 hover:border-[#25D366]/60 hover:shadow-[0_18px_40px_-20px_rgba(37,211,102,0.3)] transition-all"
					>
						<div className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-medium mb-3">
							WhatsApp
						</div>
						<div className="text-xl font-semibold text-[var(--ink)]">
							Schnelle Rückmeldung
						</div>
						<div className="mt-3 text-sm text-stone-500">
							Antwort meist in unter 30 Minuten.
						</div>
					</a>

					<a
						href="mailto:kontakt@fylumarketing.de"
						onClick={() =>
							trackEvent('cta_click', {
								location: 'buchen_channels',
								label: 'email',
								destination: 'mailto',
							})
						}
						className="group block rounded-2xl border border-stone-200 bg-white p-6 md:p-7 hover:border-cyan-300 hover:shadow-[0_18px_40px_-20px_rgba(6,182,212,0.3)] transition-all"
					>
						<div className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-medium mb-3">
							E-Mail
						</div>
						<div className="text-lg font-semibold text-[var(--ink)] break-all">
							kontakt@fylumarketing.de
						</div>
						<div className="mt-3 text-sm text-stone-500">
							Antwort binnen 24 Stunden.
						</div>
					</a>
				</div>

				<div className="mt-14 text-center">
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-[var(--ink)] transition-colors"
					>
						<span>← Zurück zur Startseite</span>
					</Link>
				</div>
			</section>
		</div>
	);
}
