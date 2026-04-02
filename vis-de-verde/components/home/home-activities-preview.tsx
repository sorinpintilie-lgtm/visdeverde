import Image from 'next/image';

import { homeContent } from '@/data/home-content';
import { SectionLink } from '@/components/shared/section-link';
import { SectionShell } from '@/components/shared/section-shell';

export function HomeActivitiesPreview() {
  const { activities } = homeContent;

  return (
    <SectionShell>
      <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image src={activities.image} alt="" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1f2d17] md:text-5xl">
            {activities.title}
          </h2>
          <div className="mt-5 h-px w-20 bg-[#819173]/40" />

          <p className="mt-8 text-base leading-8 text-[#3b4b3d] md:text-lg">
            {activities.text}
          </p>

          <div className="mt-8 space-y-4 text-base leading-8 text-[#243126] md:text-lg">
            {activities.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="mt-8">
            <SectionLink
              href={activities.button.href}
              label={activities.button.label}
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}