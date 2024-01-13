import Script from 'next/script';
import { GA_ID } from '@/lib/ga';
import { SCRIPT_STRATEGY } from '@/layout/config';

/**
 * Adds supporting scripts for Google Analytics, also tracks each page view.
 * @injector GoogleAnalytics
 */
const GoogleAnalytics = () => {
  return (
    <>
      <Script
        id="google-tag-manager-script"
        async
        strategy={SCRIPT_STRATEGY}
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics-script"
        strategy={SCRIPT_STRATEGY}
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
