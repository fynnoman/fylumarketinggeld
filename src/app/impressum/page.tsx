import Link from 'next/link';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Impressum</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-stone-50 rounded-2xl p-8">
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="bg-white p-6 rounded-lg border-2 border-stone-200">
              <p className="text-stone-900 font-semibold text-lg">Fynn Schulz</p>
              <p className="text-stone-700">FYLU Marketing</p>
              <p className="text-stone-700">Heiligenbornstr. 7</p>
              <p className="text-stone-700">66359 Bous</p>
              <p className="text-stone-700">Deutschland</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Kontakt</h2>
            <div className="bg-white p-6 rounded-lg border-2 border-stone-200 space-y-2">
              <p className="text-stone-700">
                <span className="font-semibold">E-Mail:</span>{' '}
                <a href="mailto:fynn@taskeyapp.com" className="text-cyan-600 hover:text-cyan-700 underline">
                  fynn@taskeyapp.com
                </a>
              </p>
              <p className="text-stone-700">
                <span className="font-semibold">Telefon:</span>{' '}
                <a href="tel:+4915168488999" className="text-cyan-600 hover:text-cyan-700 underline">
                  +49 151 684 88999
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz</h2>
            <div className="bg-white p-6 rounded-lg border-2 border-stone-200">
              <p className="text-stone-900 font-mono text-lg">DE459350573</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <div className="bg-white p-6 rounded-lg border-2 border-stone-200">
              <p className="text-stone-900 font-semibold">Fynn Schulz</p>
              <p className="text-stone-700">Heiligenbornstr. 7</p>
              <p className="text-stone-700">66359 Bous</p>
              <p className="text-stone-700">Deutschland</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">EU-Streitschlichtung</h2>
            <div className="bg-cyan-50 p-6 rounded-lg border-2 border-cyan-200">
              <p className="text-stone-700 mb-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <p className="text-stone-700">
                <a 
                  href="https://ec.europa.eu/consumers/odr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-700 underline font-semibold"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-stone-700 mt-4 text-sm">
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
