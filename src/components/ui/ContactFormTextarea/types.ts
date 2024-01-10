import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type ContactFormTextareaProps = {
  config: ContactFormTextareaConfig;
  errors?: FieldErrors<FormInputs>;
  register?: UseFormRegister<FormInputs>;
};

type ContactFormTextareaConfig = {
  name: string;
  label: string;
  placeholder: string;
  validationOptions: {
    maxLength?: number;
  };
};

//Потрібно перенести у тайпи форми
type FormInputs = {
  name: string;
  email: string;
  message: string;
};
