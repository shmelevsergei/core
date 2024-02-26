'use client'
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { IUserResponse } from '@/types/questionnaire/users/users'
import { useRouter } from 'next/navigation'

interface ResponseJson {
    login: boolean
    password: boolean
    data: IUserResponse
}

const Form = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [validPassword, setIsValidPassword] = useState('')
    const [validUsername, setIsValidUsername] = useState('')
    const router = useRouter()

    const handleClick = async (e: any) => {
        e.preventDefault()

        setIsValidPassword('')
        setIsValidUsername('')

        try {
            const data = {
                name,
                password,
            }

            const result = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (result.ok) {
                const responseJson: ResponseJson = await result.json()

                if (responseJson.login === false) {
                    setIsValidUsername('Пользователь с таким логином не найден')
                } else if (responseJson.password === false) {
                    setIsValidPassword('Пароль введён не верно')
                } else if (responseJson.data) {
                    const { name, role } = responseJson.data

                    const infoUser = {
                        user: name,
                        status: role,
                    }
                    localStorage.setItem('login', JSON.stringify(infoUser))
                    if (infoUser.status === 'admin') {
                        router.push('/administrator')
                    }
                }
            } else {
                console.error(
                    'Произошла ошибка:',
                    result.status,
                    result.statusText
                )
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form>
            <div className="flex flex-col gap-10">
                <h2 className="text-2xl font-bold text-center">
                    Вход <br /> в панель администрирования
                </h2>
                <div className="flex flex-col gap-5">
                    <div>
                        <Label>Логин</Label>
                        <Input
                            placeholder="Логин"
                            name="login"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className="mt-2"
                        />
                        <p className="text-sm text-red-600">{validUsername}</p>
                    </div>

                    <div>
                        <Label>Пароль</Label>
                        <Input
                            placeholder="Пароль"
                            name="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-2"
                        />
                        <p className="text-sm text-red-600">{validPassword}</p>
                    </div>
                </div>

                <Button onClick={handleClick}>Войти</Button>
            </div>
        </form>
    )
}

export default Form
