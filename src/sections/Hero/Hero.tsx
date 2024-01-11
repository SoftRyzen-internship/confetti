import common from '@/data/common.json';
import css from './Hero.module.css';
export const Hero = () => {
  const {
    hero: { title: heroTitle },
  } = common.sections;
  return (
    <section className={`${css.heroBg} h-screen w-full overflow-hidden`}>
      <div className="container">
        <div className={css.bgBalloons}>
          <div className={css.balloons}></div>
          <h1 className="relative z-30 m-auto pt-[175px] text-center font-gilroy text-[32px] font-extrabold leading-[1.2] tracking-[-0.32px] text-color-accent-primary md:pt-[264px] md:text-[48px] md:tracking-[-0.48px] xl:w-[893px] xl:pt-[281px] xl:text-[66px] xl:tracking-[-0.66px] smOnly:w-[320px]">
            <span>{heroTitle.slice(0, 17)}</span>
            <br />
            <span>{heroTitle.slice(17, 34)}</span>
            <span className="text-color-primary">
              {heroTitle.slice(34, 54)}
            </span>
            <span>{heroTitle.slice(54)}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};
