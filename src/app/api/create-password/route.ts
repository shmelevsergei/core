import { NextRequest, NextResponse } from 'next/server'
import { users as webshopUser } from '@/server/actions/webshop_db/users'
import { users as portalUser } from '@/server/actions/portal_db/users'
import { IUser } from '@/types/questionnaire/users/users'

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const webshop = await webshopUser.getPassNameUser

        const data = webshop.map(({ WSU_NAME, WSU_PASSWD }) => {
            if (WSU_NAME && WSU_PASSWD) {
                return {
                    name: WSU_NAME,
                    password: WSU_PASSWD,
                }
            }
        })

        return NextResponse.json(data)
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false, error })
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const requestBody: IUser[] = await req.json()

        if (requestBody) {
            const data = await portalUser.postPassNameUsers(requestBody)
            return NextResponse.json(data)
        }

        return NextResponse.json({ success: false })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false, res })
    }
}

export async function DELETE(res: NextResponse) {
    await portalUser.deletePassUsers()

    return NextResponse.json({ success: true, res })
}
