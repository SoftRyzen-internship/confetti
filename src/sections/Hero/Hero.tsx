import common from '@/data/common.json';

export const Hero = () => {
  const {
    hero: { title: heroTitle },
  } = common.sections;
  return (
    <section className="hero-bg h-screen w-full">
      <div className="container">
        <h1 className="text-center font-gilroy text-[32px] font-extrabold leading-[1.2] tracking-[-0.32px] text-color-accent-primary md:text-[48px] md:tracking-[-0.48px] xl:text-[66px] xl:tracking-[-0.66px]">
          <span>{heroTitle.slice(0, 17)}</span>
          <br />
          <span>{heroTitle.slice(17, 34)}</span>
          <span className="text-color-primary">{heroTitle.slice(34, 54)}</span>
          <span>{heroTitle.slice(54)}</span>
        </h1>
      </div>
    </section>
  );
};
