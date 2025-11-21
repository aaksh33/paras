'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function PropertyDetailPage() {
  const params = useParams()
  const id = params.id
  const [selectedImage, setSelectedImage] = useState(0)

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
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop"
      ],
      description: "This beautiful cottage offers a perfect blend of rustic charm and modern comfort. Located in the serene surroundings of Mathura, this property features spacious rooms, well-maintained gardens, and excellent connectivity to major landmarks.",
      features: ["Garden", "Parking", "Security", "Power Backup", "Water Supply"],
      yearBuilt: 2020,
      propertyId: "HAE001"
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
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop"
      ],
      description: "Luxurious farmhouse spread across 2800 sqft with modern amenities and agricultural land. Perfect for those seeking a peaceful lifestyle away from city chaos while maintaining connectivity to urban facilities.",
      features: ["Swimming Pool", "Garden", "Parking", "Security", "Agricultural Land", "Bore Well"],
      yearBuilt: 2019,
      propertyId: "HAE002"
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
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&h=600&fit=crop"
      ],
      description: "Prime freehold plot in Ballabhgarh with clear title and ready for construction. Excellent investment opportunity with high appreciation potential in developing area.",
      features: ["Clear Title", "Road Connectivity", "Electricity", "Water Connection", "Corner Plot"],
      yearBuilt: null,
      propertyId: "HAE003"
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
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop"
      ],
      description: "Strategic commercial property in prime location of Nanital. Perfect for business setup with high footfall area and excellent connectivity to major commercial hubs.",
      features: ["Prime Location", "High Footfall", "Parking", "Security", "Lift", "Power Backup"],
      yearBuilt: 2021,
      propertyId: "HAE004"
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
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
      ],
      description: "Contemporary 3BHK flat in Noida with modern amenities and excellent connectivity. Perfect for families looking for comfortable urban living with all facilities.",
      features: ["Modular Kitchen", "Balcony", "Parking", "Security", "Lift", "Gym", "Club House"],
      yearBuilt: 2022,
      propertyId: "HAE005"
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
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
      ],
      description: "Luxurious 3BHK flat in prime Delhi location with premium finishes and world-class amenities. Ideal for those seeking upscale living in the heart of the capital.",
      features: ["Premium Finishes", "Balcony", "Parking", "Security", "Lift", "Swimming Pool", "Spa"],
      yearBuilt: 2023,
      propertyId: "HAE006"
    }
  ]

  const property = properties.find(p => p.id === parseInt(id as string))

  if (!property) {
    return (
      <main className="bg-gray-50 min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link href="/listings" className="text-blue-600 hover:text-blue-800">
            Back to Listings
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <img 
                src={property.gallery[selectedImage]} 
                alt={property.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg mb-4"
              />
              <div className="grid grid-cols-4 gap-4">
                {property.gallery.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${property.title} ${index + 1}`}
                    className={`w-full h-24 object-cover rounded-lg shadow-md cursor-pointer transition-all duration-200 ${
                      selectedImage === index ? 'ring-2 ring-blue-500 opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <p className="text-gray-600 flex items-center text-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                    {property.status}
                  </span>
                  <p className="text-2xl font-bold text-blue-600 mt-2">{property.price}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{property.beds}</p>
                  <p className="text-gray-600">Bedrooms</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{property.baths}</p>
                  <p className="text-gray-600">Bathrooms</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{property.sqft}</p>
                  <p className="text-gray-600">Sq Ft</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{property.yearBuilt || 'N/A'}</p>
                  <p className="text-gray-600">Year Built</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Agent</h3>
              <div className="mb-6">
                <p className="text-gray-600 mb-2">Property ID: {property.propertyId}</p>
                <p className="text-gray-600 mb-4">Type: {property.type}</p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="tel:7290822142"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call: 7290822142
                </a>
                
                <a 
                  href="mailto:Sureshrahi7638@gmail.com"
                  className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Agent
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}