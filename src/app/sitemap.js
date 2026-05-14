import { siteRoutes, siteUrl } from '@/lib/site';

const lastModified = new Date('2026-05-14');

export default function sitemap() {
  return siteRoutes.map((route) => ({
    url: `${siteUrl}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
