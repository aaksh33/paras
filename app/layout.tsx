import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Elite Properties - Modern Real Estate',
  description: 'Find your dream home with our premium real estate platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='!bg-gray-50'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}