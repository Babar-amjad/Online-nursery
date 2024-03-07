

import Navbar from './global/navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Plants from './pages/plants/Plants'
import Outdoor_plants from './pages/outdoor_plants/Outdoor_plants'
import Indoor_plants from './pages/indoor plants/Indoor_plants'
import Services from './pages/services/Services'
import PlantsDetials from './component/plantsdetials/PlantsDetials'
import Cart from './component/cart/Cart'
import SearchItem from './component/SearchItem'
import { items } from './component/plantsData/PlantsData'
import { useState } from 'react'
import Flowers from './pages/flowers/Flowers'



function App() {

   const [data ,setData]=useState([...items])
   const [cart ,setCart]=useState([])
  return (
    <>
   
     <Navbar cart={cart} setData={setData}/>
     <Routes>
      <Route path='/' element={<Home cart={cart} setCart={setCart} items={data}/>}/>
      <Route path='plants' element={<Plants  cart={cart} setCart={setCart} items={data}/>}/>
      <Route path='/plants/:id' element={<PlantsDetials/>}/>
      <Route path='/SearchItem/:term' element={<SearchItem/>}/>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
      <Route path='Indoor_plants' element={<Indoor_plants/>}/>
      <Route path='outdoor_plants' element={<Outdoor_plants/>}/>
      <Route path='flowers' element={<Flowers/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='Contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
