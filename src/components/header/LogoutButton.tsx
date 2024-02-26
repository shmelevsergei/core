'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const LogoutButton = () => {
    const redirect = useRouter()

    const handleClick = () => {
        localStorage.removeItem('login')
        redirect.push('/')
    }
    return (
        <Button variant="outline" onClick={handleClick}>
            Выйти
        </Button>
    )
}

export default LogoutButton
