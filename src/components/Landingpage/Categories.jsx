import React from "react";
import CategoriesCard from "../Common/CategoriesCard";
import { CategoriesData } from "../../utils/Datatype";

const Categories = () => {
  

  return (
    <div className="mt-16 md:mt-28 max-w-285 min-h-276.75 flex items-center justify-center m-auto lg:mt-35">
      <div className="max-w-285 mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black leading-tight">
              Shop Our Categories
            </h1>
            <p className="mt-3 text-xl text-gray-600">
              Use this area to describe the collection.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <button className="font-medium  hover:bg-teal-600 transition-all duration-300 cursor-pointer text-16 md:text-lg text-white py-3 md:py-4 px-6 bg-teal-custom  whitespace-nowrap">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 m-auto lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 md:mt-12 justify-items-center">
          {CategoriesData.map((item) => (
            <div className="w-full max-w-[309px]" key={item.id}>
              <CategoriesCard
                image={item.image}
                text={item.text}
                prize={item.prize}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
