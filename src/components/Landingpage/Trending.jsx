import React, { useState, useEffect } from "react";
import TrendingCard from "../Common/TrendingCard";
import { Trend } from "../../utils/Datatype";

const Trending = () => {
  

  const [cardsToShow, setCardsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(cardsToShow);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedProducts = [
    ...Trend.slice(-cardsToShow),
    ...Trend,
    ...Trend.slice(0, cardsToShow),
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(Trend.length);
      }, 500);
    }

    if (currentIndex === Trend.length + cardsToShow) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(cardsToShow);
      }, 500);
    }
  }, [currentIndex, cardsToShow, Trend.length]);

  useEffect(() => {
    setTransition(true);
  }, [currentIndex]);

  return (
    <div className="mb-20 overflow-hidden">
      <div className="max-w-285 mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-6 text-center md:text-left">
          <div>
            <h1 className="font-semibold text-3xl md:text-5xl">
              Trending Product's
            </h1>
            <p className="text-gray-600 text-xl  mt-3">
              Use this area to describe the collection.
            </p>
          </div>

          <div className="flex gap-3">
            <button
            onClick={prevSlide}
            className="w-12.5 h-12.5 hover:border-none flex justify-center items-center rounded-full border border-[#414143] hover:bg-[#01c6b5]  hover:text-white transition"
          >
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <path
                d="M8.486 12.728L7.072 14.142L0 7.072L7.072 0L8.486 1.414L2.829 7.071L8.486 12.728Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12.5 h-12.5 hover:border-none flex justify-center items-center rounded-full border border-[#414143] hover:bg-[#01c6b5]  hover:text-white transition"
          >
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.000328064 1.41409L1.41433 9.05991e-05L8.48633 7.07009L1.41433 14.1421L0.000328064 12.7281L5.65733 7.07109L0.000328064 1.41409Z"
                fill="currentColor"
              />
            </svg>
          </button>
          </div>
        </div>

        <div className="overflow-hidden max-w-285  mt-10">
          <div
            className={`flex  ${transition ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${(100 / cardsToShow) * currentIndex}%)`,
            }}
          >
            {extendedProducts.map((Trend, index) => (
              <div
                key={index}
                className="px-3.5"
                style={{ minWidth: `${100 / cardsToShow}%` }}
              >
                <TrendingCard
                  image={Trend.image}
                  price={Trend.price}
                  title={Trend.title}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Trending;
