import Image from 'next/image';

import { homeContent } from '@/data/home-content';
import { SectionLink } from '@/components/shared/section-link';

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1f2d17]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2d17]/30 via-[#1f2d17]/35 to-[#1f2d17]/70" />
      </div>

      <div className="relative mx-auto flex min-h-[88svh] w-full max-w-7xl items-center justify-center px-6 py-24 text-center md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <div className="mb-5 text-xs uppercase tracking-[0.35em] text-white/80 md:text-sm">
            Grădină educațională • natură • respect • învățare vie
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Vis de Verde
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-white/60" />

          <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl leading-tight text-white md:text-4xl md:leading-tight">
            {hero.quote}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <SectionLink
              href={hero.primaryButton.href}
              label={hero.primaryButton.label}
              variant="ghost"
            />
            <SectionLink
              href={hero.secondaryButton.href}
              label={hero.secondaryButton.label}
              variant="solid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}