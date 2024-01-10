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

  return (
    <>
      <button
        aria-label={ariaLabel}
        onClick={() => setIsMenuOpen(prev => !prev)}
        className="relative z-40 flex h-6 items-center gap-1 font-gilroy font-semibold uppercase leading-[5.6] tracking-[0.13em] text-color-text-extra transition-all hover:text-color-accent-primary focus:text-color-accent-primary md:h-7 md:gap-4 md:text-[20px] xl:h-8 xl:text-[22px]"
        type="button"
      >
        {isMenuOpen ? (
          <Cross className="h-6 w-6 fill-color-primary md:h-7 md:w-7 xl:h-8 xl:w-8" />
        ) : (
          <Menu className="h-6 w-6 fill-color-primary md:h-7 md:w-7 xl:h-8 xl:w-8" />
        )}

        {isMenuOpen ? close : open}
      </button>

      {isMenuOpen && <NavMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};
