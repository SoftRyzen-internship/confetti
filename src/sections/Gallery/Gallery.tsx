import { SectionTitle } from '@/components/ui';
import { GalleryView } from '@/components/base';

import { GallerySectionProps } from './types';

export const Gallery: React.FC<GallerySectionProps> = ({ title }) => {
  return (
    <section id="gallery" className="section">
      <div className="container flex flex-col gap-9 md:gap-12">
        <SectionTitle accentColor center>
          {title}
        </SectionTitle>

        <GalleryView />
      </div>
    </section>
  );
};
