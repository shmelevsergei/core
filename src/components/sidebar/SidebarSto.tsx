import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '/public/logo-everycar.svg'

const SidebarSto = () => {
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

                <Link href={''} className={'text-base'}>
                    Общая информация
                </Link>

                <Link href={''} className={'text-base'}>
                    Детализация закупок
                </Link>
                <Link href={''} className={'text-base'}>
                    Розыгрыш
                </Link>
                <Link href={''} className={'text-base'}>
                    Соревнование
                </Link>
                <Link href={''} className={'text-base'}>
                    Интернет-магазин
                </Link>
                <Link href={''} className={'text-base'}>
                    СТО и сотрудники
                </Link>
            </div>
        </aside>
    )
}

export default SidebarSto
