import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'PerplexityBot', 'anthropic-ai', 'cohere-ai', 'Meta-ExternalAgent'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.findmycruise.ie/sitemap.xml',
  };
}
