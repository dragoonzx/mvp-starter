import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { settings } from '../../settings';
import useScroll from '../../lib/hooks/use-scroll';
import classNames from 'classnames';
import { ConnectWallet } from '../shared/ConnectWallet';

const AppHeader = () => {
  const scrolled = useScroll(50);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <header
      className={classNames(
        'sticky top-0 z-30 w-full bg-white/50 px-8 py-4 backdrop-blur transition-all',
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
          <div>
            {mounted ? (
              <AnimatePresence>
                <ConnectWallet />
              </AnimatePresence>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
