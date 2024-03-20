'use client'
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { loginAction } from './loginAction'

const Form = () => {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [validPassword, setIsValidPassword] = useState('')
    const [validUsername, setIsValidUsername] = useState('')

    const handleClick = async (e: any) => {
        e.preventDefault()

        setIsValidPassword('')
        setIsValidUsername('')

        try {
            const result = await loginAction(name, password)

            if (result) {
                if (result.login === false) {
                    setIsValidUsername('Пользователь с таким логином не найден')
                } else if (result.password === false) {
                    setIsValidPassword('Пароль введён не верно')
                }
            } else {
                console.error('Произошла ошибка:')
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
