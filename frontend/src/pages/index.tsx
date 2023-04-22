import Link from 'next/link';
import BaseSeparator from '../components/shared/BaseSeparator';
import Balancer from 'react-wrap-balancer';
import { settings } from '../settings';

function HomePage() {
  return (
    <div>
      <div className="container mx-auto text-center">
        <div className="mt-20 grid w-full grid-cols-2 gap-2">
          <div className="self-center">
            <Balancer>
              <h1 className="font-accent mx-auto max-w-3xl text-4xl font-bold leading-tight">
                You should see ice
              </h1>
            </Balancer>
            <p className="mt-4 text-xl font-semibold">
              It moves like{' '}
              <span className="text-primary"> it has a mind.</span>
            </p>
            <div className="mt-6 flex items-center justify-center">
              <Link href="/app" passHref legacyBehavior>
                <a className="btn-primary btn rounded-lg px-4 py-2 font-bold uppercase text-white">
                  try beta
                </a>
              </Link>
              <Link
                href="https://github.com/dragoonzx/supabacker"
                passHref
                legacyBehavior
              >
                <a className="btn-secondary btn ml-6 rounded-lg px-4 py-2 font-bold uppercase">
                  Github
                </a>
              </Link>
            </div>
          </div>
          <div style={{ height: '540px' }}>Interactive widget</div>
        </div>
      </div>
      <div className="mt-4">
        <BaseSeparator />
      </div>
      <div className="container mx-auto max-w-2xl text-center">
        <Balancer>
          <h2 className="font-accent mt-4 text-5xl font-bold leading-tight">
            Like it knows it killed the world once and got a taste for murder
          </h2>
        </Balancer>
        <Balancer>
          <p className="mt-6 text-lg">
            After the avalanche, it took us a week to climb out. Now, I don`t
            know exactly when we turned on each other, but I know that seven of
            us survived the slide... and only five made it out. Now we took an
            oath, that I`m breaking now. We said we`d say it was the snow that
            killed the other two, but it wasn`t. Nature is lethal but it doesn`t
            hold a candle to man.
          </p>
        </Balancer>
        <Link href="/our-mission" passHref legacyBehavior>
          <a className="btn-secondary btn mt-6 rounded-lg px-4 py-2 font-bold uppercase">
            Our mission
          </a>
        </Link>
      </div>
      <div className="mt-4">
        <BaseSeparator />
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-accent text-6xl font-bold">
              Try <span className="text-primary">{settings.title}</span> Beta
            </span>
            <p className="mt-8 max-w-xl">
              The latest research has determined that there are over 20 possible
              arrangements of the patterns on its stomach.Seedot looks exactly
              like an acorn when it is dangling from a tree branch. It startles
              other Pokémon by suddenly moving.{' '}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://discord.gg/4N7sWeYqHj"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary btn w-full rounded-lg px-4 py-2 font-bold uppercase"
            >
              Join Discord
            </a>

            <Link href="/app" legacyBehavior>
              <a className="btn-secondary btn mt-6 w-full rounded-lg px-4 py-2 font-bold uppercase">
                Check out our beta
              </a>
            </Link>
          </div>
        </div>
      </div>
      <BaseSeparator />
      <div className="container mx-auto max-w-2xl text-center ">
        <p className="font-accent text-left text-6xl font-bold">
          {settings.title} features
        </p>
        <div className="mt-8 grid grid-cols-3 gap-8 text-left">
          <div>
            <Balancer>
              <p className=" mb-2 text-lg font-semibold">The latest research</p>
            </Balancer>
            <Balancer>
              <p>
                Seedot looks exactly like an acorn when it is dangling from a
                tree branch. It startles other Pokémon by suddenly moving.
              </p>
            </Balancer>
          </div>
          <div>
            <Balancer>
              <p className=" mb-2 text-lg font-semibold">The latest research</p>
            </Balancer>
            <Balancer>
              <p>
                Seedot looks exactly like an acorn when it is dangling from a
                tree branch. It startles other Pokémon by suddenly moving.
              </p>
            </Balancer>
          </div>
          <div>
            <Balancer>
              <p className=" mb-2 text-lg font-semibold">The latest research</p>
            </Balancer>
            <Balancer>
              <p>
                Seedot looks exactly like an acorn when it is dangling from a
                tree branch. It startles other Pokémon by suddenly moving.
              </p>
            </Balancer>
          </div>
        </div>

        <p className="font-accent mt-10 text-right text-4xl font-bold">
          with <span className="text-primary">extra power</span> for Pokemons
        </p>
        <div className="mb-20 mt-8 grid grid-cols-3 gap-8 text-left">
          <div className=" col-start-2">
            <Balancer>
              <p className=" mb-2 text-lg font-semibold">The latest research</p>
            </Balancer>
            <Balancer>
              <p>
                Seedot looks exactly like an acorn when it is dangling from a
                tree branch. It startles other Pokémon by suddenly moving.
              </p>
            </Balancer>
          </div>
          <div>
            <Balancer>
              <p className=" mb-2 text-lg font-semibold">The latest research</p>
            </Balancer>
            <Balancer>
              <p>
                Seedot looks exactly like an acorn when it is dangling from a
                tree branch. It startles other Pokémon by suddenly moving.
              </p>
            </Balancer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
