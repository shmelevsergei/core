import {anketaOborot} from "@/actions/anketa_oborot";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const urlSearchParams = req.nextUrl.searchParams;

    // Получаем параметры startDate и endDate из URL-запроса
    const startDateParam = urlSearchParams.get('startDate');
    const endDateParam = urlSearchParams.get('endDate');


    // Преобразуем строки в объекты типа Date
    const startDate = startDateParam ? new Date(startDateParam) : undefined;
    const endDate = endDateParam ? new Date(endDateParam) : undefined;

    // Вызываем ваш метод для получения данных
    const result = await anketaOborot.getAnketaOborotPurchaseStoCount({startDate, endDate});

    // Отправляем данные в виде JSON-ответа
    return NextResponse.json(result);
}