export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center pt-20">
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Find Your Perfect Home And Experience Exceptional Living
            </h1>
          </div>
          <div className="text-left ml-32">
            <p className="text-base text-gray-700 mb-6">
              Whether you are buying, selling or investing our expert team<br/>
              is here to guide you every step of the way.<br/>
              Find your perfect place with ease.
            </p>
            <div className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +91 98765 43210
            </div>
          </div>
        </div>
        <div className="mt-12 relative">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=3840&h=2160&auto=format&fit=crop" 
            alt="Luxury Apartment" 
            className="w-[120%] h-[500px] object-cover rounded-lg shadow-2xl mx-auto"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <div className="flex space-x-3 mb-4">
                <button className="px-4 py-1 rounded-lg font-semibold bg-blue-600 text-white text-sm">
                  Buy
                </button>
                <button className="px-4 py-1 rounded-lg font-semibold bg-gray-200 text-gray-700 text-sm">
                  Rent
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Location</label>
                  <input 
                    type="text" 
                    placeholder="City, neighborhood, ZIP"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Property Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                    <option>Townhouse</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Price Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                    <option>Any Price</option>
                    <option>$0 - $500K</option>
                    <option>$500K - $1M</option>
                    <option>$1M - $2M</option>
                    <option>$2M+</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}