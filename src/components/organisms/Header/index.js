import Link from 'next/link';

import Logo from 'images/logo.svg';

import ListItem from './ListItem';

export default function Header() {
  return (
    <div className="absolute z-20 w-full py-6 lg:z-10 lg:py-12">
      <header className="mx-auto max-w-full px-4 lg:max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="w-28">
            <Logo className="logo-style-1" />
          </div>
          <ul className="flex flex-col items-center gap-y-6 lg:flex-row lg:gap-y-0">
            <ListItem href="/destinations" title="Destinations" />
            <ListItem href="/hotels" title="Hotels" />
            <ListItem href="/flights" title="Flights" />
            <ListItem href="/bookings" title="Bookings" />
            <ListItem href="/login" title="Login" />
            <li className="">
              <Link href="/sign-up">
                <a className="mx-3 rounded-md border border-gray-800 px-5 py-2 text-gray-800">
                  Sign up
                </a>
              </Link>
            </li>
            <li className="">
              <button className="relative px-9 text-gray-800">
                EN
                <span className="absolute ml-2 h-2 w-2 translate-y-1/2 rotate-45 transform border-b border-r border-gray-800"></span>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
