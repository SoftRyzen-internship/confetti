'use client';
import {
  ReviewsCard,
  SectionTitle,
  Slider,
  SliderControls,
} from '@/components/ui';
import { useFetch } from '@/utils/hooks';

import common from '@/data/common.json';

import { ReviewType } from '@/types';

export const Review: React.FC = () => {
  const { data } = useFetch('review') as { data: ReviewType[] };
  return (
    <section className="pt-[56px] md:pt-[64px] xl:pt-[124px]">
      <div className="container">
        <div className="flex justify-center md:justify-between">
          <SectionTitle className={'mb-9 md:mb-12'} accentColor>
            {common.sections.review.title}
          </SectionTitle>
          <SliderControls section={'reviews'} />
        </div>
        <Slider
          component={ReviewsCard}
          section="reviews"
          data={data}
          className="review-slider"
        />
      </div>
    </section>
  );
};
