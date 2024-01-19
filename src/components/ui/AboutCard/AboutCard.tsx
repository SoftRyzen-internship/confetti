import { sliceTextBlock } from '@/utils/helpers';

import { AboutCardProps } from './types';

import css from './AboutCard.module.css';

export const AboutCard: React.FC<AboutCardProps> = ({ card }) => {
  const { id, title, description } = card;
  const titleColorClass =
    id === 1 || id === 4
      ? 'text-color-accent-primary'
      : 'text-color-accent-extra';
  const cardConfetiClass =
    id === 2 ? css.confeti1 : id === 3 ? css.confeti2 : '';

  return (
    <div
      className={`${cardConfetiClass} mx-auto flex h-[253px] flex-col justify-between rounded-3xl bg-white p-[23px] md:h-[319px] md:w-[596px] md:p-12 xl:w-full`}
    >
      <h3
        className={`font-gilroy text-[24px] font-extrabold leading-[1.2] tracking-[-0.24px] md:text-[40px] md:tracking-[-0.4px] ${titleColorClass}`}
      >
        <span>
          {id === 2 || id === 4
            ? sliceTextBlock(title, 0, 2)
            : sliceTextBlock(title, 0, 3)}
        </span>
        <br />
        <span>
          {id === 2 || id === 4
            ? sliceTextBlock(title, 2, 5)
            : sliceTextBlock(title, 3, 6)}
        </span>
      </h3>

      <p className="font-manrope text-[16px] font-medium leading-[1.45] tracking-[-0.16px] text-color-text-extra md:text-[20px] md:tracking-[-0.2px]">
        {description}
      </p>
    </div>
  );
};
