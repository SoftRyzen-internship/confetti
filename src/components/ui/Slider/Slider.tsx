'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { SliderProps } from './type';

export const Slider: React.FC<SliderProps> = ({
  className = '',
  slideClassName = '',
  data,
  component: Component,
  section,
}) => {
  const spaceBetweenXl = section === 'reviews' ? 26 : 24;

  return (
    <Swiper
      className={`${className}`}
      updateOnWindowResize={true}
      wrapperTag="ul"
      loop={true}
      modules={[Navigation, Pagination]}
      speed={800}
      spaceBetween={16}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: `.button-next-${section}`,
        prevEl: `.button-prev-${section}`,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
          allowTouchMove: false,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: spaceBetweenXl,
          allowTouchMove: false,
        },
      }}
    >
      {data?.map((card, idx) => (
        <SwiperSlide
          tag="li"
          key={idx}
          className={`overflow-hidden ${slideClassName}`}
        >
          <Component card={card} idx={idx} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
