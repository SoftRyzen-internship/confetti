import { ContactFormInputProps } from './types';

export const ContactFormInput: React.FC<ContactFormInputProps> = ({
  config,
  // errors,
  // register,
}) => {
  const {
    name,
    label,
    placeholder,
    isRequaredField,
    errorMessage,
    // validationOptions,
  } = config;

  // const isError = errors[name];
  // const patternRegExp = validationOptions.pattern
  //   ? new RegExp(validationOptions.pattern)
  //   : undefined;

  return (
    <label className="relative mb-6 flex flex-col md:mb-8">
      <span className="mb-2 ml-6 font-manrope text-base font-medium leading-[1.2] tracking-[-0.16px] text-color-form-label">
        {label}
        {isRequaredField ? '*' : null}
      </span>

      <input
        aria-required={isRequaredField ? true : false}
        className="rounded-[8px] border border-solid border-color-ctrl-btn-border px-6 py-5 font-manrope
           text-[18px] font-medium leading-[1.389] tracking-[-0.18px] text-color-primary outline-none placeholder:text-color-form-placeholder md:text-[20px] md:leading-[1.35] md:tracking-[-0.2px]"
        placeholder={placeholder}
        // {...register(name, {
        //   ...validationOptions,
        //   pattern: patternRegExp,
        // })}
        type="text"
      />

      {/* {isError ? ( */}
      {!name ? (
        <span className="absolute right-6 top-full mt-2 text-right font-manrope text-sm font-medium leading-[1.2] tracking-[-0.14px] text-color-form-error">
          {errorMessage}
        </span>
      ) : null}
    </label>
  );
};
