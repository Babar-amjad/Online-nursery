import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  return (
    <div>
      {cart.length === 0 ? (
        <div className='justify-between my-4 text-center mx-auto'>
          <h1 className='my-2 text-3xl' >Your cart is empty</h1>
          <Link to={"/"} className='bg-orange-400 p-2 rounded-xl'  type="button">Continue shopping...</Link>
        </div>
      ) : (
        cart.map((plant) => (
          <div key={plant.id} className="flex flex-col items-center bg-white border border-gray-700 mx-auto my-6 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={plant.image} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{plant.name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{plant.category}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl">{plant.price}</p>
              <button type="button" className='bg-orange-700 text-black my-2 p-2 rounded-xl'>Buy now</button>
            </div>
          </div>
        ))
      )}
      {
        cart.length!=0 &&(
      
          <div className='w-full items-center mx-auto flex gap-x-10 p-4 justify-center '>
          <div className="bg-blue-500 text-center text-black p-2 rounded-xl w-44">Check out</div>
          <div onClick={() => setCart([])} className="bg-orange-500 text-center p-2 rounded-xl w-44">Clear cart</div>
        </div>
        )
      }

     
    </div>
  );
};

export default Cart;
