import { anketaSorevnovanie } from '@/server/actions/webshop_db/anketa_sorevnovanie'
import { NextResponse } from 'next/server'

export async function GET() {
    const response = await anketaSorevnovanie.getAnketaSorevnovanie()
    const replace = (_: string, value: any) => {
        return typeof value === 'bigint' ? value.toString() : value
    }

    return NextResponse.json(JSON.stringify(response, replace))
}
