import { GalleryImage } from '@/types';

export type GalleryCardProps = {
  card: GalleryImage;
  grid?: boolean;
  onClick?: () => void;
  className?: string;
};
