'use server'

import { cookies } from 'next/headers'

export const setCookies = async ({
    name,
    role,
}: {
    name: string | undefined | null
    role: string | undefined | null
}) => {
    cookies().set('user', JSON.stringify({ name, role }), { secure: false })
}

export const getCookies = async () => {
    const cookiesData = cookies().get('user')

    if (!cookiesData || !cookiesData.value) return null
    return await JSON.parse(cookiesData.value)
}

export const deleteCookies = async () => {
    cookies().delete('user')
}
