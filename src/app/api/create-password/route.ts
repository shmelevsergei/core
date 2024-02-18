import {NextRequest, NextResponse} from "next/server";
import {users as webshopUser} from "@/server/actions/webshop_db/users";
import {users as portalUser} from "@/server/actions/portal_db/users";
import argon2 from 'argon2'
import {IUser} from "@/types/questionnaire/users/users";

const hashedPassword = async (password: string) => {
    return await argon2.hash(password)
}

export async function GET(req:NextRequest, res:NextResponse) {
    try {
        const webshop = await webshopUser.getPassNameUser


        const data = webshop.map(({WSU_NAME, WSU_PASSWD}) => {

            if (WSU_NAME && WSU_PASSWD) {
                return {
                    name: WSU_NAME,
                    password: WSU_PASSWD
                }
            }
        })


        return NextResponse.json(data)
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error });
    }
}

export async function POST(req:NextRequest, res:NextResponse) {
    try {

        const requestBody:IUser = await req.json()

        const {name, password} = requestBody

        if (name && name.trim() !=="" && password && password.trim() !== "") {
            const passwordHash = await hashedPassword(password)
            const data = await portalUser.postPassNameUser({
                name,
                password: passwordHash
            })
            return NextResponse.json(data)
        }

        return NextResponse.json({success: false})

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, res });
    }
}