'use client';

import { Slider } from '@/components/ui/Slider';
import { CardKreatywny } from '@/components/ui';
import { CardsKreatywny } from '@/components/base/CardsKreatywny';

import about from '@/data/section-about.json';

export const AboutList: React.FC = () => {
  return (
    <>
      <div className="md:hidden">
        <Slider component={CardKreatywny} data={about.cards} section="about" />
      </div>
      <CardsKreatywny />
    </>
  );
};
