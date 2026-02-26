import React from "react";
import ProductCard from "../Comman/ProductCard";

const Products = () => {
  return (
    <div className="max-w-285 mx-auto px-4 ">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center mt-16 md:mt-32 gap-6">
        <div>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black leading-[100%]">
            Featured Products
          </h1>
          <p className="mt-2 text-sm sm:text-base">
            Use this area to describe the collection.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="w-10 h-10 justify-center flex items-center sm:w-12.5 sm:h-12.5 text-xl sm:text-2xl rounded-full bg-white border border-[#414143] text-[#414143] hover:bg-[#01C6B5] hover:text-white hover:border-none transition">
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
          <button className="w-10 h-10 justify-center flex items-center sm:w-12.5 sm:h-12.5 text-xl sm:text-2xl rounded-full bg-white border border-[#414143] text-[#414143] hover:bg-[#01C6B5] hover:text-white hover:border-none transition">
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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-7">
        <ProductCard
          prize={"€14.95"}
          image={"/assets/image-Photoroom1.png"}
          text={"Round Yoga Mat"}
        />

        <ProductCard
          prize={"€14.95"}
          image={"/assets/image-Photoroom(13).png"}
          text={"Non-Slip Travel Yoga Mat"}
        />

        <ProductCard
          prize={"€31.95"}
          image={"/assets/image-Photoroom(14).png"}
          text={"Foldable Yoga Mat"}
        />
      </div>
    </div>
  );
};

export default Products;
