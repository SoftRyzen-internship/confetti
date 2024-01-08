import { CardsKreatywny } from '@/components/base';
import { Logo, SectionTitle } from '@/components/ui';

export default async function Home() {
  return (
    <>
      <div className="container">
        <Logo location="footer" />
      </div>
      <div className="container bg-color-bg-primary">
        <CardsKreatywny />
      </div>

      <div className="container">
        <SectionTitle ariaLabelledbyId="section" accentColor center>
          Hello!
        </SectionTitle>
      </div>
    </>
  );
}
