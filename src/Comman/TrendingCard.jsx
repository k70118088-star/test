import React from "react";

const TrendingCard = ({ image, title, price }) => {
  return (
    <div className="w-full max-w-91 bg-white border border-black/5 p-4 shadow-[0px_0px_51.3px_0px_#00000014]">
      <div className="relative bg-gray-200 w-full aspect-4/5 flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582Z"
              fill="#01C6B5"
            />
          </svg>
        </div>

        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-6">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>

        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          Sculpting, slimming, supportive, stretchy, stylish, seamless
        </p>

        <div className="flex justify-between items-center mt-6">
          <p className="text-xl sm:text-2xl font-bold">{price}</p>

          <div className="flex gap-1 text-xl sm:text-2xl text-yellow-500">
            <span>★★★★</span>
          </div>
        </div>

        <button
          className="w-full border mt-5 border-black/70 text-black/70 bg-white py-3 font-medium text-base sm:text-lg 
                           hover:bg-[#01C6B5] hover:text-white hover:border-none"
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default TrendingCard;
