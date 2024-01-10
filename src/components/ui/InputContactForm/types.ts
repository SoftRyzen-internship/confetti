import { UseFormRegister, FieldErrors } from 'react-hook-form';

export type ContactFormInputProps = {
  config: ContactFormInputConfig;
  errors?: FieldErrors<FormInputs>;
  register?: UseFormRegister<FormInputs>;
};

type ContactFormInputConfig = {
  name: string;
  label: string;
  placeholder: string;
  isRequaredField: boolean;
  errorMessage: string;
  validationOptions: {
    pattern?: string;
    maxLength?: number;
    minLength?: number;
  };
};

//Потрібно перенести у тайпи форми
type FormInputs = {
  name: string;
  email: string;
};
