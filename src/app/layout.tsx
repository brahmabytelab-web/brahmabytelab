import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-space-grotesk',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://brahmabytelab.com'),
  title: 'Brahmabytelab | Next-Gen Digital Solutions & Innovation',
  description:
    ' Experience the future of tech with Brahmabytelab. We provide cutting-edge software, AI automation, and digital strategies to scale your business.',
  openGraph: {
    title: 'Brahmabytelab | Next-Gen Digital Solutions & Innovation',
    description:
      ' Experience the future of tech with Brahmabytelab. We provide cutting-edge software, AI automation, and digital strategies to scale your business.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brahmabytelab | Next-Gen Digital Solutions & Innovation',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
      <GoogleTagManager gtmId="GTM-G-N8EZ4XEEKB" />
      <GoogleAnalytics gaId="G-N8EZ4XEEKB" />
    </html>
  );
}
