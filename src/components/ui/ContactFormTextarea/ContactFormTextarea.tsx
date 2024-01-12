import { ContactFormTextareaProps } from './types';

export const ContactFormTextarea: React.FC<ContactFormTextareaProps> = ({
  config,
  errors,
  register,
  trigger,
}) => {
  const { name, label, placeholder, validationOptions } = config;

  const isError = errors?.[name];

  const errorColorClassName = errors?.[name]
    ? 'text-color-form-error'
    : 'text-color-primary';

  const errorMessage = errors?.[name]?.message;

  return (
    <label className="relative mb-6 flex flex-col md:mb-8">
      <span className="mb-2 pl-6 font-manrope text-base font-medium leading-[1.37] tracking-[-0.16px] text-color-form-label">
        {label}
      </span>

      <textarea
        className={`text-[18px]font-medium h-[140px] resize-none overflow-y-auto rounded-[8px] border border-solid 
          border-color-ctrl-btn-border px-6 py-5 font-manrope leading-[1.389] tracking-[-0.18px]
          placeholder:text-color-form-placeholder 
           md:h-[148px] md:text-[20px] md:leading-[1.25] md:tracking-[-0.2px] ${errorColorClassName}`}
        placeholder={placeholder}
        {...register(name, {
          ...validationOptions,
        })}
        onBlur={() => trigger(name)}
      />

      {isError ? (
        <span
          role="alert"
          className="absolute right-6 top-full mt-2 text-right font-manrope text-sm font-medium leading-[1.2] tracking-[-0.14px] text-color-form-error"
        >
          {errorMessage}
        </span>
      ) : null}
    </label>
  );
};
