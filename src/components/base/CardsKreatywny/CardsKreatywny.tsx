import { CardKreatywny } from '@/components/ui';

import about from '@/data/section-about.json';

export const CardsKreatywny: React.FC = () => {
  const { cards } = about;
  return (
    <ul className="hidden md:flex md:flex-col md:gap-6 xl:flex-row xl:flex-wrap">
      {cards.map(card => (
        <li key={card.id}>
          <CardKreatywny card={card} />
        </li>
      ))}
    </ul>
  );
};
