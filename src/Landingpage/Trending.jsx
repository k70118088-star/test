import React from "react";
import TrendingCard from "../Comman/TrendingCard";

const Trending = () => {
  return (
    <div className="mb-16 md:mb-20">
      <div className="max-w-285 mx-auto px-4 sm:px-6 lg:px-4">
        <div
          className="flex flex-col md:flex-row justify-between md:items-center gap-6 mt-16 md:mt-35 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black leading-tight">
              Trending Product's
            </h1>
            <p className="mt-3 text-gray-600">
              Use this area to describe the collection.
            </p>
          </div>

          <div className="flex justify-center md:justify-end items-center gap-3">
            <button
              className="w-10 h-10 md:w-12.5 md:h-12.5 text-xl md:text-2xl rounded-full bg-white border border-[#414143] hover:bg-[#01C6B5] hover:text-white hover:border-none">
              &lt;
            </button>
            <button
              className="w-10 h-10 md:w-12.5 md:h-12.5 text-xl md:text-2xl rounded-full bg-white border border-[#414143] hover:bg-[#01C6B5] hover:text-white hover:border-none">
              &gt;
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 justify-items-center">
          <div className="w-full max-w-xs">
            <TrendingCard
              image={"/assets/img9.png"}
              price={"€42.00"}
              title={"Ultra Shaping Leggings"}
            />
          </div>

          <div className="w-full max-w-xs">
            <TrendingCard
              image={"/assets/img10.png"}
              price={"€50.00"}
              title={"Horts and One-Strap Bra"}
            />
          </div>
          <div className="w-full max-w-xs">
            <TrendingCard
              image={"/assets/img11.png"}
              price={"€33.00"}
              title={"Sleeveless Sports Jacket"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
