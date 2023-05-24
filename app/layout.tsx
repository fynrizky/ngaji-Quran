import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <head>
        <title>ngajiQur'an</title>
        <meta name="description" content="Create By Rizky Fiyannur" />
        <meta name="google" content="notranslate" />
      </head>
      <body className="bg-gray-100 dark:bg-slate-800">
        <Navbar />
        <div className="py-2 px-2 sm:py-5 sm:px-5">{children}</div>
      </body>
    </html>
  )
}
