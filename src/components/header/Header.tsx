'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import banner from '/public/banner-brands.png'
import Search from '@/components/header/Search'
import Question from '@/components/header/Question'
import LogoutButton from '@/components/header/LogoutButton'
import { IUserData } from '@/app/page'
import ChatButton from './ChatButton'
const Header = () => {
    const [isSto, setIsSto] = useState(false)

    useEffect(() => {
        const userString = localStorage.getItem('login')

        if (userString) {
            const user: IUserData = JSON.parse(userString)
            if (user.status == 'sto') setIsSto(true)
        }
    }, [])

    return (
        <header className={'min-h-16 bg-[#FCFCFF] shadow-base w-full z-20'}>
            <div className={'flex items-center pr-4 h-full'}>
                <Image src={banner} alt={'Banner'} />

                {isSto ? <ChatButton /> : <Search />}

                <div className={'text-sm ml-auto flex items-center gap-2'}>
                    <Question />
                    <LogoutButton />
                </div>
            </div>
        </header>
    )
}

export default Header
