'use client'
import { useState, useEffect, useRef } from 'react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ years: 0, clients: 0, awards: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCounters = () => {
    const duration = 2000
    const targets = { years: 25, clients: 1500, awards: 18 }
    
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      setCounts({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        awards: Math.floor(targets.awards * progress)
      })
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    animate()
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted by Thousands Across Delhi NCR
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              {counts.years}+
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Years Experience</h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Decades of expertise in Delhi NCR real estate market
            </p>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              {(counts.clients / 1000).toFixed(1)}k+
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Happy Clients</h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Families who found their dream properties with us
            </p>
          </div>
          
          <div className="text-center p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              {counts.awards}+
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Awards Won</h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Recognition for excellence in property services
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}