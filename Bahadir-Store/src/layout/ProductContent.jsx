import CarouselSlider from "@/components/CarouselSlider";
import ContainerBanner from "@/components/ContainerBanner";
import ProductCard from "@/components/ProductCard";

function ProductContent() {
    return (
      <>
        <ProductCard></ProductCard>
        <CarouselSlider Index={1}></CarouselSlider>
        <ContainerBanner></ContainerBanner>
      </>
    );
  }
  
  export default ProductContent;