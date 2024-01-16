'use client';

import { MouseEvent } from 'react';

import { Props } from './types';

export const FooterLink: React.FC<Props> = ({ href, label }) => {
  return (
    <a
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.blur();
      }}
      className="font-manrope text-[16px] leading-[1.36] tracking-[-0.16px] text-color-primary transition-all hover:text-color-accent-primary focus:text-color-accent-primary"
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {label}
    </a>
  );
};
