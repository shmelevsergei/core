import React from 'react'
import type { Metadata } from 'next'
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";


export const metadata: Metadata = {
    title: 'GROUPAUTO | EVERYCAR',
    description: 'Личный кабинет администратора',
}

export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <div className={'flex h-screen'}>
            <div>
                <Sidebar/>
            </div>

            <div className={'flex flex-col w-full'}>
                <Header />
                {children}
            </div>
        </div>
    )
}