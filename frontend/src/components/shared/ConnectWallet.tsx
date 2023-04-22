import { ConnectKitButton } from 'connectkit';

export const ConnectWallet = () => {
  return (
    <ConnectKitButton.Custom>
      {({
        isConnected,
        isConnecting,
        show,
        hide,
        address,
        ensName,
        chain,
        truncatedAddress,
      }) => {
        return (
          <button onClick={show} className="btn-primary btn">
            {isConnected ? ensName ?? truncatedAddress : 'Connect Wallet'}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
