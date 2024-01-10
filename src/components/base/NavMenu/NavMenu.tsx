'use client';

import { useEffect, useCallback } from 'react';

import { HomeNav } from '../HomeNav';
import { ServicesNav } from '../ServicesNav';

import { Props } from './types';

export const NavMenu: React.FC<Props> = ({ setIsMenuOpen }) => {
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
    <div className="fixed left-0 top-0 z-30 h-full w-full bg-color-secondary pb-[56px] pt-[108px] md:pb-[158px] md:pt-[184px] xl:pb-[221px] xl:pt-[221px]">
      <div className="container flex h-full flex-col items-center overflow-hidden overflow-y-scroll md:flex-row md:items-start md:justify-center md:gap-[192px] xl:gap-[352px]">
        <HomeNav closeMenu={closeMenu} />
        <ServicesNav closeMenu={closeMenu} />
      </div>
    </div>
  );
};
