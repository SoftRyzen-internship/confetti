import Image from 'next/image';

import { GalleryCardProps } from './types';
import { getBase64, shimmer } from '@/utils/helpers';

export const GalleryCard: React.FC<GalleryCardProps> = ({
  card: image,
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div
      className={`h-[320px] w-[320px] overflow-hidden rounded-lg md:h-[224px] md:w-[224px] md:rounded-3xl xl:h-[388px] xl:w-[388px] ${className}`}
      onClick={handleClick}
    >
      <Image
        className="h-full w-full object-cover object-center"
        width={388}
        height={388}
        alt={image.alt}
        src={image.pathCrop || image.path}
        loading="lazy"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${getBase64(
          shimmer(388, 388),
        )}`}
      />
    </div>
  );
};
