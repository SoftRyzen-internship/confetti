import data from '@/data/common.json';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { navLinks } = data.layout.navigation.services;

  const services = navLinks.map(({ slug }) => slug);

  const homeUrl = {
    url: baseUrl,
    lastModified: new Date(),
  };

  const serviceUrls = services.map(slug => {
    return {
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
    };
  });

  return [homeUrl, ...serviceUrls];
}
