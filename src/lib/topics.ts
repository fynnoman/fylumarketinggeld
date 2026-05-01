export type Topic = {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const topics: Topic[] = [
  {
    slug: "handwerker",
    h1: "Website für Handwerker im Saarland",
    metaTitle: "Website für Handwerker Saarland | Mehr Aufträge online | Fylu",
    metaDescription:
      "Websites speziell für Handwerker im Saarland: mobiloptimiert, lokale SEO, Angebotsformular. Mehr Anfragen, weniger Aufwand. Ab 990€.",
    intro:
      "Als Handwerker im Saarland leben Sie von Empfehlungen – aber neue Kunden suchen heute zuerst online. Mit einer modernen Website werden Sie auf Google gefunden, wenn jemand „Dachdecker Saarbrücken“, „Elektriker Saarlouis“ oder „Maler Merzig“ sucht.",
    sections: [
      {
        title: "Speziell für Handwerksbetriebe konzipiert",
        text: "Sie bekommen keine Standard-Website, sondern eine Lösung, die auf Handwerk zugeschnitten ist: Leistungsseiten je Gewerk, Projektgalerie, Bewertungsmodul, Notruf-/Termin-Anfrage und mobiloptimierte Darstellung. So überzeugen Sie Kunden bereits beim ersten Klick.",
      },
      {
        title: "Lokale Sichtbarkeit in Ihrer Region",
        text: "Wir optimieren Ihre Website gezielt für Ihre Stadt und Umgebung – Saarbrücken, Saarlouis, Völklingen, Neunkirchen, Homburg, Merzig oder St. Ingbert. Inklusive Google Business Profil, das in Google Maps oben erscheint.",
      },
      {
        title: "Klare Festpreise ab 990€",
        text: "Keine versteckten Kosten, keine Stundensätze. Sie wissen vor dem Start exakt, was Sie bekommen und was es kostet. Auf Wunsch inkl. Google Ads-Kampagne für sofort sichtbare Ergebnisse.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine Website für meinen Handwerksbetrieb?",
        a: "Ab 990€ bekommen Sie eine professionelle, mobiloptimierte Website mit lokaler SEO. Mit Projektgalerie und erweiterten Funktionen liegen Sie typischerweise bei 1.490€.",
      },
      {
        q: "Werde ich damit bei Google gefunden?",
        a: "Ja. Lokale SEO und Google Business sind fester Bestandteil – auf Wunsch ergänzt durch laufende SEO-Betreuung oder Google Ads.",
      },
      {
        q: "Kann ich Bilder und Projekte selbst hinzufügen?",
        a: "Auf Wunsch erhalten Sie ein einfaches CMS, mit dem Sie Projekte und Bilder selbstständig pflegen können.",
      },
    ],
  },
  {
    slug: "restaurant",
    h1: "Website für Restaurants im Saarland",
    metaTitle: "Website für Restaurant Saarland | Mehr Gäste & Reservierungen | Fylu",
    metaDescription:
      "Restaurant-Websites mit Online-Reservierung, Speisekarte und lokaler SEO. Mehr Gäste in Saarbrücken, Saarlouis & Co. Ab 990€.",
    intro:
      "Eine Restaurant-Website soll Hunger machen – und gleichzeitig Reservierungen bringen. Wir entwickeln Websites, die Ihr Restaurant emotional inszenieren und gleichzeitig technisch sauber für Google und mobile Nutzer optimiert sind.",
    sections: [
      {
        title: "Online-Reservierung & digitale Speisekarte",
        text: "Direkte Tischreservierung ohne Drittanbieter-Provision, digitale Speisekarte mit QR-Code für Tische und Updates in Echtzeit. Ihre Gäste finden, was sie suchen – schnell und ohne Frust.",
      },
      {
        title: "Mobil. Schnell. Lokal.",
        text: "Über 80 % aller Restaurant-Anfragen passieren mobil. Wir bauen mobile-first, mit perfekten Ladezeiten und lokaler SEO für Saarbrücken, Saarlouis, Merzig oder Ihren Standort.",
      },
      {
        title: "Google Maps & Bewertungen",
        text: "Wir richten Ihr Google Business Profil professionell ein, damit Sie in Maps und in der lokalen Suche prominent erscheinen – inklusive Strategie für mehr und bessere Bewertungen.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine Restaurant-Website?",
        a: "Ab 990€ inkl. Speisekarte, Galerie und Kontakt. Mit Online-Reservierung und Eventseiten typischerweise 1.490€.",
      },
      {
        q: "Kann ich die Speisekarte selbst aktualisieren?",
        a: "Ja, auf Wunsch erhalten Sie ein CMS, mit dem Sie Karte und Preise jederzeit selbst anpassen können.",
      },
      {
        q: "Gibt es eine Anbindung an Online-Reservierungssysteme?",
        a: "Ja, gängige Systeme wie OpenTable oder Quandoo lassen sich integrieren – oder wir nutzen ein eigenes Formular ohne Provision.",
      },
    ],
  },
  {
    slug: "steuerberater",
    h1: "Website für Steuerberater im Saarland",
    metaTitle: "Website für Steuerberater Saarland | Mandanten gewinnen | Fylu",
    metaDescription:
      "Websites für Steuerberater & Kanzleien im Saarland: seriös, mandantenfokussiert, mit lokaler SEO. Mandanten gewinnen, Vertrauen stärken. Ab 990€.",
    intro:
      "Steuerberater leben von Vertrauen. Ihre Website muss Kompetenz, Diskretion und Erreichbarkeit innerhalb weniger Sekunden vermitteln – sonst entscheidet sich der Mandant für die Kanzlei nebenan.",
    sections: [
      {
        title: "Seriöses Design, klare Botschaft",
        text: "Wir entwickeln ein modernes, ruhiges Design, das Ihre Kanzlei professionell positioniert. Klare Strukturen für Leistungen, Branchen und Team – ohne überflüssige Spielereien.",
      },
      {
        title: "Mandantenportal & Online-Termin",
        text: "Auf Wunsch mit sicherem Mandantenbereich, Online-Terminbuchung und DSGVO-konformer Kontaktstrecke. Komfortabel für Ihre Mandanten, effizient für Ihr Team.",
      },
      {
        title: "Lokale SEO für das Saarland",
        text: "Optimierung für Suchanfragen wie „Steuerberater Saarbrücken“, „Steuerkanzlei Saarlouis“ oder „Lohnbuchhaltung Homburg“. Inkl. Google Business und sauberer Branchenstruktur.",
      },
    ],
    faqs: [
      {
        q: "Ist die Website DSGVO-konform?",
        a: "Selbstverständlich. Datenschutz, Cookie-Banner, sichere Formulare und Hosting in Deutschland gehören zum Standard.",
      },
      {
        q: "Können Sie ein Mandantenportal integrieren?",
        a: "Ja, wir integrieren entweder ein eigenes sicheres Portal oder Schnittstellen zu DATEV Online und vergleichbaren Lösungen.",
      },
      {
        q: "Wie lange dauert die Erstellung?",
        a: "Typischerweise 3–4 Wochen – inklusive Texte, Design, technischer Umsetzung und SEO.",
      },
    ],
  },
  {
    slug: "guenstig",
    h1: "Webdesigner günstig im Saarland",
    metaTitle: "Webdesigner günstig Saarland | Festpreis ab 990€ | Fylu",
    metaDescription:
      "Günstiger Webdesigner im Saarland: professionelle Websites zum Festpreis ab 990€. Transparent, mobiloptimiert, SEO inklusive. Jetzt anfragen.",
    intro:
      "Günstig heißt nicht billig. Sie bekommen bei mir eine professionelle Website zum klaren Festpreis – ohne Stundensatz-Abrechnung, ohne versteckte Kosten und ohne Agentur-Aufschlag.",
    sections: [
      {
        title: "Festpreis ab 990€ – ohne Überraschungen",
        text: "Sie wissen vor dem Start, was Sie bekommen und was es kostet. Hosting, SEO-Basis und Google Business sind im Paket enthalten. Keine versteckten Folgekosten.",
      },
      {
        title: "Solo statt Agentur",
        text: "Sie zahlen keinen Agentur-Overhead. Stattdessen arbeiten Sie direkt mit dem Webdesigner zusammen, der Ihre Website auch baut – kurze Wege, schnelle Reaktion, faire Preise.",
      },
      {
        title: "Trotzdem alles drin",
        text: "Auch im günstigsten Paket: mobile-first Design, technisches SEO, Sicherheit, schnelle Ladezeiten und sauberer Code. Günstig bedeutet hier: effizient, nicht reduziert.",
      },
    ],
    faqs: [
      {
        q: "Warum ist das so günstig?",
        a: "Ich arbeite ohne Agentur-Overhead, mit klar standardisierten Prozessen. Dadurch kann ich Top-Qualität zu fairen Preisen anbieten.",
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein. Sie bekommen einen schriftlichen Festpreis. Hosting, SEO-Basis und Einrichtung sind enthalten.",
      },
      {
        q: "Was kostet die laufende Pflege?",
        a: "Auf Wunsch übernehme ich Pflege und Updates – entweder pro Vorgang oder im Monatspaket. Beides immer transparent vorab kalkuliert.",
      },
    ],
  },
  {
    slug: "festpreis",
    h1: "Website zum Festpreis im Saarland",
    metaTitle: "Website Festpreis Saarland | Transparent ab 990€ | Fylu",
    metaDescription:
      "Website zum Festpreis ab 990€: keine versteckten Kosten, klare Pakete, persönliche Betreuung im Saarland. Jetzt unverbindlich anfragen.",
    intro:
      "Stundensatz-Abrechnungen sind das größte Risiko bei Web-Projekten. Bei mir arbeiten Sie zum klaren Festpreis – Sie kennen das Endergebnis und den Preis, bevor wir starten.",
    sections: [
      {
        title: "Transparente Pakete",
        text: "Drei klar definierte Pakete (990€, 1.490€, 2.490€) decken die meisten Anforderungen ab. Sonderwünsche werden vorab schriftlich kalkuliert – nichts entsteht überraschend auf der Rechnung.",
      },
      {
        title: "Schriftliche Leistungsbeschreibung",
        text: "Sie erhalten ein Angebot mit detaillierter Leistungsliste: Anzahl der Seiten, Funktionen, SEO-Umfang, Hosting-Dauer und Support. So gibt es kein Vertun.",
      },
      {
        title: "Festpreis = Festpreis",
        text: "Auch wenn die Umsetzung länger dauert: Der Preis bleibt. Sie tragen kein Projektrisiko. Punkt.",
      },
    ],
    faqs: [
      {
        q: "Was ist im Festpreis enthalten?",
        a: "Komplettes Design, technische Umsetzung, lokale SEO-Basis, Google Business-Einrichtung, mobile Optimierung und Hosting (je nach Paket 2–4 Monate inkl.).",
      },
      {
        q: "Was passiert bei nachträglichen Wünschen?",
        a: "Sie erhalten vorab eine kostenlose Kalkulation. Sie entscheiden, ob die Erweiterung umgesetzt wird – immer zum klaren Festpreis.",
      },
      {
        q: "Wie sicher ist der Festpreis?",
        a: "100 % – er steht schriftlich im Angebot und gilt für den vereinbarten Leistungsumfang.",
      },
    ],
  },
  {
    slug: "in-14-tagen",
    h1: "Website in 14 Tagen im Saarland",
    metaTitle: "Website in 14 Tagen Saarland | Express ab 990€ | Fylu",
    metaDescription:
      "Express-Website in nur 14 Tagen: professionell, mobiloptimiert, mit lokaler SEO. Für Unternehmen im Saarland ab 990€.",
    intro:
      "Sie brauchen schnell eine professionelle Website? Mit dem Express-Prozess geht Ihre neue Website in 14 Tagen online – ohne Qualitätsverlust und mit allen Kernfunktionen, die Ihr Unternehmen braucht.",
    sections: [
      {
        title: "Strukturierter 14-Tage-Prozess",
        text: "Tag 1–2: Briefing & Konzept. Tag 3–5: Erstes Design. Tag 6–10: Umsetzung. Tag 11–13: Feedback & Feintuning. Tag 14: Launch. Klar getaktet, ohne Endlosschleifen.",
      },
      {
        title: "Volle Qualität, keine Abkürzungen",
        text: "Mobile-first Design, lokale SEO, Google Business und sauberer Code sind Standard – auch im Express-Prozess.",
      },
      {
        title: "Voraussetzung: Sie sind ebenfalls schnell",
        text: "Damit der Plan aufgeht, brauche ich Ihre Texte, Bilder und Feedbacks innerhalb von 24 Stunden. Wenn Sie liefern, halte ich den Termin – garantiert.",
      },
    ],
    faqs: [
      {
        q: "Geht das wirklich in 14 Tagen?",
        a: "Ja – wenn Sie bei Briefing und Feedback ebenfalls innerhalb von 24 Stunden reagieren. Andernfalls verschiebt sich der Launch entsprechend.",
      },
      {
        q: "Kostet der Express-Service extra?",
        a: "Nein. Der Festpreis bleibt – ab 990€. Sie zahlen keinen Aufpreis für das Tempo.",
      },
      {
        q: "Wie viele Seiten umfasst die Express-Website?",
        a: "Im Standard bis zu 6 Seiten. Mehr ist möglich, kann aber den 14-Tage-Termin verschieben.",
      },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
