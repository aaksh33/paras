'use client'
import { useState, useEffect } from 'react'

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      price: '$850,000',
      title: 'Modern Downtown Condo'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      price: '$1,250,000',
      title: 'Luxury Family Home'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300&fit=crop',
      price: '$675,000',
      title: 'Stylish Townhouse'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop',
      price: '$950,000',
      title: 'Contemporary Villa'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
      price: '$1,100,000',
      title: 'Elegant Mansion'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
      price: '$750,000',
      title: 'Cozy Suburban Home'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      price: '$2,200,000',
      title: 'Luxury Penthouse'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      price: '$890,000',
      title: 'Modern Apartment'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (currentIndex >= properties.length) {
      setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(0)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 500)
    }
  }, [currentIndex, properties.length])

  return (
    <section id="featured-properties" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm text-gray-600 mb-4">PROPERTIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Properties: Your Next Great Find
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''} md:!transform-none`}
            style={{ transform: `translateX(-${currentIndex * (100 / 1)}%)` }}
          >
            {[...properties, ...properties.slice(0, 3)].map((property, index) => (
              <div key={`${property.id}-${index}`} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                      FOR SALE
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                    <p className="text-2xl font-bold text-blue-600">{property.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}