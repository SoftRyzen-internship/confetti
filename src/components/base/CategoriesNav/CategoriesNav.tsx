import NextLink from 'next/link';
import { Link } from 'react-scroll';

import { linkSettings } from '@/utils/helpers';

import data from '@/data/common.json';

import { Props } from './types';

const {
  categories: { main, aboutUs, gallery, reviews, contacts },
  categoryPaths,
} = data.layout.navMenu;

export const CategoriesNav = ({ closeMenu }: Props) => {
  return (
    <div className="flex flex-col items-center gap-6 md:items-start md:gap-8">
      <NextLink onClick={closeMenu} className="categoryNavLink" href="/">
        {main}
      </NextLink>
      <Link
        onClick={closeMenu}
        className="categoryNavLink"
        to={categoryPaths.aboutUs}
        {...linkSettings}
      >
        {aboutUs}
      </Link>
      <Link
        onClick={closeMenu}
        className="categoryNavLink"
        to={categoryPaths.gallery}
        {...linkSettings}
      >
        {gallery}
      </Link>
      <Link
        onClick={closeMenu}
        className="categoryNavLink"
        to={categoryPaths.reviews}
        {...linkSettings}
      >
        {reviews}
      </Link>
      <Link
        onClick={closeMenu}
        className="categoryNavLink"
        to={categoryPaths.contacts}
        {...linkSettings}
      >
        {contacts}
      </Link>
    </div>
  );
};
