'use client';

import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { GalleryCard, LightboxImage, Slider } from '@/components/ui';

import { getPlaceholders } from '@/utils/helpers';
import { useFetch } from '@/utils/hooks';

import common from '@/data/common.json';
import gallery from '@/data/gallery.json';

import { GalleryDataType } from '@/types';
import { GalleryViewProps } from './types';

export const GalleryView: React.FC<GalleryViewProps> = ({ className = '' }) => {
  const [index, setIndex] = useState(-1);

  const pathname = usePathname();
  const { slug } = useParams();

  const isHomePage = pathname === '/';

  const { data } = useFetch('gallery') as { data: GalleryDataType[] };

  const staticImages =
    gallery.serviceImages.find(obj => obj.slug === slug)?.images || [];

  const placeholders = getPlaceholders({
    qty: 9,
    obj: gallery.galleryPlaceholder,
  });

  const dynamicImages = data?.length > 0 ? data[0].image : placeholders;

  const images = isHomePage ? dynamicImages : staticImages;

  const { closeBtnArialabel, nextBtnArialabel, prevBtnArialabel } =
    common.components.sliderControls;

  const listClassName = isHomePage ? 'hidden md:flex' : 'flex flex-col gap-6';

  return (
    <>
      {isHomePage && (
        <div className="md:hidden">
          <Slider
            component={GalleryCard}
            section="gallery"
            data={images}
            className="gallery-slider"
          />
        </div>
      )}

      <ul
        className={`${listClassName} md:flex-row md:flex-wrap md:gap-4 xl:gap-[26px] smOnly:self-center ${className}`}
      >
        {images.map((img, index) => {
          return (
            <li key={index} className="gallery-item flex">
              <GalleryCard
                card={img}
                grid
                onClick={() => setIndex(index)}
                className={`cursor-pointer ${
                  isHomePage ? '' : 'smOnly:pointer-events-none'
                }`}
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
        on={{
          entered: () => {
            document.body.style.overflow = 'hidden';
          },
          exited: () => {
            document.body.style.overflow = 'unset';
          },
        }}
      />
    </>
  );
};
