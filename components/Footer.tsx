import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3 sm:mb-4">Harman Agro Enterprises</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              Your trusted partner in finding the perfect property across Delhi NCR. We make real estate simple and transparent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-white/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Cottage Properties</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Farmhouse Sales</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Freehold Plotting</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Commercial Properties</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Blog</a></li>
              <li><a href="/listings" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Properties</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-xs sm:text-sm leading-relaxed">1st floor, St.Columbus School, SCO - 10, Dayal Bagh Rd, Surajkund, Faridabad, Haryana 121009</p>
              </div>
              <Link className="flex items-center space-x-2 hover:text-blue-400 transition-colors" href="tel:7290822142">
                <Phone className="h-4 w-4 text-blue-400" /> 
                <span className="text-sm">7290822142</span>
              </Link>
              <Link className="flex items-center space-x-2 hover:text-blue-400 transition-colors" href="mailto:Sureshrahi7638@gmail.com">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm break-all">Sureshrahi7638@gmail.com</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
              &copy; 2024 Harman Agro Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs sm:text-sm">
              <a href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}