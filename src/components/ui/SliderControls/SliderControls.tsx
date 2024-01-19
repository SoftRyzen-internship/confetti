'use client';

import common from '@/data/common.json';

import NextIcon from '~/icons/arrow-right.svg';

import { SliderControlsProps } from './types';

export const SliderControls: React.FC<SliderControlsProps> = ({ section }) => {
  const {
    prevBtnArialabel,
    nextBtnArialabel,
    prevBtnArialabelIcon,
    nextBtnArialabelIcon,
  } = common.components.sliderControls;

  return (
    <div className="hidden gap-x-6 md:flex">
      <button
        aria-label={prevBtnArialabel}
        className={`button-prev-${section} flex h-14 w-14 items-center justify-center rounded-full border border-solid border-color-ctrl-btn-border bg-color-secondary transition-all hover:border-transparent hover:bg-color-bg-primary focus-visible:border-transparent focus-visible:bg-color-bg-primary`}
        type="button"
      >
        <NextIcon
          className="rotate-180"
          aria-label={prevBtnArialabelIcon}
          width={24}
          height={24}
        />
      </button>

      <button
        aria-label={nextBtnArialabel}
        className={`button-next-${section} flex h-14 w-14 items-center justify-center rounded-full border border-solid border-color-ctrl-btn-border bg-color-secondary transition-all hover:border-transparent hover:bg-color-bg-primary focus-visible:border-transparent focus-visible:bg-color-bg-primary`}
        type="button"
      >
        <NextIcon aria-label={nextBtnArialabelIcon} width={24} height={24} />
      </button>
    </div>
  );
};
