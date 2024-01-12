import { UseFormRegister, FieldErrors, UseFormTrigger } from 'react-hook-form';

import { ContactFormInputs } from '@/components/base/ContactForm/types';

export type ContactFormTextareaProps = {
  config: ContactFormTextareaConfig;
  errors: FieldErrors<ContactFormInputs>;
  register: UseFormRegister<ContactFormInputs>;
  trigger: UseFormTrigger<ContactFormInputs>;
};

type ContactFormTextareaConfig = {
  name: string;
  label: string;
  placeholder: string;
  validationOptions: validationOptionsTextarea;
};

type validationOptionsTextarea = {
  maxLength?: {
    value: number;
    message: string;
  };
};
