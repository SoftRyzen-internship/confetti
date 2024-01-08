import { CardKreatywny } from '@/components/ui';
import about from '@/data/section-about.json';

const CardsKreatywny = () => {
  const { cards } = about;
  return (
    <ul className="md:flex md:flex-col md:gap-6 xl:flex-row xl:flex-wrap">
      {cards.map(card => (
        <CardKreatywny key={card.id} card={card} />
      ))}
    </ul>
  );
};
export { CardsKreatywny };
