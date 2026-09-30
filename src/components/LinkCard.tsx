import type { GoLink } from '@/lib/data';

const EVENT_COLOUR = '#ffd166';
const PERMANENT_COLOUR = '#FFFFFF';

function toLinear(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function getContrastColour(hexColour: string): string {
  const hex = hexColour.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // WCAG 2.1 relative luminance
  const L = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  return L > 0.179 ? '#183249' : '#EFF8FA';
}

function isAbsoluteUrl(str: string): boolean {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

export function LinkCard({ label, link, hover_hint, icon_url, is_permanent }: GoLink) {
  const bgColour = is_permanent ? PERMANENT_COLOUR : EVENT_COLOUR;
  const fgColour = getContrastColour(bgColour);
  const iconIsUrl = !!icon_url && isAbsoluteUrl(icon_url);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={hover_hint ?? undefined}
      className="py-3 px-12 rounded-lg my-2 hover:brightness-90 transition duration-300 shadow-md relative block break-words"
      style={{ backgroundColor: bgColour, color: fgColour, fontWeight: 440 }}
    >
      {iconIsUrl && (
        // External CDN icons are already optimised; next/image is not appropriate here
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon_url}
          alt=""
          className="block h-6 absolute left-3 top-1/2 -translate-y-1/2 aspect-square object-contain"
        />
      )}
      {icon_url && !iconIsUrl && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2">{icon_url}</span>
      )}
      {label}
    </a>
  );
}
