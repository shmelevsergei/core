import React from 'react'
import Link from 'next/link'

const Card = ({
    text,
    count,
    percent,
    link,
}: {
    text: string
    count: number
    percent: number
    link: string
}) => {
    return (
        <div
            className={
                'bg-[#FFDCDC] w-full h-12 shadow-base text-[#000] text-sm font-semibold flex justify-between items-center px-3 gap-4'
            }
        >
            <p>{text}</p>
            <p className={'shrink-0'}>
                {count} ({percent}%) (<Link href={link}>перейти к списку</Link>)
            </p>
        </div>
    )
}

export default Card
