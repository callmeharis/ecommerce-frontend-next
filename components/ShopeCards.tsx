import React from 'react';

const shops = [
  {
    name: 'Razin Shop',
    items: 25,
    categories: 12,
    rating: 5.0,
    isOnline: false,
    image: 'https://demo.readyecommerce.app/storage/shops/banner/m8CFxEJxTlk95ZOmUVtRmgUfBTUeYpbFSNJYSN5o.jpg',
  },
  {
    name: 'Easy Life',
    items: 16,
    categories: 4,
    rating: 5.0,
    isOnline: false,
    image: 'https://demo.readyecommerce.app/storage/shops/banner/kSYSdDRqB3H3CNFaXNCeLnmGsEBpBsktv6RhdeJk.png',
  },
  {
    name: 'Alesha Mart',
    items: 9,
    categories: 3,
    rating: 5.0,
    isOnline: false,
    image: 'https://demo.readyecommerce.app/storage/shops/banner/nWupcA0pf6K43FPxPeywYN5TVbPSqpGljZKyNnf3.jpg',
  },
  {
    name: 'Style Haven',
    items: 11,
    categories: 3,
    rating: 5.0,
    isOnline: false,
    image: 'https://demo.readyecommerce.app/storage/shops/banner/IOKTJkNTU5J8bruWGfJURymtmj4La4tLLNxAabsI.png',
  },
];

const ShopeCards = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Top Rated Shops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shops.map((shop, index) => (
            <div
              key={index}
              className="bg-pink-700 text-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="rounded-t-lg w-full h-28 object-cover"
                />
                <span
                  className={`absolute top-2 right-2 px-2 py-1 text-xs rounded ${
                    shop.isOnline ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                >
                  {shop.isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold">{shop.name}</h3>
                <p className="text-sm">{shop.items}+ Items</p>
                <p className="text-sm">{shop.categories}+ Categories</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg">⭐</span>
                  <span className="ml-1">{shop.rating}</span>
                </div>
                <button className="mt-3 bg-white text-pink-700 px-4 py-2 rounded font-medium hover:bg-gray-200 transition duration-300">
                  Visit Store →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopeCards;
