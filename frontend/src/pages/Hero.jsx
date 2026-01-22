import { useEffect } from 'react';
import Spline from '@splinetool/react-spline'; // Import Spline
import Aurora from '../bg-style/Aurora';

const Hero = () => {
useEffect(() => {
  const textElements = document.querySelectorAll('.split-text');

  textElements.forEach((text) => {
    const words = text.textContent.trim().split(/\s+/);

    text.innerHTML = words
      .map((word, wordIndex) => {
        return `
          <span class="word">
            ${word
              .split('')
              .map(
                (char, charIndex) =>
                  `<span class="char" style="animation-delay:${
                    (wordIndex * 8 + charIndex) * 0.05
                  }s">${char}</span>`
              )
              .join('')}
          </span>
        `;
      })
      .join(' ');
  });
}, []);


  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Aurora
          colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Text and Buttons */}
          <div className="space-y-8">
            <div>
              <p className="split-text font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
                Beyond coding —
              </p>
              <p className="split-text font-serif italic font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight">
                a builder of possibilities
              </p>
            </div>

            <h1 className="font-sans text-base sm:text-lg md:text-xl font-light text-white/70 tracking-tight max-w-lg">
              Crafting innovative web solutions with creativity and precision
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#aboutme"
                className="inline-flex items-center justify-center px-6 py-3 font-sans text-base font-semibold text-black bg-white rounded-full hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Get Started
              </a>
              <a
                href="https://medilynk.vercel.app/"
                className="inline-flex items-center justify-center px-6 py-3 font-sans text-base font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                Visit My Latest Project
              </a>
            </div>
          </div>

          {/* Right side: Spline Component */}
          <div>
            <div className="relative w-full h-96  rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Spline scene="https://prod.spline.design/RMQizXKsYPcL-fch/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;