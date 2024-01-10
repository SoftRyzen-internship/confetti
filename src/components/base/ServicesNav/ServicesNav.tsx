import NextLink from 'next/link';

import data from '@/data/common.json';

import { Props } from './types';

const {
  services: { servicesTitle, navLinks },
} = data.layout.navigation;

export const ServicesNav = ({ closeMenu }: Props) => {
  return (
    <div className="mt-6 md:mt-0">
      <p className="text-center text-2xl/normal font-medium -tracking-[0.01em] md:text-start md:text-4xl/normal">
        {servicesTitle}
      </p>

      <ul className="mt-4 flex flex-col items-center gap-3 md:mt-6 md:items-start md:gap-4">
        {navLinks.map(({ slug, label }) => (
          <li key={slug}>
            <NextLink
              className="serviceNavLink"
              onClick={closeMenu}
              href={`/${slug}`}
            >
              {label}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
