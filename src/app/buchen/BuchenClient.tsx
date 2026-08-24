'use client';

import Script from 'next/script';
import { motion } from 'framer-motion';
import { CALENDLY_EMBED_URL, WHATSAPP_URL } from '@/lib/contact';

const ease = [0.22, 1, 0.36, 1] as const;

export default function BuchenClient() {
	return (
		<div className="min-h-screen bg-[var(--background-warm)]">
			<header className="relative bg-[var(--ink)] text-white py-20 sm:py-24 md:py-28 px-5 sm:px-6 overflow-hidden isolate">
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
					<div
						className="hairline-rule w-24 mx-auto mb-8"
						style={{
							backgroundImage:
								'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
						}}
					/>
					<div className="editorial-eyebrow-inverse justify-center mb-7">
						<span>Kostenloses Erstgespräch · 15 – 30 Minuten</span>
					</div>
					<h1 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] font-semibold tracking-[-0.035em] leading-[1.04]">
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
							href="#calendly-embed"
							className="inline-flex items-center justify-center gap-2 bg-white text-[var(--ink)] font-semibold px-7 py-4 rounded-full shadow-lg hover:bg-cyan-50 transition-all min-h-[52px]"
						>
							<span>Termin wählen</span>
							<span className="text-cyan-700">↓</span>
						</a>
						<a
							href={WHATSAPP_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Per WhatsApp schreiben"
							className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-7 py-4 rounded-full shadow-lg transition-all min-h-[52px]"
						>
							<svg
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4"
								aria-hidden
							>
								<path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
							</svg>
							<span>WhatsApp</span>
						</a>
					</div>
				</div>
			</header>

			<section className="max-w-5xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-80px' }}
					transition={{ duration: 0.7, ease }}
					id="calendly-embed"
					className="scroll-mt-24"
				>
					<div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-[0_30px_80px_-24px_rgba(12,14,16,0.18)]">
						<div className="flex items-center justify-between px-4 sm:px-5 md:px-7 py-3 md:py-4 border-b border-stone-200/70 bg-white">
							<div className="flex items-center gap-3">
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-70 animate-ping" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
								</span>
								<span className="text-[10px] font-medium tracking-[0.28em] sm:tracking-[0.32em] uppercase text-stone-500">
									Verfügbar · Erstgespräch
								</span>
							</div>
							<span className="hidden md:inline text-[10px] font-mono tracking-[0.22em] text-stone-400">
								calendly · fylumarketing
							</span>
						</div>

						<div
							className="calendly-inline-widget"
							data-url={CALENDLY_EMBED_URL}
							style={{
								minWidth: '280px',
								height: 'clamp(680px, 90svh, 820px)',
								background: 'var(--background-warm)',
							}}
						/>
					</div>
				</motion.div>

				<p className="mt-8 text-center text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
					Kein passender Termin dabei?{' '}
					<a
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--cyan-deep)] hover:text-[var(--ink)] font-semibold underline underline-offset-4 transition-colors"
					>
						Schreiben Sie uns per WhatsApp
					</a>{' '}
					— Antwort meist in unter 30 Minuten.
				</p>
			</section>

			<Script
				src="https://assets.calendly.com/assets/external/widget.js"
				strategy="lazyOnload"
			/>
		</div>
	);
}
