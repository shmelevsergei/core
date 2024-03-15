import { anketaBranding } from '@/server/actions/webshop_db/anketa_branding'
import { NextResponse } from 'next/server'

export async function GET() {
    const response = await anketaBranding.getAnketaBranding()
    const replace = (_: string, value: any) => {
        return typeof value === 'bigint' ? value.toString() : value
    }

    return NextResponse.json(JSON.stringify(response, replace))
}
