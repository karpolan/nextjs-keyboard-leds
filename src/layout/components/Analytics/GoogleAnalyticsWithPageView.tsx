'use client';
import { useLayoutEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gaPageView } from '@/lib/ga';

/**
 * Adds supporting scripts for Google Analytics, also tracks each page view.
 * @injector GoogleAnalyticsWithPageView
 */
const GoogleAnalyticsWithPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useLayoutEffect(() => {
    if (pathname) {
      gaPageView(pathname); // Track each page view with Google Analytics
    }
  }, [
    pathname,
    searchParams, // Also track all search params changes even when the page remain the same
  ]);

  return <GoogleAnalyticsWithPageView />;
};

export default GoogleAnalyticsWithPageView;
