import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Keep our AI logic private from crawlers
    },
    sitemap: 'https://findmycruise.ie/sitemap.xml',
  };
}
