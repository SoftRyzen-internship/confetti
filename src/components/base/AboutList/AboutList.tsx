'use client';

import { Slider } from '@/components/ui/Slider';
import { AboutCard } from '@/components/ui';
import { AboutCards } from '@/components/base/AboutCards';

import data from '@/data/common.json';

export const AboutList: React.FC = () => {
  const { cards } = data.sections.about;

  return (
    <>
      <div className="md:hidden">
        <Slider component={AboutCard} data={cards} section="about" />
      </div>

      <AboutCards />
    </>
  );
};
