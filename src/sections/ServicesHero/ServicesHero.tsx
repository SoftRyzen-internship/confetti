import Image from 'next/image';

import { ServicesHeroProps } from './types';

export const ServicesHero: React.FC<ServicesHeroProps> = ({
  title,
  text,
  img,
  base64,
}) => {
  return (
    <section className="pt-[108px] md:pt-[155px]">
      <div className="container">
        <div className="overflow-hidden rounded-3xl bg-color-bg-extra md:flex">
          <div className="justify-center px-[24px] md:flex md:w-[354px] md:flex-col md:px-[40px] xl:w-[608px] xl:px-[80px] smOnly:py-[48px]">
            <h1
              className="mb-[24px] font-gilroy text-[32px] font-extrabold leading-[1.2] 
              tracking-[-0.32px] text-color-primary md:text-[36px] md:tracking-[-0.36px] xl:text-[40px] xl:tracking-[-0.4px]"
            >
              {title}
            </h1>

            <div className="flex flex-col gap-[24px]">
              {text.map((item, idx) => (
                <p
                  className="font-manrope text-[16px] font-medium leading-[1.45] tracking-[-0.16px] text-color-primary xl:text-[18px] xl:tracking-[-0.18px]"
                  key={idx}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="hidden md:block md:h-[899px] md:w-[354px] xl:h-[726px] xl:w-[608px]">
            <Image
              src={img.path}
              alt={img.alt}
              width={608}
              height={726}
              className="object-cover md:h-[899px] xl:h-[726px]"
              placeholder="blur"
              blurDataURL={base64}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
