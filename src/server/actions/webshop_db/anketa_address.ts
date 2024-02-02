import {cache} from "react";
import {prismaWebShop } from "@/lib/db";


class AnketaAddress {
    getAnketaAddress = cache(()=> prismaWebShop.gA_ANKETA_ADDR.findMany());
}


export const anketaAddress = new AnketaAddress();