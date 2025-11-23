export default function About() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              ABOUT HARMAN AGRO ENTERPRISES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner In Property Solutions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                With deep local expertise across Delhi NCR, we provide personalized services to help you find the perfect property that meets your unique needs.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Our experienced team guides you through every step of the process, ensuring your real estate journey is smooth, transparent, and rewarding.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
                  Learn More
                </button>
                <a href="/listings" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-sm sm:text-base text-center">
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