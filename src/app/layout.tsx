import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import SizzleReel from './components/SizzleReel'
import Footer from './components/Footer'
import Info from './components/Info/Info'
import { apercuRegular } from './styles/fonts'

export const metadata: Metadata = {
  title: 'Small Hound',
  description: 'Independent digital product & web studio.',
  keywords: 'independent digital product and web studio, digital experience, products and services, ui design, ux design, end-to-end product design, product strategy, brand identity and expression, mobile-first web design, morf health, first republic bank, islamorada fishing, arist, june care, parsley health, burrow, amazon alexa',
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
        <Header />
        {children}
        <SizzleReel />
        <Info />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
