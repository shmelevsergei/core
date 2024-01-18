import {cache} from "react";
import {prisma} from "@/lib/db";
import  {IAnketaBaseRepository} from "@/repository/anketaBase.repository";


class AnketaBase {
    getAnketaBaseEnabled = cache(():Promise<IAnketaBaseRepository[]> => prisma.gA_ANKETA_BASE.findMany({
        where: {
            ABA_ENABLED: true
        }
    }));

    getAnketaBaseEnabledCurrentMonth = cache(():Promise<IAnketaBaseRepository[]> => prisma.gA_ANKETA_BASE.findMany({
        where: {
            ABA_ENABLED: true,
            ABA_DATETIME_CREATED: {
                gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
                lte: new Date()
            }
        }
    }))
}


export const anketaBase = new AnketaBase();