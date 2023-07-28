import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import SizzleReel from './components/SizzleReel'
import Footer from './components/Footer'
import Info from './components/Info/Info'
import { apercuRegular } from './styles/fonts'

export const metadata: Metadata = {
  title: 'Small Hound',
  description: 'Independent digital product & web studio.',
  icons: {
    icon: '/images/icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={apercuRegular.className}>
      <body className='mx-4 md:mx-11'>
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
