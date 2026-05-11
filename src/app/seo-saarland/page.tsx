import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const smoothEase = [0.22, 1, 0.36, 1] as const;

const faqs = [
	{
		q: 'Was kostet SEO im Saarland?',
		a: 'Die Kosten für SEO hängen vom Umfang und der Wettbewerbssituation ab. Eine einmalige SEO-Grundoptimierung ist in meinen Webdesign-Paketen ab 990€ enthalten. Laufende SEO-Betreuung mit monatlichem Reporting beginnt ab 300€ pro Monat.',
	},
	{
		q: 'Wie lange dauert es bis man Ergebnisse sieht?',
		a: 'SEO ist eine langfristige Strategie. Erste Verbesserungen in den Rankings sind oft nach 4 bis 8 Wochen sichtbar. Signifikante Ergebnisse — wie ein Sprung auf Seite 1 bei Google — dauern in der Regel 3 bis 6 Monate, abhängig von der Konkurrenz in Ihrer Branche.',
	},
	{
		q: 'Was ist der Unterschied zwischen SEO und Google Ads?',
		a: 'SEO verbessert Ihre organische (kostenlose) Sichtbarkeit bei Google langfristig. Google Ads sind bezahlte Anzeigen, die sofort sichtbar sind, aber laufende Kosten verursachen. Idealerweise kombiniert man beides: Ads für sofortige Ergebnisse, SEO für nachhaltigen Traffic. Mehr dazu erfahren Sie auf unserer Seite zu Google Ads im Saarland.',
	},
	{
		q: 'Brauche ich SEO wenn ich schon eine Website habe?',
		a: 'Eine Website ohne SEO ist wie ein Geschäft ohne Schild. Sie existiert, aber niemand findet sie. Wenn Ihre Website bei Google nicht auf Seite 1 erscheint, verpassen Sie täglich potenzielle Kunden. SEO sorgt dafür, dass Ihre bestehende Website gefunden wird.',
	},
	{
		q: 'Was ist Local SEO?',
		a: 'Local SEO optimiert Ihre Online-Präsenz speziell für lokale Suchanfragen. Wenn jemand „Friseur Saarbrücken" oder „Elektriker in meiner Nähe" googelt, sorgt Local SEO dafür, dass Ihr Unternehmen in den Ergebnissen und auf Google Maps erscheint.',
	},
	{
		q: 'Wie messe ich den Erfolg von SEO?',
		a: 'Ich richte Google Search Console und Analytics für Sie ein. So sehen Sie genau, wie viele Menschen Ihre Website über Google finden, für welche Suchbegriffe Sie ranken und wie sich Ihre Position über die Zeit verbessert. Sie erhalten regelmäßige, verständliche Reports.',
	},
];

const leistungen = [
	{
		title: 'OnPage SEO — Technik & Content',
		text: 'Ich optimiere Ihre Website von innen heraus: Seitentitel, Meta-Beschreibungen, Überschriftenstruktur, interne Verlinkung, Ladegeschwindigkeit und Core Web Vitals. Jede Seite wird so aufgebaut, dass Google sie versteht und belohnt. Dazu gehört auch die Erstellung von SEO-optimierten Texten, die sowohl für Suchmaschinen als auch für Ihre Besucher geschrieben sind.',
	},
	{
		title: 'Local SEO — Google Maps & regionale Sichtbarkeit',
		text: 'Für lokale Unternehmen im Saarland ist Local SEO entscheidend. Ich optimiere Ihren Google Business Eintrag, sorge für konsistente NAP-Daten (Name, Adresse, Telefon) und baue lokale Signale auf, damit Sie bei Suchanfragen wie „Handwerker Saarbrücken" oder „Restaurant Saarlouis" ganz oben erscheinen.',
	},
	{
		title: 'Google Business Optimierung',
		text: 'Ihr Google Business Profil ist oft der erste Kontaktpunkt mit potenziellen Kunden. Ich optimiere Ihr Profil vollständig: professionelle Beschreibung, richtige Kategorien, Öffnungszeiten, Fotos und eine Strategie für positive Bewertungen. So stechen Sie in der lokalen Suche hervor.',
	},
	{
		title: 'Keyword-Recherche & Content-Strategie',
		text: 'Ich recherchiere die Suchbegriffe, die Ihre Zielkunden tatsächlich verwenden. Basierend darauf entwickle ich eine Content-Strategie, die Ihre Website systematisch für die wichtigsten Keywords positioniert. Kein Raten — datenbasierte Entscheidungen für maximale Sichtbarkeit.',
	},
];

const prozessSteps = [
	{ title: 'SEO-Analyse', text: 'Ich analysiere Ihre aktuelle Website, Ihre Rankings, Ihre Konkurrenz und identifiziere die größten Chancen. Sie erhalten einen klaren Überblick über den Ist-Zustand.' },
	{ title: 'Keyword-Recherche', text: 'Ich finde die Suchbegriffe, die Ihre Zielkunden nutzen. Welche Keywords haben Volumen, sind erreichbar und führen zu Anfragen? Das wird die Basis der Optimierung.' },
	{ title: 'Optimierung', text: 'Technische Fehler werden behoben, Inhalte werden optimiert, Meta-Daten werden geschrieben und die Seitenstruktur wird für Google und Nutzer verbessert.' },
	{ title: 'Monitoring', text: 'Nach der Optimierung überwache ich die Rankings und den Traffic kontinuierlich. Was funktioniert, wird ausgebaut. Was nicht funktioniert, wird angepasst.' },
	{ title: 'Monatliches Reporting', text: 'Sie erhalten jeden Monat einen verständlichen Bericht: Wie haben sich Ihre Rankings entwickelt? Wie viele Besucher kommen über Google? Welche Maßnahmen stehen als nächstes an?' },
];

export default function SeoSaarlandPage() {
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
							{ '@type': 'ListItem', position: 2, name: 'SEO Saarland', item: 'https://www.fylumarketing.de/seo-saarland' },
						],
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'LocalBusiness',
						name: 'Fylu – SEO Saarland',
						description: 'SEO-Optimierung für lokale Unternehmen im Saarland. OnPage SEO, Local SEO und Google Business Optimierung.',
						url: 'https://www.fylumarketing.de/seo-saarland',
						telephone: '+4915168488999',
						email: 'kontakt@fylumarketing.de',
						address: { '@type': 'PostalAddress', addressLocality: 'Saarlouis', addressRegion: 'Saarland', addressCountry: 'DE' },
						priceRange: '€€',
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
						<span className="text-stone-900 font-medium">SEO Saarland</span>
					</nav>
				</div>
			</div>

			{/* Hero */}
			<section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
				<div className="max-w-4xl mx-auto relative z-10">
					<FadeInSection>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-6">
							SEO Saarland — Bei Google gefunden werden
						</h1>
					</FadeInSection>
					<FadeInSection delay={0.08}>
						<p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8 max-w-3xl">
							Ihre potenziellen Kunden suchen jeden Tag bei Google nach genau den Leistungen, die Sie anbieten. Wenn Ihr Unternehmen nicht auf Seite 1 erscheint, geht der Auftrag an die Konkurrenz. Als SEO-Spezialist aus Saarlouis helfe ich lokalen Unternehmen im Saarland, bei Google sichtbar zu werden — mit datenbasierter Suchmaschinenoptimierung, die nachweislich funktioniert. Ob Sie ein <Link href="/webdesign-handwerk" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">Handwerksbetrieb in Saarbrücken</Link>, ein Dienstleister in Merzig oder ein Restaurant in Dillingen sind: Ich sorge dafür, dass Ihre Kunden Sie finden, bevor sie Ihre Konkurrenz finden.
						</p>
					</FadeInSection>
					<FadeInSection delay={0.15}>
						<Link
							href="/angebote"
							className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all duration-200 hover:shadow-[0_12px_40px_rgba(6,182,212,0.3)] active:scale-[0.98] inline-block"
						>
							Kostenlose SEO-Analyse anfordern
						</Link>
					</FadeInSection>
				</div>
			</section>

			{/* Warum SEO */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<FadeInSection>
						<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
							Warum SEO für Unternehmen im Saarland so wichtig ist
						</h2>
					</FadeInSection>
					<FadeInSection delay={0.08} className="prose prose-lg prose-stone max-w-none">
						<p>
							Stellen Sie sich vor: Ein Hausbesitzer in Saarbrücken hat einen Rohrbruch. Was tut er? Er greift zum Smartphone und googelt „Klempner Saarbrücken Notdienst". Innerhalb von Sekunden hat er drei Firmen gefunden und die erste angerufen. Wenn Sie als Klempner in Saarbrücken nicht in diesen Ergebnissen auftauchen, haben Sie gerade einen Auftrag verloren — an einen Konkurrenten, der in SEO investiert hat.
						</p>
						<p>
							Das ist kein Einzelfall. Über 90 Prozent aller Online-Erfahrungen beginnen mit einer Suchmaschine. 75 Prozent der Nutzer scrollen nie über die erste Seite bei Google hinaus. Für lokale Unternehmen im Saarland bedeutet das: Wenn Sie nicht auf Seite 1 sind, existieren Sie für Ihre potenziellen Kunden praktisch nicht. Die gute Nachricht: Gerade für lokale Suchanfragen im Saarland ist die Konkurrenz oft überschaubar. Mit gezielter SEO-Optimierung können Sie in wenigen Monaten auf die erste Seite bei Google gelangen — für genau die Suchbegriffe, die Ihre Kunden verwenden. Voraussetzung dafür ist eine <Link href="/webdesign-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">professionelle Website</Link>, die technisch einwandfrei aufgebaut ist.
						</p>
					</FadeInSection>
				</div>
			</section>

			{/* Leistungen */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Meine SEO-Leistungen im Überblick
					</h2>
					<div className="space-y-10">
						{leistungen.map((item, i) => (
							<div key={i}>
								<h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
								<p className="text-stone-600 leading-relaxed">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Prozess */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						So läuft eine SEO-Optimierung bei Fylu ab
					</h2>
					<div className="space-y-8">
						{prozessSteps.map((step, i) => (
							<div key={i} className="relative pl-12">
								<div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
								<h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
								<p className="text-stone-600 leading-relaxed">{step.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Ergebnisse */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						SEO-Ergebnisse die überzeugen
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{ metric: '+400%', label: 'Mehr Anfragen', text: 'Handwerksbetrieb in Saarbrücken: Von Seite 5 auf Platz 3 in 4 Monaten. Die Anfragen über die Website haben sich vervierfacht.' },
							{ metric: '+250%', label: 'Mehr Verkäufe', text: 'Online-Shop aus dem Saarland: Durch gezielte Keyword-Optimierung und technisches SEO stiegen die organischen Verkäufe um 250 Prozent.' },
							{ metric: 'Platz 1', label: 'Google Maps', text: 'Restaurant in Saarlouis: Durch Local SEO und Google Business Optimierung auf Platz 1 in Google Maps — Reservierungen verdoppelt.' },
						].map((item, i) => (
							<div key={i} className="p-6 rounded-xl border border-stone-200 bg-stone-50">
								<div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full mb-3">
									<span className="text-2xl font-bold text-white">{item.metric}</span>
								</div>
								<p className="text-sm font-semibold text-stone-500 mb-2">{item.label}</p>
								<p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Häufige Fragen zur Suchmaschinenoptimierung
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
						Bereit, bei Google sichtbar zu werden?
					</h2>
					<p className="text-lg text-stone-600 mb-8">
						Lassen Sie uns gemeinsam Ihre Google-Sichtbarkeit verbessern. Kostenlose Erstanalyse — unverbindlich und ehrlich.
					</p>
					<Link
						href="/angebote"
						className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-10 py-5 rounded-xl text-xl font-bold shadow-2xl transition-all duration-200 hover:shadow-[0_16px_48px_rgba(6,182,212,0.3)] active:scale-[0.98] inline-block"
					>
						Kostenlosen Entwurf sichern
					</Link>
					<div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-stone-500">
						<Link href="/webdesign-saarland" className="hover:text-cyan-500 transition-colors">Webdesign Saarland</Link>
						<Link href="/google-ads-saarland" className="hover:text-cyan-500 transition-colors">Google Ads Saarland</Link>
						<Link href="/website-erstellen-lassen" className="hover:text-cyan-500 transition-colors">Website erstellen lassen</Link>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
