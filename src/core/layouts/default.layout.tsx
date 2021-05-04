import React from 'react';
import { PageNav } from 'core/components/page/page-nav';
import './default.layout.scss';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <PageNav />
      <main className="main">{children}</main>
    </>
  );
}
