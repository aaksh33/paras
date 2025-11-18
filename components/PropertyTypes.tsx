export default function PropertyTypes() {
  const propertyTypes = [
    {
      id: 1,
      title: 'Single Family Home',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=150&h=100&fit=crop',
      available: 245
    },
    {
      id: 2,
      title: 'Apartment',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=150&h=100&fit=crop',
      available: 189
    },
    {
      id: 3,
      title: 'Villa',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=150&h=100&fit=crop',
      available: 67
    },
    {
      id: 4,
      title: 'Studio',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=150&h=100&fit=crop',
      available: 134
    },
    {
      id: 5,
      title: 'Shop',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=100&fit=crop',
      available: 78
    },
    {
      id: 6,
      title: 'Office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=100&fit=crop',
      available: 92
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm text-gray-600 mb-4">PROPERTIES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Property Types
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((type) => (
            <div key={type.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{type.title}</h3>
                  <p className="text-gray-600">{type.available} properties available</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative h-96 rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3" 
            alt="Real Estate Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white p-4 md:p-8 rounded-lg max-w-xs md:max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Looking To Buy Or Sell?
            </h3>
            <h4 className="text-xl font-semibold text-blue-600 mb-4">
              Get Expert Guidance Today!
            </h4>
            <p className="text-gray-700 mb-6">
              Contact us now for a free consultation and let our team of experts guide you through the process.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}