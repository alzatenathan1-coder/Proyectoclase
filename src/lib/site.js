export const siteName = 'Comidas del Mundo';
export const siteUrl = 'https://comidas-del-mundo.example';

export const siteRoutes = [
  {
    path: '/',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    path: '/paises',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    path: '/paises/venezuela',
    priority: 0.85,
    changeFrequency: 'monthly',
  },
  {
    path: '/paises/rumania',
    priority: 0.85,
    changeFrequency: 'monthly',
  },
  {
    path: '/paises/mali',
    priority: 0.85,
    changeFrequency: 'monthly',
  },
];
