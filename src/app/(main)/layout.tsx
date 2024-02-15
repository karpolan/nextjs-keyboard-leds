import { APP_NAME, PUBLIC_URL } from '@/config';
import { FunctionComponent, PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import { OPEN_GRAPH_DEFAULT } from '@/app/config';
import { FONTS } from '@/layout/fonts';
import { Advertising, Analytics, Footer, Header, MobileOrDesktop } from '@/layout/components';
import './styled.css';

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

/**
 * Layout for (main) pages, renders head and body tags
 * @layout StyledLayout
 */
const StyledLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <head>
        <Analytics />
        <Advertising />
      </head>

      <body className={FONTS.default.className}>
        <Header />
        <div className="content">{children}</div>
        <Footer />

        <MobileOrDesktop />
      </body>
    </>
  );
};

export default StyledLayout;
