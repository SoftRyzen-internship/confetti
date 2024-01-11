import NextLink from 'next/link';

import data from '@/data/common.json';

import { Props } from './types';

const {
  services: { servicesTitle, navLinks },
} = data.layout.navigation;

export const ServicesNav: React.FC<Props> = ({ closeMenu }) => {
  return (
    <div className="flex grow flex-col gap-4 overflow-y-scroll smOnly:pb-9">
      <p className="text-center text-2xl/normal font-medium -tracking-[0.01em] md:text-start md:text-4xl/normal">
        {servicesTitle}
      </p>

      <ul className="flex flex-col items-center gap-3 overflow-scroll md:items-start md:gap-4">
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
