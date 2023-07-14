import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import SizzleReel from './components/SizzleReel/SizzleReel'

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
      <body className='ml-4 md:ml-11 mr-4 my-4 md:my-8'>
        <Navbar />
        {children}
        <SizzleReel />
        <Analytics />
      </body>
    </html>
  )
}
