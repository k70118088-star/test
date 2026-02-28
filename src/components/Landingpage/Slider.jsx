import React, { useState, useEffect } from "react";
import { Slides } from "../../utils/Datatype";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [Slides.length]);

  return (
    <section className="relative m-auto max-w-360">
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[787px] overflow-hidden">
        {Slides.map((Slide, index) => (
          <div
            key={Slide.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${Slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            <div className="relative z-20 flex items-center h-full">
              <div className="max-w-[1140px] mx-auto w-full px-4  text-white">
                <h2 className="text-xs sm:text-sm md:text-base tracking-widest uppercase">
                  {Slide.subtitle}
                </h2>

                <h1
                  className="mt-3 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[62px]"
                >
                  {Slide.title}
                </h1>

                <p
                  className="mt-4 max-w-[600px] text-sm sm:text-base md:text-lg leading-relaxed">
                  {Slide.description}
                </p>

                <button
                  className="mt-6 bg-teal-custom hover:bg-teal-600 transition-all duration-300 w-36 h-12 sm:w-40 sm:h-14 text-base sm:text-lg font-medium">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
