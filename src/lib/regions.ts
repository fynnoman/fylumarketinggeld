export type Region = {
  slug: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  intro: string;
  paragraphs: string[];
  nearbyCities: string[];
};

export const regions: Region[] = [
  {
    slug: "saarbruecken",
    city: "Saarbrücken",
    region: "Saarland",
    lat: 49.2328,
    lng: 7.0098,
    intro:
      "Als Webdesigner aus dem Saarland erstellen wir für Unternehmen in Saarbrücken professionelle, suchmaschinenoptimierte Websites, die nachweislich Kunden bringen. Persönliche Betreuung, faire Festpreise ab 990€ und ein kostenloser Entwurf in 24 Stunden.",
    paragraphs: [
      "Saarbrücken ist die Landeshauptstadt und das wirtschaftliche Zentrum des Saarlandes. Hunderte Unternehmen, Handwerksbetriebe, Dienstleister, Restaurants und Einzelhändler konkurrieren hier täglich um die Aufmerksamkeit der gleichen Kunden. Wer online nicht sichtbar ist, verliert Aufträge an die Konkurrenz – Tag für Tag, ohne es zu merken.",
      "Über 75 % der Nutzer beurteilen die Glaubwürdigkeit eines Unternehmens anhand seiner Website. Eine veraltete, langsame oder nicht mobiloptimierte Seite kostet Sie messbar Umsatz. Genau hier setzen wir an: mit modernen, schnellen Websites, die für Saarbrücken, Dudweiler, Burbach, Malstatt und das gesamte Saarland optimiert sind.",
      "Sie bekommen keinen Template-Einheitsbrei, sondern eine individuell auf Ihr Unternehmen zugeschnittene Lösung – inklusive lokaler SEO, Google Business Optimierung und auf Wunsch Google Ads für Saarbrücken.",
    ],
    nearbyCities: ["Dudweiler", "Burbach", "Malstatt", "Völklingen", "Saarlouis"],
  },
  {
    slug: "saarlouis",
    city: "Saarlouis",
    region: "Saarland",
    lat: 49.3139,
    lng: 6.7516,
    intro:
      "Webdesigner direkt aus Saarlouis – moderne Websites, lokale SEO und Google Ads für Unternehmen in der Kreisstadt und Umgebung. Persönlich, transparent, ab 990€ mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Saarlouis ist Kreisstadt und einer der wichtigsten Wirtschaftsstandorte im Westen des Saarlandes. Während die meisten Webdesign-Agenturen in Saarbrücken sitzen, profitieren Sie von einem festen Team, der die Region Saarlouis, Dillingen, Lebach und Wallerfangen wirklich kennt – mit kurzen Wegen und persönlicher Betreuung.",
      "Lokale Unternehmen in Saarlouis – ob Handwerk, Gastronomie, Einzelhandel oder Dienstleistung – stehen vor der gleichen Herausforderung: Kunden suchen heute zuerst online. Wer bei Google Maps und in den lokalen Suchergebnissen nicht oben steht, wird übersehen. Wir bauen Websites, die genau dafür gemacht sind: für lokale Sichtbarkeit in Saarlouis und messbar mehr Anfragen.",
      "Vom Design über die technische Umsetzung bis zur Suchmaschinenoptimierung erhalten Sie alles aus einer Hand. Auf Wunsch ergänzen wir Ihre Website mit gezielten Google Ads für Saarlouis und Umgebung – für sofort sichtbare Ergebnisse.",
    ],
    nearbyCities: ["Dillingen", "Wallerfangen", "Lebach", "Merzig", "Völklingen"],
  },
  {
    slug: "voelklingen",
    city: "Völklingen",
    region: "Saarland",
    lat: 49.2506,
    lng: 6.8586,
    intro:
      "Professionelles Webdesign für Völklingen: moderne Websites, lokale SEO und Google Ads für Unternehmen rund um die Völklinger Hütte. Ab 990€ inklusive kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Völklingen liegt strategisch zwischen Saarbrücken und Saarlouis und ist Heimat zahlreicher Mittelständler, Handwerksbetriebe und inhabergeführter Geschäfte. Genau diese Unternehmen brauchen eine Website, die nicht nur gut aussieht, sondern auch im Alltag Anfragen, Kontaktanrufe und Aufträge generiert.",
      "Wir erstellen für Sie eine Website, die in Völklingen, Wadgassen und Püttlingen bei Google gefunden wird – mit sauberer Technik, schnellen Ladezeiten, mobiler Optimierung und lokaler Suchmaschinenoptimierung. Keine Agentur-Hotline, keine Warteschleife: Sie haben einen festen Ansprechpartner.",
      "Auf Wunsch betreuen wir Ihre Google Ads-Kampagnen für Völklingen und richte Google Business Profile professionell ein – damit Sie auch in Google Maps und der lokalen Suche oben erscheinen.",
    ],
    nearbyCities: ["Saarbrücken", "Saarlouis", "Wadgassen", "Püttlingen"],
  },
  {
    slug: "merzig",
    city: "Merzig",
    region: "Saarland",
    lat: 49.4431,
    lng: 6.6371,
    intro:
      "Webdesigner für Merzig und das nördliche Saarland: moderne Websites, lokale SEO und Google Ads für Unternehmen im Saargau. Persönlich, transparent, ab 990€.",
    paragraphs: [
      "Merzig ist die größte Stadt im Saargau und ein wichtiges Zentrum für Tourismus, Handwerk und Mittelstand. Wer hier ein Unternehmen führt, weiß: Der lokale Markt entscheidet sich heute online – über Google, Bewertungen und Ihre Website.",
      "Wir entwickeln Websites speziell für Unternehmen in Merzig, Mettlach, Perl und Wadern: schnell, mobiloptimiert, von Anfang an für lokale Suchanfragen ausgerichtet. So werden Sie von Kunden gefunden, die genau Ihre Leistung in Ihrer Region suchen.",
      "Sie bekommen ein faires Festpreis-Modell ab 990€, einen kostenlosen Entwurf in 24 Stunden und einen Webdesigner, der wirklich erreichbar ist – ohne Agentur-Overhead.",
    ],
    nearbyCities: ["Mettlach", "Perl", "Wadern", "Beckingen"],
  },
  {
    slug: "neunkirchen",
    city: "Neunkirchen",
    region: "Saarland",
    lat: 49.3447,
    lng: 7.1802,
    intro:
      "Webdesign für Neunkirchen und das östliche Saarland – moderne Websites, lokale SEO und Google Ads für Unternehmen, die online sichtbar werden wollen. Ab 990€ mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Neunkirchen ist die zweitgrößte Stadt des Saarlandes und beheimatet eine starke Wirtschaft aus Handel, Handwerk, Industrie und Dienstleistung. Gerade hier entscheidet eine moderne Website darüber, ob neue Kunden Sie finden – oder bei der Konkurrenz landen.",
      "Wir bauen Ihre Website von Grund auf für Neunkirchen, Spiesen-Elversberg, Schiffweiler und Illingen: lokal optimiert, technisch sauber, schnell und mobil-tauglich. Lokale SEO und Google Business Optimierung sind fester Bestandteil – nicht teures Zusatzpaket.",
      "Persönliche Betreuung, klare Festpreise und ein kostenloser Entwurf in 24 Stunden sorgen dafür, dass Sie genau wissen, was Sie bekommen, bevor Sie sich entscheiden.",
    ],
    nearbyCities: ["Spiesen-Elversberg", "Schiffweiler", "Illingen", "Ottweiler"],
  },
  {
    slug: "homburg",
    city: "Homburg",
    region: "Saarland",
    lat: 49.3233,
    lng: 7.3386,
    intro:
      "Professionelles Webdesign für Homburg und den Saarpfalz-Kreis: moderne Websites, SEO und Google Ads für lokale Unternehmen. Ab 990€ mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Homburg ist Universitätsstadt und das wirtschaftliche Zentrum des Saarpfalz-Kreises. Mit Universitätsklinikum, Mittelstand und Handwerk gibt es hier einen anspruchsvollen lokalen Markt – Ihre Website muss diesem Anspruch gerecht werden.",
      "Wir entwickeln Websites, die für Homburg, Kirkel, Bexbach und Blieskastel optimiert sind: schnell, modern, lokal SEO-optimiert und auf Conversion ausgerichtet. So werden Anfragen über Ihre Website spürbar mehr.",
      "Auf Wunsch betreuen wir auch Ihre Google Ads-Kampagnen und Google Business Profile für maximale lokale Sichtbarkeit – alles aus einer Hand, persönlich und transparent.",
    ],
    nearbyCities: ["Kirkel", "Bexbach", "Blieskastel", "Bruchmühlbach-Miesau"],
  },
  {
    slug: "st-ingbert",
    city: "St. Ingbert",
    region: "Saarland",
    lat: 49.2767,
    lng: 7.1131,
    intro:
      "Webdesign für St. Ingbert und Umgebung: moderne Websites, lokale SEO und Google Ads für Unternehmen im Saarpfalz-Kreis. Ab 990€ mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "St. Ingbert liegt zwischen Saarbrücken und Homburg und ist mit Industrie, Handwerk und Mittelstand ein bedeutender Wirtschaftsstandort. Lokale Unternehmen brauchen heute eine Website, die genau in dieser Region gefunden wird.",
      "Wir erstellen für Sie eine Website, die für St. Ingbert, Rohrbach, Hassel und Oberwürzbach optimiert ist: technisch sauber, mobiloptimiert und mit lokaler SEO direkt eingebaut. Keine Vorlagen, sondern individuelles Design für Ihr Unternehmen.",
      "Mit klarem Festpreis ab 990€, persönlicher Betreuung und kostenlosem Entwurf in 24 Stunden bekommen Sie maximale Sicherheit, bevor Sie sich überhaupt entscheiden.",
    ],
    nearbyCities: ["Rohrbach", "Hassel", "Oberwürzbach", "Saarbrücken"],
  },
  {
    slug: "dillingen",
    city: "Dillingen",
    region: "Saarland",
    lat: 49.3553,
    lng: 6.7297,
    intro:
      "Webdesigner für Dillingen und den Landkreis Saarlouis: moderne Websites, lokale SEO und Google Ads. Persönlich, transparent, ab 990€ mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Dillingen ist mit der Dillinger Hütte und einer starken mittelständischen Wirtschaft ein wichtiger Standort im Landkreis Saarlouis. Genau hier entscheidet eine moderne, schnelle Website darüber, ob neue Kunden Sie online finden.",
      "Wir entwickeln Websites, die speziell für Dillingen, Saarlouis, Rehlingen-Siersburg und Beckingen optimiert sind. Sauberer Code, mobile-first Design und lokale SEO sorgen dafür, dass Sie bei Google ganz oben mitspielen.",
      "Persönliche Betreuung, klare Festpreise und kein Agentur-Bürokratie-Overhead. Sie haben einen festen Ansprechpartner – schnell, direkt, transparent.",
    ],
    nearbyCities: ["Saarlouis", "Rehlingen-Siersburg", "Beckingen", "Wallerfangen"],
  },
  {
    slug: "st-wendel",
    city: "St. Wendel",
    region: "Saarland",
    lat: 49.4669,
    lng: 7.1689,
    intro:
      "Webdesigner für St. Wendel und das nördliche Saarland: moderne Websites, lokale SEO und Google Ads für mittelständische Unternehmen, Handwerk und Tourismus. Persönlich, transparent, ab 990€ mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "St. Wendel ist Kreisstadt des nördlichen Saarlandes und Heimat zahlreicher inhabergeführter Unternehmen, starker Mittelständler und einer wachsenden Tourismusbranche rund um den Bostalsee. Wer hier Aufträge gewinnen will, muss bei lokalen Google-Suchen ganz oben stehen.",
      "Wir entwickeln Websites, die speziell für St. Wendel, Marpingen, Tholey, Nohfelden und Freisen optimiert sind: schnell, mobil, mit lokaler SEO, sauberer Technik und einer klaren Conversion-Architektur. So werden Sie von Kunden gefunden, die genau Ihre Leistung in Ihrer Region suchen.",
      "Persönliche Betreuung statt Agentur-Bürokratie, klare Festpreise statt Stundensatz-Roulette, und ein direkter Ansprechpartner statt Account-Manager-Karussell – so arbeiten wir.",
    ],
    nearbyCities: ["Marpingen", "Tholey", "Nohfelden", "Freisen", "Oberthal"],
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
