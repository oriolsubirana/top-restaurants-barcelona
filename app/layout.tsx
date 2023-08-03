import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/header'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Top Restaurants Barcelona',
  description: 'Your favorite page to find a restaurant in Barcelona',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
