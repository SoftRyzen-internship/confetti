// import { CardsKreatywny } from '@/components/base';
// import { SliderTest } from '@/components/base/SliderTest';
// import { ContactLinks, ContactFormInput } from '@/components/ui';
import { ServiceCard } from '@/components/ui/ServiceCard/ServiceCard';

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
// import formConfigData from '@/data/contactForm.json';
import serviceCardsData from '@/data/common.json';

const {
  layout: { serviceCards },
} = serviceCardsData;

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

      <div className="container">
        <ul className="flex w-fit flex-wrap justify-center gap-6">
          {serviceCards.map(card => (
            <li key={card.slug}>
              <ServiceCard {...card} />
            </li>
          ))}
        </ul>
      </div>

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

      {/* <div className=" bg-color-bg-primary">
        <div className="container">
          <div className="md:mx-auto md:w-[608px] md:px-[82px] md:py-[38px]">
            <ContactFormInput
              config={formConfigData.name}
              // register
              // errors,
            />

            <ContactFormInput
              config={formConfigData.email}
              // register
              // errors,
            />
            <ContactFormTextarea config={formConfigData.message} />
          </div>
        </div>
      </div> */}
    </>
  );
}
