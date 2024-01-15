// import { CardsKreatywny } from '@/components/base';
// import { SliderTest } from '@/components/base/SliderTest';
// import { ContactLinks } from '@/components/ui';

import { About, Gallery, Review, Services, Hero, Contacts } from '@/sections';
// import {
// ContactLinks,
// Logo,
// SliderControls,
// SectionTitle,
// ContactFormInput,
// ContactFormTextarea,
// } from '@/components/ui';

import gallery from '@/data/gallery.json';
// import { ContactForm } from '@/components/base';

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery title={gallery.titleHomePage} />
      <Review />
      <Contacts />

      {/* COMPONENTS TESTING: */}

      {/* <div className="container">
        <ul className="flex w-fit flex-wrap justify-center gap-6">
          {serviceCards.map(card => (
            <li key={card.slug}>
              <ServiceCard {...card} />
            </li>
          ))}
        </ul>
      </div> */}

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
      {/* 
      <div className="bg-color-bg-primary md:bg-transparent">
        <div className="container max-w-full">
          <ContactForm />
        </div>
      </div> */}
    </>
  );
}
