import React from "react";

const BlogCard = ({ image }) => {
  return (
    <div className="w-full max-w-91 lg:w-91 lg:h-124 mx-auto">
      
      <div className="w-full h-60 sm:h-72 lg:h-80.25">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-5 px-1">
        <p className="font-normal text-sm sm:text-base leading-[100%] text-[#414143]">
          May 25, 2025
        </p>

        <h1 className="mt-3.25 font-semibold text-lg sm:text-xl leading-[100%]">
          Our Origins in Movement
        </h1>

        <p className="mt-2 font-normal text-sm sm:text-base leading-[160%] text-[#414143]">
          Rooted in France, Yogaova™ emerged from a desire to bring more
          style, sustainability....
        </p>

        <a
          href="#"
          className="mt-2.25 font-medium text-sm sm:text-base leading-[160%] text-[#01C6B5] flex items-center gap-3"
        >
          Read More
          <span>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4977 6.05331C17.7906 5.76042 17.7906 5.28554 17.4977 4.99265L12.7248 0.21968C12.4319 -0.0732134 11.957 -0.0732135 11.6641 0.21968C11.3712 0.512573 11.3712 0.987447 11.6641 1.28034L15.9067 5.52298L11.6641 9.76562C11.3712 10.0585 11.3712 10.5334 11.6641 10.8263C11.957 11.1192 12.4319 11.1192 12.7248 10.8263L17.4977 6.05331ZM0 5.52298L-6.55671e-08 6.27298L16.9674 6.27298L16.9674 5.52298L16.9674 4.77298L6.55671e-08 4.77298L0 5.52298Z"
                fill="#01C6B5"
              />
            </svg>
          </span>
        </a>
      </div>

    </div>
  );
};

export default BlogCard;
