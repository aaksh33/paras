export default function ListingsPage() {
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      price: "$850,000",
      location: "Downtown, Seattle",
      beds: 2,
      baths: 2,
      sqft: 1200,
      type: "Condo",
      status: "FOR SALE",
      featured: true,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Luxury Family Home",
      price: "$1,250,000",
      location: "Bellevue, WA",
      beds: 4,
      baths: 3,
      sqft: 2800,
      type: "House",
      status: "FOR SALE",
      featured: false,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Stylish Townhouse",
      price: "$675,000",
      location: "Capitol Hill, Seattle",
      beds: 3,
      baths: 2,
      sqft: 1800,
      type: "Townhouse",
      status: "FOR RENT",
      featured: false,
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Contemporary Villa",
      price: "$950,000",
      location: "Redmond, WA",
      beds: 3,
      baths: 2,
      sqft: 2200,
      type: "Villa",
      status: "FOR SALE",
      featured: true,
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Elegant Mansion",
      price: "$1,100,000",
      location: "Kirkland, WA",
      beds: 5,
      baths: 4,
      sqft: 3500,
      type: "Mansion",
      status: "FOR SALE",
      featured: false,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Cozy Suburban Home",
      price: "$750,000",
      location: "Bothell, WA",
      beds: 3,
      baths: 2,
      sqft: 1900,
      type: "House",
      status: "FOR SALE",
      featured: false,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
    }
  ]

  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 font-semibold tracking-wide uppercase mb-4">LISTINGS</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Premium Property Listings
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover exceptional homes and investment opportunities in prime locations
          </p>
          
          {/* Search Filters */}
          <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>All Types</option>
                <option>House</option>
                <option>Condo</option>
                <option>Townhouse</option>
                <option>Villa</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Any Price</option>
                <option>$0 - $500K</option>
                <option>$500K - $1M</option>
                <option>$1M+</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Any Beds</option>
                <option>1+ Beds</option>
                <option>2+ Beds</option>
                <option>3+ Beds</option>
                <option>4+ Beds</option>
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
            <select className="px-4 py-2 border border-gray-300 rounded-lg">
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Newest</option>
              <option>Sort by: Size</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {property.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        FEATURED
                      </span>
                    </div>
                  )}
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
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{property.title}</h3>
                      <p className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                        {property.location}
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{property.price}</span>
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
                  
                  <div className="flex space-x-3 mt-4">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Load More Properties
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}