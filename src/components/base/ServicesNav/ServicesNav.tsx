import NextLink from 'next/link';

import data from '@/data/common.json';

import { Props } from './types';

const {
  services: { servicesTitle, navLinks },
} = data.layout.navigation;

export const ServicesNav: React.FC<Props> = ({ closeMenu }) => {
  return (
    <div>
      <p className="mb-4 text-center text-2xl/normal font-medium -tracking-[0.01em] md:text-start md:text-4xl/normal">
        {servicesTitle}
      </p>

      <ul className="flex flex-col items-center gap-3 md:mt-6 md:items-start md:gap-4">
        {navLinks.map(({ slug, label }) => (
          <li key={slug}>
            <NextLink
              className="font-medium -tracking-[0.01em] transition-all hover:text-color-accent-primary focus:text-color-accent-primary md:text-2xl/normal"
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
