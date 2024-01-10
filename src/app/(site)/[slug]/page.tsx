import { Gallery } from '@/sections';

import gallery from '@/data/gallery.json';

export default async function ServicePage() {
  return (
    <>
      <Gallery title={gallery.titleServicePage} />
    </>
  );
}
