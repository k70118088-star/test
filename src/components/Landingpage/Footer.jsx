import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#414143] flex flex-col items-center w-full px-6">
      <div className="w-full max-w-300 flex flex-col lg:flex-row justify-between gap-12 lg:gap-32 mt-16 mb-16">
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-white font-normal text-xl leading-[165%]">
            Eco-friendly yoga mats that blend-high performance.
          </h1>

          <p className="text-[#FAFAFA] font-medium mt-5 mb-5 text-xl">
            Follow us On :
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            
                <div className="w-9 h-9 border border-white text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
                  <FaYoutube size={17} />
                </div>
                 <div className="w-9 h-9 border border-white text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
                  <FaFacebookF size={17} />
                </div>
                 <div className="w-9 h-9 border border-white text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
                  <FaXTwitter size={17} />
                </div>
                 <div className="w-9 h-9 border border-white text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition">
                  <FaLinkedinIn size={17} />
                </div>
          </div>
        </div>

        <div
          className="
          flex flex-col sm:flex-row 
          gap-12 sm:gap-24 
          text-center lg:text-left
        "
        >
          <div className="flex flex-col gap-5">
            <h1 className="text-[#FAFAFA] font-medium text-xl">Quick Links</h1>

            <p className="text-[#FAFAFA] text-16">Leggings</p>
            <p className="text-[#FAFAFA] text-16">Women’s Clothing</p>
            <p className="text-[#FAFAFA] text-16">Men’s Clothing</p>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-[#FAFAFA] font-medium text-xl">Other links</h1>

            <p className="text-[#FAFAFA] text-16">Privacy Policy</p>
            <p className="text-[#FAFAFA] text-16">Terms of Service</p>
            <p className="text-[#FAFAFA] text-16">Terms of Service</p>
          </div>
        </div>
      </div>

      <div className="py-5 w-full text-center  gradient-border-top">
        <h1 className="text-[#FAFAFA] text-16">
          Copyright © 2025 Yogalis. All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
