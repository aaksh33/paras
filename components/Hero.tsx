import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center pt-20 sm:pt-24">
      <div className="absolute inset-0 bg-gray-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 lg:mb-0">
              Find Your Perfect Home And Experience Exceptional Living
            </h1>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Whether you are buying, selling or investing our expert team 
              is here to guide you every step of the way. 
              Find your perfect place with ease.
            </p>
            <Link href='tel:7290822142' className="inline-flex items-center bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 7290822142
            </Link>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 relative">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=3840&h=2160&auto=format&fit=crop" 
            alt="Luxury Apartment" 
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
          />
          <div className="hidden md:block absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-11/12">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-700">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                <button className="px-3 sm:px-4 py-1 rounded-lg font-semibold bg-blue-600 text-white text-xs sm:text-sm">
                  Buy
                </button>
                <button className="px-3 sm:px-4 py-1 rounded-lg font-semibold bg-gray-200 text-gray-700 text-xs sm:text-sm">
                  Rent
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
                      <p className="text-white/80 text-xs sm:text-sm">Properties Sold</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">25+</div>
                      <p className="text-white/80 text-xs sm:text-sm">Years Experience</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1000+</div>
                      <p className="text-white/80 text-xs sm:text-sm">Happy Clients</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</div>
                      <p className="text-white/80 text-xs sm:text-sm">Locations</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="px-3 py-1 bg-white/20 text-white text-xs sm:text-sm rounded-full">Cottage Properties</span>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs sm:text-sm rounded-full">Farmhouse Sales</span>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs sm:text-sm rounded-full">Freehold Plotting</span>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs sm:text-sm rounded-full">Commercial Properties</span>
                    <span className="px-3 py-1 bg-white/20 text-white text-xs sm:text-sm rounded-full">Residential Flats</span>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center space-y-3">
                  <a href="tel:7290822142" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now: 7290822142
                  </a>
                  <a href="/contact" className="border-2 border-gray-300 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-gray-900 transition-colors text-center">
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Search Form */}
          <div className="md:hidden mt-6">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-700">
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                <button className="px-3 sm:px-4 py-1 rounded-lg font-semibold bg-blue-600 text-white text-xs sm:text-sm">
                  Buy
                </button>
                <button className="px-3 sm:px-4 py-1 rounded-lg font-semibold bg-gray-200 text-gray-700 text-xs sm:text-sm">
                  Rent
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">500+</div>
                    <p className="text-white/80 text-xs">Properties Sold</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">25+</div>
                    <p className="text-white/80 text-xs">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">1000+</div>
                    <p className="text-white/80 text-xs">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">50+</div>
                    <p className="text-white/80 text-xs">Locations</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Cottage Properties</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Farmhouse Sales</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Freehold Plotting</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Commercial Properties</span>
                  <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full">Residential Flats</span>
                </div>
                
                <div className="space-y-3">
                  <a href="tel:7290822142" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center w-full">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now: 7290822142
                  </a>
                  <a href="/contact" className="border-2 border-gray-300 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 hover:text-gray-900 transition-colors text-center block w-full">
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}