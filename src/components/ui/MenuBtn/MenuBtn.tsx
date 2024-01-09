'use client';

import { useState } from 'react';

import { NavMenu } from '@/components/base/NavMenu';

import data from '@/data/common.json';

import Cross from '~/icons/cross.svg';
import Menu from '~/icons/menu.svg';

const {
  toggleNavMenuBtn: { close, open },
} = data.layout;

export const MenuBtn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(prev => !prev)}
        // В ДАЛЬНЕЙШЕМ, СВОЙСТВА Z-INDEX И POSITION, БУДУТ УДАЛЕНЫ И УСТАНОВЛЕНЫ ДЛЯ NAVBAR
        className="menuBtn hover:text-orange-800"
        type="button"
      >
        {isMenuOpen ? (
          <Cross className="menuBtnIcon" />
        ) : (
          <Menu className="menuBtnIcon" />
        )}

        {isMenuOpen ? close : open}
      </button>

      {isMenuOpen && <NavMenu setIsMenuOpen={setIsMenuOpen} />}
    </>
  );
};
