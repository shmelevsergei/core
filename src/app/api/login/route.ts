import { users } from '@/server/actions/portal_db/users'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const data = await req.json()

    const response = await users.loginUser(data)

    if (response === 'Пароль не верный') {
        return NextResponse.json({ password: false })
    } else if (response === 'Пользователь не найден') {
        return NextResponse.json({ login: false })
    }
    return NextResponse.json({ data: response })
}
