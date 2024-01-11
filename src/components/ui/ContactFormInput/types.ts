import { UseFormRegister, FieldErrors, UseFormTrigger } from 'react-hook-form';

import { ContactFormInputs } from '@/components/base/ContactForm/types';

export type ContactFormInputProps = {
  config: ContactFormInputConfig;
  errors: FieldErrors<ContactFormInputs>;
  trigger: UseFormTrigger<ContactFormInputs>;
  register: UseFormRegister<ContactFormInputs>;
};

type ContactFormInputConfig = {
  name: string;
  label: string;
  placeholder: string;
  isRequiredField: boolean;
  errorMessage: string;
  validationOptions: {
    pattern?: string;
    maxLength?: number;
    minLength?: number;
  };
};
