export type Region = {
  slug: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  intro: string;
  paragraphs: string[];
  nearbyCities: string[];
  // SEO-Priorität: "top" wird vollständig indexiert + bekommt unique Content-Blöcke,
  // "extended" bekommt robots: noindex (Page existiert, wird aber nicht gerankt → kein Duplicate-Signal).
  tier?: "top" | "extended";
  // Optionale unique Inhalte (nur sinnvoll auf Tier-1-Städten gepflegt).
  economy?: string;
  topIndustries?: string[];
  localFact?: string;
  microCase?: { headline: string; body: string };
};

export const regions: Region[] = [
  {
    slug: "saarbruecken",
    city: "Saarbrücken",
    region: "Saarland",
    lat: 49.2328,
    lng: 7.0098,
    intro:
      "Als Webdesigner aus dem Saarland erstellen wir für Unternehmen in Saarbrücken professionelle, suchmaschinenoptimierte Websites, die nachweislich Kunden bringen. Persönliche Betreuung und ein kostenloser Entwurf in 24 Stunden.",
    paragraphs: [
      "Saarbrücken ist die Landeshauptstadt und das wirtschaftliche Zentrum des Saarlandes. Hunderte Unternehmen, Handwerksbetriebe, Dienstleister, Restaurants und Einzelhändler konkurrieren hier täglich um die Aufmerksamkeit der gleichen Kunden. Wer online nicht sichtbar ist, verliert Aufträge an die Konkurrenz – Tag für Tag, ohne es zu merken.",
      "Über 75 % der Nutzer beurteilen die Glaubwürdigkeit eines Unternehmens anhand seiner Website. Eine veraltete, langsame oder nicht mobiloptimierte Seite kostet Sie messbar Umsatz. Genau hier setzen wir an: mit modernen, schnellen Websites, die für Saarbrücken, Dudweiler, Burbach, Malstatt und das gesamte Saarland optimiert sind.",
      "Sie bekommen keinen Template-Einheitsbrei, sondern eine individuell auf Ihr Unternehmen zugeschnittene Lösung – inklusive lokaler SEO, Google Business Optimierung und auf Wunsch Google Ads für Saarbrücken.",
    ],
    nearbyCities: ["Dudweiler", "Burbach", "Malstatt", "Völklingen", "Saarlouis"],
    tier: "top",
    economy: "Saarbrücken zählt rund 180.000 Einwohner. Die Stadt vereint Verwaltung, Universität, IT-Mittelstand und ein wachsendes Start-up-Umfeld rund um den Saarbrücker IT-Park und das Helmholtz-Zentrum CISPA. Allein im Dienstleistungssektor sind über 60.000 Beschäftigte tätig.",
    topIndustries: ["IT & Software", "Verwaltung & Behörden", "Gesundheitswesen", "Einzelhandel", "Gastronomie", "Beratung & Kanzleien"],
    localFact: "In Saarbrücken konkurrieren überdurchschnittlich viele Webdesign-Anbieter um wenige zentrale Begriffe. Statt im überfüllten Generalisten-Pool unterzugehen, planen wir Ihre Seite für konkrete Stadtteil- und Branchen-Keywords ('Friseur Burbach', 'Kanzlei Sankt Johann', 'Restaurant Alt-Saarbrücken') — dort gewinnen Sie mit einem deutlich kleineren Budget.",
    microCase: {
      headline: "Bäckerei aus Sankt Johann",
      body: "Eine inhabergeführte Bäckerei in Saarbrücken-Sankt Johann hat über die neue Website + Google Business Optimierung innerhalb von 4 Monaten 47 % mehr Anfragen über das Web erhalten. Der größte Hebel war nicht die Optik, sondern das saubere Local-SEO-Setup.",
    },
  },
  {
    slug: "saarlouis",
    city: "Saarlouis",
    region: "Saarland",
    lat: 49.3139,
    lng: 6.7516,
    intro:
      "Webdesigner direkt aus Saarlouis – moderne Websites, lokale SEO und Google Ads für Unternehmen in der Kreisstadt und Umgebung. Persönlich, transparent — mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Saarlouis ist Kreisstadt und einer der wichtigsten Wirtschaftsstandorte im Westen des Saarlandes. Während die meisten Webdesign-Agenturen in Saarbrücken sitzen, profitieren Sie von einem festen Team, der die Region Saarlouis, Dillingen, Lebach und Wallerfangen wirklich kennt – mit kurzen Wegen und persönlicher Betreuung.",
      "Lokale Unternehmen in Saarlouis – ob Handwerk, Gastronomie, Einzelhandel oder Dienstleistung – stehen vor der gleichen Herausforderung: Kunden suchen heute zuerst online. Wer bei Google Maps und in den lokalen Suchergebnissen nicht oben steht, wird übersehen. Wir bauen Websites, die genau dafür gemacht sind: für lokale Sichtbarkeit in Saarlouis und messbar mehr Anfragen.",
      "Vom Design über die technische Umsetzung bis zur Suchmaschinenoptimierung erhalten Sie alles aus einer Hand. Auf Wunsch ergänzen wir Ihre Website mit gezielten Google Ads für Saarlouis und Umgebung – für sofort sichtbare Ergebnisse.",
    ],
    nearbyCities: ["Dillingen", "Wallerfangen", "Lebach", "Merzig", "Völklingen"],
    tier: "top",
    economy: "Saarlouis ist mit ~37.000 Einwohnern Kreisstadt im Westen des Saarlandes und Standort des Ford-Werks (~4.000 Arbeitsplätze), zahlreicher Zuliefererbetriebe sowie eines lebendigen mittelständischen Einzelhandels rund um den Großen Markt.",
    topIndustries: ["Automobilzulieferer & Logistik", "Maschinenbau & Industrie", "Einzelhandel & Gastronomie", "Handwerk", "Gesundheitsdienstleister"],
    localFact: "Saarlouis ist unser Heimatmarkt — wir sind hier persönlich erreichbar und vor Ort. Anders als überregionale Agenturen kommen wir auf eine Tasse Kaffee vorbei, wenn Sie zwischen zwei Briefings stecken. Das ist konkret messbar: kürzere Reaktionszeiten, weniger Missverständnisse, weniger Korrekturschleifen.",
    microCase: {
      headline: "Handwerksbetrieb in Saarlouis-Roden",
      body: "Ein Sanitärbetrieb mit Stammsitz in Roden ist über die neue Website in 6 Monaten auf 80 % mehr qualifizierte Anfragen gekommen. Entscheidend war die Kombination aus klarer Service-Kommunikation und einer schnellen, mobilen Seite, die auch auf der Baustelle ladet.",
    },
  },
  {
    slug: "voelklingen",
    city: "Völklingen",
    region: "Saarland",
    lat: 49.2506,
    lng: 6.8586,
    intro:
      "Professionelles Webdesign für Völklingen: moderne Websites, lokale SEO und Google Ads für Unternehmen rund um die Völklinger Hütte. Inklusive kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Völklingen liegt strategisch zwischen Saarbrücken und Saarlouis und ist Heimat zahlreicher Mittelständler, Handwerksbetriebe und inhabergeführter Geschäfte. Genau diese Unternehmen brauchen eine Website, die nicht nur gut aussieht, sondern auch im Alltag Anfragen, Kontaktanrufe und Aufträge generiert.",
      "Wir erstellen für Sie eine Website, die in Völklingen, Wadgassen und Püttlingen bei Google gefunden wird – mit sauberer Technik, schnellen Ladezeiten, mobiler Optimierung und lokaler Suchmaschinenoptimierung. Keine Agentur-Hotline, keine Warteschleife: Sie haben einen festen Ansprechpartner.",
      "Auf Wunsch betreuen wir Ihre Google Ads-Kampagnen für Völklingen und richten Google Business Profile professionell ein – damit Sie auch in Google Maps und der lokalen Suche oben erscheinen.",
    ],
    nearbyCities: ["Saarbrücken", "Saarlouis", "Wadgassen", "Püttlingen"],
    tier: "extended",
  },
  {
    slug: "merzig",
    city: "Merzig",
    region: "Saarland",
    lat: 49.4431,
    lng: 6.6371,
    intro:
      "Webdesigner für Merzig und das nördliche Saarland: moderne Websites, lokale SEO und Google Ads für Unternehmen im Saargau. Persönlich, transparent.",
    paragraphs: [
      "Merzig ist die größte Stadt im Saargau und ein wichtiges Zentrum für Tourismus, Handwerk und Mittelstand. Wer hier ein Unternehmen führt, weiß: Der lokale Markt entscheidet sich heute online – über Google, Bewertungen und Ihre Website.",
      "Wir entwickeln Websites speziell für Unternehmen in Merzig, Mettlach, Perl und Wadern: schnell, mobiloptimiert, von Anfang an für lokale Suchanfragen ausgerichtet. So werden Sie von Kunden gefunden, die genau Ihre Leistung in Ihrer Region suchen.",
      "Sie bekommen transparente Konditionen, einen kostenlosen Entwurf in 24 Stunden und einen Webdesigner, der wirklich erreichbar ist – ohne Agentur-Overhead.",
    ],
    nearbyCities: ["Mettlach", "Perl", "Wadern", "Beckingen"],
    tier: "top",
    economy: "Merzig ist mit ~30.000 Einwohnern die größte Stadt im Saargau und Wirtschaftszentrum des nördlichen Saarlandes. Geprägt von Tourismus (Saarschleife, Wolfspark), Handwerk, Gesundheitsdienstleistungen (SHG Klinikum Merzig) und einem starken mittelständischen Einzelhandel.",
    topIndustries: ["Tourismus & Gastronomie", "Gesundheitswesen", "Handwerk", "Einzelhandel", "Landwirtschaft & Lebensmittel"],
    localFact: "Im Saargau gibt es kaum spezialisierte lokale Webdesign-Agenturen — die meisten Kunden nutzen Anbieter aus Saarbrücken oder Trier. Eine echte Merzig-Webpräsenz ist hier ein deutlicher Vertrauens­vorteil, besonders für tourismusabhängige Betriebe.",
    microCase: {
      headline: "Gastronomiebetrieb an der Saarschleife",
      body: "Ein Café-Restaurant in der Nähe der Saarschleife hat über Mehrsprachigkeit (DE/FR/EN), lokales SEO und ein einfaches Reservierungssystem die Besucherzahlen aus Frankreich und Luxemburg in einer Saison verdreifacht.",
    },
  },
  {
    slug: "neunkirchen",
    city: "Neunkirchen",
    region: "Saarland",
    lat: 49.3447,
    lng: 7.1802,
    intro:
      "Webdesign für Neunkirchen und das östliche Saarland – moderne Websites, lokale SEO und Google Ads für Unternehmen, die online sichtbar werden wollen. Mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Neunkirchen ist die zweitgrößte Stadt des Saarlandes und beheimatet eine starke Wirtschaft aus Handel, Handwerk, Industrie und Dienstleistung. Gerade hier entscheidet eine moderne Website darüber, ob neue Kunden Sie finden – oder bei der Konkurrenz landen.",
      "Wir bauen Ihre Website von Grund auf für Neunkirchen, Spiesen-Elversberg, Schiffweiler und Illingen: lokal optimiert, technisch sauber, schnell und mobil-tauglich. Lokale SEO und Google Business Optimierung sind fester Bestandteil – nicht teures Zusatzpaket.",
      "Persönliche Betreuung, klare Konditionen und ein kostenloser Entwurf in 24 Stunden sorgen dafür, dass Sie genau wissen, was Sie bekommen, bevor Sie sich entscheiden.",
    ],
    nearbyCities: ["Spiesen-Elversberg", "Schiffweiler", "Illingen", "Ottweiler"],
    tier: "top",
    economy: "Neunkirchen ist mit ~46.000 Einwohnern die drittgrößte Stadt des Saarlandes und einer der Bahnknotenpunkte der Region. Nach dem Strukturwandel ist die Stadt heute geprägt von Einzelhandel (Saarpark-Center), Mittelstand, Gastronomie und Pendlern Richtung Saarbrücken und Homburg.",
    topIndustries: ["Einzelhandel & Shopping", "Handwerk & Bau", "Logistik", "Gastronomie", "Gesundheitsdienstleister"],
    localFact: "Im östlichen Saarland ist Neunkirchen das Tor zu Ottweiler, Wiebelskirchen und Spiesen-Elversberg. Eine gut platzierte Neunkirchen-Website rankt häufig auch für diese Nachbarn mit — das verdoppelt faktisch Ihre Reichweite ohne zusätzliche Pages.",
    microCase: {
      headline: "Restaurant im Neunkirchener Zentrum",
      body: "Ein Familienrestaurant unweit des Saarpark-Centers hat über Reservierungs-Formular + lokales SEO die Tisch-Auslastung an Wochenenden auf 98 % gehoben und die Provisionskosten an OpenTable um 100 % gesenkt — der gleiche Traffic, aber direkt auf der eigenen Seite.",
    },
  },
  {
    slug: "homburg",
    city: "Homburg",
    region: "Saarland",
    lat: 49.3233,
    lng: 7.3386,
    intro:
      "Professionelles Webdesign für Homburg und den Saarpfalz-Kreis: moderne Websites, SEO und Google Ads für lokale Unternehmen. Mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Homburg ist Universitätsstadt und das wirtschaftliche Zentrum des Saarpfalz-Kreises. Mit Universitätsklinikum, Mittelstand und Handwerk gibt es hier einen anspruchsvollen lokalen Markt – Ihre Website muss diesem Anspruch gerecht werden.",
      "Wir entwickeln Websites, die für Homburg, Kirkel, Bexbach und Blieskastel optimiert sind: schnell, modern, lokal SEO-optimiert und auf Conversion ausgerichtet. So werden Anfragen über Ihre Website spürbar mehr.",
      "Auf Wunsch betreuen wir auch Ihre Google Ads-Kampagnen und Google Business Profile für maximale lokale Sichtbarkeit – alles aus einer Hand, persönlich und transparent.",
    ],
    nearbyCities: ["Kirkel", "Bexbach", "Blieskastel", "Bruchmühlbach-Miesau"],
    tier: "extended",
  },
  {
    slug: "st-ingbert",
    city: "St. Ingbert",
    region: "Saarland",
    lat: 49.2767,
    lng: 7.1131,
    intro:
      "Webdesign für St. Ingbert und Umgebung: moderne Websites, lokale SEO und Google Ads für Unternehmen im Saarpfalz-Kreis. Mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "St. Ingbert liegt zwischen Saarbrücken und Homburg und ist mit Industrie, Handwerk und Mittelstand ein bedeutender Wirtschaftsstandort. Lokale Unternehmen brauchen heute eine Website, die genau in dieser Region gefunden wird.",
      "Wir erstellen für Sie eine Website, die für St. Ingbert, Rohrbach, Hassel und Oberwürzbach optimiert ist: technisch sauber, mobiloptimiert und mit lokaler SEO direkt eingebaut. Keine Vorlagen, sondern individuelles Design für Ihr Unternehmen.",
      "Mit klaren, transparenten Konditionen, persönlicher Betreuung und kostenlosem Entwurf in 24 Stunden bekommen Sie maximale Sicherheit, bevor Sie sich überhaupt entscheiden.",
    ],
    nearbyCities: ["Rohrbach", "Hassel", "Oberwürzbach", "Saarbrücken"],
    tier: "extended",
  },
  {
    slug: "dillingen",
    city: "Dillingen",
    region: "Saarland",
    lat: 49.3553,
    lng: 6.7297,
    intro:
      "Webdesigner für Dillingen und den Landkreis Saarlouis: moderne Websites, lokale SEO und Google Ads. Persönlich, transparent — mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "Dillingen ist mit der Dillinger Hütte und einer starken mittelständischen Wirtschaft ein wichtiger Standort im Landkreis Saarlouis. Genau hier entscheidet eine moderne, schnelle Website darüber, ob neue Kunden Sie online finden.",
      "Wir entwickeln Websites, die speziell für Dillingen, Saarlouis, Rehlingen-Siersburg und Beckingen optimiert sind. Sauberer Code, mobile-first Design und lokale SEO sorgen dafür, dass Sie bei Google ganz oben mitspielen.",
      "Persönliche Betreuung, klare Konditionen und kein Agentur-Bürokratie-Overhead. Sie haben einen festen Ansprechpartner – schnell, direkt, transparent.",
    ],
    nearbyCities: ["Saarlouis", "Rehlingen-Siersburg", "Beckingen", "Wallerfangen"],
    tier: "top",
    economy: "Dillingen liegt direkt nördlich von Saarlouis und ist Heimat der Dillinger Hütte (Stahl, ~5.000 Beschäftigte) sowie zahlreicher Industrie- und Handwerksbetriebe. Mit ~20.000 Einwohnern ist die Stadt eng mit Saarlouis verzahnt, hat aber eine sehr eigenständige Wirtschaftsstruktur.",
    topIndustries: ["Stahlindustrie & Zulieferer", "Maschinenbau", "Handwerk", "Logistik", "Gastronomie"],
    localFact: "Dillingen sucht überraschend häufig nach 'SEO Dillingen Saar' und 'Webdesign Dillingen' — die Konkurrenz ist hier deutlich dünner als in Saarbrücken oder Saarlouis. Eine sauber aufgebaute Page kann hier mit überschaubarem Aufwand auf Position 1-3 ranken.",
    microCase: {
      headline: "Industriedienstleister in Dillingen",
      body: "Ein Industriedienstleister rund um die Dillinger Hütte ist über lokales SEO + Long-Tail-Keywords ('Wartung Stahlindustrie Dillingen') in einem Quartal auf der ersten Suchergebnisseite für seine drei Hauptdienstleistungen gelandet.",
    },
  },
  {
    slug: "st-wendel",
    city: "St. Wendel",
    region: "Saarland",
    lat: 49.4669,
    lng: 7.1689,
    intro:
      "Webdesigner für St. Wendel und das nördliche Saarland: moderne Websites, lokale SEO und Google Ads für mittelständische Unternehmen, Handwerk und Tourismus. Persönlich, transparent — mit kostenlosem Entwurf in 24 Stunden.",
    paragraphs: [
      "St. Wendel ist Kreisstadt des nördlichen Saarlandes und Heimat zahlreicher inhabergeführter Unternehmen, starker Mittelständler und einer wachsenden Tourismusbranche rund um den Bostalsee. Wer hier Aufträge gewinnen will, muss bei lokalen Google-Suchen ganz oben stehen.",
      "Wir entwickeln Websites, die speziell für St. Wendel, Marpingen, Tholey, Nohfelden und Freisen optimiert sind: schnell, mobil, mit lokaler SEO, sauberer Technik und einer klaren Conversion-Architektur. So werden Sie von Kunden gefunden, die genau Ihre Leistung in Ihrer Region suchen.",
      "Persönliche Betreuung statt Agentur-Bürokratie, klare Konditionen statt Stundensatz-Roulette, und ein direkter Ansprechpartner statt Account-Manager-Karussell – so arbeiten wir.",
    ],
    nearbyCities: ["Marpingen", "Tholey", "Nohfelden", "Freisen", "Oberthal"],
    tier: "extended",
  },
  {
    slug: "lebach",
    city: "Lebach",
    region: "Saarland",
    lat: 49.4108,
    lng: 6.9101,
    intro:
      "Webdesign für Lebach und Umgebung – moderne, suchmaschinenoptimierte Websites für lokale Unternehmen im Landkreis Saarlouis., kostenloser Entwurf in 24 Stunden.",
    paragraphs: [
      "Lebach liegt zentral im Saarland und ist Heimat zahlreicher inhabergeführter Betriebe, Handwerker und Dienstleister. In einem überschaubaren Markt entscheidet die Online-Sichtbarkeit oft darüber, wer den Auftrag bekommt – und wer leer ausgeht.",
      "Wir bauen Websites, die für Lebach, Eppelborn, Schmelz und Saarwellingen optimiert sind. Lokale SEO und Google Business Profil gehören zum Standard, nicht zum Aufpreis.",
      "Sie bekommen einen festen Ansprechpartner statt einer Hotline – persönlich, transparent und mit klaren Konditionen.",
    ],
    nearbyCities: ["Eppelborn", "Schmelz", "Saarwellingen", "Lebach-Falscheid"],
    tier: "extended",
  },
  {
    slug: "blieskastel",
    city: "Blieskastel",
    region: "Saarland",
    lat: 49.2350,
    lng: 7.2553,
    intro:
      "Webdesigner für Blieskastel im Saarpfalz-Kreis: moderne Websites, lokale SEO und Google Ads für Unternehmen in der Barockstadt., kostenloser Entwurf in 24h.",
    paragraphs: [
      "Blieskastel ist die Barockstadt im Saarpfalz-Kreis – mit Tourismus, Gastronomie und Mittelstand. Wer hier Kunden gewinnen will, braucht eine Website, die den besonderen Charakter der Region transportiert und gleichzeitig technisch sauber bei Google rankt.",
      "Wir erstellen Websites für Blieskastel, Mandelbachtal, Gersheim und Kirkel: mobiloptimiert, mit lokaler SEO direkt eingebaut und einem klaren Fokus auf Conversion. So werden aus Besuchern Anfragen.",
      "Klare Konditionen, persönliche Betreuung und ein kostenloser Entwurf in 24 Stunden – ohne Agentur-Aufschlag.",
    ],
    nearbyCities: ["Mandelbachtal", "Gersheim", "Kirkel", "Homburg"],
    tier: "extended",
  },
  {
    slug: "bexbach",
    city: "Bexbach",
    region: "Saarland",
    lat: 49.3494,
    lng: 7.2611,
    intro:
      "Professionelles Webdesign für Bexbach und den Saarpfalz-Kreis: schnelle, mobiloptimierte Websites mit lokaler SEO. Inklusive kostenlosem Entwurf in 24h.",
    paragraphs: [
      "Bexbach liegt zwischen Homburg und Neunkirchen und ist Heimat vieler Handwerksbetriebe, Dienstleister und Einzelhändler. Eine moderne Website ist hier kein Luxus, sondern ein klarer Wettbewerbsvorteil.",
      "Wir entwickeln Websites für Bexbach, Homburg, Neunkirchen und das Bexbacher Umland – mit Local SEO, Google Business Optimierung und schnellen Ladezeiten als Standard.",
      "Transparente Konditionen, kostenloser Entwurf, persönlicher Ansprechpartner. Genau das, was lokale Unternehmen brauchen.",
    ],
    nearbyCities: ["Homburg", "Neunkirchen", "Kirkel", "Schiffweiler"],
    tier: "extended",
  },
  {
    slug: "puettlingen",
    city: "Püttlingen",
    region: "Saarland",
    lat: 49.2842,
    lng: 6.8825,
    intro:
      "Webdesign für Püttlingen, Köllertal und Umgebung: moderne, lokal optimierte Websites für Handwerk, Mittelstand und Dienstleistung.",
    paragraphs: [
      "Püttlingen ist Teil des Köllertals und liegt verkehrsgünstig zwischen Saarbrücken und Völklingen. Lokale Betriebe stehen oft im Wettbewerb mit Anbietern aus den Nachbarstädten – eine starke Website macht hier den Unterschied.",
      "Wir bauen Websites speziell für Püttlingen, Riegelsberg, Heusweiler und Völklingen: mit lokaler SEO, sauberer Technik und mobile-first Design.",
      "Kostenloser Entwurf in 24 Stunden, klare Konditionen, persönliche Betreuung – ohne Agentur-Aufschlag.",
    ],
    nearbyCities: ["Riegelsberg", "Heusweiler", "Völklingen", "Saarbrücken"],
    tier: "extended",
  },
  {
    slug: "sulzbach",
    city: "Sulzbach",
    region: "Saarland",
    lat: 49.2997,
    lng: 7.0606,
    intro:
      "Webdesigner für Sulzbach/Saar und das Sulzbachtal: moderne Websites, lokale SEO und Google Ads für lokale Betriebe. Persönlich, transparent.",
    paragraphs: [
      "Sulzbach liegt zentral im Sulzbachtal zwischen Saarbrücken und Neunkirchen. Gerade in dichter besiedelten Regionen wie hier ist die lokale Sichtbarkeit bei Google entscheidend, um aus der Masse herauszustechen.",
      "Wir entwickeln Websites für Unternehmen in Sulzbach, Friedrichsthal, Quierschied und Saarbrücken: technisch sauber, mobile-first, lokal SEO-optimiert.",
      "Persönlicher Ansprechpartner statt Agentur-Hotline. Klare Konditionen statt Stundensätze. Kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Friedrichsthal", "Quierschied", "Saarbrücken", "Neunkirchen"],
    tier: "extended",
  },
  {
    slug: "wadgassen",
    city: "Wadgassen",
    region: "Saarland",
    lat: 49.2606,
    lng: 6.7903,
    intro:
      "Webdesign für Wadgassen und Bous im Saarland: moderne, lokal optimierte Websites für Unternehmen rund um die deutsch-französische Grenze.",
    paragraphs: [
      "Wadgassen liegt strategisch nahe der französischen Grenze und ist ein wichtiger Standort für Handwerk, Industrie und Dienstleistung. Lokale Betriebe profitieren von einer Website, die sowohl Kunden aus dem Saarland als auch dem grenznahen Raum anspricht.",
      "Wir erstellen Websites für Wadgassen, Bous, Saarlouis und Völklingen: mit lokaler SEO, sauberer Technik und mobiloptimiertem Design – schnell, modern und auf Conversion ausgelegt.",
      "Transparente Konditionen, kostenloser Entwurf in 24 Stunden, persönlicher Ansprechpartner direkt aus dem Saarland.",
    ],
    nearbyCities: ["Bous", "Saarlouis", "Völklingen", "Überherrn"],
    tier: "extended",
  },
  {
    slug: "mettlach",
    city: "Mettlach",
    region: "Saarland",
    lat: 49.4934,
    lng: 6.5867,
    intro:
      "Webdesign für Mettlach und die Saarschleife: moderne Websites für Tourismus, Gastronomie und lokale Betriebe an der Saar. Inklusive kostenlosem Entwurf in 24h.",
    paragraphs: [
      "Mettlach ist mit der berühmten Saarschleife eine der bekanntesten Tourismus-Regionen des Saarlandes. Hotels, Restaurants, Pensionen und Erlebnisanbieter brauchen Websites, die nicht nur informieren, sondern emotional begeistern und gleichzeitig technisch perfekt funktionieren.",
      "Wir entwickeln Websites für Mettlach, Orscholz, Saarhölzbach und Perl – mit Schwerpunkt auf hochwertige Bildsprache, Buchungsintegration und lokaler SEO für touristische Suchbegriffe.",
      "Persönliche Beratung, kostenloser Entwurf und kurze Wege – ohne Agentur-Bürokratie.",
    ],
    nearbyCities: ["Orscholz", "Saarhölzbach", "Perl", "Merzig"],
    tier: "extended",
  },
  {
    slug: "wadern",
    city: "Wadern",
    region: "Saarland",
    lat: 49.5395,
    lng: 6.8836,
    intro:
      "Webdesigner für Wadern und den nördlichen Landkreis Merzig-Wadern: moderne Websites, lokale SEO und Google Ads.",
    paragraphs: [
      "Wadern liegt im Norden des Saarlandes im Hochwald und ist Heimat zahlreicher Handwerksbetriebe und Mittelständler. In ländlich geprägten Regionen ist die Online-Sichtbarkeit besonders wichtig, da der Einzugsbereich oft größer ist als in städtischen Räumen.",
      "Wir bauen Websites für Wadern, Losheim am See, Weiskirchen und Nonnweiler: lokal SEO-optimiert, mit sauberer Technik und schnellen Ladezeiten – auch bei schlechter Mobilfunkverbindung im ländlichen Raum.",
      "Persönlicher Ansprechpartner, klare Konditionen, kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Losheim am See", "Weiskirchen", "Nonnweiler", "Merzig"],
    tier: "extended",
  },
  {
    slug: "eppelborn",
    city: "Eppelborn",
    region: "Saarland",
    lat: 49.4017,
    lng: 6.9678,
    intro:
      "Webdesign für Eppelborn und das Illtal: moderne Websites, lokale SEO und Google Ads für Unternehmen im Landkreis Neunkirchen. Persönlich, transparent.",
    paragraphs: [
      "Eppelborn liegt zwischen Lebach und Neunkirchen und ist ein wichtiger Standort für Handwerk, Mittelstand und Einzelhandel. Eine moderne Website ist hier oft der entscheidende Faktor, um sich gegenüber Anbietern aus den Nachbarstädten zu behaupten.",
      "Wir erstellen Websites für Eppelborn, Lebach, Illingen und Merchweiler – mit lokaler SEO, mobile-first Design und schnellen Ladezeiten.",
      "Transparente Konditionen, kostenloser Entwurf in 24 Stunden, persönlicher Ansprechpartner.",
    ],
    nearbyCities: ["Lebach", "Illingen", "Merchweiler", "Schiffweiler"],
    tier: "extended",
  },
  {
    slug: "heusweiler",
    city: "Heusweiler",
    region: "Saarland",
    lat: 49.3375,
    lng: 6.9325,
    intro:
      "Webdesign für Heusweiler und das Köllertal: moderne, lokal optimierte Websites für Handwerk, Mittelstand und Dienstleister.",
    paragraphs: [
      "Heusweiler liegt im Regionalverband Saarbrücken und ist Heimat zahlreicher inhabergeführter Betriebe. In der Nähe der Landeshauptstadt ist der Wettbewerb groß – umso wichtiger ist eine professionelle, technisch saubere Website.",
      "Wir entwickeln Websites für Heusweiler, Riegelsberg, Püttlingen und Saarbrücken: mit lokaler SEO, mobile-first Design und einem klaren Fokus auf Anfragen und Aufträge.",
      "Persönliche Betreuung, klare Konditionen, kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Riegelsberg", "Püttlingen", "Saarbrücken", "Quierschied"],
    tier: "extended",
  },
  {
    slug: "riegelsberg",
    city: "Riegelsberg",
    region: "Saarland",
    lat: 49.3033,
    lng: 6.9344,
    intro:
      "Webdesigner für Riegelsberg im Regionalverband Saarbrücken: schnelle, moderne Websites mit lokaler SEO für lokale Betriebe. Mit kostenlosem Entwurf in 24h.",
    paragraphs: [
      "Riegelsberg liegt unmittelbar an Saarbrücken und ist ein wichtiger Wirtschaftsstandort im Köllertal. Wer hier Kunden gewinnen will, muss bei Google für lokale Suchanfragen sichtbar sein – besonders in einem so dicht besiedelten Raum.",
      "Wir bauen Websites für Riegelsberg, Heusweiler, Püttlingen und Saarbrücken – technisch einwandfrei, mobiloptimiert und mit lokaler SEO direkt eingebaut.",
      "Persönlicher Kontakt statt Hotline. Ergebnisse statt Versprechen.",
    ],
    nearbyCities: ["Heusweiler", "Püttlingen", "Saarbrücken", "Völklingen"],
    tier: "extended",
  },
  {
    slug: "losheim-am-see",
    city: "Losheim am See",
    region: "Saarland",
    lat: 49.5081,
    lng: 6.7461,
    intro:
      "Webdesign für Losheim am See: Websites für Tourismus, Gastronomie und lokale Unternehmen im Hochwald. Inklusive kostenlosem Entwurf in 24h.",
    paragraphs: [
      "Losheim am See ist ein beliebtes Naherholungsgebiet und wichtiger Tourismus-Standort im Saarland. Hotels, Restaurants, Pensionen und Erlebnisanbieter profitieren von Websites, die emotional ansprechen und gleichzeitig für lokale und touristische Suchanfragen optimiert sind.",
      "Wir entwickeln Websites für Losheim am See, Wadern, Weiskirchen und Mettlach: mit Schwerpunkt auf Bildsprache, Buchungsanfragen und lokaler SEO.",
      "Persönliche Betreuung, kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Wadern", "Weiskirchen", "Mettlach", "Merzig"],
    tier: "extended",
  },
  {
    slug: "perl",
    city: "Perl",
    region: "Saarland",
    lat: 49.4711,
    lng: 6.3781,
    intro:
      "Webdesign für Perl und das Dreiländereck: moderne Websites für Weinbau, Gastronomie und lokale Unternehmen im Saarland.",
    paragraphs: [
      "Perl liegt im Dreiländereck zwischen Deutschland, Frankreich und Luxemburg und ist berühmt für seinen Weinbau. Lokale Betriebe profitieren von einer Website, die sowohl regionale Saarland-Kunden als auch grenzüberschreitende Besucher anspricht.",
      "Wir erstellen Websites für Perl, Mettlach, Merzig und das gesamte Mosel-Saar-Gebiet: mit Fokus auf Bildsprache, lokale SEO und Conversion-Optimierung.",
      "Persönlicher Ansprechpartner, klare Konditionen, kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Mettlach", "Merzig", "Saarhölzbach", "Orscholz"],
    tier: "extended",
  },
  {
    slug: "tholey",
    city: "Tholey",
    region: "Saarland",
    lat: 49.4847,
    lng: 7.0667,
    intro:
      "Webdesigner für Tholey und den Schaumberg: moderne Websites, lokale SEO und Google Ads für Unternehmen im Landkreis St. Wendel.",
    paragraphs: [
      "Tholey liegt am Fuße des Schaumbergs und ist Heimat zahlreicher Handwerksbetriebe, Tourismus-Anbieter und Mittelständler. Eine professionelle Website ist hier oft entscheidend, um auch außerhalb des direkten Umfelds gefunden zu werden.",
      "Wir entwickeln Websites für Tholey, St. Wendel, Marpingen und Nonnweiler: schnell, mobiloptimiert und mit lokaler SEO direkt eingebaut.",
      "Klare Konditionen, kostenloser Entwurf in 24 Stunden, persönlicher Ansprechpartner.",
    ],
    nearbyCities: ["St. Wendel", "Marpingen", "Nonnweiler", "Oberthal"],
    tier: "extended",
  },
  {
    slug: "saarwellingen",
    city: "Saarwellingen",
    region: "Saarland",
    lat: 49.3578,
    lng: 6.8131,
    intro:
      "Webdesign für Saarwellingen und Schwalbach: moderne, lokal optimierte Websites für Handwerk und Mittelstand im Landkreis Saarlouis.",
    paragraphs: [
      "Saarwellingen liegt im Herzen des Landkreises Saarlouis und ist Heimat zahlreicher Handwerksbetriebe und Dienstleister. Eine moderne Website ist entscheidend, um sich im wachsenden Wettbewerb der Region zu behaupten.",
      "Wir bauen Websites für Saarwellingen, Schwalbach, Saarlouis und Lebach – technisch sauber, mobile-first und lokal SEO-optimiert.",
      "Persönlicher Kontakt, klare Konditionen, kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Schwalbach", "Saarlouis", "Lebach", "Dillingen"],
    tier: "extended",
  },
  {
    slug: "schwalbach",
    city: "Schwalbach",
    region: "Saarland",
    lat: 49.2961,
    lng: 6.8231,
    intro:
      "Webdesigner für Schwalbach im Landkreis Saarlouis: schnelle, mobiloptimierte Websites mit lokaler SEO. Inklusive kostenlosem Entwurf in 24h.",
    paragraphs: [
      "Schwalbach liegt zwischen Saarlouis, Völklingen und Saarbrücken und ist ein wirtschaftlich starker Standort mit Handwerk, Industrie und Einzelhandel. Eine professionelle Website ist hier ein klarer Wettbewerbsvorteil.",
      "Wir entwickeln Websites für Schwalbach, Saarwellingen, Völklingen und Saarlouis – mit lokaler SEO, mobile-first Design und sauberer Technik.",
      "Transparente Konditionen, kostenloser Entwurf in 24 Stunden, persönlicher Ansprechpartner.",
    ],
    nearbyCities: ["Saarwellingen", "Völklingen", "Saarlouis", "Wadgassen"],
    tier: "extended",
  },
  {
    slug: "bous",
    city: "Bous",
    region: "Saarland",
    lat: 49.2806,
    lng: 6.8131,
    intro:
      "Webdesign für Bous im Landkreis Saarlouis: moderne, lokal optimierte Websites für Handwerk, Mittelstand und Dienstleister.",
    paragraphs: [
      "Bous liegt zwischen Völklingen und Saarlouis und ist ein wichtiger lokaler Wirtschaftsstandort. Wer hier Kunden gewinnen will, braucht eine Website, die bei Google für lokale Suchanfragen wie „Handwerker Bous“ oder „Dienstleister Bous“ sichtbar ist.",
      "Wir erstellen Websites für Bous, Wadgassen, Völklingen und Saarlouis: schnell, mobiloptimiert und mit lokaler SEO direkt eingebaut.",
      "Persönlicher Ansprechpartner, klare Konditionen, kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Wadgassen", "Völklingen", "Saarlouis", "Schwalbach"],
    tier: "extended",
  },
  {
    slug: "kirkel",
    city: "Kirkel",
    region: "Saarland",
    lat: 49.2906,
    lng: 7.2278,
    intro:
      "Webdesign für Kirkel im Saarpfalz-Kreis: moderne Websites mit lokaler SEO für Handwerk, Tourismus und Mittelstand.",
    paragraphs: [
      "Kirkel ist Teil des Saarpfalz-Kreises und bekannt für die Kirkeler Burg und ein lebendiges Mittelstands-Umfeld. Eine professionelle Website ist hier oft der entscheidende Hebel, um auch außerhalb der direkten Nachbarschaft Aufträge zu gewinnen.",
      "Wir entwickeln Websites für Kirkel, Homburg, Blieskastel und St. Ingbert – mit lokaler SEO, schnellen Ladezeiten und mobiloptimiertem Design.",
      "Persönlicher Kontakt statt Hotline, kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Homburg", "Blieskastel", "St. Ingbert", "Bexbach"],
    tier: "extended",
  },
  {
    slug: "spiesen-elversberg",
    city: "Spiesen-Elversberg",
    region: "Saarland",
    lat: 49.3083,
    lng: 7.1492,
    intro:
      "Webdesign für Spiesen-Elversberg im Landkreis Neunkirchen: moderne, lokal optimierte Websites für Handwerk, Mittelstand und Dienstleister.",
    paragraphs: [
      "Spiesen-Elversberg liegt im Landkreis Neunkirchen und ist Heimat zahlreicher Mittelständler, Handwerker und Sportbetriebe (SV Elversberg). Lokale Sichtbarkeit bei Google ist hier oft der entscheidende Faktor für neue Kunden.",
      "Wir bauen Websites für Spiesen-Elversberg, Neunkirchen, Schiffweiler und Illingen: lokal SEO-optimiert, technisch sauber und mobile-first.",
      "Persönlicher Ansprechpartner, kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Neunkirchen", "Schiffweiler", "Illingen", "Sulzbach"],
    tier: "extended",
  },
  {
    slug: "ueberherrn",
    city: "Überherrn",
    region: "Saarland",
    lat: 49.2433,
    lng: 6.7000,
    intro:
      "Webdesign für Überherrn an der französischen Grenze: moderne Websites mit lokaler SEO für Unternehmen im Landkreis Saarlouis.",
    paragraphs: [
      "Überherrn liegt direkt an der französischen Grenze und ist ein wichtiger Standort für Handel, Handwerk und Dienstleistung – mit besonderer Anziehungskraft für deutsch-französische Kundschaft.",
      "Wir entwickeln Websites für Überherrn, Wallerfangen, Saarlouis und Bous – mit lokaler SEO, mobiloptimiertem Design und sauberer Technik.",
      "Persönliche Betreuung, klare Konditionen, kostenloser Entwurf in 24 Stunden.",
    ],
    nearbyCities: ["Wallerfangen", "Saarlouis", "Bous", "Wadgassen"],
    tier: "extended",
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
