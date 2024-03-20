import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import "./style.css"


const Carousel = () => {
    const slides = [
        {
          url: 'https://media.istockphoto.com/id/1355656443/photo/hr-managers-conducting-a-job-interview-at-startup-office.jpg?s=612x612&w=0&k=20&c=k0ZL3CquJpU_yhrZj_VdVJvaShffPO_PYZQq-YCTaXg=',
        },
        {
          url: 'https://media.istockphoto.com/id/173008308/photo/greenhouse-with-tomatoes.jpg?s=612x612&w=0&k=20&c=_LUxQQWbwri_XPN7_30Dj2f63bFgEC0-uoQ9GjNb1sY=',
        },
        {
          url: 'https://media.istockphoto.com/id/1309230623/photo/happy-worker-growing-flowers-in-a-greenhouse-of-a-flower-shop.jpg?s=612x612&w=0&k=20&c=AycmPDa1aU4Bh6b4fe-4BQ-1OOnHZqPkwYFhk7g-fmo=',
        },
    
        {
          url: 'https://media.istockphoto.com/id/1095277176/photo/owners-pushing-trolley-of-various-flowering-plants.jpg?s=612x612&w=0&k=20&c=WsxFecGEDgge8ezhCzPmHdVBJtVLx65oyeqTDJXtQ_g=',
        },
        {
          url: 'https://media.istockphoto.com/id/514455476/photo/flowers-and-plants-in-green-houes.jpg?s=612x612&w=0&k=20&c=ysUzNjme4nspnR8XX95svjjpBJeFM_htkW1ePDjXuYI=',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
  return (
    <div className='carosol m-auto relative group'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full h-full bg-center bg-cover duration-500'
    ></div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#432818] text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='aerrow hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#432818] text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex mb-32 object-cover  justify-center'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl  cursor-pointer slides-count'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>
);
}
  


export default Carousel
