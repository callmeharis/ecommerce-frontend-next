import React from "react";

const Headertop: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="bg-pink-700 text-white py-3">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <a href="#" className="text-sm">Become a Seller</a>
            <span className="text-sm">Hotline: 01963953998</span>
          </div>

          <div className="flex items-center">
            <select className="bg-pink-700 text-white w-[70px] sm:w-[120px] py-1 px-2 rounded-md outline-none">
              <option className="bg-white text-black" value="ESP">English</option>
              <option className="bg-white text-black " value="Bangla">Bengali</option>
              <option className="bg-white text-black" value="Arabic">Arabic</option>
              <option className="bg-white text-black" value="English">English</option>
            </select>
          </div>

        </div>
      </header>
    </div>
  );
};

export default Headertop;
