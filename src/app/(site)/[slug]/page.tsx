import { Gallery } from '@/sections';

import gallery from '@/data/gallery.json';

export default async function ServicePage() {
  return (
    <>
      <section className="min-h-[300px] bg-slate-50 pt-[175px] md:pt-[264px] xl:pt-[280px] ">
        Hero
      </section>

      <Gallery title={gallery.titleServicePage} />
    </>
  );
}
