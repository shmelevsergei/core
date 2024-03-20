import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import SidebarDistributor from '@/components/sidebar/SidebarDistributor'
import { DistributorProvider } from './store/distributor.context'

export const metadata: Metadata = {
    title: 'GROUPAUTO | EVERYCAR',
    description: 'Личный кабинет администратора',
}

export default function DistributorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <DistributorProvider>
            <div className={'flex h-screen max-w-[1280px] mx-auto '}>
                <div>
                    <SidebarDistributor />
                </div>

                <div className={'flex flex-col w-full'}>
                    <Header />
                    {children}
                </div>
            </div>
        </DistributorProvider>
    )
}
