import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
// Tool-Leads gehen laut User-Vorgabe (2026-08-28) immer an kontakt@fylumarketing.de,
// unabhängig von MAIL_TO env. Kein Override möglich.
const MAIL_TO = "kontakt@fylumarketing.de";
const MAIL_FROM = process.env.MAIL_FROM ?? "Fylu Studio <no-reply@fylumarketing.de>";
const REPLY_TO_USER = "kontakt@fylumarketing.de";

const GENERIC_ERROR =
  "Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de oder rufen Sie an unter +49 151 684 88999.";

function escapeHtml(v: unknown): string {
  return String(v ?? "—")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^\S+@\S+\.\S+$/.test(v);
}

type Body = {
  email: string;
  tool: string;
  subject?: string;
  summary?: string;
  details?: string;
};

// Menschliche Bezeichnungen für die Bestätigungsmail — kein Marketing-Text,
// nur klare Zuordnung.
const TOOL_LABELS: Record<string, string> = {
  "website-check": "Website-Analyse",
  "seo-check": "SEO-Check",
};

function toolLabel(slug: string): string {
  return TOOL_LABELS[slug] ?? slug;
}

function buildUserConfirmationHtml(params: {
  toolLabel: string;
  summary: string;
}): string {
  const { toolLabel: label, summary } = params;
  return `
    <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 640px; margin: 0 auto; padding: 32px; background: #faf9f6; border-radius: 12px;">
      <div style="border-bottom: 1px solid #d5d7d9; padding-bottom: 20px; margin-bottom: 24px;">
        <p style="font-size: 10px; letter-spacing: 0.32em; text-transform: uppercase; color: #6b7280; margin: 0 0 6px;">Fylu Studio · Bestätigung</p>
        <h1 style="font-size: 24px; color: #0c0e10; font-style: italic; font-weight: 400; margin: 0; line-height: 1.2;">Ihre Anfrage ist bei uns angekommen.</h1>
      </div>

      <p style="font-family: Arial, sans-serif; font-size: 15px; color: #1f2937; line-height: 1.6; margin: 0 0 20px;">
        Vielen Dank für Ihre Anfrage über ${escapeHtml(label)}. Wir haben Ihre Zusammenfassung
        erhalten und melden uns innerhalb eines Werktags persönlich bei Ihnen.
      </p>

      ${
        summary
          ? `<div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 0 0 24px;">
              <p style="font-size: 10px; letter-spacing: 0.32em; text-transform: uppercase; color: #0e7490; font-weight: bold; margin: 0 0 10px; font-family: Arial, sans-serif;">Ihre Zusammenfassung</p>
              <div style="font-family: Arial, sans-serif; font-size: 14px; color: #111827; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(summary)}</div>
            </div>`
          : ""
      }

      <p style="font-family: Arial, sans-serif; font-size: 14px; color: #4b5563; line-height: 1.6; margin: 0 0 8px;">
        Falls Sie zwischenzeitlich Rückfragen haben, erreichen Sie uns direkt:
      </p>
      <p style="font-family: Arial, sans-serif; font-size: 14px; color: #111827; line-height: 1.6; margin: 0 0 24px;">
        <a href="mailto:${REPLY_TO_USER}" style="color: #0e7490; text-decoration: none;">${REPLY_TO_USER}</a><br>
        <a href="tel:+4915168488999" style="color: #0e7490; text-decoration: none;">+49 151 684 88999</a>
      </p>

      <p style="margin-top: 28px; color: #9ca3af; font-size: 11px; letter-spacing: 0.02em; font-family: Arial, sans-serif; line-height: 1.6;">
        Diese Bestätigung wurde automatisch aus dem Fylu-Tools-Bereich versendet.<br>
        Wir speichern keine weiteren Daten außer Ihrer E-Mail-Adresse für die Antwort.
      </p>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Partial<Body>;

    if (!isEmail(data.email)) {
      return NextResponse.json({ error: "Bitte gültige E-Mail-Adresse angeben." }, { status: 400 });
    }
    if (typeof data.tool !== "string" || data.tool.length === 0 || data.tool.length > 80) {
      return NextResponse.json({ error: "Ungültiger Tool-Bezeichner." }, { status: 400 });
    }

    if (!RESEND_API_KEY) {
      console.error("[tools/lead] Missing RESEND_API_KEY env var.");
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject = data.subject?.trim() || `Tool-Lead: ${data.tool}`;
    const summary = (data.summary ?? "").slice(0, 4000);
    const details = (data.details ?? "").slice(0, 20000);

    const html = `
      <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 640px; margin: 0 auto; padding: 32px; background: #faf9f6; border-radius: 12px;">
        <div style="border-bottom: 1px solid #d5d7d9; padding-bottom: 20px; margin-bottom: 24px;">
          <p style="font-size: 10px; letter-spacing: 0.32em; text-transform: uppercase; color: #6b7280; margin: 0 0 4px;">Fylu Tools · Neuer Lead</p>
          <h1 style="font-size: 22px; color: #0c0e10; font-style: italic; font-weight: 400; margin: 0;">${escapeHtml(subject)}</h1>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr style="background: #ffffff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151; width: 30%;">Tool</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(data.tool)}</td>
          </tr>
          <tr style="background: #f5f4f0; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">E-Mail</td>
            <td style="padding: 12px; color: #111827;"><a href="mailto:${escapeHtml(data.email)}" style="color: #0e7490;">${escapeHtml(data.email)}</a></td>
          </tr>
          ${
            summary
              ? `<tr style="background: #ffffff; border-bottom: 1px solid #e5e7eb;">
                   <td style="padding: 12px; font-weight: bold; color: #374151;">Zusammenfassung</td>
                   <td style="padding: 12px; color: #111827; white-space: pre-wrap;">${escapeHtml(summary)}</td>
                 </tr>`
              : ""
          }
          ${
            details
              ? `<tr style="background: #f5f4f0;">
                   <td style="padding: 12px; font-weight: bold; color: #374151;">Details</td>
                   <td style="padding: 12px; color: #111827; white-space: pre-wrap; font-family: Menlo, Consolas, monospace; font-size: 12px;">${escapeHtml(details)}</td>
                 </tr>`
              : ""
          }
        </table>
        <p style="margin-top: 28px; color: #9ca3af; font-size: 11px; letter-spacing: 0.02em; font-family: Arial, sans-serif;">
          Automatische Benachrichtigung aus dem Fylu-Tools-Bereich. Es werden keine weiteren Daten gespeichert außer der E-Mail-Adresse für die Antwort.
        </p>
      </div>
    `;

    const sendResult = await resend.emails.send({
      from: MAIL_FROM,
      to: [MAIL_TO],
      replyTo: data.email,
      subject,
      html,
    });

    if (sendResult.error) {
      console.error("[tools/lead] Resend send error:", sendResult.error);
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    }

    // Bestätigungsmail an den Nutzer — best effort. Wenn der Send fehlschlägt,
    // wird das geloggt aber der Request bleibt erfolgreich, weil die Fylu-interne
    // Benachrichtigung bereits durchgekommen ist.
    try {
      await resend.emails.send({
        from: MAIL_FROM,
        to: [data.email!],
        replyTo: REPLY_TO_USER,
        subject: `Ihre Anfrage bei Fylu ist angekommen · ${toolLabel(data.tool!)}`,
        html: buildUserConfirmationHtml({
          toolLabel: toolLabel(data.tool!),
          summary,
        }),
      });
    } catch (confirmErr) {
      console.error("[tools/lead] User confirmation send failed:", confirmErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("[tools/lead] Unexpected error:", errorMessage);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}
