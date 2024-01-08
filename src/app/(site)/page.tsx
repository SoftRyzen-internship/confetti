import { CardsKreatywny } from '@/components/base';
import { Logo } from '@/components/ui';
import { SliderControls } from '@/components/ui';

export default async function Home() {
  return (
    <>
      <div className="container">
        <Logo location="footer" />
      </div>
      <div className="container bg-color-bg-primary">
        <CardsKreatywny />
      </div>
      <SliderControls />
    </>
  );
}
