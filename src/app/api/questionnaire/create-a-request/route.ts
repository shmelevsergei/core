import {questionnaire} from "@/server/actions/portal_db/questionnaire";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const requestBody = await req.json();
        questionnaire.createQuestionnaire(requestBody);

        return Response.json(requestBody)
    } catch (error) {
        console.error('Error processing request:', error);
        return Response.json(res);
    }
}
