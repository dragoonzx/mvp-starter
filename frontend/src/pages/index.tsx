import { ConnectKitButton } from 'connectkit';

import Header from '../components/Header';

function Page() {
  return (
    <>
      <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />

      <Header />

      <main className="flex w-full flex-col items-center justify-center py-32">
        <h1>wagmi + ConnectKit + Next.js</h1>
      </main>
    </>
  );
}

export default Page;
