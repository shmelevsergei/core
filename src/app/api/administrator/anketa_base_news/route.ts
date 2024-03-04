import { NextResponse } from 'next/server'
import { anketaBase } from '@/server/actions/webshop_db/anketa_base'

export async function GET() {
    const response = await anketaBase.getAnketaBaseEnabledCurrentMonth()
    const replace = (_: string, value: any) => {
        return typeof value === 'bigint' ? value.toString() : value
    }

    return NextResponse.json(JSON.stringify(response, replace))
}
