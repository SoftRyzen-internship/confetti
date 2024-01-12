'use client';

import { SectionTitle } from '@/components/ui';
import { ServiceCard } from '@/components/ui';
import { Slider } from '@/components/ui';
import { SliderControls } from '@/components/ui';

import { useCurrentScreenWidth } from '@/utils/hooks/useCurrentScreenWidth';

import data from '@/data/section-services.json';

const { title, subtitle, serviceCards } = data;

export const Services = () => {
  const { currentScreenWidth } = useCurrentScreenWidth();

  return (
    <section className="xl:pb- pb-7 pt-12 md:pb-8 md:pt-16 xl:pb-[62px] xl:pt-[124px]">
      <div className="container relative">
        <SectionTitle
          className="mb-3 text-center md:mb-4 md:text-start"
          accentColor
        >
          {title}
        </SectionTitle>
        <p className="mb-8 text-center font-manrope text-[20px]/[1.4] font-medium md:mb-11 md:text-start md:text-[24px] xl:mb-[59px]">
          {subtitle}
        </p>

        {(currentScreenWidth as number) < 768 ? (
          <ul className="flex flex-col items-center gap-7">
            {serviceCards.map(card => (
              <li key={card.slug}>
                <ServiceCard card={card} />
              </li>
            ))}
          </ul>
        ) : (
          <>
            <div className="md:absolute md:right-[32px] md:top-[41px] xl:top-[3px]">
              <SliderControls section="services" />
            </div>

            <Slider
              component={ServiceCard}
              data={serviceCards}
              section="services"
            />
          </>
        )}
      </div>
    </section>
  );
};
