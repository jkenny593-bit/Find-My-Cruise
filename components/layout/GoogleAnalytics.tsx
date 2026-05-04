'use client';

import Script from 'next/script';

/**
 * Google Analytics 4 tracking component.
 * Only renders and activates if NEXT_PUBLIC_GA_ID is present.
 */
const GoogleAnalytics = ({ gaId }: { gaId: string }) => {
  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;

/**
 * Utility function to track custom events (like chat starts or clicks)
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  } else {
    // Log to console in dev mode if tracking isn't live yet
    if (process.env.NODE_ENV === 'development') {
      console.log(`[GA Placeholder] Event: ${eventName}`, params);
    }
  }
};
