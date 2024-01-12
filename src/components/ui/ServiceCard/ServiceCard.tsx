import Image from 'next/image';
import Link from 'next/link';

import { Props } from './types';

export const ServiceCard: React.FC<Props> = ({ card }) => {
  const { slug, alt, path, caption } = card;

  return (
    <Link
      href={`/${slug}`}
      className="group flex w-fit flex-col items-center gap-4 rounded-tl-3xl rounded-tr-3xl transition-all md:items-start xl:gap-6"
    >
      <div className="h-[280px] w-[320px] overflow-hidden rounded-3xl md:h-[304px] md:w-[346px] xl:h-[374px] xl:w-[389px]">
        <Image
          className="h-full w-full object-cover object-center transition-all group-hover:scale-[1.1]"
          alt={alt}
          src={path}
          placeholder="blur"
          blurDataURL={path}
          width="389"
          height="374"
        />
      </div>

      <p className="font-gilroy text-[20px]/[1.2] font-semibold -tracking-[0.2px] text-color-primary transition-all group-hover:text-color-accent-primary md:text-[28px] xl:text-[32px]">
        {caption}
      </p>
    </Link>
  );
};
