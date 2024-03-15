import { prismaWebShop } from '@/lib/db'
import { cache } from 'react'

class AnketaScores {
    getAnketaScores = cache(() => {
        return prismaWebShop.gA_ANKETA_SCORES.findMany()
    })
}

export const anketaScores = new AnketaScores()
