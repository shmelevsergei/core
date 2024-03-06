'use client'
import Form from '@/components/form/Form'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export interface IUserData {
    user: string
    status: string
}

function Home() {
    const navigate = useRouter()

    useEffect(() => {
        const localData = localStorage.getItem('login')

        if (!localData) {
            return
        }
        const userStatus: IUserData = JSON.parse(localData)

        if (userStatus.status === 'admin') {
            navigate.push('/administrator')
        }
        if (userStatus.status === 'distributor') {
            navigate.push('/distributor')
        }
        if (userStatus.status === 'sto') {
            navigate.push('/sto')
        }
    })

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Form />
        </main>
    )
}

export default Home
