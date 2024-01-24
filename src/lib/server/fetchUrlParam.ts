import {NextRequest} from "next/server";

export const fetchUrlParamDate = (req: NextRequest)=> {

    const urlSearchParams = req.nextUrl.searchParams;

    // Получаем параметры startDate и endDate из URL-запроса
    const startDateParam = urlSearchParams.get('startDate');
    const endDateParam = urlSearchParams.get('endDate');


    // Преобразуем строки в объекты типа Date
    const startDate = startDateParam ? new Date(startDateParam) : undefined;
    const endDate = endDateParam ? new Date(endDateParam) : undefined;


    return {startDate, endDate};
}