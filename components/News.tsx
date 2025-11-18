export default function News() {
  const newsArticles = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
      title: 'Top 10 Home Buying Tips for 2024',
      description: 'Essential advice for first-time homebuyers navigating today\'s competitive market.',
      date: 'March 15, 2024'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=250&fit=crop',
      title: 'Real Estate Market Trends',
      description: 'Current market analysis and predictions for property values in major cities.',
      date: 'March 12, 2024'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&h=250&fit=crop',
      title: 'Investment Property Guide',
      description: 'How to choose the right investment property for maximum returns.',
      date: 'March 10, 2024'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=250&fit=crop',
      title: 'Home Staging Secrets',
      description: 'Professional tips to make your home more appealing to potential buyers.',
      date: 'March 8, 2024'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400&h=250&fit=crop',
      title: 'Mortgage Rate Updates',
      description: 'Latest changes in interest rates and how they affect your home purchase.',
      date: 'March 5, 2024'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=250&fit=crop',
      title: 'Luxury Home Features',
      description: 'Must-have amenities that add value to high-end residential properties.',
      date: 'March 3, 2024'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=250&fit=crop',
      title: 'Neighborhood Analysis',
      description: 'How to evaluate the best neighborhoods for your lifestyle and budget.',
      date: 'March 1, 2024'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      title: 'Property Tax Guide',
      description: 'Understanding property taxes and how to minimize your annual payments.',
      date: 'February 28, 2024'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm text-gray-600 mb-4">NEWS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real Estate Tips, Trends, And Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                <a href="#" className="text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors">
                  Continue Reading →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative h-80 rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" 
            alt="Newsletter Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated With The Latest News
              </h3>
              <p className="text-lg mb-2">
                Signup for our newsletter and be the first to know about new listings,
              </p>
              <p className="text-lg mb-8">
                market insights, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none border border-gray-300"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}