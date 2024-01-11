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

  // Оставил, стили для варианта, где скорллится только услуги, чтобы если что, вернуть.
  // Переделываю (на вариант, который я тебе присылал в телеге) потому, что такой вариант выглядит некоректно на мобилбилках в горизонтальном режиме
  return (
    <div
      // className="fixed left-0 top-0 z-30 h-full w-full items-center bg-color-secondary font-manrope md:flex md:justify-center smOnly:pt-[108px]"
      className="fixed left-0 top-0 z-30 h-full w-full items-center bg-color-secondary pb-[20px] pt-[108px] font-manrope md:flex md:justify-center md:pb-[32px] md:pt-[184px] xl:pt-[221px]"
    >
      <div
        // className="flex flex-col gap-6 md:flex-row md:items-start md:justify-center md:gap-[190px] xl:gap-[352px] smOnly:h-full"
        className="flex h-full flex-col gap-6 overflow-hidden overflow-y-auto md:flex-row md:items-start md:justify-center md:gap-[190px] xl:gap-[352px]"
      >
        <HomeNav closeMenu={closeMenu} />
        <ServicesNav closeMenu={closeMenu} />
      </div>
    </div>
  );
};
