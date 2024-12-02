import React from "react";

interface ProductsCardsProps {
  imageSrc: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  sold: number;
  discount: number;
}

const ProductsCards: React.FC<ProductsCardsProps> = ({
  imageSrc,
  title,
  price,
  originalPrice,
  rating,
  sold,
  discount,
}) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        {discount > 0 && (
            <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
          />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-semibold truncate">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-pink-500 text-lg font-bold">€{price}</span>
          <span className="text-gray-400 line-through">€{originalPrice}</span>
        </div>
        <div className="flex items-center text-yellow-500 mt-2">
          <span className="text-sm font-medium">{rating} ⭐</span>
          <span className="text-gray-500 ml-2 text-sm">{sold} Sold</span>
        </div>
        <button className="w-full mt-4 border border-pink-500 text-pink-500 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductsCards;


