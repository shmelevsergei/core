import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {cn} from "@/lib/utils";


export const metadata: Metadata = {
  title: 'GROUPAUTO | EVERYCAR',
  description: 'Личный кабинет',
}

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={cn("font-inter antialiased max-w-[1280px] mx-auto", inter.variable)}>
        {children}
      </body>
    </html>
  )
}
