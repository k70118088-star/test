import React from "react";

const TrendingCard = ({ image, title, price }) => {
  return (
    <div className="w-full max-w-91 bg-white border border-black/5 p-4 hover:shadow-[0px_0px_51.3px_0px_#00000014]">
      <div className="relative bg-gray-200 w-full max-w-83 h-68.75 flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center cursor-pointer">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z"
              fill="#01C6B5"
            />
          </svg>
        </div>

        <img src={image} alt={title} className="w-full h-full object-cover " />
      </div>

      <div className="mt-5">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>

        <p className="text-gray-500 mt-2 max-w-83 text-sm leading-relaxed">
          Sculpting, slimming, supportive, stretchy, stylish, seamless
        </p>

        <div className="flex justify-between items-center mt-2.5">
          <p className="text-xl sm:text-2xl font-bold">{price}</p>

          <div className="flex gap-1 text-xl sm:text-2xl text-yellow-500">
            <span>★★★★</span>
          </div>
        </div>

        <button
          className="w-full border mt-2.5 border-black/70 text-black/70 bg-white py-3 font-medium text-base sm:text-lg 
                           hover:bg-[#01C6B5] hover:text-white hover:border-none"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default TrendingCard;
