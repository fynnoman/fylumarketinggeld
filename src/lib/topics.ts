export type TopicRelated = {
  href: string;
  label: string;
  description?: string;
};

export type Topic = {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  indexable?: boolean;
  relatedTools?: TopicRelated[];
  relatedProblems?: TopicRelated[];
  relatedGuides?: TopicRelated[];
};

// „handwerker“ war zunächst als generisch eingestuft. Strategie-Update 2026-09:
// Handwerker bleibt strategisch relevant und wird als hochwertige B2B-Branchen-Seite
// weiterentwickelt — deshalb wieder indexable.
const OFF_ICP_SLUGS = new Set([
  "restaurant",
  "guenstig",
  "in-14-tagen",
  "friseur",
  "hotel",
  "autohaus",
  "onlineshop",
  "coach",
  "fitnessstudio",
]);

export function isIndexableTopic(t: Topic): boolean {
  return t.indexable !== false && !OFF_ICP_SLUGS.has(t.slug);
}

export const topics: Topic[] = [
  {
    slug: "handwerker",
    h1: "Website für etablierte Handwerksbetriebe im Saarland",
    metaTitle: "Website für Handwerksbetriebe im Saarland | Fylu Studio",
    metaDescription:
      "Websites für etablierte Handwerksbetriebe: hochwertige Auftraggeber gewinnen, Meister-Substanz sichtbar machen, technisch saubere Basis für lokales SEO. Aus Saarlouis.",
    intro:
      "Etablierte Handwerksbetriebe haben zwei Zielgruppen, die sich fundamental unterscheiden: den privaten Endkunden mit kleinem Auftragsvolumen und den professionellen Auftraggeber (Verwaltung, Facility-Management, gewerbliche Bauträger) mit fünf- bis sechsstelligen Projekten. Ohne saubere Website-Struktur landen beide Gruppen auf derselben austauschbaren Landingpage — und keiner davon fühlt sich richtig angesprochen.",
    sections: [
      {
        title: "Substanz statt Handwerker-Standard",
        text: "Meisterbetrieb, ISO-Zertifikate, RAL-Gütezeichen, langjährige Referenzobjekte, klar dokumentierte Prozesse — das sind die Signale, die professionelle Auftraggeber suchen. Wir bauen die Website so, dass diese Substanz in den ersten fünf Sekunden sichtbar wird und Ihnen die höherwertigen Anfragen bringt.",
      },
      {
        title: "Klar getrennte Zielgruppen-Ansprache",
        text: "Eigene Struktur für gewerbliche/öffentliche Auftraggeber (Referenzobjekte, Ausschreibungs-Erfahrung, Qualitätsmanagement) und für private Kunden (klare Leistungsübersicht, transparente Beratung). Beide Gruppen finden ihren Weg, ohne dass die Website sich verzettelt.",
      },
      {
        title: "Lokale Sichtbarkeit mit Substanz",
        text: "Optimierung für konkrete Suchbegriffe wie „Elektrotechnik Bürogebäude Saarbrücken“, „Dachdecker Sanierung Saarland“, „Bauinstallation Objektbetreuung Homburg“ — dort wo Auftragswerte hoch und Wettbewerb übersichtlich ist. Inklusive Google-Unternehmensprofil und saubere lokale Signale.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine Website für meinen Handwerksbetrieb?",
        a: "Wir kalkulieren jedes Projekt individuell nach Umfang und Funktionsbedarf. Rufen Sie uns an oder senden Sie eine Anfrage — innerhalb von 24 Stunden bekommen Sie eine transparente Einschätzung.",
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
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website hakt." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bei-google-nicht-gefunden", label: "Website bei Google nicht gefunden" },
      { href: "/probleme/website-seo-verbessern", label: "Website-SEO verbessern" },
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
    ],
    relatedGuides: [
      { href: "/ratgeber/google-ads-kosten", label: "Was kostet Google Ads?" },
      { href: "/ratgeber/seo-kosten", label: "Was kostet SEO?" },
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
    ],
  },
  {
    slug: "restaurant",
    h1: "Website für Restaurants im Saarland",
    metaTitle: "Website für Restaurant Saarland | Mehr Gäste & Reservierungen | Fylu",
    metaDescription:
      "Restaurant-Websites mit Online-Reservierung, Speisekarte und lokaler SEO. Mehr Gäste in Saarbrücken, Saarlouis & Co..",
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
        a: "Wir kalkulieren das Paket nach gewünschten Funktionen (Speisekarte, Galerie, Online-Reservierung, Eventseiten). Konditionen auf Anfrage.",
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
      "Websites für Steuerberater & Kanzleien im Saarland: seriös, mandantenfokussiert, mit lokaler SEO. Mandanten gewinnen, Vertrauen stärken..",
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
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website tatsächlich hakt." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
      { href: "/probleme/website-conversion-verbessern", label: "Website-Conversion verbessern" },
      { href: "/probleme/website-zu-alt", label: "Website wirkt veraltet" },
    ],
    relatedGuides: [
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
      { href: "/ratgeber/website-agentur-kosten", label: "Freelancer, Studio oder Agentur?" },
      { href: "/ratgeber/website-relaunch", label: "Website-Relaunch: Wann sinnvoll?" },
    ],
  },
  {
    slug: "guenstig",
    h1: "Webdesigner günstig im Saarland",
    metaTitle: "Webdesigner günstig Saarland | Transparente Konditionen | Fylu",
    metaDescription:
      "Professionelle Websites zu klaren, transparenten Konditionen — entwickelt von einem eingespielten Studio aus Saarlouis. Transparent, mobiloptimiert, SEO inklusive.",
    intro:
      "Effizient kalkuliert, kompromisslos umgesetzt. Wir liefern professionelle Websites zu klaren, transparenten Konditionen — mit der gleichen technischen und gestalterischen Substanz, die unsere größeren Projekte auszeichnet.",
    sections: [
      {
        title: "Transparente Konditionen — ohne Überraschungen",
        text: "Sie wissen vor dem Start exakt, was Sie bekommen und was es kostet. Hosting, SEO-Basis und Google Business sind im Paket enthalten. Keine versteckten Folgekosten, keine Stundensatz-Lotterie.",
      },
      {
        title: "Studio statt Agentur-Overhead",
        text: "Sie arbeiten direkt mit dem Team, das Ihre Website auch konzipiert, gestaltet und baut — Strategie, Design und Entwicklung aus einer Hand. Kurze Wege, schnelle Entscheidungen, faire Preise.",
      },
      {
        title: "Volle Substanz im günstigsten Paket",
        text: "Mobile-first Design, technisches SEO, Sicherheit, höchste Core-Web-Vitals-Werte und sauberer Code sind in jedem Paket Standard. Effizient kalkuliert heißt bei uns: nichts weggelassen, sondern klug priorisiert.",
      },
    ],
    faqs: [
      {
        q: "Was ist im Angebot enthalten?",
        a: "Strategie-Gespräch, individuelles Design, technische Umsetzung, SEO-Foundation, Google-Unternehmensprofil-Setup, Hosting im ersten Jahr und Live-Gang. Sie bekommen ein schriftliches Angebot mit klarer Leistungsbeschreibung — bevor wir starten.",
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein. Was im Angebot steht, ist der Preis. Erweiterungen (zusätzliche Seiten, Sonderfunktionen, laufende Betreuung) kalkulieren wir transparent als separate Position — Sie entscheiden, ob Sie sie buchen.",
      },
      {
        q: "Was kostet die laufende Pflege?",
        a: "Wahlweise pro Vorgang oder als Monatspaket — beides immer transparent vorab kalkuliert. Wir binden Sie nicht in Knebelverträge: monatlich kündbar, mit klarer Leistungsbeschreibung.",
      },
    ],
  },
  {
    slug: "festpreis",
    h1: "Website mit transparenten Konditionen im Saarland",
    metaTitle: "Website mit transparenten Konditionen Saarland | Fylu",
    metaDescription:
      "Website mit transparenten Konditionen: keine versteckten Kosten, klare Pakete, persönliche Betreuung im Saarland. Jetzt unverbindlich anfragen.",
    intro:
      "Stundensatz-Abrechnungen sind das größte Risiko bei Web-Projekten. Bei uns arbeiten Sie zu klaren, transparenten Konditionen – Sie kennen Leistungsumfang und Konditionen, bevor wir starten.",
    sections: [
      {
        title: "Transparente Pakete",
        text: "Jedes Projekt wird vorab transparent und schriftlich kalkuliert — nichts entsteht überraschend auf der Rechnung.",
      },
      {
        title: "Schriftliche Leistungsbeschreibung",
        text: "Sie erhalten ein Angebot mit detaillierter Leistungsliste: Anzahl der Seiten, Funktionen, SEO-Umfang, Hosting-Dauer und Support. So gibt es kein Vertun.",
      },
      {
        title: "Was vereinbart ist, gilt.",
        text: "Auch wenn die Umsetzung länger dauert: Die vereinbarten Konditionen bleiben. Sie tragen kein Projektrisiko. Punkt.",
      },
    ],
    faqs: [
      {
        q: "Was ist im Angebot enthalten?",
        a: "Komplettes Design, technische Umsetzung, lokale SEO-Basis, Google Business-Einrichtung, mobile Optimierung und Hosting (je nach Paket 2–4 Monate inkl.).",
      },
      {
        q: "Was passiert bei nachträglichen Wünschen?",
        a: "Sie erhalten vorab eine kostenlose Kalkulation. Sie entscheiden, ob die Erweiterung umgesetzt wird – immer zu klaren, transparenten Konditionen.",
      },
      {
        q: "Wie verbindlich ist das Angebot?",
        a: "Verbindlich. Es steht schriftlich und gilt für den vereinbarten Leistungsumfang.",
      },
    ],
  },
  {
    slug: "in-14-tagen",
    h1: "Website in 14 Tagen im Saarland",
    metaTitle: "Website in 14 Tagen Saarland | Express | Fylu",
    metaDescription:
      "Express-Website in nur 14 Tagen: professionell, mobiloptimiert, mit lokaler SEO. Für Unternehmen im Saarland.",
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
        text: "Damit der Plan aufgeht, brauchen wir Ihre Texte, Bilder und Feedbacks innerhalb von 24 Stunden. Wenn Sie liefern, halten wir den Termin – garantiert.",
      },
    ],
    faqs: [
      {
        q: "Geht das wirklich in 14 Tagen?",
        a: "Ja – wenn Sie bei Briefing und Feedback ebenfalls innerhalb von 24 Stunden reagieren. Andernfalls verschiebt sich der Launch entsprechend.",
      },
      {
        q: "Kostet der Express-Service extra?",
        a: "Nein. Die vereinbarten Konditionen bleiben — Sie zahlen keinen Aufpreis für das Tempo.",
      },
      {
        q: "Wie viele Seiten umfasst die Express-Website?",
        a: "Im Standard bis zu 6 Seiten. Mehr ist möglich, kann aber den 14-Tage-Termin verschieben.",
      },
    ],
  },
  {
    slug: "zahnarzt",
    h1: "Website für Zahnärzte im Saarland",
    metaTitle: "Website für Zahnarzt Saarland | Mehr Neupatienten online | Fylu",
    metaDescription:
      "Zahnarzt-Websites speziell für das Saarland: seriöses Design, Online-Termin, lokale SEO. Mehr qualifizierte Neupatienten in Saarbrücken, Saarlouis und Co.",
    intro:
      `Neupatienten googeln heute zuerst „Zahnarzt Saarbrücken“ oder „Implantologe Saarlouis“ – bevor sie überhaupt anrufen. Wer auf Seite 2 landet oder eine veraltete Website hat, verliert genau diese Patienten an die nächstgelegene Praxis.`,
    sections: [
      {
        title: "Vertrauen ab der ersten Sekunde",
        text: "Eine Zahnarzt-Website hat genau 5 Sekunden, um Vertrauen aufzubauen. Wir entwickeln modernes, ruhiges Design mit klarem Leistungs-Fokus, Team-Vorstellung, Behandlungs-Beschreibungen und seriöser Bildsprache – ohne übertriebene Werbe-Tonalität.",
      },
      {
        title: "Online-Termin & DSGVO-konformer Kontakt",
        text: "Patienten wollen heute online buchen. Wir integrieren entweder ein eigenes sicheres Formular oder gängige Tools wie Doctolib, jameda oder samedi – immer DSGVO-konform und barrierearm.",
      },
      {
        title: "Lokale SEO für Zahnarzt-Suchanfragen",
        text: `Optimiert für Suchbegriffe wie „Zahnarzt Saarbrücken Notdienst“, „Kieferorthopäde Saarlouis“, „Implantate Homburg“ oder „Bleaching Merzig“. Inkl. Google-Unternehmensprofil-Setup und Strategie für mehr 5-Sterne-Bewertungen.`,
      },
    ],
    faqs: [
      {
        q: "Welche Online-Termin-Systeme können integriert werden?",
        a: "Wir integrieren gängige Systeme wie Doctolib, jameda, samedi oder Dampsoft Online – alternativ auch ein eigenes sicheres Formular ohne Drittanbieter-Provision.",
      },
      {
        q: "Ist die Website rechtssicher (HWG, Berufsordnung)?",
        a: "Ja. Wir achten auf HWG-konforme Bildsprache, korrekte Berufsbezeichnungen und vollständige Pflichtangaben. Optional Review-Strategie nach den Regeln der jeweiligen Ärztekammer.",
      },
      {
        q: "Wie schnell ist meine Praxis-Website live?",
        a: "Standard 3–4 Wochen, Premium-Praxis-Websites mit eigenem Fotoshooting und individuellem Design typischerweise 4–6 Wochen.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website tatsächlich hakt." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
      { href: "/probleme/website-conversion-verbessern", label: "Website-Conversion verbessern" },
      { href: "/probleme/website-zu-alt", label: "Website wirkt veraltet" },
    ],
    relatedGuides: [
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
      { href: "/ratgeber/website-agentur-kosten", label: "Freelancer, Studio oder Agentur?" },
      { href: "/ratgeber/website-relaunch", label: "Website-Relaunch: Wann sinnvoll?" },
    ],
  },
  {
    slug: "anwalt",
    h1: "Website für Anwälte & Kanzleien im Saarland",
    metaTitle: "Website für Anwalt Saarland | Mehr Mandanten online | Fylu",
    metaDescription:
      "Anwalts- und Kanzlei-Websites im Saarland: seriös, fachgebietsorientiert, mit lokaler SEO. Mehr qualifizierte Mandantenanfragen im gesamten Saarland.",
    intro:
      `Mandanten googeln heute spezifisch nach „Anwalt Familienrecht Saarbrücken“ oder „Fachanwalt Arbeitsrecht Saarlouis“. Wer dort nicht oben rankt, wird übersehen – egal wie groß die Reputation ist.`,
    sections: [
      {
        title: "Seriöses Design mit klarer Spezialisierung",
        text: "Wir entwickeln Kanzlei-Websites, die Kompetenz, Diskretion und Erreichbarkeit innerhalb von Sekunden vermitteln. Pro Fachgebiet eine eigene Seite – inkl. Beispielfälle, FAQ und Honorarmodell-Transparenz.",
      },
      {
        title: "Lokale Mandanten gewinnen",
        text: "Optimierung für relevante Suchbegriffe – nach Fachgebiet, Stadt und Spezialisierung. Inklusive Google-Unternehmensprofil, Schema.org für rechtliche Dienstleister und sauberer Linkstruktur.",
      },
      {
        title: "BRAO-konform & DSGVO-sicher",
        text: "Wir achten auf BRAO-konforme Außenwerbung, korrekte Pflichtangaben und vollständige rechtliche Hinweise. DSGVO-konforme Kontaktformulare, Cookie-Banner und Hosting in Deutschland gehören zum Standard.",
      },
    ],
    faqs: [
      {
        q: "Ist die Website BRAO-konform?",
        a: "Ja. Wir achten auf alle berufsrechtlichen Anforderungen für anwaltliche Außendarstellung – inkl. korrekter Fachanwaltsbezeichnungen, Pflichtangaben und sachlicher Tonalität.",
      },
      {
        q: "Können Sie ein Mandantenportal integrieren?",
        a: "Ja, sichere Mandantenbereiche mit Datei-Upload, E-Akte-Anbindung und verschlüsselter Kommunikation lassen sich integrieren.",
      },
      {
        q: "Wie funktioniert SEO für Anwaltskanzleien?",
        a: `Wir optimieren pro Fachgebiet und Standort – z.B. „Fachanwalt Arbeitsrecht Saarbrücken“. Plus Content-Strategie mit Rechtsratgeber-Artikeln, die qualifizierte Mandanten anziehen.`,
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website tatsächlich hakt." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
      { href: "/probleme/website-conversion-verbessern", label: "Website-Conversion verbessern" },
      { href: "/probleme/website-zu-alt", label: "Website wirkt veraltet" },
    ],
    relatedGuides: [
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
      { href: "/ratgeber/website-agentur-kosten", label: "Freelancer, Studio oder Agentur?" },
      { href: "/ratgeber/website-relaunch", label: "Website-Relaunch: Wann sinnvoll?" },
    ],
  },
  {
    slug: "immobilienmakler",
    h1: "Website für Immobilienmakler im Saarland",
    metaTitle: "Website für Immobilienmakler Saarland | Mehr Verkäufe & Leads | Fylu",
    metaDescription:
      "Immobilienmakler-Websites im Saarland: Premium-Design, Objekt-Präsentation, Lead-Generierung. Mehr Eigentümer-Anfragen und Käufer-Leads.",
    intro:
      "Immobilienmakler verdienen ihr Geld zweimal: einmal beim Eigentümer (Auftrag) und einmal beim Käufer (Provision). Eine starke Website muss beide Zielgruppen gleichzeitig überzeugen – und das mit einem einzigen Auftritt.",
    sections: [
      {
        title: "Premium-Objektpräsentation",
        text: "Hochwertige Objektseiten mit Bildergalerie, Grundriss, 360°-Tour-Integration, Lageinformationen und direktem Anfrageformular. Jedes Objekt wird zur eigenen kleinen Verkaufsseite.",
      },
      {
        title: "Eigentümer-Lead-Magnet",
        text: "Eigentümer suchen seriöse Makler über Google. Wir bauen einen eigenen Lead-Funnel: kostenlose Online-Bewertung, regionale Marktberichte, klare Service-Beschreibung und vertrauensbildende Referenzen.",
      },
      {
        title: "Lokale SEO für Verkaufsstandorte",
        text: `Optimierung für Suchbegriffe wie „Haus verkaufen Saarbrücken“, „Immobilienmakler Saarlouis“, „Wohnung kaufen Homburg“. Inkl. Google-Unternehmensprofil und Bewertungsstrategie.`,
      },
    ],
    faqs: [
      {
        q: "Können Sie meine Objekte automatisch importieren?",
        a: "Ja, wir integrieren Schnittstellen zu OpenImmo, ImmoScout24 und vergleichbaren Anbietern. Neue Objekte landen automatisch auf Ihrer Website.",
      },
      {
        q: "Kann ich eine Online-Immobilienbewertung anbieten?",
        a: "Ja. Wir integrieren entweder eine eigene Bewertungslogik oder Drittanbieter-Tools – als Lead-Magnet für Eigentümer-Akquise.",
      },
      {
        q: "Wie messen wir den Erfolg?",
        a: "Über klar definierte KPIs: Anzahl qualifizierter Eigentümer-Anfragen, Käufer-Leads pro Objekt, Verweildauer auf Objektseiten und Conversion-Rate. Monatliche Reports inklusive.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website tatsächlich hakt." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
      { href: "/probleme/website-conversion-verbessern", label: "Website-Conversion verbessern" },
      { href: "/probleme/website-zu-alt", label: "Website wirkt veraltet" },
    ],
    relatedGuides: [
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
      { href: "/ratgeber/website-agentur-kosten", label: "Freelancer, Studio oder Agentur?" },
      { href: "/ratgeber/website-relaunch", label: "Website-Relaunch: Wann sinnvoll?" },
    ],
  },
  {
    slug: "arzt",
    h1: "Website für Arztpraxen im Saarland",
    metaTitle: "Website für Arztpraxis Saarland | Online-Termin & SEO | Fylu",
    metaDescription:
      "Arztpraxis-Websites im Saarland: seriöses Design, Online-Termin, barrierearm, DSGVO-konform. Mehr Patientenanfragen in Saarbrücken, Saarlouis und ganz Saarland.",
    intro:
      "Patienten suchen heute zuerst online nach Ärzten – auch wenn sie schon einen Termin haben. Eine veraltete Praxis-Website kostet Sie Vertrauen, Neupatienten und im Zweifel auch bestehende Patienten.",
    sections: [
      {
        title: "Patientenzentriertes Design",
        text: "Klare Strukturen für Sprechzeiten, Leistungen, Team und Anfahrt. Große Schriften, hoher Kontrast, barrierearme Navigation. Mobile-first, weil über 70 % der Patienten zuerst aufs Smartphone schauen.",
      },
      {
        title: "Online-Terminvergabe & Patientenkommunikation",
        text: "Integration von Doctolib, jameda, samedi oder eigenes sicheres Formular. Auf Wunsch mit Patientenformular, Anamnese-Vorab-Erfassung und sicherer Kommunikation für Befunde.",
      },
      {
        title: "Lokale SEO & Google Business",
        text: `Optimierung für „Hausarzt Saarbrücken“, „Kardiologe Saarlouis“, „Dermatologe Homburg“ und vergleichbare Suchbegriffe. Inkl. professionellem Google-Unternehmensprofil mit Fotos, Sprechzeiten und Review-Strategie.`,
      },
    ],
    faqs: [
      {
        q: "Ist die Website DSGVO- und HWG-konform?",
        a: "Ja. Wir achten auf alle medizinrechtlichen Vorgaben: HWG-konforme Sprache, vollständige Pflichtangaben, sichere Formulare, deutsches Hosting und transparente Datenschutzhinweise.",
      },
      {
        q: "Kann ich Patientenformulare digital ausfüllen lassen?",
        a: "Ja. Wir integrieren digitale Anamnese-Bögen, Datenschutzformulare und Erstkontakt-Fragebögen – sicher, schnell und papierlos.",
      },
      {
        q: "Wie lange dauert die Erstellung?",
        a: "Typischerweise 3–4 Wochen, Premium-Praxis-Websites mit eigenem Fotoshooting und individuellem Konzept 4–6 Wochen.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website tatsächlich hakt." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
      { href: "/probleme/website-conversion-verbessern", label: "Website-Conversion verbessern" },
      { href: "/probleme/website-zu-alt", label: "Website wirkt veraltet" },
    ],
    relatedGuides: [
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
      { href: "/ratgeber/website-agentur-kosten", label: "Freelancer, Studio oder Agentur?" },
      { href: "/ratgeber/website-relaunch", label: "Website-Relaunch: Wann sinnvoll?" },
    ],
  },
  {
    slug: "friseur",
    h1: "Website für Friseure im Saarland",
    metaTitle: "Website für Friseur Saarland | Mehr Kunden & Termine | Fylu",
    metaDescription:
      "Friseur- und Salon-Websites im Saarland: Premium-Design, Online-Termin, Galerie, lokale SEO. Mehr Stammkunden und Neukunden in Saarbrücken, Saarlouis und ganz Saarland.",
    intro:
      "Friseure und Stylisten leben von Sichtbarkeit, Stil und Buchung. Ihre Website muss in 5 Sekunden klarmachen: Hier bin ich richtig, hier sieht es gut aus, hier kann ich direkt einen Termin machen.",
    sections: [
      {
        title: "Visuelle Inszenierung mit Stil",
        text: "Hochwertige Galerie mit Vorher/Nachher, Team-Vorstellung mit Persönlichkeit, Service-Übersicht mit Preisen. Klar, premium, modern – ohne Klischee-Bildwelt.",
      },
      {
        title: "Online-Terminbuchung ohne Provision",
        text: "Integration von Treatwell, Shore oder eigenes Buchungssystem ohne Drittanbieter-Provision. Termine landen direkt in Ihrem Kalender. Kein Anruf-Pingpong mehr.",
      },
      {
        title: "Lokale Sichtbarkeit & Bewertungen",
        text: `Optimierung für „Friseur Saarbrücken“, „Balayage Saarlouis“, „Männerhaarschnitt Homburg“ und vergleichbare Suchbegriffe. Inkl. Google-Unternehmensprofil mit Fotos, Stories und Review-Strategie.`,
      },
    ],
    faqs: [
      {
        q: "Welche Buchungssysteme können integriert werden?",
        a: "Treatwell, Shore, Booksy, Resmio oder eigenes Buchungsformular – immer ohne versteckte Drittanbieter-Provision.",
      },
      {
        q: "Bekomme ich auch Instagram-Anbindung?",
        a: "Ja. Wir binden Ihren Instagram-Feed automatisch ein – damit Ihre Website immer aktuelle Stylings zeigt, ohne dass Sie doppelt posten müssen.",
      },
      {
        q: "Wie kann ich neue Kunden gezielt gewinnen?",
        a: "Über lokale SEO, optimiertes Google-Profil und auf Wunsch Google-Ads-Kampagnen mit klar definiertem Budget pro Neukunde.",
      },
    ],
  },
  {
    slug: "hotel",
    h1: "Website für Hotels & Pensionen im Saarland",
    metaTitle: "Website für Hotel Saarland | Direktbuchungen & SEO | Fylu",
    metaDescription:
      "Hotel- und Pension-Websites im Saarland: Direktbuchungen ohne Provision, Premium-Bilder, lokale SEO. Mehr Gäste in Saarbrücken, an der Saarschleife, im Bostalsee-Umfeld.",
    intro:
      "Jede Buchung über booking.com oder Expedia kostet 15–25 % Provision. Eine starke eigene Website holt Gäste direkt zu Ihnen – und macht aus der Provisions-Falle einen messbaren Profithebel.",
    sections: [
      {
        title: "Direktbuchung ohne Provisionsfalle",
        text: "Eigene Buchungs-Engine direkt auf der Website integriert. Gäste buchen direkt, Sie sparen die OTA-Provision von Booking, HRS & Co. — ein deutlicher Mehrertrag pro Jahr.",
      },
      {
        title: "Premium-Inszenierung",
        text: "Hochwertige Bildwelten, 360°-Touren, atmosphärische Beschreibungen, Region-Storytelling. Mit klarem Fokus auf das, was Saarland-Gäste suchen: Saarschleife, Bostalsee, Völklinger Hütte, Weinregion.",
      },
      {
        title: "Lokale & touristische SEO",
        text: `Optimierung für „Hotel Saarbrücken“, „Wellnesshotel Bostalsee“, „Pension Saarschleife“, saisonale Begriffe und Anreise-Routen. Inkl. Google-Profil mit aktuellen Bildern, Bewertungs-Pflege und Story-Inhalten.`,
      },
    ],
    faqs: [
      {
        q: "Welche Buchungssysteme können integriert werden?",
        a: "Mews, Cultuzz, hotline, Booking.com Channel Manager, Sirvoy oder eine eigene Buchungslogik – je nach Größe und Anforderungen.",
      },
      {
        q: "Kann ich saisonale Pakete anbieten?",
        a: "Ja. Wir bauen eine flexible Pakete-Logik mit Saison-Triggern, Aktionen, Frühbucher-Rabatten und Last-Minute-Angeboten.",
      },
      {
        q: "Was passiert mit meinen bestehenden OTA-Buchungen?",
        a: "Die laufen weiter – wir senken nur Ihren Abhängigkeitsgrad. Ziel: 30–50 % Direktbuchungen statt 100 % OTA.",
      },
    ],
  },
  {
    slug: "autohaus",
    h1: "Website für Autohäuser im Saarland",
    metaTitle: "Website für Autohaus Saarland | Mehr Werkstatt- & Verkaufs-Leads | Fylu",
    metaDescription:
      "Autohaus-Websites im Saarland: Fahrzeugbestand, Werkstatt-Termin, Inzahlungnahme-Rechner, lokale SEO. Mehr Verkaufs- und Werkstatt-Leads in Saarbrücken, Saarlouis und ganz Saarland.",
    intro:
      "Autokäufer recherchieren heute zu 95 % online, bevor sie das erste Mal das Autohaus betreten. Wer dort nicht sichtbar ist, verliert Käufer an Online-Plattformen und Mitbewerber – noch bevor das Verkaufsgespräch überhaupt stattfindet.",
    sections: [
      {
        title: "Fahrzeugbestand mit Conversion-Fokus",
        text: "Live-Bestand mit hochwertigen Bildern, Filterfunktionen, Probefahrt-Anfrage, Finanzierungsrechner und Inzahlungnahme-Modul. Jedes Fahrzeug wird zur eigenen Verkaufsseite.",
      },
      {
        title: "Werkstatt-Online-Termin",
        text: "Werkstatt-Auslastung steigern: Online-Terminbuchung für Inspektion, TÜV, Reifenwechsel, Klima-Service. Direkter Sync mit Ihrem Werkstatt-Kalender.",
      },
      {
        title: "Lokale SEO & Marken-SEO",
        text: `Optimierung sowohl für „Autohaus Saarbrücken“ als auch für markenspezifische Suchen wie „BMW Saarlouis“, „Werkstatt Audi Homburg“ oder „Reifen wechseln Saarbrücken“.`,
      },
    ],
    faqs: [
      {
        q: "Können Sie meinen Fahrzeugbestand automatisch synchronisieren?",
        a: "Ja, wir integrieren Schnittstellen zu DAT, mobile.de, AutoScout24 und herstellereigenen Systemen – Bestand updated sich automatisch.",
      },
      {
        q: "Kann ich einen Finanzierungs- oder Leasingrechner einbauen?",
        a: "Ja, sowohl eigene Rechner als auch Schnittstellen zu Santander, Hyundai Finance, BMW Bank und vergleichbaren Anbietern.",
      },
      {
        q: "Wie generieren Sie Werkstatt-Termine?",
        a: "Über Online-Buchungssystem, Erinnerungs-E-Mails an Bestandskunden und gezielte Google-Ads-Kampagnen für lokale Service-Suchbegriffe.",
      },
    ],
  },
  {
    slug: "elektriker",
    h1: "Website für Elektriker im Saarland",
    metaTitle: "Website für Elektriker Saarland | Mehr Aufträge online | Fylu",
    metaDescription:
      "Elektriker- und Elektroinstallateur-Websites im Saarland: Notdienst-Anfrage, Photovoltaik-Lead-Magnet, lokale SEO. Mehr private und gewerbliche Aufträge.",
    intro:
      "Elektriker sind in der besten Marktlage seit Jahrzehnten – Photovoltaik, E-Mobilität, Wärmepumpen, Smart Home. Doch wer online nicht sichtbar ist, bekommt nur die alten Empfehlungs-Aufträge ab, nicht die neuen, gut zahlenden Premium-Anfragen.",
    sections: [
      {
        title: "Photovoltaik- & Wärmepumpen-Lead-Generator",
        text: "Eigene Landingpages für Photovoltaik-Anfragen, Wallbox-Installation, Wärmepumpen-Anschluss und Energieberatung. Lead-Magneten mit kostenloser Erstberatung als Conversion-Booster.",
      },
      {
        title: "24/7-Notdienst online buchbar",
        text: "Notdienst-Anfragen direkt über die Website mit klarer Erreichbarkeitsangabe, automatischer Weiterleitung an Ihr Handy und transparenter Notdienst-Preisstruktur.",
      },
      {
        title: "Lokale SEO für Elektro-Suchen",
        text: `Optimierung für „Elektriker Saarbrücken“, „PV-Anlage Saarlouis“, „Wallbox installieren Homburg“ und vergleichbare Suchbegriffe. Plus Schema.org für Notdienst, Öffnungszeiten und Servicegebiete.`,
      },
    ],
    faqs: [
      {
        q: "Kann ich Photovoltaik-Anfragen filtern?",
        a: "Ja. Wir bauen eine Vor-Qualifikations-Logik (Dachfläche, Verbrauch, Standort) – Sie bekommen nur ernsthafte Anfragen mit ausreichendem Projektvolumen.",
      },
      {
        q: "Wie funktioniert die Notdienst-Anfrage?",
        a: "Anfragen werden direkt an Ihr Handy weitergeleitet (SMS + E-Mail). Auf Wunsch mit automatischer Bestätigung an den Kunden und Anfahrtszeit-Indikation.",
      },
      {
        q: "Lohnt sich Google Ads für mein Gewerk?",
        a: "Für Photovoltaik, Wärmepumpen und E-Mobilität: definitiv ja. Auftragswerte sind hoch, Werbe-Kosten amortisieren sich oft mit dem ersten Lead.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website hakt." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bei-google-nicht-gefunden", label: "Website bei Google nicht gefunden" },
      { href: "/probleme/website-seo-verbessern", label: "Website-SEO verbessern" },
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
    ],
    relatedGuides: [
      { href: "/ratgeber/google-ads-kosten", label: "Was kostet Google Ads?" },
      { href: "/ratgeber/seo-kosten", label: "Was kostet SEO?" },
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
    ],
  },
  {
    slug: "heizungsbauer",
    h1: "Website für Heizungsbauer & SHK im Saarland",
    metaTitle: "Website für Heizungsbauer Saarland | Wärmepumpe & Heizung | Fylu",
    metaDescription:
      "Heizungsbauer- und SHK-Websites im Saarland: Wärmepumpen-Anfragen, Heizung tauschen, Förderberatung, lokale SEO. Mehr qualifizierte Privat- und Gewerbeanfragen.",
    intro:
      "SHK-Betriebe haben aktuell die höchste Nachfrage seit Jahrzehnten – Wärmepumpen, Heizungstausch, Bad-Sanierung, Förderberatung. Das Problem: Die meisten Betriebe arbeiten am Limit und nehmen die falschen Aufträge an. Eine kluge Website filtert: nur noch profitable Anfragen kommen rein.",
    sections: [
      {
        title: "Wärmepumpen- & Heizungs-Konfigurator",
        text: "Online-Konfigurator für Wärmepumpe (Gebäudegröße, Bestandsheizung, Wärmebedarf), Heizungstausch und Bad-Sanierung. Qualifizierte Anfragen mit Vor-Daten – kein Cold-Call-Aufwand mehr.",
      },
      {
        title: "Förderberatung als Lead-Magnet",
        text: "Eigene Seite zur BEG-Förderung, KfW-Zuschüssen und steuerlichen Vorteilen. Kunden suchen gezielt danach – Sie werden gefunden, bevor die Konkurrenz auch nur Atem holt.",
      },
      {
        title: "Lokale SEO für SHK-Suchanfragen",
        text: `Optimierung für „Heizungsbauer Saarbrücken“, „Wärmepumpe Saarlouis“, „Bad sanieren Homburg“ und vergleichbare hochpreisige Suchbegriffe. Inkl. Schema.org für lokale Dienstleister.`,
      },
    ],
    faqs: [
      {
        q: "Wie qualifiziert sind die Online-Anfragen?",
        a: "Mit Vor-Qualifikations-Logik (Gebäudegröße, Heizungsalter, Budget-Indikation) bekommen Sie zu 80 % ernsthafte Anfragen mit echtem Projektpotenzial.",
      },
      {
        q: "Können Sie eine Online-Förderberatung anbieten?",
        a: "Ja. Eigene Seiten zu BEG, KfW 458, KfW 261 und steuerlichen Vorteilen – als Conversion-Magneten für Eigentümer in Entscheidungsphase.",
      },
      {
        q: "Lohnt sich Google Ads bei voller Auftragslage?",
        a: "Ja – aber gezielt: nur für die hochpreisigsten Leistungen (Wärmepumpen, große Sanierungen, Premium-Bäder). So filtern Sie über die Werbung gleich auf profitable Aufträge.",
      },
    ],
  },
  {
    slug: "maler",
    h1: "Website für Maler & Lackierer im Saarland",
    metaTitle: "Website für Maler Saarland | Mehr Aufträge online | Fylu",
    metaDescription:
      "Maler- und Lackierer-Websites im Saarland: Vorher/Nachher-Galerie, Online-Anfrage, lokale SEO. Mehr Aufträge für Innen, Außen und Fassade.",
    intro:
      "Maler-Aufträge entscheiden sich heute online. Wer eine moderne Website mit Vorher/Nachher-Bildern, klarer Leistungsübersicht und einfacher Anfrage hat, gewinnt Aufträge, die früher per Empfehlung kamen – und ist nicht mehr von Schwankungen abhängig.",
    sections: [
      {
        title: "Premium-Galerie mit Vorher/Nachher",
        text: "Bildgewaltige Projekt-Galerie mit Filter nach Innen, Außen, Fassade, Spezialanstrich. Vorher/Nachher als emotionaler Verkaufshebel. Direkt-Anfrage-Button auf jedem Projekt.",
      },
      {
        title: "Online-Anfrage mit Vor-Kalkulation",
        text: "Anfrageformular mit Bauteil-Auswahl (Wohnzimmer, Fassade, Treppenhaus), Quadratmeter-Schätzung und Bildupload. Sie bekommen vorqualifizierte Anfragen mit allen relevanten Daten.",
      },
      {
        title: "Lokale SEO für Maler-Suchen",
        text: `Optimierung für „Maler Saarbrücken“, „Fassade streichen Saarlouis“, „Wohnung renovieren Homburg“ und ähnliche Suchbegriffe. Inkl. Google-Unternehmensprofil mit aktuellen Projektbildern.`,
      },
    ],
    faqs: [
      {
        q: "Wie bekomme ich gute Bilder ohne Aufwand?",
        a: "Auf Wunsch organisieren wir ein professionelles Foto-Shooting Ihrer schönsten Projekte – einmalig, langfristig nutzbar. Oder wir bringen Ihre vorhandenen Handy-Fotos auf Web-Qualität.",
      },
      {
        q: "Lohnt sich SEO oder Google Ads für mein Gewerk?",
        a: "Beides. SEO bringt langfristig kostenlose Anfragen, Google Ads liefert sofort. Empfehlung: Start mit beidem parallel, dann nach 6 Monaten Ads zurückfahren.",
      },
      {
        q: "Kann ich Saisonangebote einbauen?",
        a: `Ja. Z.B. „Frühjahrsaktion Fassade“, „Renovierung in der Nebensaison günstiger“ – als Conversion-Booster zu schwachen Jahreszeiten.`,
      },
    ],
  },
  {
    slug: "physiotherapie",
    h1: "Website für Physiotherapie im Saarland",
    metaTitle: "Website für Physiotherapie Saarland | Praxis-Website | Fylu",
    metaDescription:
      "Physio-Websites im Saarland: patientenorientiert, mit Online-Terminbuchung und lokaler SEO. Mehr Patienten in Saarbrücken, Saarlouis & Co..",
    intro:
      "Patienten suchen Physiotherapeuten heute online – „Physiotherapie in meiner Nähe“, „Krankengymnastik Saarbrücken“, „Manuelle Therapie Saarlouis“. Eine moderne Website ist entscheidend für volle Terminkalender.",
    sections: [
      {
        title: "Klare Leistungsübersicht",
        text: "Krankengymnastik, Manuelle Therapie, Lymphdrainage, KG-ZNS, Massage, Kinesio-Taping – übersichtlich dargestellt mit nachvollziehbaren Erklärungen für Patienten.",
      },
      {
        title: "Termin-Anfrage ohne Hürden",
        text: "Einfaches Anfrageformular, klare Kontaktwege, Anbindung an gängige Buchungssysteme. Je leichter die Kontaktaufnahme, desto mehr Termine.",
      },
      {
        title: "Lokale Sichtbarkeit",
        text: "Optimierung für lokale Suchanfragen mit Google Business Profil, NAP-Konsistenz und Strategie für Patientenbewertungen.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine Physio-Website?",
        a: "Konditionen kalkulieren wir je nach gewünschten Funktionen (Online-Terminbuchung, Patienten-Bereich, mehrsprachig). Persönlich besprechen.",
      },
      {
        q: "Können Sie auch die Kassen-Logos einbinden?",
        a: "Ja, alle relevanten Krankenkassen-Logos und Hinweise auf Selbstzahler-Leistungen werden klar und übersichtlich integriert.",
      },
      {
        q: "Ist eine Online-Terminbuchung sinnvoll?",
        a: "Definitiv. Patienten buchen gerne abends und am Wochenende – wenn Ihre Praxis geschlossen ist. Online-Buchungen erhöhen die Termin-Auslastung messbar.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website tatsächlich hakt." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
      { href: "/probleme/website-conversion-verbessern", label: "Website-Conversion verbessern" },
      { href: "/probleme/website-zu-alt", label: "Website wirkt veraltet" },
    ],
    relatedGuides: [
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
      { href: "/ratgeber/website-agentur-kosten", label: "Freelancer, Studio oder Agentur?" },
      { href: "/ratgeber/website-relaunch", label: "Website-Relaunch: Wann sinnvoll?" },
    ],
  },
  {
    slug: "onlineshop",
    h1: "Online-Shop erstellen lassen im Saarland",
    metaTitle: "Online-Shop erstellen Saarland | E-Commerce | Fylu",
    metaDescription:
      "Online-Shop aus dem Saarland: professionell, mobiloptimiert, mit SEO und Conversion-Optimierung. Shopify, WooCommerce oder individuell.",
    intro:
      "Ein Online-Shop ist mehr als ein digitales Schaufenster – er ist Ihr 24/7-Vertrieb. Damit das funktioniert, braucht es das richtige System, eine starke SEO-Basis und eine Conversion-Strategie, die wirklich verkauft.",
    sections: [
      {
        title: "Das passende System für Ihr Business",
        text: "Shopify für Standard-Setups, WooCommerce für maximale Flexibilität oder individuelle Headless-Lösungen für ambitionierte Projekte. Wir beraten unabhängig.",
      },
      {
        title: "SEO & Conversion-Optimierung",
        text: "Produktseiten mit strukturierten Daten (Product Schema), Kategorie-SEO, schnelle Ladezeiten, klare CTAs und einfacher Checkout. Jeder Schritt ist auf den Kauf optimiert.",
      },
      {
        title: "Zahlung, Versand & Schnittstellen",
        text: "Stripe, PayPal, Klarna, Versand mit DHL/DPD, Anbindung an Buchhaltung und Warenwirtschaft. Alles aus einer Hand.",
      },
    ],
    faqs: [
      {
        q: "Was kostet ein Online-Shop?",
        a: "Standard-Shopify-Setup. Umfangreichere Lösungen mit individuellen Funktionen – je nach Sortimentsgröße und Anforderungen.",
      },
      {
        q: "Welches System ist das beste?",
        a: "Das hängt von Ihren Anforderungen ab. Shopify ist schnell und stabil, WooCommerce flexibler. Wir wählen gemeinsam das Passende.",
      },
      {
        q: "Können Sie auch das Marketing übernehmen?",
        a: "Ja, wir bieten Google Ads und SEO-Betreuung an – ein Shop ohne Traffic verkauft nichts.",
      },
    ],
  },
  {
    slug: "coach",
    h1: "Website für Coaches und Berater im Saarland",
    metaTitle: "Website für Coach Saarland | Klienten gewinnen | Fylu",
    metaDescription:
      "Coach-Websites im Saarland: persönlich, conversion-stark, mit SEO und Klienten-Strategie. inklusive kostenlosem Entwurf in 24h.",
    intro:
      "Als Coach oder Berater verkaufen Sie Vertrauen. Ihre Website ist der erste Eindruck, den potenzielle Klienten von Ihnen bekommen – sie muss Persönlichkeit, Kompetenz und ein klares Angebot transportieren.",
    sections: [
      {
        title: "Persönliche Positionierung",
        text: "Klare Botschaft: Wer sind Sie, für wen arbeiten Sie und welches Problem lösen Sie? Authentische Fotos, persönliche Texte und ein Design, das zu Ihnen passt.",
      },
      {
        title: "Conversion-starkes Angebot",
        text: "Klare Coaching-Pakete, Buchungsmöglichkeit für Erstgespräche und Testimonials, die Vertrauen aufbauen. Jeder Klick führt zur nächsten Aktion.",
      },
      {
        title: "Content & SEO",
        text: "Blog, Erfahrungsberichte und Long-Tail-SEO für Themen wie „Business Coach Saarland“, „Life Coach Saarbrücken“ oder Ihre spezifische Nische.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine Coach-Website?",
        a: "Konditionen je nach Umfang (Buchungssystem, Mitgliederbereich, Programm-Übersicht). Persönlich besprechen.",
      },
      {
        q: "Brauche ich einen Blog?",
        a: "Empfehlenswert – ein Blog ist langfristig das stärkste SEO-Werkzeug für Coaches und positioniert Sie als Experten in Ihrer Nische.",
      },
      {
        q: "Wie wichtig sind Testimonials?",
        a: "Sehr wichtig. Echte Kundenstimmen sind das stärkste Vertrauenssignal für potenzielle Klienten.",
      },
    ],
  },
  {
    slug: "fitnessstudio",
    h1: "Website für Fitnessstudios im Saarland",
    metaTitle: "Website für Fitnessstudio Saarland | Mehr Mitglieder | Fylu",
    metaDescription:
      "Fitnessstudio-Websites im Saarland: motivierend, mobiloptimiert, mit Mitgliedschaftsformular und lokaler SEO. Mehr Mitglieder gewinnen..",
    intro:
      "Ein Fitnessstudio lebt von neuen Mitgliedern. Eine professionelle Website mit klaren Preisen, Kursplan und einfacher Probetraining-Anmeldung ist heute der wichtigste Vertriebskanal.",
    sections: [
      {
        title: "Motivierende Inszenierung",
        text: "Energiegeladene Bilder, klare Botschaft, sichtbare Trainer und ein Design, das zur Anmeldung motiviert. Aus Interesse wird Anmeldung.",
      },
      {
        title: "Mitgliedschaftsmodell & Probetraining",
        text: "Transparente Preise, klare Tarifübersicht und ein einfaches Anmeldeformular fürs Probetraining – mit möglichst wenig Klicks zum Erstkontakt.",
      },
      {
        title: "Kursplan & lokale SEO",
        text: "Aktueller Kursplan, Trainer-Profile und Optimierung für „Fitnessstudio Saarbrücken“, „Crossfit Saarlouis“ oder Ihre Spezialisierung.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine Fitnessstudio-Website?",
        a: "Konditionen je nach Umfang (Mitglieder-Login, Kursplan, Buchungssystem). Persönlich besprechen.",
      },
      {
        q: "Kann ich den Kursplan selbst pflegen?",
        a: "Ja, auf Wunsch via CMS oder Anbindung an Kurssoftware wie Magicline.",
      },
      {
        q: "Wie wichtig ist Instagram-Integration?",
        a: "Sehr wichtig – Fitness ist eine visuelle Branche. Ein Instagram-Feed bringt Leben in die Website.",
      },
    ],
  },
  {
    slug: "dachdecker",
    h1: "Website für Dachdecker im Saarland",
    metaTitle: "Website für Dachdecker Saarland | Mehr Aufträge | Fylu",
    metaDescription:
      "Dachdecker-Websites im Saarland: mit Projektgalerie, lokaler SEO und schnellem Anfrageformular. Mehr Aufträge in Saarbrücken & Co..",
    intro:
      "Dachdecker leben von Sichtbarkeit – sowohl auf dem Dach als auch online. „Dachdecker Saarbrücken“, „Dachreparatur Saarlouis“, „Flachdach Neunkirchen“ sind tägliche Suchanfragen, bei denen Sie ganz oben stehen müssen.",
    sections: [
      {
        title: "Projektgalerie mit Wirkung",
        text: "Hochwertige Bilder Ihrer abgeschlossenen Dächer, Sanierungen und Reparaturen. Professionell präsentiert, mobile-optimiert und schnell ladend.",
      },
      {
        title: "Klares Leistungsspektrum",
        text: "Dachsanierung, Flachdach, Steildach, Dachfenster, Dämmung, Photovoltaik-Dach. Jede Leistung als eigene Seite mit SEO-Optimierung.",
      },
      {
        title: "Lokale SEO & Bewertungsstrategie",
        text: "Optimierung für „Dachdecker Saarbrücken“ und Umgebung. Google Business mit Bewertungs-Strategie für mehr Vertrauen bei Hausbesitzern.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine Dachdecker-Website?",
        a: "Konditionen je nach Umfang (Projektgalerie, Anfrageformular, Konfigurator). Persönlich besprechen.",
      },
      {
        q: "Können Sie meine Baustellenfotos aufbereiten?",
        a: "Ja. Eine professionelle Bildaufbereitung gehört zum Service – damit Ihre Projekte optimal zur Geltung kommen.",
      },
      {
        q: "Werde ich für „Dachdecker in meiner Nähe“ gefunden?",
        a: "Mit lokaler SEO und einem optimierten Google Business Profil definitiv – das ist eine der wichtigsten Suchanfragen für Hausbesitzer.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website hakt." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bei-google-nicht-gefunden", label: "Website bei Google nicht gefunden" },
      { href: "/probleme/website-seo-verbessern", label: "Website-SEO verbessern" },
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
    ],
    relatedGuides: [
      { href: "/ratgeber/google-ads-kosten", label: "Was kostet Google Ads?" },
      { href: "/ratgeber/seo-kosten", label: "Was kostet SEO?" },
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
    ],
  },
  {
    slug: "shk",
    h1: "Website für SHK-Betriebe im Saarland (Sanitär, Heizung, Klima)",
    metaTitle: "Website für SHK Saarland | Heizung, Sanitär & Klima | Fylu",
    metaDescription:
      "SHK-Websites im Saarland: mit Notdienst, Energieberatung und lokaler SEO. Mehr Aufträge für Sanitär, Heizung und Klima..",
    intro:
      "SHK-Betriebe sind gefragt wie nie – Wärmepumpen, Heizungsmodernisierung, Bäder, Solar. Eine professionelle Website ist heute entscheidend, um die Auftragsflut sinnvoll zu kanalisieren und die richtigen Kunden anzusprechen.",
    sections: [
      {
        title: "Klare Leistungsbereiche",
        text: "Sanitär, Heizung (inkl. Wärmepumpe), Klima, Energieberatung, Bäder, Solar – jede Leistung übersichtlich mit eigener Seite und passender SEO.",
      },
      {
        title: "Förder-Beratung als Magnet",
        text: "BAFA-Förderung, KfW-Zuschüsse und Heizungsförderung sind heute Top-Suchbegriffe. Mit einem eigenen Info-Bereich positionieren Sie sich als Experte.",
      },
      {
        title: "Lokale SEO & Notdienst",
        text: "Optimierung für „Sanitär Saarbrücken“, „Heizung Saarlouis“, „Wärmepumpe Neunkirchen“. Prominente Notdienst-Hinweise und Google Business Profil.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine SHK-Website?",
        a: "Konditionen je nach Umfang (Förderrechner, Beratungs-Tools, Buchungssystem). Persönlich besprechen.",
      },
      {
        q: "Können Sie einen Förderrechner integrieren?",
        a: "Ja, das ist heute ein starker Conversion-Magnet. Auf Anfrage integrieren wir passende Tools.",
      },
      {
        q: "Lohnt sich ein Wärmepumpen-Bereich?",
        a: "Absolut – Wärmepumpe ist eines der gefragtesten Suchthemen und positioniert Sie als zukunftsorientierter Betrieb.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website hakt." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bei-google-nicht-gefunden", label: "Website bei Google nicht gefunden" },
      { href: "/probleme/website-seo-verbessern", label: "Website-SEO verbessern" },
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
    ],
    relatedGuides: [
      { href: "/ratgeber/google-ads-kosten", label: "Was kostet Google Ads?" },
      { href: "/ratgeber/seo-kosten", label: "Was kostet SEO?" },
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
    ],
  },
  {
    slug: "schreiner",
    h1: "Website für Schreiner und Tischler im Saarland",
    metaTitle: "Website für Schreiner Saarland | Mehr Aufträge online | Fylu",
    metaDescription:
      "Schreiner-Websites im Saarland: mit Projektgalerie, Leistungen und lokaler SEO. Mehr Aufträge für individuelle Möbel & Innenausbau..",
    intro:
      "Schreiner und Tischler verkaufen Handwerkskunst. Ihre Website muss das transportieren – mit hochwertigen Bildern, einer klaren Leistungsübersicht und einer SEO-Basis, die für lokale Suchen wie „Schreiner Saarlouis“ oder „Tischler Saarbrücken“ rankt.",
    sections: [
      {
        title: "Projektgalerie als Verkaufstool",
        text: "Hochwertige Bilder Ihrer Möbel, Einbauten und Maßanfertigungen. So überzeugen Sie potenzielle Kunden bereits beim ersten Klick.",
      },
      {
        title: "Klare Leistungsstruktur",
        text: "Möbelbau, Innenausbau, Türen, Fenster, Küchen, Restaurierung – als eigene Bereiche mit SEO-optimierten Texten.",
      },
      {
        title: "Lokale SEO & Bewertungen",
        text: "Optimierung für lokale Suchanfragen und Google Business Profil mit Bewertungsstrategie – Vertrauen ist im Handwerk alles.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine Schreiner-Website?",
        a: "Konditionen je nach Umfang (Projektgalerie, Konfigurator, Online-Anfrage). Persönlich besprechen.",
      },
      {
        q: "Können Sie ein 3D-Konfigurator-Tool integrieren?",
        a: "Auf Anfrage – das ist ein starker Conversion-Hebel für individuelle Möbel.",
      },
      {
        q: "Wie wichtig ist die Bildqualität?",
        a: "Entscheidend. Hochwertige Bilder Ihrer Arbeit sind das beste Verkaufsargument für hochwertiges Handwerk.",
      },
    ],
  },
  {
    slug: "garten-landschaftsbau",
    h1: "Website für Garten- und Landschaftsbau im Saarland",
    metaTitle: "Website für GaLaBau Saarland | Mehr Aufträge | Fylu",
    metaDescription:
      "GaLaBau-Websites im Saarland: mit Projektgalerie, lokaler SEO und Anfrageformular. Mehr Aufträge für Gartenbau in Saarbrücken & Co..",
    intro:
      "Im Garten- und Landschaftsbau entscheidet die Bildwirkung. Eine Website mit hochwertigen Projektbildern, klarer Leistungsdarstellung und lokaler SEO bringt Sie zu den Hausbesitzern, die genau Ihre Leistung suchen.",
    sections: [
      {
        title: "Bildgewaltige Projektgalerie",
        text: "Vorher-Nachher-Bilder, Gartenanlagen, Terrassen, Teiche, Pflanzungen – hochwertig präsentiert und mobile-optimiert.",
      },
      {
        title: "Leistungen klar strukturiert",
        text: "Neuanlage, Gartenpflege, Pflasterarbeiten, Bewässerung, Teichbau, Baumschnitt – jede Leistung mit eigener Seite und lokalem SEO-Fokus.",
      },
      {
        title: "Saisonale Anfrage-Steuerung",
        text: "Im Frühjahr sind Anfragen oft chaotisch. Eine intelligente Anfragestrecke filtert Spielereien aus und priorisiert echte Kunden.",
      },
    ],
    faqs: [
      {
        q: "Was kostet eine GaLaBau-Website?",
        a: "Konditionen je nach Umfang (Bildergalerie, Online-Buchung). Persönlich besprechen.",
      },
      {
        q: "Wie wichtig sind hochwertige Fotos?",
        a: "Entscheidend. Gartenbau ist visuell – ohne starke Bilder funktioniert die Website nur halb.",
      },
      {
        q: "Können Sie auch saisonale Aktionen integrieren?",
        a: "Ja – Frühjahrsaktionen, Herbst-Pflanzungen oder Winter-Baumschnitt können prominent eingeblendet werden.",
      },
    ],
  },
  {
    slug: "photovoltaik",
    h1: "Website für Photovoltaik-Unternehmen im Saarland",
    metaTitle: "Website für Photovoltaik-Unternehmen | Qualifizierte Anfragen | Fylu",
    metaDescription:
      "Websites für PV-Installateure und Photovoltaik-Anbieter: qualifizierte Anfragen mit Vor-Konfigurator, transparente Förderung, lokale SEO. Für hochwertige B2B-Aufträge.",
    intro:
      "Photovoltaik ist einer der wenigen Wachstumsmärkte mit weiterhin steigender Nachfrage und hohen Auftragswerten. Der Engpass ist selten die Nachfrage, sondern die Vorqualifikation: zu viele unqualifizierte Anfragen kosten Vertriebszeit. Eine professionelle Website filtert vorab und produziert Anfragen mit echtem Projektvolumen.",
    sections: [
      {
        title: "Vorqualifikation als Effizienz-Hebel",
        text: "Ein Online-Konfigurator, der Dachfläche, Verbrauch, Standort und Zielsetzung strukturiert erfasst, spart pro Verkaufsgespräch 30 bis 60 Minuten Erstberatung. Wer nur qualifizierte Anfragen bekommt, wandelt sichtbar mehr Aufträge um — bei gleicher Vertriebskapazität.",
      },
      {
        title: "Förderberatung als Vertrauens-Signal",
        text: "BEG-Förderung, KfW-Programme, steuerliche Absetzbarkeit: Eigentümer suchen aktiv nach diesen Informationen. Wer sie strukturiert bereitstellt, positioniert sich als kompetenter Ansprechpartner — vor dem ersten Kontakt. Content-Cluster zu Fördermitteln bringt planbar SEO-Traffic mit hoher Kaufabsicht.",
      },
      {
        title: "Lokale SEO für PV-Suchen",
        text: "Suchen wie „PV-Anlage Saarbrücken“, „Solar Handwerker Saarlouis“, „Wärmepumpe mit Photovoltaik“ haben klare lokale Absicht und hohe Konversionsraten. Google-Unternehmensprofil, LocalBusiness-Schema, klare Servicegebiete und regionale Referenzen sind die Stellhebel.",
      },
    ],
    faqs: [
      {
        q: "Wie qualifiziert kann eine Online-Anfrage wirklich sein?",
        a: "Mit einem sauber gebauten Vor-Konfigurator (Dachfläche, Neigung, Ausrichtung, Verbrauch, Speicher-Interesse, Budget-Rahmen) bekommen Sie zu 80 Prozent Anfragen mit realem Projektvolumen. Nicht jede wird zum Auftrag, aber der Filter-Effekt ist deutlich messbar.",
      },
      {
        q: "Wie funktioniert die Förderberatung als Lead-Magnet?",
        a: "Eigene Ratgeber-Seiten zu BEG, KfW 458, steuerlichen Vorteilen und Kombinationsförderung. Nutzer, die aktiv nach Förderung suchen, sind in der Entscheidungsphase. Eine strukturierte, sachliche Übersicht positioniert Sie als kompetenten Ansprechpartner.",
      },
      {
        q: "Lohnt sich Google Ads für Photovoltaik?",
        a: "Ja, in besonderem Maß. Klickpreise sind höher als in vielen anderen Segmenten (typisch 5 bis 15 Euro), aber Auftragswerte auch. Ein einzelner gewonnener Auftrag amortisiert oft mehrere Monate Ads-Budget. Voraussetzung: sauberes Conversion-Tracking und passende Landing-Page.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website hakt." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bei-google-nicht-gefunden", label: "Website bei Google nicht gefunden" },
      { href: "/probleme/website-seo-verbessern", label: "Website-SEO verbessern" },
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
    ],
    relatedGuides: [
      { href: "/ratgeber/google-ads-kosten", label: "Was kostet Google Ads?" },
      { href: "/ratgeber/seo-kosten", label: "Was kostet SEO?" },
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
    ],
  },
  {
    slug: "gebaeudereinigung",
    h1: "Website für Gebäudereinigungsunternehmen",
    metaTitle: "Website für Gebäudereinigung | B2B-Aufträge gewinnen | Fylu",
    metaDescription:
      "Websites für Gebäudereinigung: professionelle Auftraggeber gewinnen, Zertifikate sichtbar machen, ausschreibungs-fit auftreten. B2B-fokussiert.",
    intro:
      "Gebäudereinigung ist einer der wenigen Wachstumsmärkte mit stabilen langfristigen Aufträgen — vorausgesetzt, das Unternehmen kann die richtigen Auftraggeber überzeugen. Verwaltungsgebäude, Industriekomplexe, Facility-Management und öffentliche Ausschreibungen entscheiden meist innerhalb von 60 Sekunden auf der Website, ob ein Anbieter zur Auswahl kommt. Eine austauschbare Website kostet diese Aufträge.",
    sections: [
      {
        title: "Zertifikate und Substanz sichtbar machen",
        text: "ISO 9001, RAL-Gütezeichen Gebäudereinigung, Meisterbetrieb, Referenzobjekte, Personalstruktur, Fuhrpark: das sind die Signale, die Facility-Manager und Ausschreibungsstellen suchen. Wir bauen die Website so, dass diese Substanz strukturiert dargestellt wird — nicht als PDF-Anhang, sondern als eigene Sektionen die auch von Google indexiert werden.",
      },
      {
        title: "Getrennte Ansprache für unterschiedliche Auftraggeber",
        text: "Bürogebäude, Industriereinigung, medizinische Einrichtungen, Hotellerie, Wohnungswirtschaft — jede Zielgruppe hat andere Anforderungen (Hygiene-Standards, Schichtzeiten, Freigaben, Vertragsformen). Eigene Landing-Seiten pro Objekttyp erhöhen die Relevanz und die Ausschreibungs-Passung deutlich.",
      },
      {
        title: "Lokale und regionale Sichtbarkeit",
        text: "Optimierung für konkrete Suchbegriffe wie „Gebäudereinigung Saarbrücken“, „Industriereinigung Saarland“, „Facility-Reinigung Homburg“. Plus Google-Unternehmensprofil, das für Suchen mit Objektbezug prominent erscheint.",
      },
    ],
    faqs: [
      {
        q: "Was macht eine gute Gebäudereinigungs-Website aus?",
        a: "Klare Trennung nach Objekttyp, sichtbare Zertifikate und Referenzen, transparente Beschreibung der Prozesse (Qualitätssicherung, Personalführung, Vertragsmodelle), konkrete Ansprechpartner. Kein Marketing-Blabla, sondern nachprüfbare Substanz.",
      },
      {
        q: "Kann eine Website wirklich B2B-Ausschreibungen bringen?",
        a: "Ja — als Vor-Qualifikationsfilter. Facility-Manager recherchieren vor Ausschreibung fast immer online, welche Anbieter überhaupt zur Auswahl kommen. Eine Website, die Kompetenz strukturiert zeigt, öffnet die Türen zur Einladung.",
      },
      {
        q: "Wie lange dauert der Aufbau einer solchen Website?",
        a: "Für eine solide B2B-Website mit klarer Auftraggeber-Struktur typischerweise vier bis acht Wochen. Wenn Zertifikate, Referenzobjekte und Prozessbeschreibungen bereits vorliegen, entsprechend schneller.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website hakt." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bei-google-nicht-gefunden", label: "Website bei Google nicht gefunden" },
      { href: "/probleme/website-seo-verbessern", label: "Website-SEO verbessern" },
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
    ],
    relatedGuides: [
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
      { href: "/ratgeber/seo-kosten", label: "Was kostet SEO?" },
      { href: "/ratgeber/website-agentur-kosten", label: "Freelancer, Studio oder Agentur?" },
    ],
  },
  {
    slug: "industrie",
    h1: "Website für Industrieunternehmen im Saarland",
    metaTitle: "Website für Industrie & Mittelstand | B2B-Vertrieb | Fylu",
    metaDescription:
      "Websites für produzierendes Gewerbe und Industrie-Mittelstand: technisch dichte Produktdarstellung, internationale Sichtbarkeit, saubere Vertriebs-Architektur.",
    intro:
      "Industriebetriebe verkaufen nicht spontan. Der typische B2B-Kaufprozess dauert Wochen bis Monate, involviert mehrere Entscheider und startet fast immer mit einer Google-Recherche. Wer in dieser Phase nicht substanziell sichtbar ist, wird für relevante Anfragen und Ausschreibungen gar nicht erst in Betracht gezogen — unabhängig von Produktqualität und Reputation im etablierten Umfeld.",
    sections: [
      {
        title: "Produkte und Technologien strukturiert darstellen",
        text: "Technische Datenblätter, Anwendungsfälle, Zertifizierungen, Compliance-Nachweise: die typischen Kaufkriterien im industriellen B2B-Segment. Wir bauen die Website als strukturiertes Produktverzeichnis mit sauberer Filterlogik und Zugriff auf Detail-Dokumente — indexierbar, aber auch für Fachrecherchen intern nutzbar.",
      },
      {
        title: "Vertriebsarchitektur mit klarer Konversion",
        text: "Kontaktaufnahme im Industrie-B2B ist selten „Kaufen“-Button. Sinnvolle Konversionen: Datenblatt-Download, technisches Erstgespräch, Produkt-Demo, Angebotsanfrage mit Vorqualifikation. Jede dieser Aktionen wird bewusst gestaltet und getrackt — als eigene Metrik, nicht als Sammel-Formular.",
      },
      {
        title: "Internationale Sichtbarkeit wo relevant",
        text: "Viele deutsche Industrieunternehmen exportieren 40 bis 80 Prozent. Ohne mehrsprachige Website (DE/EN/FR mindestens) bleibt der Zugang zu internationalen Buying-Centern verschlossen. Wir bauen mehrsprachig mit sauberen hreflang-Signalen — nicht als Übersetzungs-Kosmetik, sondern mit sprachspezifischer Content-Struktur.",
      },
    ],
    faqs: [
      {
        q: "Warum brauchen Industrieunternehmen überhaupt eine moderne Website?",
        a: "Weil auch bei etablierten B2B-Beziehungen die Erst-Recherche neuer Ansprechpartner online passiert. Ein technischer Einkäufer, der 2018 an einen Zulieferer verkauft hat, prüft 2026 als neuer Ansprechpartner die Website — und trifft dort Entscheidungen über Vertrauen und Einladung zu Angeboten.",
      },
      {
        q: "Was ist der Unterschied zu einer Standard-B2B-Website?",
        a: "Industrie-Websites müssen technische Tiefe zeigen, ohne den Nicht-Ingenieur zu verlieren. Klare Produkt-Kategorien, strukturierte technische Daten, PDF-Datenblätter, Referenzeinsätze mit konkreten Anwendungen. Und das alles mehrsprachig und für lange Vertriebszyklen ausgelegt.",
      },
      {
        q: "Wie lange dauert ein solches Projekt?",
        a: "Für einen fokussierten Auftritt mit klarer Produktstruktur: sechs bis zehn Wochen. Bei umfangreichem Produktkatalog und mehreren Sprachen: drei bis fünf Monate. Der Löwenanteil ist typischerweise die technische Content-Aufbereitung, nicht die Umsetzung selbst.",
      },
    ],
    relatedTools: [
      { href: "/tools/website-check", label: "Website-Analyse", description: "Prüft in unter 15 Sekunden, wo Ihre Website hakt." },
      { href: "/tools/website-kosten-rechner", label: "Kosten-Rechner", description: "Investitions-Spanne für Ihr Vorhaben in zwei Minuten." },
      { href: "/tools/seo-check", label: "SEO-Check", description: "Priorisierte SEO-Findings mit konkreter Handlungsempfehlung." },
    ],
    relatedProblems: [
      { href: "/probleme/website-bekommt-keine-anfragen", label: "Website bekommt keine Anfragen" },
      { href: "/probleme/website-conversion-verbessern", label: "Website-Conversion verbessern" },
      { href: "/probleme/website-zu-alt", label: "Website wirkt veraltet" },
    ],
    relatedGuides: [
      { href: "/ratgeber/website-kosten", label: "Was kostet eine Website?" },
      { href: "/ratgeber/website-relaunch", label: "Website-Relaunch: Wann sinnvoll?" },
      { href: "/ratgeber/website-agentur-kosten", label: "Freelancer, Studio oder Agentur?" },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
