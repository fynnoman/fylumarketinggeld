import Link from 'next/link';

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Zurück zur Startseite
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-bold">Allgemeine Geschäftsbedingungen (AGB)</h1>
            <a 
              href="/agb_fylu.pdf" 
              download
              className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center gap-2 w-fit"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              PDF herunterladen
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-stone-50 rounded-2xl p-4 shadow-xl">
          {/* PDF Viewer */}
          <iframe
            src="/agb_fylu.pdf"
            className="w-full h-[800px] rounded-lg border-2 border-stone-200"
            title="Allgemeine Geschäftsbedingungen"
          />
          
          <div className="mt-4 text-center">
            <p className="text-sm text-stone-500">
              Falls die PDF nicht angezeigt wird, können Sie sie{' '}
              <a href="/agb_fylu.pdf" download className="text-cyan-600 hover:text-cyan-700 font-semibold underline">
                hier herunterladen
              </a>
              .
            </p>
          </div>
        </div>

        {/* Zusätzliche Info */}
        <div className="mt-8 bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
          <h2 className="font-bold text-stone-900 mb-2">📄 Wichtige Informationen</h2>
          <p className="text-stone-700 text-sm">
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen von Fylu. 
            Durch die Beauftragung einer Dienstleistung akzeptieren Sie automatisch diese AGB.
          </p>
          <p className="text-stone-700 text-sm mt-2">
            Bei Fragen zu den AGB können Sie mich jederzeit kontaktieren:
          </p>
          <div className="mt-3 space-y-1">
            <p className="text-sm text-stone-700">
              📧 E-Mail: <a href="mailto:kontakt@fylumarketing.de" className="text-cyan-600 hover:text-cyan-700 underline">kontakt@fylumarketing.de</a>
            </p>
            <p className="text-sm text-stone-700">
              📱 Telefon: <a href="tel:+4915168488999" className="text-cyan-600 hover:text-cyan-700 underline">+49 151 684 88999</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
