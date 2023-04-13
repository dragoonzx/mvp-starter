import { ConnectKitButton } from 'connectkit';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Account } from './Account';
import { useAccount } from 'wagmi';

const Header = () => {
  const { isConnected } = useAccount();

  return (
    <div className="'border-b backdrop-blur-xl'z-30 sticky top-0 w-full border-gray-200 bg-white/50 transition-all">
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        <Link href="/" className="font-display flex items-center text-2xl">
          Logo
        </Link>
        <div>
          <AnimatePresence>
            {!isConnected ? <ConnectKitButton /> : <Account />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;
