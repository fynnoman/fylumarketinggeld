import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const faqs = [
	{
		q: 'Was kostet eine Website bei Fylu Marketing?',
		a: 'Jedes Projekt wird individuell auf Umfang, Zielsetzung und Funktionsbedarf zugeschnitten. Der endgültige Rahmen entsteht im Vorgespräch, transparent und ohne versteckte Kosten. Auch ein schlanker Refresh einer bestehenden Präsenz ist möglich.',
	},
	{
		q: 'Wie lange dauert die Umsetzung?',
		a: 'Kompakte Auftritte sind in etwa zwei bis vier Wochen live. Umfangreichere Projekte mit mehr Seiten, Funktionen oder redaktioneller Arbeit dauern vier bis sechs Wochen. Der genaue Zeitrahmen wird nach dem Vorgespräch verbindlich festgelegt.',
	},
	{
		q: 'Kann ich Inhalte selbst ändern?',
		a: 'Ja. Auf Wunsch richten wir ein Content-Management-System ein, mit dem Texte und Bilder selbst aktualisiert werden. Alternativ übernehmen wir Änderungen schnell und zu fairen Konditionen.',
	},
	{
		q: 'Was brauche ich, um loszulegen?',
		a: 'Rund 15 Minuten für ein kurzes Gespräch. Wir brauchen ein Verständnis für Ihr Geschäft, Ihre Zielgruppe und Ihre Ziele. Texte, Bilder und weitere Inhalte können wir gemeinsam erarbeiten oder vollständig übernehmen.',
	},
	{
		q: 'Ist ein Online-Shop möglich?',
		a: 'Ja. Von einfachen Produktseiten bis zu vollständigen Shops mit Warenkorb, Bezahlung und Versand ist alles möglich. Die passende Lösung klären wir im Vorgespräch.',
	},
	{
		q: 'Kümmern Sie sich auch um Hosting und Domain?',
		a: 'Ja. Wir übernehmen Domain-Registrierung, Hosting-Setup, SSL-Zertifikat und E-Mail-Einrichtung. Die technische Seite läuft vollständig über uns.',
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
						'@type': 'Service',
						'@id': 'https://www.fylumarketing.de/website-erstellen-lassen#service',
						name: 'Website erstellen lassen (Fylu Marketing)',
						description:
							'Individuell konzipierte Websites, die aus Besuchern Kunden machen. Für Unternehmen jeder Phase, vom ersten Auftritt bis zur Skalierung.',
						serviceType: 'Webdesign & Website-Erstellung',
						url: 'https://www.fylumarketing.de/website-erstellen-lassen',
						provider: { '@id': 'https://www.fylumarketing.de/#organization' },
						areaServed: [
							{ '@type': 'State', name: 'Saarland' },
							{ '@type': 'Country', name: 'Deutschland' },
						],
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						'@id': 'https://www.fylumarketing.de/website-erstellen-lassen#webpage',
						url: 'https://www.fylumarketing.de/website-erstellen-lassen',
						name: 'Website erstellen lassen · Fylu Marketing',
						description:
							'Website erstellen lassen bei Fylu Marketing aus Saarlouis. Individuell konzipiert, technisch sauber, auf Conversion ausgelegt.',
						inLanguage: 'de-DE',
						isPartOf: { '@id': 'https://www.fylumarketing.de/#website' },
						mainEntity: { '@id': 'https://www.fylumarketing.de/website-erstellen-lassen#service' },
						about: { '@type': 'Thing', name: 'Website-Erstellung' },
						speakable: {
							'@type': 'SpeakableSpecification',
							cssSelector: ['h1', '[data-speakable]'],
						},
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'FAQPage',
						inLanguage: 'de-DE',
						speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '[data-speakable]'] },
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
							<span>Fylu Marketing · Websites</span>
						</div>
					</FadeInSection>
					<FadeInSection delay={0.08}>
						<h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
							Website erstellen lassen.{' '}
							<span className="font-display italic font-normal text-[var(--cyan-deep)]">
								Aus Besuchern werden Kunden.
							</span>
						</h1>
					</FadeInSection>
					<FadeInSection delay={0.16}>
						<p className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-3xl">
							Fylu Marketing baut Websites, die aus Besuchern Kunden machen. Für Unternehmen jeder Phase, vom ersten Auftritt bis zur Skalierung. Als{' '}
							<Link href="/webdesign-saarland" className="text-cyan-700 font-medium hover:underline underline-offset-4">Agentur aus Saarlouis</Link>{' '}
							arbeiten wir mit Selbstständigen,{' '}
							<Link href="/webdesign-handwerk" className="text-cyan-700 font-medium hover:underline underline-offset-4">Handwerkern</Link>, Kanzleien, Praxen und Dienstleistern, die ihre Online-Präsenz messbar besser aufstellen wollen.
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
								href="/methodik"
								className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold text-[var(--ink)] bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300"
							>
								<span>Unsere Methodik</span>
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
							Warum eine professionelle Website
						</h2>
					</FadeInSection>
					<FadeInSection delay={0.08} className="prose prose-lg prose-stone max-w-none">
						<p>
							Baukasten-Systeme wie Wix, Jimdo oder generische WordPress-Themes wirken zunächst günstig. In der Praxis kosten sie Zeit, Ranking und Umsatz. Ladezeiten sind langsam, technische SEO-Möglichkeiten begrenzt, und das Design gleicht sich mit tausenden anderen Seiten. Monatliche Gebühren, Premium-Add-ons und der eigene Zeitaufwand summieren sich, während der Nutzen für das Kerngeschäft ausbleibt.
						</p>
						<p>
							Eine professionell erstellte Website ist eine Investition, die sich rechnet. Sie ist auf Ihr Unternehmen zugeschnitten, rankt bei Google, lädt schnell und ist auf Conversion ausgelegt. Statt Stunden im Baukasten investieren Sie 15 Minuten in ein Gespräch und erhalten eine Website, die tatsächlich Anfragen bringt. Unsere Kunden berichten regelmäßig von einer Verdopplung bis Vervierfachung ihrer Online-Anfragen nach dem Relaunch.
						</p>
					</FadeInSection>
				</div>
			</section>

			{/* Prozess */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Unser Prozess. In 4 Schritten zur neuen Website.
					</h2>
					<div className="space-y-10">
						{[
							{ title: 'Kurzes Briefing', text: 'In einem 15-minütigen Gespräch lernen wir Ihr Geschäft, Ihre Zielgruppe und Ihre Ziele kennen. Kein Papierkram, kein Aufwand.' },
							{ title: 'Kostenloser Entwurf in 24h', text: 'Innerhalb eines Tages erhalten Sie einen ersten Design-Entwurf, kostenlos und unverbindlich. Sie sehen sofort, wie Ihre neue Website aussehen kann, bevor Sie sich entscheiden.' },
							{ title: 'Umsetzung und Optimierung', text: 'Nach Ihrem Feedback bauen wir die komplette Website: responsives Design, schnelle Ladezeiten, SEO-Optimierung, Rechtstexte, Kontaktformular. Zeitrahmen typischerweise 2 bis 4 Wochen.' },
							{ title: 'Launch und Betreuung', text: 'Ihre Website geht live. Wir übernehmen Hosting, Domain und alles Technische. Danach bleiben wir Ansprechpartner für Änderungen, Updates und Weiterentwicklung.' },
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
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						Was in jeder Website enthalten ist
					</h2>
					<div className="prose prose-lg prose-stone max-w-none">
						<p>
							Unabhängig vom Umfang enthält jede Website die wichtigsten Grundlagen: responsives Design für saubere Darstellung auf allen Geräten, <Link href="/seo-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">SEO-Grundoptimierung</Link>, damit Google Ihre Seite findet, rechtssichere Texte für Impressum und Datenschutz, SSL-Verschlüsselung, ein professionelles Kontaktformular, Ladezeiten unter 3 Sekunden und auf Wunsch Google-Analytics-Anbindung zur Erfolgsmessung. Für schnellere Ergebnisse ergänzen wir bei Bedarf mit <Link href="/google-ads-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">Google Ads</Link>. Jede Website wird individuell für Ihr Unternehmen gestaltet, ohne Templates und ohne Einheitsbrei.
						</p>
					</div>
				</div>
			</section>

			{/* Für wen */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						Für wen ist das richtig?
					</h2>
					<div className="prose prose-lg prose-stone max-w-none">
						<p>
							Unsere Websites eignen sich für Handwerksbetriebe, die online Aufträge gewinnen wollen, für Ärzte und Therapeuten, die neue Patienten ansprechen, für Kanzleien, die Mandate qualifizieren, für Coaches und Berater, die sich professionell positionieren, für Einzelhändler, die ihre lokale Sichtbarkeit erhöhen, und für Dienstleister jeder Art, die eine belastbare Online-Präsenz brauchen. Kurz gesagt: für Unternehmen jeder Phase, die mit ihrer Website tatsächlich Kunden gewinnen wollen, statt nur eine digitale Visitenkarte zu haben.
						</p>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Häufige Fragen
					</h2>
					<div className="space-y-6">
						{faqs.map((faq, i) => (
							<FadeInSection key={i} delay={i * 0.06} className="bg-white p-6 rounded-xl border border-stone-200">
								<h3 className="text-lg font-bold text-stone-900 mb-2">{faq.q}</h3>
								<p className="text-stone-600 leading-relaxed">{faq.a}</p>
							</FadeInSection>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-3xl mx-auto text-center">
					<div className="hairline-rule w-24 mx-auto mb-8" />
					<h2 className="text-[2rem] md:text-[2.6rem] font-semibold text-[var(--ink)] tracking-[-0.03em] leading-[1.05] mb-6">
						Bereit für eine Website,{' '}
						<span className="font-display italic font-normal text-[var(--cyan-deep)]">
							die Kunden bringt?
						</span>
					</h2>
					<p className="text-lg text-stone-600 mb-8 leading-relaxed">
						Fünfzehn Minuten Vorgespräch. Wir hören zu, bevor wir konzipieren.
					</p>
					<Link
						href="/buchen"
						className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-[15px] font-semibold text-white bg-[var(--ink)] hover:bg-black transition-all duration-300 shadow-[0_14px_40px_-14px_rgba(12,14,16,0.55)]"
					>
						<span>Vorgespräch buchen</span>
						<span className="text-cyan-400">→</span>
					</Link>
					<div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-stone-500">
						<Link href="/webdesign-saarland" className="hover:text-cyan-700 transition-colors">Webdesign Saarland</Link>
						<span className="text-stone-300">·</span>
						<Link href="/methodik" className="hover:text-cyan-700 transition-colors">Methodik</Link>
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
