import { Metadata } from 'next';

import { ErrorBoundaryView } from '@/components/base';

import meta from '@/data/meta.json';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { title, description, manifest, keywords, twitter, openGraph, icons } =
    meta;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    manifest,
    keywords,
    twitter,
    openGraph: { ...openGraph, url: `${baseUrl}` },
    icons,
  };
}

const NotFound = async () => {
  return <ErrorBoundaryView error="not-found" />;
};

export default NotFound;
