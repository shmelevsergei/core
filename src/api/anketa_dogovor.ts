import {cache} from 'react'
import {prisma} from "@/lib/db";

class AnketaDogovor {
    getAnketaDogovor = cache(()=> prisma.gA_ANKETA_DOGOVOR.findMany({
        where: {
            ADO_STATUS: true
        }
    }));
}


export const anketaDogovor = new AnketaDogovor();