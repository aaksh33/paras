'use client'
import { useState, useEffect } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      review: "Harman Agro Interprises helped us find our dream farmhouse in Faridabad. Excellent service!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      name: "Rajesh Kumar",
      profession: "IT Professional, Gurgaon"
    },
    {
      id: 2,
      rating: 5,
      review: "Best property dealers in Delhi NCR. Found perfect commercial space in Noida with great rates.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      name: "Priya Sharma",
      profession: "Business Owner, Delhi"
    },
    {
      id: 3,
      rating: 5,
      review: "Professional team made our flat purchase in Ballabhgarh stress-free. Highly recommended!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      name: "Amit Singh",
      profession: "Engineer, Faridabad"
    },
    {
      id: 4,
      rating: 5,
      review: "Amazing support for first-time buyers. Got our cottage in Mathura at market price.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      name: "Sunita Gupta",
      profession: "Teacher, Mathura"
    },
    {
      id: 5,
      rating: 5,
      review: "Best investment property guidance. Purchased freehold plotting with excellent returns.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      name: "Vikash Agarwal",
      profession: "Investor, Greater Noida"
    },
    {
      id: 6,
      rating: 5,
      review: "Excellent service for selling our property in Delhi. Great market knowledge and support.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      name: "Meera Jain",
      profession: "Doctor, Delhi"
    },
    {
      id: 7,
      rating: 5,
      review: "Fantastic team! They understood our needs and found perfect home in Nanital area.",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=face",
      name: "Rohit Verma",
      profession: "Architect, Nanital"
    },
    {
      id: 8,
      rating: 5,
      review: "Professional service from start to finish. Made our home buying in NCR very smooth.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
      name: "Kavita Rani",
      profession: "Nurse, Ghaziabad"
    }
  ]

  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-sm text-gray-600 mb-4">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Client Testimonials: Trust And Success
          </h2>
        </div>

        <div className="relative overflow-hidden pb-6">
          <div 
            className={`flex animate-scroll ${isPaused ? 'paused' : ''} scrollbar-hidden`}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3">
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 h-48 flex flex-col justify-between" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                  <div>
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4 italic">"{testimonial.review}"</p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover mr-2 sm:mr-3"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{testimonial.name}</h4>
                      <p className="text-gray-600 text-xs">{testimonial.profession}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
          .animate-scroll.paused {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  )
}