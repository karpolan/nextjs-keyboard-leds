'use client';
import { useModifyBodyClassOnMobile } from '@/hooks/layout';

/**
 * Injects a hook to change the body class depending on screen size: onMobile vs. onDesktop
 * @injects MobileOrDesktop
 */
const MobileOrDesktop = () => {
  useModifyBodyClassOnMobile();
  return null;
};

export default MobileOrDesktop;
