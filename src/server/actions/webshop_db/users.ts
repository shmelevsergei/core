import { prismaWebShop } from '@/lib/db'
import { UserRepository } from '@/repository/user.repository'

class Users {
    getPassNameUser: Promise<UserRepository[]> =
        prismaWebShop.gA_WS_USERS.findMany()
}

export const users = new Users()
