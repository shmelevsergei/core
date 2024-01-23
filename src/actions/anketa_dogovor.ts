import {cache} from 'react'
import {prisma} from "@/lib/db";
import {Prisma} from ".prisma/client";
import {DefaultArgs, GetResult} from "prisma/prisma-client/runtime/library";
import {IAnketaDogovorRepository} from "@/repository/anketaDogovor.repository";


const transformData = (data: Prisma.PrismaPromise<GetResult<Prisma.$GA_ANKETA_DOGOVORPayload<DefaultArgs>,
    {},
    "findMany">>): Promise<IAnketaDogovorRepository[]> => {
    return data.then((items) => {
        return items.map((item) => ({
            ADO_ABA_ID: item.ADO_ABA_ID as unknown as bigint,
            ADO_NAME1: item.ADO_NAME1 as unknown as string,
            ADO_NAME2: item.ADO_NAME2 as unknown as string,
            ADO_NAME3: item.ADO_NAME3 as unknown as string,
            ADO_PHONE: item.ADO_PHONE as unknown as string,
            ADO_EMAIL: item.ADO_EMAIL as unknown as string,
            ADO_DATETIME: item.ADO_DATETIME as unknown as Date,
            ADO_STATUS: item.ADO_STATUS as unknown as boolean,
        }));
    });
}
class AnketaDogovor {
    getAnketaDogovorTrue = cache(():Promise<IAnketaDogovorRepository[]> => transformData(prisma.gA_ANKETA_DOGOVOR.findMany({
        where: {
            ADO_STATUS: true
        }
    })))
}


export const anketaDogovor = new AnketaDogovor();