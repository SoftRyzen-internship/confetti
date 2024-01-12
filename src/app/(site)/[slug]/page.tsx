import { Metadata } from 'next';

import { Gallery } from '@/sections';

import meta from '@/data/meta.json';
import gallery from '@/data/gallery.json';
import common from '@/data/common.json';

export const dynamicParams = false;
export const dynamic = 'error';
export const revalidate = false;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { title, openGraph } = meta;
  // todo: Will be updated as json data structure develops...
  const { services } = common.layout.navigation;
  const service = services.navLinks.find(obj => obj.slug === slug);

  return {
    title: `${title}. ${service?.label}`,
    openGraph: { ...openGraph, url: `${baseUrl}/${slug}` },
  };
}

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
