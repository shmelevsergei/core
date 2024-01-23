import {NextRequest, NextResponse} from "next/server";
import {anketaDogovor} from "@/actions/anketa_dogovor";

export async function GET(res: NextResponse, req: NextRequest) {
    const response = await anketaDogovor.getAnketaDogovorTrue();
    const replace = (_: string, value: any) => {
        return typeof value === "bigint"? value.toString() : value;
    };

    return NextResponse.json(JSON.stringify(response, replace));
}