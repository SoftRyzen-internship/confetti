import { Metadata } from 'next';

import { Contacts, Gallery, ServicesHero } from '@/sections';

import meta from '@/data/meta.json';
import gallery from '@/data/gallery.json';
import common from '@/data/common.json';
import hero from '@/data/service-hero.json';

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
    alternates: {
      canonical: `${baseUrl}/${slug}`,
    },
    openGraph: { ...openGraph, url: `${baseUrl}/${slug}` },
  };
}

export async function generateStaticParams() {
  // todo: Will be updated as json data structure develops...
  const { services } = common.layout.navigation;
  const staticParams = services.navLinks.map(({ slug }) => {
    return { slug };
  });

  return staticParams;
}

export default async function ServicePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const service = hero.find(obj => obj.slug === slug);

  return (
    <>
      {service && <ServicesHero {...service} />}
      <Gallery title={gallery.titleServicePage} />
      <Contacts />
    </>
  );
}
