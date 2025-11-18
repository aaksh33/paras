import Hero from '../components/Hero'
import FeaturedProperties from '../components/FeaturedProperties'
import About from '../components/About'
import Stats from '../components/Stats'
import PropertyTypes from '../components/PropertyTypes'
import Testimonials from '../components/Testimonials'
import News from '../components/News'

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <About />
      <Stats />
      <FeaturedProperties />
      <PropertyTypes />
      <Testimonials />
      <News />
    </main>
  )
}