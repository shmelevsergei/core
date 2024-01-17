import React from 'react';
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (
        <div className={''}>
            {children}
        </div>
    )
}