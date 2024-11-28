import React from "react";
const Headertop: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white py-3">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="#" className="mr-4 text-sm">Become a Seller</a>
            <span className="text-sm">Hotline: 01963953998</span>
          </div>
          <div className="flex gap-4">
            <select className="bg-red-600 text-white w-[70px]"
            >
                <option value="ESP">ESP</option>
                <option value="dds">dds</option>
                <option value="hin">hin</option>
                <option value="Khmer">Khmer</option>
                <option value="mr">mr</option>
                <option value="vi">vi</option>
                <option value="Bangla">Bangla</option>
                <option value="Arabic">Arabic</option>
                <option value="Chinese">Chinese</option>
                <option value="English">English</option>
              
            </select>
          </div>
        </div>
      </header>
      </div>
  );
};

export default Headertop;