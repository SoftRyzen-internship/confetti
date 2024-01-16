'use client';
import { useEffect, useState } from 'react';

import { sliceTextBlock } from '@/utils/helpers';

import common from '@/data/common.json';

import css from './Hero.module.css';

export const Hero: React.FC = () => {
  const {
    hero: { title: heroTitle },
  } = common.sections;

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${css.heroBg} h-full w-full overflow-hidden`}>
      <div className="container">
        <div
          className={`${css.bgBalloons} pb-[116px] pt-[175px] md:pb-[200px] md:pt-[264px]  xl:pb-[282px] xl:pt-[281px]`}
        >
          <div className={`${css.balloons} ${isScrolled ? css.parallax : ''}`}>
            <h1 className="relative z-20 m-auto text-center font-gilroy text-[32px] font-extrabold leading-[1.2] tracking-[-0.32px] text-color-accent-primary md:text-[48px] md:tracking-[-0.48px] xl:w-[893px] xl:text-[66px] xl:tracking-[-0.66px] smOnly:w-[320px]">
              <span>{sliceTextBlock(heroTitle, 0, 2)}</span>
              <br />
              <span>{sliceTextBlock(heroTitle, 2, 4)}</span>{' '}
              <span className="text-color-primary">
                {sliceTextBlock(heroTitle, 4, 6)}
              </span>{' '}
              <span>{sliceTextBlock(heroTitle, 6, 8)}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
