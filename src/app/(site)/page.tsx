import { CardsKreatywny } from '@/components/base';
import { SliderTest } from '@/components/base/SliderTest';
import { ContactLinks, Logo, SliderControls } from '@/components/ui';
import { MenuBtn } from '@/components/ui';

export default async function Home() {
  return (
    <>
      <div className="container">
        <MenuBtn />
      </div>
      <div className="container">
        <Logo location="footer" />
        <ContactLinks
          location={'header'}
          className={'text-xl tracking-[-0.2px] smOnly:hidden'}
        />
      </div>

      <div className="container bg-color-bg-primary">
        <CardsKreatywny />
        <ContactLinks location={'contacts'} className={'xl:items-start'} />
      </div>
      <SliderControls section="services" />

      <div className="container my-[50px]">
        <SliderTest />
      </div>
    </>
  );
}
