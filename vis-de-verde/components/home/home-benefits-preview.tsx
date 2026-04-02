import Image from 'next/image';

import { homeContent } from '@/data/home-content';
import { SectionLink } from '@/components/shared/section-link';
import { SectionShell } from '@/components/shared/section-shell';

export function HomeBenefitsPreview() {
  const { benefits } = homeContent;

  return (
    <SectionShell cream>
      <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image src={benefits.image} alt="" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1f2d17] md:text-5xl">
            {benefits.title}
          </h2>
          <div className="mt-5 h-px w-20 bg-[#819173]/40" />

          <p className="mt-8 text-base leading-8 text-[#3b4b3d] md:text-lg">
            {benefits.intro}
          </p>

          <div className="mt-8 space-y-3 text-base leading-8 text-[#243126] md:text-lg">
            {benefits.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="mt-8">
            <SectionLink href={benefits.button.href} label={benefits.button.label} />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}