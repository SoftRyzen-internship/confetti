import { CardsKreatywny } from '@/components/base';
import { ContactLinks, Logo, SliderControls, SectionTitle } from '@/components/ui';


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
    </>
  );
}
