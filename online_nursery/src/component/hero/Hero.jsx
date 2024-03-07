import React from 'react'

const Hero = () => {
  return (
    <div className='bg-orange-200 py-2'>
      
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-96 w-full" src="https://media.istockphoto.com/id/627521208/photo/horticulture-business.jpg?s=2048x2048&w=is&k=20&c=1oq5cJpThGP-3f4JQDr_74Ud7j6d0kgB3i9KkP7HycY="/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg"></h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">Plants are more courageous than almost all human beings: Love and work are to people what water and sunshine are to plants.</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Welcome to a world where plants not only beautify our surroundings but also have the power to nourish our souls. In a fast-paced and ever-evolving world, finding moments of tranquility and connection with nature has become more important than ever. Whether you are an avid gardener, a plant enthusiast, or simply someone who appreciates the beauty of greenery, this collection of 15 inspiring plant quotes is here to uplift your spirits and infuse your life with a touch of green
          </p>
          <a className="text-indigo-500 inline-flex items-center" href=' https://www.blinkist.com/magazine/posts/15-inspiring-plant-quotes-nurture-soul-greenify-life?utm_source=cpp'>Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
