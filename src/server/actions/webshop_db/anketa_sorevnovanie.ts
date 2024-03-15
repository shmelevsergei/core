import { prismaWebShop } from '@/lib/db'
import { cache } from 'react'

class AnketaSorevnovanie {
    getAnketaSorevnovanie = cache(() => {
        return prismaWebShop.gA_ANKETA_SOREVNOVANIE.findMany()
    })
}

export const anketaSorevnovanie = new AnketaSorevnovanie()
