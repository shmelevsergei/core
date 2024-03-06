import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import { AdministratorProvider } from './store/administrator.context'
import SidebarAdministrator from '@/components/sidebar/SidebarAdministrator'

export const metadata: Metadata = {
    title: 'GROUPAUTO | EVERYCAR',
    description: 'Личный кабинет администратора',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AdministratorProvider>
            <div className={'flex h-screen max-w-[1280px] mx-auto '}>
                <div>
                    <SidebarAdministrator />
                </div>

                <div className={'flex flex-col w-full'}>
                    <Header />
                    {children}
                </div>
            </div>
        </AdministratorProvider>
    )
}
