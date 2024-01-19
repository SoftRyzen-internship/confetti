'use client';

import { useEffect } from 'react';

import { motion } from 'framer-motion';

import { HomeNav, ServicesNav } from '@/components/base';

import {
  restoreTabFocusForOutMenuEls,
  disableTabFocusForOutMenuEls,
} from '@/utils/helpers';

import { Props } from './types';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const appear = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      delay: 0.4,
    },
  },
};

export const NavMenu: React.FC<Props> = ({ closeMenu }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    disableTabFocusForOutMenuEls();

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      restoreTabFocusForOutMenuEls();
    };
  }, [closeMenu]);

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed left-0 top-0 h-full w-full items-center bg-color-secondary pb-[20px] pt-[108px] font-manrope md:flex md:justify-center md:pb-[32px] md:pt-[184px] xl:pt-[221px]"
    >
      <motion.div
        variants={appear}
        initial="hidden"
        animate="visible"
        className="container flex h-full flex-col gap-6 overflow-hidden overflow-y-auto md:flex-row md:items-start md:justify-center md:gap-[190px] xl:gap-[352px] smOnly:relative "
      >
        <HomeNav closeMenu={closeMenu} />
        <ServicesNav closeMenu={closeMenu} />
      </motion.div>
    </motion.div>
  );
};
