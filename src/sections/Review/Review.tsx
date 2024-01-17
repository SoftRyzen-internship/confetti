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
    data && (
      <section id="reviews" className="section smOnly:pt-[56px]">
        <div className="container">
          <div className="flex justify-center md:justify-between">
            <SectionTitle className={'mb-9 md:mb-12'} accentColor>
              {common.sections.review.title}
            </SectionTitle>

            <div className={`${data.length > 3 ? 'xl:block' : 'xl:hidden'}`}>
              <SliderControls section={'reviews'} />
            </div>
          </div>
          <Slider
            component={ReviewsCard}
            section="reviews"
            data={data}
            className="review-slider"
          />
        </div>
      </section>
    )
  );
};
