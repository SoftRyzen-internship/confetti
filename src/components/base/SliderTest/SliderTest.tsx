'use client';

import { Slider, SliderControls } from '@/components/ui';

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
      <div>
        <SliderControls section="reviews" />
      </div>

      <Slider
        component={Card}
        data={[{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]}
        section="reviews"
      />
    </div>
  );
};
