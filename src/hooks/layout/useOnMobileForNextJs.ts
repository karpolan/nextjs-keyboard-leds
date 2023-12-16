import { useEffect, useState } from 'react';
import { SERVER_SIDE_MOBILE_FIRST } from '@/layout/config';
import useOnMobileByMediaQuery from './useOnMobileByMediaQuery';

/**
 * Hook to detect onMobile vs. onDesktop with Next.js workaround
 * @returns {boolean} true when on onMobile, false when on onDesktop
 */
function useOnMobileForNextJs() {
  const onMobile = useOnMobileByMediaQuery();
  const [onMobileDelayed, setOnMobileDelayed] = useState(SERVER_SIDE_MOBILE_FIRST);

  useEffect(() => {
    setOnMobileDelayed(onMobile); // Next.js don't allow to use useOnMobileXxx() directly, so we need to use this workaround
  }, [onMobile]);

  return onMobileDelayed;
}

export default useOnMobileForNextJs;
