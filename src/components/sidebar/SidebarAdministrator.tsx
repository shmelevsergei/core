import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '/public/logo-everycar.svg'
import LinksSidebar from '@/components/sidebar/linksSadebar/LiksSidebar'

import {
    reports,
    settings,
    questionnaires,
    shop,
} from '@/components/sidebar/linksSidebarAdministrator'

const SidebarAdministrator = () => {
    return (
        <aside
            className={
                'bg-[#2E3785] h-full flex flex-col shadow-base min-w-[230px]'
            }
        >
            <Link
                href={'/'}
                className={
                    'inline-block py-3.5 pl-6 bg-[#0D0752] shadow-base min-h-16'
                }
            >
                <Image src={logo} alt={'Everycar'} />
            </Link>
            <div
                className={
                    'py-8 px-8 text-white text-sm flex flex-col gap-4 overflow-y-auto'
                }
            >
                <Link href={'/'} className={'text-base'}>
                    Главная
                </Link>
                <div className={'flex flex-col gap-4'}>
                    <LinksSidebar links={reports} />
                    <LinksSidebar links={questionnaires} />
                    <LinksSidebar links={settings} />
                    <LinksSidebar links={shop} />
                </div>
            </div>
        </aside>
    )
}

export default SidebarAdministrator
