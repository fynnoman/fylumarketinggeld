import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const smoothEase = [0.22, 1, 0.36, 1] as const;

const faqs = [
	{
		q: 'Was kostet eine Website bei Fylu?',
		a: 'Signature ab 3.490 €, Atelier ab 6.490 €, Maison ab 9.190 €. Diese Preise sind Ausgangspunkte — der endgültige Rahmen entsteht im Vorgespräch. Für einen schlanken Refresh der bestehenden Präsenz: ab 890 €.',
	},
	{
		q: 'Wie lange dauert die Erstellung?',
		a: 'Signature-Projekte in etwa zwei bis vier Wochen. Atelier und Maison vier bis sechs Wochen. Nach Live-Gang folgen bis zu sechs Monate Studio-Begleitung mit Iteration.',
	},
	{
		q: 'Kann ich Inhalte selbst ändern?',
		a: 'Ja, auf Wunsch richten wir ein Content-Management-System ein, mit dem Sie Texte und Bilder selbst aktualisieren können. Alternativ übernehmen wir Änderungen für Sie — schnell, unkompliziert und zu fairen Stundensätzen.',
	},
	{
		q: 'Was brauche ich um loszulegen?',
		a: 'Eigentlich nur 15 Minuten Ihrer Zeit für ein kurzes Gespräch. Wir brauchen ein Verständnis für Ihr Geschäft, Ihre Zielgruppe und Ihre Wünsche. Texte, Bilder und alles weitere können wir gemeinsam erarbeiten oder wir übernehmen die Erstellung für Sie.',
	},
	{
		q: 'Ist ein Online-Shop möglich?',
		a: 'Ja, wir können E-Commerce-Funktionalität in Ihre Website integrieren. Von einfachen Produktseiten bis zu vollständigen Online-Shops mit Warenkorb und Bezahlung — alles ist möglich. Sprechen Sie uns einfach an und wir finden die passende Lösung.',
	},
	{
		q: 'Kümmern Sie sich auch um Hosting und Domain?',
		a: 'Ja, wir kümmern uns um alles Technische. Domain-Registrierung, Hosting-Setup, SSL-Zertifikat, E-Mail-Einrichtung — Sie müssen sich um nichts kümmern. Je nach Paket sind 2 bis 4 Monate Hosting bereits inklusive.',
	},
];

export default function WebsiteErstellenLassenPage() {
	return (
		<main>
			<Navbar />

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BreadcrumbList',
						itemListElement: [
							{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fylumarketing.de' },
							{ '@type': 'ListItem', position: 2, name: 'Website erstellen lassen', item: 'https://www.fylumarketing.de/website-erstellen-lassen' },
						],
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'FAQPage',
						mainEntity: faqs.map((f) => ({
							'@type': 'Question',
							name: f.q,
							acceptedAnswer: { '@type': 'Answer', text: f.a },
						})),
					}),
				}}
			/>

			{/* Breadcrumb */}
			<div className="bg-stone-50 border-b border-stone-200">
				<div className="max-w-7xl mx-auto px-6 py-3 pt-20">
					<nav className="text-sm text-stone-500">
						<Link href="/" className="hover:text-cyan-500 transition-colors">Home</Link>
						<span className="mx-2">/</span>
						<span className="text-stone-900 font-medium">Website erstellen lassen</span>
					</nav>
				</div>
			</div>

			{/* Hero */}
			<section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
				<div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
				<div className="max-w-4xl mx-auto relative z-10">
					<FadeInSection>
						<div className="editorial-eyebrow mb-6">
							<span>Fylu Studio · Websites</span>
						</div>
					</FadeInSection>
					<FadeInSection delay={0.08}>
						<h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
							Website erstellen lassen —{' '}
							<span className="font-display italic font-normal text-[var(--cyan-deep)]">
								editorial statt Template.
							</span>
						</h1>
					</FadeInSection>
					<FadeInSection delay={0.16}>
						<p className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-3xl">
							Ein Fylu-Auftritt ist keine Baukasten-Seite. Als{' '}
							<Link href="/webdesign-saarland" className="text-cyan-700 font-medium hover:underline underline-offset-4">Editorial-Studio aus Saarlouis</Link>{' '}
							bauen wir Websites mit Handschrift — für Selbstständige,{' '}
							<Link href="/webdesign-handwerk" className="text-cyan-700 font-medium hover:underline underline-offset-4">Handwerker</Link>,
							Kanzleien, Praxen und Dienstleister, die einen Auftritt mit
							Substanz suchen. Ab 3.490 €.
						</p>
					</FadeInSection>
					<FadeInSection delay={0.24}>
						<div className="mt-10 flex flex-col sm:flex-row gap-3">
							<Link
								href="/buchen"
								className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)] hover:-translate-y-[1px]"
							>
								<span>Vorgespräch buchen</span>
								<span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5">→</span>
							</Link>
							<Link
								href="/webdesign-saarland"
								className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
							>
								<span>Alle Pakete</span>
							</Link>
						</div>
					</FadeInSection>
				</div>
			</section>

			{/* Warum professionell */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<FadeInSection>
						<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
							Warum Sie Ihre Website professionell erstellen lassen sollten
						</h2>
					</FadeInSection>
					<FadeInSection delay={0.08} className="prose prose-lg prose-stone max-w-none">
						<p>
							Vielleicht haben Sie mit dem Gedanken gespielt, Ihre Website selbst zu bauen — mit Wix, Jimdo oder einem WordPress-Theme. Das klingt verlockend: wenig Kosten, alles selbst in der Hand. Doch die Realität sieht anders aus. Baukasten-Websites sind bei Google praktisch unsichtbar. Die Ladezeiten sind langsam, die SEO-Möglichkeiten stark eingeschränkt und das Design sieht wie tausend andere Seiten aus. Was anfangs günstig wirkt, wird langfristig teurer: Monatsgebühren summieren sich, Premium-Features kosten extra und die Zeit, die Sie investieren, fehlt Ihrem Kerngeschäft.
						</p>
						<p>
							Eine professionell erstellte Website hingegen ist eine Investition, die sich bezahlt macht. Sie wird für Ihr Unternehmen maßgeschneidert, rankt bei Google, lädt blitzschnell und verwandelt Besucher in Kunden. Statt Stunden mit einem Baukasten zu kämpfen, investieren Sie 15 Minuten in ein Gespräch mit uns — und erhalten eine Website, die tatsächlich funktioniert. Unsere Kunden berichten regelmäßig von einer Verdopplung bis Vervierfachung ihrer Online-Anfragen nach dem Website-Relaunch.
						</p>
					</FadeInSection>
				</div>
			</section>

			{/* Kosten */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						Was kostet es eine Website erstellen zu lassen?
					</h2>
					<div className="prose prose-lg prose-stone max-w-none mb-10">
						<p>
							Transparenz ist uns wichtig. Deshalb gibt es bei uns keine versteckten Kosten und keine bösen Überraschungen. Der Preis Ihrer Website hängt von drei Faktoren ab: der Anzahl der Seiten, den gewünschten Funktionen und dem Umfang der SEO-Optimierung. Hier ist ein ehrlicher Überblick unserer Pakete:
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-6 mb-10">
						{[
							{ name: 'Basismodell', price: 'Auf Anfrage', desc: 'Bis 3 Seiten, mobiloptimiert, SEO-Basis, Kontaktformular, 1 Korrekturschleife. Perfekt für den Start.' },
							{ name: 'Fortgeschritten', price: 'Auf Anfrage', desc: 'Bis 6 Seiten, verkaufsoptimiert, erweiterte SEO, Google Business, 2 Monate Hosting inklusive.', highlight: true },
							{ name: 'Professionell', price: 'Auf Anfrage', desc: 'Unbegrenzte Seiten, Premium-Design, intensives SEO, Conversion-Tuning, 4 Monate Hosting inklusive.' },
						].map((pkg, i) => (
							<div key={i} className={`p-6 rounded-xl border ${pkg.highlight ? 'border-cyan-500 bg-cyan-50' : 'border-stone-200 bg-white'}`}>
								<h3 className="text-lg font-bold text-stone-900 mb-1">{pkg.name}</h3>
								<p className="text-3xl font-extrabold text-cyan-600 mb-3">{pkg.price}</p>
								<p className="text-stone-600 text-sm">{pkg.desc}</p>
							</div>
						))}
					</div>
					<p className="text-stone-600">
						Individuelle Lösungen mit E-Commerce, Buchungssystemen oder besonderen Anforderungen erhalten ein maßgeschneidertes Angebot. <Link href="/buchen" className="text-cyan-500 font-semibold hover:text-cyan-700">Alle Details ansehen.</Link>
					</p>
				</div>
			</section>

			{/* Prozess */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Unser Prozess — In 4 Schritten zu Ihrer neuen Website
					</h2>
					<div className="space-y-10">
						{[
							{ title: 'Kurzes Briefing', text: 'In einem 15-minütigen Gespräch lernen wir uns kennen. Wir verstehen Ihr Geschäft, Ihre Zielgruppe und Ihre Wünsche. Kein Papierkram, kein Aufwand für Sie.' },
							{ title: 'Kostenloser Entwurf in 24h', text: 'Innerhalb eines Tages erhalten Sie einen ersten Design-Entwurf — kostenlos und unverbindlich. So sehen Sie sofort, wie Ihre neue Website aussehen könnte, bevor Sie sich entscheiden.' },
							{ title: 'Umsetzung & Optimierung', text: 'Nach Ihrem Feedback bauen wir die komplette Website: responsives Design, schnelle Ladezeiten, SEO-Optimierung, Rechtstexte, Kontaktformular — alles inklusive. Zeitrahmen: 2 bis 3 Wochen.' },
							{ title: 'Launch & Support', text: 'Ihre Website geht live. Wir kümmern uns um Hosting, Domain und alles Technische. Und danach? Bleiben wir Ihr Ansprechpartner für Änderungen und Updates.' },
						].map((step, i) => (
							<div key={i} className="relative pl-12">
								<div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
								<h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
								<p className="text-stone-600 leading-relaxed">{step.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Was enthalten ist */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						Was in jeder Website enthalten ist
					</h2>
					<div className="prose prose-lg prose-stone max-w-none">
						<p>
							Unabhängig vom gewählten Paket ist jede Website mit den wichtigsten Grundlagen ausgestattet: Responsive Design für perfekte Darstellung auf allen Geräten, <Link href="/seo-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">SEO-Grundoptimierung</Link> damit Google Ihre Seite findet, rechtssichere Texte für Impressum und Datenschutz, SSL-Verschlüsselung für sichere Verbindungen, ein professionelles Kontaktformular für Anfragen, optimierte Ladezeiten unter 3 Sekunden und auf Wunsch Google Analytics Anbindung zur Erfolgsmessung. Für noch schnellere Ergebnisse empfehlen wir ergänzend <Link href="/google-ads-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">Google Ads</Link>. Jede Website wird individuell für Ihr Unternehmen gestaltet — keine Templates, kein Einheitsbrei.
						</p>
					</div>
				</div>
			</section>

			{/* Für wen */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						Für wen ist das richtig?
					</h2>
					<div className="prose prose-lg prose-stone max-w-none">
						<p>
							Unsere Websites sind ideal für Handwerker, die online Aufträge gewinnen wollen, für Ärzte und Therapeuten die neue Patienten ansprechen, für Restaurants und Cafés die Reservierungen steigern möchten, für Coaches und Berater die sich professionell positionieren wollen, für Einzelhändler die ihre lokale Sichtbarkeit erhöhen und für Dienstleister jeder Art, die eine professionelle Online-Präsenz brauchen. Kurz gesagt: Für jeden, der mit seiner Website Kunden gewinnen will — statt nur eine digitale Visitenkarte zu haben.
						</p>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Häufige Fragen
					</h2>
					<div className="space-y-6">
						{faqs.map((faq, i) => (
							<FadeInSection key={i} delay={i * 0.06} className="bg-stone-50 p-6 rounded-xl border border-stone-200">
								<h3 className="text-lg font-bold text-stone-900 mb-2">{faq.q}</h3>
								<p className="text-stone-600 leading-relaxed">{faq.a}</p>
							</FadeInSection>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-3xl mx-auto text-center">
					<div className="hairline-rule w-24 mx-auto mb-8" />
					<h2 className="text-[2rem] md:text-[2.6rem] font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.05] mb-6">
						Bereit für einen{' '}
						<span className="font-display italic font-normal text-[var(--cyan-deep)]">
							Auftritt, der bleibt?
						</span>
					</h2>
					<p className="text-lg text-stone-600 mb-8 leading-relaxed">
						Fünfzehn Minuten Vorgespräch. Wir hören zu, bevor wir antworten.
					</p>
					<Link
						href="/buchen"
						className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)]"
					>
						<span>Vorgespräch buchen</span>
						<span className="text-cyan-400">→</span>
					</Link>
					<div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">
						<Link href="/webdesign-saarland" className="hover:text-cyan-700 transition-colors">Studio-Übersicht</Link>
						<span className="text-stone-300">·</span>
						<Link href="/seo-saarland" className="hover:text-cyan-700 transition-colors">SEO</Link>
						<span className="text-stone-300">·</span>
						<Link href="/webdesign-handwerk" className="hover:text-cyan-700 transition-colors">Handwerk</Link>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
