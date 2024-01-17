import { AboutCard } from '@/components/ui';

import data from '@/data/common.json';

export const AboutCards: React.FC = () => {
  const { cards } = data.sections.about;
  return (
    <ul className="hidden items-center md:flex md:flex-col md:gap-6 xl:flex-row xl:flex-wrap">
      {cards.map(card => (
        <li key={card.id} className="about-item">
          <AboutCard card={card} />
        </li>
      ))}
    </ul>
  );
};
