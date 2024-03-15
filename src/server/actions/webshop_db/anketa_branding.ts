import { prismaWebShop } from '@/lib/db'
import { cache } from 'react'

class AnketaBranding {
    getAnketaBranding = cache(() => {
        return prismaWebShop.gA_ANKETA_BRAND.findMany()
    })
}

export const anketaBranding = new AnketaBranding()
