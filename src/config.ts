import { envRequired, getCurrentEnvironment } from '@/utils/environment';

export const IS_DEBUG = process.env.NEXT_PUBLIC_DEBUG === 'true'; // Enables logging, etc.

export const IS_PRODUCTION = getCurrentEnvironment() === 'production'; // Enables analytics, etc.
// export const IS_PRODUCTION =  process.env.NEXT_PUBLIC_ENV === 'production'; // Enables analytics, etc.

export const PUBLIC_URL = envRequired(process.env.NEXT_PUBLIC_PUBLIC_URL);

export const APP_NAME = 'Keyboard LEDs';
export const APP_SHORT_NAME = 'KeyLeds';
export const APP_VERSION = '2.7.1.59';
export const APP_VER = '2.7';
