import CarouselSlider from "@/components/CarouselSlider";
import Navbar from "@/components/Navbar";


function Header() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-auto h-auto">
        <CarouselSlider>
         
        </CarouselSlider>
      </div>
    </>
  );
}

export default Header;
