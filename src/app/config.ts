import { PUBLIC_URL } from '../utils';

export const HEADER_HEIGHT_MOBILE = 48; // '3rem' - NOTE: Synch with styles used in current Layout
export const HEADER_HEIGHT_DESKTOP = 90; // '5.625rem' - NOTE: Synch with styles used in current Layout

export const OPEN_GRAPH_DEFAULT = {
  url: PUBLIC_URL,
  siteName: 'Keyboard LEDs Software',
  title: 'Keyboard LEDs',
  description: 'Free Keyboard LEDs software shows state of Caps Lock, Num Lock, and Scroll locks',
  images: [
    {
      url: `${PUBLIC_URL}/img/social/icon-256x256.png`,
      width: 256,
      height: 256,
    },
    {
      url: `${PUBLIC_URL}/img/social/screenshot-400x600.png`,
      width: 400,
      height: 600,
    },
  ],
};
