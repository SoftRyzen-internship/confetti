// todo: Temporary using gallery json data...
import gallery from '@/data/gallery.json';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const services = gallery.serviceImages.map(({ slug }) => slug);

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
