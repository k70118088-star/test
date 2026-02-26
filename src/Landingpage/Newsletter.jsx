import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full bg-[#F1F1F1] min-h-[454px] flex items-center">
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full">
          <div className="w-full lg:w-1/3 flex items-end justify-center h-full">
            <img
              src="/assets/img14.png"
              alt="model"
              className="h-[454px] object-contain"
            />
          </div>

          <div className="w-full max-w-[621px] text-center">
            <h2 className="text-[36px] max-w-[621px] lg:text-5xl font-semibold ">
              Subscribe To Our Newsletter
            </h2>

            <p className="mt-4 text-xl font-normal leading-[160%] max-w-[542px] text-[#6B6B6B] mx-auto">
              Get weekly updates on the newest design stories, case studies and
              tips right in your mailbox.
            </p>

            <div className="mt-8 flex  items-center border border-[#E5E5E5]  max-w-[420px] mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 sm:px-4 px-1 py-3 outline-none text-sm"
              />
              <button className="bg-[#00C4B4] text-white px-4 sm:px-8 py-3 text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex items-end justify-center h-full">
            <img
              src="/assets/img15.png"
              alt="bottle"
              className="h-[380px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
