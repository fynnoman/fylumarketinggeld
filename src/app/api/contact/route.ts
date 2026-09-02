import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { saveMessage } from '@/lib/messages';

export const runtime = 'nodejs';

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? '';
const MAIL_TO = process.env.MAIL_TO ?? 'kontakt@fylumarketing.de';
const MAIL_FROM = process.env.MAIL_FROM ?? 'Fylu Marketing <no-reply@fylumarketing.de>';

function escapeHtml(value: unknown): string {
  return String(value ?? '—')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const GENERIC_ERROR =
  'Ihre Anfrage konnte nicht übermittelt werden. Bitte schreiben Sie uns direkt an kontakt@fylumarketing.de oder rufen Sie an unter +49 151 684 88999.';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      firmName,
      contactName,
      email,
      phone,
      branche,
      brancheDetail,
      groesse,
      projectType,
      budget,
      preferences,
      message,
    } = data;

    if (!RESEND_API_KEY) {
      console.error('[contact] Missing RESEND_API_KEY env var.');
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    }

    const resend = new Resend(RESEND_API_KEY);

    const html = `
      <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 640px; margin: 0 auto; padding: 32px; background: #faf9f6; border-radius: 12px;">
        <div style="border-bottom: 1px solid #d5d7d9; padding-bottom: 20px; margin-bottom: 24px;">
          <p style="font-size: 10px; letter-spacing: 0.32em; text-transform: uppercase; color: #6b7280; margin: 0 0 4px;">Fylu Marketing · Neue Anfrage</p>
          <h1 style="font-size: 24px; color: #0c0e10; font-style: italic; font-weight: 400; margin: 0;">Neue Website-Anfrage</h1>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr style="background: #ffffff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151; width: 40%;">Firmenname</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(firmName)}</td>
          </tr>
          <tr style="background: #f5f4f0; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Ansprechpartner</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(contactName)}</td>
          </tr>
          <tr style="background: #ffffff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">E-Mail</td>
            <td style="padding: 12px; color: #111827;"><a href="mailto:${escapeHtml(email)}" style="color: #0e7490;">${escapeHtml(email)}</a></td>
          </tr>
          <tr style="background: #f5f4f0; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Telefon</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(phone)}</td>
          </tr>
          <tr style="background: #ffffff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Branche</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(branche)}</td>
          </tr>
          <tr style="background: #f5f4f0; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Genaue Branche</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(brancheDetail)}</td>
          </tr>
          <tr style="background: #ffffff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Unternehmensgröße</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(groesse)}</td>
          </tr>
          <tr style="background: #f5f4f0; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Gewünschte Website-Art</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(projectType)}</td>
          </tr>
          <tr style="background: #ffffff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Budget</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(budget)}</td>
          </tr>
          <tr style="background: #f5f4f0; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Design-Präferenzen</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(preferences)}</td>
          </tr>
          <tr style="background: #ffffff;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Nachricht</td>
            <td style="padding: 12px; color: #111827; white-space: pre-wrap;">${escapeHtml(message)}</td>
          </tr>
        </table>

        <p style="margin-top: 28px; color: #9ca3af; font-size: 11px; letter-spacing: 0.02em; font-family: Arial, sans-serif;">
          Diese Nachricht wurde automatisch vom Fylu Marketing Kontaktformular übermittelt.
        </p>
      </div>
    `;

    const sendResult = await resend.emails.send({
      from: MAIL_FROM,
      to: [MAIL_TO],
      replyTo: email || undefined,
      subject: `Neue Anfrage von ${firmName || 'Website-Besucher'}`,
      html,
    });

    if (sendResult.error) {
      console.error('[contact] Resend send error:', sendResult.error);
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
    }

    saveMessage({
      type: 'contact',
      firmName,
      contactName,
      email,
      phone,
      branche,
      brancheDetail,
      groesse,
      projectType,
      budget,
      preferences,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error('[contact] Unexpected error:', errorMessage);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}
