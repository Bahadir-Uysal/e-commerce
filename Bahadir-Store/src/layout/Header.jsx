import { useState } from "react";

function Header() {
    const [hamburgerOpen,setHamburgerOpen] = useState(false);

    function toggleHamburger(){
        setHamburgerOpen(!hamburgerOpen)
    }
  return (
    <>
      <nav className= "bg-white p-4 shadow-md">
        <div className="flex justify-around items-center">
          <h1 className="text-xl font-bold">Bahadır Store</h1>
          <div className="flex gap-7">
            <i className="fa fa-user"></i>
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-cart"></i>
            <button onClick={toggleHamburger} >
            <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>

        {hamburgerOpen && (
            <div className="flex flex-col items-between">
            <a href="">Home</a>
            <a href="">Product</a>
            <a href="">Pricing</a>
            <a href="">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
