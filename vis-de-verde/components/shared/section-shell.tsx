import { ReactNode } from 'react';

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  soft?: boolean;
  cream?: boolean;
};

export function SectionShell({
  children,
  className = '',
  soft = false,
  cream = false,
}: SectionShellProps) {
  return (
    <section
      className={[
        soft ? 'bg-white/60' : '',
        cream ? 'bg-[#ece4d7]' : '',
        className,
      ].join(' ')}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-12">
        {children}
      </div>
    </section>
  );
}