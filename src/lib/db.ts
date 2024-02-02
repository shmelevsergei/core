import { PrismaClient as PrismaClientWebShop } from '../../prisma/generate/client1'
import { PrismaClient as PrismaClientPortal } from '../../prisma/generate/client2'

export const prismaPortal = new PrismaClientPortal()
export const prismaWebShop = new PrismaClientWebShop()