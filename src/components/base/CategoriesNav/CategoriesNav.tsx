import NextLink from 'next/link';
import { Link } from 'react-scroll';

import data from '@/data/common.json';

import { Props } from './types';

const {
  categories: { main, aboutUs, gallery, reviews, contacts },
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
        to="about"
        smooth={true}
        duration={300}
      >
        {aboutUs}
      </Link>
      <Link
        onClick={closeMenu}
        className="categoryNavLink"
        to="gallery"
        smooth={true}
        duration={300}
      >
        {gallery}
      </Link>
      <Link
        onClick={closeMenu}
        className="categoryNavLink"
        to="reviews"
        smooth={true}
        duration={300}
      >
        {reviews}
      </Link>
      <Link
        onClick={closeMenu}
        className="categoryNavLink"
        to="contacts"
        smooth={true}
        duration={300}
      >
        {contacts}
      </Link>
    </div>
  );
};
