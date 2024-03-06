import React from 'react'
import type { Metadata } from 'next'
import Sidebar from '@/components/sidebar/SidebarAdministrator'
import Header from '@/components/header/Header'

export const metadata: Metadata = {
    title: 'GROUPAUTO | EVERYCAR',
    description: 'Анкеты',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className={'h-full p-4'}>{children}</div>
}
