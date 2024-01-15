import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})


export const metadata: Metadata = {
  title: 'GROUPAUTO | EVERYCAR',
  description: 'Личный кабинет',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-inter`}>
        {children}
      </body>
    </html>
  )
}
