import {anketaOborot} from "@/actions/anketa_oborot";
import {NextRequest, NextResponse} from "next/server";
import {fetchUrlParamDate} from "@/lib/server/fetchUrlParam";

export async function GET(req: NextRequest) {

    const {startDate, endDate} = fetchUrlParamDate(req);

    const result = await anketaOborot.getAnketaOborotPurchaseSto({startDate, endDate})

    const replace = (_: string, value: any) => {
        return typeof value === "bigint"? value.toString() : value;
    };
    // Отправляем данные в виде JSON-ответа
    return NextResponse.json(JSON.stringify(result, replace));
}