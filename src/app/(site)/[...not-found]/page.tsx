import Link from 'next/link';
import Image from 'next/image';

import balloons from '~/images/hero/left-balloons.webp';

import common from '@/data/common.json';

const NotFound = async () => {
  const { title, button, img } = common.sections.notFound;
  return (
    <section
      className={`notFound flex h-full grow items-center justify-center`}
    >
      <div className="container relative flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="mb-2 font-gilroy text-7xl font-extrabold leading-[1.2] tracking-[-0.72px] text-color-accent-primary md:text-9xl">
            404
          </h2>
          <p className="mb-6 w-[320px] text-center font-manrope text-[16px] font-medium tracking-[-0.16px] text-color-text-primary md:w-[420px] md:text-xl">
            {title}
          </p>
          <div className="flex items-center">
            <Link
              href="/"
              className="rounded-3xl bg-color-accent-primary px-7 py-4 font-gilroy text-xl font-extrabold text-color-secondary transition-all hover:bg-color-accent-primary/90 md:px-8 md:py-5 md:text-2xl"
            >
              {button}
            </Link>
          </div>
        </div>
        <Image
          src={balloons}
          width={700}
          height={700}
          alt={img}
          className="balloonsUp"
        />
      </div>
    </section>
  );
};

export default NotFound;
