// import { CardsKreatywny } from '@/components/base';
// import { SliderTest } from '@/components/base/SliderTest';
// import { ContactLinks } from '@/components/ui';

import { About, Gallery, Review } from '@/sections';
// import {
// ContactLinks,
// Logo,
// SliderControls,
// SectionTitle,
// ContactFormInput,
// ContactFormTextarea,
// } from '@/components/ui';

import gallery from '@/data/gallery.json';
import { ContactForm } from '@/components/base';

export default async function Home() {
  return (
    <>
      <section className="min-h-[300px] bg-slate-50 pt-[175px] md:pt-[264px] xl:pt-[280px] ">
        Hero
      </section>

      <About />
      <Gallery title={gallery.titleHomePage} />
      <Review />

      {/* COMPONENTS TESTING: */}

      {/* <div className="container mt-10">
        <ContactLinks
          location={'header'}
          className={'text-xl tracking-[-0.2px] smOnly:hidden'}
        />
      </div> */}

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
