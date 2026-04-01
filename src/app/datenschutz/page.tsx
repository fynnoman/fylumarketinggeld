import Link from 'next/link';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Datenschutzerklärung</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-stone-50 rounded-2xl p-8 prose prose-stone max-w-none">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Verantwortlicher</h2>
            <p className="text-stone-700">Verantwortlich für die Datenverarbeitung auf dieser Website ist</p>
            <div className="bg-white p-4 rounded-lg border-2 border-stone-200 mt-3">
              <p className="text-stone-900 font-semibold">Fynn Schulz</p>
              <p className="text-stone-700">FYLU Marketing</p>
              <p className="text-stone-700">Heiligenbornstr. 7</p>
              <p className="text-stone-700">66359 Bous</p>
              <p className="text-stone-700">Deutschland</p>
              <p className="text-stone-700 mt-2">E-Mail: <a href="mailto:fynn@taskeyapp.com" className="text-cyan-600 hover:text-cyan-700">fynn@taskeyapp.com</a></p>
              <p className="text-stone-700">USt-ID: DE459350573</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p className="text-stone-700">Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Personenbezogene Daten werden von uns ausschließlich im Rahmen der gesetzlichen Vorschriften der Datenschutz-Grundverordnung (DSGVO) sowie des Bundesdatenschutzgesetzes (BDSG) verarbeitet.</p>
            <p className="text-stone-700 mt-3">Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Hosting</h2>
            <p className="text-stone-700">Diese Website wird bei einem externen Hosting-Dienstleister betrieben. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich insbesondere um IP-Adressen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
            <p className="text-stone-700 mt-3">Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer sicheren und effizienten Bereitstellung unseres Onlineangebots.</p>
            <p className="text-stone-700 mt-3">Mit dem Hosting-Anbieter wurde ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Erhebung und Speicherung personenbezogener Daten beim Besuch der Website</h2>
            <p className="text-stone-700">Beim Aufrufen dieser Website werden durch den Server automatisch Informationen erfasst. Diese Informationen werden temporär in sogenannten Logfiles gespeichert.</p>
            <p className="text-stone-700 mt-3">Erfasst werden insbesondere:</p>
            <ul className="list-disc list-inside mt-3 text-stone-700 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt</li>
              <li>verwendeter Browser und Betriebssystem</li>
            </ul>
            <p className="text-stone-700 mt-3">Die Verarbeitung erfolgt zur Gewährleistung eines reibungslosen Verbindungsaufbaus, zur Systemsicherheit und zur technischen Administration der Website.</p>
            <p className="text-stone-700 mt-3">Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Kontaktaufnahme</h2>
            <p className="text-stone-700">Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.</p>
            <p className="text-stone-700 mt-3">Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen Maßnahmen sowie Art. 6 Abs. 1 lit. f DSGVO bei allgemeinen Anfragen.</p>
            <p className="text-stone-700 mt-3">Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">6. Vertragsabwicklung und Online-Bestellungen</h2>
            <p className="text-stone-700">Bei einer Online-Bestellung oder Beauftragung verarbeiten wir personenbezogene Daten zur Vertragsdurchführung. Hierzu gehören insbesondere:</p>
            <ul className="list-disc list-inside mt-3 text-stone-700 space-y-1">
              <li>Name</li>
              <li>Anschrift</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Unternehmensdaten</li>
              <li>Rechnungsdaten</li>
              <li>Zahlungsinformationen</li>
            </ul>
            <p className="text-stone-700 mt-3">Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
            <p className="text-stone-700 mt-3">Die Daten werden für die Dauer der Vertragsbeziehung sowie gemäß gesetzlicher Aufbewahrungsfristen gespeichert.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">7. Zahlungsdienstleister</h2>
            <p className="text-stone-700">Zur Abwicklung von Zahlungen nutzen wir externe Zahlungsdienstleister wie beispielsweise Stripe, PayPal oder vergleichbare Anbieter.</p>
            <p className="text-stone-700 mt-3">Die Zahlungsdaten werden direkt vom jeweiligen Zahlungsdienstleister verarbeitet. Wir erhalten keine vollständigen Kreditkarten- oder Kontodaten.</p>
            <p className="text-stone-700 mt-3">Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
            <p className="text-stone-700 mt-3">Es gelten ergänzend die Datenschutzbestimmungen des jeweiligen Zahlungsdienstleisters.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">8. Cookies</h2>
            <p className="text-stone-700">Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.</p>
            <p className="text-stone-700 mt-3">Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, da sie zur technisch fehlerfreien Bereitstellung der Website erforderlich sind.</p>
            <p className="text-stone-700 mt-3">Sofern weitere Cookies wie Analyse- oder Marketing-Cookies eingesetzt werden, erfolgt dies ausschließlich nach Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">9. Analyse- und Tracking-Tools</h2>
            <p className="text-stone-700">Sofern Analyse- oder Tracking-Tools wie Google Analytics, Meta Pixel oder vergleichbare Dienste eingesetzt werden, erfolgt dies ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.</p>
            <p className="text-stone-700 mt-3">Sie können eine erteilte Einwilligung jederzeit widerrufen.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">10. Weitergabe von Daten</h2>
            <p className="text-stone-700">Eine Weitergabe Ihrer personenbezogenen Daten erfolgt nur, wenn:</p>
            <ul className="list-disc list-inside mt-3 text-stone-700 space-y-1">
              <li>Sie ausdrücklich eingewilligt haben</li>
              <li>die Weitergabe zur Vertragsabwicklung erforderlich ist</li>
              <li>eine gesetzliche Verpflichtung besteht</li>
              <li>oder die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">11. Speicherdauer</h2>
            <p className="text-stone-700">Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.</p>
            <p className="text-stone-700 mt-3">Steuer- und handelsrechtliche Aufbewahrungsfristen betragen in der Regel sechs bzw. zehn Jahre.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">12. Ihre Rechte</h2>
            <p className="text-stone-700">Sie haben das Recht:</p>
            <ul className="list-disc list-inside mt-3 text-stone-700 space-y-1">
              <li>Auskunft über Ihre gespeicherten Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Einschränkung der Verarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
            <p className="text-stone-700 mt-3">Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">13. Datensicherheit</h2>
            <p className="text-stone-700">Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder unbefugten Zugriff zu schützen.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">14. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="text-stone-700">Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 18.02.2026.</p>
            <p className="text-stone-700 mt-3">Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es erforderlich werden, diese Datenschutzerklärung anzupassen.</p>
          </section>

          <div className="mt-12 pt-8 border-t-2 border-stone-200 text-center">
            <p className="text-sm text-stone-500">Stand: 18.02.2026</p>
          </div>

        </div>
      </div>
    </div>
  );
}
