import Link from 'next/link';

import Logo from 'images/logo.svg';

import ListItem from './ListItem';

export default function Header() {
  return (
    <div className="absolute z-20 lg:z-10 w-full py-6 lg:py-12">
      <header className="max-w-full lg:max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="w-28">
            <Logo className="logo-style-1" />
          </div>
          <ul className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0">
            <ListItem href="/destinations" title="Destinations" />
            <ListItem href="/hotels" title="Hotels" />
            <ListItem href="/flights" title="Flights" />
            <ListItem href="/bookings" title="Bookings" />
            <ListItem href="/login" title="Login" />
            <li className="">
              <Link href="/sign-up">
                <a className="px-5 text-gray-800 py-1 border border-gray-800 rounded-md mx-3">
                  Sign up
                </a>
              </Link>
            </li>
            <li className="">
              <button className="px-9 text-gray-800 relative">
                EN
                <span className="absolute w-2 h-2 border-gray-800 border-b border-r transform rotate-45 translate-y-1/2 ml-2"></span>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
