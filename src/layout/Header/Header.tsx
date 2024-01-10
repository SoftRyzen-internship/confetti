//todo: TEMPORARY COMPONENT VERSION
import { Logo } from '@/components/ui';
import { MenuBtn } from '@/components/ui';

export const Header: React.FC = () => {
  return (
    <header className="border-b-[1px] py-6">
      <div className="container">
        <div className="flex justify-between">
          <MenuBtn />
          <Logo location="header" />
        </div>
      </div>
    </header>
  );
};
