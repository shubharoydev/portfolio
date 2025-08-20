import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent backdrop-blur-lg">
      <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0">
            <a href="/" title="Shubha Roy" className="inline-flex">
              <svg
                width="163"
                height="36"
                viewBox="0 0 163 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-32 sm:w-40 md:w-48 pointer-events-none"
              >
                <g clipPath="url(#clip0_1159_11942)">
                  <path
                    d="M20.675 0C20.675 0 15.8246 1.92315..."
                    fill="#8D5B4C"
                  />
                  <path
                    d="M22.1838 2.89534C22.1838 2.89534..."
                    fill="#8D5B4C"
                  />
                  <text x="50" y="26" fontSize="20" fontFamily="Georgia, serif" fill="#FFFFFF">
                    Shubha Roy
                  </text>
                </g>
                <defs>
                  <clipPath id="clip0_1159_11942">
                    <rect width="163" height="36" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden relative z-50">
            <button
              type="button"
              className="p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-y-0 right-0 w-64  backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} aria-label="Close menu">
          
              </button>
            </div>
            <div className="flex flex-col items-start px-6 py-4 space-y-4 bg-black-800">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '#aboutme' },
                { label: 'Services', href: '#services' },
                { label: 'My Work', href: '#mywork' },
                { label: 'Contact', href: '#footer' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white hover:underline transition duration-200"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-4 py-2 mt-4 border-2 rounded-full text-black border-black hover:bg-black hover:text-white transition-all duration-200"
                onClick={toggleMenu}
              >
                Get started
              </a>
              <a
                href="#latest-project"
                className="inline-flex items-center justify-center px-4 py-2 mt-2 border-2 rounded-full text-black border-black hover:bg-black hover:text-white transition-all duration-200"
                onClick={toggleMenu}
              >
                <span className="mr-2">Visit my latest project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-10">
            <a href="/" className="text-white text-base hover:underline">𝙷𝚘𝚖𝚎</a>
            <a href="#aboutme" className="text-white text-base hover:underline">𝙰𝚋𝚘𝚞𝚝 𝚖𝚎</a>
            <a href="#mywork" className="text-white text-base hover:underline">𝙼𝚢 𝚆𝚘𝚛𝚔</a>
            <a
              href="#footer"
              className="inline-flex items-center justify-center px-4 py-2 border-2 rounded-full text-white border-white hover:bg-white hover:text-black transition-all duration-200"
            >
              𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝚖𝚎
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;