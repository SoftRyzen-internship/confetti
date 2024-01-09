import { CardsKreatywny } from '@/components/base';
import { ReviewsCards } from '@/components/base/ReviewsCards/ReviewsCards';
import { ContactLinks, Logo } from '@/components/ui';

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

      <div className="container bg-green-200">
        <CardsKreatywny />
        <ContactLinks location={'contacts'} className={'xl:items-start'} />
        <ReviewsCards />
      </div>
    </>
  );
}
