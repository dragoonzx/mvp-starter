import Link from 'next/link';
import React from 'react';
import { settings } from '../../settings';
import useScroll from '../../lib/hooks/use-scroll';
import classNames from 'classnames';

const NAV_MENU = [
  {
    title: 'Contact',
    href: settings.links.telegram,
    target: true,
  },
  {
    title: 'FAQ',
    href: '/our-mission#faq',
  },
  {
    title: 'About',
    href: '/our-mission',
  },
];

const HomeHeader = () => {
  const scrolled = useScroll(50);

  return (
    <header
      className={classNames(
        'w-fullbg-white/50 sticky top-0 z-30 px-8 py-4 backdrop-blur transition-all',
        scrolled ? 'border-b border-gray-200 ' : '',
      )}
    >
      <div className="mx-auto w-full max-w-[1740px]">
        <div className="mx-5 flex items-center justify-between">
          <Link href="/" className="font-display flex items-center text-2xl">
            <video
              src="/assets/earth.mp4"
              autoPlay
              muted
              playsInline
              loop
              width="40"
              height="40"
              className="mr-2 rounded-full"
            />
            <span>{settings.title}</span>
          </Link>
          <nav className="flex items-center">
            <ul className="flex items-center">
              {NAV_MENU.map((menu) => (
                <li key={menu.title} className="mr-8 hover:text-primary">
                  {menu.target ? (
                    <a href={menu.href} target="_blank" rel="noreferrer">
                      {menu.title}
                    </a>
                  ) : (
                    <Link href={menu.href}>{menu.title}</Link>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/app"
              className="btn-primary btn rounded-lg px-4 font-bold uppercase text-white"
            >
              Launch app
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
