// import { CardsKreatywny } from '@/components/base';
// import { SliderTest } from '@/components/base/SliderTest';
// import { ContactLinks } from '@/components/ui';

import { Gallery } from '@/sections';

import gallery from '@/data/gallery.json';

export default async function Home() {
  return (
    <>
      <Gallery title={gallery.titleHomePage} />

      {/* <div className="container mt-10">
        <ContactLinks
          location={'header'}
          className={'smOnly:hidden text-xl tracking-[-0.2px]'}
        />
      </div> */}

      {/* <div className="bg-color-bg-primary container">
        <CardsKreatywny />
        <ContactLinks location={'contacts'} className={'xl:items-start'} />
      </div> */}

      {/* <div className="container my-[50px]">
        <SliderTest />
      </div> */}
    </>
  );
}
