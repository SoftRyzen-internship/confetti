import { HeaderContent } from '@/components/base';

export const Header: React.FC = () => {
  return (
    <header className="absolute left-0 top-0 z-50 w-full pt-[34px] md:pt-8 xl:pt-12">
      <HeaderContent />
    </header>
  );
};
