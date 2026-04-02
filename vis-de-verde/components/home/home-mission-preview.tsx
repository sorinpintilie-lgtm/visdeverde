import Image from 'next/image';

import { homeContent } from '@/data/home-content';
import { SectionLink } from '@/components/shared/section-link';
import { SectionShell } from '@/components/shared/section-shell';

export function HomeMissionPreview() {
  const { mission } = homeContent;

  return (
    <SectionShell soft>
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] lg:aspect-[4/5]">
          <Image src={mission.image} alt="" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1f2d17] md:text-5xl">
            {mission.title}
          </h2>
          <div className="mt-5 h-px w-20 bg-[#819173]/40" />

          <p className="mt-8 text-base leading-8 text-[#3b4b3d] md:text-lg">
            {mission.text}
          </p>

          <div className="mt-8">
            <SectionLink href={mission.button.href} label={mission.button.label} />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}