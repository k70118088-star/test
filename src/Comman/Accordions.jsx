import React, { useState } from "react";

const Accordions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Our commitment to payment security",
      content:"All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express, and Discover.",
    },
    {
      title: "Our policy for returns and refunds",
      content:"We offer easy returns within 30 days of purchase. Refunds are processed within 5-7 business days.",
    },
    {
      title: "Product delivery times",
      content:"Orders are processed within 1-2 business days and delivered within 3-5 working days.",
    },
    {
      title: "Our warranty policy",
      content:"All products come with a 1-year warranty covering manufacturing defects.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 w-full px-4 sm:px-0">
      {data.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`w-full max-w-212.5 lg:w-212.25 transition-all duration-300 borderpx-4 sm:px-6 py-4 flex flex-col justify-center
            ${isOpen ? "lg:h-33.5 border-[#01C6B5] shadow-[0_0_8.4px_#0000001A]" : "lg:h-19 border-[#41414366]"}`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <h3 className="font-medium text-base sm:text-lg lg:text-xl leading-[169%]">
                {item.title}
              </h3>

              <svg
                className={`w-5 h-5 transition-transform duration-300 ${ isOpen ? "rotate-180" : ""}`}
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
              <p className="mt-3 font-normal text-sm sm:text-base leading-[160%] text-[#414143] lg:max-w-194.75">
                {item.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordions;
