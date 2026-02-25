import React from "react";
import ProductCard from "../Comman/ProductCard";

const Products = () => {
  return (
    <div className="max-w-285 mx-auto px-4">
      
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
          <button
            className="w-10 h-10 sm:w-12.5 sm:h-12.5 text-xl sm:text-2xl rounded-full bg-white border border-[#414143] 
            hover:bg-[#01C6B5] hover:text-white hover:border-none transition"
          >
            &lt;
          </button>
          <button
            className="w-10 h-10 sm:w-12.5 sm:h-12.5 text-xl sm:text-2xl rounded-full bg-white border border-[#414143] 
            hover:bg-[#01C6B5] hover:text-white hover:border-none transition"
          >
            &gt;
          </button>
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
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

