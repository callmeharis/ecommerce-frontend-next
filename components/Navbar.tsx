import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Left: Categories Icon */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-bold">☰</span>
          </div>
          <span className="text-gray-800 font-medium">Categories</span>
        </div>

        {/* Center: Links */}
        <ul className="flex space-x-8 text-sm font-medium">
          <li className="text-pink-500 border-b-2 border-pink-500">
            <a href="#">Home</a>
          </li>
          <li className="text-gray-600 hover:text-pink-500 transition">
            <a href="#">Shops</a>
          </li>
          <li className="text-gray-600 hover:text-pink-500 transition">
            <a href="#">Most Popular</a>
          </li>
          <li className="text-gray-600 hover:text-pink-500 transition">
            <a href="#">Best Deal</a>
          </li>
          <li className="text-gray-600 hover:text-pink-500 transition">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Right: App Download */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">📱</span>
          <button className="text-gray-800 hover:text-pink-500 transition">
            Download our app
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

