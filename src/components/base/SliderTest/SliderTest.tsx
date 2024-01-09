'use client';

import { Slider } from '@/components/ui';

const Card = ({ card }: any) => {
  return (
    <div className="flex h-[320px] items-center justify-center bg-color-bg-primary md:h-[206px]">
      <p className="text-[20px]">{card.id}</p>
    </div>
  );
};

export const SliderTest = () => {
  return (
    <div>
      <Slider
        component={Card}
        data={[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]}
        section="reviews"
      />
    </div>
  );
};
