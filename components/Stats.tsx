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
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              {counts.years}+
            </div>
            <p className="text-gray-700">
              Decades of expertise in the real estate market, providing top-tier service to every client.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              {(counts.clients / 1000).toFixed(1)}k
            </div>
            <p className="text-gray-700">
              Helping clients find their dream homes across numerous successful projects.
            </p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              {counts.awards}+
            </div>
            <p className="text-gray-700">
              Recognized for excellence in real estate, ensuring you receive the highest quality service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}