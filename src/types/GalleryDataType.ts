export type GalleryImage = {
  alt: string;
  path: string;
  pathCrop?: string;
};

export type GalleryDataType = {
  image: GalleryImage[];
};
