'use client';

import { useState } from 'react';

import { NavMenu } from '@/components/base';

import { Logo, MenuBtn, ContactLinks } from '@/components/ui';

export const HeaderContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="container">
      <div className="flex smOnly:justify-between">
        <MenuBtn isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <div className="flex items-center md:ml-auto md:gap-[68px] xl:gap-[312px]">
          <Logo
            location="header"
            onClick={closeMenu}
            className="relative z-50"
          />

          <ContactLinks
            location={'header'}
            className={'relative z-50 text-xl tracking-[-0.2px] smOnly:hidden'}
          />
        </div>
      </div>

      {isMenuOpen && <NavMenu closeMenu={closeMenu} />}
    </div>
  );
};
