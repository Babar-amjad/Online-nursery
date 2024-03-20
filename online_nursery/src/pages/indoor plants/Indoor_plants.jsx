import React from 'react'
import { Link } from 'react-router-dom'
import { indoor } from '../../component/indoordata/IndoorData'
import { ToastContainer, toast } from 'react-toastify';


const Indoor_plants = ({cart,setCart}) => {
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
  
    // Display a success message
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
  return (
    <div>
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
       <section className="text-gray-600 body-font bg-pink-100 shadow-2xl">
        <div className="container px-5 py-24 mx-auto">
         
        <div className="flex flex-wrap -m-4">
{
   indoor.map((plant) => (
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={plant.id}>
    <Link to={`/plants/${plant.id}`} className="block relative h-48 rounded overflow-hidden">
      <img
        alt="ecommerce"
        className="object-cover object-center w-full h-full block rounded-lg hover:scale-125 duration-1000"
        src={plant.image}
      />
    </Link>
    <div className="mt-4 shadow-xl">
      <h3 className="text-gray-500 text-xs tracking-widest name-font mb-1">
        {plant.category}
      </h3>
      <h2 className="text-gray-900 name-font text-lg font-medium">
        {plant.name}
      </h2>
      <p className="mt-1">{plant.price}</p>
      <button onClick={() => addToCart(plant._id, plant.image, plant.name, plant.category, plant.price)} className="bg-green-700 rounded-xl text-white p-2 my-2 mx-2" category="button">Add to Cart</button>
    </div>
  </div>
))}
</div>
        </div>
      </section>
    </div>
  )
}

export default Indoor_plants;




