import Image from 'next/image';
import Link from 'next/link';

import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ label, location }) => {
  const imageClassName =
    location === 'header'
      ? 'w-[156px] h-[24px] md:w-[209px] md:h-[32px] xl:w-[236px] xl:h-[36px]'
      : 'w-[171px] h-[24px] md:w-[204px] md:h-[28px] xl:w-[206px] xl:h-[28px]';

  return (
    <Link href="/" className="inline-block" aria-label={label}>
      <Image
        src="/images/logo.webp"
        width={236}
        height={36}
        alt={label}
        priority
        className={imageClassName}
      />
    </Link>
  );
};
