'use client'
import { useState } from 'react'

export default function SearchSection() {
  const [searchType, setSearchType] = useState('buy')

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={() => setSearchType('buy')}
              className={`px-6 py-2 rounded-lg font-semibold ${searchType === 'buy' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Buy
            </button>
            <button 
              onClick={() => setSearchType('rent')}
              className={`px-6 py-2 rounded-lg font-semibold ${searchType === 'rent' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Rent
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input 
                type="text" 
                placeholder="City, neighborhood, ZIP"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
                <option>Townhouse</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Any Price</option>
                <option>$0 - $500K</option>
                <option>$500K - $1M</option>
                <option>$1M - $2M</option>
                <option>$2M+</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}