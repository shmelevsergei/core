import {cache} from "react";
import {prisma} from "@/lib/db";


class AnketaAddress {
    getAnketaAddress = cache(()=> prisma.gA_ANKETA_ADDR.findMany());
}


export const anketaAddress = new AnketaAddress();