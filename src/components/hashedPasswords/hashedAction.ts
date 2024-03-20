'use server'

import { prismaPortal, prismaWebShop } from '@/lib/db'
import { hashedPassword } from '@/server/lib/functions'
import { IUser } from '@/types/questionnaire/users/users'
import { GA_WS_USERS } from '../../../prisma/generate/client1'

export const getPassword = async () => {
    const data = await prismaWebShop.gA_WS_USERS.findMany()

    const result = data.filter(
        (item) => item.WSU_NAME !== '' && item.WSU_PASSWD !== ''
    )

    console.log('Получено ' + result.length + 'профилей')

    return result
}

export const postPassword = async (data: GA_WS_USERS[]) => {
    try {
        let successHashed = 0
        const copyData = await Promise.all(
            data?.map(async (user) => {
                console.log(`Обработка пользователя: ${user.WSU_NAME}`)

                const hashedPasswordValue = await hashedPassword(
                    user.WSU_PASSWD
                )
                successHashed++

                console.log(`Захэшировано: ${successHashed} паролей`)

                return {
                    login: user.WSU_NAME,
                    password: hashedPasswordValue,
                }
            })
        )

        await prismaPortal.user.createMany({
            data: copyData as unknown as IUser[],
            skipDuplicates: true,
        })
        return { successHashed: true }
    } catch (error) {
        console.log(error)
        throw error
    }
}
