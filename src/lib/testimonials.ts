// Testimonial-/Review-System für Fylu Marketing.
//
// WICHTIG (Fylu-Plan-Vorgabe): Es werden NUR reale, schriftlich freigegebene
// Kundenaussagen gepflegt. Keine erfundenen Zitate, keine erfundenen Zahlen,
// keine sinngemäß umformulierten Aussagen ohne Freigabe.
//
// Wenn `testimonials` leer bleibt, rendert TestimonialsSection nichts und
// die AggregateRating-Berechnung liefert null (kein Schema-Objekt, keine
// Google-Policy-Risiken).

export type TestimonialSource = "google" | "provenexpert" | "trustpilot" | "direct";

export type Testimonial = {
  /** Wortlaut der Kunden-/Klienten-Aussage. */
  quote: string;
  /** Klarname des Zitierten. */
  author: string;
  /** Optionale Rolle (Geschäftsführer, Praxisinhaber usw.). */
  role?: string;
  /** Firma oder Praxis. */
  company?: string;
  /** Herkunft der Aussage. */
  source: TestimonialSource;
  /** Bewertung 1..5, nur wenn extern verifizierbar oder direkt vom Kunden vergeben. */
  rating?: number;
  /** Öffentlich einsehbare Quelle (Google-Review-Link, ProvenExpert-Profil-Link). */
  sourceUrl?: string;
  /** Datum als ISO-String. */
  publishedAt?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Fynn kam einfach mit einer bereits vorbereiteten Website in unser Büro. Statt langer Erklärungen hat er direkt gezeigt, was er kann. Wir hatten zu diesem Zeitpunkt gar nicht über eine neue Website nachgedacht, aber sein Auftreten und das Design haben uns sofort überzeugt. Was aber wirklich heraussticht, ist sein Service: extrem schnelle Reaktionszeiten, klare Kommunikation, zügige Umsetzung. Genau diese Art der Zusammenarbeit wünscht man sich. Wir empfehlen ihn uneingeschränkt und arbeiten gerne weiter mit ihm. Wir haben ihn bereits erfolgreich weiterempfohlen. Vielen Dank und weiter so!",
    author: "Karsten Becker",
    role: "Inhaber",
    company: "PB Fahrzeugpflege",
    source: "google",
    rating: 5,
    // Google-Angabe "a week ago", entspricht ungefähr Mitte September 2026.
    publishedAt: "2026-09-14",
  },
  {
    quote:
      "Meine Anfrage war eher komplex. Trotzdem hat sich das Team die Zeit genommen, eine individuelle Lösung zu entwickeln. Diese Lösung hat perfekt zu meinen Anforderungen gepasst und konnte direkt umgesetzt werden. Die Mitarbeiter waren sehr freundlich, engagiert und professionell. Klare Empfehlung!",
    author: "Simon Hilgert",
    source: "google",
    rating: 5,
    // "4 months ago" laut Google Rezension, entspricht ungefähr Mai 2026.
    publishedAt: "2026-05-23",
  },
  {
    quote:
      "Ich bin sehr zufrieden! Meine Website ist richtig gut geworden: modern, klar und genau so, wie ich sie mir vorgestellt habe. Die Kommunikation war super entspannt und schnell, ich habe mich sofort gut aufgehoben gefühlt. Ich kann sie definitiv weiterempfehlen 👍",
    author: "Luca Castronovo",
    source: "google",
    rating: 5,
    // "4 months ago" laut Google Rezension, entspricht ungefähr Mai 2026.
    publishedAt: "2026-05-23",
  },
  {
    quote:
      "Ich bin sehr zufrieden mit der Arbeit die geleistet wurde, mit der Preisleistung bin ich auch sehr zufrieden. Ich kann diese Seite nur sehr weiterempfehlen.",
    author: "Kevin Eifler",
    role: "Inhaber",
    company: "Galabau Eifler",
    source: "google",
    rating: 5,
    // "vor einem Monat" laut Google Rezension, entspricht ungefähr August 2026.
    publishedAt: "2026-08-21",
  },
  {
    quote:
      "Sehr zufrieden mit Fylu Marketing! Professionell, zuverlässig und schnelle Ergebnisse. Klare Empfehlung!",
    author: "Salif Ramadan",
    company: "Salif Gebäudeservice",
    source: "google",
    rating: 5,
    // "vor 4 Monaten" laut Google Rezension, entspricht ungefähr Mai 2026.
    publishedAt: "2026-05-21",
  },
  {
    quote: "Sehr freundlicher, ehrgeiziger, zuverlässiger Geschäftspartner.",
    author: "Mario Dohr",
    source: "google",
    rating: 5,
    sourceUrl: "https://share.google/GqQ9mvs4KRJDq5glk",
    // "vor 4 Monaten" laut Google Rezension, entspricht ungefähr Mai 2026.
    publishedAt: "2026-05-21",
  },
];

/**
 * Berechnet AggregateRating aus real vorhandenen, bewerteten Testimonials.
 * Gibt null zurück, wenn keine bewerteten Reviews vorliegen. Dann wird auch
 * kein AggregateRating-Schema ausgegeben (Google-Policy-konform).
 */
export function computeAggregateRating(): {
  ratingValue: string;
  reviewCount: number;
  bestRating: string;
  worstRating: string;
} | null {
  const withRating = testimonials.filter(
    (t) => typeof t.rating === "number" && t.rating >= 1 && t.rating <= 5,
  );
  if (withRating.length === 0) return null;
  const sum = withRating.reduce((acc, t) => acc + (t.rating ?? 0), 0);
  const avg = sum / withRating.length;
  return {
    ratingValue: avg.toFixed(2),
    reviewCount: withRating.length,
    bestRating: "5",
    worstRating: "1",
  };
}

const SOURCE_LABEL: Record<TestimonialSource, string> = {
  google: "Google Rezension",
  provenexpert: "ProvenExpert",
  trustpilot: "Trustpilot",
  direct: "Direktes Feedback",
};

export function sourceLabel(source: TestimonialSource): string {
  return SOURCE_LABEL[source];
}
