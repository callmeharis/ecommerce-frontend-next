import React from "react";

const Herosection = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 px-4 lg:ml-20 py-6">
      {/* Main Banner */}
      <img
        className="w-full lg:w-4/6 max-h-[300px] md:max-h-[400px] object-contain rounded-lg shadow-md"
        src="https://demo.readyecommerce.app/storage/banners/WXu98g57ALn5cs6ZVhHtQeLmb9G1gMUFxBCWDSiD.jpg"
        alt="Main Banner"
      />
      {/* Side Images */}
      <div className="flex flex-col items-center justify-between gap-4">
        <img
          src="https://demo.readyecommerce.app/storage/flash_sales/9s4sbShhVJsnfN7lvolzygY1ehf3uMKA2YeKD3pR.png"
          alt="Flash Sale"
          className="w-full md:w-[250px] object-contain rounded-lg shadow-md"
        />
        <img
          src="https://demo.readyecommerce.app/storage/ads/tuFf1DDMt2n2S72tNyDaAHZtg1J57B55Ixv25xGv.jpg"
          alt="Ad"
          className="w-full md:w-[250px] object-contain rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Herosection;
