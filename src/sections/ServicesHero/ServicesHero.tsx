import { ServicesHeroProps } from './types';

export const ServicesHero: React.FC<ServicesHeroProps> = ({
  title,
  text,
  image,
}) => {
  return (
    <section className="pt-[108px] md:pt-[155px]">
      <div className="container">
        <div className="overflow-hidden rounded-3xl bg-color-bg-extra md:flex">
          <div className="px-[24px] md:w-[354px] md:px-[40px] xl:w-[608px]  xl:px-[80px] smOnly:py-[48px]">
            <h1
              className="mb-[24px] font-gilroy text-[32px] font-extrabold leading-[1.2] 
              tracking-[-0.32px] text-color-primary md:text-[36px] md:tracking-[-0.36px] xl:text-[40px] xl:tracking-[-0.4px]"
            >
              {title}
            </h1>

            <div className="flex flex-col gap-[26px]">
              {text.map((item, idx) => (
                <p className="font-manrope text-color-primary" key={idx}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="hidden bg-slate-500 md:block md:h-[899px] md:w-[354px] xl:h-[726px] xl:w-[608px]">
            <span>{image.alt}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
