import { ConnectKitProvider } from 'connectkit';
import type { AppProps } from 'next/app';
import * as React from 'react';
import { WagmiConfig } from 'wagmi';
import '../styles/globals.css';

import { client } from '../wagmi';
import LayoutBase from '../components/layout/LayoutBase';

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        theme="nouns"
        customTheme={{
          '--ck-connectbutton-color': 'var(--p)',
        }}
      >
        <LayoutBase>
          <Component {...pageProps} />
        </LayoutBase>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
