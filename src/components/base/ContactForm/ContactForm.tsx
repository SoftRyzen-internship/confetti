'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import toast, { Toaster } from 'react-hot-toast';

import { ContactFormInput, ContactFormTextarea } from '@/components/ui';

import contactFormData from '@/data/contactForm.json';

import { ContactFormInputs } from './types';

import styles from './styles.module.css';

export const ContactForm = () => {
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

  const onSubmit: SubmitHandler<ContactFormInputs> = () => {
    toast.success('Formularz został pomyślnie wysłany. Dziękujemy');
    toast.error('Błąd wysyłania formularza. Proszę spróbować ponownie');
    reset();
  };

  return (
    <>
      <Toaster />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        />

        <button
          className="flex w-full items-center justify-center rounded-[24px] bg-color-accent-primary px-8 py-5 text-[28px] font-extrabold 
        leading-[1.23] tracking-[-0.28px] text-color-secondary md:py-6 md:text-[40px] md:tracking-[-0.4px]"
          type="submit"
        >
          {contactFormData.submitBtn.label}
        </button>
      </form>
    </>
  );
};
