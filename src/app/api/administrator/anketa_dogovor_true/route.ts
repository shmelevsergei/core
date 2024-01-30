import {NextRequest, NextResponse} from "next/server";
import {anketaDogovor} from "@/server/actions/anketa_dogovor";

export async function GET() {
    const response = await anketaDogovor.getAnketaDogovorTrue();
    const replace = (_: string, value: any) => {
        return typeof value === "bigint"? value.toString() : value;
    };

    return NextResponse.json(JSON.stringify(response, replace));
}