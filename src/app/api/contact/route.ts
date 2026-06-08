import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { saveMessage } from '@/lib/messages';

export const runtime = 'nodejs';

const SMTP_HOST = process.env.SMTP_HOST ?? 'smtp.strato.de';
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_USER = process.env.SMTP_USER ?? '';
const SMTP_PASS = process.env.SMTP_PASS ?? '';
const MAIL_TO = process.env.MAIL_TO ?? 'kontakt@fylumarketing.de';
const MAIL_FROM = process.env.MAIL_FROM ?? `Fylu Website <${SMTP_USER}>`;

function escapeHtml(value: unknown): string {
  return String(value ?? '—')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      firmName,
      contactName,
      email,
      phone,
      branche,
      groesse,
      projectType,
      budget,
      preferences,
      message,
    } = data;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error('SMTP credentials missing (SMTP_USER / SMTP_PASS env vars).');
      return NextResponse.json(
        { error: 'Mail-Konfiguration fehlt auf dem Server.' },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
        <h2 style="color: #06b6d4; margin-bottom: 24px;">Neue Website-Anfrage</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151; width: 40%;">Firmenname</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(firmName)}</td>
          </tr>
          <tr style="background: #f3f4f6; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Ansprechpartner</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(contactName)}</td>
          </tr>
          <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">E-Mail</td>
            <td style="padding: 12px; color: #111827;"><a href="mailto:${escapeHtml(email)}" style="color: #06b6d4;">${escapeHtml(email)}</a></td>
          </tr>
          <tr style="background: #f3f4f6; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Telefon</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(phone)}</td>
          </tr>
          <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Branche</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(branche)}</td>
          </tr>
          <tr style="background: #f3f4f6; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Unternehmensgröße</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(groesse)}</td>
          </tr>
          <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Projektart</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(projectType)}</td>
          </tr>
          <tr style="background: #f3f4f6; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Budget</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(budget)}</td>
          </tr>
          <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Design-Präferenzen</td>
            <td style="padding: 12px; color: #111827;">${escapeHtml(preferences)}</td>
          </tr>
          <tr style="background: #f3f4f6;">
            <td style="padding: 12px; font-weight: bold; color: #374151;">Nachricht</td>
            <td style="padding: 12px; color: #111827; white-space: pre-wrap;">${escapeHtml(message)}</td>
          </tr>
        </table>

        <p style="margin-top: 24px; color: #6b7280; font-size: 12px;">
          Diese E-Mail wurde automatisch von der Fylu Website gesendet.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email || undefined,
      subject: `Neue Anfrage von ${firmName || 'Website-Besucher'}`,
      html,
    });

    saveMessage({
      type: 'contact',
      firmName,
      contactName,
      email,
      phone,
      branche,
      groesse,
      projectType,
      budget,
      preferences,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error('Contact mail error:', errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
