'use client'
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const propertyImages = [
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=3840&h=2160&auto=format&fit=crop",
      alt: "Cottage Property",
      title: "Cottage Properties",
      description: "Charming countryside cottages with modern amenities and peaceful surroundings"
    },
    {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=3840&h=2160&auto=format&fit=crop",
      alt: "Farmhouse",
      title: "Farmhouse",
      description: "Spacious farmhouses perfect for family living with agricultural land options"
    },
    {
      src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=3840&h=2160&auto=format&fit=crop",
      alt: "Freehold Plotting",
      title: "Freehold Plotting",
      description: "Premium plots in prime locations ready for your dream home construction"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3840&h=2160&auto=format&fit=crop",
      alt: "Commercial Building",
      title: "Commercial Building",
      description: "Strategic commercial spaces for businesses with high growth potential"
    },
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=3840&h=2160&auto=format&fit=crop",
      alt: "Flat",
      title: "Residential Flats",
      description: "Modern apartments with world-class facilities in prime residential areas"
    },
    {
      src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=3840&h=2160&auto=format&fit=crop",
      alt: "House",
      title: "Houses",
      description: "Independent houses with contemporary designs and premium locations"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])
  return (
    <section className="relative min-h-screen bg-white flex items-center">
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-0">
              Find Your Perfect Home And Experience Exceptional Living
            </h1>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Whether you are buying, selling or investing our expert team 
              is here to guide you every step of the way. 
              Find your perfect place with ease.
            </p>
            <Link href='tel:7290822142' className="inline-flex items-center bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 7290822142
            </Link>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 relative">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <img 
              src={propertyImages[currentIndex].src}
              alt={propertyImages[currentIndex].alt}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-all duration-1000"
            />
            <div className="absolute top-6 left-6">
              <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold italic tracking-wide drop-shadow-lg">
                {propertyImages[currentIndex].title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base mt-2 max-w-md drop-shadow-md">
                {propertyImages[currentIndex].description}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <input
              type="range"
              min="0"
              max={propertyImages.length - 1}
              value={currentIndex}
              onChange={(e) => setCurrentIndex(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider transition-all duration-300"
            />
            <style jsx>{`
              .slider::-webkit-slider-thumb {
                appearance: none;
                width: 20px;
                height: 12px;
                border-radius: 2px;
                background: #2563eb;
                cursor: pointer;
              }
              .slider::-moz-range-thumb {
                width: 20px;
                height: 12px;
                border-radius: 2px;
                background: #2563eb;
                cursor: pointer;
                border: none;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}