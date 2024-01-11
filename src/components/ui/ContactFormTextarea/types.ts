import { UseFormRegister, FieldErrors } from 'react-hook-form';

import { ContactFormInputs } from '@/components/base/ContactForm/types';

export type ContactFormTextareaProps = {
  config: ContactFormTextareaConfig;
  errors: FieldErrors<ContactFormInputs>;
  register: UseFormRegister<ContactFormInputs>;
};

type ContactFormTextareaConfig = {
  name: string;
  label: string;
  placeholder: string;
  validationOptions: {
    pattern?: string;
    maxLength?: number;
  };
};
