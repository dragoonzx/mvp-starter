import { ReactElement } from 'react';
import NextHead from 'next/head';
import { settings } from '../../settings';
import HeadMeta from './HeadMeta';
import LayoutFooter from './LayoutFooter';
import HomeHeader from '../home/HomeHeader';
import { useRouter } from 'next/router';
import AppHeader from '../app/AppHeader';

const LayoutBase = ({ children }: { children: ReactElement }) => {
  const { route } = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      <NextHead>
        <title>{settings.title}</title>
        <HeadMeta />
      </NextHead>
      {route === '/' ? <HomeHeader /> : <AppHeader />}
      <main className="flex-1">{children}</main>
      <LayoutFooter />
    </div>
  );
};

export default LayoutBase;
