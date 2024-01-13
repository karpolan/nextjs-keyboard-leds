import { GA_ID } from '@/lib/ga';

/**
 * Adds supporting scripts for Google Analytics, also tracks each page view.
 * @injector GoogleAnalytics
 */
const GoogleAnalytics = () => {
  return (
    <>
      <script id="google-tag-manager-script" async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <script
        id="google-analytics-script"
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
