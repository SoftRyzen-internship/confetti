import { ContactFormInputProps } from './types';

export const ContactFormInput: React.FC<ContactFormInputProps> = ({
  config,
  errors,
  trigger,
  register,
}) => {
  const { name, label, placeholder, validationOptions } = config;

  const isError = errors?.[name];

  const errorColorClassName = errors?.[name]
    ? 'text-color-form-error'
    : 'text-color-primary';

  const errorMessage = errors?.[name]?.message;

  const isRequiredField = validationOptions?.required;

  return (
    <label className="relative mb-6 flex flex-col md:mb-8">
      <span className="mb-2 pl-6 font-manrope text-base font-medium leading-[1.37] tracking-[-0.16px] text-color-form-label">
        {label}
        {isRequiredField ? '*' : null}
      </span>

      <input
        aria-required={isRequiredField ? true : false}
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={errors[name] ? `errorMessage${name}` : undefined}
        className={`rounded-[8px] border border-solid border-color-ctrl-btn-border px-6 py-5 font-manrope
           text-[18px] font-medium leading-[1.389] tracking-[-0.18px] placeholder:text-color-form-placeholder md:text-[20px] md:leading-[1.25] md:tracking-[-0.2px] ${errorColorClassName}`}
        placeholder={placeholder}
        {...register(name, {
          ...validationOptions,
          required: isRequiredField,
          onChange: () => {
            trigger(name);
          },
          onBlur: () => {
            trigger(name);
          },
          pattern: {
            value: validationOptions?.pattern
              ? new RegExp(validationOptions.pattern.value)
              : new RegExp(''),
            message: validationOptions?.pattern
              ? validationOptions?.pattern?.message
              : '',
          },
        })}
        type="text"
      />

      {isError ? (
        <span
          role="alert"
          id={`errorMessage${name}`}
          className="absolute right-6 top-full mt-2 text-right font-manrope text-sm font-medium leading-[1.2] tracking-[-0.14px] text-color-form-error"
        >
          {errorMessage}
        </span>
      ) : null}
    </label>
  );
};
