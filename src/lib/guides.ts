// Ratgeber-Cluster: Seiten für Nutzer, die eine konkrete Frage (meist rund um
// Kosten, Ablauf oder Kaufentscheidung) haben. Muster: Frage benennen → Kurze
// Antwort oben (Snippet) → Detaillierte Erklärung → Beispiele/Zahlen → Ablauf →
// passendes Tool → Vorgespräch als Eskalation.

export type GuideToolLink = {
  href: "/tools/website-check" | "/tools/seo-check" | "/tools/website-kosten-rechner";
  label: string;
  reason: string;
};

export type GuidePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortAnswer: string; // Snippet-optimierte Kurzantwort
  intro: string;
  sections: { title: string; text: string }[];
  examples?: { title: string; text: string }[];
  process?: { step: number; title: string; text: string }[];
  tool: GuideToolLink;
  faqs: { q: string; a: string }[];
  publishedAt: string;
  updatedAt: string;
};

export const guides: GuidePage[] = [
  {
    slug: "website-kosten",
    metaTitle: "Was kostet eine Website? Spannen und Preistreiber 2026 | Fylu",
    metaDescription:
      "Was kostet eine Website wirklich? Transparente Aufschlüsselung nach Projektklasse, Umfang und Funktionsbedarf — inkl. konkreter Preisspannen und ehrlichen Preistreibern.",
    h1: "Was kostet eine Website? Transparente Spannen, ehrliche Preistreiber.",
    shortAnswer:
      "Für professionelle B2B-Websites bewegen sich seriöse Angebote je nach Umfang und Design-Tiefe zwischen 3.500 und 25.000 Euro netto. Kompaktere Auftritte auch darunter, individuelle Vorhaben mit Sonderfunktionen darüber. Wer eine „450-Euro-Website“ verkauft, verkauft in der Regel etwas anderes.",
    intro:
      "Die Frage „was kostet eine Website“ bekommt selten eine ehrliche Antwort — meistens, weil sie strukturell schwer zu beantworten ist. Zu viele Variablen: Umfang, Design-Tiefe, Content-System, Funktionsbedarf, SEO-Investition, Sprachen, Wartungsmodell. Dieser Artikel legt die Rechnung offen und macht die Spannen greifbar.",
    sections: [
      {
        title: "Warum die Spannen so groß sind",
        text: "Eine Website ist kein Produkt mit festem Bauplan, sondern eine Zusammensetzung aus Konzeption, Design, Entwicklung, Content-Struktur und laufender Substanz. Zwei Projekte mit gleicher Seitenanzahl können sich in Aufwand um Faktor drei unterscheiden — je nachdem, wie tief Zielgruppen-Konzeption, Content-Aufbau und individuelle Gestaltung gehen. Wer eine seriöse Antwort will, muss zuerst über Zielgruppe und Nutzen sprechen, nicht über Seitenzahl.",
      },
      {
        title: "Die vier großen Preistreiber",
        text: "Erstens: Design-Tiefe. Ein Standard-Layout ist deutlich schneller gebaut als ein editorial-individueller Auftritt. Zweitens: Content-Umfang. Zwanzig Seiten mit substanziellem Text und eigener Bildwelt brauchen einen anderen Aufwand als fünf. Drittens: Funktionsbedarf. Rechner, Konfiguratoren, Portale, Shops verlangen jeweils eigenes Konzept und eigene Entwicklung. Viertens: SEO-Investition. Eine SEO-Foundation als Beiwerk kostet wenig — ein aktiv aufgebauter SEO-Cluster über mehrere Monate deutlich mehr, bringt dafür planbar Sichtbarkeit.",
      },
      {
        title: "Woran erkennen Sie ein seriöses Angebot",
        text: "Ein belastbares Angebot benennt Leistungen konkret (Anzahl Seiten, Design-Iterationen, Content-Verantwortung, CMS-Umfang, SEO-Basis, Hosting-Dauer, Support-Konditionen) und legt fest, was zusätzlich kalkuliert wird. Angebote, die nur eine Pauschale nennen, sind entweder sehr klein oder verstecken Zusatzkosten. Fragen Sie explizit nach: Was ist enthalten? Was wird zusätzlich berechnet? Wer verantwortet die Texte?",
      },
      {
        title: "Was Sie beim Vergleich beachten sollten",
        text: "Zwei Angebote in derselben Preisklasse können sich fundamental unterscheiden. Ein Studio, das die eigene Konzeptions- und Design-Phase transparent macht, arbeitet anders als eine Agentur, die Templates anpasst. Fragen Sie: Wer arbeitet konkret an meinem Projekt? Wie sieht der Prozess aus? Was passiert, wenn ich später ändern will? Die Antworten trennen langfristige Partner von einmaligen Dienstleistern.",
      },
    ],
    examples: [
      {
        title: "Kompakter B2B-Auftritt (etwa 3.500 – 6.500 €)",
        text: "5–7 Seiten, Standard-Design, redaktionelles CMS, SEO-Basis, mobile Optimierung, transparentes Hosting. Ausreichend für kleinere Kanzleien, spezialisierte Handwerksbetriebe oder etablierte Freiberufler mit klarem Angebot.",
      },
      {
        title: "Vollständige Studio-Website (etwa 7.000 – 15.000 €)",
        text: "8–15 Seiten, Premium- oder Signature-Design, individuelle Bildwelt, erweiterte SEO-Foundation, mehrstufige Formulare, ggf. zweite Sprache, 90-Tage-Begleitung. Der übliche Rahmen für etablierte Mittelständler.",
      },
      {
        title: "Individueller Auftritt mit Sonderfunktionen (ab 15.000 €)",
        text: "Umfangreiche Seitenzahl, headless CMS, Rechner oder Konfigurator, mehrere Sprachen, Integrations- und Automatisierungsschnittstellen. Für Vorhaben mit klarem digitalen Vertriebsanspruch oder komplexem Portfolio.",
      },
    ],
    tool: {
      href: "/tools/website-kosten-rechner",
      label: "Kosten-Rechner öffnen",
      reason:
        "In unter zwei Minuten die eigene Projektklasse und Investitions-Spanne einordnen — ohne Registrierung.",
    },
    faqs: [
      {
        q: "Warum ist eine 500-Euro-Website meistens keine gute Idee?",
        a: "Weil sich in dieser Klasse fast immer verstecken: Templates ohne Zielgruppen-Anpassung, Standard-Texte, keine SEO-Basis, kein Ansprechpartner nach Live-Gang. Für ein persönliches Portfolio funktioniert das. Für ein Unternehmen, das Neukunden über die Website gewinnen will, meist nicht.",
      },
      {
        q: "Was kostet die laufende Pflege einer Website?",
        a: "Übliche Größenordnungen: 40 bis 200 Euro pro Monat für Hosting, Updates und kleine inhaltliche Anpassungen. Eigene SEO-Betreuung oder aktive Content-Arbeit kommt separat obendrauf und wird transparent kalkuliert.",
      },
      {
        q: "Ist eine Website mit Rechner oder Konfigurator deutlich teurer?",
        a: "Ja, meist um 2.000 bis 8.000 Euro zusätzlich — je nach Komplexität, Anzahl Regeln und Design. Der Return: qualifiziertere Anfragen, weil Nutzer sich vor dem Erstkontakt selbst orientieren.",
      },
      {
        q: "Was macht der Kosten-Rechner konkret?",
        a: "Er nimmt elf strukturierte Eingaben (Branche, Umfang, Design-Tiefe, Sprachen, Shop, Funktionen …) und ordnet Ihr Vorhaben in eine der drei Projektklassen ein — plus konkrete Investitions-Spanne und Zeitplan-Schätzung. Basis sind reale Fylu-Projekte.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "website-relaunch",
    metaTitle: "Website-Relaunch: Wann sinnvoll, worauf achten | Fylu",
    metaDescription:
      "Wann lohnt sich ein Website-Relaunch, wann reicht Nachbessern? Der Ablauf eines sauberen Relaunch-Prozesses, typische Fallstricke und die Kosten-Nutzen-Frage.",
    h1: "Website-Relaunch: Wann sinnvoll, worauf achten, was es wirklich bringt.",
    shortAnswer:
      "Ein Relaunch lohnt, wenn die aktuelle Website an mindestens zwei von drei Achsen nicht mehr trägt: Design (wirkt nicht mehr zeitgemäß), Struktur (keine klare Verkaufsarchitektur), Technik (langsam, unwartbar, veraltet). Wenn nur eine Achse hakt, ist gezieltes Nachbessern meist die schnellere und günstigere Antwort.",
    intro:
      "Der Website-Relaunch ist die teuerste Entscheidung im Website-Lebenszyklus — und auch die häufigste Fehlentscheidung. Nicht jede unbefriedigende Website braucht einen kompletten Neuaufbau. Manchmal reichen zwei Wochen Conversion-Optimierung und ein neues Bildkonzept. Dieser Artikel hilft, die richtige Frage zu stellen.",
    sections: [
      {
        title: "Wann ein Relaunch wirklich sinnvoll ist",
        text: "Drei Signale, die zusammen einen Relaunch rechtfertigen: Erstens, die Website wirkt zeitlich versetzt (Design aus einer anderen Ära, Corporate Wording, das nicht mehr zur Firma passt). Zweitens, die Struktur passt nicht mehr zum Geschäft — Leistungen wurden ergänzt, Zielgruppen haben sich verschoben, die IA ist nicht mehr auflösbar. Drittens, die technische Basis limitiert die Weiterentwicklung — veraltetes CMS, unmögliche Performance-Optimierung, kein sauberer mobile-first-Ansatz.",
      },
      {
        title: "Wann Nachbessern die klügere Antwort ist",
        text: "Wenn nur eine Achse hakt — etwa der Hero-Bereich schwach ist oder die Formulare abbrechen — sollte man dort chirurgisch eingreifen. Ein kompletter Relaunch bindet drei bis sechs Monate Aufmerksamkeit und kostet meist das Fünf- bis Zehnfache einer gezielten Optimierung. Wer schon eine solide technische Basis hat, verliert bei einem Relaunch außerdem oft die aufgebauten SEO-Rankings, wenn URL-Struktur und Content-Cluster nicht sauber migriert werden.",
      },
      {
        title: "Die typischen Fallstricke",
        text: "Erstens: SEO-Verlust durch fehlende oder fehlerhafte 301-Weiterleitungen. Zweitens: Design-Fixierung ohne Verkaufsarchitektur — schön, aber wirkungslos. Drittens: fehlende Content-Migration, wenn wertvolle bestehende Landing-Pages nicht mit übergehen. Viertens: unrealistische Zeitpläne, bei denen die Feedback-Kapazität der Auftraggeberseite unterschätzt wird. Fünftens: kein sauberer Live-Gang mit Sichtbarkeits-Monitoring in den ersten Wochen.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Diagnose & Zieldefinition",
        text: "Warum wollen Sie den Relaunch? Was soll die neue Website messbar besser können als die alte? Diese Frage klärt, was Erfolg heißt. Ohne diese Klärung ist am Ende jeder unzufrieden.",
      },
      {
        step: 2,
        title: "Zielgruppen- und Verkaufsarchitektur",
        text: "Für wen wird gebaut? Welche Zielgruppen-Fragen soll die Seite in welcher Reihenfolge beantworten? Welche Aktion ist das Ziel? Erst danach beginnt das Design.",
      },
      {
        step: 3,
        title: "Content-Konzept und SEO-Bestandsprüfung",
        text: "Welche bestehenden Inhalte tragen Rankings, welche müssen migriert werden? Welche neue Inhalte kommen dazu? Hier entscheidet sich, ob der Relaunch SEO-Substanz behält oder verliert.",
      },
      {
        step: 4,
        title: "Design & Entwicklung",
        text: "Erst wenn die drei ersten Schritte sitzen, wird gestaltet. Editorial oder Standard — je nach Anspruch. Iterationen bewusst getaktet, nicht endlos.",
      },
      {
        step: 5,
        title: "Live-Gang mit Redirect-Plan",
        text: "Vollständige 301-Weiterleitungen von alten auf neue URLs, aktualisierte Sitemap, Search-Console-Migration. In den ersten vier Wochen aktives Monitoring der Sichtbarkeit.",
      },
      {
        step: 6,
        title: "Begleitung nach Live-Gang",
        text: "In den ersten 90 Tagen entstehen die eigentlichen Optimierungserkenntnisse — aus echtem Nutzerverhalten. Ein sauberer Relaunch endet nicht mit Launch, sondern mit dokumentierter Iteration.",
      },
    ],
    tool: {
      href: "/tools/website-check",
      label: "Website-Analyse starten",
      reason:
        "Prüft, wo Ihre aktuelle Website tatsächlich hakt — als Basis für die Frage, ob Nachbessern reicht oder ein Relaunch sinnvoll wird.",
    },
    faqs: [
      {
        q: "Wie lange dauert ein Website-Relaunch typischerweise?",
        a: "Für einen mittelgroßen B2B-Auftritt: sechs bis zwölf Wochen, wenn Content, Feedback und Entscheidungen zügig laufen. Größere Vorhaben mit individuellem Design und mehreren Sprachen: drei bis sechs Monate.",
      },
      {
        q: "Wie vermeide ich SEO-Verluste beim Relaunch?",
        a: "Vollständige Kartierung aller alten URLs, saubere 301-Weiterleitungen auf die neuen Ziele, aktualisierte Sitemap, Search-Console-Migration, aktives Monitoring in den ersten Wochen. Ohne diesen Schritt sind zwei bis drei Monate Ranking-Verlust die Regel.",
      },
      {
        q: "Was passiert mit alten Inhalten, die nicht mehr passen?",
        a: "Es gibt drei sinnvolle Optionen: (1) Auf eine thematisch passende neue URL 301-weiterleiten, wenn Traffic da war. (2) Aktualisieren und behalten, wenn der Inhalt noch relevant ist. (3) Sauber depublizieren mit 410-Status, wenn nichts davon zutrifft. Nichts einfach still löschen.",
      },
      {
        q: "Sollte ich beim Relaunch die Domain wechseln?",
        a: "Nur wenn es einen strategischen Grund gibt (Rebranding, Fusion, klarere Marke). Ein Domain-Wechsel kostet zusätzlich SEO-Substanz und lohnt sich nicht als Beiwerk. Falls doch: konsequente 301-Umleitung, Domain Change Tool in der Search Console, Geduld über 6 bis 12 Monate.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "seo-kosten",
    metaTitle: "Was kostet SEO? Foundation, Betreuung, Content-Aufbau | Fylu",
    metaDescription:
      "Was kostet SEO wirklich? Transparente Aufschlüsselung zwischen einmaliger Foundation, laufender Betreuung und aktivem Content-Aufbau — mit konkreten Preisspannen.",
    h1: "Was kostet SEO? Ehrliche Rahmen für Foundation, Betreuung und Content-Aufbau.",
    shortAnswer:
      "Einmalige SEO-Foundation für eine mittelgroße Website: typischerweise 1.500 bis 6.000 Euro. Laufende Betreuung: 500 bis 2.500 Euro pro Monat, je nach Umfang. Aktiver Content-Aufbau kommt separat, oft in Zwei-bis-Vier-Monats-Sprints kalkuliert.",
    intro:
      "SEO-Kosten schwanken deutlich stärker als Website-Kosten — und werden oft undurchsichtig kommuniziert. Der Grund: SEO ist keine einmalige Leistung, sondern eine Kombination aus Foundation, laufender Betreuung und aktivem Content-Aufbau. Wer die drei Ebenen trennt, kann Angebote endlich vergleichen.",
    sections: [
      {
        title: "Die drei Kosten-Ebenen von SEO",
        text: "Erste Ebene: einmalige Foundation. Technischer Audit, Sitemap-Aufbau, Structured Data, Canonicals, Meta-Optimierung, Google-Unternehmensprofil-Setup. Zweite Ebene: laufende Betreuung. Monitoring, Search-Console-Analyse, Content-Pflege, Ranking-Reports. Dritte Ebene: aktiver Content-Aufbau. Neue Landingpages, Ratgeber-Cluster, Backlink-Aufbau. Jede Ebene hat eigenen Kostenrahmen.",
      },
      {
        title: "Was in der Foundation drin sein sollte",
        text: "Technischer SEO-Audit, saubere Sitemap und Robots-Konfiguration, Structured Data (Organization/LocalBusiness/FAQPage), Meta-Optimierung aller Kern-URLs, Canonicals, mobile Basis, Page-Speed-Grundoptimierung, Google-Unternehmensprofil vollständig aufgesetzt. Alles darunter ist keine echte Foundation, sondern Kosmetik.",
      },
      {
        title: "Was laufende Betreuung tatsächlich leistet",
        text: "Monatliche Search-Console-Auswertung, Position-Monitoring der Kern-Keywords, kleine Content-Anpassungen, technisches Monitoring, Ranking-Report. In dieser Ebene sitzt die kontinuierliche Verbesserung — ohne die veraltet auch die beste Foundation nach 12 Monaten.",
      },
      {
        title: "Wann sich aktive Content-Investition lohnt",
        text: "Wenn Sie in einem umkämpften Markt Position gewinnen wollen — nicht halten. Content-Aufbau ist der Hebel für neue Rankings, die vorher nicht existierten. Rechnen Sie mit 1.500 bis 5.000 Euro pro Content-Cluster (Hub + 5 bis 10 Detail-Pages). Wirkungslatenz: drei bis sechs Monate bis zu sichtbaren Rankings.",
      },
    ],
    examples: [
      {
        title: "Foundation für mittelgroße B2B-Website (1.500 – 3.500 €)",
        text: "Technischer Audit, saubere technische Basis, Structured Data auf allen Kern-URLs, Meta-Optimierung, Google-Unternehmensprofil, Sitemap, robots.txt, Basis-Monitoring aufgesetzt. Einmalig, danach hält es typischerweise 12 bis 18 Monate ohne strukturellen Nacharbeit.",
      },
      {
        title: "Laufende Betreuung mittleren Umfangs (500 – 1.200 € pro Monat)",
        text: "Monatliches Reporting, Position-Monitoring 15 bis 30 Kern-Keywords, kleine Content-Anpassungen, GBP-Pflege, kleinere technische Fixes. Passend für Unternehmen mit stabilem Ranking, das gehalten und moderat ausgebaut werden soll.",
      },
      {
        title: "Aktiver Content-Aufbau (1.500 – 4.000 € pro Cluster)",
        text: "Hub-Page plus 5 bis 10 substanzielle Detail-Pages zu einem Kern-Thema, alle intern verlinkt, mit sauberer Meta- und Schema-Struktur. Wirkungslatenz drei bis sechs Monate. Passend für gezielte Positionierungs-Angriffe in neuen Themen.",
      },
    ],
    tool: {
      href: "/tools/seo-check",
      label: "SEO-Check starten",
      reason:
        "Zeigt in unter 15 Sekunden, wo Ihre Website SEO-mäßig aktuell steht — sinnvolle Basis, bevor Sie in Foundation oder Content-Aufbau investieren.",
    },
    faqs: [
      {
        q: "Warum sind SEO-Preise so unterschiedlich?",
        a: "Weil SEO drei sehr unterschiedliche Leistungen zusammenfasst (Foundation, Betreuung, Content-Aufbau) und Anbieter unterschiedliche Kombinationen daraus verkaufen. Ein „SEO-Paket für 200 Euro pro Monat“ deckt meist nur eine der Ebenen — oder deckt gar nichts wirklich Substantielles.",
      },
      {
        q: "Lohnt sich günstige SEO-Betreuung?",
        a: "Unter 400 Euro pro Monat ist meist keine echte Betreuung — sondern automatisierte Reports ohne strategische Auswertung. Wer wirklich Ranking gewinnen will, braucht mindestens die 500- bis 1.000-Euro-Klasse mit aktiver Analyse.",
      },
      {
        q: "Wie schnell sehe ich Ergebnisse einer SEO-Investition?",
        a: "Foundation-Fixes wirken in Wochen. Content-Investitionen brauchen drei bis sechs Monate. Backlink-Aufbau wirkt über sechs bis zwölf Monate. Wer schneller sichtbar sein will, kombiniert SEO mit gezielten Google Ads.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "google-ads-kosten",
    metaTitle: "Was kostet Google Ads? Budget, Klickpreise, Konditionen | Fylu",
    metaDescription:
      "Was kostet Google Ads wirklich? Realistische Budget-Rahmen, was Klickpreise treibt und wann sich Ads lohnen — plus transparente Angaben zu Agentur- und Betreuungskosten.",
    h1: "Was kostet Google Ads? Media-Budget, Agentur, Klickpreise — ehrlich aufgeschlüsselt.",
    shortAnswer:
      "Sinnvolles monatliches Media-Budget für lokale B2B-Kampagnen: 500 bis 3.000 Euro. Für kompetitivere Segmente (Wärmepumpen, Photovoltaik, hochwertige Kanzleien): 2.000 bis 10.000 Euro. Agentur-Setup einmalig: 800 bis 2.500 Euro. Laufende Betreuung: 300 bis 1.500 Euro pro Monat.",
    intro:
      "„Was kostet Google Ads“ ist eine unbeantwortbare Frage — außer man trennt Media-Budget von Agentur-Kosten und beides von der Wirtschaftlichkeit. Dieser Artikel legt die drei Ebenen offen und macht klar, wann sich Ads für welches Geschäftsmodell rechnen.",
    sections: [
      {
        title: "Die drei Kosten-Ebenen von Google Ads",
        text: "Erste Ebene: Media-Budget. Das, was Google für Klicks bekommt. Zweite Ebene: Setup. Einmalige Kampagnen-Konzeption, Konto-Struktur, Conversion-Tracking, erste Anzeigen und Landingpages. Dritte Ebene: laufende Betreuung. Kampagnen-Optimierung, A/B-Tests, Budget-Steuerung, Reporting. Ein sinnvolles Ads-Setup rechnet mit allen dreien.",
      },
      {
        title: "Was Klickpreise wirklich treibt",
        text: "Vier Faktoren: Wettbewerb im Suchbegriff (Photovoltaik-Klicks über 8 Euro, allgemeine Info-Suchen unter 1 Euro), Qualitäts-Score (technisch saubere Anzeigen + passende Landingpage senken den Klickpreis um bis zu 50 Prozent), Zielregion (Klicks in urbanen Zentren teurer als in ländlichen Regionen), Zeit (Morgens andere Preise als abends). Wer die Faktoren versteht, senkt Klickpreise systematisch.",
      },
      {
        title: "Wann sich Google Ads rechnen",
        text: "Grundregel: pro qualifizierten Lead sollten die Ad-Kosten deutlich unter der Marge des Erstauftrags liegen. Bei Aufträgen ab 3.000 Euro Marge sind Ads für Lead-Kosten bis 100 Euro selbst in umkämpften Segmenten wirtschaftlich. Bei kleineren Auftragsvolumen wird die Rechnung eng — dann lohnt sich Ads meist nur mit sehr präziser Targeting-Strategie.",
      },
      {
        title: "Setup-Fehler, die Geld verbrennen",
        text: "Kein Conversion-Tracking (dann sieht man nicht, welche Klicks Leads bringen), zu breite Match-Types (dann werden Klicks für irrelevante Suchen bezahlt), keine Landing-Page-Optimierung (dann konvertieren die teuren Klicks nicht), keine Ausschluss-Keyword-Pflege (dann läuft Budget in Suchen wie „gratis“ oder „selber machen“). Jeder Punkt spart mittelfristig einen vier- bis fünfstelligen Betrag pro Jahr.",
      },
    ],
    examples: [
      {
        title: "Lokale B2B-Kampagne, mittlerer Wettbewerb (Media 500 – 1.500 €/Monat)",
        text: "Beispiele: Steuerberater in einer mittelgroßen Stadt, Immobilienmakler, spezialisiertes Handwerk. Bei sauberer Landingpage-Optimierung realistisch 15 bis 40 qualifizierte Anfragen pro Monat.",
      },
      {
        title: "Kompetitive B2B-Kampagne (Media 2.000 – 8.000 €/Monat)",
        text: "Beispiele: Photovoltaik-Installation, Wärmepumpen, Fachanwälte in Top-Positionen. Höhere Klickpreise, aber auch entsprechend höhere Auftragswerte. Bei sauberer Ausrichtung amortisiert sich das Budget oft mit dem ersten Auftrag.",
      },
      {
        title: "Setup + laufende Betreuung (Setup 800 – 2.500 €, Betreuung 300 – 1.500 €/Monat)",
        text: "Setup: Konto-Struktur, Conversion-Tracking, erste Kampagnen, Landing-Anpassungen. Betreuung: monatliche Optimierung, A/B-Tests, Budget-Steuerung, Reporting. Ohne Betreuung verpuffen die meisten Setups nach 4 bis 8 Wochen.",
      },
    ],
    tool: {
      href: "/tools/website-kosten-rechner",
      label: "Kosten-Rechner öffnen",
      reason:
        "Wenn Sie parallel zur Ads-Kampagne die Landingpage neu bauen oder erweitern wollen: der Kosten-Rechner zeigt in zwei Minuten die realistische Investitions-Spanne.",
    },
    faqs: [
      {
        q: "Was ist ein guter Klickpreis?",
        a: "Kommt komplett auf den Suchbegriff an. Lokale B2B-Suchen: 1 bis 4 Euro. Kompetitive Suchen wie Photovoltaik: 5 bis 15 Euro. Sinnvoller ist die Frage nach den Kosten pro Lead — die trennt Wirtschaftlichkeit von Klickpreis-Kosmetik.",
      },
      {
        q: "Kann ich Google Ads selbst machen?",
        a: "Ja, aber die Lernkurve ist steil. Ohne fundiertes Wissen über Match-Types, Qualitäts-Score, Ausschluss-Keywords, Landing-Page-Optimierung und Conversion-Tracking verbrennen die meisten Selbstverwalter in den ersten Monaten deutlich mehr Budget als eine professionelle Betreuung gekostet hätte.",
      },
      {
        q: "Wie messe ich, ob sich Ads lohnen?",
        a: "Über sauberes Conversion-Tracking (Lead-Formular, Anruf, Kalender-Buchung), dokumentiert im Ads-Konto. Kosten pro Lead ausrechnen, mit Marge pro Kunde vergleichen. Wenn drei bis fünf Prozent der Leads in Kunden konvertieren, muss der Lead deutlich unter der Marge pro Kunde liegen — sonst zahlt die Kampagne drauf.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "webdesign-kosten",
    metaTitle: "Was kostet Webdesign? Template vs. Standard vs. individuell | Fylu",
    metaDescription:
      "Der Unterschied zwischen Template, Standard-Design und individueller Gestaltung — mit realistischen Preisspannen und den echten Preistreibern.",
    h1: "Was kostet Webdesign? Der ehrliche Vergleich zwischen Template, Standard und individueller Gestaltung.",
    shortAnswer:
      "Template-Anpassung: 500 bis 2.500 Euro. Standard-Design mit eigener Bildwelt: 2.500 bis 7.000 Euro. Individuelles Webdesign (Signature): 6.000 bis 20.000 Euro. Der Preisunterschied liegt fast vollständig in Konzeptions-Tiefe und individueller Gestaltung — nicht in der Programmierung.",
    intro:
      "Webdesign-Kosten werden am häufigsten missverstanden — weil der Preisunterschied zwischen einem Template-Setup für 800 Euro und einer individuellen Studio-Arbeit für 15.000 Euro nicht in der Programmierung liegt, sondern in Konzeption, Recherche und Gestaltung. Wer den Unterschied kennt, kann bewusst entscheiden.",
    sections: [
      {
        title: "Template, Standard, Signature — die drei Klassen",
        text: "Template-Anpassung heißt: bestehende Vorlage wird auf Firma zugeschnitten. Standard-Design heißt: eigenes Layout, aber mit gängigen Sektionen und Modulen. Signature heißt: individuelle Konzeption, eigene Bildwelt, editorial gestaltet. Jede Klasse hat ihre Berechtigung — und ihren eigenen Kostenrahmen.",
      },
      {
        title: "Wann Template ausreicht",
        text: "Für Portfolio-Websites, sehr kleine lokale Angebote oder Testkampagnen — wenn die Website nicht der primäre Vertriebskanal ist. Wer aus der Website Kunden gewinnen will, wird mit Templates fast immer unterhalb des Wettbewerbs bleiben. Die 800 Euro sparen dann jährlich zehntausende an entgangenen Anfragen.",
      },
      {
        title: "Wann Standard-Design der richtige Mittelweg ist",
        text: "Für etablierte Mittelständler mit klarem Angebot, die eine solide, professionelle Website brauchen — aber keinen editorial-individuellen Auftritt. Standard-Design mit eigener Bildwelt und klarer Verkaufsarchitektur wirkt in den meisten B2B-Segmenten überzeugend.",
      },
      {
        title: "Wann Signature-Design sich rechnet",
        text: "Für Unternehmen, deren Website Teil des Markenversprechens ist — hochwertige Kanzleien, Premium-Handwerk, ambitionierte B2B-Dienstleister. Die individuelle Gestaltung wirkt als Vertrauens- und Positionierungshebel. Der ROI zeigt sich nicht in Klickzahlen, sondern in der Qualität der Anfragen und Aufträge.",
      },
    ],
    examples: [
      {
        title: "Template-Anpassung (500 – 2.500 €)",
        text: "Bestehende Themes (Divi, Elementor, ready-made Next.js-Themes) werden auf Firma angepasst: Logo, Farben, Texte, Bilder. Schnell live, wirtschaftlich, aber austauschbar in der Wirkung.",
      },
      {
        title: "Standard-Design (2.500 – 7.000 €)",
        text: "Eigenes Layout, eigene Bildwelt (oft mit Bildbibliotheken), klare Content-Struktur, mobile-first, SEO-Basis. Passend für die meisten etablierten Mittelständler mit klarem Angebot.",
      },
      {
        title: "Signature-Design (6.000 – 20.000 €)",
        text: "Individuelle Gestaltung, eigenes Fotoshooting, editorial-orientierte Struktur, tiefe Content-Arbeit, ausgeprägte Typografie- und Farbwelt. Für Unternehmen, die aus dem Auftritt Vertrauen und Positionierung ableiten.",
      },
    ],
    tool: {
      href: "/tools/website-kosten-rechner",
      label: "Kosten-Rechner öffnen",
      reason:
        "Elf strukturierte Fragen, direkte Einordnung in eine der drei Klassen — inklusive konkreter Investitions-Spanne.",
    },
    faqs: [
      {
        q: "Warum kostet ein individuelles Webdesign ein Vielfaches eines Templates?",
        a: "Weil Konzeption, Recherche, Design-Iterationen und individuelle Bildwelt Zeit brauchen. Ein individuelles Design entsteht in typischerweise 60 bis 150 Arbeitsstunden. Ein Template-Setup in 8 bis 20. Der Unterschied liegt nicht in der Programmierung.",
      },
      {
        q: "Kann ich mit einem Template starten und später upgraden?",
        a: "Technisch ja, wirtschaftlich meist nicht. Ein späteres Upgrade kostet fast so viel wie ein neuer Signature-Auftritt — plus verlorene Zeit mit dem Zwischenschritt. Wenn Sie wissen, wo Sie hinwollen, direkt dort anfangen.",
      },
      {
        q: "Wer verantwortet die Texte bei einem Webdesign-Projekt?",
        a: "Standardmäßig der Kunde. Manche Studios (auch Fylu) bieten Copy-Begleitung an — als eigene Leistung mit eigenem Kostenrahmen. Wer keine Copy-Ressourcen intern hat, sollte das früh im Angebot klären.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "website-agentur-kosten",
    metaTitle: "Was kostet eine Website bei Freelancer, Studio oder Agentur? | Fylu",
    metaDescription:
      "Freelancer, Studio oder Agentur? Was jeweils realistische Preise sind, was den Preisunterschied begründet und wann welches Setup zu Ihrem Vorhaben passt.",
    h1: "Was kostet eine Website bei Freelancer, Studio oder Agentur? Ehrlicher Vergleich.",
    shortAnswer:
      "Freelancer: 1.000 bis 6.000 Euro. Studio: 4.000 bis 20.000 Euro. Klassische Agentur: 8.000 bis 40.000 Euro und mehr. Der Preisunterschied liegt in Prozess-Tiefe, Team-Größe, Substanz der Konzeption und Betreuungsverantwortung.",
    intro:
      "Freelancer, Studio, Agentur — dieselbe Website kann in den drei Setups fundamental unterschiedlich viel kosten. Der Grund ist nicht Geldgier, sondern strukturell: unterschiedliche Prozesstiefe, unterschiedliche Konzeptions-Substanz, unterschiedliche Betreuungsverantwortung. Wer die Unterschiede kennt, wählt bewusst.",
    sections: [
      {
        title: "Was ein Freelancer bietet — und was nicht",
        text: "Ein einzelner Freelancer liefert schnell, meist günstig und mit direkter Kommunikation. Was fehlt: umfassende Konzeption, Redundanz bei Ausfall, breites Skillset (Copy, Foto, SEO, Ads aus einer Hand). Passend für kleine Projekte mit klarem Umfang und wenig strategischem Beratungsbedarf.",
      },
      {
        title: "Was ein Studio bietet",
        text: "Ein Studio arbeitet meist mit zwei bis fünf Menschen, spezialisiert auf hochwertige Umsetzung. Vorteil: Kombinierte Skills (Design + Entwicklung + Copy + SEO), verlässliche Prozesse, weniger Ausfallrisiko, tiefere Konzeption. Nachteil gegenüber Freelancer: höhere Preisklasse. Passend für etablierte Unternehmen mit klarem Anspruch, denen der Auftritt wichtig ist.",
      },
      {
        title: "Was eine Agentur bietet",
        text: "Klassische Agenturen (15+ Mitarbeiter) bieten umfangreiche Prozesse, oft mit dedizierten Account-Managern, strategischer Beratung und Kapazität für Großprojekte. Nachteil: höhere Preisklasse, längere Kommunikationswege, weniger direkter Draht zum eigentlichen Umsetzer. Passend für Konzerne, komplexe Multi-Sprach-Projekte oder Ausschreibungspflichtige Vorhaben.",
      },
      {
        title: "Worauf Sie beim Vergleich achten sollten",
        text: "Nicht die Preisklasse allein, sondern was konkret enthalten ist. Fragen Sie: Wer arbeitet konkret an meinem Projekt? Wie viele Design-Iterationen sind drin? Wer verantwortet die Texte? Was passiert nach dem Live-Gang? Wie sind Zusatz-Wünsche kalkuliert? Die Antworten machen Preise erst wirklich vergleichbar.",
      },
    ],
    examples: [
      {
        title: "Freelancer für lokale Handwerksfirma (1.000 – 3.500 €)",
        text: "Klassische WordPress- oder Wix-Umsetzung mit Template-Anpassung, drei bis sechs Seiten, Kontaktformular, mobile-optimiert. Schnell live, funktional, aber ohne strategische Konzeption.",
      },
      {
        title: "Studio für etablierten Mittelständler (5.000 – 12.000 €)",
        text: "Individuelles Design, 8 bis 15 Seiten, eigene Bildwelt, klare Verkaufsarchitektur, SEO-Foundation, mobile-first, 90-Tage-Begleitung. Der übliche Rahmen für ambitionierte B2B-Auftritte.",
      },
      {
        title: "Agentur für Konzern oder komplexes Projekt (15.000 – 60.000 €)",
        text: "Strategische Beratung, mehrsprachig, komplexe Integrations- und Approval-Prozesse, dediziertes Account-Management, umfangreiche Governance. Passend für Multi-Stakeholder-Projekte mit klaren Compliance-Anforderungen.",
      },
    ],
    tool: {
      href: "/tools/website-kosten-rechner",
      label: "Kosten-Rechner öffnen",
      reason:
        "Ordnen Sie Ihr Vorhaben ein: Projektklasse, Umfang, Investitions-Spanne — unabhängig davon, welchen Anbietertyp Sie am Ende wählen.",
    },
    faqs: [
      {
        q: "Ist ein Studio immer besser als ein Freelancer?",
        a: "Nein. Für kleine, klar umrissene Projekte kann ein guter Freelancer die schnellere und günstigere Antwort sein. Ein Studio lohnt sich, wenn Konzeption, Substanz und Betreuung eine Rolle spielen — und das Projekt eine bestimmte Größe hat.",
      },
      {
        q: "Warum ist eine große Agentur so viel teurer?",
        a: "Weil sie andere Overhead-Strukturen finanzieren muss (Account-Manager, Strategen, Consulting-Ebene, größere Räume, mehr Prozesse). Für Konzern-Projekte ist das gerechtfertigt, für Mittelstands-Website meist überdimensioniert.",
      },
      {
        q: "Wie erkenne ich einen guten Anbieter unabhängig vom Typ?",
        a: "Transparente Prozessbeschreibung, echte Cases (nicht nur Screenshots), klare Rollenverteilung, ehrliche Antworten auf unbequeme Fragen. Wenn ein Anbieter im Vorgespräch nur verkauft und nicht zuhört, ist das ein starkes Warnsignal.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "website-redesign-kosten",
    metaTitle: "Was kostet ein Website-Redesign? Rahmen und SEO-Sicherung | Fylu",
    metaDescription:
      "Was kostet ein Website-Redesign? Der Unterschied zwischen Refresh und Vollrelaunch, was den Preis treibt und wie Sie SEO-Substanz durch den Prozess sichern.",
    h1: "Was kostet ein Website-Redesign? Rahmen, Preistreiber und die SEO-Fallen.",
    shortAnswer:
      "Design-Refresh mit gleicher Struktur: 1.500 bis 5.000 Euro. Selektiver Rebuild einzelner Sections: 3.000 bis 10.000 Euro. Vollständiger Relaunch mit neuer Struktur: 6.000 bis 25.000 Euro. Aufwand für saubere SEO-Migration kommt bei den letzten beiden Optionen dazu.",
    intro:
      "Ein Redesign ist selten die Frage „ja oder nein“, sondern „welche Tiefe“. Und genau darin liegen die größten Preisunterschiede: von einem reinen visuellen Refresh bis zum kompletten Neuaufbau ist der Faktor mindestens fünf. Wer die Tiefe bewusst wählt, spart oft mehrere Tausend Euro.",
    sections: [
      {
        title: "Refresh, selektiver Rebuild, Vollrelaunch",
        text: "Refresh: gleiche Struktur, gleiche URLs, aktualisiertes Design und aktualisierte Copy. Selektiver Rebuild: bestimmte Sections werden neu gebaut, der Rest bleibt. Vollrelaunch: neue Struktur, neue URLs, neues Design, neuer Content. Jede Option löst andere Probleme — und kostet entsprechend anders.",
      },
      {
        title: "Was den Preis wirklich treibt",
        text: "Erstens: Design-Tiefe (Refresh vs. neu). Zweitens: Content-Migration (wie viel muss übernommen, wie viel neu geschrieben werden?). Drittens: SEO-Sicherung (Redirect-Konzept, Search-Console-Migration, Monitoring). Viertens: technische Basis (bleibt das CMS oder wird migriert?). Fünftens: neue Funktionen (Rechner, Konfiguratoren, Portale).",
      },
      {
        title: "SEO-Sicherung als eigene Kostenposition",
        text: "Bei jedem Redesign, das URLs ändert, ist SEO-Sicherung Pflicht: Alte URLs kartieren, 301-Weiterleitungen auf die neuen Ziele definieren, Sitemap aktualisieren, Search Console migrieren, in den ersten Wochen aktives Ranking-Monitoring. Ohne diesen Aufwand verlieren fast alle Redesigns 20 bis 50 Prozent des Traffics für zwei bis vier Monate.",
      },
      {
        title: "Woran Sie den richtigen Umfang erkennen",
        text: "Nicht dort ansetzen, wo es sichtbar hakt, sondern dort, wo es wirtschaftlich hakt. Wenn nur die Copy datiert wirkt: Refresh reicht. Wenn Struktur nicht mehr zur Firma passt: selektiver Rebuild oder Vollrelaunch. Wenn das CMS Weiterentwicklung blockiert: Vollrelaunch inklusive technischer Migration.",
      },
    ],
    examples: [
      {
        title: "Reiner Design-Refresh (1.500 – 4.000 €)",
        text: "Gleiche Seiten, gleiche URLs, aktualisiertes Farb- und Type-System, überarbeitete Bildwelt, moderisierte Copy. Wirkt in vier bis sechs Wochen, kein SEO-Risiko.",
      },
      {
        title: "Selektiver Rebuild (3.000 – 8.000 €)",
        text: "Bestimmte Sections werden komplett neu gebaut (etwa Hero, Kontakt-Flow, Portfolio), der Rest der Seite bleibt. Wirtschaftlich, gezielt wirksam, geringes SEO-Risiko.",
      },
      {
        title: "Vollrelaunch mit SEO-Migration (6.000 – 25.000 €)",
        text: "Neue Struktur, neue URLs, neues Design, saubere 301-Migration, 90-Tage-Monitoring. Passend, wenn drei oder mehr Achsen (Design, Struktur, Technik, Positionierung) nicht mehr tragen.",
      },
    ],
    tool: {
      href: "/tools/website-check",
      label: "Website-Analyse starten",
      reason:
        "Prüft technische Basis und Content-Substanz Ihrer aktuellen Website — als objektive Grundlage für die Entscheidung zwischen Refresh, Rebuild und Vollrelaunch.",
    },
    faqs: [
      {
        q: "Verliere ich Rankings beim Relaunch?",
        a: "Bei sauberer 301-Weiterleitungs-Strategie und Content-Migration: nur temporär (zwei bis vier Wochen). Ohne Migration: 30 bis 60 Prozent Traffic-Verlust für drei bis sechs Monate. SEO-Sicherung ist keine optionale Position.",
      },
      {
        q: "Kann ich einen Relaunch stufenweise machen?",
        a: "Ja, das ist meist die klügere Option. Landing-Seiten und Portfolio zuerst, Kontakt- und About-Seite später, Blog zuletzt. Reduziert Risiko und verteilt Aufwand.",
      },
      {
        q: "Was ist teurer: Refresh oder Vollrelaunch bei gleichem Ergebnis?",
        a: "Vollrelaunch fast immer. Refresh ist wirtschaftlicher, solange technische Basis und Struktur noch tragen. Sobald sie nicht mehr tragen, wird Refresh zur teureren Notlösung — dann ist Vollrelaunch der klügere Kaufpreis.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "sichtbarkeit-bei-google-verbessern",
    metaTitle: "Bei Google sichtbar werden: Realistischer Plan in 12 Wochen | Fylu",
    metaDescription:
      "So werden Sie bei Google sichtbar: die drei SEO-Achsen und ein realistischer 12-Wochen-Plan für Aufbau — ohne Tricks, ohne Blackbox.",
    h1: "Bei Google sichtbar werden. Ein realistischer 12-Wochen-Plan.",
    shortAnswer:
      "Sichtbarkeit entsteht aus drei Achsen: substanzieller Content, sauberer Technik, Domain-Vertrauen. In 12 Wochen lässt sich eine solide Basis aufbauen; erste sichtbare Rankings folgen typischerweise nach drei bis sechs Monaten, stabile Positionen nach 9 bis 18 Monaten.",
    intro:
      "„Wie werde ich bei Google sichtbar?“ ist die häufigste SEO-Frage — und wird am häufigsten mit vagen Antworten bedient. Dieser Artikel gibt einen realistischen 12-Wochen-Aufbauplan, mit klarer Erwartung, was in dieser Zeit machbar ist und was länger braucht.",
    sections: [
      {
        title: "Was Google tatsächlich rankt",
        text: "Drei Fragen, die Google für jede Suchanfrage stellt: Ist die Seite indexierbar? Beantwortet sie die Suchintention besser als andere? Ist die Domain vertrauenswürdig genug, um oben zu erscheinen? Wer alle drei mit Ja beantworten kann, rankt. Wer eine mit Nein beantwortet, nicht.",
      },
      {
        title: "Die drei SEO-Achsen im Zusammenspiel",
        text: "Content-Substanz: mindestens 500 Wörter pro Landingpage, klare Struktur, echte Antworten. Technische Basis: HTTPS, mobile-first, saubere Structured Data, gute Core Web Vitals. Domain-Vertrauen: konsistente Erwähnungen in Fach- und Branchen-Kontexten, saubere Backlinks. Fehlt eine Achse komplett, tragen die anderen zwei alleine nicht.",
      },
      {
        title: "Was in 12 Wochen realistisch machbar ist",
        text: "Foundation komplett: technische Basis auf sauberem Stand, Meta-Optimierung aller Kern-URLs, Google-Unternehmensprofil professionell aufgesetzt, drei bis fünf substanzielle Landing-Pages neu gebaut oder überarbeitet, ein Content-Cluster begonnen. Sichtbare Rankings noch selten — Wirkungslatenz drei bis sechs Monate — aber Basis für alles Weitere.",
      },
      {
        title: "Was länger dauert",
        text: "Backlink-Aufbau, Domain-Vertrauen, Etablierung in kompetitiven Suchen. Wer in einem umkämpften Markt oben ranken will, arbeitet über 12 bis 24 Monate systematisch — mit Content, Fach-Publikationen, Partner-Verlinkungen, Presse. SEO ist ein langsam, aber verlässlich wachsender Vermögenswert.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Woche 1-2: Diagnose und Zielkeywords",
        text: "Search-Console-Analyse (falls schon Daten da), Keyword-Recherche für Zielgruppen, Wettbewerbs-Analyse. Am Ende steht eine priorisierte Liste von 15 bis 25 Suchbegriffen, für die aufgebaut werden soll.",
      },
      {
        step: 2,
        title: "Woche 3-4: Technische Foundation",
        text: "SEO-Audit, robots.txt und Sitemap sauber aufsetzen, Meta-Tags aller Kern-URLs optimieren, Structured Data (Organization, LocalBusiness, FAQPage) implementieren, Canonicals prüfen, Core Web Vitals in den grünen Bereich bringen.",
      },
      {
        step: 3,
        title: "Woche 5-8: Content-Cluster aufbauen",
        text: "Ein Kern-Thema (Hub-Page) und drei bis fünf unterstützende Detail-Pages schreiben. Jede Seite substanziell (mindestens 500 Wörter, klar strukturiert), intern verlinkt. Fokus auf beste Antwort für den jeweiligen Suchbegriff.",
      },
      {
        step: 4,
        title: "Woche 9-10: Lokale Signale schärfen",
        text: "Google-Unternehmensprofil vollständig aufsetzen (Fotos, Öffnungszeiten, Services, Beiträge), NAP-Konsistenz in Bing Places, OSM und relevanten Branchen-Verzeichnissen, LocalBusiness-Schema auf allen relevanten Seiten.",
      },
      {
        step: 5,
        title: "Woche 11-12: Off-Page und Monitoring",
        text: "Erste Backlink-Bausteine (Fach-Portale, Partner-Verlinkungen, ggf. Presse-Ansätze). Monitoring-Setup: Position-Tracking der Kern-Keywords, monatliche Search-Console-Auswertung. Basis für die kommenden 12 Monate steht.",
      },
      {
        step: 6,
        title: "Ab Monat 4: Skalierung und Auswertung",
        text: "Erste sichtbare Rankings erscheinen. Content-Ausbau in Themen, die Traffic-Potenzial zeigen. Optimierung der Seiten auf Position 6 bis 20 (das Fenster mit dem größten Hebel). Konservativer Content-Rhythmus über 12 bis 18 Monate.",
      },
    ],
    tool: {
      href: "/tools/seo-check",
      label: "SEO-Check starten",
      reason:
        "Prüft in unter 15 Sekunden, wo Ihre Website in den drei SEO-Achsen aktuell steht — als Ausgangspunkt für einen realistischen Aufbauplan.",
    },
    faqs: [
      {
        q: "Wie schnell rankt eine neue Website?",
        a: "Erste Indexierung innerhalb weniger Tage bis Wochen. Erste sichtbare Rankings für unumkämpfte Long-Tail-Suchen: vier bis acht Wochen. Für kompetitivere Suchen: drei bis sechs Monate. Stabile Top-Positionen: 9 bis 18 Monate.",
      },
      {
        q: "Kann ich mit SEO alleine Kunden gewinnen?",
        a: "Ja — mittelfristig sogar sehr zuverlässig. Kurzfristig sind Google Ads schneller. Die Kombination beider (SEO als langfristiger Vermögenswert, Ads als kurzfristiger Beschleuniger) ist meist die wirtschaftlichste Strategie.",
      },
      {
        q: "Was passiert, wenn ich SEO-Arbeit unterbreche?",
        a: "Nicht viel im ersten Halbjahr — bestehende Rankings bleiben meist stabil, solange die technische Basis stimmt. Nach 12 Monaten ohne Content-Pflege setzt langsamer Erosionsprozess ein. Wettbewerb rankt neuer, aktueller Content besser.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "wie-lange-dauert-eine-website",
    metaTitle: "Wie lange dauert eine Website? Zeitpläne je Projektklasse | Fylu",
    metaDescription:
      "Wie lange dauert eine neue Website wirklich? Realistische Zeitpläne für kompakte, mittlere und individuelle Vorhaben — plus die häufigsten Verzögerungs-Fallen.",
    h1: "Wie lange dauert eine neue Website? Realistische Zeitpläne je Projektklasse.",
    shortAnswer:
      "Kompakter Auftritt (3 bis 5 Seiten): 2 bis 4 Wochen. Vollständige Studio-Website (6 bis 12 Seiten): 4 bis 8 Wochen. Individueller Auftritt mit Sonderfunktionen: 8 bis 16 Wochen. Die tatsächliche Dauer hängt fast immer stärker von Ihrer Rolle als Auftraggeber ab als von der Umsetzung.",
    intro:
      "Fast alle Website-Projekte sind früher liefer bar als die Auftraggeber denken — und dauern trotzdem länger als angekündigt. Der Grund liegt selten in der Umsetzung, sondern in Feedback-Zyklen, Content-Bereitstellung und Entscheidungswegen. Wer die Dynamik versteht, plant realistisch.",
    sections: [
      {
        title: "Was die tatsächliche Dauer beeinflusst",
        text: "Vier Faktoren: Umfang (Seitenzahl und Komplexität), Design-Tiefe (Standard vs. individuell), Content-Verantwortung (wer schreibt und liefert Bilder), Entscheidungsgeschwindigkeit (wie schnell kommt Feedback zurück). Die letzten beiden Faktoren sind fast immer die größeren Zeitfresser als die eigentliche Umsetzung.",
      },
      {
        title: "Ihre Rolle als Auftraggeber",
        text: "Feedback-Zyklen sind der wichtigste Zeitfaktor. Wer innerhalb von 24 bis 48 Stunden zurückgibt, erlebt Projekte, die zügig durchlaufen. Wer eine Woche pro Feedback-Runde braucht, verlängert das Projekt um Wochen — bei üblichen fünf bis acht Iterationen sind das schnell zwei zusätzliche Monate.",
      },
      {
        title: "Typische Verzögerungs-Fallen",
        text: "Erstens: Content wird viel später fertig als gedacht (Texte, Fotos). Zweitens: Zusätzliche Wünsche kommen während der Umsetzung dazu und werden nicht sauber kalkuliert. Drittens: Interne Freigabeschleifen mit vielen Stakeholdern. Viertens: Unklarheit über die Zielgruppe, die erst in Design-Iterationen sichtbar wird. Jede dieser Fallen kostet leicht zwei bis vier Wochen.",
      },
      {
        title: "Was Sie tun können, um schnell zu bleiben",
        text: "Content-Verantwortung vor Projektstart klären. Feedback-Fenster in den ersten Wochen blocken. Interne Freigeber früh benennen. Bei Zusatzwünschen bewusst entscheiden zwischen „jetzt einbauen“ und „nach Live-Gang“. Und: dem Studio vertrauen, wenn es zu inhaltlicher Fokussierung rät — die häufigste Verzögerung ist die Frage „müssen wir das nicht auch noch mit rein?“",
      },
    ],
    process: [
      {
        step: 1,
        title: "Woche 1: Kickoff und Konzept",
        text: "Detailliertes Briefing, Zielgruppen-Klärung, Content-Struktur, erste grobe Navigations- und Struktur-Skizze. Am Ende steht der Rahmen, in dem alles Weitere entsteht.",
      },
      {
        step: 2,
        title: "Woche 2-3: Design",
        text: "Erste Design-Iteration, Feedback, zweite Iteration, Finalisierung. Bei individuellem Design plus eigene Bildwelt entsprechend länger.",
      },
      {
        step: 3,
        title: "Woche 3-5: Entwicklung",
        text: "Umsetzung im Code, Integration von CMS, Formularen und ggf. Sonderfunktionen. Läuft parallel zur letzten Design-Phase, sobald das System steht.",
      },
      {
        step: 4,
        title: "Woche 5-6: Content-Integration",
        text: "Texte einpflegen, Bilder optimieren, Meta-Daten setzen, letzte Feinabstimmung. Hängt stark davon ab, wie zeitig der Content vom Auftraggeber kommt.",
      },
      {
        step: 5,
        title: "Woche 6-7: Feintuning und Testing",
        text: "Cross-Browser-Tests, Mobile-Tests, Performance-Optimierung, SEO-Final-Check, letzte Content-Änderungen.",
      },
      {
        step: 6,
        title: "Woche 7-8: Live-Gang und Begleitung",
        text: "Live-Schaltung, Search-Console-Setup, Monitoring der ersten Wochen. Danach folgt die Begleitung mit iterativen Anpassungen aus echtem Nutzerverhalten.",
      },
    ],
    tool: {
      href: "/tools/website-kosten-rechner",
      label: "Kosten-Rechner öffnen",
      reason:
        "Kombination aus Kosten- und Zeitplan-Schätzung für Ihr konkretes Vorhaben — in unter zwei Minuten, ohne Registrierung.",
    },
    faqs: [
      {
        q: "Was ist das Minimum für eine seriöse Website?",
        a: "Zwei Wochen. Alles darunter ist entweder ein reines Template-Setup ohne Konzeption oder ein Marketing-Versprechen, das später zu Qualitätskompromissen zwingt.",
      },
      {
        q: "Wie schaffe ich es, mein Projekt schnell durchzuziehen?",
        a: "Feedback innerhalb 24 bis 48 Stunden, klare Content-Zuständigkeit vor Start, interne Freigeber früh benennen, Zusatzwünsche bewusst in Phase 2 verschieben.",
      },
      {
        q: "Verlängern sich Zeitpläne oft?",
        a: "Fast immer — meist wegen Content-Verzögerungen auf Auftraggeberseite oder wegen wachsendem Umfang während der Umsetzung. Ein gutes Studio macht diese Faktoren transparent und rechnet Konsequenzen ehrlich in Woche 1 durch.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
];

export function getGuideBySlug(slug: string): GuidePage | undefined {
  return guides.find((g) => g.slug === slug);
}
