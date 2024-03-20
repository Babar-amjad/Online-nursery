import React, { useState, useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';

const Cart = ({ cart, setCart }) => {
    // console.log(cart)
    const [price, setPrice] = useState(0);
 
    const handleChange = (item, change) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
        let updatedCart;
        if (existingItemIndex !== -1) {
            // Item already exists in the cart, update its amount
            updatedCart = cart.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    return { ...cartItem, amount: isNaN(cartItem.amount) ? 1 : cartItem.amount + change };
                }
                return cartItem;
            });
        } else {
            // Item is not in the cart, add it with default amount 1
            const newItem = { ...item, amount: 1 };
            updatedCart = [...cart, newItem];
        }
    
        setCart(updatedCart);
    }
    
    const handlePrice = () => {
        let totalPrice = 0;
        cart.forEach(item => {
          const itemPrice = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^\d.-]/g, '')) : item.price;
          if (!isNaN(item.amount) && typeof itemPrice === 'number' && !isNaN(itemPrice)) {
            totalPrice += item.amount * itemPrice; // Use item.amount for quantity
          } else {
            console.error("Invalid item:", item);
          }
        });
        setPrice(totalPrice);
      };
      
    
    const handleRemove = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    }

    useEffect(() => {
        handlePrice();
    }, [cart]);


// payment integration
    const makePayment = async(items)=>{
        const stripe = await loadStripe("pk_test_51OvkBgK3EE8oND0u3XcUeJ6dkwstyPNviRvSbjO5NQFoLNvLD73xvnLxf0Bp6r58PsX2nKItjib0Z4oJWZteCpNN00yzrjypjz");

        const body = {
            products:items
        }
        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch("http://localhost:5500/api/create-checkout-session",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });
        
        if(result.error){
            console.log(result.error);
        }
    }



    return (
        <article>
            {cart?.map(item => (
                <div className="cart_box flex" key={item.id}>
                    <div className="flex flex-col items-center bg-white border border-gray-700 mx-auto my-6 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div>
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.image} alt={item.name} />
                        </div>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-2xl">{item.price}</p>
                            <p>{item.dec}</p>
                            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.category}</p>
                        </div>
                        <div className='flex my-1'>
                            <button className='font-bold text-xl mx-2' onClick={() => handleChange(item, 1)}> + </button>
                            <button>{item.amount}</button>
                            <button className='font-bold text-xl mx-2' onClick={() => handleChange(item, -1)}> - </button><br />
                        </div>
                        <div>
                            <span>{item.amount * item.price}</span>
                            <button className='bg-green-600 mx-3 my-4 text-black p-2 shadow-xl rounded-xl' onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                       
                    </div>
                    
                </div>
                
            ))}
            <div className='total'>
                <span className='text-2xl'>Total Price of your Cart :</span>
                <span className='text-xl'>Rs - {price}</span>
            </div>
            <div className='text-2xl'>
              
            </div>
            
           <button className='p-3 bg-orange-500 text-black justify-between items-center' onClick={() => makePayment(cart)} type='button'>Checkout</button>
        </article>
    );
}

export default Cart;
