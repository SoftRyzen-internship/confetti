import { SectionTitle } from '@/components/ui';
import { GallerySectionProps } from './types';
import { GalleryView } from '@/components/base/GalleryView';

export const Gallery: React.FC<GallerySectionProps> = ({
  title,
  labelledbyId,
}) => {
  return (
    <section
      aria-labelledby={labelledbyId}
      className="pt-12 md:pt-16 xl:pt-[124px]"
    >
      <div className="container flex flex-col gap-9 md:gap-12">
        <SectionTitle ariaLabelledbyId={labelledbyId} accentColor center>
          {title}
        </SectionTitle>

        <GalleryView />
      </div>
    </section>
  );
};
