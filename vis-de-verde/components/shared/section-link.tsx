import Link from 'next/link';

type SectionLinkProps = {
  href: string;
  label: string;
  variant?: 'solid' | 'outline' | 'ghost';
};

export function SectionLink({
  href,
  label,
  variant = 'solid',
}: SectionLinkProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300';

  const styles = {
    solid: 'bg-[#243126] text-white hover:bg-[#1b241d]',
    outline:
      'border border-[#243126]/20 bg-white/70 text-[#243126] hover:bg-white',
    ghost:
      'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15',
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {label}
    </Link>
  );
}