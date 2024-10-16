import { useState } from "react";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }
  return (
    <>
      <nav className="bg-white p-4 shadow-md gap-y-5">
        <div className="flex justify-around items-center">
          <h1 className="text-xl font-bold">Bahadır Store</h1>
          <div className="flex gap-7 items-center">
            <i className="fa fa-user"></i>
            <i className="fa fa-search"></i>
            <i className="fa fa-shopping-cart"></i>
            <button onClick={toggleHamburger}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>

        {hamburgerOpen && (
          <div className="flex flex-col items-center justify-center space-y-6 mt-8 text-4xl font-semibold">
            <a
              href=""
              className="block py-2 text-[#737373] hover:text-gray-900"
            >
              Home
            </a>
            <a
              href=""
              className="block py-2 text-[#737373] hover:text-gray-900"
            >
              Product
            </a>
            <a
              href=""
              className="block py-2 text-[#737373] hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href=""
              className="block py-2 text-[#737373] hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
