import Head from 'next/head';
import Image from 'next/image';

import Header from 'components/organisms/Header';
import Hero from 'components/organisms/Hero';
import Category from 'components/organisms/Category';

import DecorRope from 'images/decor-rope.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jadoo</title>
        <meta
          name="description"
          content="travel app, life app, aplikasi jalan-jalan, pesan guide, dan sebagainya"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta
          property="og:url"
          content="https://jadoo-travel-nextjs.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jadoo" />
        <meta
          property="og:description"
          content="travel app, life app, aplikasi jalan-jalan, pesan guide, dan sebagainya"
        />
        <meta
          property="og:image"
          content="https://jadoo-travel-nextjs.vercel.app/aplikasi-travel-online.jpg"
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Content */}
      <main>
        <Hero />
        <Category />

        {/* Top Selling */}
        <section className="mb-28">
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="mb-16 flex flex-col text-center">
              <h3 className="mb-2 text-lg text-gray-500">Top Selling</h3>
              <h2 className="font-serif text-5xl leading-snug text-gray-900">
                Top Destinations
              </h2>
            </div>
            <div className="relative flex pr-10">
              <div className="absolute bottom-10 right-0 h-[252px] w-[96px]">
                <DecorRope className="stroke-gray-500" />
              </div>
              <div className="group relative z-20 w-4/12 cursor-pointer px-4">
                <div className="flex flex-col rounded-3xl bg-white pb-10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-great">
                  <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src="/images/destination-1.jpg"
                      alt="Destination 1"
                    />
                  </div>
                  <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                    <div className="flex justify-between px-5 pt-7">
                      <h6 className="text-lg">Rome, Italy</h6>
                      <h6 className="text-lg">$5,43k</h6>
                    </div>
                    <div className="flex items-center space-x-2 px-5 pt-4">
                      <span className="material-icons">near_me</span>
                      <p>10 Days Trip</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative z-20 w-4/12 cursor-pointer px-4">
                <div className="flex flex-col rounded-3xl bg-white pb-10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-great">
                  <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src="/images/destination-2.jpg"
                      alt="Destination 2"
                    />
                  </div>
                  <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                    <div className="flex justify-between px-5 pt-7">
                      <h6 className="text-lg">London, UK</h6>
                      <h6 className="text-lg">$4.2k</h6>
                    </div>
                    <div className="flex items-center space-x-2 px-5 pt-4">
                      <span className="material-icons">near_me</span>
                      <p>12 Days Trip</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative z-20 w-4/12 cursor-pointer px-4">
                <div className="flex flex-col rounded-3xl bg-white pb-10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-great">
                  <div className="relative h-96 overflow-hidden rounded-tr-3xl rounded-tl-3xl">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src="/images/destination-3.jpg"
                      alt="Destination 3"
                    />
                  </div>
                  <div className="rounded-tr-3xl rounded-tl-3xl text-gray-500">
                    <div className="flex justify-between px-5 pt-7">
                      <h6 className="text-lg">Full Europe</h6>
                      <h6 className="text-lg">$15k</h6>
                    </div>
                    <div className="flex items-center space-x-2 px-5 pt-4">
                      <span className="material-icons">near_me</span>
                      <p>28 Days Trip</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
