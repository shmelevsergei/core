import { anketaOborot } from '@/server/actions/webshop_db/anketa_oborot'
import { NextRequest, NextResponse } from 'next/server'
import { fetchUrlParamDate } from '@/server/lib/fetchUrlParam'

export async function GET(req: NextRequest) {
    const { startDate, endDate } = fetchUrlParamDate(req)

    // Вызываем ваш метод для получения ответа
    const result = await anketaOborot.getAnketaOborot({ startDate, endDate })

    // Отправляем данные в виде JSON-ответа
    return NextResponse.json(result)
}
