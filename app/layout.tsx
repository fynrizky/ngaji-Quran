'use client'
import * as React from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import  Modal  from '@/components/Modal'
// import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/redux'

// const inter = Inter({ subsets: ['latin'] })
 
//menggunakan Provider untuk mengakse store(reducer) saat menggunakan useDispatch

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <head>
        <title>Quran~~Ku</title>
        <meta name="description" content="Create By Rizky Fiyannur" />
        <meta name="google" content="notranslate" />
      </head>
      <Provider store={store}>
        <body className="bg-gray-100 dark:bg-slate-800">
          <Navbar />
          <Modal />
          <div className="py-2 px-2 sm:py-5 sm:px-5">{children}</div>
        </body>
      </Provider>
    </html>
  )
}
