import {NextRequest, NextResponse} from "next/server";
import {fetchUrlParamDate} from "@/lib/server/fetchUrlParam";
import {anketaOborot} from "@/actions/anketa_oborot";

export async function GET(req: NextRequest) {
    const {startDate, endDate} = fetchUrlParamDate(req)


    const result = await anketaOborot.getAnketaOborotRemsonaQty({startDate, endDate})

    const replace = (_: string, value: any) => {
        return typeof value === "bigint"? value.toString() : value;
    };

    return NextResponse.json(JSON.stringify(result, replace));

}