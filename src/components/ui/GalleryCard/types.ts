import { GalleryImage } from '@/types';

export type GalleryCardProps = {
  card: GalleryImage;
  onClick?: () => void;
  className?: string;
};
