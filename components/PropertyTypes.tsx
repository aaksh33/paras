export default function PropertyTypes() {
  const propertyTypes = [
    {
      id: 1,
      title: 'Cottage',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=150&h=100&fit=crop',
      available: 45
    },
    {
      id: 2,
      title: 'Farmhouse',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=150&h=100&fit=crop',
      available: 32
    },
    {
      id: 3,
      title: 'Freehold Plotting',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=150&h=100&fit=crop',
      available: 78
    },
    {
      id: 4,
      title: 'Commercial Building Property',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=100&fit=crop',
      available: 25
    },
    {
      id: 5,
      title: 'Flat',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=150&h=100&fit=crop',
      available: 156
    },
    {
      id: 6,
      title: 'Home',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=150&h=100&fit=crop',
      available: 89
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
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=3840&h=2160&auto=format&fit=crop" 
              alt="Property Background"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white p-4 md:p-8 rounded-lg max-w-xs md:max-w-md">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=60&h=60&fit=crop&crop=face" 
                alt="Real Estate Agent"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Looking To Buy Or Sell?
                </h3>
                <h4 className="text-lg font-semibold text-blue-600">
                  Get Expert Guidance Today!
                </h4>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Contact us now for a free consultation and let our team of experts guide you through the process.
            </p>
            <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}