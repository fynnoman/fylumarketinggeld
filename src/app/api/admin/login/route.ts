import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminPassword } from '@/lib/admin';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const password = body?.password;
    if (!password) return NextResponse.json({ ok: false, message: 'missing password' }, { status: 400 });

    const valid = verifyAdminPassword(String(password));
    if (!valid) return NextResponse.json({ ok: false, message: 'invalid' }, { status: 401 });

    const res = NextResponse.json({ ok: true });
    res.cookies.set('admin_session', '1', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });
    return res;
  } catch (e) {
    return NextResponse.json({ ok: false, message: 'error' }, { status: 500 });
  }
}
