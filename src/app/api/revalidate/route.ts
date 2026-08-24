import { revalidateTag } from 'next/cache';
import { LINKS_CACHE_TAG } from '@/lib/data';

// Called by the dashboard after a go_link write, so the homepage picks up the
// change on the next visit instead of waiting for a time-based revalidate.
export async function POST(request: Request) {
  const secret = process.env.WDCC_INTERNAL_KEY;

  if (!secret) {
    console.error('WDCC_INTERNAL_KEY is not set');
    return Response.json({ error: 'not configured' }, { status: 500 });
  }

  if (request.headers.get('x-revalidate-secret') !== secret) {
    return Response.json({ error: 'unauthorized' }, { status: 401 });
  }

  // expire: 0 — next visit blocks for fresh data rather than serving stale once
  revalidateTag(LINKS_CACHE_TAG, { expire: 0 });

  return Response.json({ revalidated: true, tag: LINKS_CACHE_TAG });
}
