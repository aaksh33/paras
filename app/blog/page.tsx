export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Home Buying Tips for 2024",
      excerpt: "Essential advice for first-time homebuyers navigating today's competitive market. Learn the insider secrets that can save you thousands.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Buying Guide",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Real Estate Market Trends",
      excerpt: "Current market analysis and predictions for property values in major cities. Stay ahead of the curve with expert insights.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=250&fit=crop",
      date: "March 12, 2024",
      author: "Michael Chen",
      category: "Market Analysis",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Investment Property Guide",
      excerpt: "How to choose the right investment property for maximum returns. Complete guide to building wealth through real estate.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&h=250&fit=crop",
      date: "March 10, 2024",
      author: "Emily Davis",
      category: "Investment",
      readTime: "12 min read"
    },
    {
      id: 4,
      title: "Home Staging Secrets",
      excerpt: "Professional tips to make your home more appealing to potential buyers and sell faster at a better price.",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=250&fit=crop",
      date: "March 8, 2024",
      author: "David Wilson",
      category: "Selling Tips",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Mortgage Rate Updates",
      excerpt: "Latest changes in interest rates and how they affect your home purchase decisions in the current market.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400&h=250&fit=crop",
      date: "March 5, 2024",
      author: "Lisa Anderson",
      category: "Finance",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Luxury Home Features",
      excerpt: "Must-have amenities that add value to high-end residential properties and attract premium buyers.",
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400&h=250&fit=crop",
      date: "March 3, 2024",
      author: "Robert Taylor",
      category: "Luxury Homes",
      readTime: "7 min read"
    }
  ]

  return (
    <main className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 font-semibold tracking-wide uppercase mb-4">BLOG</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Estate Insights & Tips
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest market trends, expert advice, and insider tips to make informed real estate decisions
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 flex-1 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs">{post.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}