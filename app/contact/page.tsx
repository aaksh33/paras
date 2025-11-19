export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 font-semibold tracking-wide uppercase mb-4">CONTACT</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to find your dream home? Our expert team is here to help you every step of the way
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you're buying, selling, or investing, our experienced team is ready to provide personalized guidance tailored to your needs.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-lg mr-6">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-1">7290822142</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-lg mr-6">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">Sureshrahi7638@gmail.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-lg mr-6">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Office</h3>
                    <p className="text-gray-600 mb-1">1st floor, St.Columbus School, SCO - 10, Dayal Bagh Rd, opp. Sant,</p>
                    <p className="text-gray-600 mb-1">Chetram Colony, Block GC, Surajkund, Faridabad, Haryana 121009</p>
                    <p className="text-sm text-gray-500">Visit us for in-person consultation</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-lg mr-6">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v11a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V7l-7-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-600 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      placeholder="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I'm interested in</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none bg-white cursor-pointer text-black">
                    <option>Select an option</option>
                    <option>Buying a home</option>
                    <option>Selling a home</option>
                    <option>Investment properties</option>
                    <option>Property management</option>
                    <option>Market consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your real estate needs..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600">Located in Surajkund, Faridabad, we're easily accessible</p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps?q=St.Columbus+School,+SCO-10,+Dayal+Bagh+Road,+Surajkund,+Faridabad,+Haryana+121009&output=embed"
              width="100%" 
              height="400" 
              style={{border: 0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Harman Agro Enterprises Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}