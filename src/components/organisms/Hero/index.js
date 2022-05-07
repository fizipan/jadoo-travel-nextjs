import Link from 'next/link';

import DecorIntersect from 'images/decor-intersect-1.svg';
import DecorTextUnderline from 'images/text-decor.svg';
import IlustrationHero from './IlustrationHero';

export default function Hero() {
  return (
    <section className="relative mb-28">
      <span className="absolute w-5/12 h-screen right-0 top-0 bottom-0 text-accent-4">
        <DecorIntersect className="fill-accent-4" />
      </span>
      <div className="w-96 h-96 bg-accent-3/50 rounded-full blur-3xl absolute -left-80 -top-10"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex">
          <div className="w-full lg:w-6/12 pt-52">
            <h1 className="text-accent-2 font-bold text-sm lg:text-xl uppercase mb-6">
              Best Destinations around the world
            </h1>
            <h2 className="text-gray-900 font-serif text-4xl lg:text-[84px] leading-tight lg:leading-[89px] tracking-tighter mb-8">
              Travel,{' '}
              <span className="relative">
                enjoy
                <span className="absolute left-0 top-full -mt-3 lg:-mt-8 -ml-4 -z-10">
                  <DecorTextUnderline className="w-[100px] lg:w-[385px] h-1 lg:h-[12px] fill-accent-2" />
                </span>
              </span>{' '}
              and live a new and full life
            </h2>
            <p className="text-gray-500 max-w-lg text-sm lg:text-base leading-6 lg:leading-8 mb-8">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>

            <div className="flex">
              <Link href="/">
                <a className="mr-11 bg-accent-1 shadow-accent-1/10 shadow-[0_20px_35px] px-6 py-4 text-white rounded-xl">
                  Find out more
                </a>
              </Link>
              <button className="flex items-center">
                <span className="mr-6 bg-accent-2 text-white inline-flex items-center justify-center px-4 py-4 rounded-full shadow-accent-2/30 shadow-[0_15px_30px]">
                  <span className="material-icons">play_arrow</span>
                </span>
                <span className="hidden lg:block text-gray-500">Play Demo</span>
              </button>
            </div>
          </div>
          <IlustrationHero />
        </div>
      </div>
    </section>
  );
}
