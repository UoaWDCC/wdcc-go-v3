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

const SEED_DATE = new Date('2025-01-01');

const dummyLinks: GoLink[] = [
  // Events — is_permanent: false, gold cards
  {
    id: 'link-react-workshop',
    label: 'React Workshop',
    link: 'https://wdcc.co.nz',
    hover_hint: 'Join us for a React Workshop!',
    icon_url: null,
    is_permanent: false,
    hidden: false,
    sort_order: 0,
    team: null,
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-jane-street',
    label: 'Jane Street Dinner',
    link: 'https://wdcc.co.nz',
    hover_hint: 'Jane Street Dinner — register your interest',
    icon_url: null,
    is_permanent: false,
    hidden: false,
    sort_order: 1,
    team: 'industry',
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-sports-day',
    label: 'WDCC X DEVS X UOACS X BESA SPORTS DAY',
    link: 'https://wdcc.co.nz',
    hover_hint: 'WDCC x DEVS x UOACS x BESA Sports Day!',
    icon_url: null,
    is_permanent: false,
    hidden: false,
    sort_order: 2,
    team: 'social',
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-ey',
    label: 'EY Cyber and Technology Risk Roles',
    link: 'https://wdcc.co.nz',
    hover_hint: 'EY Cyber and Technology Risk Roles — apply now',
    icon_url: null,
    is_permanent: false,
    hidden: false,
    sort_order: 3,
    team: 'industry',
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-join-2026',
    label: 'Join WDCC for 2026!',
    link: 'https://wdcc.co.nz',
    hover_hint: 'Become a WDCC member for 2026!',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/1001/1001371.png',
    is_permanent: false,
    hidden: false,
    sort_order: 4,
    team: null,
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-fonterra',
    label: 'Fonterra Graduate Roles',
    link: 'https://wdcc.co.nz',
    hover_hint: 'Fonterra Graduate Roles — apply now',
    icon_url: null,
    is_permanent: false,
    hidden: false,
    sort_order: 5,
    team: 'industry',
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-atlassian',
    label: 'Atlassian Internships',
    link: 'https://wdcc.co.nz',
    hover_hint: 'Atlassian Internship opportunities',
    icon_url: null,
    is_permanent: false,
    hidden: false,
    sort_order: 6,
    team: 'industry',
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },

  // Permanent — is_permanent: true, white cards
  {
    id: 'link-website',
    label: 'Website',
    link: 'https://wdcc.co.nz',
    hover_hint: 'WDCC Website',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/3178/3178162.png',
    is_permanent: true,
    hidden: false,
    sort_order: 0,
    team: null,
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-facebook',
    label: 'Facebook',
    link: 'https://www.facebook.com/wdcc.nz',
    hover_hint: 'WDCC Facebook',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/1384/1384005.png',
    is_permanent: true,
    hidden: false,
    sort_order: 1,
    team: null,
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-instagram',
    label: 'Instagram',
    link: 'https://www.instagram.com/wdcc_auckland',
    hover_hint: 'WDCC Instagram',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/3670/3670274.png',
    is_permanent: true,
    hidden: false,
    sort_order: 2,
    team: null,
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-linkedin',
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/company/wdcc-auckland',
    hover_hint: 'WDCC LinkedIn',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/3536/3536569.png',
    is_permanent: true,
    hidden: false,
    sort_order: 3,
    team: null,
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
  {
    id: 'link-discord',
    label: 'Tech Clubs Discord',
    link: 'https://discord.gg/techclubs',
    hover_hint: 'Tech Clubs Discord server',
    icon_url: 'https://cdn-icons-png.flaticon.com/512/5968/5968968.png',
    is_permanent: true,
    hidden: false,
    sort_order: 4,
    team: null,
    created_by: null,
    updated_by: null,
    created_at: SEED_DATE,
    updated_at: SEED_DATE,
  },
];

const dummyRedirects: GoRedirect[] = [
  { key: 'ig', destination_url: 'https://www.instagram.com/wdcc_auckland', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'fb', destination_url: 'https://www.facebook.com/wdcc.nz', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'discord', destination_url: 'https://discord.gg/techclubs', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'exec-reimbursement', destination_url: 'https://forms.gle/placeholder', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'projects-reimbursement', destination_url: 'https://forms.gle/placeholder', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'wdcc-sponsorship-2024', destination_url: 'https://drive.google.com/placeholder', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'projects-launch-night-slides', destination_url: 'https://tinyurl.com/placeholder', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'wdcc-sesa-hackathon', destination_url: 'https://forms.gle/placeholder', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'sgm-2024', destination_url: 'https://meet.google.com/placeholder', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'exec-recruitment-desc-2025', destination_url: 'https://forms.gle/placeholder', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
  { key: 'apply', destination_url: 'https://forms.gle/placeholder', hidden: false, created_at: SEED_DATE, updated_at: SEED_DATE },
];

// Future DB version:
// import { neon } from '@neondatabase/serverless';
// const sql = neon(process.env.DATABASE_URL!);
//
// export async function getLinks() {
//   return await sql`
//     SELECT * FROM go_links
//     WHERE hidden = false
//     ORDER BY is_permanent ASC, sort_order ASC
//   `;
// }
//
// export async function getRedirects() {
//   const rows = await sql`
//     SELECT key, destination_url FROM go_redirects
//     WHERE hidden = false
//   `;
//   return Object.fromEntries(rows.map(r => [r.key, r.destination_url]));
// }

export async function getLinks(): Promise<GoLink[]> {
  try {
    return dummyLinks
      .filter((l) => !l.hidden)
      .sort((a, b) =>
        a.is_permanent !== b.is_permanent
          ? Number(a.is_permanent) - Number(b.is_permanent)
          : a.sort_order - b.sort_order
      );
  } catch {
    return [];
  }
}

type RedirectsCache = { data: Record<string, string>; expiresAt: number };
let redirectsCache: RedirectsCache | null = null;
const REDIRECTS_TTL_MS = 5 * 60 * 1000; // 5 minutes; flushed on server restart

export async function getRedirects(): Promise<Record<string, string>> {
  if (redirectsCache && Date.now() < redirectsCache.expiresAt) {
    return redirectsCache.data;
  }

  try {
    const data = Object.fromEntries(
      dummyRedirects
        .filter((r) => !r.hidden)
        .map((r) => [r.key, r.destination_url])
    );
    redirectsCache = { data, expiresAt: Date.now() + REDIRECTS_TTL_MS };
    return data;
  } catch {
    return {};
  }
}
