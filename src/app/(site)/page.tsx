import { CardsKreatywny } from '@/components/base';
import { Logo, Title } from '@/components/ui';

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
        <Title text="Hello" accentColor />
      </div>
    </>
  );
}
