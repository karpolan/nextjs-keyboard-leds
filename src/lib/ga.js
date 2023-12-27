export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const gaPageView = (url) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', GA_ID, {
      page_path: url,
    });
  } else {
    console.warn('GA was not installed, but gaPageView() was called, url:', url);
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const gaEvent = ({ action, category, label, value }) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.warn('GA was not installed, but gaEvent() was called:', action, category, label, value);
  }
};
