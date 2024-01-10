//todo: TEMPORARY COMPONENT VERSION

import Link from 'next/link';

import { Logo } from '@/components/ui';

const slugs = [
  'baby-shower',
  'baptism',
  'birthday',
  'balloons',
  'valentines',
  'corporate',
  'wedding',
];

export const Header: React.FC = () => {
  return (
    <header className="border-b-[1px] py-6">
      <div className="container">
        <div className="flex justify-between">
          <Logo location="header" />

          <ul className="flex w-1/2 flex-wrap gap-2">
            {slugs.map((slug, index) => (
              <li key={index}>
                <Link href={`/services/${slug}`} className="outline-dashed">
                  {slug}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
