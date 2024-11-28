import React from 'react'

import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
const Headermain = () => {
  return (

<div className="container mx-auto py-5 flex items-center justify-between">
  {/* Logo Section */}
  <div>
    <img
      src="https://demo.readyecommerce.app/assets/logo.png"
      alt="Logo"
      className="h-auto w-auto max-h-12" // Normal size with a height limit
    />
  </div>
<div className="w-full sm:w-[300px] md:w-[450px] lg:w-[600px] relative">
  <input
    className="border-red-600 border p-2 px-4 rounded-lg w-full"
    type="text"
    placeholder="Enter any product name..."
  />
<BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" size={20}/>
</div>
<div className="hidden lg:flex gap-4 text-gray-500 text-[24px]"> {/* Icon size reduced to 24px */}
    <div className=" text-sm">Login</div>
  <BiUser />

  <div className="relative">
    <FiHeart />
    <div
  className="bg-red-600 rounded-full absolute top-0 right-0 w-[14px] h-[14px] 
             text-[10px] text-white grid place-items-center translate-x-1 translate-y-1"
>
  0
</div>
  </div>
  <div className="relative">
    <HiOutlineShoppingBag />
    <div
  className="bg-red-600 rounded-full absolute top-0 right-0 w-[14px] h-[14px] 
             text-[10px] text-white grid place-items-center translate-x-1 translate-y-1"
>
  0
</div>
  </div>
</div>
</div>     
  )
}
export default Headermain