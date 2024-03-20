import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import { AdministratorProvider } from './store/administrator.context'
import SidebarAdministrator from '@/components/sidebar/SidebarAdministrator'

export const metadata: Metadata = {
    title: 'GROUPAUTO | EVERYCAR',
    description: 'Личный кабинет администратора',
}

export default function AdministratorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AdministratorProvider>
            <div className={'flex max-w-[1280px] mx-auto h-screen'}>
                <div>
                    <SidebarAdministrator />
                </div>

                <div className={'flex flex-col w-full h-full'}>
                    <Header />
                    {children}
                </div>
            </div>
        </AdministratorProvider>
    )
}
