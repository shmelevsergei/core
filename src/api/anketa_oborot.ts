import {cache} from 'react'
import {prisma} from "@/lib/db";

class AnketaOborot {
    getAnketaOborot = cache(()=> prisma.gA_ANKETA_OBOROT.findMany());
}


export const anketaOborot = new AnketaOborot();