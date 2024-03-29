import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiPlantsAndAnimals } from "react-icons/gi";
// import { TiShoppingCart } from "react-icons/ti";
import { BsCartCheck } from "react-icons/bs";
import "./Style.css";

const Navbar = ({ cart,size, setShow }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    // Ensure cart is an array and not null or undefined
    if (Array.isArray(cart)) {
      // Calculate the total number of items in the cart
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartLength(totalItems);
    }
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/SearchItem/${searchItem}`);
    setSearchItem("");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-[#2dc653] sticky top-0 z-50 text-[#b76935] font-bold items-center dark:bg-gray-700 dark:border-gray-700">
      <div className="max-w-screen-xl  px-2 m-auto">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex-shrink-0">
            <Link
              to={"/"}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <GiPlantsAndAnimals className="font-extrabold text-3xl" />
              <span className="text-2xl font-bold md:text-lg lg:text-2xl whitespace-nowrap dark:text-white">
                BA Plants
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 items-center ">
              <li>
                <Link
                  to={"/"}
                  className="text-black hover:bg-green-600  px-3 py-4 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/plants"
                  className="text-black hover:bg-green-600 md:px-2 px-3 py-4 rounded-md"
                >
                  Plants
                </Link>
              </li>
              <li className="relative">
                <button
                  className="text-black hover:bg-green-600 md:px-2 px-3 py-4 rounded-md focus:outline-none"
                  onMouseEnter={toggleMenu}
                >
                  Categories
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 mt-1 text-black rounded-md shadow-lg dark:bg-gray-700">
                    <ul className="py-1">
                      <li>
                        <Link
                          to="/flowers"
                          className="text-black hover:bg-green-600 md:px-2 text-[10px] px-2 py-2 rounded-md"
                        >
                          Flowers
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Indoor_plants"
                          className="block text-[10px] md:px-2  px-2 py-2 text-gray-800 hover:bg-green-100 dark:hover:bg-gray-600"
                        >
                          Indoor plants
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Outdoor_plants"
                          className="block md:px-2 px-2 text-[10px] py-2 text-gray-800 hover:bg-green-100 dark:hover:bg-gray-600"
                        >
                          Outdoor plants
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/Services"
                  className="text-black hover:bg-green-600 px-2 md:px-2 py-4 rounded-md"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="text-black hover:bg-green-600 px-2 md:px-2 py-4 rounded-md"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/Login"
                  className="text-black hover:bg-green-600 px-2 md:px-2 py-4 rounded-md"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <form onSubmit={handleSubmit} className="search">
              <input
                className="search-bar align-center bg-red-black"
                type="text"
                placeholder="Search items"
                id="search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              />
            </form>

            <Link to="/Cart" className="flex items-center relative">
            <div className="cart " onClick={() => setShow(false)}>
          <span className='text black'>
          <span className="text-black bg-red-500">{size}</span>
            <BsCartCheck className='text-2xl text-black' />
          </span>
         
        </div>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="text-white hover:bg-gray-600 px-3 py-2 rounded-md focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 bg-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-18 left-0 w-full  bg-white rounded-md shadow-lg dark:bg-gray-700">
                <ul className="py-1 z-50">
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-600 dark:hover:bg-gray-600"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/plants"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-600 dark:hover:bg-gray-600"
                    >
                      Plants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Indoor_plants"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-600 dark:hover:bg-gray-600"
                    >
                      Indoor plants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Outdoor_plants"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-600 dark:hover:bg-gray-600"
                    >
                      Outdoor plants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/flowers"
                      className="text-black hover:bg-green-600 px-3 py-2 rounded-md"
                    >
                      Flowers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Services"
                      className="text-black hover:bg-green-600 px-3 py-2 rounded-md"
                    >
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/Contact"
                      className="text-black hover:bg-green-600 px-3 py-2 rounded-md"
                    >
                      Register Now
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
