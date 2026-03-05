import { NextRequest, NextResponse } from 'next/server';
import { getMessages, markRead, deleteMessage } from '@/lib/messages';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'fylu2024';

function checkAuth(req: NextRequest): boolean {
  const auth = req.headers.get('x-admin-token');
  return auth === ADMIN_PASSWORD;
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
  markRead(id);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await req.json();
  deleteMessage(id);
  return NextResponse.json({ ok: true });
}
