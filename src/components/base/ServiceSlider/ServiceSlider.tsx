'use client';

import { Slider } from '@/components/ui';
import { SliderControls } from '@/components/ui';
import { ServiceCard } from '@/components/ui';

import { Props } from './types';

export const ServiceSlider: React.FC<Props> = ({ serviceCards }) => {
  return (
    <div className="smOnly:hidden">
      <div className="md:absolute md:right-[32px] md:top-[41px] xl:top-[3px]">
        <SliderControls section="services" />
      </div>

      <Slider component={ServiceCard} data={serviceCards} section="services" />
    </div>
  );
};
