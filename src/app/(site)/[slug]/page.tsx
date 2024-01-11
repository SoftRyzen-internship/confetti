import { Gallery, ServicesHero } from '@/sections';

import gallery from '@/data/gallery.json';
import hero from '@/data/services-hero.json';

export default async function ServicePage() {
  return (
    <>
      <ServicesHero {...hero['baby-shower']} />

      <Gallery title={gallery.titleServicePage} />
    </>
  );
}
