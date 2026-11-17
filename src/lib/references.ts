export type ReferenceImage = {
  src: string;
  mode: 'screenshot' | 'photo';
  alt?: string;
};

export type ReferenceTestimonial = {
  quote: string;
  author: string;
  role: string;
};

export type Reference = {
  slug: string;
  client: string;
  owner: string;
  images: ReferenceImage[];
  industry: string;
  location: string;
  title: string;
  story?: string;
  services?: string[];
  url: string;
  urlLabel: string;
  facebookUrl?: string;
  photographer?: { handle: string; instagramUrl: string };
  testimonial?: ReferenceTestimonial;
  featured?: boolean;
};

// Reihenfolge = Reihenfolge auf /referenzen. `featured: true` landet auf der Hauptseite.
export const references: Reference[] = [
  {
    slug: 'kc3-gmbh',
    client: 'KC3 GmbH',
    owner: 'KC3 GmbH',
    images: [{ src: '/kc3.jpg', mode: 'photo' }],
    industry: 'Immobilieninvestitionen & Projektentwicklung',
    location: 'Kenn',
    title: 'Neuer Webauftritt für eine stille, bundesweit aktive Immobiliengesellschaft.',
    story:
      'KC3 investiert, entwickelt und hält Wohn- und Gewerbeimmobilien langfristig im Bestand. Für den digitalen Auftritt entstand eine neue Website, die diesen Anspruch ruhig und präzise abbildet: klare Struktur, zurückhaltende Gestaltung und ein Ton, der zur Position des Unternehmens passt. Keine lauten Signale, sondern ein Auftritt, der Seriosität ohne Umwege kommuniziert.',
    services: ['Website', 'Design', 'Positionierung'],
    url: 'https://www.kc3gmbh.de',
    urlLabel: 'kc3gmbh.de',
  },
  {
    slug: 'sportcenter-kenn',
    client: 'Sportcenter Kenn',
    owner: 'Boris Cucka',
    images: [{ src: '/sportcenter-kenn-hero.png', mode: 'screenshot' }],
    industry: 'Sport & Freizeit',
    location: 'Kenn bei Trier',
    title: 'Neuer Webauftritt für ein Sportcenter mit vielen Welten unter einem Dach.',
    story:
      'Soccer, Tennis, Padel, BattleKart und weitere Angebote unter einer Marke. Der neue Webauftritt bündelt diese Bereiche in einer klaren Struktur, macht die Buchungswege einfach und zeigt das Sportcenter so, wie es vor Ort wirkt: großzügig, modern und einladend für Vereine, Gruppen und Familien.',
    services: ['Website', 'Design', 'Struktur & Navigation'],
    url: 'https://www.sportcenterkenn.de',
    urlLabel: 'sportcenterkenn.de',
  },
  {
    slug: 'kaeltebus-saarbruecken',
    client: 'Kältebus Saarbrücken e.V.',
    owner: 'Willi Kühnreich',
    images: [
      { src: '/kaeltebus.jpg', mode: 'photo' },
      { src: '/kaeltebus-hero.jpg', mode: 'screenshot' },
    ],
    industry: 'Gemeinnütziger Verein',
    location: 'Saarbrücken',
    title: 'Technische Neuaufstellung für den Kältebus Saarbrücken.',
    story:
      'Beim Kältebus Saarbrücken ging es nicht nur um eine neue Website, sondern um die vollständige technische Neuaufstellung des digitalen Auftritts. Fylu Marketing hat die Website umgesetzt und parallel die Domain, das Hosting und die E-Mail-Struktur neu organisiert. Nachdem es bei der bisherigen Domainverwaltung zu erheblichen Problemen gekommen war, wurde die Situation gemeinsam mit Providern und der DENIC geklärt. Die Domain konnte schließlich gesichert, zurückgeführt und neu eingebunden werden. Parallel dazu wurden die technische Infrastruktur, die E-Mail-Postfächer und die laufende Betreuung neu aufgebaut. Ziel war es, dem Verein wieder eine stabile, nachvollziehbare und langfristig funktionierende digitale Grundlage zu geben. Das Ergebnis ist ein moderner Webauftritt mit klarer technischer Struktur und einer deutlich sichereren Verwaltung im Hintergrund.',
    services: [
      'Website',
      'Domainmanagement',
      'Hosting',
      'E-Mail-Infrastruktur',
      'Technische Betreuung',
    ],
    url: 'https://kaeltebus-saarbruecken.de',
    urlLabel: 'kaeltebus-saarbruecken.de',
    testimonial: {
      quote:
        'Fynn Schulz von FYLU Marketing betreut unseren gemeinnützigen Verein Kältebus Saarbrücken e.V. erst seit kurzem, hat uns aber schon total mit seinem tollen Service und Fachwissen überzeugt. Schnell, unkompliziert, immer freundlich und hilfsbereit. Wir sind froh, einen solch kompetenten Ansprechpartner an unserer Seite zu wissen.',
      author: 'Willi Kühnreich',
      role: 'Vorstand · Kältebus Saarbrücken e.V.',
    },
    featured: true,
  },
  {
    slug: 'mb-zahnabrechnung',
    client: 'Milana Kollmann',
    owner: 'Milana Kollmann',
    images: [{ src: '/milana.jpeg', mode: 'photo' }],
    industry: 'Zahnärztliche Abrechnung',
    location: 'Saarlouis',
    title: 'Von der Idee zur eigenen Marke in der zahnärztlichen Abrechnung.',
    story:
      'Milana wollte sich eigenständig als Expertin für zahnärztliche Abrechnung aufstellen. Fylu Marketing hat die Gründung von vorne bis hinten begleitet: Name, Logo, Website, Google Unternehmensprofil, SEO und GEO sowie eine eigene Fotoproduktion mit Fotografen. Bei jeder Entscheidung bekam Milana eine kuratierte Auswahl, so dass die Marke gemeinsam entstanden ist und wirklich ihre eigene ist.',
    services: ['Markenaufbau', 'Website', 'SEO & GEO', 'Fotoproduktion'],
    url: 'https://www.mb-zahnabrechnung.de',
    urlLabel: 'mb-zahnabrechnung.de',
    photographer: {
      handle: '@manumr.photo',
      instagramUrl: 'https://www.instagram.com/manumr.photo/',
    },
    featured: true,
  },
  {
    slug: 'galabau-eifler',
    client: 'Galabau Eifler',
    owner: 'Kevin Eifler',
    images: [{ src: '/galabau-eifler.jpeg', mode: 'photo' }],
    industry: 'Garten- & Landschaftsbau',
    location: 'Saarbrücken',
    title: 'Vom Handwerksbetrieb zur wiedererkennbaren Marke.',
    story:
      'Neuer Auftritt für einen Landschaftsbauer mit Anspruch. Klare Typografie, geordnete Projekt-Galerie und Vorher-Nachher-Strecken. Anfragen kommen sortierter und mit klarem Budget-Verständnis.',
    services: ['Website', 'Design', 'Projekt-Präsentation'],
    url: 'https://galabau-eifler.de',
    urlLabel: 'galabau-eifler.de',
    featured: true,
  },
  {
    slug: 'pb-fahrzeugpflege',
    client: 'PB Fahrzeugpflege',
    owner: 'Karsten Becker',
    images: [{ src: '/PB.jpg', mode: 'photo' }],
    industry: 'Fahrzeugaufbereitung & Keramikversiegelung',
    location: 'Saarlouis · Saarland · Luxemburg',
    title: 'Über 25 Jahre Handwerk, endlich sichtbar.',
    story:
      'Seit 1997 auf Premium-Fahrzeugaufbereitung spezialisiert, die alte Website hat davon nichts erzählt. Neuer Auftritt mit prominenten Trust-Signalen (4,92/5 · 648 ProvenExpert · 184 Google), klarer Anfrage-Strecke und ruhiger Bildsprache. Von der Fachwerkstatt zur festen Adresse für Sportwagen und Oldtimer.',
    services: ['Website', 'Trust-Signale', 'Lokales SEO'],
    url: 'https://pb-fahrzeugpflege.de',
    urlLabel: 'pb-fahrzeugpflege.de',
    facebookUrl: 'https://www.facebook.com/share/p/1C7ypdFRbh/?mibextid=wwXIfr',
  },
  {
    slug: 'salif-gebaeudeservice',
    client: 'SALIF Gebäudeservice',
    owner: 'SALIF Gebäudeservice',
    images: [{ src: '/salif-hero.png', mode: 'screenshot' }],
    industry: 'Gebäudereinigung & Facility Service',
    location: 'Pirmasens · Kaiserslautern · Westpfalz',
    title: 'Neuer Webauftritt für einen jungen Gebäudeservice mit eigenem Anspruch.',
    story:
      'SALIF ist ein inhabergeführter Gebäudeservice aus Pirmasens, aktiv in der gesamten Westpfalz. Für den digitalen Auftritt entstand eine Website mit klarer Haltung: starke Typografie, ehrliche Bildsprache und eine Struktur, die sofort zeigt, wofür das Unternehmen steht. Statt generischem Reinigungs-Stock ein Auftritt, der zum Handwerk und zum Team passt.',
    services: ['Website', 'Design', 'Positionierung'],
    url: 'https://salif-gebaeudeservice.de',
    urlLabel: 'salif-gebaeudeservice.de',
  },
  {
    slug: 'fahrzeugtechnik-staudt',
    client: 'Fahrzeugtechnik Staudt',
    owner: 'Eric Staudt',
    images: [{ src: '/staudt-hero.png', mode: 'screenshot' }],
    industry: 'KFZ-Meisterwerkstatt',
    location: 'Saarlouis',
    title: 'Neuer Webauftritt für eine Meisterwerkstatt mit klarer Haltung.',
    story:
      'Fahrzeugtechnik Staudt ist ein inhabergeführter Meisterbetrieb in Saarlouis mit persönlichem Service und sehr direkter Arbeitsweise. Für den digitalen Auftritt entstand eine Website, die genau diesen Charakter trägt: ruhiges, dunkles Design, klare Struktur und eine Live-Anmutung, die zur Werkstatt passt. Statt austauschbarem Werkstatt-Stock ein Auftritt, der Vertrauen und Handwerk sofort transportiert.',
    services: ['Website', 'Design', 'Terminstrecke'],
    url: 'https://www.fzgtechstaudt.de',
    urlLabel: 'fzgtechstaudt.de',
  },
  {
    slug: 'demir-speedconnect',
    client: 'Demir SpeedConnect',
    owner: 'Demir SpeedConnect GmbH',
    images: [{ src: '/demir.png', mode: 'photo' }],
    industry: 'Glasfaser & Tiefbau',
    location: 'Beckingen · Deutschland',
    title: 'Neuer Webauftritt für Demir SpeedConnect.',
    url: 'https://www.demir-speedconnect.de',
    urlLabel: 'demir-speedconnect.de',
  },
  {
    slug: 'mg-gebaeudeservice',
    client: 'MG Gebäudeservice',
    owner: 'MG Gebäudeservice',
    images: [{ src: '/mg-gebaeude.png', mode: 'photo' }],
    industry: 'Gebäudereinigung',
    location: 'Köln',
    title: 'Neuer Webauftritt für MG Gebäudeservice.',
    url: 'https://www.mg-gebaeudeservice.de',
    urlLabel: 'mg-gebaeudeservice.de',
  },
  {
    slug: 'oufa-hairstyling',
    client: 'Oufa Hairstyling',
    owner: 'Oufa Yousef',
    images: [{ src: '/oufa-foto.jpg', mode: 'photo' }],
    industry: 'Friseur-Atelier',
    location: 'Saarbrücken',
    title: 'Neuer Webauftritt für Oufa Hairstyling.',
    url: 'https://www.oufa-hairstyling.de',
    urlLabel: 'oufa-hairstyling.de',
  },
];

export function getFeaturedReferences(): Reference[] {
  return references.filter((r) => r.featured);
}
