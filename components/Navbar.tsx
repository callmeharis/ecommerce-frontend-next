"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Categories Icon */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-bold">☰</span>
          </div>
          <span className="text-gray-800 font-medium hidden lg:block">
            Categories
          </span>
        </div>
        <ul className="hidden lg:flex space-x-8 text-sm font-medium">
          <li className="text-pink-700 border-b-2 border-pink-700">
            <a href="#">Home</a>
          </li>
          <Link href="/shops" className="text-gray-600 hover:text-pink-700 transition">
        Shops
      </Link>
      <Link href="/populars" className="text-gray-600 hover:text-pink-700 transition">
        Most Popular
      </Link>
      <Link href="/deal" className="text-gray-600 hover:text-pink-700 transition">
        Best Deal
      </Link>
      <Link href="/contact" className="text-gray-600 hover:text-pink-700 transition">
        Contact
      </Link>
        </ul>
        <div className="flex items-center justify-center  bg-gray-50">
      <div className="relative inline-block text-left">
        <button
          className="flex items-center bg-pink px-5 py-3 rounded-lg   hover:bg-pink-100 focus:outline-none  hover:ring-pink-400 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-3-3v6m9-6a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Download our app
          </span>
          <IoIosArrowDown
            className={`ml-2 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div
            className="absolute left-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <div
              className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-t-lg cursor-pointer transition-all duration-200"
            >
              <FaGooglePlay className="text-green-500 w-6 h-6" />
              <span className="text-gray-700 font-medium">Google Play</span>
            </div>
            <div
              className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-b-lg cursor-pointer transition-all duration-200"
            >
              <FaApple className="text-black w-6 h-6" />
              <span className="text-gray-700 font-medium">App Store</span>
            </div>
          </div>
        )}
      </div>
    </div>

        <button
          className="lg:hidden text-gray-600 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
