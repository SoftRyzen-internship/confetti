import { Logo } from '@/components/ui';

import { getStaticData } from '@/utils/helpers';

export default async function Home() {
  const {
    common: { layout },
  } = await getStaticData();

  return (
    <>
      <div className="container">
        <Logo label={layout.logo.label} location="footer" />
      </div>
    </>
  );
}
