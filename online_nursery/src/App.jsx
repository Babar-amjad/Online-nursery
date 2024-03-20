// In App.js

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './global/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Plants from './pages/plants/Plants';
import OutdoorPlants from './pages/outdoor_plants/Outdoor_plants';
import IndoorPlants from './pages/indoor plants/Indoor_plants';
import Services from './pages/services/Services';
import PlantsDetails from './component/plantsdetials/PlantsDetials';
import Cart from './component/cart/Cart';
import SearchItem from './component/SearchItem';
import { items } from './component/plantsData/PlantsData';
import Flowers from './pages/flowers/Flowers';
import Login from './component/login/Login';
import Success from './Success';
import Cancel from './component/Cancel';


function App() {
   const [data, setData] = useState([...items]);
   const [cart, setCart] = useState([]);

   const handleClick = (itemId, itemImage, itemName, itemCategory, itemPrice) => {
      // Add the item to the cart
      setCart(prevCart => [
        ...prevCart,
        {
          id: itemId,
          image: itemImage,
          name: itemName,
          category: itemCategory,
          price: itemPrice
        }
      ]);
   };

//    const handleChange = (item, change) => {
//       const updatedCart = cart.map(cartItem => {
//           if (cartItem.id === item.id) {
//               return { ...cartItem, amount: cartItem.amount + change };
//           }
//           return cartItem;
//       });
//       setCart(updatedCart);
//   };



   return (
      <>


         <Navbar cart={cart} setData={setData} setCart={setCart} />

         
         <Routes>
            <Route path='/' element={<Home cart={cart} setCart={setCart} items={data} />} />
            <Route path='plants' element={<Plants cart={cart} setCart={setCart} items={items} handleClick={handleClick} />} />
            <Route path='/plants/:id' element={<PlantsDetails setCart={setCart} cart={cart} />} />
            <Route path='/SearchItem/:term' element={<SearchItem   />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} data={data}/>} />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
            <Route path='Indoor_plants' element={<IndoorPlants  setCart={setCart} cart={cart}/>} />
            <Route path='outdoor_plants' element={<OutdoorPlants  setCart={setCart} cart={cart}/>} />
            <Route path='flowers' element={<Flowers setCart={setCart} cart={cart}/>} />
            <Route path='About' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
         </Routes>
      </>
   );
}

export default App;
