'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact';
import { trackEvent, readUtmFromSession } from '@/lib/track';

const ease = [0.22, 1, 0.36, 1] as const;

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function BuchenClient() {
	const [state, setState] = useState<FormState>('idle');
	const [errorMessage, setErrorMessage] = useState('');
	const [formStarted, setFormStarted] = useState(false);
	const successRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (state === 'success' && successRef.current) {
			successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
			trackEvent('form_success', { location: 'buchen' });
		}
	}, [state]);

	function onFieldFocus() {
		if (!formStarted) {
			setFormStarted(true);
			trackEvent('form_start', { location: 'buchen' });
		}
	}

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (state === 'sending') return;

		const form = e.currentTarget;
		const fd = new FormData(form);

		const firmName = String(fd.get('firmName') || '').trim();
		const contactName = String(fd.get('contactName') || '').trim();
		const email = String(fd.get('email') || '').trim();
		const phone = String(fd.get('phone') || '').trim();
		const nachricht = String(fd.get('nachricht') || '').trim();
		const consent = fd.get('consent') === 'on';

		if (!contactName || !nachricht) {
			setState('error');
			setErrorMessage('Bitte Name und Nachricht ausfüllen.');
			return;
		}
		if (!email && !phone) {
			setState('error');
			setErrorMessage('Bitte hinterlegen Sie eine E-Mail oder eine Telefonnummer.');
			return;
		}
		if (!consent) {
			setState('error');
			setErrorMessage('Bitte bestätigen Sie die Datenschutzerklärung.');
			return;
		}

		setState('sending');
		trackEvent('form_submit', { location: 'buchen' });
		setErrorMessage('');

		const utm = readUtmFromSession();
		const utmLine = utm
			? `\n\nQuelle: ${Object.entries(utm)
					.map(([k, v]) => `${k}=${v}`)
					.join(' · ')}`
			: '';

		const message = ['Anfrage von /buchen', '', nachricht, utmLine]
			.filter(Boolean)
			.join('\n');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					firmName,
					contactName,
					email: email || undefined,
					phone,
					projectType: 'Erstgespraech Anfrage (/buchen)',
					message,
				}),
			});

			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				setState('error');
				setErrorMessage(
					(data && typeof data.error === 'string' && data.error) ||
						'Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de.',
				);
				return;
			}

			setState('success');
			form.reset();
		} catch {
			setState('error');
			setErrorMessage(
				'Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de.',
			);
		}
	}

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
						<span>Kostenloses Erstgespräch · 15 bis 30 Minuten</span>
					</div>
					<h1 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] font-semibold tracking-[-0.035em] leading-[1.04]">
						Ein Gespräch,{' '}
						<span className="font-display italic font-normal text-cyan-300">
							keine Verkaufspräsentation.
						</span>
					</h1>
					<p className="mt-8 text-base sm:text-lg md:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
						Erzählen Sie kurz, was Sie vorhaben. Wir hören zu, bevor wir
						antworten. Persönliche Rückmeldung binnen 24 Stunden, direkt
						von Ihrem Ansprechpartner, nicht aus einer Hotline.
					</p>
					<div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
						<a
							href={`tel:${PHONE_TEL}`}
							onClick={() => trackEvent('cta_click', { location: 'buchen_hero', label: 'anrufen', destination: 'tel' })}
							className="group inline-flex items-center justify-center gap-2 bg-white text-[var(--ink)] font-semibold px-7 py-4 rounded-full shadow-lg hover:bg-cyan-50 transition-all min-h-[52px]"
						>
							<svg className="w-4 h-4 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
							</svg>
							<span>Jetzt anrufen</span>
							<span className="hidden sm:inline text-stone-500 font-normal">{PHONE_DISPLAY}</span>
						</a>
						<a
							href={WHATSAPP_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Per WhatsApp schreiben"
							onClick={() => trackEvent('cta_click', { location: 'buchen_hero', label: 'whatsapp', destination: 'whatsapp' })}
							className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-7 py-4 rounded-full shadow-lg transition-all min-h-[52px]"
						>
							<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
								<path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
							</svg>
							<span>WhatsApp</span>
						</a>
						<a
							href="#kontakt-formular"
							onClick={() => trackEvent('cta_click', { location: 'buchen_hero', label: 'formular', destination: 'kontakt_formular' })}
							className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-4 rounded-full transition-all min-h-[52px]"
						>
							<span>Formular</span>
							<span className="text-cyan-300">↓</span>
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
					id="kontakt-formular"
					className="scroll-mt-24"
				>
					<div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-[0_30px_80px_-24px_rgba(12,14,16,0.18)]">
						<div className="flex items-center justify-between px-4 sm:px-5 md:px-7 py-3 md:py-4 border-b border-stone-200/70 bg-white">
							<div className="flex items-center gap-3">
								<span className="inline-flex w-1.5 h-1.5 rounded-full bg-cyan-500" aria-hidden />
								<span className="text-[10px] font-medium tracking-[0.28em] sm:tracking-[0.32em] uppercase text-stone-500">
									Kontaktformular
								</span>
							</div>
							<span className="hidden md:inline text-[10px] font-mono tracking-[0.22em] text-stone-400">
								antwort · in 24h
							</span>
						</div>

						{state === 'success' ? (
							<div ref={successRef} className="p-10 md:p-14 text-center">
								<div className="hairline-rule w-16 mx-auto mb-6" />
								<div className="font-display italic text-2xl md:text-3xl text-[var(--cyan-deep)] mb-3">
									Danke.
								</div>
								<p className="text-stone-700 leading-relaxed max-w-md mx-auto">
									Ihre Anfrage ist angekommen. Sie hören persönlich von uns, meist
									innerhalb von 24 Stunden.
								</p>
								<div className="mt-8 flex flex-wrap justify-center gap-3">
									<a
										href={`tel:${PHONE_TEL}`}
										onClick={() => trackEvent('cta_click', { location: 'buchen_success', label: 'anrufen', destination: 'tel' })}
										className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-5 py-3 text-[14px] font-semibold transition-colors"
									>
										<svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
										</svg>
										<span>Anrufen</span>
									</a>
									<a
										href={WHATSAPP_URL}
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => trackEvent('cta_click', { location: 'buchen_success', label: 'whatsapp', destination: 'whatsapp' })}
										className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-3 text-[14px] font-semibold transition-colors"
									>
										<svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
											<path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
										</svg>
										<span>WhatsApp</span>
									</a>
								</div>
							</div>
						) : (
							<form onSubmit={onSubmit} noValidate className="p-6 md:p-8 grid gap-5">
								<div className="grid md:grid-cols-2 gap-5">
									<BuchenField
										label="Unternehmen (optional)"
										name="firmName"
										autoComplete="organization"
										onFocus={onFieldFocus}
									/>
									<BuchenField
										label="Name"
										name="contactName"
										required
										autoComplete="name"
										onFocus={onFieldFocus}
									/>
								</div>
								<div className="grid md:grid-cols-2 gap-5">
									<BuchenField
										label="E-Mail"
										name="email"
										type="email"
										autoComplete="email"
										onFocus={onFieldFocus}
									/>
									<BuchenField
										label="Telefon"
										name="phone"
										type="tel"
										autoComplete="tel"
										onFocus={onFieldFocus}
									/>
								</div>
								<label className="block">
									<span className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-3">
										Ihre Nachricht <span className="text-[var(--cyan-deep)]">*</span>
									</span>
									<textarea
										name="nachricht"
										rows={5}
										required
										onFocus={onFieldFocus}
										placeholder="Kurz Ihr Vorhaben, Ihre Ausgangslage oder Ihre Frage."
										className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-colors resize-y"
									/>
								</label>

								<label className="flex items-start gap-3 text-[13px] text-stone-600 leading-relaxed">
									<input
										type="checkbox"
										name="consent"
										required
										className="mt-1 h-4 w-4 rounded border-stone-300 text-[var(--ink)] focus:ring-cyan-600"
									/>
									<span>
										Ich habe die{' '}
										<Link
											href="/datenschutz"
											className="underline decoration-stone-400 underline-offset-2 hover:text-stone-900"
										>
											Datenschutzerklärung
										</Link>{' '}
										zur Kenntnis genommen.
									</span>
								</label>

								{state === 'error' && errorMessage ? (
									<div className="rounded-xl bg-red-50 border border-red-200 text-red-800 text-[13px] px-4 py-3">
										{errorMessage}
									</div>
								) : null}

								<div className="pt-2 flex flex-wrap items-center gap-4">
									<button
										type="submit"
										disabled={state === 'sending'}
										className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] hover:bg-black text-white px-8 py-4 text-[15px] font-semibold transition-all shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] disabled:opacity-60 disabled:cursor-not-allowed"
									>
										<span>
											{state === 'sending' ? 'Wird gesendet…' : 'Anfrage senden'}
										</span>
										{state === 'sending' ? null : (
											<span className="text-cyan-400 transition-transform group-hover:translate-x-0.5">→</span>
										)}
									</button>
									<a
										href={`tel:${PHONE_TEL}`}
										onClick={() => trackEvent('cta_click', { location: 'buchen_form', label: 'anrufen', destination: 'tel' })}
										className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--ink)] hover:text-[var(--cyan-deep)] transition-colors"
									>
										<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.798a2 2 0 01-.45 1.838L8.09 10.91a16.001 16.001 0 006 6l1.76-1.38a2 2 0 011.838-.45l2.798.7A2 2 0 0121 17.72V20a2 2 0 01-2 2h-1C9.716 22 2 14.284 2 5V4z" />
										</svg>
										<span>Lieber anrufen? {PHONE_DISPLAY}</span>
									</a>
								</div>
								<p className="text-[12px] text-stone-500">
									Kostenlos und unverbindlich. Wir melden uns persönlich.
								</p>
							</form>
						)}
					</div>
				</motion.div>

				<p className="mt-8 text-center text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
					Lieber direkt sprechen?{' '}
					<a
						href={`tel:${PHONE_TEL}`}
						onClick={() => trackEvent('cta_click', { location: 'buchen_footer', label: 'anrufen', destination: 'tel' })}
						className="text-[var(--cyan-deep)] hover:text-[var(--ink)] font-semibold underline underline-offset-4 transition-colors"
					>
						{PHONE_DISPLAY} anrufen
					</a>
					{' oder '}
					<a
						href={WHATSAPP_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--cyan-deep)] hover:text-[var(--ink)] font-semibold underline underline-offset-4 transition-colors"
					>
						per WhatsApp schreiben
					</a>
					. Antwort meist in unter 30 Minuten.
				</p>
			</section>
		</div>
	);
}

function BuchenField({
	label,
	name,
	type = 'text',
	required,
	placeholder,
	autoComplete,
	onFocus,
}: {
	label: string;
	name: string;
	type?: string;
	required?: boolean;
	placeholder?: string;
	autoComplete?: string;
	onFocus?: () => void;
}) {
	return (
		<label className="block">
			<span className="block text-[11px] uppercase tracking-[0.22em] text-stone-500 font-medium mb-3">
				{label}
				{required ? <span className="text-[var(--cyan-deep)]"> *</span> : null}
			</span>
			<input
				type={type}
				name={name}
				required={required}
				placeholder={placeholder}
				autoComplete={autoComplete}
				onFocus={onFocus}
				className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-[15px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-colors"
			/>
		</label>
	);
}
