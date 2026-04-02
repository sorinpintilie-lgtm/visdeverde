import { siteConfig } from '@/data/site-config';

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-slate-600">
        <p>{siteConfig.name} — footer placeholder</p>
      </div>
    </footer>
  );
}
