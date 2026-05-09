import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { redirects } from '@/lib/data';

export function proxy(request: NextRequest) {
  const key = request.nextUrl.pathname.slice(1); // strip leading /

  if (key === '') return NextResponse.next();

  const target = redirects[key];
  if (target && target.startsWith('http')) {
    return NextResponse.redirect(target, { status: 302 });
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.svg$|.*\\.ico$).*)'],
};
