'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { Toaster } from 'react-hot-toast';

import { ContactFormInput, ContactFormTextarea } from '@/components/ui';

import { sendEmail } from '@/utils/helpers';

import contactFormData from '@/data/contact-form.json';

import { ContactFormInputs, Props } from './types';

export const ContactForm: React.FC<Props> = ({ className }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    trigger,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  useFormPersist('contactForm', { watch, setValue });

  const onSubmit: SubmitHandler<ContactFormInputs> = data => {
    sendEmail(data);

    reset();
  };

  return (
    <>
      <Toaster />
      <form
        className={`bg-color-bg-primary px-5 py-8 sm:w-[440px] 
        md:relative md:w-[608px] md:rounded-[24px] md:px-[82px] md:py-[38px] xl:py-[48px] ${className}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ContactFormInput
          config={contactFormData.name}
          register={register}
          trigger={trigger}
          errors={errors}
        />

        <ContactFormInput
          config={contactFormData.email}
          register={register}
          trigger={trigger}
          errors={errors}
        />

        <ContactFormTextarea
          config={contactFormData.message}
          register={register}
          errors={errors}
          trigger={trigger}
        />

        <button
          className="flex w-full items-center justify-center rounded-[24px] bg-color-accent-primary px-8 py-5 text-[28px] font-extrabold 
        leading-[1.23] tracking-[-0.28px] text-color-secondary transition-all hover:bg-color-form-btn-hover focus:bg-color-form-btn-hover md:py-6 md:text-[40px] md:tracking-[-0.4px]"
          type="submit"
        >
          {contactFormData.submitBtn.label}
        </button>
      </form>
    </>
  );
};
