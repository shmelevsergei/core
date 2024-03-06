import React from 'react'
import {Toaster} from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className={'h-full p-4'}>
        {children}
    </div>
}
