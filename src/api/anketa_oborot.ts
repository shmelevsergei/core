import {cache} from 'react'
import {prisma} from "@/lib/db";

class AnketaOborot {
    getAnketaOborot = cache(() => prisma.gA_ANKETA_OBOROT.findMany({
        where: {
            ABO_DATETIME: {
                gte: new Date(2024, 0, 1), // начало декабря 2023 года (нумерация месяцев начинается с 0)
                lte: new Date(2024, 0, 5), // конец декабря 2023 года
            }
        }
    }));
}


export const anketaOborot = new AnketaOborot();