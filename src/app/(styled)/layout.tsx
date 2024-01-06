import { APP_NAME, PUBLIC_URL } from '@/config';
import { FunctionComponent, PropsWithChildren, Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { OPEN_GRAPH_DEFAULT } from '@/app/config';
import { FONTS } from '@/layout/fonts';
import { Analytics, Footer, Header, MobileOrDesktop } from '@/layout/components';
// import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  title: APP_NAME, // 'Keyboard LEDs',
  description:
    'Free software shows state of Num, Caps and Scroll locks. Very useful for notebooks and keyboards that have no hardware LED indicators.',
  manifest: '/site.webmanifest',
  openGraph: OPEN_GRAPH_DEFAULT,
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

const StyledLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
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
  );
};

export default StyledLayout;
