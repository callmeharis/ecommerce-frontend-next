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
    <div className="bg-white border rounded-lg p-4 hover:border-pink-700 ">
      <div className="relative ">
        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-pink-700 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
        {/* Product Image */}
        <div className="w-full h-48 overflow-hidden group relative">
  <img
    src={imageSrc}
    alt={title}
    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
  />
</div>

      </div>
      {/* Product Details */}
      <div className="mt-4">
        <h3 className="text-sm md:text-base font-semibold truncate">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-pink-700 text-lg md:text-xl font-bold">
            €{price.toFixed(2)}
          </span>
          <span className="text-gray-400 text-sm md:text-base line-through">
            €{originalPrice.toFixed(2)}
          </span>
        </div>
        {/* Rating and Sold Info */}
        <div className="flex items-center text-yellow-500 mt-2">
          <span className="text-sm font-medium">{rating.toFixed(1)} ⭐</span>
          <span className="text-gray-500 ml-2 text-sm">{sold} Sold</span>
        </div>
        {/* Buy Now Button */}
        <button className="w-full mt-4 border border-pink-700 text-pink-700 py-2 rounded-lg text-sm md:text-base transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductsCards;
