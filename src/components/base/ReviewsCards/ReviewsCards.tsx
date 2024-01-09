'use client';
import { ReviewsCard } from '@/components/ui';
import { ReviewType } from '@/components/ui/ReviewsCard/types';
import { useFetch } from '@/utils/hooks';
import React from 'react';

export const ReviewsCards = () => {
  const { data } = useFetch('review') as { data: ReviewType[] };
  return (
    <ul className="">
      {data && data.map(item => <ReviewsCard review={item} key={item._id} />)}
    </ul>
  );
};
