import { PUBLIC_URL } from '../config';
import { FunctionComponent, PropsWithChildren, Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { FONTS } from '../layout/fonts';
import { OPEN_GRAPH_DEFAULT } from './config';
import Header from '../layout/components/Header';
import Footer from '../layout/components/Header copy';
import Analytics from '../layout/components/Analytics';
import MobileOrDesktop from '../layout/components/MobileOrDesktop';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  title: 'Keyboard LEDs',
  description:
    'Free software shows state of Num, Caps and Scroll locks. Very useful for notebooks and keyboards that have no hardware LED indicators.',
  manifest: '/site.webmanifest',
  openGraph: OPEN_GRAPH_DEFAULT,
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={FONTS.default.className}>
        <Suspense>
          <MobileOrDesktop />
        </Suspense>

        <Header />
        <div className="content">{children}</div>
        <Footer />

        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
