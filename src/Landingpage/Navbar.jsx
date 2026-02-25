import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#01C6B5] py-4">
        <div className="max-w-310 mx-auto px-4 flex justify-between items-center">
          
          <h1 className="text-white text-lg font-semibold">
            Logo
          </h1>

          <div className="hidden md:flex gap-8 text-white">
            <p className="cursor-pointer hover:opacity-80">Home</p>
            <p className="cursor-pointer hover:opacity-80">Contact</p>
            <p className="cursor-pointer hover:opacity-80"><Link to={"/cart"}>Cart</Link></p>
          </div>

          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-end p-4">
          <button
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 px-6 text-lg">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Contact</p>
          <p className="cursor-pointer">Cart</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
