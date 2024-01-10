import { ContactFormTextareaProps } from './types';

export const ContactFormTextarea: React.FC<ContactFormTextareaProps> = ({
  config,
  // errors,
  // register,
}) => {
  const {
    // name,
    label,
    placeholder,
    // validationOptions,
  } = config;

  // const isError = errors[name];

  return (
    <label className="relative mb-6 flex flex-col md:mb-8">
      <span className="mb-2 ml-6 font-manrope text-base font-medium leading-[1.2] tracking-[-0.16px] text-color-form-label">
        {label}
      </span>

      <textarea
        className="text-[18px]font-medium h-[140px] resize-none overflow-y-auto rounded-[8px] border border-solid 
          border-color-ctrl-btn-border px-6 py-5 font-manrope leading-[1.389] tracking-[-0.18px] text-color-primary
          placeholder:text-color-form-placeholder 
           md:h-[148px] md:text-[20px] md:leading-[1.35] md:tracking-[-0.2px]"
        placeholder={placeholder}
        // {...register(name, {
        //   ...validationOptions,
        // })}
      />
    </label>
  );
};
