export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function gtmPageView(url) {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  } else {
    console.warn('GTM was not installed, but gtmPageView() was called, url', url);
  }
}
