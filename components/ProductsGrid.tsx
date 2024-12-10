import React from "react";
import ProductsCards from "./ProductsCards";

const ProductsGrid: React.FC = () => {
  const products = [
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
      imageSrc: "https://demo.readyecommerce.app/storage/products/ni1ggveAxCqClzpDh45hBjUHcLj9FYhYbCdtQDfO.jpg",
      title: "Sony A6400 Mirrorless Camera",
      price: 1800,
      originalPrice: 2000,
      rating: 5,
      sold: 1,
      discount: 10,
    },
    {
      imageSrc: "https://demo.readyecommerce.app/storage/products/gTaN4totkHPVorI4zxQBwa5UhjGC6I6YryccDlWc.webp",
      title: "Canon EOS Rebel T3i 18.0MP",
      price: 375,
      originalPrice: 380,
      rating: 5,
      sold: 0,
      discount: 1.32,
    },
    {
      imageSrc: "https://demo.readyecommerce.app/storage/products/YnDbXLAs1Lj2w8g2UKK1eFLWJ0wbqiDeJEFUYN2r.jpg",
      title: "iPhone 14 Pro Max, 128GB",
      price: 550,
      originalPrice: 700,
      rating: 5,
      sold: 0,
      discount: 21.43,
    },
    {
      imageSrc: "https://demo.readyecommerce.app/storage/products/DuyveCLYjiNYLxTZ4PRAhkHQb4IN3CzREUrCQtv0.jpg",
      title: "LG 164 cm (65 inches) 4K Ultra HD Smart LED TV 65UR7500PSC (Dark Iron Gray)",
      price: 750,
      originalPrice: 700,
      rating: 5,
      sold: 0,
      discount: 21.43,
    },
    {
      imageSrc: "https://demo.readyecommerce.app/storage/products/rTWD1RsV12t3TdNIeZhZz6MTXsPd0QQk6IowBMZP.jpg",
      title: "Sony WH-1000XM4 On Ear Wireless Headphones - Black Open Box",
      price: 270.0,
      originalPrice: 700,
      rating: 5,
      sold: 0,
      discount: 0.74,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
      {products.map((product, index) => (
        <ProductsCards key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
