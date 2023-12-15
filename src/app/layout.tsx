import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { OPEN_GRAPH_DEFAULT } from './config';
import { PUBLIC_URL } from '../utils/environment';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  title: 'Keyboard LEDs',
  description:
    'Free software shows state of Num, Caps and Scroll locks. Very useful for notebooks and keyboards that have no hardware LED indicators.',
  manifest: '/site.webmanifest',
  themeColor: '#FFFFFF',
  openGraph: OPEN_GRAPH_DEFAULT,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
