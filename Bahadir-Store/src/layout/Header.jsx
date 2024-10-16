import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";

const slides = [
  "../../public/d491d421800e62998b9af7c838cc25d1.jpeg",
  "../../public/c0357746eb27e42fff6279478e2c8a48.jpeg",
  "../../public/d491d421800e62998b9af7c838cc25d1.jpeg",
  "../../public/d491d421800e62998b9af7c838cc25d1.jpeg",
];
function Header() {
  return (
    <>
      <Navbar></Navbar>

      <div className="w-auto h-auto">
        <Carousel slides={slides}>
         
        </Carousel>
      </div>
    </>
  );
}

export default Header;
