import type { Link } from '@/lib/data';

function getContrastColour(hexColour: string): string {
  const hex = hexColour.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // Match old site: dark text on light bg, light text on dark bg
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#183249' : '#EFF8FA';
}

function isAbsoluteUrl(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

export function LinkCard({ label, link, hoverHint, bgColour, iconUrl }: Link) {
  const fgColour = getContrastColour(bgColour);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={hoverHint}
      className="py-3 rounded-lg my-2 hover:brightness-90 transition duration-300 shadow-md relative block"
      style={{ backgroundColor: bgColour, color: fgColour }}
    >
      {iconUrl && isAbsoluteUrl(iconUrl) && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={iconUrl}
          alt=""
          className="block h-6 absolute left-3 top-1/2 -translate-y-1/2 aspect-square object-contain"
        />
      )}
      {iconUrl && !isAbsoluteUrl(iconUrl) && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2">{iconUrl}</span>
      )}
      {label}
    </a>
  );
}
