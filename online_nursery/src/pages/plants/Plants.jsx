import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Plants = ({ items, setCart, cart = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  const itemsPerPage = 6;

  const addToCart = (id, image, name, category, price) => {
    // Check if the item already exists in the cart
    const isItemInCart = cart.some(item => item.id === id);

    // If the item is already in the cart, display a message and return early
    if (isItemInCart) {
      toast.warning('Item is already in cart', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    // If the item is not in the cart, add it to the cart
    const obj = {
      id,
      image,
      name,
      category,
      price
    };

    setCart([...cart, obj]);

    toast.success('Item added to cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (!items) {
    return <div>Loading...</div>; // Return a loading indicator if items is not defined
  }

  // Logic for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page navigation
  const paginate = (pageNumber) => {
    setIsLoading(true); // Show loading bar
    setCurrentPage(pageNumber);
    setTimeout(() => {
      setIsLoading(false); // Hide loading bar after a timeout (simulating data loading)
      if (currentItems.length < itemsPerPage) {
        setAllItemsLoaded(true); // Set all items loaded when the last page is reached
      }
    }, 1000);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <section className="text-gray-600 body-font bg-whitesmoke shadow-2xl border-zinc-950 rounded-b-lg">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map((plant) => (
              <div className="border border-[#aaa] rounded-lg" key={plant.id}>
                <div className='flex justify-center items-center'>
                  <Link to={`/plants/${plant.id}`} className="w-full rounded-t-lg relative h-48 overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block hover:scale-125 duration-1000"
                      src={plant.image}
                    />
                  </Link>
                </div>
                <div className="mt-4 shadow-xl rounded-lg p-4">
                  <h3 className="text-gray-500 text-xs tracking-widest name-font mb-1">
                    {plant.category}
                  </h3>
                  <h2 className="text-gray-900 name-font text-lg font-medium">
                    {plant.name}
                  </h2>
                  <p className="mt-1">{plant.price}</p>
                  <button
                    onClick={() => addToCart(plant.id, plant.image, plant.name, plant.category, plant.price)}
                    className="bg-green-700 w-[100%] rounded-xl hover:bg-transparent hover:border hover:border-green-600 hover:text-green-600 text-white p-2 my-2"
                    category="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          {isLoading && <div>Loading...</div>}
          {!isLoading && allItemsLoaded && <div>No more items</div>}
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1 || isLoading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
            &laquo; Previous 
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentItems.length < itemsPerPage || isLoading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next &raquo;
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plants;
