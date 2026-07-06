import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/animated/FadeInSection';

const smoothEase = [0.22, 1, 0.36, 1] as const;

const faqs = [
	{
		q: 'Was kostet eine Fylu-Website für Handwerker?',
		a: 'Signature ab 3.490 €, Atelier ab 6.490 €, Maison ab 9.190 €. Diese Preise sind Ausgangspunkte — der endgültige Rahmen entsteht im Vorgespräch. Für einen schlanken Refresh Ihrer bestehenden Website: ab 890 €.',
	},
	{
		q: 'Ich habe keine Zeit, mich zu kümmern — wie läuft das ab?',
		a: 'Fünfzehn Minuten Vorgespräch. Sie erzählen uns kurz, was Sie machen und was Sie sich wünschen. Den Rest übernimmt das Studio. Kein Papierkram, keine Ticket-Systeme — direkter Draht.',
	},
	{
		q: 'Brauche ich eine Website wenn ich schon auf MyHammer oder Google bin?',
		a: 'Ja, unbedingt. Plattformen wie MyHammer sind wichtig, aber dort konkurrieren Sie direkt mit dutzenden anderen Betrieben. Ihre eigene Website ist Ihr digitales Zuhause — hier kontrollieren Sie die Botschaft, bauen Vertrauen auf und werden bei Google für lokale Suchanfragen gefunden, ohne Provisionen zu zahlen.',
	},
	{
		q: 'Kann ich meine Referenzfotos von Baustellen einbinden?',
		a: 'Auf jeden Fall! Echte Fotos Ihrer Arbeit sind das beste Verkaufsargument. Wir integrieren Ihre Baustellenfotos, Vorher-Nachher-Vergleiche und Referenzprojekte professionell in Ihre Website. Falls die Bildqualität nicht optimal ist, helfen wir bei der Aufbereitung.',
	},
	{
		q: 'Kümmern Sie sich auch um Google Maps?',
		a: 'Ja. Wir richten Ihr Google Business Profil komplett ein oder optimieren es: Beschreibung, Kategorien, Fotos, Öffnungszeiten und Bewertungsmanagement. So erscheinen Sie bei lokalen Suchanfragen auf Google Maps — genau dort, wo Ihre potenziellen Kunden suchen.',
	},
	{
		q: 'Was ist wenn ich die Website später ändern will?',
		a: 'Kein Problem. Kleine Änderungen wie Texte oder Bilder sind schnell erledigt. Auf Wunsch können Sie ein Content-Management-System bekommen, mit dem Sie selbst Inhalte aktualisieren können. Oder wir übernehmen Änderungen für Sie — schnell und zu fairen Stundensätzen.',
	},
];

const gewerke = [
	'Maler & Lackierer',
	'Elektriker & Elektrotechnik',
	'SHK (Sanitär, Heizung, Klima)',
	'Dachdecker & Zimmerer',
	'Schreiner & Tischler',
	'Fliesenleger',
	'Garten- und Landschaftsbau',
	'Maurer & Betonbauer',
	'Gebäudereinigung',
	'Schlüsseldienste',
];

export default function WebdesignHandwerkPage() {
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
							{ '@type': 'ListItem', position: 2, name: 'Webdesign Handwerk', item: 'https://www.fylumarketing.de/webdesign-handwerk' },
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
						name: 'Fylu – Webdesign für Handwerker',
						description: 'Webdesign speziell für Handwerksbetriebe. Modern, mobiloptimiert und bei Google sichtbar..',
						url: 'https://www.fylumarketing.de/webdesign-handwerk',
						telephone: '+4915168488999',
						email: 'kontakt@fylumarketing.de',
						address: { '@type': 'PostalAddress', addressLocality: 'Saarlouis', addressRegion: 'Saarland', addressCountry: 'DE' },
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
						<span className="text-stone-900 font-medium">Webdesign Handwerk</span>
					</nav>
				</div>
			</div>

			{/* Hero */}
			<section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden">
				<div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-40" />
				<div className="max-w-4xl mx-auto relative z-10">
					<FadeInSection>
						<div className="editorial-eyebrow mb-6">
							<span>Für das Handwerk</span>
						</div>
					</FadeInSection>
					<FadeInSection delay={0.08}>
						<h1 className="text-[2.6rem] leading-[1.03] sm:text-5xl md:text-6xl lg:text-[4.4rem] lg:leading-[1] font-semibold text-[var(--ink)] tracking-[-0.035em]">
							Webdesign fürs Handwerk —{' '}
							<span className="font-display italic font-normal text-[var(--cyan-deep)]">
								mit einer Handschrift, die trägt.
							</span>
						</h1>
					</FadeInSection>
					<FadeInSection delay={0.16}>
						<p className="mt-8 text-lg md:text-[1.1rem] text-stone-600 leading-relaxed max-w-3xl">
							Ein Fylu-Auftritt für Ihren Meisterbetrieb. Editorial gestaltet,
							mobile-first, technisch sauber. Für Maler, Elektriker,
							SHK-Betriebe, Dachdecker, Schreiner, Fliesenleger, Gartenbauer und
							alle Gewerke, die einen Auftritt mit Substanz suchen — ab 3.490 €.
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
								<span>Pakete ansehen</span>
							</Link>
						</div>
					</FadeInSection>
				</div>
			</section>

			{/* Warum Website */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<FadeInSection>
						<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
							Warum Handwerksbetriebe eine professionelle Website brauchen
						</h2>
					</FadeInSection>
					<FadeInSection delay={0.08} className="prose prose-lg prose-stone max-w-none">
						<p>
							„Ich bekomme meine Aufträge über Mundpropaganda" — diesen Satz hören wir oft. Und ja, Empfehlungen sind wertvoll. Aber die Zeiten haben sich geändert. Heute googelt der Hausbesitzer „Maler Saarbrücken" bevor er den Nachbarn fragt. Der Mieter sucht „Elektriker Notdienst in meiner Nähe" wenn am Sonntagabend der Strom ausfällt. Und der Bauherr vergleicht drei Dachdecker-Websites bevor er ein Angebot anfordert.
						</p>
						<p>
							Wenn Sie in diesen Momenten nicht sichtbar sind, geht der Auftrag an Ihren Konkurrenten — an den Handwerker, der eine <Link href="/website-erstellen-lassen" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">professionelle Website</Link> hat und bei Google auf Seite 1 erscheint. Eine gute Handwerker-Website ist kein Luxus mehr. Sie ist genauso wichtig wie Ihr Firmenwagen oder Ihr Werkzeug. Der Unterschied: Sie arbeitet 24 Stunden am Tag, 7 Tage die Woche für Sie — auch wenn Sie gerade auf der Baustelle sind. Und sie kostet weniger als ein neuer Akkuschrauber-Set, bringt aber deutlich mehr Aufträge.
						</p>
					</FadeInSection>
				</div>
			</section>

			{/* Was eine gute Website können muss */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Was eine gute Handwerker-Website können muss
					</h2>
					<div className="space-y-10">
						{[
							{ title: 'Sofort sichtbar auf Google Maps', text: 'Local SEO sorgt dafür, dass Ihr Betrieb bei Suchanfragen wie „Elektriker in meiner Nähe" auf Google Maps erscheint. Wir richten Ihr Google Business Profil ein und optimieren es, damit Sie dort auftauchen, wo Ihre Kunden suchen. Erfahren Sie mehr über unsere SEO-Leistungen auf der Seite SEO Saarland.' },
							{ title: 'Mobiloptimiert — weil Kunden vom Handy suchen', text: 'Über 70 Prozent der lokalen Suchanfragen kommen vom Smartphone. Ihre Website muss auf dem Handy genauso gut funktionieren wie auf dem Desktop — schnelle Ladezeiten, große Buttons, klare Struktur. Das ist bei uns Standard.' },
							{ title: 'Klarer Anruf-Button und Kontaktformular', text: 'Wenn ein Kunde Ihre Website besucht, muss er sofort wissen, wie er Sie erreicht. Ein prominenter „Jetzt anrufen"-Button und ein einfaches Kontaktformular sorgen dafür, dass aus Website-Besuchern Anrufer und aus Anrufern Aufträge werden.' },
							{ title: 'Vertrauensaufbau durch Referenzen und Fotos', text: 'Echte Fotos Ihrer Arbeit überzeugen mehr als jeder Werbetext. Wir integrieren Ihre besten Projekte, Vorher-Nachher-Bilder und Kundenbewertungen so in die Website, dass Besucher sofort Vertrauen fassen.' },
							{ title: 'Schnelle Ladezeit — auch mit 3G auf der Baustelle', text: 'Nichts ist frustrierender als eine langsame Website. Wir optimieren jede Seite auf maximale Geschwindigkeit — unter 3 Sekunden Ladezeit, auch bei schlechter Mobilfunkverbindung. Google belohnt schnelle Seiten mit besseren Rankings.' },
						].map((item, i) => (
							<div key={i}>
								<h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
								<p className="text-stone-600 leading-relaxed">{item.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Beispiele */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8">
						So sieht eine moderne Handwerker-Website aus
					</h2>
					<div className="prose prose-lg prose-stone max-w-none mb-8">
						<p>
							Ein <strong>Malerbetrieb</strong> braucht eine Website, die seine Arbeit zeigt: Vorher-Nachher-Fotos, Farbberatung, Leistungsübersicht und ein schnelles Kontaktformular. Dazu eine Google Maps Integration, damit Kunden in der Umgebung den Betrieb sofort finden.
						</p>
						<p>
							Eine <strong>Elektrofirma</strong> profitiert von einer klaren Leistungsübersicht — Elektroinstallation, Smart Home, Photovoltaik — mit prominentem Notdienst-Button. Kunden müssen auf einen Blick sehen, was angeboten wird, und sofort anrufen können.
						</p>
						<p>
							Ein <strong>SHK-Betrieb</strong> (Sanitär, Heizung, Klima) zeigt seine Kompetenz durch Referenzprojekte, Partnerlogos und eine übersichtliche Darstellung aller Leistungsbereiche. Dazu Energieberatung-Informationen, die Google-Traffic bringen und den Betrieb als Experten positionieren. Sie wollen noch schneller gefunden werden? <Link href="/google-ads-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">Google Ads im Saarland</Link> bringen sofortige Sichtbarkeit, während das <Link href="/webdesign-saarland" className="text-cyan-600 font-semibold hover:text-cyan-700 underline-offset-2 hover:underline">Webdesign</Link> langfristig für organischen Traffic sorgt.
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						{gewerke.map((g, i) => (
							<span key={i} className="px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-600 font-medium">{g}</span>
						))}
					</div>
				</div>
			</section>

			{/* Ablauf */}
			<section className="py-20 md:py-28 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Ablauf — So einfach bekommen Sie Ihre neue Website
					</h2>
					<div className="prose prose-lg prose-stone max-w-none mb-8">
						<p>
							Der Prozess ist so einfach wie möglich gestaltet — weil wir wissen, dass Handwerker keine Zeit zu verschenken haben. Sie investieren nur 15 Minuten Ihrer Zeit.
						</p>
					</div>
					<div className="space-y-8">
						{[
							{ title: 'Kurzes Gespräch (15 Min.)', text: 'Erzählen Sie uns kurz, was Sie machen, wer Ihre Kunden sind und was Sie sich wünschen. Das reicht uns als Basis.' },
							{ title: 'Kostenloser Entwurf in 24h', text: 'Innerhalb eines Tages sehen Sie, wie Ihre neue Website aussehen könnte. Kostenlos, unverbindlich, ohne Haken.' },
							{ title: 'Feedback & Anpassung', text: 'Sagen Sie uns was gefällt und was geändert werden soll. Wir passen alles an bis es perfekt sitzt.' },
							{ title: 'Website geht live', text: 'Ihre fertige Website geht online. Wir kümmern uns um Domain, Hosting und alles Technische. Sie lehnen sich zurück und freuen sich über neue Anfragen.' },
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

			{/* FAQ */}
			<section className="py-20 md:py-28 px-6 bg-stone-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12">
						Häufige Fragen von Handwerkern
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
						Bereit für einen{' '}
						<span className="font-display italic font-normal text-[var(--cyan-deep)]">
							Auftritt, der Klienten holt?
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
						<Link href="/seo-saarland" className="hover:text-cyan-700 transition-colors">SEO als Erweiterung</Link>
						<span className="text-stone-300">·</span>
						<Link href="/google-ads-saarland" className="hover:text-cyan-700 transition-colors">Google Ads</Link>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
