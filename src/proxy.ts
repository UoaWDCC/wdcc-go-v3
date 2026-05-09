import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRedirects } from '@/lib/data';

export async function proxy(request: NextRequest) {
  const key = request.nextUrl.pathname.slice(1); // strip leading /

  if (key === '') return NextResponse.next();

  const redirects = await getRedirects();
  const target = redirects[key];
  if (target && target.startsWith('http')) {
    return NextResponse.redirect(target, { status: 302 });
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.ico$).*)'],
};
