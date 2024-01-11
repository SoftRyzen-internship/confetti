import { Logo } from '@/components/ui';

import data from '@/data/footer.json';

export const Footer: React.FC = () => {
  const { rights, link } = data;
  const { label, href } = link;
  return (
    <footer>
      <div className="container">
        <div className="footerLine relative flex flex-col items-center py-[32px] md:flex-row md:justify-between mdOnly:pb-[29px] mdOnly:pt-[25px]">
          <Logo location="footer" />
          <p className="font-manrope text-[16px] leading-[1.36] tracking-[-0.16px] text-color-primary  smOnly:mb-[8px] smOnly:mt-[16px]">
            {rights}
          </p>
          <a
            className="font-manrope text-[16px] leading-[1.36] tracking-[-0.16px] text-color-primary transition-all hover:text-color-accent-primary focus:text-color-accent-primary"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        </div>
      </div>
    </footer>
  );
};
