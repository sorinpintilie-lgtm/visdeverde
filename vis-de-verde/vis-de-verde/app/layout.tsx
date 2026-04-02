import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { siteConfig } from '@/data/site-config';

import './globals.css';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ro">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
