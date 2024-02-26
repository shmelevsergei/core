import React from 'react'
import type { Metadata } from 'next'
import Sidebar from '@/components/sidebar/Sidebar'
import Header from '@/components/header/Header'

export const metadata: Metadata = {
    title: 'GROUPAUTO | EVERYCAR',
    description: 'Анкеты',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={'flex min-h-screen max-w-[1280px] mx-auto '}>
            <div>
                <Sidebar />
            </div>

            <div className={'flex flex-col w-full h-screen'}>
                <Header />
                {children}
            </div>
        </div>
    )
}
