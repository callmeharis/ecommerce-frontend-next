import React from 'react';

const categories = [
  {
    name: 'Beauty',
    image: 'https://demo.readyecommerce.app/storage/categories/oqR2OKCBebHikPXge9B8L6ASZXb295nEgm8FgPat.jpg',
  },
  {
    name: 'Sports & Entertainment',
    image: 'https://demo.readyecommerce.app/storage/categories/2qkBbejkG4c3XHbVtjfLFjLwHcMVdgO3g5vwCLwo.jpg',
  },
  {
    name: 'Sports & Outside',
    image: 'https://demo.readyecommerce.app/storage/categories/sHeMKmakLfgCKTPf7LWDAMMvDHk4BG133PkHFRIo.jpg',
  },
  {
    name: 'Home Appliances',
    image: 'https://demo.readyecommerce.app/storage/categories/WW9ACeqE3y5Q5EBqMWSaSALhCn5ake2YFiSKg2Hu.jpg',
  },
  {
    name: 'Gadgets',
    image: 'https://demo.readyecommerce.app/storage/categories/l3AKoCF1HQDoCPQQNwAVPvejK2W390lvGLaMCv81.jpg',
  },
  {
    name: 'Cloth',
    image: 'https://demo.readyecommerce.app/storage/categories/bMnz1IkImlWknZMhyL4c3Au1RdhVCOcEtzdi1tV7.jpg',
  },
  {
    name: 'Electronics',
    image: 'https://demo.readyecommerce.app/storage/categories/pvPReNRch9w6OFsMlqrGQGjLyvrvlAyUsrFlO80q.jpg',
  },
  {
    name: 'Food',
    image: 'https://demo.readyecommerce.app/storage/categories/BMWheqQskaPa08lFPmnQJgyeCAAeIWkYVlPxt4yf.jpg',
  },
  {
    name: 'Books & Stationary',
    image: 'https://demo.readyecommerce.app/storage/categories/hQhP4eXWy9ranqjPJWr6F4gFJtPZfpjtd6hZyCcQ.jpg',
  },
  {
    name: 'Groceries',
    image: 'https://demo.readyecommerce.app/storage/categories/lbdtsMMPokJWPl5Wyrc46QUkLeiQgnRJ9rDMyhq8.jpg',
  },
];

const CategorySlider = () => {
  return (
    <div className=" py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex justify-between items-center mb-4">
          <button className="text-gray-600 hover:text-gray-900">&larr;</button>
          <span className="text-sm text-pink-600 font-medium cursor-pointer">View All</span>
          <button className="text-gray-600 hover:text-gray-900">&rarr;</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[100px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[180px] flex flex-col items-center rounded-lg p-4  hover:border hover:border-pink-600 cursor-pointer "
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover mb-2 transition-transform duration-300 hover:scale-105"
              />
              <p className="text-xs sm:text-sm font-medium text-gray-700 text-center hover:text-pink-700 ">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
