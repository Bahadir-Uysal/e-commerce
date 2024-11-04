import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const user = useSelector((state) => state.client.user);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen);
  }
  return (
    <>
      <nav className="bg-white p-4 shadow-md gap-y-5">
        <div className="flex justify-around items-center">
          <Link to="/" className="text-xl font-bold">
            Bahadır Store
          </Link>
          
          <div className="flex gap-7 items-center">
            {/* User Profile */}
            <div className="relative">
              {user ? (
                <button 
                  onClick={() => setProfileOpen(!profileOpen)} 
                  className="flex items-center"
                >
                  <img 
                    src={user.gravatarUrl} 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full"
                  />
                </button>
              ) : (
                <Link to="/login">
                  <i className="fa fa-user"></i>
                </Link>
              )}

              {/* Profile Dropdown */}
              {profileOpen && user && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    {user.email}
                  </div>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Orders
                  </Link>
                  <button 
                    onClick={() => {/* Add logout handler */}}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            <i className="fa fa-search"></i>
            
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i>
            </Link>
            
            <button onClick={toggleHamburger}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Keeping your existing hamburger menu */}
        {hamburgerOpen && (
          <div className="flex flex-col items-center justify-center space-y-6 mt-8 text-4xl font-semibold">
            <Link
              to="/"
              className="block py-2 text-[#737373] hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block py-2 text-[#737373] hover:text-gray-900"
            >
              Product
            </Link>
            <Link
              to="/pricing"
              className="block py-2 text-[#737373] hover:text-gray-900"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-[#737373] hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
