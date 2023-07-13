import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'

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
      <body>
        {children}
        <Navbar />
        <Analytics />
      </body>
    </html>
  )
}
