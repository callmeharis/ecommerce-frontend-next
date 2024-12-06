import React from 'react';

const Dealcards: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Fitbit Charge 6 Fitness Tracker with Google apps, Heart Rate on Exercise Equipment, 6-Months Premium Membership Included, GPS',
      image: 'https://demo.readyecommerce.app/storage/products/r5dIuSkF8JTrz0DBrqrVcRdxewqs9xwMQQKCYmcw.png',
      price: 1000,
      originalPrice: 1200,
      discount: 0,
      rating: 5,
      sold: 0,
    },
    {
      id: 2,
      name: 'Sony A6400 Mirrorless Camera With 18-135mm Lens',
      image: 'https://demo.readyecommerce.app/storage/products/ni1ggveAxCqClzpDh45hBjUHcLj9FYhYbCdtQDfO.jpg',
      price: 1800,
      originalPrice: 1800,
      discount: 0,
      rating: 5,
      sold: 0,
    },
    {
      id: 3,
      name: 'Microlab M108BT Bluetooth 2.1 Speaker',
      image: 'https://demo.readyecommerce.app/storage/products/mCVO42ZzPfHJQgzOHIPQGTnpitPKrechnSmXDW3t.jpg',
      price: 35,
      originalPrice: 35,
      discount: 0,
      rating: 5,
      sold: 0,
    },
    {
      id: 4,
      name: 'Industrial Touch Control Table Lamp with 3 Way Dimmable LED, USB Ports and AC Outlet',
      image: 'https://demo.readyecommerce.app/storage/products/0gQOgMunYkTNoOoxFzEoexKxBGR2TvrpEP9OOyKi.jpg',
      price: 2000,
      originalPrice: 2000,
      discount: 0,
      rating: 5,
      sold: 0,
    },
    {
        id: 5,
        name: 'iphone 14 pro max, 128GB, Midnight - Unlocked (Renewed)',
        image: 'https://demo.readyecommerce.app/storage/products/YnDbXLAs1Lj2w8g2UKK1eFLWJ0wbqiDeJEFUYN2r.jpg',
        price: 550,
        originalPrice: 550,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 6,
        name: 'Vision Multimedia Speaker DJ - 03 - 873240',
        image: 'https://demo.readyecommerce.app/storage/products/SOc1W1I9Q89I0WOiFKRkSeoTYsZQWY7Jjpq7TmrM.jpg',
        price: 130,
        originalPrice: 130,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 7,
        name: 'Canon EOS Rebel T3i 18.0MP Digital SLR Camera Kit - Black (5169B003)',
        image: 'https://demo.readyecommerce.app/storage/products/gTaN4totkHPVorI4zxQBwa5UhjGC6I6YryccDlWc.webp',
        price: 375,
        originalPrice: 380,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 8,
        name: 'LG 164 cm (65 inches) 4K Ultra HD Smart LED TV 65UR7500PSC (Dark Iron Gray)',
        image: 'https://demo.readyecommerce.app/storage/products/DuyveCLYjiNYLxTZ4PRAhkHQb4IN3CzREUrCQtv0.jpg',
        price: 750,
        originalPrice: 800,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 9,
        name: 'Sony WH-1000XM4 On Ear Wireless Headphones - Black Open Box',
        image: 'https://demo.readyecommerce.app/storage/products/rTWD1RsV12t3TdNIeZhZz6MTXsPd0QQk6IowBMZP.jpg',
        price: 270,
        originalPrice: 272,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 10,
        name: 'Swallowmall Mens Wallet Rfid Blocking Leather Wallet for Men Bifold Wallet Leather with 1 ID Window 16 Card Slot',
        image: 'https://demo.readyecommerce.app/storage/products/8hTzsSgDnwjRHHj9gs0WF1LZgvnzUeDnU3bt0ILL.jpg',
        price: 1399.99,
        originalPrice: 1499.99,
        discount: 0,
        rating: 5,
        sold: 0,
      },
      {
        id: 11,
        name: 'Dahua DH-SD49225I-HC 2MP PTZ Night Vision Color Camera',
        image: 'https://demo.readyecommerce.app/storage/products/21Ic8SdoNqCjs1hGUKwxxL2KXMikniFgeVgEF1wE.jpg',
        price: 2500,
        originalPrice: 2800,
        discount: 300,
        rating: 0,
        sold: 0,
      },
      {
        id: 12,
        name: 'HP 15s-du3039TX 11th Gen i5-1135G7 2.4 to 4.2 GHz, 8 GB DDR4,1 TB HDD, Windows 11 Home, 15.6 FHD Laptop',
        image: 'https://demo.readyecommerce.app/storage/products/Odp9wYVeHm7IDrfsNNzr93ROl2YotJSkXY7P62cr.jpg',
        price: 805,
        originalPrice: 820,
        discount: 0,
        rating: 5,
        sold: 0,
      },

  ];

  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Best Deal</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
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

export default Dealcards;
