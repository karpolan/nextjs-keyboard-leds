import { APP_NAME, PUBLIC_URL } from '@/config';

export const OPEN_GRAPH_DEFAULT = {
  url: PUBLIC_URL,
  siteName: `${APP_NAME} Software`,
  title: APP_NAME,
  description: `Free ${APP_NAME} software shows state of Caps Lock, Num Lock, and Scroll locks'`,
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
