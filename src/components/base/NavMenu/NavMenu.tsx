'use client';

import { useEffect, useCallback } from 'react';

import { HomeNav } from '../HomeNav';
import { ServicesNav } from '../ServicesNav';

import { Props } from './types';

export const NavMenu = ({ setIsMenuOpen }: Props) => {
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu]);

  return (
    <div className="fixed bottom-0 left-0 z-30 h-full w-full overflow-y-auto bg-[#ffffff] pb-[56px] pt-[108px] md:pb-[158px] md:pt-[184px] xl:pb-[221px] xl:pt-[221px]">
      <div className="overflow container flex flex-col items-center md:flex-row md:items-start md:justify-center md:gap-[192px] xl:gap-[352px]">
        <HomeNav closeMenu={closeMenu} />
        <ServicesNav closeMenu={closeMenu} />
      </div>
    </div>
  );
};
