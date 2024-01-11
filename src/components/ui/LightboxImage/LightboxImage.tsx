import Image from 'next/image';
import {
  RenderSlideProps,
  SlideImage,
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from 'yet-another-react-lightbox';

type Props = RenderSlideProps<SlideImage>;

export const LightboxImage: React.FC<Props> = ({ slide, rect }) => {
  const { imageFit } = useLightboxProps().carousel;
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  const width =
    !cover && slide.width && slide.height
      ? Math.round(
          Math.min(rect.width, (rect.height / slide.height) * slide.width),
        )
      : rect.width;

  const height =
    !cover && slide.width && slide.height
      ? Math.round(
          Math.min(rect.height, (rect.width / slide.width) * slide.height),
        )
      : rect.height;

  return (
    <div style={{ position: 'relative', width, height }}>
      <Image
        fill
        alt={slide.alt as string}
        src={slide.src}
        loading="eager"
        draggable={false}
        placeholder="blur"
        blurDataURL={'/images/balloons.webp'}
        style={{ objectFit: cover ? 'cover' : 'contain' }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
};
