'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { GalleryCard, LightboxImage, Slider } from '@/components/ui';

import { useFetch } from '@/utils/hooks';

import common from '@/data/common.json';

import { GalleryDataType } from '@/types';
import { GalleryViewProps } from './types';

export const GalleryView: React.FC<GalleryViewProps> = () => {
  const [index, setIndex] = useState(-1);

  const pathname = usePathname();

  const isHomePage = pathname === '/';
  console.log('isHomePage', isHomePage);

  const { closeBtnArialabel, nextBtnArialabel, prevBtnArialabel } =
    common.components.sliderControls;

  const { data } = useFetch('gallery') as { data: GalleryDataType[] };

  const images = data?.length > 0 ? data[0].image : [];

  const listClassName = isHomePage ? 'hidden md:flex' : 'flex flex-col gap-6';

  return (
    <>
      <div className="mt-10 md:hidden">
        <Slider
          component={GalleryCard}
          section="gallery"
          data={images}
          className="gallery-slider"
        />
      </div>

      <ul
        className={`${listClassName} md:flex-row md:flex-wrap md:gap-4 xl:gap-[26px]`}
      >
        {images.map((img, index) => {
          return (
            <li key={index}>
              <GalleryCard
                card={img}
                onClick={() => setIndex(index)}
                className="cursor-pointer"
              />
            </li>
          );
        })}
      </ul>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map(({ path, alt }) => ({ src: path, alt }))}
        render={{ slide: LightboxImage }}
        animation={{
          fade: 600,
          swipe: 600,
          navigation: 600,
        }}
        labels={{
          Next: `${nextBtnArialabel}`,
          Previous: `${prevBtnArialabel}`,
          Close: `${closeBtnArialabel}`,
        }}
      />
    </>
  );
};
