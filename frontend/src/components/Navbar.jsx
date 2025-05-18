import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white-100 backdrop-blur-sm">
      <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0">
            <a href="/" title="Shubha Roy" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              <svg width="163" height="36" viewBox="0 0 163 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 sm:w-40 md:w-48">
                <g clipPath="url(#clip0_1159_11942)">
                  <path d="M20.675 0C20.675 0 15.8246 1.92315 14.7012 6.86815C13.5564 11.8914 17.6883 16.0106 17.6883 16.0106C17.6883 16.0106 14.1627 17.1541 12.2395 21.0642C10.2734 25.0681 12.8965 30.7388 12.8965 30.7388C12.8965 30.7388 8.01458 30.8473 4.8694 33.5159C1.66077 36.2263 0 36 0 36C0 36 2.3588 30.9446 4.09817 28.4615C5.86356 25.9412 9.60889 22.9827 9.60889 22.9827C9.60889 22.9827 7.00358 18.9513 8.5218 14.3416C10.081 9.6384 14.5509 6.81894 14.5509 6.81894C14.5509 6.81894 13.5012 4.08288 14.0025 2.32394C14.5148 0.516613 16.5235 0 16.5235 0C16.5235 0 16.3254 1.31698 16.8759 2.12226C17.4046 2.9057 19.0164 2.96167 19.0164 2.96167C19.0164 2.96167 20.3474 2.7946 20.675 0Z" fill="#8D5B4C"/>
                  <path d="M22.1838 2.89534C22.1838 2.89534 26.2701 4.93511 27.4714 9.81697C28.6585 14.6224 24.7082 18.9467 24.7082 18.9467C24.7082 18.9467 28.3228 20.0727 30.2286 24.0741C32.1557 28.1064 29.4095 33.5971 29.4095 33.5971C29.4095 33.5971 34.3872 33.7087 37.5417 36.3164C40.7231 38.9498 42.3921 38.7177 42.3921 38.7177C42.3921 38.7177 40.0164 33.7015 38.2614 31.2301C36.4926 28.7342 32.7004 25.8252 32.7004 25.8252C32.7004 25.8252 35.2601 21.7314 33.7775 17.0645C32.2561 12.2797 27.8805 9.32584 27.8805 9.32584C27.8805 9.32584 28.9016 6.63239 28.3966 4.84955C27.8744 3.00431 25.8873 2.48904 25.8873 2.48904C25.8873 2.48904 26.0922 3.82352 25.5324 4.62927C24.982 5.42319 23.3799 5.47526 23.3799 5.47526C23.3799 5.47526 22.0494 5.29246 22.1838 2.89534Z" fill="#8D5B4C"/>
                  <text x="50" y="26" fontSize="20" fontFamily="Georgia, serif" fill="#FFFFFF">Shubha Roy</text>
                </g>
                <defs>
                  <clipPath id="clip0_1159_11942">
                    <rect width="163" height="36" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>

          <div className="md:hidden relative">
            <button
              type="button"
              className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-sm rounded-md shadow-lg z-50">
                <a href="/" className="block px-4 py-2 text-xs text-white hover:bg-gray-700 focus:underline focus:outline-none">Home</a>
                <a href="#about" className="block px-4 py-2 text-xs text-white hover:bg-gray-700 focus:underline focus:outline-none">About Me</a>
                <a href="#services" className="block px-4 py-2 text-xs text-white hover:bg-gray-700 focus:underline focus:outline-none">Services</a>
                <a href="#my-work" className="block px-4 py-2 text-xs text-white hover:bg-gray-700 focus:underline focus:outline-none">My Work</a>
                <a href="#footer" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Contact</a>
              </div>
            )}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-10 lg:ml-28">
            <a href="/" className=" text-20px text-white hover:underline focus:underline focus:outline-none transition-all duration-200">
            𝙷𝚘𝚖𝚎
            </a>
            <a href="#aboutme" className=" text-20px text-white hover:underline focus:underline focus:outline-none transition-all duration-200">
            𝙰𝚋𝚘𝚞𝚝 𝚖𝚎
            </a>
            <a href="#mywork" className=" text-20px text-white hover:underline focus:underline focus:outline-none transition-all duration-200">
            𝙼𝚢 𝚆𝚘𝚛𝚔
            </a>
            <a href="#footer" className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-3 font-sans text-sm sm:text-base font-normal leading-6 sm:leading-7 transition-all duration-200 border-2 rounded-full text-white border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:bg-white hover:text-black focus:ring-offset-black">
            𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝚖𝚎
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;