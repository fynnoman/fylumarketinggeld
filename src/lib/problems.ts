// Problem-Cluster: Seiten für Nutzer, die ein konkretes Website-Problem
// suchen. Muster: Problem benennen → Ursachen → Diagnose → Lösungsansätze
// → passendes Tool → Vorgespräch als Eskalation.

export type ProblemToolLink = {
  href: "/tools/website-check" | "/tools/seo-check" | "/buchen";
  label: string;
  reason: string;
};

export type ProblemPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  keyFinding: string; // Kurzantwort, für Snippet und Above-the-fold-Card
  causes: { title: string; text: string }[]; // 4-6
  diagnostics: { title: string; text: string }[]; // 3-5 selbst-prüfbare Punkte
  solutions: { title: string; text: string }[]; // 3-4 konkrete Ansätze
  tool: ProblemToolLink;
  faqs: { q: string; a: string }[]; // 3-5
  publishedAt: string; // ISO
  updatedAt: string; // ISO
};

export const problems: ProblemPage[] = [
  {
    slug: "website-bekommt-keine-anfragen",
    metaTitle: "Website bekommt keine Anfragen? Ursachen und ehrliche Lösungen | Fylu",
    metaDescription:
      "Ihre Website ist online, aber es kommen keine Anfragen? Fünf typische Ursachen, eine ehrliche Diagnose und konkrete Lösungsansätze — direkt vom Fylu Studio.",
    h1: "Ihre Website bekommt keine Anfragen. Die häufigsten Ursachen und ehrliche Lösungen.",
    intro:
      "Sie haben eine Website. Sie ist bei Google auffindbar. Trotzdem passiert nichts. Der Grund liegt fast nie an einer einzelnen Ursache, sondern an einer Kette aus falscher Ansprache, unklarer Verkaufsarchitektur und technischen Reibungsverlusten. Dieser Artikel geht die Kette Punkt für Punkt durch — damit Sie selbst erkennen, wo der Bruch sitzt.",
    keyFinding:
      "In neun von zehn Fällen fehlen nicht Besucher, sondern die Übersetzung von Besuch zu Anfrage. Wer das Problem an der Traffic-Seite sucht, investiert oft am falschen Ende.",
    causes: [
      {
        title: "Die Website spricht die falschen Menschen an",
        text: "Zielgruppen-Definitionen wie „alle, die eine Website brauchen“ führen zu Copy, die nirgendwo trifft. Wer versucht, alle abzuholen, überzeugt niemanden. Prüfen Sie: Steht auf der Startseite in einem einzigen Satz, für wen die Website gemacht ist und welches Problem sie löst?",
      },
      {
        title: "Der Nutzen ist zu vage formuliert",
        text: "„Wir bieten Qualität und Kundennähe“ ist Selbstbeschreibung, nicht Nutzenversprechen. Ein starker Nutzensatz nennt einen konkreten Effekt („mehr qualifizierte Anfragen“, „weniger Reklamationen“, „schnellere Bearbeitung“). Ohne diesen Effekt kein Handlungsimpuls.",
      },
      {
        title: "Die Handlungsaufforderung wirkt nicht wie eine",
        text: "Ein CTA-Button „Kontakt“ ist eine Beschriftung, keine Einladung. Bessere Formulierungen benennen den nächsten Schritt konkret („Kostenloses Erstgespräch buchen“, „15-Minuten-Analyse anfragen“). CTAs müssen außerdem mehrfach auf der Seite auftauchen, nicht nur am Ende.",
      },
      {
        title: "Vertrauenssignale fehlen oder sind schwach",
        text: "Ohne echte Referenzen, konkrete Ergebnisse oder mindestens ein Team-Bild bleibt die Website austauschbar. Gastro-Stockfotos und generische Icons signalisieren das Gegenteil von Substanz. Zwei starke Kundenstimmen wirken mehr als zehn belanglose.",
      },
      {
        title: "Technische Reibung frisst Conversions",
        text: "Langsame Ladezeit, fehlende mobile Optimierung, ein Formular mit vierzehn Feldern — jede dieser Reibungsquellen kostet Anfragen. Google Search Console zeigt Ihnen mobile Usability-Probleme, PageSpeed Insights die Ladezeit. Beides sind Signale, die Nutzer spüren, ohne sie benennen zu können.",
      },
    ],
    diagnostics: [
      {
        title: "Fünf-Sekunden-Test",
        text: "Zeigen Sie einem Außenstehenden Ihre Startseite fünf Sekunden lang. Danach: Wer ist der Anbieter, für wen ist das gemacht, was kann ich hier tun? Kann die Person eine Frage nicht beantworten, fehlt die Klarheit oben.",
      },
      {
        title: "CTA-Zählung",
        text: "Wie oft kommt der wichtigste Handlungsaufforderung auf der Startseite vor? Weniger als drei ist zu wenig. Der CTA sollte im ersten Bildschirmbereich sitzen und mindestens einmal in jedem größeren Abschnitt wiederholt werden.",
      },
      {
        title: "Formular-Aufwand",
        text: "Zählen Sie die Pflichtfelder im Kontakt- oder Anfrageformular. Alles über fünf reduziert die Absenderate messbar. Jedes zusätzliche Feld muss sich rechtfertigen.",
      },
      {
        title: "Mobile-Test",
        text: "Öffnen Sie die Seite auf dem Smartphone. Ist der CTA ohne Scrollen sichtbar? Springen Elemente beim Laden? Wirkt die Schrift lesbar? Über 60 Prozent aller Anfragen im B2B-Segment starten heute mobil.",
      },
    ],
    solutions: [
      {
        title: "Erst diagnostizieren, dann bauen",
        text: "Eine Conversion-Analyse zeigt in konkreten Zahlen, wo der Bruch sitzt: Absprungrate im Hero-Bereich, Scroll-Tiefe, Formular-Abbrüche. Ohne diese Basis werden Redesigns oft am eigentlichen Problem vorbei gebaut.",
      },
      {
        title: "Startseite als Verkaufsseite behandeln",
        text: "Klarer Nutzensatz oben, konkretes Zielgruppen-Signal, sichtbarer Primär-CTA im ersten Bildschirm, danach Beweise (Cases, Team, Referenzen), dann eine Wiederholung des CTA. Diese Struktur konvertiert selbst mit mittelmäßigem Traffic.",
      },
      {
        title: "Formular abrüsten",
        text: "Nur die Felder abfragen, die Sie tatsächlich für die erste Rückmeldung brauchen. Alles Weitere klärt sich im Gespräch. Ein reines E-Mail-plus-Kurznachricht-Formular hat oft die dreifache Absenderate eines umfangreichen Anfragebogens.",
      },
      {
        title: "Vertrauen sichtbar machen",
        text: "Zwei echte Kundenstimmen mit Namen und Foto, ein konkretes Ergebnis („28 Prozent mehr Anfragen in vier Monaten“), das Team als Menschen erkennbar. Kein Marketing-Blabla, sondern nachprüfbare Substanz.",
      },
    ],
    tool: {
      href: "/tools/website-check",
      label: "Website-Analyse starten",
      reason:
        "Prüft in unter 15 Sekunden serverseitig Meta, Struktur, Content-Tiefe, CTA-Anzahl und mobile Basis Ihrer Website. Zeigt priorisiert, wo die größten Bremsen sitzen.",
    },
    faqs: [
      {
        q: "Woran erkenne ich schnell, ob es an Traffic oder an Conversion liegt?",
        a: "Traffic-Problem: Google Search Console zeigt kaum Impressionen (unter 100 pro Tag). Conversion-Problem: Impressionen und Klicks sind da, aber die Anfrage bleibt aus. Zweiteres ist in etablierten B2B-Segmenten der deutlich häufigere Fall.",
      },
      {
        q: "Muss ich die Website komplett neu bauen?",
        a: "In den seltensten Fällen. Meist reichen fokussierte Eingriffe: klarerer Nutzensatz, reduziertes Formular, sichtbarere CTAs, zwei echte Referenzen. Wir zeigen im Vorgespräch, ob Nachbessern reicht oder ein Relaunch die schnellere Antwort ist.",
      },
      {
        q: "Wie schnell wirken Änderungen an der Conversion-Architektur?",
        a: "Sichtbar in zwei bis vier Wochen, sofern Traffic vorhanden ist. Änderungen an CTA, Formular und Hero-Bereich brauchen keine SEO-Latenz — sie wirken sofort für alle bestehenden Besucher.",
      },
      {
        q: "Wie geht Fylu bei einer Website-ohne-Anfragen-Analyse konkret vor?",
        a: "Wir prüfen erst die Bausteine (Nutzenversprechen, Vertrauenssignale, CTA-Architektur, Formular, mobile Basis, technische Reibung), belegen jede Aussage mit einer Beobachtung aus Ihrer Site und liefern eine priorisierte Liste. Kein Score-Kosmetik, sondern konkrete nächste Schritte.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "website-bei-google-nicht-gefunden",
    metaTitle: "Website bei Google nicht gefunden? So finden Sie die Ursache | Fylu",
    metaDescription:
      "Ihre Website erscheint bei Google nicht? Die häufigsten Ursachen von Indexierung bis SEO-Struktur — und der Weg zurück in die Sichtbarkeit.",
    h1: "Ihre Website ist bei Google nicht auffindbar. Ursachen und der Weg zurück in die Sichtbarkeit.",
    intro:
      "„Wir werden bei Google einfach nicht gefunden“ ist eines der häufigsten Sätze in Erstgesprächen. Die Ursache ist selten das viel zitierte „SEO-Problem“, sondern eine Kombination aus technischen Signalen, unklaren Inhalten und fehlendem Vertrauen der Domain. Dieser Artikel geht die Diagnose systematisch durch.",
    keyFinding:
      "Bevor man SEO optimiert, muss geklärt sein, ob die Seite überhaupt indexiert ist. Ein noindex-Tag oder eine defekte robots.txt macht jede spätere Optimierung wirkungslos.",
    causes: [
      {
        title: "Die Seite ist gar nicht indexiert",
        text: "Ein versehentlich gesetztes noindex-Meta-Tag, eine blockierende robots.txt oder eine Seite, die Google noch nie besucht hat — das sind die drei häufigsten Gründe, warum eine URL komplett fehlt. Google Search Console („URL-Prüfung“) zeigt für jede URL, ob sie indexiert ist und warum nicht.",
      },
      {
        title: "Die Seite konkurriert um die falschen Suchbegriffe",
        text: "Wer für „Webdesign“ oder „Steuerberater“ ranken will, konkurriert mit Millionen Seiten. Realistische Rankings entstehen bei konkreten Long-Tail-Kombinationen: „Webdesign für Steuerberater Saarland“, „Bilanzbuchhaltung Familienunternehmen München“. Die Suchbegriffe müssen zur eigenen Positionierung passen, nicht umgekehrt.",
      },
      {
        title: "Der Content ist zu dünn",
        text: "Landingpages mit 200 Wörtern und drei generischen Absätzen bewertet Google als „thin content“. Für Rankings in kompetitiven Suchen sind 500 bis 1500 Wörter mit echter Substanz nötig — Beispiele, Zahlen, klar strukturierte Antworten.",
      },
      {
        title: "Es fehlen lokale Signale",
        text: "Ohne LocalBusiness-Schema, ohne Google-Unternehmensprofil und ohne konsistente NAP-Angaben (Name, Adresse, Telefon) in Verzeichnissen bleibt eine lokale Website unsichtbar für Suchen mit Orts- oder „in meiner Nähe“-Bezug.",
      },
      {
        title: "Die Domain hat kein Vertrauen aufgebaut",
        text: "Neue Domains ohne Backlinks brauchen typischerweise sechs bis zwölf Monate, bis erste Rankings stabil sind. Ohne verlinkende Fachartikel, Partner-Websites oder Presseerwähnungen bleibt das Ranking schwach — auch wenn technisch alles stimmt.",
      },
    ],
    diagnostics: [
      {
        title: "Site-Suche in Google",
        text: "Geben Sie in Google „site:ihre-domain.de“ ein. Sind Ihre wichtigsten Seiten dort? Falls nicht, sind sie nicht indexiert — dann ist das das primäre Problem, nicht Ranking.",
      },
      {
        title: "URL-Prüfung in der Search Console",
        text: "Öffnen Sie Google Search Console, geben Sie eine URL ein und lesen Sie den Indexierungs-Status. Steht dort „URL ist nicht auf Google“, steht meist auch der Grund dabei.",
      },
      {
        title: "Robots.txt und Sitemap prüfen",
        text: "Ihre-domain.de/robots.txt und /sitemap.xml aufrufen. Robots.txt sollte keine wichtigen Bereiche disallowen, die Sitemap sollte alle indexierbaren URLs enthalten.",
      },
      {
        title: "Suchbegriffe testen",
        text: "Suchen Sie exakt die Begriffe, für die Sie ranken wollen — und die Long-Tail-Varianten. Sind Sie auf den Top-Positionen, in den Ergebnissen weiter hinten oder gar nicht auffindbar? Das trennt SEO-Struktur- von Content-Problemen.",
      },
    ],
    solutions: [
      {
        title: "Zuerst Indexierung sicherstellen",
        text: "Bevor jede weitere SEO-Investition Sinn ergibt, muss geklärt sein: Sind die wichtigsten Seiten indexiert? Fehlerhafte noindex-Tags, blockierte Ressourcen und ungültige Canonicals werden priorisiert behoben.",
      },
      {
        title: "Content-Struktur an echte Suchintention ausrichten",
        text: "Jede Landing braucht einen klaren Suchbegriff, den sie primär bedient — und eine Antwort, die dazu ausreichend Tiefe hat. Ein Artikel „unsere Leistungen“ rankt nirgendwo. Ein Artikel „Website-Kosten für Handwerksbetriebe in Sachsen“ hat eine reale Chance.",
      },
      {
        title: "Lokale SEO systematisch aufbauen",
        text: "Google-Unternehmensprofil vollständig, LocalBusiness-Schema auf jeder relevanten Seite, konsistente NAP-Daten in den wichtigsten lokalen Verzeichnissen. Für lokale B2B-Angebote der größte Hebel.",
      },
      {
        title: "Substanz statt Tricks",
        text: "Keyword-Stuffing, gekaufte Backlinks und dünner AI-Content sind kurzfristige Wetten mit hohem Downside-Risiko. Nachhaltige Rankings entstehen aus Inhalten, die Nutzer tatsächlich weiterbringen — und aus einer sauberen technischen Basis.",
      },
    ],
    tool: {
      href: "/tools/seo-check",
      label: "SEO-Check starten",
      reason:
        "Zeigt priorisiert, welche SEO-Grundsignale bei Ihrer Domain fehlen — inklusive konkreter Handlungsempfehlung pro Finding.",
    },
    faqs: [
      {
        q: "Wie lange dauert es, bis eine neue Website bei Google erscheint?",
        a: "Erste Indexierung typischerweise innerhalb weniger Tage bis Wochen — vorausgesetzt, die Seite ist erreichbar, indexierbar und über eine Sitemap in der Google Search Console angemeldet.",
      },
      {
        q: "Was ist wichtiger: Backlinks oder Content?",
        a: "Content zuerst. Ohne substanzielle Inhalte helfen auch die besten Links nicht dauerhaft. Sobald der Content trägt, wird Linkaufbau der zusätzliche Beschleuniger.",
      },
      {
        q: "Bringt SEO-Arbeit noch etwas, wenn AI-Overviews die SERPs verändern?",
        a: "Ja, sogar deutlich mehr. AI-Overviews zitieren strukturierte, klar beantwortete Inhalte. Wer heute Substanz und Struktur liefert, wird morgen häufiger zitiert.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "website-laedt-langsam",
    metaTitle: "Website lädt langsam? Ursachen erkennen und Ladezeit senken | Fylu",
    metaDescription:
      "Warum lädt Ihre Website langsam? Die vier häufigsten Performance-Bremsen, wie Sie sie selbst messen und welche Maßnahmen echten Effekt haben.",
    h1: "Ihre Website lädt langsam. Die häufigsten Ursachen und ehrliche Maßnahmen.",
    intro:
      "Ladezeit ist kein SEO-Thema mehr, sondern ein Conversion-Thema. Nutzer verlassen Seiten, die länger als drei Sekunden zum ersten sinnvollen Inhalt brauchen. Google bestraft es zusätzlich im Ranking. Doch die Ursachen sind selten dort, wo man sie zuerst vermutet.",
    keyFinding:
      "In den meisten Fällen sind nicht die Bilder das Problem, sondern das übermäßige JavaScript. Ein modernes CMS mit dreißig Plugins produziert schnell 2 MB Skripte, die den Browser blockieren.",
    causes: [
      {
        title: "Unoptimierte Bilder",
        text: "Direkt aus der DSLR eingebundene JPGs mit 4 MB pro Datei sind die klassische Falle. Moderne Formate (AVIF, WebP), passende Größen pro Endgerät und Lazy-Loading unterhalb des Falzes senken die Datenmenge oft um 70 bis 90 Prozent.",
      },
      {
        title: "Zu viel JavaScript",
        text: "Analytics-Tools, Chat-Widgets, Cookie-Banner, A/B-Test-Skripte, Social-Media-Embeds — jedes für sich wirkt harmlos. In Summe blockieren sie den Hauptthread des Browsers und verzögern die Interaktivität. Regelmäßiges Aufräumen ist Pflicht.",
      },
      {
        title: "Fehlendes Caching",
        text: "Ohne Server-Caching wird jede Anfrage frisch berechnet. Ohne Browser-Caching lädt jede Ressource bei jedem Besuch neu. Beide Cache-Ebenen zusammen reduzieren die Ladezeit für wiederkehrende Nutzer oft auf einen Bruchteil.",
      },
      {
        title: "Langsame Server-Antwort",
        text: "TTFB (Time To First Byte) über einer Sekunde deutet auf unterdimensioniertes Hosting, ineffiziente Datenbank-Abfragen oder fehlende serverseitige Optimierung hin. Der schnellste Frontend hilft nichts, wenn der Server sich Zeit lässt.",
      },
    ],
    diagnostics: [
      {
        title: "PageSpeed Insights",
        text: "pagespeed.web.dev — kostenlos direkt von Google. Zeigt Ladezeit-Metriken (LCP, INP, CLS), priorisiert Probleme und schlägt konkrete Maßnahmen vor.",
      },
      {
        title: "Chrome DevTools „Netzwerk“-Tab",
        text: "Rechtsklick → Untersuchen → Netzwerk-Tab, Seite neu laden. Sortieren nach Größe zeigt die größten Sünder. Sortieren nach Ladezeit zeigt die langsamsten Ressourcen.",
      },
      {
        title: "Test aus 3G-Verbindung",
        text: "In den DevTools Network-Tab kann man 3G simulieren. Wer damit nicht arbeiten kann, verliert mobile Nutzer außerhalb von WLAN-Zonen.",
      },
    ],
    solutions: [
      {
        title: "Bilder konsequent optimieren",
        text: "Beim Build-Prozess automatisch AVIF/WebP generieren, Bilder pro Endgerät passend ausliefern (srcset), Bilder unterhalb des Falzes verzögert laden. Bei modernen Frameworks wie Next.js meist Standard, muss aber aktiviert sein.",
      },
      {
        title: "JavaScript-Diät",
        text: "Alle Skripte auflisten, für jedes fragen: Ist der Nutzen den Ladezeit-Verlust wert? Chat-Widgets erst nach Interaktion laden, Analytics via minimalem Snippet, Third-Party-Embeds durch lokale Alternativen ersetzen wo möglich.",
      },
      {
        title: "Caching-Strategie sauber aufsetzen",
        text: "Statische Assets mit langem Cache-Header (ein Jahr) ausliefern, HTML-Antworten mit stale-while-revalidate. Ein CDN vor der eigentlichen Site senkt zusätzlich TTFB und schützt vor Traffic-Spitzen.",
      },
      {
        title: "Hosting hinterfragen",
        text: "Shared Hosting für 5 Euro pro Monat ist selten ausreichend für ernsthafte Business-Websites. Ein modernes Setup (etwa Vercel oder ein solider VPS mit CDN) macht bei mittelgroßen Websites einen sichtbaren Unterschied.",
      },
    ],
    tool: {
      href: "/tools/website-check",
      label: "Website-Analyse starten",
      reason:
        "Misst die Server-Antwortzeit, HTML-Größe und weitere technische Signale Ihrer Website direkt — plus 20 weitere Checks.",
    },
    faqs: [
      {
        q: "Ist Ladezeit wirklich ein SEO-Ranking-Faktor?",
        a: "Ja, seit den Core Web Vitals (LCP, INP, CLS) messbar und dokumentiert. Google bevorzugt in umkämpften Suchen die schnelleren Alternativen — bei sonst vergleichbarer Content-Qualität.",
      },
      {
        q: "Was ist eine „gute“ Ladezeit?",
        a: "LCP unter 2,5 Sekunden, INP unter 200 ms, CLS unter 0,1. Diese drei Grenzwerte gelten als „gut“ laut Google. Alles darüber ist optimierungsbedürftig.",
      },
      {
        q: "Muss ich für Performance-Optimierung die Website neu bauen?",
        a: "Nein, in vielen Fällen reichen gezielte Eingriffe: Bilder komprimieren, unnötige Skripte entfernen, Caching aktivieren, Fonts optimieren. Ein kompletter Rebuild lohnt nur, wenn die technische Basis nicht mehr zeitgemäß ist.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "website-zu-alt",
    metaTitle: "Website veraltet? Wann modernisieren, wann neu bauen | Fylu",
    metaDescription:
      "Ihre Website wirkt aus einer anderen Zeit? Wir zeigen die vier Alterungs-Achsen, wie Sie den Handlungsbedarf einschätzen und wann ein Refresh reicht.",
    h1: "Ihre Website wirkt aus einer anderen Zeit. Wann Modernisierung reicht, wann Neuaufbau nötig wird.",
    intro:
      "Eine Website altert an vier Fronten gleichzeitig: Gestaltung, Sprache, Technik und strategische Passform. Selten sind alle vier gleichweit vom heutigen Standard entfernt. Wer den Handlungsbedarf richtig einschätzt, spart oft mehrere Tausend Euro und Monate Zeit.",
    keyFinding:
      "Erst prüfen, an welchen der vier Achsen die Website tatsächlich hakt. Ein Vollrelaunch ist selten die richtige Antwort auf eine einzelne veraltete Achse.",
    causes: [
      {
        title: "Das Design zeigt sein Alter",
        text: "Rounded Corners, harte Schatten, große Header-Bilder mit Text-Overlay: Was 2018 Standard war, wirkt heute datiert. Design-Sprache verändert sich in Sechs-Jahres-Zyklen. Ein Auftritt aus 2018 wirkt in etablierten B2B-Segmenten heute nachweislich weniger vertrauenswürdig als ein aktueller.",
      },
      {
        title: "Die Sprache passt nicht mehr zum Unternehmen",
        text: "Firmen entwickeln sich weiter, ihre Websites bleiben oft am ursprünglichen Wording hängen. „Wir sind Ihr innovativer Partner“ aus der Gründungsphase liest sich zehn Jahre später wie eine Karikatur — und schließt genau die Zielkunden aus, die inzwischen erreicht werden sollen.",
      },
      {
        title: "Die technische Basis limitiert Weiterentwicklung",
        text: "Ein CMS, das keine moderne Bildoptimierung erlaubt. Ein Framework, für das kaum noch Entwickler zu finden sind. Ein Hosting, das keine sinnvolle Performance mehr zulässt. Wenn jede Änderung Aufwand explodieren lässt, ist die Basis das Problem, nicht die Oberfläche.",
      },
      {
        title: "Mobile-First fehlt weiterhin",
        text: "Über 60 Prozent aller B2B-Website-Zugriffe passieren heute mobil. Eine Website, die auf dem Smartphone unlesbar ist, springt Nutzer ab, bevor sie den ersten Absatz erreichen. Responsive Design mit reagierendem Content ist Pflicht, nicht Zusatz.",
      },
    ],
    diagnostics: [
      {
        title: "Visueller Peer-Vergleich",
        text: "Öffnen Sie drei Websites aus Ihrer Peer-Group nebeneinander mit Ihrer eigenen. Wirkt Ihre Site einer Generation älter, ist das ein starkes Signal für Design-Aging.",
      },
      {
        title: "Mobile-Absprung in der Analyse",
        text: "Google Analytics oder ähnliche Tools zeigen den mobilen Bounce Rate. Über 60 Prozent auf der Startseite ist ein deutliches Warnsignal — dann verlieren Sie mobile Besucher, bevor sie überhaupt etwas erfahren.",
      },
      {
        title: "Framework- und CMS-Alter prüfen",
        text: "Frameworks älter als vier Jahre und CMS-Versionen ohne aktuelle Sicherheitsupdates sind riskant. Ein kurzer Blick in die Fußzeile oder eine Anfrage beim Betreuer klärt das schnell.",
      },
      {
        title: "Textstichprobe",
        text: "Lesen Sie sich Ihre Startseite laut vor. Klingt es wie ein Unternehmen, das Sie heute sind, oder wie eines, das Sie vor Jahren waren? Dieser einfache Test trennt Sprach-Aging von tatsächlichem Design-Aging.",
      },
    ],
    solutions: [
      {
        title: "Refresh: nur Design und Sprache",
        text: "Wenn die technische Basis noch trägt, reicht oft ein Refresh: Bildwelt aktualisieren, Farb- und Type-System modernisieren, Copy überarbeiten. Kostet einen Bruchteil eines Relaunches und wirkt binnen weniger Wochen.",
      },
      {
        title: "Selektiver Rebuild: bestimmte Sections",
        text: "Manchmal ist nur die Hero-Section, der Kontakt-Flow oder die Service-Seite überaltert. Diese Bausteine gezielt neu bauen, den Rest übernehmen. Wirtschaftlich und meist unter zwei Monaten machbar.",
      },
      {
        title: "Vollständiger Relaunch mit Zielarchitektur",
        text: "Wenn drei oder mehr Achsen betroffen sind, ist ein Relaunch die klügere Antwort. Wichtig: mit klarer Zielgruppen- und Verkaufsarchitektur beginnen, nicht mit Design-Moods. Sonst wird die neue Website in drei Jahren wieder veraltet — an denselben Achsen.",
      },
    ],
    tool: {
      href: "/tools/website-check",
      label: "Website-Analyse starten",
      reason:
        "Misst technische Basis und redaktionelle Substanz — als objektive Grundlage für die Entscheidung zwischen Refresh und Relaunch.",
    },
    faqs: [
      {
        q: "Wie oft sollte man eine Website modernisieren?",
        a: "Als Faustregel: Design-Refresh alle drei bis vier Jahre, Content-Struktur alle zwei Jahre kritisch überprüfen, technischen Vollrelaunch alle sechs bis acht Jahre. Kürzere Intervalle bei Unternehmen im schnellen Wandel.",
      },
      {
        q: "Was kostet ein Refresh im Vergleich zum Vollrelaunch?",
        a: "Ein Refresh liegt typischerweise bei 20 bis 40 Prozent der Kosten eines Vollrelaunches. Der große Wert: viel schneller live, weniger Risiko, kein SEO-Verlust durch URL-Änderungen.",
      },
      {
        q: "Verliere ich Rankings beim Modernisieren?",
        a: "Bei einem reinen Design-Refresh (gleiche URLs, gleiche Inhalte, gleiche Struktur) nein. Rankings sind an URLs und Content gebunden, nicht ans Design. Bei tieferen Eingriffen: mit sauberer 301-Weiterleitungs-Strategie meist ohne relevanten Verlust.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "website-conversion-verbessern",
    metaTitle: "Website-Conversion verbessern: Vier Hebel für mehr Anfragen | Fylu",
    metaDescription:
      "Traffic haben Sie, Anfragen nicht? Die vier Conversion-Hebel, die in etablierten B2B-Websites am zuverlässigsten wirken — und wie Sie sie systematisch anwenden.",
    h1: "Website-Conversion verbessern. Die vier Hebel für messbar bessere Ergebnisse.",
    intro:
      "Conversion-Optimierung ist kein Rätselwerk. In etablierten B2B-Websites entscheiden immer wieder dieselben vier Hebel darüber, ob aus Besuch eine Anfrage wird. Wer diese systematisch angeht, produziert planbar bessere Ergebnisse — ohne den kompletten Auftritt neu bauen zu müssen.",
    keyFinding:
      "Fast alle Conversion-Probleme haben eine dieser vier Wurzeln: unklare Hero-Botschaft, zu wenig CTAs, dünne Vertrauenssignale, zu hoher Formular-Aufwand. Wer alle vier prüft, findet den Bruch.",
    causes: [
      {
        title: "Die Hero-Botschaft ist nicht klar genug",
        text: "In fünf Sekunden muss ein Besucher wissen: Für wen ist die Website, welches Problem löst sie, was ist der nächste Schritt. Fehlt eine dieser drei Antworten oben, entstehen keine Anfragen — egal wie schön der Rest gestaltet ist.",
      },
      {
        title: "Der CTA taucht zu selten und zu spät auf",
        text: "Ein Call-to-Action im Hero und am Seitenende reicht nicht. Jede größere Sektion braucht einen Anschluss-CTA — sonst verlieren Sie Besucher, die sich nach einem starken Abschnitt eigentlich melden würden.",
      },
      {
        title: "Vertrauenssignale sind zu dünn oder generisch",
        text: "Stockfotos, generische Icons und Aussagen wie „Ihr zuverlässiger Partner“ bauen kein Vertrauen auf — im Gegenteil. Zwei echte Kundenstimmen mit Namen, ein konkretes Ergebnis, das Team als Menschen sichtbar. Substanz statt Marketing.",
      },
      {
        title: "Das Formular verlangt zu viel",
        text: "Jedes zusätzliche Pflichtfeld reduziert die Absenderate messbar. Alles, was nicht für die erste Rückmeldung nötig ist, im Formular streichen. Der Rest klärt sich im Gespräch. Ein zwei- oder dreifeldriges Formular hat oft die dreifache Absenderate eines umfangreichen.",
      },
    ],
    diagnostics: [
      {
        title: "Fünf-Sekunden-Test",
        text: "Zeigen Sie die Startseite jemandem außerhalb der Firma für fünf Sekunden. Kann diese Person sagen, was Sie anbieten, für wen und was der nächste Schritt ist? Wenn nicht, fehlt Klarheit im Hero.",
      },
      {
        title: "CTA-Zählung",
        text: "Wie oft kommt der primäre CTA auf der Startseite vor? Weniger als drei ist zu wenig. Er sollte im ersten Bildschirm, nach jedem Hauptabschnitt und am Seitenende auftauchen.",
      },
      {
        title: "Formular-Feldzählung",
        text: "Zählen Sie die Pflichtfelder im Anfrageformular. Alles über fünf reduziert Absenderaten messbar. Jedes Feld muss sich rechtfertigen.",
      },
      {
        title: "Vertrauens-Substanz-Check",
        text: "Sind Kundenstimmen mit Namen und Foto sichtbar? Gibt es ein konkretes Ergebnis (Zahl, Zeitspanne, Effekt)? Ist das Team als Menschen erkennbar? Wenn zwei von drei fehlen, fehlt Vertrauensdichte.",
      },
    ],
    solutions: [
      {
        title: "Hero neu bauen mit Klarheits-Reihenfolge",
        text: "Erste Zeile: für wen. Zweite Zeile: konkreter Nutzen. Dritte Zeile: nächster Schritt (CTA). Alles andere kann darunter kommen. Dieses Muster wirkt in fast jedem B2B-Segment.",
      },
      {
        title: "CTA konsequent wiederholen",
        text: "Nach jedem Hauptabschnitt einen Anschluss-CTA: nach dem Nutzenteil, nach den Cases, nach dem Team-Teil, am Seitenende. Der Text darf variieren („Jetzt Erstgespräch buchen“, „Kostenlose Analyse anfragen“), aber die Handlung bleibt eindeutig.",
      },
      {
        title: "Zwei echte Testimonials sichtbar platzieren",
        text: "Nicht drei Zeilen ohne Namen, sondern zwei mit vollem Namen, Firma, Foto und konkretem Effekt. Wenn Sie noch keine sammeln konnten: Bestandskunden anschreiben, aus laufenden Projekten dokumentieren.",
      },
      {
        title: "Formular abrüsten",
        text: "Nur Name, E-Mail, Nachricht. Rest optional oder streichen. Falls Sie mehr Vorqualifikation brauchen, arbeiten Sie mit einem Multi-Step-Formular mit Progress-Anzeige, nicht mit zehn Feldern auf einer Seite.",
      },
    ],
    tool: {
      href: "/tools/website-check",
      label: "Website-Analyse starten",
      reason:
        "Prüft Hero-Struktur, CTA-Anzahl, Content-Substanz und mehr — priorisiert nach Impact auf die Anfragen.",
    },
    faqs: [
      {
        q: "Wie schnell wirken Conversion-Änderungen?",
        a: "Sofort. Änderungen an Hero, CTA und Formular brauchen keine SEO-Latenz — sie wirken für alle bestehenden Besucher ab der ersten Minute nach dem Deployment. Messbare Effekte sind meist innerhalb von zwei bis vier Wochen sichtbar.",
      },
      {
        q: "Ist A/B-Testing für kleine Websites sinnvoll?",
        a: "Nur bedingt. Für aussagekräftige A/B-Tests braucht man tausende Besucher pro Variante. Bei kleineren Traffic-Zahlen führen mutige, gut begründete Änderungen schneller zum Ergebnis als endlose Tests.",
      },
      {
        q: "Woran erkenne ich, welcher der vier Hebel bei mir am meisten bringt?",
        a: "Beginnen Sie mit dem Fünf-Sekunden-Test — wenn Klarheit fehlt, ist Hero der größte Hebel. Ansonsten: Formular-Feldzahl reduzieren bringt meist am schnellsten sichtbare Effekte.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
  {
    slug: "website-seo-verbessern",
    metaTitle: "Website-SEO verbessern: Drei Achsen für nachhaltige Rankings | Fylu",
    metaDescription:
      "Warum rankt Ihre Website nicht wie gewünscht? Die drei SEO-Achsen (Content, Technik, Vertrauen), wo Sie ansetzen sollten und was wirklich wirkt.",
    h1: "Website-SEO verbessern. Die drei Achsen und wo Sie ansetzen sollten.",
    intro:
      "SEO wirkt für viele wie ein Blackbox-Thema. Ist es nicht. Nachhaltige Rankings entstehen aus dem Zusammenspiel von drei Achsen: Content-Substanz, technischer Basis und Domain-Vertrauen. Wer weiß, an welcher Achse sein Ranking hakt, kann gezielt investieren statt breit zu streuen.",
    keyFinding:
      "SEO-Erfolg braucht alle drei Achsen. Nur an einer investieren wirkt kurzfristig, aber selten dauerhaft. Der Hebel liegt fast immer auf der schwächsten Achse.",
    causes: [
      {
        title: "Content ohne Substanz",
        text: "Landingpages mit 200 Wörtern generischem Text ranken in kompetitiven Suchen nicht — und werden von AI-Suchmaschinen (Google AI Overviews, Perplexity) noch weniger zitiert. Google und AI belohnen Inhalte, die einer konkreten Suchintention eine substanzielle, klar strukturierte Antwort geben.",
      },
      {
        title: "Fehlende oder unklare Suchintention",
        text: "Eine Landingpage muss primär EINEN Suchbegriff bedienen. Wenn eine Seite gleichzeitig für „Webdesign“ und „SEO“ und „Social Media“ gelten will, rankt sie für keinen davon. Klare Themen-Fokussierung pro URL.",
      },
      {
        title: "Technische Basis limitiert",
        text: "Langsame Ladezeit, fehlende mobile Optimierung, kein sauberes Structured Data, defekte Canonical-Tags: technische Schwächen kappen das Ranking-Potenzial jeder Content-Investition. Ohne saubere Basis bringt inhaltliche Arbeit weniger.",
      },
      {
        title: "Domain hat kein Vertrauen aufgebaut",
        text: "Ohne verlinkende Fachseiten, ohne Presseerwähnungen, ohne konsistente Erwähnung in relevanten Verzeichnissen bleibt eine Domain ranking-schwach — auch bei perfektem Content und sauberer Technik. Backlink-Aufbau ist der langsamste, aber langfristig entscheidendste Hebel.",
      },
    ],
    diagnostics: [
      {
        title: "Search-Console-Check",
        text: "Öffnen Sie Google Search Console → Leistung. Suchen Sie nach Ihren wichtigsten Suchbegriffen: Impressions, Position, CTR. Impressions unter 100 pro Tag deuten auf Content-Problem, hohe Impressions mit schwacher CTR auf Meta-Problem.",
      },
      {
        title: "Content-Länge-Audit",
        text: "Prüfen Sie die Wortzahl Ihrer wichtigsten Landingpages. Unter 400 Wörtern in einem umkämpften Thema: reicht selten. Mit einem Content-Audit-Tool oder manuellem Durchgehen sichtbar machen.",
      },
      {
        title: "Core Web Vitals",
        text: "PageSpeed Insights zeigt LCP, INP, CLS. Alles rot ist ein direkter Ranking-Hemmer in kompetitiven Suchen und macht auch AI-Zitation unwahrscheinlicher.",
      },
      {
        title: "Backlink-Übersicht",
        text: "Kostenlose Tools wie Ahrefs Backlink Checker geben einen ersten Eindruck vom Domain-Vertrauen. Unter 20 referring domains bei einer B2B-Website deutet auf Backlink-Schwäche.",
      },
    ],
    solutions: [
      {
        title: "Content-Cluster statt Einzelseiten",
        text: "Ein Kern-Thema (Hub-Page) mit 8 bis 12 unterstützenden Detail-Pages, alle intern verlinkt. Das signalisiert Themen-Autorität besser als isolierte Landingpages. Fokus: für die primäre Suchintention wirklich die beste Antwort im Netz sein.",
      },
      {
        title: "Technische Basis systematisch schließen",
        text: "Reihenfolge: HTTPS, Core Web Vitals, mobile-Basis, Structured Data (Organization/LocalBusiness/FAQPage), Canonicals, saubere Sitemap. Jeder dieser Punkte ist entweder ok oder nicht — es gibt kein „ein bisschen“.",
      },
      {
        title: "Off-Page systematisch aufbauen",
        text: "Nicht Backlink-Kauf, sondern echte Erwähnungen: Fachartikel, Podcast-Auftritte, Presse-Verwertung eigener Cases, Partner-Portfolios. Wenige starke Erwähnungen wirken mehr als hunderte schwache.",
      },
      {
        title: "AI-Suche mitdenken",
        text: "AI Overviews, ChatGPT, Perplexity zitieren klar strukturierte, faktisch dichte Inhalte. Wer heute Substanz und Struktur liefert (kurze Absätze, klare Antworten oben, Zahlen), wird morgen häufiger zitiert.",
      },
    ],
    tool: {
      href: "/tools/seo-check",
      label: "SEO-Check starten",
      reason:
        "Zeigt in unter 15 Sekunden priorisiert, an welcher der drei SEO-Achsen Ihre Website tatsächlich hakt — mit konkreter Handlungsempfehlung pro Finding.",
    },
    faqs: [
      {
        q: "Wie lange dauert es, bis SEO-Arbeit sichtbare Rankings bringt?",
        a: "Technische Fixes wirken innerhalb weniger Wochen. Content-Investitionen brauchen typischerweise drei bis sechs Monate bis zur Ranking-Sichtbarkeit. Backlink-Aufbau wirkt über sechs bis zwölf Monate. SEO ist ein Marathon, kein Sprint.",
      },
      {
        q: "Sind AI Overviews das Ende klassischer SEO?",
        a: "Nein — sondern eine Verschärfung. AI Overviews bevorzugen strukturierte, klar beantwortete Inhalte. Wer schon heute Substanz liefert, gewinnt in AI-Suche eher als in klassischer SEO.",
      },
      {
        q: "Was ist wichtiger: Content oder Backlinks?",
        a: "Content zuerst. Ohne substanziellen Content nutzen auch die besten Backlinks langfristig nicht. Sobald der Content trägt, werden Backlinks der zusätzliche Ranking-Beschleuniger.",
      },
    ],
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
  },
];

export function getProblemBySlug(slug: string): ProblemPage | undefined {
  return problems.find((p) => p.slug === slug);
}
