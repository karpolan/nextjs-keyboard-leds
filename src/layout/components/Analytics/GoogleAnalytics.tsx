'use client';
import { useLayoutEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { GA_ID, gaPageView } from '@/lib/ga';

/**
 * Adds supporting scripts for Google Analytics, also tracks each page view.
 * @injector GoogleAnalytics
 */
const GoogleAnalytics = () => {
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

  const strategy = 'afterInteractive';
  // const strategy = 'lazyOnload';

  return (
    <>
      <Script async strategy={strategy} src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script
        id="ga-script"
        strategy={strategy}
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
