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
  {
    slug: "zahnarzt",
    h1: "Website für Zahnärzte im Saarland",
    metaTitle: "Website für Zahnarzt Saarland | Mehr Neupatienten online | Fylu",
    metaDescription:
      "Zahnarzt-Websites speziell für das Saarland: seriöses Design, Online-Termin, lokale SEO. Mehr qualifizierte Neupatienten in Saarbrücken, Saarlouis und Co.",
    intro:
      `Neupatienten googeln heute zuerst „Zahnarzt Saarbrücken" oder „Implantologe Saarlouis" – bevor sie überhaupt anrufen. Wer auf Seite 2 landet oder eine veraltete Website hat, verliert genau diese Patienten an die nächstgelegene Praxis.`,
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
        text: `Optimiert für Suchbegriffe wie „Zahnarzt Saarbrücken Notdienst", „Kieferorthopäde Saarlouis", „Implantate Homburg" oder „Bleaching Merzig". Inkl. Google-Unternehmensprofil-Setup und Strategie für mehr 5-Sterne-Bewertungen.`,
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
  },
  {
    slug: "anwalt",
    h1: "Website für Anwälte & Kanzleien im Saarland",
    metaTitle: "Website für Anwalt Saarland | Mehr Mandanten online | Fylu",
    metaDescription:
      "Anwalts- und Kanzlei-Websites im Saarland: seriös, fachgebietsorientiert, mit lokaler SEO. Mehr qualifizierte Mandantenanfragen in Saarbrücken, Saarlouis und ganz Saarland.",
    intro:
      `Mandanten googeln heute spezifisch nach „Anwalt Familienrecht Saarbrücken" oder „Fachanwalt Arbeitsrecht Saarlouis". Wer dort nicht oben rankt, wird übersehen – egal wie groß die Reputation ist.`,
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
        a: `Wir optimieren pro Fachgebiet und Standort – z.B. „Fachanwalt Arbeitsrecht Saarbrücken". Plus Content-Strategie mit Rechtsratgeber-Artikeln, die qualifizierte Mandanten anziehen.`,
      },
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
        text: `Optimierung für Suchbegriffe wie „Haus verkaufen Saarbrücken", „Immobilienmakler Saarlouis", „Wohnung kaufen Homburg". Inkl. Google-Unternehmensprofil und Bewertungsstrategie.`,
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
        text: `Optimierung für „Hausarzt Saarbrücken", „Kardiologe Saarlouis", „Dermatologe Homburg" und vergleichbare Suchbegriffe. Inkl. professionellem Google-Unternehmensprofil mit Fotos, Sprechzeiten und Review-Strategie.`,
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
        text: `Optimierung für „Friseur Saarbrücken", „Balayage Saarlouis", „Männerhaarschnitt Homburg" und vergleichbare Suchbegriffe. Inkl. Google-Unternehmensprofil mit Fotos, Stories und Review-Strategie.`,
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
        text: "Eigene Buchungs-Engine direkt auf der Website integriert. Gäste buchen direkt, Sie sparen die OTA-Provision. Bei 100 Buchungen pro Jahr á 200 € sind das schnell 4.000 € Mehrertrag.",
      },
      {
        title: "Premium-Inszenierung",
        text: "Hochwertige Bildwelten, 360°-Touren, atmosphärische Beschreibungen, Region-Storytelling. Mit klarem Fokus auf das, was Saarland-Gäste suchen: Saarschleife, Bostalsee, Völklinger Hütte, Weinregion.",
      },
      {
        title: "Lokale & touristische SEO",
        text: `Optimierung für „Hotel Saarbrücken", „Wellnesshotel Bostalsee", „Pension Saarschleife", saisonale Begriffe und Anreise-Routen. Inkl. Google-Profil mit aktuellen Bildern, Bewertungs-Pflege und Story-Inhalten.`,
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
        text: `Optimierung sowohl für „Autohaus Saarbrücken" als auch für markenspezifische Suchen wie „BMW Saarlouis", „Werkstatt Audi Homburg" oder „Reifen wechseln Saarbrücken".`,
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
        text: `Optimierung für „Elektriker Saarbrücken", „PV-Anlage Saarlouis", „Wallbox installieren Homburg" und vergleichbare Suchbegriffe. Plus Schema.org für Notdienst, Öffnungszeiten und Servicegebiete.`,
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
        a: "Für Photovoltaik, Wärmepumpen und E-Mobilität: definitiv ja. Auftragswerte sind hoch (5.000–30.000 €), Werbe-Kosten amortisieren sich oft mit dem ersten Lead.",
      },
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
        text: `Optimierung für „Heizungsbauer Saarbrücken", „Wärmepumpe Saarlouis", „Bad sanieren Homburg" und vergleichbare hochpreisige Suchbegriffe. Inkl. Schema.org für lokale Dienstleister.`,
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
        text: `Optimierung für „Maler Saarbrücken", „Fassade streichen Saarlouis", „Wohnung renovieren Homburg" und ähnliche Suchbegriffe. Inkl. Google-Unternehmensprofil mit aktuellen Projektbildern.`,
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
        a: `Ja. Z.B. „Frühjahrsaktion Fassade", „Renovierung in der Nebensaison günstiger" – als Conversion-Booster zu schwachen Jahreszeiten.`,
      },
    ],
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
