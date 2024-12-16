"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import EmptyCart from "./Emptycarts";
import Authmodal from "./Authmodal";

const Headermain = (): JSX.Element => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsAuthModalOpen(true);
  };

  const closeModal = () => {
    setIsAuthModalOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto py-5 flex items-center justify-between">
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
          className="border border-pink-500 hover:border-pink-700 focus:border-pink-700 p-3 pr-12 rounded-lg w-full outline-none transition-all duration-300"
          type="text"
          placeholder="Enter any product name..."
        />
        <div className="absolute right-0 top-0 h-full w-12 bg-pink-700 flex items-center justify-center rounded-r-lg">
          <BsSearch className="text-white cursor-pointer" size={20} />
        </div>
      </div>

      {/* Icons and Actions */}
      <div className="hidden lg:flex gap-4 text-[15px]">
        {/* Login Button */}
        <div className="flex hover:text-pink-700 space-x-3">
          <button onClick={handleOpenModal} className="flex gap-2">
            Login
            <BiUser className="hidden lg:block text-2xl cursor-pointer" />
          </button>
          <Authmodal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>

        {/* Icons Section */}
        <div className="flex gap-4 items-center text-gray-500 text-lg">
          {/* Wishlist Icon */}
          <div className="relative" onClick={handleIconClick} style={{ cursor: "pointer" }}>
            <FiHeart className="text-gray-600 text-lg" />
            <div
              className="bg-pink-700 rounded-full absolute top-0 right-0 w-[17px] h-[17px] 
                     text-[10px] text-white flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
            >
              0
            </div>
          </div>
          {isAuthModalOpen && <Authmodal isOpen={isAuthModalOpen} onClose={closeModal} />}

          {/* Cart Icon */}
          <div className="relative">
            <div onClick={toggleCart} className="relative cursor-pointer">
              <HiOutlineShoppingBag className="text-gray-600 text-lg" />
              <div
                className="bg-pink-700 rounded-full absolute top-0 right-0 w-[17px] h-[17px] 
                     text-[10px] text-white flex items-center justify-center transform translate-x-1/2 -translate-y-1/2"
              >
                0
              </div>
            </div>

            {/* Slide-in Cart */}
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform ${
                isCartOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={toggleCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <EmptyCart /> {/* Render the Empty Cart component */}
            </div>

            {/* Background Overlay */}
            {isCartOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={toggleCart}
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headermain;
