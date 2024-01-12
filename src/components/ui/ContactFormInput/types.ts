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
  validationOptions?: validationOptionsInput;
};

type validationOptionsInput = {
  required: validationOptionsRequired;
  pattern?: validationOptionsPattern;
  maxLength?: validationOptionsMaxLength;
  minLength?: validationOptionsMinLength;
};

type validationOptionsRequired = {
  value: boolean;
  message: string;
};

type validationOptionsPattern = {
  value: string;
  message: string;
};

type validationOptionsMaxLength = {
  value: number;
  message: string;
};

type validationOptionsMinLength = {
  value: number;
  message: string;
};
