import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
});

const PRICE_IDS: Record<number, string> = {
  0: process.env.STRIPE_PRICE_BASISMODELL!,
  1: process.env.STRIPE_PRICE_FORTGESCHRITTEN!,
  2: process.env.STRIPE_PRICE_PROFESSIONELL!,
};

export async function POST(req: NextRequest) {
  try {
    const { paketIndex, customerEmail, customerName } = await req.json();

    const priceId = PRICE_IDS[paketIndex];

    if (!priceId) {
      return NextResponse.json(
        { error: 'Ungültiges Paket oder kein Preis hinterlegt.' },
        { status: 400 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: customerEmail || undefined,
      metadata: {
        customerName: customerName || '',
        paketIndex: String(paketIndex),
      },
      success_url: `${baseUrl}/buchen/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/buchen?paket=${paketIndex}`,
      locale: 'de',
      payment_method_types: ['card'],
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: 'Checkout konnte nicht erstellt werden.' },
      { status: 500 }
    );
  }
}
