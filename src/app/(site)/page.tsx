// import { CardsKreatywny } from '@/components/base';
// import { SliderTest } from '@/components/base/SliderTest';
// import { ContactLinks } from '@/components/ui';

import { Gallery } from '@/sections';
import {
  ContactLinks,
  // Logo,
  // SliderControls,
  // SectionTitle,
} from '@/components/ui';

import gallery from '@/data/gallery.json';
import { ContactForm } from '@/components/base';

export default async function Home() {
  return (
    <>
      <Gallery title={gallery.titleHomePage} />

      <div className="container mt-10">
        <ContactLinks
          location={'header'}
          className={'text-xl tracking-[-0.2px] smOnly:hidden'}
        />
      </div>

      {/* <div className="container bg-color-bg-primary">
        <CardsKreatywny />
        <ContactLinks location={'contacts'} className={'xl:items-start'} />
        </div>
        
        <div className="container my-[50px]">
        <SliderTest />
      </div> */}

      <div className="bg-color-bg-primary md:bg-transparent">
        <div className="container max-w-full">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
