import NextLink from 'next/link';

import data from '@/data/common.json';

import { Props } from './types';

const {
  servicesTitle,
  services: {
    babyShower,
    baptism,
    birthday,
    heliumBalloons,
    valentine,
    companyParty,
    WeddingReception,
  },
} = data.layout.navMenu;

export const ServicesNav = ({ closeMenu }: Props) => {
  return (
    <div className="mt-6 md:mt-0">
      <p className="text-center text-2xl/normal font-medium -tracking-[0.01em] md:text-start md:text-4xl/normal">
        {servicesTitle}
      </p>

      <div className="mt-4 flex flex-col items-center gap-3 md:mt-6 md:items-start md:gap-4">
        <NextLink className="serviceNavLink" onClick={closeMenu} href="">
          {babyShower}
        </NextLink>
        <NextLink className="serviceNavLink" onClick={closeMenu} href="">
          {baptism}
        </NextLink>
        <NextLink className="serviceNavLink" onClick={closeMenu} href="">
          {birthday}
        </NextLink>
        <NextLink className="serviceNavLink" onClick={closeMenu} href="">
          {heliumBalloons}
        </NextLink>
        <NextLink className="serviceNavLink" onClick={closeMenu} href="">
          {valentine}
        </NextLink>
        <NextLink className="serviceNavLink" onClick={closeMenu} href="">
          {companyParty}
        </NextLink>
        <NextLink className="serviceNavLink" onClick={closeMenu} href="">
          {WeddingReception}
        </NextLink>
      </div>
    </div>
  );
};
