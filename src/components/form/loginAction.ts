'use server'

import { prismaPortal } from '@/lib/db'
import { verifyPassword } from '@/server/lib/functions'
import { revalidatePath } from 'next/cache'
import { setCookies } from './cookiesAction'

export const loginAction = async (login: string, password: string) => {
    try {
        const response = await prismaPortal.user.findFirst({
            where: {
                login,
            },
        })

        if (!response) {
            return { login: false }
        }

        const isPasswordValid = await verifyPassword(
            password,
            response.password
        )

        if (!isPasswordValid) {
            return { password: false }
        }

        await setCookies({ name: response.name, role: response.role })
        revalidatePath('/')

        return { name: response.name, role: response.role }
    } catch (error) {
        console.log(error)
        throw error
    }
}
