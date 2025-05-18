import  { useEffect } from 'react';
import Aurora from '../bg-style/Aurora';

const Hero = () => {
  useEffect(() => {
    const text = document.querySelector('.split-text');
    if (text) {
      const chars = text.textContent.split('');
      text.innerHTML = chars
        .map(
          (char, i) =>
            `<span style="display: inline-block; animation-delay: ${
              i * 0.05
            }s;">${char === ' ' ? ' ' : char}</span>`
        )
        .join('');
    }
  }, []);

  return (
    <div className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-24 xl:pb-36 2xl:pb-48 bg-black">
      <div className="absolute inset-0">
        <Aurora
          colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side: Text and Buttons */}
            <div className="w-full lg:w-1/2">
              <p className="mt-4 sm:mt-6 tracking-tighter text-white">
                <span className="split-text font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  The journey of a
                </span>
                <br />
                <span className="split-text font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  Passionate developer
                </span>
              </p>

              <h1 className="font-sans text-sm sm:text-base md:text-lg font-normal tracking-tight text-white text-opacity-70 py-9.5">
                Exploring the world of web development
              </h1>

              <div className="flex flex-col sm:flex-row items-center mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#aboutme"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-3 font-sans text-sm sm:text-base font-semibold transition-all duration-200 border-2 border-transparent rounded-full bg-white text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
                >
                  Get started
                </a>
                <a
                  href="https://doctor-appointment-booking-bice.vercel.app"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-5 py-2 sm:py-3 font-sans text-sm sm:text-base font-semibold transition-all duration-200 bg-transparent border-2 rounded-full text-white border-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
                >
                  <svg
                    className="w-4 sm:w-6 h-4 sm:h-6 mr-1 sm:mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                    />
                  </svg>
                  Visit my latest project
                </a>
              </div>
            </div>

               
              </div>
            </div>
          </div>
        </div>
   
  );
};

export default Hero;