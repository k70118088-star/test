import React from "react";
import CategoriesCard from "../Comman/CategoriesCard";

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      image: "/assets/9fa415d236432df598298422a6fb394a57ee81f9.png",
      title: "Insulated Sports Bottle",
      price: "€14.95",
    },
    {
      id: 2,
      image: "/assets/087daefeba53ea5ccc868731aec132c15c840864.png",
      title: "Women's Long Wavy",
      price: "€14.95",
    },
    {
      id: 3,
      image: "/assets/6523d2e4c72f35e41b57a170211f70fc229da345.png",
      title: "Acupressure Mat",
      price: "€44.95",
    },
    {
      id: 4,
      image: "/assets/778259374fb47e067d73a7ad9817965d46eef8cc.png",
      title: "Liberty Pattern Socks",
      price: "€13.95",
    },
    {
      id: 5,
      image: "/assets/img1.png",
      title: "Mat Bag with Pocket",
      price: "€26.95",
    },
    {
      id: 6,
      image: "/assets/img2.png",
      title: "Tibetan Singing Bowls",
      price: "€35.95",
    },
    {
      id: 7,
      image: "/assets/img3.png",
      title: "Soft Yoga Cushion",
      price: "€22.95",
    },
    {
      id: 8,
      image: "/assets/img4.png",
      title: "Cotton Yoga Pants",
      price: "€44.95",
    },
    {
      id: 9,
      image: "/assets/img5.png",
      title: "Women's Long Wavy",
      price: "€14.95",
    },
    {
      id: 10,
      image: "/assets/img6.png",
      title: "Travel Yoga Bag",
      price: "€23.95",
    },
    {
      id: 11,
      image: "/assets/img7.png",
      title: "Yoga Workout Shorts",
      price: "€31.95",
    },
    {
      id: 12,
      image: "/assets/img8.png",
      title: "Cork Yoga Mat",
      price: "€44.95",
    },
  ];

  return (
    <div className="mt-16 md:mt-28 max-w-285 min-h-276.75 flex items-center justify-center m-auto lg:mt-35">
      <div className="max-w-285 mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-black leading-tight">
              Shop Our Categories
            </h1>
            <p className="mt-3 text-gray-600">
              Use this area to describe the collection.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              className="font-medium text-base md:text-lg text-white py-3 md:py-4 px-6 bg-[#01C6B5] whitespace-nowrap">
              View All
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 md:mt-12 justify-items-center">
          {categoriesData.map((item) => (
            <div className="w-full max-w-xs" key={item.id}>
              <CategoriesCard
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
