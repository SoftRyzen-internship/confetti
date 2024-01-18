import { ContactForm } from '@/components/base';

import { SectionTitle, ContactLinks } from '@/components/ui';

import data from '@/data/common.json';

import css from './Contacts.module.css';

const { title, location } = data.sections.contacts;

export const Contacts: React.FC = () => {
  return (
    <section
      id="contacts"
      className="overflow-hidden bg-color-secondary pb-[38px] pt-14 md:pb-16 md:pt-20 xl:pb-[113px] xl:pt-[182px]"
    >
      <div
        className={`container relative items-center md:flex md:flex-col md:items-center xl:flex-row xl:justify-between ${css.container}`}
      >
        <div className="flex flex-col items-center xl:items-start">
          <SectionTitle
            className="mb-9 md:mb-[48px] xl:mb-10 xl:self-start"
            accentColor
          >
            {title}
          </SectionTitle>

          <p className="mb-6 w-[320px] text-center font-manrope text-[28px]/[1.2] font-medium -tracking-[0.28px] text-color-primary md:w-[380px] md:text-[36px] xl:mb-8 xl:text-start xl:text-[40px]">
            {location}
          </p>
          <ContactLinks
            className="mb-[48px] md:mb-[38px] xl:mb-0 xl:items-start"
            location="contacts"
          />
        </div>

        <ContactForm className="z-10 smOnly:hidden" />
      </div>
      <div className="bg-color-bg-primary md:hidden">
        <ContactForm className="mx-auto md:hidden" />
      </div>
    </section>
  );
};
