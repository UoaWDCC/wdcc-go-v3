import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WDCC Go',
  description: 'WDCC links and short-URL redirects — go.wdcc.co.nz',
  metadataBase: new URL('https://go.wdcc.co.nz'),
  robots: { index: true, follow: false },
  openGraph: {
    title: 'WDCC Go',
    description: 'WDCC links and short-URL redirects',
    url: 'https://go.wdcc.co.nz',
    siteName: 'WDCC Go',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
