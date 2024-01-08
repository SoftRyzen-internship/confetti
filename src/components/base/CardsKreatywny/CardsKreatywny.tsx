import CardKreatywny from '@/components/ui/CardKreatywny/CardKreatywny';
import cards from '@/data/kreatywny-cards.json';

const CardsKreatywny = () => {
  return (
    <ul className="md:flex md:flex-col md:gap-6 xl:flex-row xl:flex-wrap">
      {cards.map(card => (
        <CardKreatywny key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default CardsKreatywny;
