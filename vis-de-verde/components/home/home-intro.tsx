import Image from 'next/image';

import { homeContent } from '@/data/home-content';
import { SectionLink } from '@/components/shared/section-link';
import { SectionShell } from '@/components/shared/section-shell';

export function HomeIntro() {
  const { intro } = homeContent;

  return (
    <SectionShell>
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1f2d17] md:text-5xl">
            {intro.title}
          </h2>
          <div className="mt-5 h-px w-20 bg-[#819173]/40" />

          <p className="mt-8 max-w-3xl text-base leading-8 text-[#3b4b3d] md:text-lg">
            {intro.text}
          </p>

          <div className="mt-8">
            <SectionLink href={intro.button.href} label={intro.button.label} />
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image src={intro.image} alt="" fill className="object-cover" />
        </div>
      </div>
    </SectionShell>
  );
}