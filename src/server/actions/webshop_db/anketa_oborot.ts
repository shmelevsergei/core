import {cache} from 'react'
import {prismaWebShop} from "@/lib/db";

interface AnketaOborotResult {
    sum: number;
}


class AnketaOborot {
    getAnketaOborot = cache(async ({startDate, endDate}: {
        startDate: Date | undefined,
        endDate: Date | undefined
    }) => {
        // const startDate = new Date(2023, 10, 1);
        // const endDate = new Date(2023, 11, 1);

        const result = await prismaWebShop.$queryRaw<Array<AnketaOborotResult>>`
            SELECT SUM("ABO_OBOROT_ALL")
            FROM "GA_ANKETA_OBOROT"
            WHERE "ABO_DATETIME" >= ${startDate}
              AND "ABO_DATETIME" <= ${endDate}
              AND "ABO_OBOROT_ALL" > 0
        `;

        const oborotValue = result[0]?.sum;
        return oborotValue;

    });

    getAnketaOborotPurchaseSto = cache(async ({startDate, endDate}: {
        startDate: Date | undefined,
        endDate: Date | undefined
    }) => {

        return prismaWebShop.$queryRaw<Array<AnketaOborotResult>>`
            SELECT *
            FROM "GA_ANKETA_OBOROT"
            WHERE "ABO_DATETIME" >= ${startDate}
              AND "ABO_DATETIME" <= ${endDate}
              AND "ABO_OBOROT_ALL" > 0
        `;
    });

    getAnketaOborotPurchaseStoCount = cache(async ({startDate, endDate}: {
        startDate: Date | undefined,
        endDate: Date | undefined
    }) => {

        const result = await prismaWebShop.$queryRaw<Array<AnketaOborotResult>>`
            SELECT  SUM("ABO_COUNT_ROSSKO" + "ABO_COUNT_AE" + "ABO_COUNT_ARKONA" + "ABO_COUNT_AUTORUS")
            FROM "GA_ANKETA_OBOROT"
            WHERE "ABO_DATETIME" >= ${startDate}
              AND "ABO_DATETIME" <= ${endDate}
              AND "ABO_OBOROT_ALL" > 0
        `;
        return result[0]?.sum;
    });

    getAnketaOborotRemsonaQty = cache(async ({startDate, endDate}: {
        startDate: Date | undefined,
        endDate: Date | undefined
    })=> {
        const result = await prismaWebShop.$queryRaw<Array<AnketaOborotResult>>`
            SELECT SUM("ABO_ABA_REMZONA_QTY")
            FROM "GA_ANKETA_OBOROT"
            WHERE "ABO_DATETIME" >= ${startDate}
              AND "ABO_DATETIME" <= ${endDate}
            AND "ABO_OBOROT_ALL" > 0
        `;

        return result[0]?.sum;
    })

    getAnketaOborotNotByDistributor = cache(async ({startDate, endDate}: {
        startDate: Date | undefined,
        endDate: Date | undefined
    }) => prismaWebShop.gA_ANKETA_OBOROT.findMany({
            where: {
                ABO_DATETIME: {
                    gte: startDate,
                    lte: endDate
                },
                ABO_OBOROT_ALL: {
                    gte: 0
                }
            }
        })
    );

}
export const anketaOborot = new AnketaOborot()