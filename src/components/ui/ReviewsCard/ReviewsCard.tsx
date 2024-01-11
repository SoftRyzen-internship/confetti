import User from '~/icons/user.svg';

import { PropsReviews } from './types';

export const ReviewsCard: React.FC<PropsReviews> = ({
  className = '',
  card,
}) => {
  return (
    <div
      className={`flex h-[229px] w-[320px] flex-col justify-between rounded-3xl bg-color-bg-extra p-6 odd:bg-color-bg-primary md:h-[206px] md:w-[346px] xl:h-[294px] xl:w-[388px] ${className}`}
    >
      <h4 className="font-manrope text-[18px] font-medium leading-[1.3] tracking-[-0.18px] text-color-primary xl:text-[24px] xl:leading-[1.4] xl:tracking-[-0.24px]">
        {card?.review}
      </h4>
      <div className="flex gap-2">
        <User className="h-6 w-6" />
        <p className="font-manrope text-base font-medium tracking-[-0.16px] text-color-text-extra">
          {card?.name}
        </p>
      </div>
    </div>
  );
};
