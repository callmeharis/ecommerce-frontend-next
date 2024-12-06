"use client"
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Center: Links */}
        <ul className="hidden lg:flex space-x-8 text-sm font-medium">
          <li className="text-pink-700 border-b-2 border-pink-700">
            <a href="#">Home</a>
          </li>
          <li className="text-gray-600 hover:text-pink-700 transition">
            <a href="#">Shops</a>
          </li>
          <li className="text-gray-600 hover:text-pink-700 transition">
            <a href="#">Most Popular</a>
          </li>
          <li className="text-gray-600 hover:text-pink-700 transition">
            <a href="#">Best Deal</a>
          </li>
          <li className="text-gray-600 hover:text-pink-700 transition">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Right: App Download */}
        <div className="hidden lg:flex items-center space-x-2">
          <span className="text-gray-600">📱</span>
          <button className="text-gray-800 hover:text-pink-700 transition">
            Download our app
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-gray-600 text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-50">
          <ul className="flex flex-col space-y-2 text-center text-sm font-medium py-4">
            <li className="text-pink-700">
              <a href="#">Home</a>
            </li>
            <li className="text-gray-600 hover:text-pink-700 transition">
              <a href="#">Shops</a>
            </li>
            <li className="text-gray-600 hover:text-pink-700 transition">
              <a href="#">Most Popular</a>
            </li>
            <li className="text-gray-600 hover:text-pink-700 transition">
              <a href="#">Best Deal</a>
            </li>
            <li className="text-gray-600 hover:text-pink-700 transition">
              <a href="#">Contact</a>
            </li>
            <div className="flex justify-center items-center space-x-2 mt-4">
              <span className="text-gray-600">📱</span>
              <button className="text-gray-800 hover:text-pink-700 transition">
                Download our app
              </button>
              <div className="flex items-center space-x-4">
            <select className="bg-pink-700 text-white w-[70px] sm:w-[120px] py-1">
            </select>
          </div>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
