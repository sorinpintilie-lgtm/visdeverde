import Link from 'next/link';

import { navigation } from '@/data/navigation';
import { siteConfig } from '@/data/site-config';

export function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold">
          {siteConfig.name}
        </Link>

        <nav className="hidden gap-4 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
