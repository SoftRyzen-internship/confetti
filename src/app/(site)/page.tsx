import { CardsKreatywny } from '@/components/base';
import { SliderTest } from '@/components/base/SliderTest';
import { ContactLinks } from '@/components/ui';

import { Gallery } from '@/sections';

import gallery from '@/data/gallery.json';

export default async function Home() {
  return (
    <>
      <Gallery
        title={gallery.titleHomePage}
        labelledbyId="gallery-section-labelledby"
      />

      <div className="container mt-10">
        <ContactLinks
          location={'header'}
          className={'text-xl tracking-[-0.2px] smOnly:hidden'}
        />
      </div>

      <div className="container bg-color-bg-primary">
        <CardsKreatywny />
        <ContactLinks location={'contacts'} className={'xl:items-start'} />
      </div>

      <div className="container my-[50px]">
        <SliderTest />
      </div>
    </>
  );
}
