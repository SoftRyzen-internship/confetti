import { SectionTitle } from '@/components/ui';
import { AboutList } from '@/components/base/AboutList';

import data from '@/data/common.json';

export const About: React.FC = () => {
  const { subtitle, title } = data.sections.about;
  return (
    <section
      id="about"
      className="bg-color-bg-primary pb-[80px] pt-[48px] md:py-[64px] xl:pb-[106px] xl:pt-[96px]"
    >
      <div className="container">
        <SectionTitle className="mx-auto mb-[16px] md:w-[584px]" center>
          {title}
        </SectionTitle>

        <p className="mx-auto mb-[48px] text-center font-manrope text-[20px] font-medium leading-[1.4] tracking-[-0.2px] md:w-[584px] md:text-[24px] md:tracking-[-0.24px] xl:mb-[56px]">
          {subtitle}
        </p>

        <AboutList />
      </div>
    </section>
  );
};
