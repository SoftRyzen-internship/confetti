import User from '~/icons/user.svg';

import { PropsReviews } from './types';

export const ReviewsCard: React.FC<PropsReviews> = ({
  className = '',
  card,
  idx,
}) => {
  return (
    <div
      className={`flex h-[229px] flex-col justify-between rounded-3xl ${
        idx % 2 ? 'bg-color-bg-extra' : 'bg-color-bg-primary'
      } p-6 md:h-[206px] md:w-[346px] xl:h-[294px] xl:w-[388px] ${className}`}
    >
      <p className="font-manrope text-[18px] font-medium leading-[1.3] tracking-[-0.18px] text-color-primary xl:text-[24px] xl:leading-[1.4] xl:tracking-[-0.24px]">
        {card?.review}
      </p>
      <div className="flex gap-2">
        <User className="h-6 w-6" />
        <p className="font-manrope text-base font-medium tracking-[-0.16px] text-color-text-extra">
          {card?.name}
        </p>
      </div>
    </div>
  );
};
