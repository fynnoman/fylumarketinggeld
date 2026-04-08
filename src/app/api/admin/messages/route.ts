import { NextRequest, NextResponse } from 'next/server';
import { getMessages, markRead, deleteMessage, saveMessage } from '@/lib/messages';
import { verifyAdminPassword } from '@/lib/admin';

function checkAuth(req: NextRequest): boolean {
  const auth = req.headers.get('x-admin-token') || '';
  return verifyAdminPassword(auth);
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const messages = getMessages();
  return NextResponse.json(messages);
}

export async function PATCH(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: 'missing id' }, { status: 400 });
  markRead(id);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: 'missing id' }, { status: 400 });
  deleteMessage(id);
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  // public contact form posts
  const body = await req.json();
  // sanitize/validate minimal fields
  const entry = {
    type: 'contact' as const,
    firmName: body.firmName || null,
    contactName: body.contactName || null,
    email: body.email || null,
    phone: body.phone || null,
    branche: body.branche || null,
    groesse: body.groesse || null,
    projectType: body.projectType || null,
    budget: body.budget || null,
    preferences: body.preferences || null,
    message: body.message || null,
  };
  saveMessage(entry);
  return NextResponse.json({ ok: true });
}
