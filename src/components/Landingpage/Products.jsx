import React, { useState, useEffect } from "react";
import ProductCard from "../Common/ProductCard";
import { Product } from "../../utils/Datatype";

const Products = () => {
  

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) setVisibleCards(3);
      else if (window.innerWidth >= 640) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev >= Product.length - visibleCards ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? Product.length - visibleCards : prev - 1,
    );
  };

  return (
    <div className="max-w-285 mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-32.5 gap-6">
        <div>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black">
            Featured Products
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#414143]">
            Use this area to describe the collection.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-12.5 h-12.5 cursor-pointer hover:border-none flex justify-center items-center rounded-full border border-[#414143] hover:bg-[#01c6b5]  hover:text-white transition">
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.486 12.728L7.072 14.142L0 7.072L7.072 0L8.486 1.414L2.829 7.071L8.486 12.728Z"
                fill="currentColor"/>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12.5 h-12.5  cursor-pointer  hover:border-none flex justify-center items-center rounded-full border border-[#414143] hover:bg-[#01c6b5] hover:text-white transition">
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.000328064 1.41409L1.41433 9.05991e-05L8.48633 7.07009L1.41433 14.1421L0.000328064 12.7281L5.65733 7.07109L0.000328064 1.41409Z"
                fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="relative max-w-285 overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{transform: `translateX(-${startIndex * (100 / visibleCards)}%)`}}>
          {Product.map((Product, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 xl:w-1/3 flex-shrink-0 px-3">
              <ProductCard
                prize={Product.prize}
                image={Product.image}
                text={Product.text}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;