import React from "react";
import {  Carttroly, Contact, Free, Search } from "../../../icons";
import { Link } from "react-router-dom";

const Headbar = () => {
  return (
    <div className="bg-[#F4F4F4] py-2">
      <nav className="max-w-310 mx-auto sm:px-4 px-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-0.5 sm:gap-2 text-sm sm:text-16 text-center sm:text-left">
          <Free />
          <span className="font-normal leading-[100%] text-[#414143]">
            Free delivery & free returns within 15 days
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Search />
          <Contact />
          <Link to={"/cart"}>
            <Carttroly />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Headbar;
