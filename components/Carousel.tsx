"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

interface CarouselItem {
  img: string;
  link: string;
  title: string;
  featured: string;
}

interface CarouselProps {
  items: CarouselItem[];
  title: string;
  img: string;
  link: string;
  left: number;
  desktops: number;
  tablets: number;
  mobile: number;
  slider: number;
  limit: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, title, img, link, left, desktops, tablets, slider, limit, mobile }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(desktops);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(handleNext, 900000); // Change every 9 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Update the number of items to show based on the screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) setItemsToShow(mobile); // Mobile
      else if (window.innerWidth < 768) setItemsToShow(tablets); // Small tablets
      else setItemsToShow(desktops); // Desktops
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, [desktops, tablets, mobile]);

  const displayedItems = items
    .slice(startIndex, startIndex + itemsToShow)
    .concat(items.slice(0, Math.max(0, startIndex + itemsToShow - items.length)));

  const itemWidth = 100 / itemsToShow;

  return (
    <>
      <div className={`flex items-stretch overflow-hidden my-3`}>
        <div className="w-full relative bg-white p-2 group">
          <div className='flex items-center justify-between pb-2'>
            <div className='flex items-center'>
              <h1 className='text-xl font-bold mr-1 text-black'>
                {title}
              </h1>
              <svg width={20} hanging={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.134 5.756c-.423-.423-.634-.742-.634-1.06 0-.32.212-.639.634-1.062C8.558 3.211 8.877 3 9.196 3c.32 0 .638.211 1.06.634l3.653 3.653 3.653 3.652c.423.423.634.742.634 1.06 0 .32-.211.639-.634 1.062l-3.653 3.652-3.652 3.652c-.423.423-.742.635-1.06.635-.32 0-.638-.212-1.061-.635-.423-.423-.635-.741-.635-1.06 0-.32.212-.638.635-1.06l2.857-2.858 2.856-2.857c.191-.19.287-.36.287-.53 0-.17-.096-.34-.287-.53l-2.856-2.857z"></path></svg>
            </div>
            <div className='flex items-center space-x-2'>
            {(slider === 1 || slider === 2) && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="border rounded-full p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="border rounded-full p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
          {slider === 1 && (
            <div ref={containerRef} className="flex overflow-hidden transition-transform duration-500">
              {displayedItems.slice(0, limit).map((item, index) => (
                <div
                  key={index}
                  className="p-0.5 transition-opacity duration-500"
                  style={{ flex: `0 0 ${itemWidth}%` }}
                >
                  <Link href={item.link} className="block bg-white hover:bg-gray-100 p-2">
                    <div className='flex items-center justify-center relative h-44'>
                      <Image
                        src={item.img}
                        width={600}
                        height={600}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="mt-1 flex flex-col items-start space-y-1">
                      <h3 className="text-md font-bold line-clamp-1">
                        {item.title}
                      </h3>
                      <p className='text-gray-500 line-clamp-2 text-sm'>
                      {item.featured}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          {slider === 2 && (
            <div ref={containerRef} className="flex gap-2 overflow-hidden transition-transform duration-500">
              {displayedItems.slice(0, limit).map((item, index) => (
                <div
                  key={index}
                  className="p-0.5 transition-opacity duration-500"
                  style={{ flex: `0 0 ${itemWidth}%` }}
                >
                  <Link href={item.link} className="flex items-center bg-gray-100 p-2 rounded-md">
                    <div className='flex items-center justify-center relative h-12 w-12'>
                      <Image
                        src={item.img}
                        width={600}
                        height={600}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className="text-md font-bold line-clamp-1 ml-2">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          )}
          {slider === 3 && (
            <div className={`grid grid-cols-2 md:grid-cols-${desktops} gap-2`}>
              {items.slice(0, limit).map((item, index) => (
                <Link key={index} href={item.link} className={`${item.featured} p-2 h-20 flex items-end justify-between rounded-lg`}>
                    <h3 className="text-md font-bold text-white line-clamp-1">
                    {item.title}
                    </h3>
                    <Image
                      src={item.img}
                      width={24}
                      height={24}
                      alt={item.title}
                      className='opacity-30'
                    />                    
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Carousel;