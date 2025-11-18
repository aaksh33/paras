export default function AboutPage() {
  return (
    <main>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl  min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-sm text-gray-600 mb-4">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Your Trusted Partner In Real Estate Success
              </h2>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                With a strong focus on personalized services and deep local expertice, we are dedicated to helping you find the perfect property that meets your unique needs.
              </p>
              <p className="text-gray-700 mb-6">
                Our team guides you through every step of the process ensuring that your real estate journey is not only smooth but also rewarding.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                More Information
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}