'use client';

import { useEffect } from 'react';

import { HomeNav, ServicesNav } from '@/components/base';

import { Props } from './types';

export const NavMenu: React.FC<Props> = ({ toggleMenu }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') toggleMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleMenu]);

  return (
    <div className="fixed left-0 top-0 z-40 h-full w-full items-center bg-color-secondary pb-[20px] pt-[108px] font-manrope md:flex md:justify-center md:pb-[32px] md:pt-[184px] xl:pt-[221px]">
      <div className="flex h-full flex-col gap-6 overflow-hidden overflow-y-auto md:flex-row md:items-start md:justify-center md:gap-[190px] xl:gap-[352px]">
        <HomeNav toggleMenu={toggleMenu} />
        <ServicesNav toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};
