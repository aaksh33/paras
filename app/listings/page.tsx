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
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=300&fit=crop"
    }
  ]

  return (
    <main className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Listings</h1>
            <p className="text-xl text-gray-600">Find your perfect home from our curated selection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    FOR SALE
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                    <span className="text-2xl font-bold text-blue-600">{property.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{property.beds} beds</span>
                    <span>{property.baths} baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}