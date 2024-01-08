'use client';

import { useSwiper } from 'swiper/react';

import PrevIcon from '~/icons/SliderControls/arrow-left.svg';
import NextIcon from '~/icons/SliderControls/arrow-right.svg';

import sliderControlsData from '@/data/sliderControlsData.json';

export const SliderControls = () => {
  const swiper = useSwiper();

  const { prevBtnArialabel, nextBtnArialabel } = sliderControlsData;

  return (
    <div className="hidden gap-x-6 md:flex">
      <button
        aria-label={prevBtnArialabel}
        className="flex h-14 w-14 items-center 
        justify-center rounded-full border border-solid border-color-ctrl-btn-border bg-color-ctrl-btn transition-all hover:border-transparent hover:bg-color-ctrl-btn-accent
         focus:border-transparent focus:bg-color-ctrl-btn-accent"
        onClick={() => swiper.slidePrev}
        type="button"
      >
        <PrevIcon width={24} height={24} />
      </button>

      <button
        aria-label={nextBtnArialabel}
        className="flex h-14 w-14 items-center 
        justify-center rounded-full border border-solid border-color-ctrl-btn-border bg-color-ctrl-btn transition-all hover:border-transparent hover:bg-color-ctrl-btn-accent
         focus:border-transparent focus:bg-color-ctrl-btn-accent"
        onClick={() => swiper.slideNext}
        type="button"
      >
        <NextIcon width={24} height={24} />
      </button>
    </div>
  );
};
