'use client'

import { IUser } from '@/types/questionnaire/users/users'
import { NextResponse } from 'next/server'
import { useState } from 'react'
import { Button } from '../ui/button'
import { getPassword, postPassword } from './hashedAction'

const HashedPasswords = () => {
    const handleGetClick = async () => {
        const data = await getPassword()
        console.log('получено ' + data.length)
    }

    const handlePushClick = async () => {
        const dataPassword = await getPassword()

        const resultHashed = await postPassword(dataPassword)

        console.log(resultHashed)
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

    return (
        <div className="flex gap-5">
            <Button onClick={handleGetClick}>Получить пароли</Button>
            <Button onClick={handlePushClick}>Загрузить пароли</Button>
            <Button onClick={handleDeleteClick}>Удалить пароли</Button>
        </div>
    )
}

export default HashedPasswords
