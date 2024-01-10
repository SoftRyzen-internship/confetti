import { CardsKreatywny } from '@/components/base';
import {
  ContactLinks,
  Logo,
  SliderControls,
  SectionTitle,
  ContactFormInput,
} from '@/components/ui';

import formConfigData from '@/data/contactForm.json';

export default async function Home() {
  return (
    <>
      <div className="container">
        <Logo location="footer" />
        <ContactLinks
          location={'header'}
          className={'text-xl tracking-[-0.2px] smOnly:hidden'}
        />
      </div>

      <div className="container bg-color-bg-primary">
        <CardsKreatywny />
      </div>

      <div className="container">
        <SectionTitle ariaLabelledbyId="section" accentColor center>
          Hello!
        </SectionTitle>
      </div>

      <SliderControls section="services" />

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
    </>
  );
}
