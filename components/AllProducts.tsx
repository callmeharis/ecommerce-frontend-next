"use client";
import React, { useState } from "react";
const productsData = [
  {
    title: "Cat Snacks",
    price: 45,
    imageSrc: "https://demo.readyecommerce.app/storage/products/hovInJGLB37LAX6WhZ6Try78BpPGWxhBJ81sOCwn.jpg",
    rating: 5,
    sold: 0,
  },
  {
    title: "Vernonle Super Slide Rush Hour",
    price: 29,
    imageSrc: "https://demo.readyecommerce.app/storage/products/cm6V4T5xIBOt7ao1SAzdOd4vPruK3vqCOvJ2n6vu.jpg",
    rating: 5,
    sold: 0,
  },
  {
    title: "Orange Juice",
    price: 17,
    imageSrc: "https://demo.readyecommerce.app/storage/products/0HXqNtBnM1141O2QoZopIPJ7CWN3QrUNAei1U14v.jpg",
    rating: 5,
    sold: 0,
  },
  {
    title: "Echoes of Deception",
    price: 19,
    imageSrc: "https://demo.readyecommerce.app/storage/products/MHlrLAB9PmvkuSThT1BMhjoLLM6NOkHkUH00hJUh.jpg",
    rating: 5,
    sold: 0,
  },
  {
    title: "Sweet Bell Pepper",
    price: 49,
    imageSrc: "https://demo.readyecommerce.app/storage/products/QeCB0UHPaPye0qCvglskanFuueL2IMllKkGW3Mo3.jpg",
    rating: 5,
    sold: 0,
  },
  {
    title: "HDR 4K UHD Smart QLED TV",
    price: 319,
    imageSrc: "https://demo.readyecommerce.app/storage/products/Tod5utydaUUK1HX08bvg5QVpD0DRynYdon6BLhcG.jpg",
    rating: 5,
    sold: 0,
  },
  {
    title: "Women's Plaid Niche Bags",
    price: 49,
    imageSrc: "https://demo.readyecommerce.app/storage/products/4NNpBArHNZWLUfb1oe59IcpvLYNHa1QPZO4DkZmU.jpg",
    rating: 5,
    sold: 0,
  },
  {
    title: "Smart Watch",
    price: 121,
    imageSrc: "	https://demo.readyecommerce.app/storage/products/xdQ4KQbukHDYfx0RaxWrxRci31H1cDwVRS2iU8ga.jpg",
    rating: 5,
    sold: 0,
  },
  {
    title: "Wiltal Grille-pain",
    price: 19,
    imageSrc: "https://demo.readyecommerce.app/storage/products/TPSVRbrK2bcpRGBW9HB40kjanFggFORiNwDANAZ2.jpg",
    rating: 5,
    sold: 0,
  },
  {
    title: "oakley men's oo9406 sutro rectangular sunglasses",
    price: 1230,
    imageSrc: "https://demo.readyecommerce.app/storage/products/EhsX5jgmdqtyxP7aXRv6zFbdRombCKZ1aAiU9yst.jpg",
    rating: 5,
    sold: 0,
  },
  {
    imageSrc: "https://demo.readyecommerce.app/storage/products/r5dIuSkF8JTrz0DBrqrVcRdxewqs9xwMQQKCYmcw.png",
    title: "Fitbit Charge 6 Fitness Tracker",
    price: 1000,
    originalPrice: 1200,
    rating: 5,
    sold: 3,
    discount: 16.67,
  },
  {
    title: "Mens Premium Shirt Designer Edition - Urban",
    price: 1390,
    imageSrc: "	https://demo.readyecommerce.app/storage/products/kVTNCDcQCQXogtPnCHO7wEnGBOs9OvVRvsaADaLB.png",
    rating: 5,
    sold: 0,
  },
];
const AllProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 4, productsData.length));
  };
  return (
    <div className="py-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Just For You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {productsData.slice(0, visibleProducts).map((product, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between max-w-xs bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-pink-700 "
          >
            <div className="relative">
              <img
                src={product.imageSrc}
                alt={product.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h5 className="text-lg font-semibold">{product.title}</h5>
                <p className="text-gray-600">€{product.price}</p>
                <div className="flex items-center mt-2 text-yellow-500">
                  {"★".repeat(product.rating)}{" "}
                  {"☆".repeat(5 - product.rating)}
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.sold} Sold)
                  </span>
                </div>
              </div>
              <button className="w-full mt-4 text-pink-700 border border-pink-700 rounded-md py-2">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < productsData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreProducts}
            className="px-6 py-2 border border-pink-700 text-pink-700 font-semibold rounded-lg transition duration-300"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};
export default AllProducts;