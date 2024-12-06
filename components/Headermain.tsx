import React from "react";

import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Headermain = () => {
  return (
    <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Logo Section */}
      <div>
        <img
          src="https://demo.readyecommerce.app/assets/logo.png"
          alt="Logo"
          className="h-auto w-auto max-h-12"
        />
      </div>

      {/* Search Bar */}
      <div className="w-full sm:w-[300px] md:w-[450px] lg:w-[600px] relative">
        <input
          className="border border-pink-600 p-2 px-4 rounded-lg w-full"
          type="text"
          placeholder="Enter any product name..."
        />
        <BsSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <div className="flex gap-4 items-center text-gray-500 text-lg cursor:pointer; hover:text-pink-700">
  {/* User/Login */}
  <div className="flex items-center gap-2 ">
    <button className="hidden lg:block text-sm">Login</button>
    <BiUser className="hidden lg:block text-2xl cursor-pointer" />
  </div>

  {/* Favorites */}
  <div className="relative inline-flex items-center">
  <FiHeart className="text-2xl text-gray-500" />
  <div className="bg-pink-700 rounded-full absolute top-0 right-0 w-[17px] h-[17px] text-[11px] text-white grid place-items-center transform translate-x-[50%] translate-y-[-30%]">
    <div className=" absolute m-auto">
      0
    </div>
  </div>
</div>
  {/* Cart */}
  <div className="relative inline-flex items-center">
  <HiOutlineShoppingBag className="text-2xl text-gray-500" />
  <div className="bg-pink-700 rounded-full absolute top-0 right-0 w-[17px] h-[17px] text-[11px] text-white grid place-items-center transform translate-x-[50%] translate-y-[-30%]">
    <div className=" absolute m-auto">
      0
    </div>
  </div>
</div>
</div>

    </div>
  );
};

export default Headermain;
