export interface Link {
  label: string;
  link: string;
  hoverHint: string;
  bgColour: string;
  iconUrl?: string;
}

const links: Link[] = [
  // Event links
  {
    label: 'React Workshop',
    link: 'https://wdcc.co.nz',
    hoverHint: 'Join us for a React Workshop!',
    bgColour: '#ffd166',
  },
  {
    label: 'Jane Street Dinner',
    link: 'https://wdcc.co.nz',
    hoverHint: 'Jane Street Dinner — register your interest',
    bgColour: '#ffd166',
  },
  {
    label: 'WDCC X DEVS X UOACS X BESA SPORTS DAY',
    link: 'https://wdcc.co.nz',
    hoverHint: 'WDCC x DEVS x UOACS x BESA Sports Day!',
    bgColour: '#ffd166',
  },
  {
    label: 'EY Cyber and Technology Risk Roles',
    link: 'https://wdcc.co.nz',
    hoverHint: 'EY Cyber and Technology Risk Roles — apply now',
    bgColour: '#ffd166',
  },
  {
    label: 'Join WDCC for 2026!',
    link: 'https://wdcc.co.nz',
    hoverHint: 'Become a WDCC member for 2026!',
    bgColour: '#ffd166',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1001/1001371.png',
  },
  {
    label: 'Fonterra Graduate Roles',
    link: 'https://wdcc.co.nz',
    hoverHint: 'Fonterra Graduate Roles — apply now',
    bgColour: '#ffd166',
  },
  {
    label: 'Atlassian Internships',
    link: 'https://wdcc.co.nz',
    hoverHint: 'Atlassian Internship opportunities',
    bgColour: '#ffd166',
  },

  // Permanent links
  {
    label: 'Website',
    link: 'https://wdcc.co.nz',
    hoverHint: 'WDCC Website',
    bgColour: '#FFFFFF',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3178/3178162.png',
  },
  {
    label: 'Facebook',
    link: 'https://www.facebook.com/wdcc.nz',
    hoverHint: 'WDCC Facebook',
    bgColour: '#FFFFFF',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1384/1384005.png',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/wdcc_auckland',
    hoverHint: 'WDCC Instagram',
    bgColour: '#FFFFFF',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3670/3670274.png',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/company/wdcc-auckland',
    hoverHint: 'WDCC LinkedIn',
    bgColour: '#FFFFFF',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3536/3536569.png',
  },
  {
    label: 'Tech Clubs Discord',
    link: 'https://discord.gg/techclubs',
    hoverHint: 'Tech Clubs Discord server',
    bgColour: '#FFFFFF',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968968.png',
  },
];

export const redirects: Record<string, string> = {
  ig: 'https://www.instagram.com/wdcc_auckland',
  fb: 'https://www.facebook.com/wdcc.nz',
  discord: 'https://discord.gg/techclubs',
  'exec-reimbursement': 'https://forms.gle/placeholder',
  'projects-reimbursement': 'https://forms.gle/placeholder',
  'wdcc-sponsorship-2024': 'https://drive.google.com/placeholder',
  'projects-launch-night-slides': 'https://tinyurl.com/placeholder',
  'wdcc-sesa-hackathon': 'https://forms.gle/placeholder',
  'sgm-2024': 'https://meet.google.com/placeholder',
  'exec-recruitment-desc-2025': 'https://forms.gle/placeholder',
  apply: 'https://forms.gle/placeholder',
};

// Swap this function's implementation to fetch from an API (e.g. Payload CMS)
export function getData(): { links: Link[]; redirects: Record<string, string> } {
  return { links, redirects };
}
