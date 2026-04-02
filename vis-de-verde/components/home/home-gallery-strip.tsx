import Image from 'next/image';

import { homeContent } from '@/data/home-content';

export function HomeGalleryStrip() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-28 lg:px-12">
      <div className="grid gap-4 md:grid-cols-[1fr_1.15fr_1fr]">
        {homeContent.gallery.map((image, index) => (
          <div
            key={image}
            className={[
              'relative overflow-hidden rounded-[2rem]',
              index === 1 ? 'aspect-[4/5]' : 'aspect-[5/4]',
            ].join(' ')}
          >
            <Image src={image} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}