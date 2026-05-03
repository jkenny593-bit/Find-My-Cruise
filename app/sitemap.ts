import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://findmycruise.ie';
  
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
