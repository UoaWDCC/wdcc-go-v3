import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export interface GoLink {
  id: string;
  label: string;
  link: string;
  hover_hint: string | null;
  icon_url: string | null;
  is_permanent: boolean;
  hidden: boolean;
  sort_order: number;
  team: string | null;
  created_by: string | null;
  updated_by: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface GoRedirect {
  key: string;
  destination_url: string;
  hidden: boolean;
  created_at: Date;
  updated_at: Date;
}

export async function getLinks(): Promise<GoLink[]> {
  try {
    const rows = await sql`
      SELECT id, label, link, hover_hint, icon_url, is_permanent, sort_order, team
      FROM go_link
      WHERE hidden = false
      ORDER BY is_permanent ASC, sort_order ASC
    `;
    return rows as unknown as GoLink[];
  } catch (err) {
    console.error('getLinks failed:', err);
    return [];
  }
}

export async function getRedirects(): Promise<Record<string, string>> {
  try {
    const rows = await sql`
      SELECT key, destination_url
      FROM go_redirect
      WHERE hidden = false
    `;
    return Object.fromEntries(rows.map((r) => [r.key, r.destination_url]));
  } catch (err) {
    console.error('getRedirects failed:', err);
    return {};
  }
}

// Dummy data (kept as reference):
//
// const SEED_DATE = new Date('2025-01-01');
//
// const dummyLinks: GoLink[] = [
//   { id: 'link-react-workshop', label: 'React Workshop', link: 'https://wdcc.co.nz', hover_hint: 'Join us for a React Workshop!', icon_url: null, is_permanent: false, hidden: false, sort_order: 0, team: null, created_by: null, updated_by: null, created_at: SEED_DATE, updated_at: SEED_DATE },
//   { id: 'link-website', label: 'Website', link: 'https://wdcc.co.nz', hover_hint: 'WDCC Website', icon_url: 'https://cdn-icons-png.flaticon.com/512/3178/3178162.png', is_permanent: true, hidden: false, sort_order: 0, team: null, created_by: null, updated_by: null, created_at: SEED_DATE, updated_at: SEED_DATE },
// ];
//
// const dummyRedirects: GoRedirect[] = [
//   { key: 'ig', destination_url: 'https://www.instagram.com/wdcc_auckland', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
//   { key: 'fb', destination_url: 'https://www.facebook.com/wdcc.nz', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
// ];
