import { CardKreatywnyProps } from './types';

export const CardKreatywny: React.FC<CardKreatywnyProps> = ({ card }) => {
  const { id, title, description } = card;
  const titleColorClass =
    id === 1 || id === 4
      ? 'text-color-accent-primary'
      : 'text-color-accent-extra';
  return (
    <div className="mx-auto flex h-[253px] w-[320px] flex-col justify-between rounded-3xl bg-white p-[23px] md:h-[319px] md:w-[596px] md:p-12">
      <h3
        className={`font-gilroy text-[24px] font-extrabold leading-[1.2] tracking-[-0.24px] md:text-[40px] md:tracking-[-0.4px] ${titleColorClass}`}
      >
        {title}
      </h3>

      <p className="font-manrope text-[16px] font-medium leading-[1.45] tracking-[-0.16px] text-color-text-extra md:text-[20px] md:tracking-[-0.2px]">
        {description}
      </p>
    </div>
  );
};