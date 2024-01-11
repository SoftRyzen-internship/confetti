//todo: TEMPORARY COMPONENT VERSION
import { ContactLinks, Logo } from '@/components/ui';
import { MenuBtn } from '@/components/ui';

export const Header: React.FC = () => {
  return (
    <header className="absolute left-0 top-0 w-full pt-[34px] md:pt-8 xl:pt-12">
      <div className="container">
        <div className="flex smOnly:justify-between">
          <MenuBtn />

          <div className="flex items-center md:ml-auto md:gap-[68px] xl:gap-[312px]">
            <Logo location="header" className="relative z-40" />

            <ContactLinks
              location={'header'}
              className={
                'relative z-40 text-xl tracking-[-0.2px] smOnly:hidden'
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};
