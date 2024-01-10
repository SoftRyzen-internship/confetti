import { CardsKreatywny } from '@/components/base';
import { SliderTest } from '@/components/base/SliderTest';
import { Gallery, Review } from '@/sections';
import {
  ContactLinks,
  Logo,
  SliderControls,
  SectionTitle,
  ContactFormInput,
} from '@/components/ui';

import gallery from '@/data/gallery.json';
import formConfigData from '@/data/contactForm.json';

export default async function Home() {
  return (
    <>
      <Gallery
        title={gallery.titleHomePage}
        labelledbyId="gallery-section-labelledby"
      />

      <div className="container mt-10">
        <Logo location="footer" />
        <ContactLinks
          location={'header'}
          className={'text-xl tracking-[-0.2px] smOnly:hidden'}
        />
      </div>

      <div className="container bg-green-200">
        <CardsKreatywny />
        <ContactLinks location={'contacts'} className={'xl:items-start'} />
      </div>

      <div className="container my-[50px]">
        <SliderTest />
      </div>

      <SliderControls section="services" />

      <div className="container">
        <SectionTitle ariaLabelledbyId="section" accentColor center>
          Hello!
        </SectionTitle>
      </div>

      <div className=" bg-color-bg-primary">
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
          </div>
        </div>
      </div>
      <Review />
    </>
  );
}
