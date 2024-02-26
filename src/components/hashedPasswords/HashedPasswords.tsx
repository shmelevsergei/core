'use client'

import { IUser } from '@/types/questionnaire/users/users'
import { NextResponse } from 'next/server'
import { useState } from 'react'
import { Button } from '../ui/button'

const HashedPasswords = () => {
    const [dataUsers, setDataUsers] = useState<IUser[]>([])
    const [count, setCount] = useState(0)

    const handleGetClick = async () => {
        const response = await fetch('/api/create-password')
        if (response.ok) {
            const dataWebshop: IUser[] = await response.json()
            const notNullUsers = dataWebshop.filter((user) => user !== null)

            console.log(`Загружено ${notNullUsers.length} полных профилей`)

            setDataUsers(notNullUsers)
            console.log(`Загружено ${dataUsers.length} пользователей`)

            const nullUsers = dataWebshop.filter((user) => user === null)
            setCount(nullUsers.length)

            console.log(`Загружено ${count} пользователей с пустыми данными`)
        }

        return null
    }

    console.log(dataUsers)
    const handlePushClick = async () => {
        if (dataUsers) {
            await fetchDataPortal(dataUsers)
        }
    }

    const handleDeleteClick = async () => {
        const fetchData = await fetch('/api/create-password', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (fetchData.ok) console.log('Пользователи удалены')
    }

    async function fetchDataPortal(data: IUser[]) {
        try {
            const fetchData = await fetch('/api/create-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (fetchData.ok) {
                const result = await fetchData.json()
                console.log('Success:', result)
                return NextResponse.json({ success: true })
            } else {
                console.error('Error:', fetchData.status)
                return NextResponse.json({
                    success: false,
                    error: 'Server error',
                })
            }
        } catch (error) {
            console.error('Error fetching data:', error)
            return NextResponse.json({ success: false, error: 'Network error' })
        }
    }

    return (
        <div className="flex gap-5">
            <Button onClick={handleGetClick}>Получить пароли</Button>
            <Button onClick={handlePushClick}>Загрузить пароли</Button>
            <Button onClick={handleDeleteClick}>Удалить пароли</Button>
        </div>
    )
}

export default HashedPasswords
