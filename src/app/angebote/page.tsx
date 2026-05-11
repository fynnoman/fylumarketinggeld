import AngeboteForm from '@/components/AngeboteForm';

export default function AngebotePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kostenlosen Entwurf sichern
          </h1>
          <p className="text-xl md:text-2xl text-cyan-50">
            Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden einen maßgeschneiderten Website-Entwurf – völlig unverbindlich.
          </p>
        </div>
      </header>

      <AngeboteForm />
    </div>
  );
}
