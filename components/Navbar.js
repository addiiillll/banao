// components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [hobbiesOpen, setHobbiesOpen] = useState(false);
  const router = useRouter();

  const defaultLogo = '/HobbyCue Logo.png';
  const newPageLogo = '/HobbyCue Logo v2 1.png'; // Change this to the path of your new page logo

  const isDefaultLogo = router.pathname !== '/new';
  const currentLogo = isDefaultLogo ? defaultLogo : newPageLogo;
  const logoSize = isDefaultLogo ? { width: 200, height: 200 } : { width: 60, height: 60 };

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <span className="flex items-center">
                <Image
                  height={logoSize.height}
                  width={logoSize.width}
                  priority
                  quality={100}
                  src={currentLogo}
                  alt="HobbyCue Logo"
                />
              </span>
            </Link>
            <div className="hidden md:block relative w-64 h-10">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full h-full pl-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#8064A2]"
              />
              <button className="absolute right-0 top-0 h-full bg-[#8064A2] text-white px-3 rounded-r-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <DropdownNavItem
              text="Explore"
              icon="explore"
              isOpen={exploreOpen}
              setIsOpen={setExploreOpen}
              items={['People - Community', 'Places - Venues', 'Programs - Events', 'Products - Store']}
            />
            <DropdownNavItem
              text="Hobbies"
              icon="hobbies"
              isOpen={hobbiesOpen}
              setIsOpen={setHobbiesOpen}
              items={['Photography', 'Music', 'Dance', 'Art', 'Cooking']}
            />
            <NavItem href="#" icon="bookmark" />
            <NavItem href="#" icon="notification" />
            <NavItem href="#" icon="cart" />
            <Link href={'/signin'} className="bg-white text-[#8064A2] border border-[#8064A2] px-4 py-2 rounded-md hover:bg-[#8064A2] hover:text-white transition duration-300">
              Sign In
            </Link>
          </div>

          <div className="md:hidden flex flex-row space-x-4">
            <NavItem href="#" icon="search" />
            <NavItem href="#" icon="notification" />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#8064A2]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white h-[48px] w-[360px]">
          <div className="space-y-2">
            <MobileDropdownNavItem
              text="Explore"
              icon="explore"
              items={['People - Community', 'Places - Venues', 'Programs - Events', 'Products - Store']}
            />
            <MobileDropdownNavItem
              text="Hobbies"
              icon="hobbies"
              items={['Photography', 'Music', 'Dance', 'Art', 'Cooking']}
            />
            <NavItem href="#" icon="bookmark" text="Bookmark" />
            <NavItem href="#" icon="notification" text="Notifications" />
            <NavItem href="#" icon="cart" text="Cart" />
            <Link href="#" className="block bg-white text-[#8064A2] border border-[#8064A2] px-4 py-2 rounded-md hover:bg-[#8064A2] hover:text-white transition duration-300">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavIcon({ icon }) {
  const icons = {
    explore: <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />,
    hobbies: <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2V7H7v5H5V5z" clipRule="evenodd" />,
    bookmark: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />,
    notification: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />,
    cart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
    search: <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
      {icons[icon]}
    </svg>
  );
}

function NavItem({ href, icon, text }) {
  return (
    <Link href={href} className="text-[#8064A2] hover:text-[#8064A2] font-medium flex items-center">
      <NavIcon icon={icon} />
      {text && <span>{text}</span>}
    </Link>
  );
}

function DropdownNavItem({ text, icon, isOpen, setIsOpen, items }) {
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#8064A2] hover:text-[#8064A2] font-medium flex items-center"
      >
        <NavIcon icon={icon} />
        {text}
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
          {items.map((item, index) => (
            <Link key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileDropdownNavItem({ text, icon, items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-[#8064A2] hover:text-[#8064A2] font-medium flex items-center justify-between">
        <span className="flex items-center">
          <NavIcon icon={icon} />
          {text}
        </span>
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4 py-2 space-y-2">
          {items.map((item, index) => (
            <Link key={index} href="#" className="block text-sm text-gray-700 hover:text-[#8064A2]">
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}