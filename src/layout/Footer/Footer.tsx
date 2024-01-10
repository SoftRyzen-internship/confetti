import { Logo } from '@/components/ui';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-[1px] py-6">
      <div className="container">
        <Logo location="footer" />
      </div>
    </footer>
  );
};
