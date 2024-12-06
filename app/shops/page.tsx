// pages/all-shops.tsx
import React from "react";

const AllShops = () => {
  const shops = [
    {
      name: "Razin Shop",
      items: "25+",
      categories: "12+",
      rating: "5.0",
      isOnline: false,
      image: "https://demo.readyecommerce.app/storage/shops/banner/m8CFxEJxTlk95ZOmUVtRmgUfBTUeYpbFSNJYSN5o.jpg", // Replace with actual image path
    },
    {
      name: "Alesha Mart",
      items: "9+",
      categories: "3+",
      rating: "5.0",
      isOnline: false,
      image: "https://demo.readyecommerce.app/storage/shops/banner/nWupcA0pf6K43FPxPeywYN5TVbPSqpGljZKyNnf3.jpg", // Replace with actual image path
    },
    {
      name: "Easy Life",
      items: "16+",
      categories: "4+",
      rating: "5.0",
      isOnline: false,
      image: "https://demo.readyecommerce.app/storage/shops/banner/kSYSdDRqB3H3CNFaXNCeLnmGsEBpBsktv6RhdeJk.png", // Replace with actual image path
    },
    {
      name: "Style Haven",
      items: "11+",
      categories: "3+",
      rating: "5.0",
      isOnline: false,
      image: "https://demo.readyecommerce.app/storage/shops/banner/IOKTJkNTU5J8bruWGfJURymtmj4La4tLLNxAabsI.png", // Replace with actual image path
    },
    {
        name: "Easy Fashion",
        items: "1+",
        categories: "0+",
        rating: "5.0",
        isOnline: false,
        image: "https://demo.readyecommerce.app/storage/shops/banner/Xw2k91UcYLWKyGycfbMSYordTzcbGPz2Hz05a1zu.jpg", // Replace with actual image path
      },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-8">All Shops</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shops.map((shop, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 w-full max-w-sm"
          >
            <div className="relative">
              <img
                src={shop.image}
                alt={shop.name}
                className="rounded-t-lg w-full h-40 object-cover"
              />
              {!shop.isOnline && (
                <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                  Offline
                </span>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <h3 className="text-lg font-bold">{shop.name}</h3>
              <span className="bg-yellow-300 text-sm px-2 py-1 rounded">
                ⭐ {shop.rating}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {shop.items} Items • {shop.categories} Categories
            </p>
            <button className="w-full mt-4 text-pink-700 border border-pink-700 rounded-md py-2">
                View Store
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShops;
