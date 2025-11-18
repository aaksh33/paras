export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Home Buying Tips for 2024",
      excerpt: "Essential advice for first-time homebuyers navigating today's competitive market.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
      date: "March 15, 2024",
      author: "John Smith"
    },
    {
      id: 2,
      title: "Real Estate Market Trends",
      excerpt: "Current market analysis and predictions for property values in major cities.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=250&fit=crop",
      date: "March 12, 2024",
      author: "Sarah Johnson"
    },
    {
      id: 3,
      title: "Investment Property Guide",
      excerpt: "How to choose the right investment property for maximum returns.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&h=250&fit=crop",
      date: "March 10, 2024",
      author: "Michael Brown"
    }
  ]

  return (
    <main className="pt-16">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600">Stay updated with the latest real estate insights and tips</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}