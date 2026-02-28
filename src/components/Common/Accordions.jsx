import React, { useState } from "react";
import { Data } from "../../utils/Datatype";

const Accordions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full px-4 sm:px-0">
      {Data.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`w-full max-w-212.5 lg:w-212.25 transition-all duration-300 border-2 sm:px-6 px-2 py-4 flex flex-col 
              ${
                isOpen
                  ? "lg:h-33.5 border-[#01C6B5] shadow-[0_0_8.4px_#0000001A]"
                  : "lg:h-19 border-[#41414366]"
              }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <h3 className="font-medium text-base sm:text-lg lg:text-xl leading-[169%]">
                {item.title}
              </h3>

              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {isOpen && (
              <div>
                <p className="mt-3 font-normal flex text-sm sm:text-base leading-[160%] text-[#414143] lg:max-w-194.75">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordions;
