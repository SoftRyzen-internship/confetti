'use client';

import { useState } from 'react';

import { NavMenu } from '@/components/base';

import data from '@/data/common.json';

import Cross from '~/icons/cross.svg';
import Menu from '~/icons/menu.svg';

const {
  menuBtn: { close, open, ariaLabel },
} = data.layout;

export const MenuBtn: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const label = isMenuOpen ? close : open;

  return (
    <>
      <button
        aria-label={ariaLabel}
        onClick={() => setIsMenuOpen(prev => !prev)}
        className="relative z-50 inline-flex items-center gap-1 font-manrope text-[16px] font-semibold uppercase leading-[0.9] tracking-[2.08px] text-color-text-extra transition-all hover:text-color-accent-primary focus:text-color-accent-primary md:gap-4 md:text-[20px] md:tracking-[2.6px] xl:text-[22px] xl:tracking-[2.86px]"
        type="button"
      >
        {isMenuOpen ? (
          <Cross className="h-6 w-6 fill-color-primary md:h-7 md:w-7 xl:h-8 xl:w-8" />
        ) : (
          <Menu
            className="h-6 w-6 fill-color-primary md:h-7 md:w-7 xl:h-8 xl:w-8"
            aria-label={label}
          />
        )}

        {label}
      </button>

      {isMenuOpen && <NavMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};
