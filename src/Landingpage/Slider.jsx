import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/assets/8c73de66df62137a87965984d13f15a440569042.jpg",
      title: "Nature - Inspired",
      subtitle: "ELEVATE YOUR PRATICE",
      description:"Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.",
    },
    {
      id: 2,
      image: "/assets/First.webp",
      title: "Nature - Inspired",
      subtitle: "ELEVATE YOUR PRATICE",
      description:"Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.",
    },
    {
      id: 3,
      image: "/assets/Second.webp",
      title: "Nature - Inspired",
      subtitle: "ELEVATE YOUR PRATICE",
      description:"Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.",
    },
    {
      id: 4,
      image: "/assets/Third.webp",
      title: "Nature - Inspired",
      subtitle: "ELEVATE YOUR PRATICE",
      description:"Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full min-h-screen">
      <div className="relative w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`bg-cover bg-center px-6 sm:px-10 md:px-20 lg:px-35 absolute w-full min-h-screen transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0"}`}
            style={{ backgroundImage: `url('${slide.image}')` }}>
            <div
              className="absolute inset-0 z-0"
              style={{background:"linear-gradient(90.64deg, rgba(0,0,0,0.65) 5.47%, rgba(0,0,0,0) 95.31%)"}}/>

            <div className="relative z-20 text-white min-h-screen flex flex-col items-start justify-center px-4">
              <h1
                className="tracking-[18%] text-sm sm:text-base md:text-xl font-normal">
                {slide.subtitle}
              </h1>

              <h1
                className="font-bold tracking-[-5%] text-3xl sm:text-4xl md:text-5xl lg:text-[62px]">
                {slide.title}
              </h1>

              <h1
                className="font-normal text-base sm:text-lg md:text-[20px] max-w-xl md:max-w-2xl mt-2">
                {slide.description}
              </h1>

              <button
                className="bg-[#01C6B5] w-32 sm:w-36 h-12 sm:h-14.25 text-base sm:text-[20px] font-medium mt-6">
                Shop now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
