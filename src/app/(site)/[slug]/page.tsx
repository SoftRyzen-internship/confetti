import { Gallery } from '@/sections';

import gallery from '@/data/gallery.json';

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
      <section className="min-h-[300px] bg-slate-50 pt-[175px] md:pt-[264px] xl:pt-[280px] ">
        Hero
      </section>

      <Gallery title={gallery.titleServicePage} />
    </>
  );
}
