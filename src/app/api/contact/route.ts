import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
      from: 'Fylu Website <onboarding@resend.dev>',
      to: 'fynnschulzonline@gmail.com',
      replyTo: email,
      subject: `Neue Anfrage von ${firmName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #06b6d4; margin-bottom: 24px;">Neue Website-Anfrage</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px; font-weight: bold; color: #374151; width: 40%;">Firmenname</td>
              <td style="padding: 12px; color: #111827;">${firmName || '—'}</td>
            </tr>
            <tr style="background: #f3f4f6; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Ansprechpartner</td>
              <td style="padding: 12px; color: #111827;">${contactName || '—'}</td>
            </tr>
            <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">E-Mail</td>
              <td style="padding: 12px; color: #111827;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
            </tr>
            <tr style="background: #f3f4f6; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Telefon</td>
              <td style="padding: 12px; color: #111827;">${phone || '—'}</td>
            </tr>
            <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Branche</td>
              <td style="padding: 12px; color: #111827;">${branche || '—'}</td>
            </tr>
            <tr style="background: #f3f4f6; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Unternehmensgröße</td>
              <td style="padding: 12px; color: #111827;">${groesse || '—'}</td>
            </tr>
            <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Projektart</td>
              <td style="padding: 12px; color: #111827;">${projectType || '—'}</td>
            </tr>
            <tr style="background: #f3f4f6; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Budget</td>
              <td style="padding: 12px; color: #111827;">${budget || '—'}</td>
            </tr>
            <tr style="background: #fff; border-bottom: 1px solid #e5e7eb;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Design-Präferenzen</td>
              <td style="padding: 12px; color: #111827;">${preferences || '—'}</td>
            </tr>
            <tr style="background: #f3f4f6;">
              <td style="padding: 12px; font-weight: bold; color: #374151;">Nachricht</td>
              <td style="padding: 12px; color: #111827;">${message || '—'}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; color: #6b7280; font-size: 12px;">
            Diese E-Mail wurde automatisch von der Fylu Website gesendet.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Resend error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
