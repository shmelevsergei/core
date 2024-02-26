'use client'
import Form from '@/components/form/Form'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface IUserData {
    name: string
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

        console.log(userStatus.status)

        if (userStatus.status === 'admin') {
            navigate.push('/administrator')
        }
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Form />
        </main>
    )
}

export default Home
