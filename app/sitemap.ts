import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.findmycruise.ie';
  
  // List of all static routes
  const routes = [
    '',
    '/find',
    '/about',
    '/blog',
    '/destinations/mediterranean',
    '/destinations/caribbean',
    '/destinations/fjords',
    '/destinations/family',
    '/destinations/river',
    '/cruise-lines/royal-caribbean',
    '/cruise-lines/pando',
    '/cruise-lines/msc',
    '/cruise-lines/celebrity',
    '/cruise-lines/princess',
    '/cruise-lines/ncl',
    '/blog/luxury-vs-budget-cruise-comparison',
    '/blog/best-family-cruises-2026',
    '/blog/cruise-embarkation-day-tips',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
