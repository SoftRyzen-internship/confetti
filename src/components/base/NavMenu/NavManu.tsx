'use client';

import { useEffect } from 'react';

import { CategoriesNav } from '../CategoriesNav';
import { ServicesNav } from '../ServicesNav';

import { Props } from './types';

export const NavMenu = ({ setIsMenuOpen }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed bottom-0 left-0 h-full w-full overflow-y-auto bg-[#ffffff] pb-[56px] pt-[108px] md:pb-[158px] md:pt-[184px] xl:pb-[221px] xl:pt-[221px]">
      <div className="overflow container flex flex-col items-center md:flex-row md:items-start md:justify-center md:gap-[192px] xl:gap-[352px]">
        <CategoriesNav closeMenu={closeMenu} />
        <ServicesNav closeMenu={closeMenu} />
      </div>
    </div>
  );
};
