'use client';

import { useEffect, useCallback } from 'react';

import { HomeNav, ServicesNav } from '@/components/base';

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
    <div className="fixed left-0 top-0 z-30 h-full w-full items-center bg-color-secondary font-manrope md:flex md:justify-center smOnly:pt-[108px]">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-center md:gap-[190px] xl:gap-[352px] smOnly:h-full">
        <HomeNav closeMenu={closeMenu} />
        <ServicesNav closeMenu={closeMenu} />
      </div>
    </div>
  );
};
