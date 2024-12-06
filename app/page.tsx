
import AuthModal from "@/components/AuthModal";
import Cards from "@/components/Cards";
import Categoryslider from "@/components/Categoryslider";
// import FlashSale from "@/components/FlashSale";
import Herosection from "@/components/Herosection";
import ProductsGrid from "@/components/ProductsGrid";
import ShopeCards from "@/components/ShopeCards";
export default function Home() {
  return (
    <div>
      <Herosection/>
       <Cards/>
       <Categoryslider/>
       <AuthModal/>
       {/* <div className="h-80 bg-pink-200 flex items-center justify-center mb-20">
      <FlashSale />
    </div> */}
    <ProductsGrid/>
    <ShopeCards/>
    
    </div>
  );
}

