import AllProducts from "@/components/AllProducts";
import Cards from "@/components/Cards";
import Categoryslider from "@/components/Categoryslider";
// import FlashSale from "@/components/FlashSale";
import Herosection from "@/components/Herosection";
import ProductsGrid from "@/components/ProductsGrid";
import ShopeCards from "@/components/ShopeCards";
export default function Home() {
  return (
    <div>
      <Herosection />
      <Cards />
      <Categoryslider />
      <ProductsGrid />
      <ShopeCards />
      <AllProducts />
    </div>
  );
}

