import { Gallery, ServicesHero } from '@/sections';

import gallery from '@/data/gallery.json';
import hero from '@/data/services-hero.json';

export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export async function generateStaticParams() {
  // todo: Will be updated as json data structure develops...
  const staticParams = gallery.serviceImages.map(({ slug }) => {
    return { slug };
  });

  return staticParams;
}

export default async function ServicePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // const images = gallery.serviceImages.find(obj => obj.slug === slug);
  console.log('Current page: ', slug);

  return (
    <>
      <ServicesHero {...hero['baby-shower']} />

      <Gallery title={gallery.titleServicePage} />
    </>
  );
}
