import { verifyPassword } from './../../lib/functions'
import { prismaPortal } from '@/lib/db'
import { hashedPassword } from '@/server/lib/functions'
import { IUser } from '@/types/questionnaire/users/users'

class Users {
    postPassNameUsers = async (data: IUser[]) => {
        try {
            let successHashed = 0
            const copyData = await Promise.all(
                data?.map(async (user) => {
                    console.log(`Обработка пользователя: ${user.name}`)

                    const hashedPasswordValue = await hashedPassword(
                        user.password
                    )
                    successHashed++

                    console.log(`Захшировано: ${successHashed} паролей`)

                    return {
                        name: user.name,
                        password: hashedPasswordValue,
                    }
                })
            )

            const createMany = await prismaPortal.user.createMany({
                data: copyData as unknown as IUser[],
                skipDuplicates: true,
            })
            return createMany
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    loginUser = async (data: IUser) => {
        try {
            const response = await prismaPortal.user.findFirst({
                where: {
                    name: data.name,
                },
            })

            if (!response) {
                return 'Пользователь не найден'
            }

            const isPasswordValid = await verifyPassword(
                data.password,
                response.password
            )

            if (!isPasswordValid) {
                return 'Пароль не верный'
            }
            return response
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    deletePassUsers = async () => await prismaPortal.user.deleteMany({})
}

export const users = new Users()
