import Image from 'next/image';

import { homeContent } from '@/data/home-content';
import { SectionLink } from '@/components/shared/section-link';
import { SectionShell } from '@/components/shared/section-shell';

export function HomeContactPreview() {
  const { contact } = homeContent;

  return (
    <SectionShell>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] bg-[#243126] p-8 text-white md:p-10 lg:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {contact.title}
          </h2>
          <div className="mt-5 h-px w-20 bg-white/30" />

          <div className="mt-8 space-y-4 text-base leading-8 text-white/90 md:text-lg">
            {contact.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-8">
            <SectionLink
              href={contact.button.href}
              label={contact.button.label}
              variant="ghost"
            />
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
          <Image src={contact.image} alt="" fill className="object-cover" />
        </div>
      </div>
    </SectionShell>
  );
}