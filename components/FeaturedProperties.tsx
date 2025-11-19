'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop',
      price: 'Market Price',
      title: 'Beautiful Cottage',
      location: 'Mathura',
      type: 'Cottage'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      price: 'Market Price',
      title: 'Premium Farmhouse',
      location: 'Faridabad',
      type: 'Farmhouse'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      price: 'Market Price',
      title: 'Freehold Plotting',
      location: 'Ballabhgarh',
      type: 'Plotting'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      price: 'Market Price',
      title: 'Commercial Building',
      location: 'Nanital',
      type: 'Commercial'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      price: 'Market Price',
      title: 'Modern Flat',
      location: 'Noida',
      type: 'Flat'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      price: 'Market Price',
      title: 'Luxury Flat',
      location: 'Delhi',
      type: 'Flat'
    }
  ]

  const [isPaused, setIsPaused] = useState(false)

  return (
    <section id="featured-properties" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            FEATURED PROPERTIES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Next Great Find
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exceptional properties across prime locations
          </p>
        </div>

        <div className="relative overflow-hidden pb-6">
          <div 
            className={`flex animate-scroll ${isPaused ? 'paused' : ''}`}
          >
            {[...properties, ...properties].map((property, index) => (
              <div key={`${property.id}-${index}`} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                  <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      FOR SALE
                    </div>
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/20 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                      {property.type}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{property.title}</h3>
                      <p className="text-gray-600 flex items-center text-sm mb-3">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {property.location}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm sm:text-base lg:text-lg font-bold text-blue-600">{property.price}</p>
                      <Link href={'/contact'} className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        .animate-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}