import {NextRequest, NextResponse} from "next/server";
import {anketaBase} from "@/actions/anketa_base";

export async function GET(res: NextResponse, req: NextRequest) {
    const response = await anketaBase.getAnketaBaseEnabledCurrentMonth();
        const replace = (_: string, value: any) => {
            return typeof value === "bigint"? value.toString() : value;
        };

    return NextResponse.json(JSON.stringify(response, replace));
}