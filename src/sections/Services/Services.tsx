import { ServiceSlider } from '@/components/base';

import { SectionTitle } from '@/components/ui';
import { ServiceCard } from '@/components/ui';

import data from '@/data/section-services.json';

const { title, subtitle, serviceCards } = data;

export const Services: React.FC = () => {
  return (
    <section className="bg-color-secondary pb-7 pt-12 md:pb-8 md:pt-16 xl:pb-[62px] xl:pt-[124px]">
      <div className="container relative">
        <SectionTitle
          className="mb-3 text-center md:mb-4 md:text-start"
          accentColor
        >
          {title}
        </SectionTitle>
        <p className="mb-8 text-center font-manrope text-[20px]/[1.4] font-medium md:mb-11 md:text-start md:text-[24px] xl:mb-[59px] xl:text-color-text-extra">
          {subtitle}
        </p>

        <ul className="flex flex-col items-center gap-7 md:hidden">
          {serviceCards.map(card => (
            <li key={card.slug} className="w-full">
              <ServiceCard card={card} />
            </li>
          ))}
        </ul>

        <ServiceSlider serviceCards={serviceCards} />
      </div>
    </section>
  );
};
