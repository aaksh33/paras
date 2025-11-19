export default function ListingsPage() {
  const properties = [
    {
      id: 1,
      title: "Beautiful Cottage",
      price: "Market Price",
      location: "Mathura",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Cottage",
      status: "FOR SALE",
      featured: true,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Premium Farmhouse",
      price: "Market Price",
      location: "Faridabad",
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: "Farmhouse",
      status: "FOR SALE",
      featured: false,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Freehold Plotting",
      price: "Market Price",
      location: "Ballabhgarh",
      beds: 0,
      baths: 0,
      sqft: 1800,
      type: "Freehold Plotting",
      status: "FOR SALE",
      featured: false,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Commercial Building Property",
      price: "Market Price",
      location: "Nanital",
      beds: 0,
      baths: 0,
      sqft: 2200,
      type: "Commercial Building Property",
      status: "FOR SALE",
      featured: true,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Modern Flat",
      price: "Market Price",
      location: "Noida",
      beds: 3,
      baths: 2,
      sqft: 1500,
      type: "Flat",
      status: "FOR SALE",
      featured: false,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Luxury Flat",
      price: "Market Price",
      location: "Delhi",
      beds: 3,
      baths: 2,
      sqft: 1900,
      type: "Flat",
      status: "FOR SALE",
      featured: false,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
    }
  ]

  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 font-semibold tracking-wide uppercase mb-4 text-sm">LISTINGS</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Premium Property Listings
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
            Discover exceptional homes and investment opportunities in prime locations
          </p>
          
          {/* Search Filters */}
          <div className="bg-white rounded-lg p-4 sm:p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black bg-white">
                <option>All Types</option>
                <option>Cottage</option>
                <option>Farmhouse</option>
                <option>Freehold Plotting</option>
                <option>Commercial Building Property</option>
                <option>Flat</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black bg-white">
                <option>Any Price</option>
                <option>According to Market Price</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black bg-white">
                <option>Property Size</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4+ BHK</option>
              </select>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">{properties.length} properties found</p>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-black bg-white">
              <option>Sort by: Featured</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Newest First</option>
              <option>Sort by: Property Size</option>
              <option>Sort by: Location</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      property.status === 'FOR SALE' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                    }`}>
                      {property.status}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{property.title}</h3>
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                        {property.location}
                      </p>
                    </div>
                    <span className="text-lg font-bold text-blue-600">{property.price}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-t border-gray-100">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        {property.beds} beds
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        {property.baths} baths
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                        {property.sqft} sqft
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          

        </div>
      </section>
    </main>
  )
}