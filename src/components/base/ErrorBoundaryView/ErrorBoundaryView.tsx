// Global jsx component to render complex page markup as error boundary view (404 or server-error)

import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

import { Footer, Header } from '@/layout';
import { ErrorCatcher } from '@/sections';

import '@/app/globals.css';

import { ErrorBoundaryViewProps } from './types';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const gilroy = localFont({
  src: [
    {
      path: '../../../../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/Gilroy-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-gilroy',
});

export const ErrorBoundaryView: React.FC<ErrorBoundaryViewProps> = ({
  error,
}) => {
  return (
    <html lang="pl">
      <body
        className={`${manrope.variable} ${gilroy.className} flex min-h-screen flex-col`}
      >
        <Header />
        <main className="flex grow flex-col">
          <ErrorCatcher error={error} />
        </main>
        <Footer />
      </body>
    </html>
  );
};
