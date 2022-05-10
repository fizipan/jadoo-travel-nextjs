import Image from 'next/image';

import DecorPlus from 'images/decor-plus.svg';

import CardCategory from 'components/molecules/CardCategory';

export default function Category() {
  return (
    <section className="mb-32">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="absolute -top-10 h-36 w-36 lg:-right-10">
          <DecorPlus className="decor-plus" />
        </div>
        <div className="mb-16 flex flex-col text-center">
          <h3 className="mb-2 text-lg uppercase text-gray-500">CATEGORY</h3>
          <h2 className="font-serif text-5xl leading-snug text-gray-900">
            We Offer Best Services
          </h2>
        </div>
        <div className="flex text-gray-900">
          <CardCategory>
            <div className="relative mb-6 inline-flex h-28">
              <div className="absolute -right-11 z-10 translate-y-1/2 -translate-x-1/2">
                <Image
                  layout="fixed"
                  width={60}
                  height={60}
                  src="/images/satellite-dish.png"
                  alt="Satellite Dish"
                />
              </div>
              <div className="absolute bottom-0 left-5 h-12 w-12 -translate-x-1/2 rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-2xl bg-accent-4"></div>
            </div>
            <h4 className="mb-3 text-xl">Calculated Weather</h4>
            <p className="mb-8 px-8 text-gray-500">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </CardCategory>
          <CardCategory>
            <div className="relative mb-6 inline-flex h-28">
              <div className="absolute z-10 -translate-x-1/2">
                <Image
                  layout="fixed"
                  width={146}
                  height={133}
                  src="/images/plane.png"
                  alt="Plane"
                />
              </div>
              <div className="absolute bottom-8 -right-9 h-12 w-12 -translate-x-1/2 rounded-tl-md rounded-tr-md rounded-bl-2xl rounded-br-lg bg-accent-4"></div>
            </div>
            <h4 className="mb-3 text-xl">Best Flights</h4>
            <p className="mb-8 px-8 text-gray-500">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </CardCategory>
          <CardCategory>
            <div className="relative mb-6 inline-flex h-28">
              <div className="absolute -right-8 top-2 z-10 translate-y-1/2 -translate-x-1/2">
                <Image
                  layout="fixed"
                  width={40}
                  height={69}
                  src="/images/mic.png"
                  alt="Mic"
                />
              </div>
              <div className="absolute top-10 left-3 h-12 w-12 -translate-x-1/2 rounded-tl-md rounded-tr-2xl rounded-bl-lg rounded-br-md bg-accent-4"></div>
            </div>
            <h4 className="mb-3 text-xl">Local Events</h4>
            <p className="mb-8 px-8 text-gray-500">
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </CardCategory>
          <CardCategory>
            <div className="relative mb-6 inline-flex h-28">
              <div className="absolute -right-10 top-3 z-10 translate-y-1/2 -translate-x-1/2">
                <Image
                  layout="fixed"
                  width={50}
                  height={50}
                  src="/images/gear.png"
                  alt="Gear"
                />
              </div>
              <div className="absolute bottom-0 left-5 h-12 w-12 -translate-x-1/2 rounded-tl-md rounded-tr-lg rounded-bl-2xl rounded-br-md bg-accent-4"></div>
            </div>
            <h4 className="mb-3 text-xl">Customization</h4>
            <p className="mb-8 px-8 text-gray-500">
              We deliver outsourced aviation services for military customers
            </p>
          </CardCategory>
        </div>
      </div>
    </section>
  );
}
