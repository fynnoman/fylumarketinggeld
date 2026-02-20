# Marketing Agentur Website

Eine moderne, conversion-optimierte Website für eine Marketing-Agentur, die Webdesign, SEO und Google-Optimierung anbietet.

## Features

- 🎨 Modernes Design mit Neuromarketing-Prinzipien
- 🎯 Conversion-optimiert mit klaren CTAs
- ⚡ Next.js 15 mit App Router
- 💫 Smooth Animationen mit Framer Motion
- 📱 Vollständig responsive
- 🎭 TypeScript für Type Safety
- 🌊 Tailwind CSS für schnelles Styling
- 🚀 Optimiert für Performance

## Tech Stack

- **Framework:** Next.js 15
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Deployment:** Vercel (empfohlen)

## Installation

```bash
npm install
```

## Development

Starte den Development Server:

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # Hauptseite
│   ├── globals.css         # Globale Styles
│   └── angebote/
│       └── page.tsx        # Angebots-Seite
└── components/
    ├── HeroSection.tsx           # Hero mit Value Proposition
    ├── ValueSection.tsx          # Benefits-Sektion
    ├── ProblemSolutionSection.tsx # Problem-Lösungs-Block
    ├── CaseStudySection.tsx      # Erfolgsgeschichten
    ├── FinalCTASection.tsx       # Finale Call-to-Action
    └── StickyButton.tsx          # Sticky "Projekt starten" Button
```

## Design-Prinzipien

- Klare visuelle Hierarchie
- Großzügiger Weißraum (120px Section-Abstände)
- Maximal 2 Schriftarten
- Farbschema: Weiß, Cyan (#06b6d4), Silber (#c0c0c0)
- Headlines: 48-64px
- Fokus auf Conversion und messbare Ergebnisse

## Deployment

Am einfachsten über Vercel:

```bash
npm run build
```

Siehe [Next.js Deployment Dokumentation](https://nextjs.org/docs/app/building-your-application/deploying) für Details.

