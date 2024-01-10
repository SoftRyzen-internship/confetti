import Image from 'next/image';
import Link from 'next/link';

import { Props } from './types';

export const ServiceCard = ({ caption, path, alt, slug }: Props) => {
  return (
    <Link href={`/${slug}`} className="overflow-hidden">
      <Image
        className="hover:scale-[1.1]"
        alt={alt}
        src={path}
        loading="lazy"
        placeholder="blur"
        blurDataURL={path}
        width="642.9"
        height="504"
      />

      <p>{caption}</p>
    </Link>
  );
};
