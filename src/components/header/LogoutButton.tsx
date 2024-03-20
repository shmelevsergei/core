import React from 'react'
import { Button } from '@/components/ui/button'
import { deleteCookies } from '../form/cookiesAction'
import { useRouter } from 'next/navigation'

const LogoutButton = () => {
    const navigate = useRouter()
    const handleClick = async () => {
        await deleteCookies()
        navigate.push('/')
    }
    return (
        <Button variant="outline" onClick={handleClick}>
            Выйти
        </Button>
    )
}

export default LogoutButton
