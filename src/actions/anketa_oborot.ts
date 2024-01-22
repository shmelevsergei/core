import {cache} from 'react'
import {prisma} from "@/lib/db";

interface AnketaOborotResult {
    sum: number;
}


class AnketaOborot {
    getAnketaOborot = cache(async ({startDate, endDate}: {startDate: Date | undefined, endDate:Date | undefined}) => {
        // const startDate = new Date(2023, 10, 1);
        // const endDate = new Date(2023, 11, 1);



        const result = await prisma.$queryRaw<Array<AnketaOborotResult>>`
            SELECT SUM("ABO_OBOROT_ALL")
            FROM "GA_ANKETA_OBOROT"
            WHERE "ABO_DATETIME" >= ${startDate} AND "ABO_DATETIME" <= ${endDate}
        `;

        const oborotValue = result[0]?.sum;
        return oborotValue;

    });

}

export const anketaOborot = new AnketaOborot();