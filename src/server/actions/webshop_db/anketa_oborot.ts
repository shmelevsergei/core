import { cache } from 'react'
import { prismaWebShop } from '@/lib/db'

class AnketaOborot {
    getAnketaOborot = cache(
        async ({
            startDate,
            endDate,
        }: {
            startDate: Date | undefined
            endDate: Date | undefined
        }) => {
            const result = await prismaWebShop.gA_ANKETA_OBOROT.findMany({
                where: {
                    ABO_DATETIME: {
                        gte: startDate,
                        lt: endDate,
                    },
                },
            })

            return result
        }
    )
}
export const anketaOborot = new AnketaOborot()
