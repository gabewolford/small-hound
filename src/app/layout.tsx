import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import SizzleReel from './components/SizzleReel'
import Footer from './components/Footer'
import Info from './components/Info/Info'

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
      <body className='m-4 md:mx-11 md:my-8'>
        <Navbar />
        {children}
        <SizzleReel />
        <Info />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
