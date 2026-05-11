import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const smoothEase = [0.22, 1, 0.36, 1] as const;

const faqs = [
	{
		q: 'Was kostet eine professionelle Website im Saarland?',
		a: 'Eine professionelle Website bei Fylu beginnt ab 990€ für das Basismodell mit bis zu 3 Seiten. Das Fortgeschrittene Paket kostet 1.490€ und enthält bis zu 6 Seiten mit Verkaufsoptimierung. Individuelle Lösungen sind auf Anfrage möglich.',
	},
	{
		q: 'Wie lange dauert die Erstellung einer Website?',
		a: 'In der Regel ist Ihre Website innerhalb von 2 bis 4 Wochen fertig. Den ersten Entwurf erhalten Sie bereits innerhalb von 24 Stunden nach unserem Erstgespräch — kostenlos und unverbindlich.',
	},
	{
		q: 'Ist die Website auch für Smartphones optimiert?',
		a: 'Selbstverständlich. Jede Website wird mobile-first entwickelt, das heißt sie funktioniert auf allen Geräten einwandfrei — Smartphone, Tablet und Desktop. Das ist auch für Google-Rankings entscheidend.',
	},
	{
		q: 'Werde ich damit bei Google gefunden?',
		a: 'Ja. Jede Website enthält eine SEO-Basis-Optimierung mit OnPage-SEO, technischer Optimierung und Google Business Einrichtung. Für erweiterte Sichtbarkeit biete ich zusätzlich professionelle SEO-Betreuung an.',
	},
	{
		q: 'Was passiert nach dem Launch?',
		a: 'Nach dem Launch lasse ich Sie nicht allein. Je nach Paket erhalten Sie 2 bis 4 Monate Hosting inklusive. Darüber hinaus stehe ich Ihnen für Änderungen, Updates und Support zur Verfügung.',
	},
	{
		q: 'Kann ich die Website selbst bearbeiten?',
		a: 'Auf Wunsch richte ich ein Content-Management-System ein, mit dem Sie Texte und Bilder selbst aktualisieren können. Alternativ übernehme ich Änderungen für Sie — schnell und unkompliziert.',
	},
];

const steps = [
	{
		title: 'Erstgespräch',
		text: 'In einem kurzen, kostenlosen Gespräch lernen wir uns kennen. Ich verstehe Ihr Geschäft, Ihre Ziele und Ihre Wünsche. Kein Verkaufsdruck — nur ehrliche Beratung.',
	},
	{
		title: 'Kostenloser Entwurf in 24h',
		text: 'Innerhalb von 24 Stunden erhalten Sie einen ersten Design-Entwurf — kostenlos und unverbindlich. So sehen Sie sofort, wie Ihre neue Website aussehen könnte.',
	},
	{
		title: 'Design & Entwicklung',
		text: 'Nach Ihrem Feedback baue ich Ihre Website mit modernster Technik. Jede Seite wird für maximale Geschwindigkeit, Suchmaschinenoptimierung und Conversion optimiert.',
	},
	{
		title: 'SEO-Optimierung',
		text: 'Bevor Ihre Website live geht, optimiere ich sie für Google: Keyword-Integration, technisches SEO, Meta-Tags, Ladezeit-Optimierung und Google Business Einrichtung.',
	},
	{
		title: 'Launch & Support',
		text: 'Ihre Website geht live und ich bleibe Ihr Ansprechpartner. Hosting, Updates und Änderungen — alles aus einer Hand, ohne Agentur-Overhead.',
	},
];

export default function WebdesignSaarlandPage() {
	return (
		<main>
			<Navbar />

			{/* Breadcrumb Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BreadcrumbList',
						itemListElement: [
							{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fylumarketing.de' },
							{ '@type': 'ListItem', position: 2, name: 'Webdesign Saarland', item: 'https://www.fylumarketing.de/webdesign-saarland' },
						],
					}),
				}}
			/>

			{/* LocalBusiness Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'LocalBusiness',
						name: 'Fylu – Webdesign Saarland',
						description: 'Webdesign Agentur aus Saarlouis im Saarland. Professionelle Websites, SEO und Google Ads für lokale Unternehmen.',
						url: 'https://www.fylumarketing.de/webdesign-saarland',
						telephone: '+4915168488999',
						email: 'kontakt@fylumarketing.de',
						address: { '@type': 'PostalAddress', addressLocality: 'Saarlouis', addressRegion: 'Saarland', addressCountry: 'DE' },
						geo: { '@type': 'GeoCoordinates', latitude: 49.3133, longitude: 6.7525 },
						priceRange: '€€',
						areaServed: [{ '@type': 'State', name: 'Saarland' }, { '@type': 'Country', name: 'Deutschland' }],
					}),
				}}
			/>

			{/* FAQ Schema */}
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

			{/* Breadcrumb Nav */}
			<div className="bg-stone-50 border-b border-stone-200">
				<div className="max-w-7xl mx-auto px-6 py-3 pt-20">
					<nav className="text-sm text-stone-500">
						<Link href="/" className="hover:text-cyan-500 transition-colors">Home</Link>
						<span className="mx-2">/</span>
						<span className="text-stone-900 font-medium">Webdesign Saarland</span>
					</nav>
				</div>
			</div>

			{/* Hero */}
			<section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
				<div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
				<div className="max-w-4xl mx-auto relative z-10">
					<FadeInSection>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-6">
							Webdesign Saarland — Websites die Kunden bringen
						</h1>
					</FadeInSection>
					<FadeInSection delay={0.08}>
						<p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8 max-w-3xl">
							Ihr Unternehmen im Saarland verdient eine Website, die nicht nur gut aussieht, sondern auch Ergebnisse liefert. Als Webdesigner aus Saarlouis erstelle ich professionelle, suchmaschinenoptimierte Websites für Unternehmen in Saarbrücken, Merzig, Dillingen, Neunkirchen, St. Wendel und dem gesamten Saarland. Mein Ziel: Ihre Website wird zum wichtigsten Vertriebskanal Ihres Unternehmens. Ob <Link href="/webdesign-handwerk" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">Handwerksbetrieb</Link>, Dienstleister, Einzelhändler oder Gastronom — ich verstehe die Bedürfnisse lokaler Unternehmen und baue Websites, die bei Google gefunden werden und Besucher in Kunden verwandeln. Kein Template-Einheitsbrei, sondern individuelle Lösungen mit persönlicher Betreuung. Ab 990€, mit kostenlosem Entwurf in 24 Stunden. Sie möchten mehr erfahren? Lesen Sie, wie Sie Ihre <Link href="/website-erstellen-lassen" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">Website professionell erstellen lassen</Link> können.
						</p>
					</FadeInSection>
					<FadeInSection delay={0.15}>
						<Link
							href="/angebote"
							className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)] active:scale-[0.98] inline-block"
						>
							Kostenlosen Entwurf sichern
						</Link>
					</FadeInSection>
				</div>
			</section>

			{/* Warum professionelle Website */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<FadeInSection>
						<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						Warum eine professionelle Website im Saarland entscheidend ist
						</h2>
					</FadeInSection>
					<FadeInSection delay={0.08} className="prose prose-lg prose-stone max-w-none">
						<p>
							Die Realität ist ernüchternd: Über 75 Prozent der Nutzer beurteilen die Glaubwürdigkeit eines Unternehmens anhand seines Webdesigns. Wenn Ihre Website veraltet wirkt, nicht für Smartphones optimiert ist oder bei Google nicht auftaucht, verlieren Sie jeden Tag potenzielle Kunden — ohne es zu merken. Im Saarland konkurrieren Tausende lokale Unternehmen um die Aufmerksamkeit derselben Kunden. Der Handwerker mit der modernen Website bekommt den Auftrag. Das Restaurant mit der ansprechenden Online-Speisekarte bekommt die Reservierung. Der Dienstleister, der bei Google auf Seite 1 erscheint, bekommt den Anruf.
						</p>
						<p>
							Viele Unternehmen im Saarland haben entweder gar keine Website oder eine, die vor Jahren erstellt wurde und seitdem nicht aktualisiert wurde. Mobile Besucher — und das sind heute über 60 Prozent — sehen eine nicht-responsive Seite und springen sofort ab. Google bestraft langsame, veraltete Websites mit schlechten Rankings. Das Ergebnis: Ihre Konkurrenz wird gefunden, Sie nicht. Eine professionelle Website ist keine Ausgabe, sondern eine Investition, die sich durch mehr Anfragen, mehr Aufträge und mehr Umsatz schnell bezahlt macht.
						</p>
					</FadeInSection>
				</div>
			</section>

			{/* Prozess */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Mein Webdesign-Prozess — Von der Idee zur fertigen Website
					</h2>
					<div className="space-y-10">
						{steps.map((step, i) => (
							<div key={i} className="relative pl-12">
								<div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
									{i + 1}
								</div>
								<h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
								<p className="text-stone-600 leading-relaxed">{step.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Was meine Websites anders macht */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						Was meine Websites anders macht
					</h2>
					<div className="prose prose-lg prose-stone max-w-none">
						<p>
							Bei mir bekommen Sie keine Massenware. Als einzelner Webdesigner widme ich mich jedem Projekt mit voller Aufmerksamkeit — das merken meine Kunden. Jede Website wird von Grund auf für Ihr Unternehmen konzipiert, nicht aus einem Template zusammengeklickt. Mobile-first ist bei mir Standard, nicht optional. Jede Seite wird zuerst für Smartphones gestaltet und dann für größere Bildschirme erweitert. Das Ergebnis: Perfekte Darstellung auf allen Geräten und bessere Google-Rankings.
						</p>
						<p>
							<Link href="/seo-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700">SEO</Link> ist bei mir kein Zusatzpaket, sondern fester Bestandteil jeder Website. Von der Keyword-Recherche über technisches SEO bis zur Google Business Optimierung — Ihre Website wird von Anfang an so gebaut, dass Google sie liebt. Für noch mehr Sichtbarkeit biete ich auch professionelle <Link href="/google-ads-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700">Google Ads Kampagnen im Saarland</Link> an. Und das Beste: Sie haben einen persönlichen Ansprechpartner. Kein Ticketsystem, keine Warteschleife. Sie schreiben mir, ich antworte. So einfach ist das. Meine Preise sind fair und transparent — ab 990€ für eine professionelle Website, die tatsächlich Kunden bringt.
						</p>
					</div>
				</div>
			</section>

			{/* Pakete */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						Webdesign-Pakete für Unternehmen im Saarland
					</h2>
					<div className="grid md:grid-cols-3 gap-6 mb-10">
						{[
							{ name: 'Basismodell', price: '990€', pages: 'Bis 3 Seiten', desc: 'Perfekt für den Start: mobiloptimiert, SEO-Basis und Kontaktformular.' },
							{ name: 'Fortgeschritten', price: '1.490€', pages: 'Bis 6 Seiten', desc: 'Verkaufsoptimierte Struktur, erweiterte SEO und Google Business Optimierung.', highlight: true },
							{ name: 'Professionell', price: '2.490€', pages: 'Unbegrenzt', desc: 'Premium-Design, intensives Performance-Tuning und Conversion-Optimierung.' },
						].map((pkg, i) => (
							<div key={i} className={`p-6 rounded-xl border ${pkg.highlight ? 'border-cyan-500 bg-cyan-50' : 'border-stone-200 bg-white'}`}>
								<h3 className="text-lg font-bold text-stone-900 mb-1">{pkg.name}</h3>
								<p className="text-3xl font-extrabold text-cyan-600 mb-2">{pkg.price}</p>
								<p className="text-sm text-stone-500 mb-3">{pkg.pages}</p>
								<p className="text-stone-600 text-sm">{pkg.desc}</p>
							</div>
						))}
					</div>
					<Link
						href="/angebote"
						className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 active:scale-[0.98] inline-block"
					>
						Alle Pakete ansehen
					</Link>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Häufige Fragen zum Webdesign im Saarland
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
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
						Bereit für Ihre neue Website?
					</h2>
					<p className="text-lg text-stone-600 mb-8">
						Lassen Sie sich von einem kostenlosen Entwurf überzeugen — unverbindlich und innerhalb von 24 Stunden. Für Unternehmen im Saarland und ganz Deutschland.
					</p>
					<Link
						href="/angebote"
						className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all duration-200 hover:shadow-[0_16px_48px_rgba(6,182,212,0.3)] active:scale-[0.98] inline-block"
					>
						Kostenlosen Entwurf sichern
					</Link>
					<div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-stone-500">
						<Link href="/seo-saarland" className="hover:text-cyan-500 transition-colors">SEO Saarland</Link>
						<Link href="/website-erstellen-lassen" className="hover:text-cyan-500 transition-colors">Website erstellen lassen</Link>
						<Link href="/webdesign-handwerk" className="hover:text-cyan-500 transition-colors">Webdesign Handwerk</Link>
						<Link href="/google-ads-saarland" className="hover:text-cyan-500 transition-colors">Google Ads Saarland</Link>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
