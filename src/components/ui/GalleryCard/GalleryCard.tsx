import Image from 'next/image';

import { GalleryCardProps } from './types';

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
        src={image.path}
        loading="lazy"
        placeholder="blur"
        blurDataURL={image.path}
      />
    </div>
  );
};
