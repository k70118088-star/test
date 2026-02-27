import React from "react";
import Accordions from "../Common/Accordions";

const Questions = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-0">
      <div className="max-w-285 mx-auto mb-20 sm:mb-28 lg:mb-35">
        <div className="flex flex-col mt-16 sm:mt-24 lg:mt-32.5 justify-center items-center">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-black leading-[100%]">
            Frequently Asked Questions
          </h1>

          <p className="mt-3 font-normal text-16 sm:text-lg lg:text-xl leading-[160%] text-[#414143] max-w-2xl">
            Real Questions. Expert Answers. Total Confidence.
          </p>

          <div className="mt-10 sm:mt-12 lg:mt-15 w-full flex justify-center">
            <div className="w-full max-w-4xl">
              <Accordions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
