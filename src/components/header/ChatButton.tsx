import Link from 'next/link'
import React from 'react'

const ChatButton = () => {
    return (
        <Link
            href={''}
            className="rounded-lg bg-blue-400 text-white text-center py-2 px-4 text-sm hover:bg-blue-500 transition-all"
        >
            ЧАТ руководителей сети EVERYCAR
        </Link>
    )
}

export default ChatButton
