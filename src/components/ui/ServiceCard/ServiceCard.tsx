import Image from 'next/image';
import Link from 'next/link';

import { Props } from './types';

export const ServiceCard: React.FC<Props> = card => {
  const { slug, alt, path, caption } = card;

  return (
    <Link
      href={`/${slug}`}
      className="flex w-fit flex-col items-center gap-4 rounded-tl-3xl rounded-tr-3xl md:items-start xl:gap-6"
    >
      <div className="h-[280px] overflow-hidden rounded-3xl md:h-[304px] xl:h-[374px]">
        <Image
          className="h-full w-auto transition-all hover:scale-[1.2]  md:h-[304px] xl:h-[374px]"
          alt={alt}
          src={path}
          loading="lazy"
          placeholder="blur"
          blurDataURL={path}
          width="389"
          height="374"
        />
      </div>

      <p className="font-manrope text-[20px]/[0.95] font-semibold -tracking-[0.2px] text-color-primary md:text-[28px] xl:text-[32px]">
        {caption}
      </p>
    </Link>
  );
};
