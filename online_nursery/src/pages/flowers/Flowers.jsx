import React from 'react'
import { Link } from 'react-router-dom'
import { flower } from '../../component/FlowerData'

const Flowers = () => {
  return (
    <div>
      <section className="text-gray-700 body-font bg-green-500 rounded-b-xl  shadow-2xl">
        <div className="container px-5 py-24 mx-auto">
         
        <div className="flex flex-wrap -m-4">
{
   flower.map((plant) => (
  <Link to={`/plants/${plant.id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full" key={plant.id}>
    <a className="block relative h-48 rounded overflow-hidden">
      <img
        alt="ecommerce"
        className="object-cover object-center w-full h-full block rounded-lg hover:scale-125 duration-1000"
        src={plant.image}
      />
    </a>
    <div className="mt-4 shadow-xl">
      <h3 className="text-gray-500 text-xs tracking-widest name-font mb-1">
        {plant.category}
      </h3>
      <h2 className="text-gray-900 name-font text-lg font-medium">
        {plant.name}
      </h2>
      <p className="mt-1">{plant.price}</p>
      <button
        onClick={() => handleClick(plant)}
        className="bg-green-700 rounded-xl text-white p-2 my-2 mx-2"
        category="button"
      >
        Add to Cart
      </button>
    </div>
  </Link>
))}
</div>
        </div>
      </section>
    </div>
  )
}

export default Flowers
