import React from 'react';

const ProductCards: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Golf Ball Srixon AD 333',
      image: 'https://demo.readyecommerce.app/storage/products/3RbJ5LBoeD6dJTWbkFL6xfqL2r3k5iFaLBo8i9us.png',
      price: 325.58,
      originalPrice: 543.66,
      discount: 40.15,
      rating: 5,
      sold: 0,
    },
    {
      id: 2,
      name: 'Wholesale Cheap Price Carbon Fiber',
      image: 'https://demo.readyecommerce.app/storage/products/MunGxQQ36U3WViDAkXXcIxWnGSZICvNCLQulcJdO.webp',
      price: 8.2,
      originalPrice: 9.2,
      discount: 10.87,
      rating: 5,
      sold: 0,
    },
    {
      id: 3,
      name: 'wholesale cheap Telescopic fishing rod with 1.8m glass fiber Spinning',
      image: 'https://demo.readyecommerce.app/storage/products/EkqG7SIoNCrRAra64ivq23lnI6hsR2mSqqT1skd5.png',
      price: 105,
      originalPrice: 105,
      discount: 0,
      rating: 5,
      sold: 0,
    },
    {
      id: 4,
      name: 'Ice Fishing Gear Combo Complete Set with ice fishing rod and reel',
      image: 'https://demo.readyecommerce.app/storage/products/tuiIoWUBJBvOTOndfocutuNjqLY0qFiCoCUiYyGK.png',
      price: 105,
      originalPrice: 105,
      discount: 0,
      rating: 5,
      sold: 0,
    },
    {
        id: 5,
        name: 'COEOVO custom luxury private label wholesale nude',
        image: 'https://demo.readyecommerce.app/storage/products/eSBOh4zSYQTCaPoySGup6i5HK5evvKUNqTmM3c3G.png',
        price: 15.3,
        originalPrice: 15.3,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 6,
        name: '6Pcs Matte Liquid Lipstick',
        image: 'https://demo.readyecommerce.app/storage/products/pw18RMIUHUT9SKMGcGvkYRATrO1j6GiB9AxvzvWk.jpg',
        price: 101624,
        originalPrice: 101624,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 7,
        name: 'MyGlamm POPxo Makeup -Matte',
        image: 'https://demo.readyecommerce.app/storage/products/4GKWYd6yeO5jcp2L65WkhptjUnHFQMqMA4UBvYq6.jpg',
        price: 936,
        originalPrice: 936,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 8,
        name: 'mud mask acne moisturizing Green tea solid mask deep',
        image: 'https://demo.readyecommerce.app/storage/products/OF2UW4LZgkkNHTCwIxHFjnUvON20xD0G1xdMfQuB.webp',
        price: 60,
        originalPrice: 60,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 9,
        name: 'Wholesale Luxury Facial mask skin',
        image: 'https://demo.readyecommerce.app/storage/products/DWKd7hSAmSH75B632hYrZOU353X4hn71Ga7SrNWS.webp',
        price: 8.2,
        originalPrice: 8.2,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 10,
        name: 'Mask facial acne oem face skin care beauty',
        image: 'https://demo.readyecommerce.app/storage/products/dbB6wnZbOlV2k6syVE1JYXVqOGbkwiWwY97BCbnv.webp',
        price: 250,
        originalPrice: 250,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 11,
        name: 'Miss Rose Pro 132 Full Color Eyeshadow Palette',
        image: 'https://demo.readyecommerce.app/storage/products/nGAfbe3EG0Htt1qFbNdjJDREtAc3rHUdNV2GkhmJ.webp',
        price: 500,
        originalPrice: 500,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 12,
        name: 'wholesale 20 color cosmetic eye shadow aluminum',
        image: 'https://demo.readyecommerce.app/storage/products/bQnrFK9OSSIWCEzFnteSgbLfrV1AUoG9O6llOxcd.webp',
        price: 103,
        originalPrice: 103,
        discount: 0,
        rating: 5,
        sold: 0,
      },

  ];

  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Most Popular</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs bg-white overflow-hidden border border-transparent hover:border-pink-700 rounded-lg transition-all duration-300"
          >
               <div className="w-full h-48 overflow-hidden group relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>

            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 truncate">
                {product.name}
              </h2>
              <div className="flex items-center justify-between mt-2">
                <p className="text-red-500 font-bold">€{product.price}</p>
                {product.discount > 0 && (
                  <p className="line-through text-gray-500">
                    €{product.originalPrice}
                  </p>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {product.discount > 0 ? `${product.discount}% OFF` : ''}
              </p>
              <div className="flex items-center mt-3">
                <div className="flex items-center text-yellow-500">
                  <span className="material-icons">star</span>
                  <span className="ml-1 text-sm">{product.rating} (0)</span>
                </div>
                <p className="ml-auto text-sm text-gray-500">{product.sold} Sold</p>
              </div>
              <button className="w-full mt-4 text-pink-700 border border-pink-700 rounded-md py-2">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
