'use client';

import { Slider } from '@/components/ui/Slider';
import { CardKreatywny } from '@/components/ui';
import { CardsKreatywny } from '@/components/base/CardsKreatywny';

import data from '@/data/common.json';

export const AboutList: React.FC = () => {
  const { cards } = data.sections.about;

  return (
    <>
      <div className="md:hidden">
        <Slider component={CardKreatywny} data={cards} section="about" />
      </div>
      <CardsKreatywny />
    </>
  );
};
