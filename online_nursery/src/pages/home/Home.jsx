import React from 'react'
import Hero from '../../component/hero/Hero'

import Services from '../services/Services'
import Contact from '../Contact/Contact'
import Footer from '../../component/footer/Footer'
import Indoor_plants from '../indoor plants/Indoor_plants'

import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ items, cart, setCart }) => {
  const addToCart = (id, image, name, category, price) => {
    const obj = {
      id,
      image,
      name,
      category,
      price
    };
    setCart([...cart, obj]);
    console.log(cart);
    toast.success('Items added in cart', {
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
  return (
    <div className=''>
      <Hero/>
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
      
      <section className="text-gray-600 body-font bg-green-300 shadow-2xl border-zinc-950 rounded-b-lg">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items.map((plant) => (
              <div  className="lg:w-1/4 md:w-1/2 p-4 w-full" key={plant.id}>
                <div className='flex justify-center items-center'>
                  <Link to={`/plants/${plant.id}`} className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block rounded-lg hover:scale-125 duration-1000"
                      src={plant.image}
                    />
                  </Link>
                </div>
                <div className="mt-4 shadow-xl">
                  <h3 className="text-gray-500 text-xs tracking-widest name-font mb-1">
                    {plant.category}
                  </h3>
                  <h2 className="text-gray-900 name-font text-lg font-medium">
                    {plant.name}
                  </h2>
                  <p className="mt-1">{plant.price}</p>
                  <button
                    onClick={() => addToCart(plant.id, plant.image, plant.name, plant.category, plant.price)}
                    className="bg-green-700 rounded-xl text-white p-2 my-2 mx-2"
                    category="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
      <Indoor_plants/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
