import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

import { Footer, Header } from '@/layout';

import meta from '@/data/meta.json';

import '../globals.css';
import { Toaster } from 'react-hot-toast';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const gilroy = localFont({
  src: [
    {
      path: '../../../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Gilroy-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-gilroy',
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { title, description, manifest, keywords, twitter, openGraph, icons } =
    meta;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    manifest,
    keywords,
    twitter,
    openGraph: { ...openGraph, url: `${baseUrl}` },
    icons,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${manrope.variable} ${gilroy.className} flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex grow flex-col">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
