import NextLink from 'next/link';
import { Link } from 'react-scroll';

import { linkSettings } from '@/utils/helpers';

import data from '@/data/common.json';

import { Props } from './types';

const {
  home: { mainPageLink, navLinks },
} = data.layout.navigation;

export const HomeNav: React.FC<Props> = ({ closeMenu }) => {
  return (
    <div className="mb-6 flex flex-col items-center gap-6 md:mb-0 md:items-start md:gap-8">
      <NextLink
        onClick={closeMenu}
        className="homeNavLink"
        href={mainPageLink.path}
      >
        {mainPageLink.label}
      </NextLink>

      <ul className="flex flex-col items-center gap-6 md:items-start md:gap-8">
        {navLinks.map(({ label, slug }) => (
          <li key={slug}>
            <Link
              onClick={closeMenu}
              className="homeNavLink"
              to={slug}
              {...linkSettings}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
