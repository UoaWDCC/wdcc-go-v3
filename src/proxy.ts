import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function proxy(request: NextRequest) {
  const key = request.nextUrl.pathname.slice(1); // strip leading /

  if (key === '') return NextResponse.next();

  try {
    const rows = await sql`
      SELECT destination_url FROM go_redirect
      WHERE key = ${key} AND hidden = false
      LIMIT 1
    `;
    const target = rows[0]?.destination_url as string | undefined;
    if (target?.startsWith('http')) {
      return NextResponse.redirect(target, { status: 302 });
    }
  } catch (err) {
    console.error('proxy redirect failed:', err);
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.ico$).*)'],
};
