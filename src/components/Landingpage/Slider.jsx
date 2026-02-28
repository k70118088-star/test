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
    <div className="w-full h-[80vh]">
      <div className="relative w-full">
        {Slides.map((Slide, index) => (
          <div
            key={Slide.id}
            className={`bg-cover bg-center px-6 sm:px-10 md:px-20 lg:px-35 absolute w-full min-h-[80vh] transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0"}`}
            style={{ backgroundImage: `url('${Slide.image}')` }}>
            <div
              className="absolute inset-0 z-0"
              style={{background:"linear-gradient(90.64deg, rgba(0,0,0,0.65) 5.47%, rgba(0,0,0,0) 95.31%)"}}/>

            <div className="relative z-20 text-white min-h-[80vh] max-w-285 flex  items-center lg:px-14 md:px-8 px-4 ">
              <div>
              <h1
                className="text-sm sm:text-16 md:text-2xl leading-[100%] tracking-[18%] font-normal">
                {Slide.subtitle}
              </h1>

              <h1
                className="font-bold leading-[100%] mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[62px]">
                {Slide.title}
              </h1>

              <h1
                className="font-normal max-w-[595px] mt-4 leading-[160%] sm:text-lg md:text-[20px]">
                {Slide.description}
              </h1>

              <button
                className="bg-teal-custom  cursor-pointer w-32 sm:w-36 h-12 sm:h-14.25 text-16 sm:text-[20px] font-medium mt-6">
                Shop now
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

