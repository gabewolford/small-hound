import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import SizzleReel from './components/SizzleReel'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Small Hound',
  description: 'Independent digital product & web studio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='mt-4 md:mt-8'>
        <Navbar />
        {children}
        <SizzleReel />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
