// src/components/Layout.jsx
import React from 'react';
import ScroolUpButton from '../Ui/ScroolUpButton/ScroolUpButton';
import ScroolToPriceButton from '../Ui/ScroolToPriceButton/ScroolToPriceButton';
import loadable from '@loadable/component';
import Menu from '../Header/Menu/Menu';
import { useLocation } from '@reach/router';
import { pickActive } from '../../utils/pickActive';

const LoadingFallback = () => (
  <div className="flex justify-center items-center py-8">
    <img src="/svg/load.svg" alt="Loading..." className="w-20 h-20" />
  </div>
);

const Footer = loadable(() => import('../Footer/Footer'), {
  fallback: <LoadingFallback />,
});

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const active = pickActive(pathname);
  return (
    <div id="site-root" className="min-h-screen flex flex-col">
      <Menu active={active} />
      <main className="flex-1">{children}</main>
      <ScroolUpButton />
      <Footer />
    </div>
  );
}
