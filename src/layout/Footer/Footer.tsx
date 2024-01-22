import { Logo } from '@/components/ui';

import data from '@/data/common.json';

export const Footer: React.FC = () => {
  const {
    layout: { footer },
  } = data;
  const {
    rights,
    link: { label, href },
  } = footer;
  return (
    <footer>
      <div className="container">
        <div className="footerLine relative flex flex-col items-center py-[32px] md:flex-row md:justify-between mdOnly:pb-[29px] mdOnly:pt-[25px]">
          <Logo className="smOnly:mb-[16px]" location="footer" />

          <p className="font-manrope text-[16px] leading-[1.36] tracking-[-0.16px] text-color-primary smOnly:mb-[8px]">
            {rights}
          </p>

          <a
            className="font-manrope text-[16px] leading-[1.36] tracking-[-0.16px] text-color-primary transition-all hover:text-color-accent-primary focus-visible:text-color-accent-primary"
            href={href}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {label}
          </a>
        </div>
      </div>
    </footer>
  );
};
