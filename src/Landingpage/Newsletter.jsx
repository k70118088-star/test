import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#F1F1F1] w-full px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-285 mx-auto py-12 lg:py-0">

        <div className="w-full max-w-93 lg:w-93 lg:h-113.75 mb-8 lg:mb-0">
          <img
            src="/assets/img14.png"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center flex flex-col items-center lg:px-8">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[100%]">
            Subscribe To Our Newsletter
          </h1>

          <p className="max-w-135.5 lg:max-w-135.5 mt-3 font-normal text-base sm:text-lg lg:text-xl leading-[160%] text-[#414143]">
            Get weekly updates on the newest design stories, case studies and tips right in your mailbox.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-37 w-full max-w-128.75 lg:w-128.75 p-2 lg:p-1.5 border border-[#4141431A]">
            
            <input
              type="text"
              placeholder="Email Address"
              className="w-full font-medium text-sm sm:text-base leading-[100%] outline-none"
            />

            <button className="w-full sm:w-auto font-medium text-sm sm:text-base lg:text-xl leading-[100%] text-white bg-[#01C6B5] py-3 sm:py-4 px-6.5">
              Subscribe
            </button>

          </div>
        </div>

        <div className="w-full max-w lg:w-93 lg:h-113.75 mt-8 lg:mt-0 flex items-center justify-center">
          <img
            src="/assets/img15.png"
            alt=""
            className="w-full max-w-79.5 lg:w-79.5 lg:h-96.25 object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Newsletter;
