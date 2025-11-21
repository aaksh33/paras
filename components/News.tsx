'use client'
import { useState } from 'react'

export default function News() {
  const [email, setEmail] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSignedUp(true)
      setEmail('')
      setTimeout(() => setIsSignedUp(false), 3000)
    }
  }
  const newsArticles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
      title: 'Top 10 Home Buying Tips for 2024',
      description: 'Essential advice for first-time homebuyers navigating today\'s competitive market.',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=250&fit=crop',
      title: 'Real Estate Market Trends',
      description: 'Current market analysis and predictions for property values in major cities.',
      date: 'March 12, 2024'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&h=250&fit=crop',
      title: 'Investment Property Guide',
      description: 'How to choose the right investment property for maximum returns.',
      date: 'March 10, 2024'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=250&fit=crop',
      title: 'Home Staging Secrets',
      description: 'Professional tips to make your home more appealing to potential buyers.',
      date: 'March 8, 2024'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400&h=250&fit=crop',
      title: 'Mortgage Rate Updates',
      description: 'Latest changes in interest rates and how they affect your home purchase.',
      date: 'March 5, 2024'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=250&fit=crop',
      title: 'Luxury Home Features',
      description: 'Must-have amenities that add value to high-end residential properties.',
      date: 'March 3, 2024'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=250&fit=crop',
      title: 'Neighborhood Analysis',
      description: 'How to evaluate the best neighborhoods for your lifestyle and budget.',
      date: 'March 1, 2024'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      title: 'Property Tax Guide',
      description: 'Understanding property taxes and how to minimize your annual payments.',
      date: 'February 28, 2024'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm text-gray-600 mb-4">NEWS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real Estate Tips, Trends, And Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
              <div className="overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{article.description}</p>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors mt-auto">
                  Continue Reading →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative h-80 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=3840&h=2160&auto=format&fit=crop" 
            alt="Dream Home Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60">
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready To Find Your Dream Home?
              </h3>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Let our expert team guide you through every step of your property journey. 
                From buying to selling, we make real estate simple and stress-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:7290822142" 
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now: 7290822142
                </a>
                <a 
                  href="/listings" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                  </svg>
                  View Properties
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}