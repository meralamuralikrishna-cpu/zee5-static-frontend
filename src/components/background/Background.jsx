import React, { useState, useEffect } from 'react';
import leoImage from '../../assets/leo.jpg';
import vikramImage from '../../assets/vikram.jpg';
import fastImage from '../../assets/fastandfurious.jpg';

const Background = () => {
  const slides = [
    {
      id: 0,
      title: 'Leo',
      subtitle: 'Bloody Sweet',
      image: leoImage,
    },
    {
      id: 1,
      title: 'Vikram',
      subtitle: 'Hitlist',
      image: vikramImage,
    },
    {
      id: 2,
      title: 'Fast & Furious',
      subtitle: 'Ride or Die',
      image: fastImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  return (
    <main className="w-full pt-2 pb-6 overflow-hidden flex flex-col items-center">
      <div className="w-full flex items-center justify-center gap-2.5 px-2 sm:px-4">
        
        <div 
          onClick={() => setCurrentIndex(prevIndex)}
          className="hidden lg:block w-[8%] h-[380px] rounded-lg overflow-hidden relative opacity-40 hover:opacity-70 transition-opacity cursor-pointer flex-shrink-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[prevIndex].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-3xl font-light">‹</span>
          </div>
        </div>

        <div className="w-full lg:w-[82%] max-w-[1400px] h-[340px] sm:h-[400px] md:h-[440px] rounded-xl overflow-hidden relative shadow-2xl flex-shrink-0 bg-[#161224]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0617] via-[#0f0617]/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0617]/80 via-transparent to-[#0f0617]/30 pointer-events-none" />

          <div className="absolute bottom-6 left-6 md:left-10 z-10 space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md">
              {slides[currentIndex].title}
            </h1>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              {slides[currentIndex].subtitle}
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button 
                type="button"
                className="h-[38px] px-4 rounded-[6px] bg-black/60 hover:bg-black/80 border border-white/40 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch</span>
              </button>

              <button 
                type="button"
                className="h-[38px] px-4 rounded-[6px] bg-white text-black hover:bg-zinc-200 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-current text-black" viewBox="0 0 24 24">
                  <path d="M4 17h16v2H4v-2zm1.2-2l-2.2-9 5 4.5L12 3l4 7.5 5-4.5-2.2 9H5.2z" />
                </svg>
                <span>BUY PLAN</span>
              </button>
            </div>
          </div>
        </div>

        <div 
          onClick={() => setCurrentIndex(nextIndex)}
          className="hidden lg:block w-[8%] h-[380px] rounded-lg overflow-hidden relative opacity-40 hover:opacity-70 transition-opacity cursor-pointer flex-shrink-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[nextIndex].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-3xl font-light">›</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              i === currentIndex
                ? 'w-4 h-1 bg-white rounded-full'
                : 'w-1 h-1 bg-zinc-600 rounded-full hover:bg-zinc-400'
            }`}
          />
        ))}
      </div>
    </main>
  );
};

export default Background;
