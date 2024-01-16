import { About, Gallery, Review, Services, Hero, Contacts } from '@/sections';

import gallery from '@/data/gallery.json';

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery title={gallery.titleHomePage} />
      <Review />
      <Contacts />
    </>
  );
}
