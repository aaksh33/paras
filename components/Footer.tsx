export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Elite Properties</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in finding the perfect home. We make real estate simple.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-blue-400">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-blue-400">Instagram</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Buy Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Rent Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Sell Property</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Property Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Real Estate Ave, Seattle, WA</p>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@eliteproperties.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Elite Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}