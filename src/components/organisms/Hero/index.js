import Link from 'next/link';

import DecorIntersect from 'images/decor-intersect-1.svg';
import DecorTextUnderline from 'images/text-decor.svg';
import IlustrationHero from './IlustrationHero';

export default function Hero() {
  return (
    <section className="relative mb-28">
      <span className="absolute right-0 top-0 bottom-0 h-screen w-5/12 text-accent-4">
        <DecorIntersect className="fill-accent-4" />
      </span>
      <div className="absolute -left-80 -top-10 h-96 w-96 rounded-full bg-accent-3/50 blur-3xl"></div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex">
          <div className="w-full pt-52 lg:w-6/12">
            <h1 className="mb-6 text-sm font-bold uppercase text-accent-2 lg:text-xl">
              Best Destinations around the world
            </h1>
            <h2 className="mb-8 font-serif text-4xl leading-tight tracking-tighter text-gray-900 lg:text-[84px] lg:leading-[89px]">
              Travel,{' '}
              <span className="relative">
                enjoy
                <span className="absolute left-0 top-full -z-10 -mt-3 -ml-4 lg:-mt-8">
                  <DecorTextUnderline className="h-1 w-[100px] fill-accent-2 lg:h-[12px] lg:w-[385px]" />
                </span>
              </span>{' '}
              and live a new and full life
            </h2>
            <p className="mb-8 max-w-lg text-sm leading-6 text-gray-500 lg:text-base lg:leading-8">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex">
              <Link href="/">
                <a className="mr-11 rounded-xl bg-accent-1 px-6 py-4 text-white shadow-[0_20px_35px] shadow-accent-1/10">
                  Find out more
                </a>
              </Link>
              <button className="flex items-center">
                <span className="mr-6 inline-flex items-center justify-center rounded-full bg-accent-2 px-4 py-4 text-white shadow-[0_15px_30px] shadow-accent-2/30">
                  <span className="material-icons">play_arrow</span>
                </span>
                <span className="hidden text-gray-500 lg:block">Play Demo</span>
              </button>
            </div>
          </div>
          <IlustrationHero />
        </div>
      </div>
    </section>
  );
}
