import {anketaOborot} from "@/server/actions/anketa_oborot";
import {NextRequest, NextResponse} from "next/server";
import {fetchUrlParamDate} from "@/server/lib/fetchUrlParam";

export async function GET(req: NextRequest) {
    const {startDate, endDate} = fetchUrlParamDate(req)

    // Вызываем ваш метод для получения данных
    const result = await anketaOborot.getAnketaOborotPurchaseStoCount({startDate, endDate});

    // Отправляем данные в виде JSON-ответа
    const replace = (_: string, value: any) => {
        return typeof value === "bigint"? value.toString() : value;
    };
    // Отправляем данные в виде JSON-ответа
    return NextResponse.json(JSON.stringify(result, replace));
}