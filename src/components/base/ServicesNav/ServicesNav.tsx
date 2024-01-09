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
    weddingReception,
  },
  servicePaths,
} = data.layout.navMenu;

export const ServicesNav = ({ closeMenu }: Props) => {
  return (
    <div className="mt-6 md:mt-0">
      <p className="text-center text-2xl/normal font-medium -tracking-[0.01em] md:text-start md:text-4xl/normal">
        {servicesTitle}
      </p>

      <div className="mt-4 flex flex-col items-center gap-3 md:mt-6 md:items-start md:gap-4">
        <NextLink
          className="serviceNavLink"
          onClick={closeMenu}
          href={servicePaths.babyShower}
        >
          {babyShower}
        </NextLink>
        <NextLink
          className="serviceNavLink"
          onClick={closeMenu}
          href={servicePaths.baptism}
        >
          {baptism}
        </NextLink>
        <NextLink
          className="serviceNavLink"
          onClick={closeMenu}
          href={servicePaths.birthday}
        >
          {birthday}
        </NextLink>
        <NextLink
          className="serviceNavLink"
          onClick={closeMenu}
          href={servicePaths.heliumBalloons}
        >
          {heliumBalloons}
        </NextLink>
        <NextLink
          className="serviceNavLink"
          onClick={closeMenu}
          href={servicePaths.valentine}
        >
          {valentine}
        </NextLink>
        <NextLink
          className="serviceNavLink"
          onClick={closeMenu}
          href={servicePaths.companyParty}
        >
          {companyParty}
        </NextLink>
        <NextLink
          className="serviceNavLink"
          onClick={closeMenu}
          href={servicePaths.weddingReception}
        >
          {weddingReception}
        </NextLink>
      </div>
    </div>
  );
};
