import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import SidebarSto from '@/components/sidebar/SidebarSto'
import { StoProvider } from './store/sto.context'

export const metadata: Metadata = {
    title: 'GROUPAUTO | EVERYCAR',
    description: 'Личный кабинет СТО',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <StoProvider>
            <div className={'flex h-screen max-w-[1280px] mx-auto '}>
                <div>
                    <SidebarSto />
                </div>

                <div className={'flex flex-col w-full'}>
                    <Header />
                    {children}
                </div>
            </div>
        </StoProvider>
    )
}
