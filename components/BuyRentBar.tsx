'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BuyRentBar() {
  const pathname = usePathname()

  if (pathname !== '/') return null

  return (
    <div className="bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          <Link 
            href="/listings" 
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            Buy
          </Link>
          <Link 
            href="/listings" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
          >
            Rent
          </Link>
        </div>
      </div>
    </div>
  )
}